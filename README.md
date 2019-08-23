# fitting 学习+开发曲线记录

## 创建工程
npm install -g @vue/cli 安装vuecli 3.x   
如果安装不上，报错误需要删除，用户目录下的，.npmrc或.node-gyp,.npminstal_tarball目录   
安装号vuecli 3.0后使用下面命令生成工程。   
vue create [project name] 生成工程目录以及配置文件。   

#### 安装必要开发组件
less，less-loade 防止css变量污染，意思就是组件之间的css不互通则防止了混乱   
`npm install --save-dev less less-loade`

#### 安装必要运行组件
vue-router 路由   
https://router.vuejs.org/zh/   

vuex 最简单的 Store   
https://vuex.vuejs.org/zh/guide/   

好了现在我们需要一个login页面了。   
那么我们在这选择iview UI   
iview 基于Vue.js构建的高质量UI工具包   
https://github.com/iview/iview   

做一个login页面我们需要几个东西。   
  1. 配置信息   
     1.1. vue.config.js   
     https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE   
     1.2. config/目录   
  2. 页面   
     view/login/    
     components/main/   
     assets/  资源文件   
  3. 路由   
     router/   
  4. 用户数据   
     store/   
  5. 后台访问API   
     api/   
  6. 通讯协议及共通函数   
     libs/   
     安装axios到devDependencies   
     `npm install --save-dev less less-loade`   

有了这些，还需要在main.js中引入必要的组件   
```javascript
import iView from 'iview'
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
```
踩了几个坑：   
1. JS：`vm.$t(item.name)`   
   模板：`$t('modalTitle')`   
   `$t`是国际化组件 【vue-i18n】使用的方法：如果没安装并导入locale目录中的东西，那就不好用。   
2. main.js 中   
  // 需要告诉vue 你的路由在哪里,不然会出现not match的错误
```javascript
  new Vue({
    el: '#app',
    router,   // 路由
    i18n,     // 国际化
    store,    // 存储
    render: h => h(App)
  })
```
3. index.less 引入时，出现`Inline JavaScript is not enabled. Is it set in your options?`的错误。   
   原因是`\node_modules\iview\src\styles\color\bezierEasing.less`中使用了JavaScript，   
   通过`@import '~iview/src/styles/index.less';`引入后，就引发了错误。   
   解决办法：   
   在vue-cli3里面设置有所不同，在vue.config.js 里加入：   
```javascript
    module.exports = {
        css: {
            loaderOptions: {
                less: {
                    javascriptEnabled: true,
                }
            }
        },
    }
```
#### 成功显示login和主页面drawingboard
![login页面成功访问](/snapshot/snipaste_20190822_103515.png "login页面")
![主页面drawingboard成功访问](/snapshot/snipaste_20190822_103355.png "主页面drawingboard")
Release: https://github.com/leehonleon/fitting/releases/tag/0.1.0

#### 测试用组件（测试阶段在安装）
mockjs 生成随机数据，拦截 Ajax 请求   
https://github.com/nuysoft/Mock/wiki/Getting-Started   

chai 测试用断言 Chai是节点和浏览器的BDD / TDD断言库，可以与任何javascript测试框架愉快地配对   
https://www.chaijs.com/   

cypress 赛普拉斯是为现代网络打造的下一代前端测试工具   
https://docs.cypress.io/guides/overview/why-cypress.html#Cypress-ecosystem   

***
跳转到： [第二阶段](./README%20section2.md "阶段二"). 