<template>
  <component ref="innerComponet" :is="currentTabComponent" :path="path+''">
    <template v-slot:[name] v-for="(task,name) in slots">
      <template v-if="typeof task === 'string'">{{task}}</template>
      <template v-else>
        <StageComponetBridge v-for="(element,index) in task" :key="index" :path="path+','+index" :idx="element.idx" :slots="element.slots" />
      </template>
    </template>

  </component>
</template>
<script>
// <div ref="bridge" class="stage-componet-bridge">
// </div>
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
    path: {
      required: true
    },
    slots: {
      default: ''
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
