<template>
  <div class="stage-container">
    <vue-ruler-tool :content-layout="{left:0,top:0}" :is-scale-revise="true" :preset-line="presetLine" :is-hot-key="ture">
      <draggable class="stage-panel" group="stage">

      </draggable>
    </vue-ruler-tool>
  </div>
</template>
<script>
// import VueRulerTool from 'vue-ruler-tool'
import VueRulerTool from '../vue-ruler-tool.vue'
import draggable from 'vuedraggable'
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
