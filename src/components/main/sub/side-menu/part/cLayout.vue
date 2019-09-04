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
      <div class="item" v-for="oneType of typeList" :key="oneType.idx" :componetName="oneType.componetName">
        <Button class="icon" @click="choseItem(oneType.idx)">
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
      <draggable class="list-wrap" :list="wrapItemList" :sort="false" :group="{ name: 'stage', pull: 'clone', put: 'false' }">
        <div class="list-item ng-star-inserted" v-for="wrapItem of wrapItemList" :key="wrapItem.index">
          <img :src="`${imgPath}/${wrapItem.src}`" style="object-fit: contain;">
          <span class="img-info-btn"><i class="wrapItem.icon"></i></span>
        </div>
      </draggable>
    </Drawer>
  </div>
</template>
<script>
// import draggable from '@/libs/inner-dragable/vuedragable'
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
      imgPath: process.env.BASE_URL + 'static',
      detailContent: false,
      typeList: [
        { idx: "grid", icon: "ivu-icon ivu-icon-ios-grid-outline", componetName: "Grid", itemName: "栅格" },
        { idx: "layut", icon: "ivu-icon ivu-icon-ios-browsers-outline", componetName: "Layout", itemName: "布局" },
        { idx: "card", icon: "ivu-icon ivu-icon-ios-card-outline", componetName: "Card", itemName: "卡片" },
        { idx: "collapse", icon: "ivu-icon ivu-icon-ios-albums-outline", componetName: "Collapse", itemName: "折叠面板" },
        { idx: "split", icon: "ivu-icon ivu-icon-ios-square-outline", componetName: "Split", itemName: "面板分割" },
        { idx: "divider", icon: "ivu-icon ivu-icon-ios-remove", componetName: "Divider", itemName: "分割线" },
        { idx: "cell", icon: "ivu-icon ivu-icon-ios-list-box-outline", componetName: "Cell", itemName: "单元格" }],
      wrapItemListAll: {
        grid: [
          { idx: "layout-szx", src: "snipaste_20190829_171233.png", name: "layout-szx" },
          { idx: "layout-szzx", src: "snipaste_20190829_171358.png", name: "layout-szzx" },
          { idx: "layout-syzx", src: "snipaste_20190829_171342.png", name: "layout-syzx" },
          { idx: "layout-zszx", src: "snipaste_20190829_172038.png", name: "layout-zszx" }
        ],
        layut: [
          { idx: "szx", src: "snipaste_20190829_171233.png", name: "" }
        ],
        card: [
          { idx: "szx", src: "snipaste_20190829_171233.png", name: "" }
        ],
        collapse: [
          { idx: "szx", src: "snipaste_20190829_171233.png", name: "" }
        ],
        split: [
          { idx: "szx", src: "snipaste_20190829_171233.png", name: "" }
        ],
        divider: [
          { idx: "szx", src: "snipaste_20190829_171233.png", name: "" }
        ],
        cell: [
          { idx: "szx", src: "snipaste_20190829_171233.png", name: "" }
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
    wrapItemDragStart (evt) {
      // console.log(evt)
    },
    wrapItemSetData (dataTransfer) {
      // dataTransfer.setData('aaa', 'dd')
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
