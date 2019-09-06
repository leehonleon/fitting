<template>
  <Layout>
    <Content>
      <NestedDraggable :task="siderCmp" placeholder="Content" />
    </Content>
    <Sider hide-trigger>
      <NestedDraggable :task="siderCmp" placeholder="Sider" />
    </Sider>
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
    siderCmp () {
      return this.tasks.length !== 0 && this.tasks['sider'] ? this.tasks['sider'] : []
    }
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>