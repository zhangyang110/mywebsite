## mywebsite

### 架构
- 整体架构
    - react 框架 create-react-app脚手架
    - Node 服务端  express 框架 --搭建server
    - mongodb 数据库
    - Robo 3T  数据库界面（展示数据库内容的客户端）
### 项目结构说明
- src 目录下为前段所有代码

    - common 为公共工具或者变量
    - component 为路由各个组件
    - Router 为前端router跳转配置
    - Actions 为redux 的所有action
    - Reducers 为redux 的所有reducer


- service 为后台服务端代码
    - models 为服务端连接数据库mogodb的代码  以及生成数据库格式的代码
    - service.js是 服务端server --也就是node-express 搭建服务的  用来支持web

### 要点说明
- 我的web开启端口为：8088 端口 后台服务在 ：3000端口  所以有了app.all （） 的一段代码
- 图片上传用了express的multer插件
- node中的/savedImg/*.*  接口是为了 让前端img src 访问的
- models 中的代码是最基本的连接mongodb数据库的，可以自己搜下。很简单。
- 我的列表数据是放在redux 中的  当列表组件加载的时候会获取一次 列表数据 ，每次上传图片后也会重新获取一次列表数据保证列表的最新状态
- redux中的num 是一开始用来调试redux 的东西。

###开启项目
- 前提
    - 电脑安装 node环境/mongodb/数据库界面端（robot 3）
    - git clone https://github.com/zhangyang110/mywebsite.git
    - yarn install   安装依赖
    - yarn run start
    - sudo mongod 开启服务器 默认端口27017  （打不开的自行百度）
    - node service 开启服务
    - 进入robot 3 创建imooc 数据库
    - 以上  前后联调
### 联系我
-  demo写的不规范
- 如果，额。。qq：：：7981994200
- 以上～
