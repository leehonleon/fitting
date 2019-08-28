<template>
  <div class="stage-page-tool">
    <Card class="page-card">
      <p slot="title">
        <Icon type="md-apps" size="26" />
        页面
      </p>
      <CellGroup class="text-center">
        <Cell class="cell_title" title="添加标题文字" />
        <Cell class="cell_label" title="添加副标题文字" />
        <Cell class="cell_content" title="添加正文文字" />
      </CellGroup>
    </Card>
  </div>
</template>
<script>

export default {
  name: 'StagePageTool',
  components: {
  },
  // 接收参数并验证
  props: {
  },
  data () {
    return {
      splitLeft: 0.9
    }
  },
  methods: {
  },
  computed: {

  },
  watch: {
  },
  mounted () {
  }
}
</script>
<style lang="less">
@import "./stage-page-tool.less";
</style>
