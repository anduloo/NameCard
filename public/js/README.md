# SSO SDK 使用文档

## 概述

SSO SDK 是一个轻量级的JavaScript库，用于在纯静态HTML页面中集成单点登录(SSO)功能。它提供了完整的用户认证、权限管理和会话管理功能。

## 功能特性

- ✅ **自动登录状态检查** - 定期检查用户登录状态
- ✅ **用户信息管理** - 获取和管理用户信息
- ✅ **项目权限验证** - 检查用户对特定项目的访问权限
- ✅ **事件系统** - 监听SSO相关事件
- ✅ **自动跳转** - 未登录时自动跳转到登录页
- ✅ **会话管理** - 自动处理token过期和刷新
- ✅ **调试模式** - 支持详细的调试日志
- ✅ **响应式设计** - 支持移动端和桌面端
- ✅ **远程调用支持** - 支持跨域和远程服务器调用

## 快速开始

### 1. 引入SDK

```html
<!-- 在HTML页面中引入SDK -->
<script src="/js/sso-sdk.js"></script>
```

### 2. 基本使用

```html
<script>
    // 启用自动初始化
    window.SSO_AUTO_INIT = true;
    
    // 或者手动初始化
    // sso.init();
</script>
```

### 3. 检查登录状态

```javascript
// 检查用户是否已登录
const isLoggedIn = await sso.checkLoginStatus();
if (isLoggedIn) {
    console.log('用户已登录');
} else {
    console.log('用户未登录');
}
```

### 4. 获取用户信息

```javascript
// 获取当前用户信息
const userInfo = sso.getUserInfo();
console.log('用户信息:', userInfo);

// 刷新用户信息
await sso.loadUserInfo();
```

## 远程调用配置

### 方案一：直接跨域调用（推荐）

#### 1. 后端CORS配置

确保SSO服务器已正确配置CORS：

```javascript
// 在SSO服务器中配置CORS
const corsOptions = {
  origin: [
    'http://localhost:3000',           // 本地开发
    'https://your-domain.com',         // 生产域名
    'https://client-app.com'           // 客户端应用域名
  ],
  credentials: true,                   // 允许携带凭证
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};
```

#### 2. 客户端配置

```html
<!DOCTYPE html>
<html>
<head>
    <title>远程SSO集成</title>
    <script src="https://your-sso-server.com/js/sso-sdk.js"></script>
</head>
<body>
    <script>
        // 创建自定义配置的SDK实例
        const sso = new SSOSDK({
            apiBase: 'https://your-sso-server.com/api',    // SSO服务器API地址
            loginUrl: 'https://your-sso-server.com/login', // SSO登录页面
            portalUrl: 'https://your-sso-server.com/portal', // SSO门户页面
            checkInterval: 30000,                          // 检查间隔
            autoRedirect: true,                            // 自动跳转
            debug: true                                    // 调试模式
        });
        
        // 初始化SDK
        sso.init().then(() => {
            console.log('远程SSO SDK初始化成功');
        });
    </script>
</body>
</html>
```

### 方案二：代理服务器转发

如果直接跨域有问题，可以通过代理服务器转发请求：

#### 1. Nginx代理配置

```nginx
# 在客户端服务器的Nginx配置中添加
server {
    listen 80;
    server_name client-app.com;
    
    location /sso-api/ {
        proxy_pass https://your-sso-server.com/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    location /sso-login {
        proxy_pass https://your-sso-server.com/login;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### 2. 客户端配置

```javascript
const sso = new SSOSDK({
    apiBase: '/sso-api',           // 通过代理访问
    loginUrl: '/sso-login',        // 通过代理访问
    portalUrl: 'https://your-sso-server.com/portal',
    checkInterval: 30000,
    autoRedirect: true,
    debug: true
});
```

### 方案三：iframe嵌入

对于简单的集成需求，可以通过iframe嵌入SSO页面：

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
        }
    </style>
</head>
<body>
    <h1>我的应用</h1>
    
    <!-- 嵌入SSO门户页面 -->
    <iframe 
        src="https://your-sso-server.com/portal" 
        class="sso-frame"
        allow="camera; microphone; geolocation">
    </iframe>
    
    <script>
        // 监听iframe消息
        window.addEventListener('message', function(event) {
            if (event.origin !== 'https://your-sso-server.com') return;
            
            if (event.data.type === 'SSO_LOGIN_SUCCESS') {
                console.log('SSO登录成功:', event.data.userInfo);
            }
        });
    </script>
</body>
</html>
```

## 详细API文档

### 配置选项

```javascript
const config = {
    apiBase: '/api',           // API基础路径
    loginUrl: '/login',        // 登录页面URL
    portalUrl: '/portal',      // 门户页面URL
    tokenKey: 'jwt_token',     // localStorage中的token键名
    checkInterval: 30000,      // 检查间隔(毫秒)
    autoRedirect: true,        // 是否自动跳转
    debug: false               // 是否启用调试模式
};

const sso = new SSOSDK(config);
```

