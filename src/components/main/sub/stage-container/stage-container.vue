<template>
  <div class="stage-container">
    <vue-ruler-tool :content-layout="{left:0,top:0}" :is-scale-revise="true" :is-hot-key="true">
      <div class="stage-panel" v-sortable="sortableOption" :list="stageComponents">
        <!-- <NestedDraggable :tasks="stageComponents" placeholder="拖拽组件上来看看" /> -->

      </div>
      <div style="height:120px">
        <rawDisplayer :value="stageComponents" title="List" />
      </div>
    </vue-ruler-tool>
  </div>
</template>
<script>
// import VueRulerTool from 'vue-ruler-tool'
import VueRulerTool from '../vue-ruler-tool.vue'
// import draggable from '@/libs/inner-dragable/vuedragable'
import NestedDraggable from '@/components/club/nested.vue'
// import draggable from 'vuedraggable'
import StageComponetBridge from './stage-componet-bridge.vue'
import rawDisplayer from '@/components/club/raw-displayer.vue'
export default {
  name: 'StageContainer',
  components: {
    VueRulerTool,
    StageComponetBridge,
    NestedDraggable,
    rawDisplayer

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
    sortableOption () {
      return this.$config.sortableOption.stageOptions
    }
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
