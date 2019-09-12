<template>
  <Layout style="height: 100%; background-color:black;" dragarea slotname='base' :path="path">
    <slot>Layout</slot>
  </Layout>
</template>
<script>
export default {
  props: {
  },
  components: {
  },
  computed: {
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>