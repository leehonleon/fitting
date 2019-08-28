<template>
  <div class="stage-container" @dragover="delivery" @dragenter="delivery" @drop="delivery">
    <vue-ruler-tool :content-layout="{left:0,top:0}" :is-scale-revise="true" :preset-line="presetLine" :is-hot-key="ture">
      <draggable class="list-wrap" @end="dragEnd" @enter="dragEnter">
        拖拽组件到这里
      </draggable>
    </vue-ruler-tool>
  </div>
</template>
<script>
// import VueRulerTool from 'vue-ruler-tool'
import draggable from 'vuedraggable'
import VueRulerTool from '../vue-ruler-tool.vue'
export default {
  name: 'StageContainer',
  components: {
    VueRulerTool,
    draggable
  },
  // 接收参数并验证
  props: {
  },
  data () {
    return {
      splitLeft: 0.9,
      presetLine: []
    }
  },
  methods: {
    dragEnd (e) {
      alert("dragEnd")
    },
    dragEnter (e) {
      alert("dragEnter")
    },
    delivery (e) {
      e.preventDefault()
    },
    dragOver (e) {
      e.preventDefault()
    },
    drop (e) {
      alert("drop");
      alert(e.target.className);
    }
  },
  computed: {

  },
  watch: {
  },
  mounted () {
    document.ondrag = e => {
      // 鼠标拖拽移动中，无限调用
    }
    document.body.ondragover = e => {
      // 告诉user agent：如果此事件没有被显式处理，那么它默认的动作也不要做（因为默认是要做的）。此事件还是继续传播，除非碰到事件侦听器调用stopPropagation() 或stopImmediatePropagation()，才停止传播。
      e.preventDefault()
    }
    document.body.ondragenter = e => {
      e.preventDefault()
    }
    document.body.ondrop = e => {
      e.preventDefault()
    }
  }
}
</script>
<style lang="less">
@import "./stage-container.less";
</style>
