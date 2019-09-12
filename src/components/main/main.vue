<template>
  <Layout style="height: 100%" class="main">
    <Menu mode="horizontal" theme="dark" active-key="1" class="css_menu_top">
      <div class="layout-logo">
        <Icon type="logo-instagram" size="32" />
      </div>
      <div class="layout-nav">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-stats" />
            文件
          </template>
          <MenuItem name="1-1">新建</MenuItem>
          <MenuItem name="1-2">保存</MenuItem>
          <MenuItem name="1-3">分享</MenuItem>
        </Submenu>
      </div>
    </Menu>
    <Layout>
      <Sider collapsible :width="356" :collapsed-width="44" v-model="collapsed">
        <SideMenu accordion ref="sideMenu" :activeMenuName="$store.state.sidename" :collapsed="collapsed" :sidemenuList="sidemenuList" @on-change="sideMenuSelect" />
      </Sider>
      <Layout>
        <Stage />
      </Layout>
    </Layout>
  </Layout>
</template>
<script>
import './main.less'
import SideMenu from './sub/side-menu'
import Stage from './sub/stage'
export default {
  name: 'Main',
  components: {
    SideMenu,
    Stage
  },
  data () {
    return {
      collapsed: false,
    }
  },
  computed: {
    sidemenuList () {
      return this.$store.getters.sidemenuList
    },
  },
  methods: {
    sideMenuSelect (state) {
      this.collapsed = state
    }
  },
  watch: {
  },
  mounted () {
  }
}
</script>
