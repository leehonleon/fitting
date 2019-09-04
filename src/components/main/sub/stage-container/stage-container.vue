<template>
  <div class="stage-container">
    <vue-ruler-tool :content-layout="{left:0,top:0}" :is-scale-revise="true" :preset-line="presetLine" :is-hot-key="true">
      <draggable class="stage-panel" group="stage" :list="stageComponents">
        <StageComponetBridge v-for="(element,index) in stageComponents" :key="index" :idx="element.idx" />
      </draggable>
    </vue-ruler-tool>
  </div>
</template>
<script>
// import VueRulerTool from 'vue-ruler-tool'
import VueRulerTool from '../vue-ruler-tool.vue'
// import draggable from '@/libs/inner-dragable/vuedragable'
import draggable from 'vuedraggable'
import StageComponetBridge from './stage-componet-bridge.vue'
export default {
  name: 'StageContainer',
  components: {
    VueRulerTool,
    draggable,
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
