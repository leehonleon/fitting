<template>
  <div class="stage-container">
    <vue-ruler-tool :content-layout="{left:0,top:0}" :is-scale-revise="true" :is-hot-key="true">
      <Draggable class="stage-panel" :list="stageComponents" :group="{ name: 'stage' }">
        <span v-if="stageComponents.length===0">从左侧拖拽组件进来</span>
        <StageComponetBridge v-for="(element,index) in stageComponents" :key="index" :idx="element.idx" :tasks="element.tasks" />
      </Draggable>
    </vue-ruler-tool>
  </div>
</template>
<script>
// import VueRulerTool from 'vue-ruler-tool'
import VueRulerTool from '../vue-ruler-tool.vue'
import Draggable from '@/libs/inner-draggable/vuedraggable'
// import NestedDraggable from '@/components/club/nested.vue'
// import Draggable from 'vuedraggable'
import StageComponetBridge from './stage-componet-bridge.vue'
export default {
  name: 'StageContainer',
  components: {
    VueRulerTool,
    Draggable,
    // NestedDraggable
    StageComponetBridge

  },
  // 接收参数并验证
  props: {
  },
  data () {
    return {
      stageComponents: []
    }
  },
  methods: {
  },
  computed: {

  },
  watch: {
  },
  mounted () {
  }
}
</script>
<style lang="less">
@import "./stage-container.less";
</style>
