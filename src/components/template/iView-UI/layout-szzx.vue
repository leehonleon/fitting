<template>
  <Layout class="">
    <Header>
      <slot name="header">Header</slot>
    </Header>
    <Layout>
      <Sider hide-trigger>
        <slot name="sider">Sider</slot>
      </Sider>
      <Content>
        <slot name="content">Content</slot>
      </Content>
    </Layout>
    <Footer>
      <slot name="sider">Footer</slot>
    </Footer>
  </Layout>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>