<template>
  <Header dragarea>
    <slot>Header</slot>
  </Header>
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