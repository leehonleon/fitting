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
        <MenuItem key="2">
        导航二
        </MenuItem>
        <MenuItem key="3">
        导航三
        </MenuItem>
        <MenuItem key="4">
        导航四
        </MenuItem>
      </div>
    </Menu>
    <Layout>
      <Sider hide-trigger width="50">
        <Menu mode="horizontal" theme="dark" active-key="1" width="auto" :open-keys="['1']" class="css_menu_left">
          <MenuItem key="1">
          <Button icon="md-document" @click="files" ghost="true" type="text"></Button>
          </MenuItem>
          <MenuItem key="2">
          <Button icon="ios-keypad" @click="components" ghost="true" type="text"></Button>
          </MenuItem>
          <MenuItem key="3">
          <Button icon="ios-analytics" ghost="true" type="text"></Button>
          </MenuItem>
          <MenuItem key="4">
          <Button icon="ios-paper" ghost="true" type="text"></Button>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Split v-model="split1" min="300px" max="200px">
          <div slot="left" class="filelist-split-pane">
          </div>
          <div slot="right" class="content-split-pane">
          </div>
        </Split>
      </Layout>
    </Layout>
  </Layout>
</template>
<script>
import './main.less'
export default {
  name: 'Main',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  watch: {
  },
  mounted () {
  }
}
</script>
