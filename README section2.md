# 第二部分 进阶画面
## 图标
要想富先修路，这样句没错。要想出画面得有图标。   
那图标哪里来呢？答案最好的就是阿里了。   
原因无他，资源丰富可自选配置，用啥那啥随时增删改。   

在阿里上创建一个项目，把需要的图标加入到这个项目中，就可以直接使用阿里提供的URL作为css文件了。    

阿里提供了3中模式使用Icon，Unicode、Font class、Symbol，为了配合ivew使用我们选择了Font class。   

在public/index.html中加入就可以使用，使用时还可以通过阿里网站查看图标库，超方便。   
```html
<link rel="stylesheet" href="//at.alicdn.com/t/font_1364825_7rmgj7a1i4l.css">
```

iview控件提供了自定义图标接口。   
Button 的 custom-icon   
Icon 的 custom   

样例：
```html
<Menu mode="horizontal" theme="dark" active-key="1" width="auto" class="css_menu_left">
  <template v-for="item in menuList">
    <MenuItem :key="item.name" :name="item.name">
    <Icon :custom="` ${item.icon}`" size="24" />
    </MenuItem>
  </template>
</Menu>
```

## 共通
1. `this.$store.getters.sidemenuList` 怎么取得的。   
   这个是/store/module/app.js中定义的。   
```
  getters: {
    sidemenuList: () => {
      return sideMenuRoutes
    },
  },
```

2. 使用vue来做局部刷新   
  https://www.cnblogs.com/mmykdbc/p/8037620.html   
  我将路由改装了一下，直接存储到了app的`this.$store.getters.sidemenuList`里了。   

3. Vue Debug   
在`vue.config.js`中加入，在chrome里就可以看到真实的源代码了，这样就可以用debug停止断点了。
```java
  // 在浏览器中展示源代码
  configureWebpack: config => {
    // devtool: 'source-map'
    config.devtool = 'source-map'
  },
```
https://cli.vuejs.org/zh/config/#configurewebpack   
https://webpack.docschina.org/configuration/devtool/   



## 知识
1. ref属性  例：`ref="sideMenu"`    
   https://cn.vuejs.org/v2/api/#ref   
   ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件   
   比如在SideMenu组件中注册有updateOpenName这个方法，用ref注册SideMenu组件为sideMenu，则可以使用下面代码。   
   ```java
   this.$refs.sideMenu.updateOpenName(newRoute.name)
   ```

2. `<sider>` 可折叠侧边栏组件   
   https://www.iviewui.com/components/layout    

3. `<keep-alive>` 动态组件懒加载     
   https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%9C%A8%E5%8A%A8%E6%80%81%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-keep-alive

