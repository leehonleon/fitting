<template>
  <Footer dragarea>
    <slot>Footer</slot>
  </Footer>
</template>
<script>
export default {
  props: {
  },
  components: {
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