import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import Sortable from '@/libs/vue-sortable'

// 载入Style
import './index.less'
import '@/assets/icons/iconfont.css'

/**
 * @description 给VUE环境挂载iView
 */
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
/**
 * @description 给VUE环境挂载Sortable
 */
Vue.use(Sortable)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * @description 注册应用
 * 配置应用的路由，国际化，存储
 */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')