#

## 拖拽改用 vue-sortable

原因：因为 Vue.Draggable 是以组件形式出现的，将会生成一个根节点标签，就是说会淘一层 DIV  
我希望的是直接在任意节点上增加拖拽功能，经过学习，其实 sortablejs 已经提供所有功能，那么将它集成到 Vue 中的组件 vue-sortable 就是很好的选择。
注意 NPM 上的 vue-sortable 不能支持 vue2.0 的 所以导入本地，重构了。（考虑以后维护该插件）

- 使用方法：
  - 挂载插件
  ```JavaScript
  import Sortable from 'vue-sortable'
  Vue.use(Sortable)
  ```
  - 在任意节点添加属性`v-sortable`
  - 将 Sortable 的配置属性`options`付给`v-sortable`就可以。关于`options`则参考[sortablejs 网站](https://github.com/SortableJS/Sortable)

### 一些知识

- Vue: 组织代码
- Babel: 编译代码
  - ES6 代码转为 ES5 代码
  - ES6 <==> ECMAScript 2015+
  - 为什么要用这个呢，废话！当然是我们写的 vue 就是用的这个 ES6 吧。
  - 实际原因：因为各种浏览器对 ES6 以上的引擎不完全支持，而自从有了 nodejs 之后，我们都开始使用 ES6 语法结构来写代码了，那怎么样所有浏览器支持统一中语法结构呢。Babel 应运而生，因为我们把 ES6 以上的语法编译成所有浏览器都支持的 ES5 就好了。
- Webpack: 打包代码
- Nodejs：Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时。
- Chrome V8 引擎：简单说它是 C++编写的运行 JavaScript 的高性能引擎。[V8 简书](https://www.jianshu.com/p/8290715feec6)
- V8 可以单独运行，也可以嵌入 C++ 应用当中。
- VScode 中使用宏命令： 这里以 Markdown 换行适应 github 表示用的快捷键添加为例。

  - Ctrl + Shift + X 在扩展面板安装 macros ，安装完毕重新加载即可正常使用。
  - settings.json 中加入下面代码

  ```javascript
    // 宏设定
    "macros": {
      "end_br": [ // 末尾加换行符
        "cursorLineEnd",
        {
          "command": "type",
          "args": {
            "text": "    "
          }
        },
        "editor.action.insertLineAfter"
      ],
    }
  ```

  - 在 File > Preferences > Keyboard Shortcuts 里输入 end_br 选择要添加的宏，设定快捷键，并输入 when，(`editorTextFocus && !editorReadonly && !suggestWidgetVisible && editorLangId == 'markdown'`)
  - Keyboard Shortcuts 中的这些命令可以用在宏中。
  - 开始使用

- 再付一个粘贴板内容转代码块的宏
  ````JavaScript
      "enter_code": [ // 插入Code块儿
        "cursorLineStart",
        {
          "command": "type",
          "args": {
            "text": "```"
          }
        },
        "editor.action.insertLineAfter",
        {
          "command": "type",
          "args": {
            "text": "```"
          }
        },
        "cursorUp",
        "editor.action.insertLineAfter",
        "editor.action.clipboardPasteAction"
      ],
  ````
  - 自调用函数  
    函数表达式可以 "自调用"。  
    自调用表达式会自动调用。  
    如果表达式后面紧跟 () ，则会自动调用。  
    不能自调用声明的函数。  
    通过添加括号，来说明它是一个函数表达式：  
    实例
    ```javascript
    (function() {
      var x = 'Hello!!'; // 我将调用自己
    })();
    ```
- 编码知识
  - `x || y` 这个语法返回两边第一个出现的为真值的对象
  - `list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);` // 更新位置，用法 再$1位置，删除$2个数据，插入$3~（一个或多个）的数据,调用对象发生变化，返回删除的元素
  
---

跳转到： [第三阶段](./README%20section1.md '阶段二')
