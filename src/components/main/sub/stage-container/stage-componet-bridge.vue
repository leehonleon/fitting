<template>
  <component :is="currentTabComponent" :tasks="tasks" />
  <!--
  <div class="stage-componet-bridge" :id="getId" @mouseover="overBridge" @mouseout="outBridge" :class="{ over: over}">
  </div>
  -->
</template>
<script>
import Vue from 'vue';
import draggable from "vuedraggable";
import { getUuid } from '@/libs/util'
export default {
  name: 'StageComponetBridge',
  components: {
    draggable
  },
  // 接收参数并验证
  props: {
    idx: {
      type: String,
      default: ''
    },
    tasks: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      triger: '',
      over: false,
    }
  },
  created () {
  },
  methods: {
    log (evt) {
      window.console.log(evt);
    },
    hasComponent (compName) {
      return this.$root.$options.components[compName]
    },
    overBridge () {
      this.over = true
    },
    outBridge () {
      this.over = false
    },
  },
  computed: {
    getId () {
      return getUuid()
    },
    currentTabComponent () {
      let idx = this.idx
      if (!this.hasComponent(idx)) {
        Vue.component(idx, function (resolve) {
          require(['_c/template/iView-UI/' + idx + '.vue'], resolve)
        })
      }
      return this.idx
    }
  },
  watch: {
  },
  mounted () {

  }
}
</script>
<style lang="less">
.over {
  box-shadow: 2px 2px 3px #888888;
  border: 1px dashed seagreen;
  margin: 1px;
}
</style>
