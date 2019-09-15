<template>
  <Layout>
    <Content dragarea slotname='content'>
      <slot name="content">Content</slot>
    </Content>
    <Sider hide-trigger dragarea=".ivu-layout-sider-children" slotname='sider'>
      <slot name="sider">Sider</slot>
    </Sider>
  </Layout>
</template>
<script>
import { setDragarea } from '@/libs/util/'
export default {
  props: {
    path: {
      required: true
    }
  },
  components: {
  },
  computed: {
  },
  mounted () {
    setDragarea(this)
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>