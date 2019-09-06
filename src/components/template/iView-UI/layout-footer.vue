<template>
  <Footer>
    <NestedDraggable :task="footerCmp" placeholder="Footer" />
  </Footer>
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
    footerCmp () {
      return this.tasks.length !== 0 && this.tasks['footer'] ? this.tasks['footer'] : []
    }
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>