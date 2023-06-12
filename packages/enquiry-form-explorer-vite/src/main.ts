import { createApp } from 'vue';
import { createPinia } from 'pinia';
// Temporary solution -> Error: Cannot find module 'vue3-click-away' or its corresponding type declarations.
// @ts-ignore
import VueClickAway from 'vue3-click-away';

import App from './App.vue';
import router from './router';

import './assets/main.css';

if (import.meta.env.VITE_SITE === 'STATTRAVEL') {
  import('configs-brand-stattravel/index.css');
} else {
  import('configs-brand-explorer/index.css');
}

const app = createApp(App);

app.use(VueClickAway);
app.use(createPinia());
app.use(router);

app.mount('#app');