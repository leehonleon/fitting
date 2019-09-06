<template>
  <Content>
    <NestedDraggable :task="contentCmp" placeholder="Content" />
  </Content>
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
    contentCmp () {
      return this.tasks.length !== 0 && this.tasks['content'] ? this.tasks['content'] : []
    }
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>