<template>
  <draggable :list="tasks" :group="{ name: 'stage' }">
    <template v-if="tasks.length != 0">
      <StageComponetBridge v-for="(element,index) in tasks" :key="index" :idx="element.idx" :tasks="element.tasks" />
    </template>
    <template v-if="tasks.length === 0">{{placeholder}}</template>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import StageComponetBridge from '../main/sub/stage-container/stage-componet-bridge.vue'
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
    StageComponetBridge
  },
  name: "nested-draggable"
};
</script>
<style scoped>
.draggableHolder {
  border: 1px outset lightblue;
}
</style>