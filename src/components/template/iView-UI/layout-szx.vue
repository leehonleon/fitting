<template>
  <Layout>
    <Header>
      <slot name="header">Header</slot>
    </Header>
    <Content>
      <slot name="content">Content</slot>
    </Content>
    <Footer>
      <slot name="sider">Footer</slot>
    </Footer>
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