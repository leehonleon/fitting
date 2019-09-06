<template>
  <Layout style="height: 100%;">
    <NestedDraggable :task="layoutCmp" placeholder="Layout" />
  </Layout>
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
    layoutCmp () {
      return this.tasks.length !== 0 && this.tasks['Layout'] ? this.tasks['Layout'] : []
    }
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>