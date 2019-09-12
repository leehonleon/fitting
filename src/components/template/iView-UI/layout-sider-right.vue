<template>
  <Layout>
    <Content ref="dragtest" dragarea slotname='content' :path="path+','+'content'">
      <slot name="sontent">Content</slot>
    </Content>
    <Sider ref="dragtest" hide-trigger dragarea=".ivu-layout-sider-children" slotname='sider' :path="path+','+'sider'">
      <slot name="sider">Sider</slot>
    </Sider>
  </Layout>
</template>
<script>
export default {
  props: {
    path: {
      required: true
    }
  },
  components: {
  },
  computed: {
  },
  mounted () {
    function _S (reg, attr, obj) {
      let ret = []
      if (!obj.$children || obj.$children.length === 0) {
        return ret
      }
      obj.$children.map(el => {
        if (el.$attrs[attr] != undefined && (el.$attrs[attr] === reg || (reg === '' && el.$attrs[attr] != ''))) {
          ret.push(el)
        } else {
          ret = ret.concat(_S(reg, attr, el))
        }
      })
      return ret
    }
    function _D (reg, obj) {
      let ret = []
      if (!obj.children || obj.children.length === 0) {
        return ret
      }
      if (reg != '') {
        let o = ''
        let find = reg.substr(1)
        Array.from(obj.children).map(el => {
          switch (reg[0]) {
            case '#':
              o = el.id
              break;
            case '.':
              o = el.className
              break
            default:
              o = el.tagName
          }
          if (o != undefined && o.toUpperCase() === find.toUpperCase()) {
            ret.push(el)
          } else {
            ret = ret.concat(_D(reg, el))
          }
        })
      }
      return ret
    }
    _S('', 'dragarea', this)
      .map(el => {
        const find = el.$attrs.dragarea
        if (find != '') {
          _D(find, el.$el).map(elsub => {

            window.console.log(elsub)
          })
        }
      })
  }
}
</script>
<style lang="less" scoped>
@import "./layout.less";
</style>