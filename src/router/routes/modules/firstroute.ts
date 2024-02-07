import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const testnav: AppRouteModule = {
  path: '/testnav',
  name: 'FirstPage',
  component: LAYOUT,
  redirect: '/testnav/vue_grid_layout',
  meta: {
    hideChildrenInMenu: false,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.testnav'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'vue_grid_layout',
      name: 'VueGridLayout',
      component: () => import('/@/views/testnav/vue_grid_layout/index.vue'),
      meta: {
        title: t('routes.dashboard.vue_grid_layout'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
    {
      path: 'notice_carousel',
      name: 'NoticeCarousel',
      component: () => import('/@/views/testnav/carousel/NoticeCarousel.vue'),
      meta: {
        title: t('routes.dashboard.notice_carousel'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
    {
      path: 'template_1',
      name: 'Template_1',
      component: () => import('/@/views/testnav/template/Template_1.vue'),
      meta: {
        title: t('routes.dashboard.template_1'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
    {
      path: 'demo_1',
      name: 'Demo_1',
      component: () => import('/@/views/testnav/demo/Demo_1.vue'),
      meta: {
        title: t('routes.dashboard.demo_1'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
  ],
}

export default testnav
