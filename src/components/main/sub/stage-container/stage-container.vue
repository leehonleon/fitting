<template>
  <div class="stage-container">
    <vue-ruler-tool :content-layout="{left:0,top:0}" :is-scale-revise="true" :is-hot-key="true">
      <Draggable class="stage-panel" :list="stageComponents" :group="{ name: 'stage' }">
        <StageComponetBridge v-for="(element,index) in stageComponents" :key="index" :path="index" :idx="element.idx" :slots="element.slots" />
      </Draggable>
    </vue-ruler-tool>
  </div>
</template>
<script>
// import VueRulerTool from 'vue-ruler-tool'
import VueRulerTool from '../vue-ruler-tool.vue'
import Draggable from '@/libs/inner-draggable/draggable'
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
    dragMovingEnter (evt) {
      // 当可拖动的元素进入可放置的目标高亮目标节点
      if (evt.target.className == "dragRootTag") {
        evt.target.style.background = "purple";
      }
    },
    dragMovingLeave (evt) {
      // 当拖动元素离开可放置目标节点，重置其背景
      if (evt.target.className == "dragRootTag") {
        evt.target.style.background = "";
      }
    }

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
