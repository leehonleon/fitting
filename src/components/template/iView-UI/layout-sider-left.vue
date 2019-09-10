<template>
  <Layout>
    <Sider hide-trigger>
      <slot name="sider">Sider</slot>
    </Sider>
    <Content>
      <slot name="sontent">Content</slot>
    </Content>
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