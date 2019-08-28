<template>
  <div class="stage">
    <Layout>
      <Layout>
        <Content>
          <StageContainerToolBar />
          <StageContainer />
        </Content>
      </Layout>
      <Sider hide-trigger :style="{background: '#fff'}" collapsible :width="256" :collapsed-width="44" v-model="collapsed">
        <StagePageTool />
      </Sider>
    </Layout>
  </div>
</template>
<script>
import StageContainerToolBar from '../stage-container-tool-bar'
import StageContainer from '../stage-container'
import StagePageTool from '../stage-page-tool'
export default {
  name: 'Stage',
  components: {
    StageContainerToolBar,
    StageContainer,
    StagePageTool
  },
  // 接收参数并验证
  props: {
  },
  data () {
    return {
      collapsed: false
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
@import "./stage.less";
</style>
