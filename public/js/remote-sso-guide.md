# 远程服务器使用SSO SDK配置指南

## 概述

当其他服务器需要集成我们的SSO系统时，需要进行特殊的配置以支持跨域访问。本指南将详细介绍如何配置和使用。

## 方案一：直接跨域调用（推荐）

### 1. 后端CORS配置

我们的SSO服务器已经配置了CORS支持，但可能需要更精确的配置：

```javascript
// 在 server/src/index.js 中更新CORS配置
const corsOptions = {
  origin: [
    'http://localhost:3000',           // 本地开发
    'http://localhost:8080',           // 其他本地端口
    'https://your-domain.com',         // 生产域名
    'https://*.your-domain.com',       // 子域名
    'https://client-app.com'           // 客户端应用域名
  ],
  credentials: true,                   // 允许携带凭证
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

app.use(cors(corsOptions));
```

### 2. 客户端SDK配置

在远程服务器上使用SSO SDK时，需要指定正确的API地址：

```html
<!DOCTYPE html>
<html>
<head>
    <title>远程SSO集成示例</title>
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

### 3. 完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>远程SSO集成</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .status {
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            font-weight: 600;
        }
        
        .status.success { background: #c6f6d5; color: #22543d; }
        .status.error { background: #fed7d7; color: #742a2a; }
        .status.info { background: #bee3f8; color: #2a4365; }
        
        .btn {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            margin: 5px;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔐 远程SSO集成示例</h1>
        
        <div id="status" class="status info">
            正在连接SSO服务器...
        </div>
        
        <div id="user-info" style="display: none;">
            <h3>用户信息</h3>
            <div id="user-details"></div>
        </div>
        
        <div style="text-align: center; margin: 20px 0;">
            <button class="btn" onclick="checkLogin()">检查登录状态</button>
            <button class="btn" onclick="getUserInfo()">获取用户信息</button>
            <button class="btn" onclick="checkProjectAccess(1)">检查项目权限</button>
            <button class="btn" onclick="logout()">登出</button>
        </div>
        
        <div id="log" style="background: #2d3748; color: #e2e8f0; padding: 15px; border-radius: 6px; font-family: monospace; max-height: 200px; overflow-y: auto;">
            <div>事件日志...</div>
        </div>
    </div>

    <!-- 引入远程SSO SDK -->
    <script src="https://your-sso-server.com/js/sso-sdk.js"></script>
    <script>
        // 配置远程SSO SDK
        const ssoConfig = {
            apiBase: 'https://your-sso-server.com/api',
            loginUrl: 'https://your-sso-server.com/login',
            portalUrl: 'https://your-sso-server.com/portal',
            checkInterval: 30000,
            autoRedirect: true,
            debug: true
        };
        
        // 创建SDK实例
        const sso = new SSOSDK(ssoConfig);
        
        // 事件日志
        let eventLog = [];
        
        // 监听所有SSO事件
        Object.values(SSO_EVENTS).forEach(eventName => {
            sso.on(eventName, (data) => {
                const logEntry = `[${new Date().toLocaleTimeString()}] ${eventName}: ${JSON.stringify(data)}`;
                eventLog.push(logEntry);
                updateLog();
                console.log(logEntry);
            });
        });
        
        function updateLog() {
            const logDiv = document.getElementById('log');
            logDiv.innerHTML = eventLog.slice(-10).join('<br>');
        }
        
        async function checkLogin() {
            const statusDiv = document.getElementById('status');
            try {
                const isLoggedIn = await sso.checkLoginStatus();
                if (isLoggedIn) {
                    statusDiv.className = 'status success';
                    statusDiv.textContent = '✅ 已连接到SSO服务器并登录';
                } else {
                    statusDiv.className = 'status error';
                    statusDiv.textContent = '❌ 未登录，将跳转到SSO登录页';
                }
            } catch (error) {
                statusDiv.className = 'status error';
                statusDiv.textContent = `❌ 连接失败: ${error.message}`;
            }
        }
        
        function getUserInfo() {
            const userInfo = sso.getUserInfo();
            const userInfoDiv = document.getElementById('user-info');
            const detailsDiv = document.getElementById('user-details');
            
            if (userInfo) {
                userInfoDiv.style.display = 'block';
                detailsDiv.innerHTML = `
                    <p><strong>ID:</strong> ${userInfo.id}</p>
                    <p><strong>邮箱:</strong> ${userInfo.email}</p>
                    <p><strong>姓名:</strong> ${userInfo.name || '未设置'}</p>
                    <p><strong>角色:</strong> ${userInfo.role}</p>
                `;
            } else {
                alert('无法获取用户信息，请先登录');
            }
        }
        
        async function checkProjectAccess(projectId) {
            try {
                const hasAccess = await sso.checkProjectAccess(projectId);
                if (hasAccess) {
                    alert(`✅ 项目 ${projectId} 访问权限已授予`);
                } else {
                    alert(`❌ 项目 ${projectId} 访问权限被拒绝`);
                }
            } catch (error) {
                alert(`❌ 检查失败: ${error.message}`);
            }
        }
        
        async function logout() {
            if (confirm('确定要登出吗？')) {
                await sso.logout();
                alert('已登出');
                location.reload();
            }
        }
        
        // 初始化
        sso.init().then(() => {
            console.log('远程SSO SDK初始化成功');
            checkLogin();
        }).catch(error => {
            console.error('远程SSO SDK初始化失败:', error);
            document.getElementById('status').className = 'status error';
            document.getElementById('status').textContent = `初始化失败: ${error.message}`;
        });
    </script>
</body>
</html>
```

## 方案二：代理服务器转发

如果直接跨域有问题，可以通过代理服务器转发请求：

### 1. Nginx代理配置

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

### 2. 客户端配置

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

## 方案三：iframe嵌入

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

## 测试验证

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

通过以上配置和示例，您可以在远程服务器上成功集成和使用我们的SSO SDK。 