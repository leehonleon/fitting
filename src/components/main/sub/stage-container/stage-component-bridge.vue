<template>
  <component ref="innerComponent" :is="currentTabComponent" :path="path">
    <template v-for="(task,name) in slots" v-slot:[name]>
      <template v-if="typeof task === 'string'">{{task}}</template>
      <template v-else>
        <StageComponentBridge v-for="(element,index) in task" :key="index" :path="cumputePath(name,index)" :module="element.module" :slots="element.slots" />
      </template>
    </template>

  </component>
</template>
<script>
// <div ref="bridge" class="stage-component-bridge">
// </div>
import Vue from 'vue';
import draggable from "vuedraggable";
import { getUuid } from '@/libs/util'
export default {
  name: 'StageComponentBridge',
  components: {
    draggable
  },
  // 接收参数并验证
  props: {
    module: {
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
    cumputePath (name, index) {
      let res = [...this.path]
      res.push(name)
      res.push(index + "")
      return res
    },
    showSheek () {
      window.alert('a')
    }
  },
  computed: {
    getId () {
      return getUuid()
    },
    currentTabComponent () {
      let module = this.module
      if (!this.hasComponent(module)) {
        Vue.component(module, function (resolve) {
          require(['_c/template/iView-UI/' + module + '.vue'], resolve)
        })
      }
      return this.module
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
