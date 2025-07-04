# 远程SSO调用完整指南

## 概述

本指南详细介绍如何在远程服务器上集成和使用我们的SSO SDK，实现跨域的单点登录功能。

## 目录

1. [配置要求](#配置要求)
2. [集成方案](#集成方案)
3. [测试验证](#测试验证)
4. [常见问题](#常见问题)
5. [安全考虑](#安全考虑)
6. [最佳实践](#最佳实践)

## 配置要求

### 后端配置

#### 1. CORS配置

确保SSO服务器已正确配置CORS支持：

```javascript
// 在 server/src/index.js 中
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:3000',           // 本地开发
      'http://localhost:3001',           // 本地开发
      'http://localhost:8080',           // 其他本地端口
      'https://your-domain.com',         // 生产域名
      'https://*.your-domain.com',       // 子域名
      'https://client-app.com',          // 客户端应用域名
      'https://*.client-app.com'         // 客户端子域名
    ];
    
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      if (process.env.NODE_ENV === 'development') {
        callback(null, true);
      } else {
        console.log('CORS blocked origin:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  credentials: true,                     // 允许携带凭证
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'X-Requested-With',
    'Accept',
    'Origin',
    'Cache-Control',
    'X-File-Name'
  ],
  exposedHeaders: ['Content-Length', 'X-Requested-With'],
  maxAge: 86400
};

app.use(cors(corsOptions));
```

#### 2. 环境变量配置

```bash
# .env 文件
NODE_ENV=production
PORT=3001
JWT_SECRET=your-secret-key
DATABASE_URL=your-database-url
```

### 客户端配置

#### 1. 基本配置

```javascript
const ssoConfig = {
    apiBase: 'https://your-sso-server.com/api',    // SSO服务器API地址
    loginUrl: 'https://your-sso-server.com/login', // SSO登录页面
    portalUrl: 'https://your-sso-server.com/portal', // SSO门户页面
    tokenKey: 'jwt_token',                         // localStorage中的token键名
    checkInterval: 30000,                          // 检查间隔(毫秒)
    autoRedirect: true,                            // 是否自动跳转
    debug: false                                   // 生产环境关闭调试模式
};
```

#### 2. 开发环境配置

```javascript
const ssoConfig = {
    apiBase: 'http://localhost:3001/api',
    loginUrl: 'http://localhost:3001/login',
    portalUrl: 'http://localhost:3001/portal',
    checkInterval: 30000,
    autoRedirect: true,
    debug: true                                    // 开发环境启用调试模式
};
```

## 集成方案

### 方案一：直接跨域调用（推荐）

#### 优点
- 配置简单
- 性能好
- 维护成本低

#### 缺点
- 需要正确配置CORS
- 可能存在跨域限制

#### 实现步骤

1. **引入SDK**
```html
<script src="https://your-sso-server.com/js/sso-sdk.js"></script>
```

2. **配置SDK**
```javascript
const sso = new SSOSDK({
    apiBase: 'https://your-sso-server.com/api',
    loginUrl: 'https://your-sso-server.com/login',
    portalUrl: 'https://your-sso-server.com/portal',
    checkInterval: 30000,
    autoRedirect: true,
    debug: false
});
```

3. **初始化SDK**
```javascript
sso.init().then(() => {
    console.log('SSO SDK初始化成功');
    checkLoginStatus();
}).catch(error => {
    console.error('SSO SDK初始化失败:', error);
});
```

4. **使用功能**
```javascript
// 检查登录状态
async function checkLoginStatus() {
    const isLoggedIn = await sso.checkLoginStatus();
    if (isLoggedIn) {
        console.log('用户已登录');
        const userInfo = sso.getUserInfo();
        displayUserInfo(userInfo);
    } else {
        console.log('用户未登录');
    }
}

// 获取用户信息
function displayUserInfo(userInfo) {
    console.log('用户信息:', userInfo);
    // 在页面上显示用户信息
}

// 检查项目权限
async function checkProjectAccess(projectId) {
    const hasAccess = await sso.checkProjectAccess(projectId);
    if (hasAccess) {
        console.log('有访问权限');
        // 显示项目内容
    } else {
        console.log('无访问权限');
        // 显示权限不足提示
    }
}

// 登出
async function logout() {
    await sso.logout();
    console.log('用户已登出');
}
```

### 方案二：代理服务器转发

#### 优点
- 避免跨域问题
- 更好的安全性
- 可以添加额外的安全层

#### 缺点
- 配置复杂
- 增加服务器负载
- 维护成本高

#### 实现步骤

1. **Nginx代理配置**
```nginx
server {
    listen 80;
    server_name client-app.com;
    
    # SSO API代理
    location /sso-api/ {
        proxy_pass https://your-sso-server.com/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # 处理OPTIONS预检请求
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
            add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization, X-Requested-With';
            add_header 'Access-Control-Max-Age' 86400;
            return 204;
        }
    }
    
    # SSO登录页面代理
    location /sso-login {
        proxy_pass https://your-sso-server.com/login;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # SSO门户页面代理
    location /sso-portal {
        proxy_pass https://your-sso-server.com/portal;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

2. **客户端配置**
```javascript
const sso = new SSOSDK({
    apiBase: '/sso-api',           // 通过代理访问
    loginUrl: '/sso-login',        // 通过代理访问
    portalUrl: '/sso-portal',      // 通过代理访问
    checkInterval: 30000,
    autoRedirect: true,
    debug: false
});
```

### 方案三：iframe嵌入

#### 优点
- 实现简单
- 无需处理跨域
- 用户体验统一

#### 缺点
- 功能受限
- 安全性较低
- 用户体验可能不佳

#### 实现步骤

1. **HTML结构**
```html
<!DOCTYPE html>
<html>
<head>
    <title>SSO集成</title>
    <style>
        .sso-frame {
            width: 100%;
            height: 600px;
            border: none;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>我的应用</h1>
        
        <!-- 嵌入SSO门户页面 -->
        <iframe 
            src="https://your-sso-server.com/portal" 
            class="sso-frame"
            allow="camera; microphone; geolocation">
        </iframe>
    </div>
    
    <script>
        // 监听iframe消息
        window.addEventListener('message', function(event) {
            // 验证消息来源
            if (event.origin !== 'https://your-sso-server.com') return;
            
            // 处理SSO事件
            switch(event.data.type) {
                case 'SSO_LOGIN_SUCCESS':
                    console.log('SSO登录成功:', event.data.userInfo);
                    handleLoginSuccess(event.data.userInfo);
                    break;
                    
                case 'SSO_LOGOUT':
                    console.log('SSO登出');
                    handleLogout();
                    break;
                    
                case 'SSO_PROJECT_ACCESS':
                    console.log('项目访问:', event.data.projectId);
                    handleProjectAccess(event.data.projectId);
                    break;
            }
        });
        
        function handleLoginSuccess(userInfo) {
            // 处理登录成功
            console.log('用户登录成功:', userInfo);
        }
        
        function handleLogout() {
            // 处理登出
            console.log('用户已登出');
        }
        
        function handleProjectAccess(projectId) {
            // 处理项目访问
            console.log('访问项目:', projectId);
        }
    </script>
</body>
</html>
```

## 测试验证

### 1. 连接测试

```javascript
// 测试SSO服务器连接
async function testConnection() {
    try {
        const response = await fetch('https://your-sso-server.com/api/users/me', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            console.log('✅ SSO服务器连接成功');
            return true;
        } else {
            console.log('❌ SSO服务器连接失败:', response.status);
            return false;
        }
    } catch (error) {
        console.error('❌ 连接错误:', error);
        return false;
    }
}
```

### 2. SDK功能测试

```javascript
// 测试SDK功能
async function testSDK() {
    try {
        // 初始化SDK
        await sso.init();
        console.log('✅ SDK初始化成功');
        
        // 检查登录状态
        const isLoggedIn = await sso.checkLoginStatus();
        console.log('登录状态:', isLoggedIn ? '已登录' : '未登录');
        
        // 获取用户信息
        const userInfo = sso.getUserInfo();
        if (userInfo) {
            console.log('✅ 用户信息获取成功:', userInfo);
        } else {
            console.log('⚠️ 无用户信息');
        }
        
        // 测试项目权限
        const hasAccess = await sso.checkProjectAccess(1);
        console.log('项目权限:', hasAccess ? '有权限' : '无权限');
        
        return true;
    } catch (error) {
        console.error('❌ SDK测试失败:', error);
        return false;
    }
}
```

### 3. 完整测试流程

```javascript
// 完整测试流程
async function runFullTest() {
    console.log('开始SSO集成测试...');
    
    // 1. 测试连接
    const connectionOk = await testConnection();
    if (!connectionOk) {
        console.error('连接测试失败，停止测试');
        return;
    }
    
    // 2. 测试SDK
    const sdkOk = await testSDK();
    if (!sdkOk) {
        console.error('SDK测试失败');
        return;
    }
    
    // 3. 测试事件监听
    testEventListeners();
    
    console.log('✅ 所有测试通过');
}

// 测试事件监听
function testEventListeners() {
    sso.on(SSO_EVENTS.USER_INFO_LOADED, (data) => {
        console.log('✅ 用户信息加载事件触发:', data);
    });
    
    sso.on(SSO_EVENTS.TOKEN_EXPIRED, (data) => {
        console.log('⚠️ Token过期事件触发:', data);
    });
    
    sso.on(SSO_EVENTS.LOGOUT, (data) => {
        console.log('✅ 登出事件触发:', data);
    });
}
```

## 常见问题

### 1. CORS错误

**问题描述：**
```
Access to fetch at 'https://your-sso-server.com/api/users/me' from origin 'https://client-app.com' has been blocked by CORS policy
```

**解决方案：**
1. 检查SSO服务器的CORS配置
2. 确保客户端域名在允许列表中
3. 检查credentials设置

```javascript
// 正确的CORS配置
const corsOptions = {
  origin: ['https://client-app.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};
```

### 2. 网络超时

**问题描述：**
```
Failed to fetch: timeout
```

**解决方案：**
1. 检查网络连接
2. 增加超时时间
3. 使用代理服务器

```javascript
// 增加超时时间
const sso = new SSOSDK({
    apiBase: 'https://your-sso-server.com/api',
    checkInterval: 60000, // 增加检查间隔
    debug: true
});
```

### 3. Token无效

**问题描述：**
```
401 Unauthorized
```

**解决方案：**
1. 检查token是否正确传递
2. 确认token未过期
3. 检查JWT密钥配置

```javascript
// 检查token
const token = localStorage.getItem('jwt_token');
if (token) {
    console.log('Token存在:', token.substring(0, 20) + '...');
} else {
    console.log('Token不存在');
}
```

### 4. 跨域Cookie问题

**问题描述：**
```
Cookie not sent with request
```

**解决方案：**
1. 确保CORS配置中启用了credentials
2. 客户端请求包含credentials
3. 检查SameSite设置

```javascript
// 正确的请求配置
fetch('https://your-sso-server.com/api/users/me', {
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    }
});
```

## 安全考虑

### 1. HTTPS要求

- 生产环境必须使用HTTPS
- 确保所有API调用都通过HTTPS进行
- 配置正确的SSL证书

### 2. CORS安全

- 精确配置允许的域名
- 避免使用通配符 `*`
- 定期审查允许的域名列表

### 3. Token安全

- Token存储在localStorage中，注意XSS攻击
- 考虑使用httpOnly cookie存储token
- 定期刷新token
- 设置合理的过期时间

### 4. 错误处理

- 不要在前端暴露敏感信息
- 提供友好的错误提示
- 记录错误日志用于调试

## 最佳实践

### 1. 配置管理

```javascript
// 环境配置
const config = {
    development: {
        apiBase: 'http://localhost:3001/api',
        loginUrl: 'http://localhost:3001/login',
        portalUrl: 'http://localhost:3001/portal',
        debug: true
    },
    production: {
        apiBase: 'https://your-sso-server.com/api',
        loginUrl: 'https://your-sso-server.com/login',
        portalUrl: 'https://your-sso-server.com/portal',
        debug: false
    }
};

const env = process.env.NODE_ENV || 'development';
const ssoConfig = config[env];

const sso = new SSOSDK(ssoConfig);
```

### 2. 错误处理

```javascript
// 统一的错误处理
function handleSSOError(error) {
    console.error('SSO错误:', error);
    
    switch (error.message) {
        case '认证失败':
            // 跳转到登录页
            sso.redirectToLogin();
            break;
            
        case 'Token过期':
            // 清除本地token
            localStorage.removeItem('jwt_token');
            // 跳转到登录页
            sso.redirectToLogin();
            break;
            
        default:
            // 显示通用错误提示
            alert('系统错误，请稍后重试');
    }
}

// 使用错误处理
sso.init().catch(handleSSOError);
```

### 3. 事件监听

```javascript
// 完整的事件监听
function setupEventListeners() {
    // 用户信息加载
    sso.on(SSO_EVENTS.USER_INFO_LOADED, (data) => {
        console.log('用户信息已加载:', data.userInfo);
        updateUserInterface(data.userInfo);
    });
    
    // Token过期
    sso.on(SSO_EVENTS.TOKEN_EXPIRED, (data) => {
        console.log('Token已过期');
        showExpiredMessage();
        sso.redirectToLogin();
    });
    
    // 登出
    sso.on(SSO_EVENTS.LOGOUT, (data) => {
        console.log('用户已登出');
        clearUserInterface();
    });
    
    // 项目权限授予
    sso.on(SSO_EVENTS.PROJECT_ACCESS_GRANTED, (data) => {
        console.log('项目访问权限已授予:', data.projectId);
        enableProjectFeatures(data.projectId);
    });
    
    // 项目权限拒绝
    sso.on(SSO_EVENTS.PROJECT_ACCESS_DENIED, (data) => {
        console.log('项目访问权限被拒绝:', data.projectId);
        disableProjectFeatures(data.projectId);
    });
}

// 初始化时设置事件监听
sso.init().then(() => {
    setupEventListeners();
}).catch(handleSSOError);
```

### 4. 性能优化

```javascript
// 性能优化配置
const sso = new SSOSDK({
    apiBase: 'https://your-sso-server.com/api',
    checkInterval: 60000, // 60秒检查一次，减少请求频率
    autoRedirect: true,
    debug: false // 生产环境关闭调试模式
});

// 缓存用户信息
let cachedUserInfo = null;

function getUserInfo() {
    if (cachedUserInfo) {
        return cachedUserInfo;
    }
    
    cachedUserInfo = sso.getUserInfo();
    return cachedUserInfo;
}

// 定期刷新缓存
setInterval(() => {
    cachedUserInfo = null;
}, 300000); // 5分钟刷新一次缓存
```

## 总结

通过以上配置和最佳实践，您可以在远程服务器上成功集成和使用我们的SSO SDK。记住：

1. **正确配置CORS** - 确保跨域访问正常工作
2. **使用HTTPS** - 生产环境必须使用HTTPS
3. **处理错误** - 提供完善的错误处理机制
4. **监听事件** - 充分利用事件系统
5. **安全考虑** - 注意Token安全和CORS配置
6. **性能优化** - 合理配置检查间隔和缓存

如有问题，请参考测试页面或联系技术支持。 