### 核心方法

#### `init()`
初始化SDK，检查登录状态并加载用户信息。

```javascript
await sso.init();
```

#### `checkLoginStatus()`
检查当前登录状态。

```javascript
const isLoggedIn = await sso.checkLoginStatus();
```

#### `getUserInfo()`
获取当前用户信息。

```javascript
const userInfo = sso.getUserInfo();
// 返回: { id, email, name, role, isActive, createdAt }
```

#### `loadUserInfo()`
从服务器加载最新的用户信息。

```javascript
const userInfo = await sso.loadUserInfo();
```

#### `checkProjectAccess(projectId)`
检查用户对特定项目的访问权限。

```javascript
const hasAccess = await sso.checkProjectAccess(1);
if (hasAccess) {
    console.log('有访问权限');
} else {
    console.log('无访问权限');
}
```

#### `getUserProjects()`
获取用户可访问的项目列表。

```javascript
const projects = await sso.getUserProjects();
console.log('可访问的项目:', projects);
```

#### `logout()`
用户登出。

```javascript
await sso.logout();
```

#### `redirectToLogin()`
跳转到登录页面。

```javascript
sso.redirectToLogin();
```

#### `redirectToPortal()`
跳转到门户页面。

```javascript
sso.redirectToPortal();
```

### 事件系统

SDK提供了完整的事件系统，可以监听各种SSO相关事件：

```javascript
// 监听用户信息加载事件
sso.on(SSO_EVENTS.USER_INFO_LOADED, (data) => {
    console.log('用户信息已加载:', data.userInfo);
});

// 监听项目权限授予事件
sso.on(SSO_EVENTS.PROJECT_ACCESS_GRANTED, (data) => {
    console.log('项目访问权限已授予:', data.projectId);
});

// 监听项目权限拒绝事件
sso.on(SSO_EVENTS.PROJECT_ACCESS_DENIED, (data) => {
    console.log('项目访问权限被拒绝:', data.projectId);
});

// 监听登出事件
sso.on(SSO_EVENTS.LOGOUT, (data) => {
    console.log('用户已登出');
});

// 监听token过期事件
sso.on(SSO_EVENTS.TOKEN_EXPIRED, (data) => {
    console.log('Token已过期');
});
```

### 可用事件列表

- `SSO_EVENTS.LOGIN_SUCCESS` - 登录成功
- `SSO_EVENTS.LOGIN_FAILED` - 登录失败
- `SSO_EVENTS.LOGOUT` - 登出
- `SSO_EVENTS.TOKEN_EXPIRED` - Token过期
- `SSO_EVENTS.USER_INFO_LOADED` - 用户信息加载完成
- `SSO_EVENTS.PROJECT_ACCESS_GRANTED` - 项目访问权限授予
- `SSO_EVENTS.PROJECT_ACCESS_DENIED` - 项目访问权限拒绝

## 使用示例

### 示例1: 基本页面保护

```html
<!DOCTYPE html>
<html>
<head>
    <title>受保护的页面</title>
    <script src="/js/sso-sdk.js"></script>
</head>
<body>
    <div id="content">
        <h1>欢迎来到受保护的页面</h1>
        <div id="user-info"></div>
        <button onclick="logout()">登出</button>
    </div>

    <script>
        window.SSO_AUTO_INIT = true;
        
        // 监听用户信息加载事件
        sso.on(SSO_EVENTS.USER_INFO_LOADED, (data) => {
            const userInfo = data.userInfo;
            document.getElementById('user-info').innerHTML = `
                <p>欢迎, ${userInfo.name || userInfo.email}!</p>
            `;
        });
        
        // 监听token过期事件
        sso.on(SSO_EVENTS.TOKEN_EXPIRED, () => {
            alert('登录已过期，请重新登录');
        });
        
        async function logout() {
            await sso.logout();
        }
    </script>
</body>
</html>
```

### 示例2: 项目权限控制

```html
<!DOCTYPE html>
<html>
<head>
    <title>项目访问页面</title>
    <script src="/js/sso-sdk.js"></script>
</head>
<body>
    <div id="project-content">
        <h1>项目内容</h1>
        <div id="access-status">检查访问权限中...</div>
    </div>

    <script>
        window.SSO_AUTO_INIT = true;
        
        async function checkAccess() {
            const projectId = 1; // 项目ID
            const hasAccess = await sso.checkProjectAccess(projectId);
            
            const statusDiv = document.getElementById('access-status');
            if (hasAccess) {
                statusDiv.innerHTML = '<p style="color: green;">✅ 有访问权限</p>';
                // 显示项目内容
                loadProjectContent();
            } else {
                statusDiv.innerHTML = '<p style="color: red;">❌ 无访问权限</p>';
            }
        }
        
        function loadProjectContent() {
            // 加载项目具体内容
            console.log('加载项目内容...');
        }
        
        // 页面加载完成后检查权限
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(checkAccess, 1000);
        });
    </script>
</body>
</html>
```

