<template>
  <Layout slotname='base' :path="path">
    <Content dragarea slotname='content' :path="path+','+'content'">
      <slot name="sontent">Content</slot>
    </Content>
    <Sider hide-trigger dragarea="ivu-layout-sider-children" slotname='sider' :path="path+','+'sider'">
      <slot name="sider">Sider</slot>
    </Sider>
  </Layout>
</template>
<script>
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
    window.console.log(this.$scopedSlots)
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>