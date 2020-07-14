# vuessr

> 服务端渲染主要通过node层请求后台业务数据，结合node层的视图模板，生成字符串html，返回给浏览器。
SEO方面胜过纯vue应用，且首屏加载速度提升。
## 

# 项目打包说明
服务端渲染需两次打包，一个是ClientBundle,一个是ServerBundle。所以项目在存在服务端入口和客户端入口，webpack分别根据入口文件进行构建，ServerBundle进行render渲染后生成HTML给到服务器，然后服务器再加载业务交互方面的ClientBundle。

# 服务端代码打包
npm run build:server

# 客户端代码打包
npm run build:client

# 启动node服务
node server.js

