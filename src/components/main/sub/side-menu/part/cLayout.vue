<template>
  <div class="text-element">
    <Card>
      <p slot="title">
        <Icon custom="iconfont icon-biaoti1"></Icon>
        布局
      </p>
      <CellGroup class="text-center">
        <Cell class="cell_title" title="添加标题文字" />
        <Cell class="cell_label" title="添加副标题文字" />
        <Cell class="cell_content" title="添加正文文字" />
      </CellGroup>
    </Card>
    <div class="icon-group">
      <!---->
      <div class="item" v-for="oneType of typeList" :key="oneType.id" :componentName="oneType.componentName">
        <Button class="icon" @click="choseItem(oneType.id)">
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
      <Draggable class="list-wrap" :list="wrapItemList" :sort="false" :group="{ name: 'stage', pull: 'clone', put: 'false' }">
        <div class="list-item ng-star-inserted" v-for="(wrapItem, index) of wrapItemList" :key="index">
          <img :src="`${imgPath}/${wrapItem.src}`" style="object-fit: contain;">
          <span class="img-info-btn"><i class="wrapItem.icon"></i></span>
        </div>
      </Draggable>
    </Drawer>
  </div>
</template>
<script>
import Draggable from '@/libs/inner-draggable/vuedraggable'
// import draggable from 'vuedraggable'
export default {
  name: 'cLayout',
  components: {
    Draggable
  },
  // 接收参数并验证
  props: {
  },
  data () {
    return {
      imgPath: process.env.BASE_URL + 'static',
      detailContent: false,
      typeList: [
        { id: "grid", icon: "ivu-icon ivu-icon-ios-grid-outline", componentName: "Grid", itemName: "栅格" },
        { id: "layout", icon: "ivu-icon ivu-icon-ios-browsers-outline", componentName: "Layout", itemName: "布局" },
        { id: "card", icon: "ivu-icon ivu-icon-ios-card-outline", componentName: "Card", itemName: "卡片" },
        { id: "collapse", icon: "ivu-icon ivu-icon-ios-albums-outline", componentName: "Collapse", itemName: "折叠面板" },
        { id: "split", icon: "ivu-icon ivu-icon-ios-square-outline", componentName: "Split", itemName: "面板分割" },
        { id: "divider", icon: "ivu-icon ivu-icon-ios-remove", componentName: "Divider", itemName: "分割线" },
        { id: "cell", icon: "ivu-icon ivu-icon-ios-list-box-outline", componentName: "Cell", itemName: "单元格" }],
      wrapItemListAll: {
        grid: [
          { module: "layout-szx", src: "snipaste_20190829_171233.png", name: "layout-szx" },
          { module: "layout-szzx", src: "snipaste_20190829_171358.png", name: "layout-szzx" },
          { module: "layout-syzx", src: "snipaste_20190829_171342.png", name: "layout-syzx" },
          { module: "layout-zszx", src: "snipaste_20190829_172038.png", name: "layout-zszx" }
        ],
        layout: [
          {
            module: "layout-single", src: "snipaste_20190905_220042.png", name: "layout-single",
            // slots:
            // {
            //   default:
            //     [{ module: "layout-header", src: "snipaste_20190905_220351.png", name: "layout-header", },
            //     { module: "layout-sider-left", src: "snipaste_20190905_220655.png", name: "layout-sider-left", slots: {} },
            //     { module: "layout-footer", src: "snipaste_20190905_220010.png", name: "layout-footer", slots: {} }]
            //   , contents:
            //     [{ module: "layout-header", src: "snipaste_20190905_220351.png", name: "layout-header", },
            //     { module: "layout-sider-left", src: "snipaste_20190905_220655.png", name: "layout-sider-left", slots: {} },
            //     { module: "layout-footer", src: "snipaste_20190905_220010.png", name: "layout-footer", slots: {} }]
            // }
          },
          { module: "layout-header", src: "snipaste_20190905_220351.png", name: "layout-header" },
          {
            module: "layout-content", src: "snipaste_20190905_215926.png", name: "layout-content",
            slots: {
              default: [
                { module: "Button", name: "Button", slots: { default: 'Default' } }]
            },
          },
          { module: "layout-footer", src: "snipaste_20190905_220010.png", name: "layout-footer" },
          {
            module: "layout-sider-left", src: "snipaste_20190905_220655.png", name: "layout-sider-left",
            slots: {
              content: [
                { module: "layout-header", src: "snipaste_20190905_220351.png", name: "layout-header", },
                { module: "layout-content", src: "snipaste_20190905_215926.png", name: "layout-content" },
                { module: "layout-footer", src: "snipaste_20190905_220010.png", name: "layout-footer" },],
              sider: [{ module: "layout-header", src: "snipaste_20190905_220351.png", name: "layout-header", },]
            }
          },
          { module: "layout-sider-right", src: "snipaste_20190905_220655.png", name: "layout-sider-right", },
          { module: "layout-szx", src: "snipaste_20190829_171233.png", name: "layout-szx", },
          { module: "layout-szzx", src: "snipaste_20190829_171358.png", name: "layout-szzx", },
          { module: "layout-syzx", src: "snipaste_20190829_171342.png", name: "layout-syzx", },
          { module: "layout-zszx", src: "snipaste_20190829_172038.png", name: "layout-zszx", },
          { module: "Button", src: "snipaste_20190912_132244.png", name: "Button", slots: { default: 'Default' } }
        ],
        card: [
          { module: "szx", src: "snipaste_20190829_171233.png", name: "" }
        ],
        collapse: [
          { module: "szx", src: "snipaste_20190829_171233.png", name: "" }
        ],
        split: [
          { module: "szx", src: "snipaste_20190829_171233.png", name: "" }
        ],
        divider: [
          { module: "szx", src: "snipaste_20190829_171233.png", name: "" }
        ],
        cell: [
          { module: "szx", src: "snipaste_20190829_171233.png", name: "" }
        ],
      },
      wrapItemList: []
    }
  },
  methods: {
    back () {
      this.detailContent = false;
    },
    choseItem (itemName) {
      this.wrapItemList = this.wrapItemListAll[itemName]
      this.detailContent = true
    },
    initComp () {
      return null
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
