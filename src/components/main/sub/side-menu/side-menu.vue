<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Layout :style="{minHeight: '100vh'}">
      <Sider width="44">
        <Menu mode="horizontal" theme="dark" :active-name="activeMenuName" active-key="1" width="auto" class="css_menu_left" @on-select="handleSelect">
          <template v-for="item in sidemenuList">
            <MenuItem :key="item.name" :name="item.name" :handle="item">
            <Icon :custom="item.meta.icon" size="24" />
            </MenuItem>
          </template>
        </Menu>
      </Sider>
      <Layout>
        <Content class="css_menu_left_content">
          <Drawer placement="left" :closable="false" v-model="drawer" :transfer="false" :inner="true" :scrollable="true" class-name="side-content-drawer" :width="356-44-2" :mask="false" :mask-closable="false">
            <keep-alive>
              <component class="view sidemenu" :is="v_sidemenu" />
            </keep-alive>
          </Drawer>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>

export default {
  name: 'SideMenu',
  components: {
  },
  // 接收参数并验证
  props: {
    sidemenuList: {
      type: Array,
      default () {
        return []
      }
    },
    collapsed: {
      type: Boolean
    },
    activeMenuName: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      openedNames: [],
      v_sidemenu: "",
      preActiveMenuName: ""
    }
  },
  methods: {
    handleSelect (name) {
      let { component } = {}
      for (let item of this.sidemenuList) {
        if (item.name === name) {
          component = item.component
          break
        }
      }
      if (!component) return
      this.v_sidemenu = component
      if (this.preActiveMenuName === name) {
        this.$emit('on-change', !this.collapsed)
      } else {
        this.preActiveMenuName = name
      }
    },
  },
  computed: {
    drawer: function () { return !this.collapsed }
  },
  watch: {
  },
  mounted () {
  }
}
</script>
<style lang="less">
@import "./side-menu.less";
</style>
