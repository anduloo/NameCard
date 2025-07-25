# 用户管理系统开发规划

本文档概述了为 `namecard-fresh` 工作区添加统一用户管理系统的开发步骤。

---

## 阶段一：后端基础建设 (约 1-2 天)

**目标：** 搭建一个可以运行的、连接到数据库的后端服务器。

1.  **环境搭建**:
    *   在项目根目录创建 `server` 文件夹。
    *   初始化 Node.js 项目 (`package.json`)。
    *   安装核心依赖：`express`, `cors`, `dotenv`。
2.  **创建基础服务器**:
    *   在 `server/src` 下创建 `index.js`。
    *   编写基础 Express 服务器，确保能成功运行。
3.  **数据库集成 (Prisma)**:
    *   安装 Prisma CLI 和 Client。
    *   初始化 Prisma (`prisma/schema.prisma`, `.env`)。
    *   定义 `User`, `Project`, `ProjectAssignment` 数据模型。
    *   在 `.env` 中配置 `DATABASE_URL`。
    *   执行数据库迁移，生成表结构。

**交付成果：** 一个可启动的 Express 服务器，数据库中已创建所需表。

---

## 阶段二：核心认证功能 (约 2-3 天)

**目标：** 实现用户的注册和登录功能。

1.  **安装依赖**: `bcryptjs`, `jsonwebtoken`。
2.  **开发注册接口 (`POST /api/auth/register`)**:
    *   接收并验证输入。
    *   检查邮箱唯一性。
    *   对密码进行哈希加密。
    *   存储新用户。
3.  **开发登录接口 (`POST /api/auth/login`)**:
    *   接收并验证输入。
    *   查找用户，比较哈希密码。
    *   生成 JWT 并返回给客户端。

**交付成果：** 可通过 API 工具成功注册和登录，并获取 JWT Token。

---

## 阶段三：权限控制与路由保护 (约 2 天)

**目标：** 实现 API 的访问控制。

1.  **创建认证中间件 (`authMiddleware.js`)**:
    *   检查请求头中的 `Bearer Token`。
    *   验证 Token 有效性，解析用户信息并附加到请求对象上。
    *   无效则返回 `401 Unauthorized`。
2.  **创建受保护的测试接口 (`GET /api/user/me`)**:
    *   应用认证中间件，返回当前登录用户的个人信息。
3.  **开发项目和权限管理接口 (管理员权限)**:
    *   `POST /api/projects`: 创建新项目。
    *   `POST /api/users/:userId/assign-project`: 为用户分配项目权限。

**交付成果：** API 被保护，未授权请求会被拒绝。可为用户分配权限。

---

## 阶段四：前端应用集成 (约 3-4 天)

**目标：** 将客户端应用（如 `image-editor`）接入用户系统。

1.  **安装依赖**: `axios`, `vue-router`, `pinia`。
2.  **创建认证服务**: 封装对后端认证 API 的请求。
3.  **创建 Auth Store (Pinia)**: 全局管理用户登录状态、Token 和用户信息。
4.  **创建登录页面/组件**: 提供登录表单。
5.  **配置路由和导航守卫**:
    *   标记需要认证的路由。
    *   创建 `beforeEach` 全局守卫，检查认证状态，未登录则重定向到登录页。

**交付成果：** 客户端应用成为受保护应用，需登录才能访问。

---

## 阶段五：高级功能实现 (约 2-3 天)

**目标：** 增加微信扫码登录和对静态页面的支持。

1.  **实现微信登录**:
    *   **后端**: 开发获取微信二维码链接的接口和处理微信回调的接口。
    *   **前端**: 在登录页面集成微信登录流程。
2.  **支持静态 HTML 页面**:
    *   **后端**: 创建通用的权限检查接口。
    *   **前端**: 编写通用的 `auth.js` 脚本，在页面加载时检查权限并按需重定向。

**交付成果：** 用户可通过微信扫码登录。静态页面可被权限系统保护。

---

## 阶段六：管理后台与部署 (约 2-4 天)

**目标：** 提供后台管理界面并准备项目部署。

1.  **开发简易管理后台**:
    *   提供用户列表、项目管理、权限分配等功能。
2.  **准备部署**:
    *   编写部署文档。
    *   使用 Docker 容器化后端服务（可选）。
    *   配置 Nginx 反向代理（宝塔面板可简化此操作）。

**交付成果：** 一套完整的、可部署的用户权限管理系统，并配有后台管理功能。
