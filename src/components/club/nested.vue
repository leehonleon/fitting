<template>
  <draggable tag="drag" :list="tasks" :group="{ name: 'stage' }">
    <template v-if="tasks.length != 0">
      <StageComponentBridge v-for="(element,index) in tasks" :key="index" :idx="element.idx" :tasks="element.tasks" />
    </template>
    <template v-if="tasks.length === 0">{{placeholder}}</template>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import StageComponentBridge from '../main/sub/stage-container/stage-component-bridge.vue'
import el from './el.vue'
export default {
  props: {
    tasks: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  components: {
    draggable,
    StageComponentBridge,
    el
  },
  name: "nested-draggable"
};
</script>
<style scoped>
.draggableHolder {
  border: 1px outset lightblue;
}
</style>