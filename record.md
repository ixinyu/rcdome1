视频：https://www.bilibili.com/video/BV1fw411d7R5?p=25

开发环境跨域代理：
在 package.json 文件中添加 "proxy": "http://test.kemanla.com/" //代理地址

## 该项目的思路分析

1. index.js 将 react 组件内容渲染到 html 中
2. App.js 渲染路由组件
3. router/Index.js 路由组件
   根据状态判断进入 login 组件还是 AppMain 组件(路由组件：除 login 之外的所有路由)
4. components/AppMain
   负责管理系统的布局，和主要路由

```
<Redirect from='/' to="/home" exact />
exact 全匹配
```

5. 动态生成页面路由
   参考：router 文件下的内容

6. 使用 antd 框架配合布局
   安装：npm i antd
   引入：在 App.css 中引入样式 @import '~antd/dist/antd.css';
   接下来布局头部和侧边栏

7. 动态生成侧边栏和页面路由
   侧边栏： components/SideMenu.js

自此项目基本结构创建完毕

## 下面是技术知识

## 模块 css

如果想让组件页面对该组件生效不影响全局，需要用
xx.module.css

```
import style from './Child.module.css'

export default function Child(){
  return(
    <div>
      <p className={style.item}>childs 页面</p>
    </div>
  )
}
```

## 函数式组件路由注意点

/\*\*

- <Route path="/login" component={Login} />
- Route 中 component 展示组件的,可以直接使用 props
- 如果用 render 展示组件的，需要使用 withRouter 包裹
  \*/

## jsonServer

https://www.npmjs.com/package/json-server
0 编码实现 REST API
是基于 node 封装的 json 框架
使用方式：

```
1.安装：npm install -g json-server
2.创建 json 文件，xx.json
3.启动， json-server --watch xx.json 或者可以指定端口 json-server --watch db.json --port 8000  (需要在json文件所在目录启动才可以监听到数据改变)
案例在views/home/Home.js 文件

```
