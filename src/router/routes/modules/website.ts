import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/website',
  name: '数据中心',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '数据中心',
  },
  children: [
    {
      path: 'todo',
      name: 'todo',
      component: () => import('/@/views/website/todo/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.website.todo'),
      },
    },
    {
      path: 'tools',
      name: 'tools',
      component: () => import('/@/views/website/tools/index.vue'),
      meta: {
        title: t('routes.website.tools'),
      },
    },
    {
      path: 'learning',
      name: 'learning',
      component: () => import('/@/views/website/learning/index.vue'),
      meta: {
        title: t('routes.website.learning'),
      },
    },
  ],
};

export default dashboard;
