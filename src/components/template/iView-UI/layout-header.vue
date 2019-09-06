<template>
  <Header>
    <NestedDraggable :task="headerCmp" placeholder="Header" />
  </Header>
</template>
<script>
import NestedDraggable from '@/components/club/nested.vue'
export default {
  props: {
    tasks: {
      required: true,
    }
  },
  components: {
    NestedDraggable
  },
  computed: {
    headerCmp () {
      return this.tasks.length !== 0 && this.tasks['header'] ? this.tasks['header'] : []
    }
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>