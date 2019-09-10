<template>
  <Layout>
    <Header>
      <slot name="header">Header</slot>
    </Header>
    <Layout>
      <Content>
        <slot name="content">Content</slot>
      </Content>
      <Sider hide-trigger>
        <slot name="sider">Sider</slot>
      </Sider>
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