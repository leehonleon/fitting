<template>
  <Layout style="height: 100%; background-color:black;" dragarea>
    <slot>Layout</slot>
  </Layout>
</template>
<script>
import { setDragarea } from '@/libs/util/'
export default {
  mounted () {
    setDragarea(this)
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>