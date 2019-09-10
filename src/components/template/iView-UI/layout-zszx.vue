<template>
  <Layout>
    <Sider hide-trigger>
      <slot name="sider">Sider</slot>
    </Sider>
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
  </Layout>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>