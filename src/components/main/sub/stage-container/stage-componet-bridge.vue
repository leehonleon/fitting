<template>
  <div class="stage-componet-bridge" :id="getId">
    <component :is="currentTabComponent" />
  </div>
</template>
<script>
import Vue from 'vue';
import { getUuid } from '@/libs/util'
export default {
  name: 'StageComponetBridge',
  components: {
  },
  // 接收参数并验证
  props: {
    idx: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      triger: ''
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
    }
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
</style>