### 示例3: 自定义配置

```html
<!DOCTYPE html>
<html>
<head>
    <title>自定义配置示例</title>
    <script src="/js/sso-sdk.js"></script>
</head>
<body>
    <script>
        // 创建自定义配置的SDK实例
        const customSDK = new SSOSDK({
            apiBase: 'https://your-api-domain.com/api',
            loginUrl: 'https://your-domain.com/login',
            portalUrl: 'https://your-domain.com/portal',
            checkInterval: 60000, // 60秒检查一次
            autoRedirect: false,  // 禁用自动跳转
            debug: true          // 启用调试模式
        });
        
        // 手动初始化
        customSDK.init().then(() => {
            console.log('自定义SDK初始化完成');
        });
    </script>
</body>
</html>
```

## 全局函数

SDK还提供了一些便捷的全局函数：

```javascript
// 检查登录状态
const isLoggedIn = await checkLogin();

// 获取用户信息
const userInfo = getUserInfo();

// 登出
await logout();

// 检查项目权限
const hasAccess = await checkProjectAccess(projectId);
```

## 错误处理

SDK会自动处理常见的错误情况：

- **401认证失败** - 自动清除token并跳转到登录页
- **Token过期** - 自动检测并触发过期事件
- **网络错误** - 提供详细的错误信息
- **权限不足** - 触发权限拒绝事件

## 远程调用测试验证

### 1. 基本连接测试
```javascript
// 测试API连接
fetch('https://your-sso-server.com/api/users/me', {
    credentials: 'include'
}).then(response => {
    console.log('连接成功:', response.status);
}).catch(error => {
    console.error('连接失败:', error);
});
```

### 2. SDK功能测试
```javascript
// 测试SDK功能
const sso = new SSOSDK({
    apiBase: 'https://your-sso-server.com/api',
    debug: true
});

sso.init().then(() => {
    console.log('SDK初始化成功');
    return sso.checkLoginStatus();
}).then(isLoggedIn => {
    console.log('登录状态:', isLoggedIn);
}).catch(error => {
    console.error('测试失败:', error);
});
```

## 常见问题解决

### 1. CORS错误
```
Access to fetch at 'https://your-sso-server.com/api/users/me' from origin 'https://client-app.com' has been blocked by CORS policy
```
**解决方案：** 检查后端CORS配置，确保客户端域名在允许列表中。

### 2. 网络超时
```
Failed to fetch: timeout
```
**解决方案：** 增加超时时间，检查网络连接，考虑使用代理。

### 3. Token无效
```
401 Unauthorized
```
**解决方案：** 检查token是否正确传递，确认token未过期。

### 4. 跨域Cookie问题
```
Cookie not sent with request
```
**解决方案：** 确保CORS配置中启用了credentials，客户端请求包含credentials。

## 安全注意事项

### 1. HTTPS要求
- 生产环境必须使用HTTPS
- 确保所有API调用都通过HTTPS进行

### 2. CORS配置
- 精确配置允许的域名
- 避免使用通配符 `*`
- 定期审查允许的域名列表

### 3. Token安全
- Token存储在localStorage中，注意XSS攻击
- 考虑使用httpOnly cookie存储token
- 定期刷新token

### 4. 错误处理
- 处理网络错误和超时
- 提供友好的错误提示
- 记录错误日志用于调试

## 配置检查清单

### 后端配置
- [ ] CORS配置正确
- [ ] 允许的域名列表完整
- [ ] credentials支持启用
- [ ] 预检请求处理正确

### 客户端配置
- [ ] API地址配置正确
- [ ] 登录页面地址正确
- [ ] 错误处理完善
- [ ] 调试模式配置

### 网络配置
- [ ] 防火墙规则正确
- [ ] DNS解析正常
- [ ] SSL证书有效
- [ ] 代理配置正确（如果使用）

## 测试页面

我们提供了多个测试页面来验证SSO SDK的功能：

1. **test-sso.html** - 基本功能测试页面
2. **sso-sdk-example.html** - 详细功能演示页面
3. **remote-sso-test.html** - 远程调用测试页面
4. **remote-sso-example.html** - 远程调用示例页面

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 注意事项

1. **CORS配置** - 确保API服务器配置了正确的CORS头
2. **HTTPS** - 生产环境建议使用HTTPS
3. **Token安全** - Token存储在localStorage中，注意安全性
4. **调试模式** - 生产环境请关闭调试模式
5. **域名配置** - 确保所有域名配置正确且可访问

## 更新日志

### v1.0.0
- 初始版本发布
- 支持基本的SSO功能
- 提供完整的事件系统
- 支持项目权限验证
- 支持远程调用和跨域访问

## 技术支持

如有问题或建议，请联系开发团队。 