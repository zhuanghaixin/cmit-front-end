import type { AppRouteModule } from '/@/router/types'

import { LAYOUT,getParentLayout } from '/@/router/constant'
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
    {
      path: 'chart',
      name: 'Chart_Demo',
      component: () => import('/@/views/testnav/chart/ChartDemo.vue'),
      meta: {
        title: t('routes.dashboard.chart_demo'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
    {
      path: 'list',
      name: 'List_Demo',
      component: () => import('/@/views/testnav/list/ListDemo.vue'),
      meta: {
        title: t('routes.dashboard.list_demo'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
    {
      path: 'list_1',
      name: 'List_Demo_1',
      component: () => import('/@/views/testnav/list/ListDemo1.vue'),
      meta: {
        title: t('routes.dashboard.list_demo_1'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
    {
      path: 'list_2',
      name: 'List_Demo_2',
      component: () => import('/@/views/testnav/list/ListDemo2.vue'),
      meta: {
        title: t('routes.dashboard.list_demo_2'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
    {
      path: 'form_1',
      name: 'Form_Demo_1',
      component: () => import('/@/views/testnav/form/FormDemo1.vue'),
      meta: {
        title: t('routes.dashboard.form_demo_1'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
    {
      path: 'form_2',
      name: 'Form_Demo_2',
      component: () => import('/@/views/testnav/form/FormDemo2.vue'),
      meta: {
        title: t('routes.dashboard.form_demo_2'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: false,
      },
    },
    {
      path:'hook',
      name:'Hook_Demo_1',
      component: getParentLayout('HookDemo'),
      meta: {
        // icon: 'mdi:form-select',
        title: t('routes.dashboard.hook.hook'),
      },
      children: [
        {
          path: '/testnav/hook/useDocumentVisibility',
          name: 'FormBasicDemo',
          component: () => import('/@/views/testnav/hook_demo/useDocumentVisibility.vue'),
          meta: {
            title: t('routes.dashboard.hook.hook_demo_1'),
          },
        },
        // {
        //   path: 'useForm',
        //   name: 'UseFormDemo',
        //   component: () => import('@/views/demo/form/UseForm.vue'),
        //   meta: {
        //     title: t('routes.demo.form.useForm'),
        //   },
        // },
        // {
        //   path: 'refForm',
        //   name: 'RefFormDemo',
        //   component: () => import('@/views/demo/form/RefForm.vue'),
        //   meta: {
        //     title: t('routes.demo.form.refForm'),
        //   },
        // },
        // {
        //   path: 'advancedForm',
        //   name: 'AdvancedFormDemo',
        //   component: () => import('@/views/demo/form/AdvancedForm.vue'),
        //   meta: {
        //     title: t('routes.demo.form.advancedForm'),
        //   },
        // },
        // {
        //   path: 'ruleForm',
        //   name: 'RuleFormDemo',
        //   component: () => import('@/views/demo/form/RuleForm.vue'),
        //   meta: {
        //     title: t('routes.demo.form.ruleForm'),
        //   },
        // },
        // {
        //   path: 'dynamicForm',
        //   name: 'DynamicFormDemo',
        //   component: () => import('@/views/demo/form/DynamicForm.vue'),
        //   meta: {
        //     title: t('routes.demo.form.dynamicForm'),
        //   },
        // },
        // {
        //   path: 'customerForm',
        //   name: 'CustomerFormDemo',
        //   component: () => import('@/views/demo/form/CustomerForm.vue'),
        //   meta: {
        //     title: t('routes.demo.form.customerForm'),
        //   },
        // },
        // {
        //   path: 'appendForm',
        //   name: 'appendFormDemo',
        //   component: () => import('@/views/demo/form/AppendForm.vue'),
        //   meta: {
        //     title: t('routes.demo.form.appendForm'),
        //   },
        // },
        // {
        //   path: 'tabsForm',
        //   name: 'tabsFormDemo',
        //   component: () => import('@/views/demo/form/TabsForm.vue'),
        //   meta: {
        //     title: t('routes.demo.form.tabsForm'),
        //   },
        // },
      ],
    }
  ],
}

export default testnav
