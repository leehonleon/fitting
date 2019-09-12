<template>
  <div class="text-element">
    <Card>
      <p slot="title">
        <Icon custom="iconfont icon-biaoti1"></Icon>
        导航
      </p>
      <CellGroup class="text-center">
        <Cell class="cell_title" title="添加标题文字" />
        <Cell class="cell_label" title="添加副标题文字" />
        <Cell class="cell_content" title="添加正文文字" />
      </CellGroup>
    </Card>
    <div class="icon-group">
      <!---->
      <div class="item" v-for="oneType of typeList" :key="oneType.idx" :componentName="oneType.componentName">
        <Button class="icon" @click="detailContent = true">
          <Icon :custom="oneType.icon" size="44" />
          <div class="text"> {{ oneType.itemName }} </div>
        </Button>
      </div>
    </div>
    <Drawer placement="left" :closable="false" v-model="detailContent" :transfer="false" :inner="true" :scrollable="true" class-name="side-content-drawer" :width="356-44-2" :mask="false" :mask-closable="false">
      <Button class="backBtn" size="large" long @click="back">
        <Icon type="ios-arrow-dropleft" />
        返回
      </Button>
      <draggable class="list-wrap" :sort="false" :group="{ name: 'stage', pull: 'clone', put: 'false' }">
        <div class="list-item ng-star-inserted">
          <img src="//image.tubangzhu.com/updata/201808/10/09910f21495d869f2532.png?x-oss-process=image/resize,w_200/format,webp" style="object-fit: contain;">
          <span class="img-info-btn"><i class="iconfont icon-more"></i></span>
        </div>
        <div class="list-item ng-star-inserted"><img src="//image.tubangzhu.com/updata/201808/07/1304c30834cb85f7b18a.png?x-oss-process=image/resize,w_200/format,webp" style="object-fit: contain;"><span class="img-info-btn"><i class="iconfont icon-more"></i></span>
        </div>
        <div class="list-item ng-star-inserted"><img src="//image.tubangzhu.com/updata/201808/07/7e2652774d27521a1fe8.png?x-oss-process=image/resize,w_200/format,webp" style="object-fit: contain;"><span class="img-info-btn"><i class="iconfont icon-more"></i></span>
        </div>
        <div class="list-item ng-star-inserted"><img src="//image.tubangzhu.com/updata/201808/07/3644b7049160011aae33.png?x-oss-process=image/resize,w_200/format,webp" style="object-fit: contain;"><span class="img-info-btn"><i class="iconfont icon-more"></i></span>
        </div>
        <div class="list-item ng-star-inserted"><img src="//image.tubangzhu.com/updata/201808/07/dfcbc9e8025abaccff8e.png?x-oss-process=image/resize,w_200/format,webp" style="object-fit: contain;"><span class="img-info-btn"><i class="iconfont icon-more"></i></span>
        </div>
      </draggable>
    </Drawer>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'cLayout',
  components: {
    draggable
  },
  // 接收参数并验证
  props: {
  },
  data () {
    return {
      detailContent: false,
      typeList: [
        { idx: "menu", icon: "ivu-icon ivu-icon-ios-menu", componentName: "Menu", itemName: "导航菜单" },
        { idx: "tabs", icon: "ivu-icon ivu-icon-ios-more-outline", componentName: "Tabs", itemName: "标签页" },
        { idx: "dropdown", icon: "ivu-icon ivu-icon-md-arrow-dropdown", componentName: "Dropdown", itemName: "下拉菜单" },
        { idx: "page", icon: "ivu-icon ivu-icon-ios-book-outline", componentName: "Page", itemName: "分页" },
        { idx: "breadcrumb", icon: "ivu-icon ivu-icon-ios-arrow-forward", componentName: "Breadcrumb", itemName: "面包屑" },
        { idx: "badge", icon: "ivu-icon ivu-icon-md-square", componentName: "Badge", itemName: "徽标数" },
        { idx: "anchor", icon: "ivu-icon ivu-icon-md-link", componentName: "Anchor", itemName: "锚点" },
        { idx: "steps", icon: "ivu-icon ivu-icon-ios-checkmark-circle-outline", componentName: "Steps", itemName: "步骤条" },
        { idx: "loading-bar", icon: "iconfont icon-jindutiao", componentName: "LoadingBar", itemName: "进度条" }
      ]
    }
  },
  methods: {
    back () {
      this.detailContent = false;
    }
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
@import "./acommon.less";
</style>
