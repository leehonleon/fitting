<template>
  <Layout slotname='base' :path="path">
    <Sider hide-trigger dragarea="ivu-layout-sider-children" slotname='sider' :path="path+','+'sider'">
      <slot name="sider">Sider</slot>
    </Sider>
    <Content dragarea slotname='content' :path="path+','+'content'">
      <slot name="content">Content</slot>
    </Content>
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
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>