<template>
  <div class="text-element">
    <Card>
      <p slot="title">
        <Icon custom="iconfont icon-biaoti1"></Icon>
        文字
      </p>
      <CellGroup class="text-center">
        <Cell class="cell_title" title="添加标题文字" />
        <Cell class="cell_label" title="添加副标题文字" />
        <Cell class="cell_content" title="添加正文文字" />
      </CellGroup>
    </Card>
    <div class="icon-group">
      <!---->
      <div class="item ">
        <Button class="icon" @click="detailContent = true">
          <Icon :custom="`iconfont icon-biaoti`" size="44" />
          <div class="text"> 标题样式 </div>
        </Button>
      </div>
      <div class="item ">
        <Button class="icon" @click="detailContent = true">
          <Icon :custom="`iconfont icon-duoxingwenzi`" size="44" />
          <div class="text"> 文字组合 </div>
        </Button>
      </div>
      <div class="item ">
        <Button class="icon" @click="detailContent = true">
          <Icon :custom="`iconfont icon-tuwenxiangqing`" size="44" />
          <div class="text"> 图文组合 </div>
        </Button>
      </div>
      <div class="item ">
        <Button class="icon" @click="detailContent = true">
          <Icon :custom="`iconfont icon--zitizhonglei`" size="44" />
          <div class="text"> 艺术字体 </div>
        </Button>
      </div>
    </div>
    <Drawer placement="left" :closable="false" v-model="detailContent" :transfer="false" :inner="true" :scrollable="true" class-name="side-content-drawer" :width="356-44-2" :mask="false" :mask-closable="false">
      <Button class="backBtn" size="large" long @click="back">
        <Icon type="ios-arrow-dropleft" />
        返回
      </Button>
      <draggable class="list-wrap" :sort="false">
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
  name: 'word',
  components: {
    draggable
  },
  // 接收参数并验证
  props: {
  },
  data () {
    return {
      detailContent: false
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
@import "./word.less";
</style>
