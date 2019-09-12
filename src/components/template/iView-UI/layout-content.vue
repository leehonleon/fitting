<template>
  <Content dragarea>
    <slot>Content</slot>
  </Content>
</template>
<script>
export default {
  props: {
  },
  components: {
  },
  computed: {
  },
  mounted () {
    this.$children.map(el => {
      if (el.$attrs.dragarea != '') {
        const find = el.$attrs.dragarea
        switch (find[0]) {
          case '#':
            el.$children.map(elsub => {
              if (elsub.$el.id === find.substr(1)) {
                window.console.log(el)
              }
            })
            break;
          case '.':
          default:
        }
      }    })
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>