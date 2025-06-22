# 部署指南

## 相对路径部署优势

本项目使用相对路径部署，具有以下优势：

1. **灵活性**：可以部署在任何子目录下
2. **兼容性**：支持各种服务器环境
3. **可移植性**：无需修改配置即可迁移

## 部署方式

### 方式1：根目录部署
```
https://your-domain.com/
├── index.html
├── assets/
└── templates/
```

### 方式2：子目录部署
```
https://your-domain.com/myapp/
├── index.html
├── assets/
└── templates/
```

## 问题诊断

如果模板文件无法加载（500错误），请按以下步骤检查：

### 1. 检查文件结构

确保 `dist` 目录包含以下结构：
```
dist/
├── index.html
├── favicon.ico
├── assets/
│   ├── main-*.js
│   └── index-*.css
└── templates/
    ├── README.md
    ├── business.json
    ├── modern.json
    └── ... (其他模板文件)
```

### 2. 检查服务器配置

#### Apache 服务器

1. 确保 `.htaccess` 文件在网站根目录
2. 启用必要的模块：
   ```bash
   sudo a2enmod rewrite
   sudo a2enmod headers
   sudo systemctl restart apache2
   ```

#### Nginx 服务器

使用提供的 `nginx.conf.example` 配置，注意修改：
- `server_name` 为你的域名
- `root` 路径为你的 `dist` 目录路径

### 3. 测试模板文件访问

在浏览器中直接访问：
- `https://your-domain.com/templates/` (根目录部署)
- `https://your-domain.com/myapp/templates/` (子目录部署)
- `https://your-domain.com/templates/business.json`
- `https://your-domain.com/myapp/templates/business.json`

应该能看到：
- 目录列表（如果启用了目录浏览）
- JSON 文件内容

### 4. 检查控制台错误

打开浏览器开发者工具，查看：
- Network 标签页中的请求状态
- Console 标签页中的错误信息
- 注意请求的URL是否正确（应该是相对路径）

## 常见问题解决

### 问题1: 500 Internal Server Error

**可能原因：**
- 服务器不支持 JSON MIME 类型
- 文件权限问题
- 路径配置错误

**解决方案：**
1. 检查服务器错误日志
2. 确保 JSON 文件有正确的 MIME 类型
3. 检查文件权限（644 或 755）

### 问题2: 404 Not Found

**可能原因：**
- 文件路径错误
- 服务器配置问题
- 相对路径计算错误

**解决方案：**
1. 确认文件确实存在于服务器上
2. 检查服务器配置中的路径设置
3. 尝试直接访问文件URL
4. 检查浏览器控制台中的实际请求URL

### 问题3: CORS 错误

**解决方案：**
在服务器配置中添加 CORS 头：
```apache
Header set Access-Control-Allow-Origin "*"
```

### 问题4: 相对路径计算错误

**解决方案：**
1. 检查 `TemplateManager.js` 中的路径计算逻辑
2. 确保部署在正确的目录结构下
3. 查看浏览器控制台的调试信息

## 调试步骤

1. **构建项目：**
   ```bash
   npm run build
   ```

2. **检查 dist 目录：**
   ```bash
   ls -la dist/templates/
   ```

3. **上传到服务器：**
   - 根目录部署：将 `dist` 目录内容上传到网站根目录
   - 子目录部署：将 `dist` 目录内容上传到子目录

4. **测试访问：**
   - 访问主页面
   - 直接访问模板文件
   - 查看浏览器控制台
   - 检查Network标签页中的请求URL

5. **检查服务器日志：**
   - Apache: `/var/log/apache2/error.log`
   - Nginx: `/var/log/nginx/error.log`

## 路径检测逻辑

项目会自动检测当前页面的路径并计算正确的相对路径：

- 根目录：`./templates/`
- 一级子目录：`../templates/`
- 二级子目录：`../../templates/`
- 以此类推...

## 备用方案

如果服务器配置有问题，可以：

1. **使用回退机制：** 代码会自动回退到从 `src/config/templates` 加载
2. **内联模板：** 将模板数据直接嵌入到 JavaScript 中
3. **使用 CDN：** 将模板文件放在 CDN 上

## 联系支持

如果问题仍然存在，请提供：
- 服务器类型和版本
- 错误日志
- 浏览器控制台截图
- 网络请求截图
- 部署的URL结构 