import cWord from '@/components/main/sub/side-menu/part/cWord.vue'
import cLayout from '@/components/main/sub/side-menu/part/cLayout.vue'
import cNavigation from '@/components/main/sub/side-menu/part/cNavigation.vue'

/**
 */

export default [{
    name: 'word',
    meta: {
      title: '文本',
      icon: 'iconfont icon-wenzi'
    },
    component: cWord
  },
  {
    name: 'layout',
    meta: {
      title: '布局',
      icon: 'iconfont icon-iframe'
    },
    component: cLayout
  },
  {
    name: 'navigation',
    meta: {
      title: '导航',
      icon: 'iconfont icon-daohang'
    },
    component: cNavigation
  }
]