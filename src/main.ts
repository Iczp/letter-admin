import 'vue/jsx';

// 引入windi css
import '@/plugins/unocss';

// 导入全局的svg图标
import '@/plugins/svgIcon';

// 初始化多语言
import { setupI18n } from '@/plugins/vueI18n';

// 引入状态管理
import { setupStore } from '@/store';

// 全局组件
import { setupGlobCom } from '@/components';

// 引入element-plus
import { setupElementPlus } from '@/plugins/elementPlus';

// 引入全局样式
import '@/styles/index.less';

// 引入动画
import '@/plugins/animate.css';

// 路由
import { setupRouter } from './router';

// 权限
import { setupPermission } from './directives';

import { createApp } from 'vue';

import App from './App.vue';

import './permission';

import { configClient } from './configClient';

import VueKonva from 'vue-konva';

// 创建实例
const setupAll = async () => {
  const app = createApp(App);

  configClient(app);

  await setupI18n(app);

  setupStore(app);

  setupGlobCom(app);

  setupElementPlus(app);

  setupRouter(app);

  setupPermission(app);

  app.use(VueKonva);

  app.mount('#app');
};

setupAll();
