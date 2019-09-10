<template>
  <Layout>
    <Content>
      <slot name="sontent">Content</slot>
    </Content>
    <Sider hide-trigger>
      <slot name="sider">Sider</slot>
    </Sider>
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