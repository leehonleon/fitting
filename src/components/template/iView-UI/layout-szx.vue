<template>
  <Layout>
    <Header>
      <NestedDraggable :task="headerCmp" placeholder="Header" />
    </Header>
    <Content>
      <NestedDraggable :task="contentCmp" placeholder="Content" />
    </Content>
    <Footer>
      <NestedDraggable :task="footerCmp" placeholder="Footer" />
    </Footer>
  </Layout>
</template>
<script>
import NestedDraggable from '@/components/club/nested.vue'
export default {
  props: {
    tasks: {
      required: true,
    }
  },
  components: {
    NestedDraggable
  },
  computed: {
    headerCmp () {
      return this.tasks.length !== 0 && this.tasks['header'] ? this.tasks['header'] : []
    },
    contentCmp () {
      return this.tasks.length !== 0 && this.tasks['content'] ? this.tasks['content'] : []
    },
    footerCmp () {
      return this.tasks.length !== 0 && this.tasks['footer'] ? this.tasks['footer'] : []
    }
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>