<template>
  <Layout class="">
    <Header dragarea slotname="header">
      <slot name="header">Header</slot>
    </Header>
    <Layout>
      <Sider hide-trigger dragarea=".ivu-layout-sider-children" slotname="sider">
        <slot name="sider">Sider</slot>
      </Sider>
      <Content dragarea slotname="content">
        <slot name="content">Content</slot>
      </Content>
    </Layout>
    <Footer dragarea slotname="footer">
      <slot name="footer">Footer</slot>
    </Footer>
  </Layout>
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