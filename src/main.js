import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'theme-change'
import i18n from './i18n';
import Cookies from 'js-cookie';

const app = createApp(App)

app.use(router)
app.use(i18n);

// Check and set language from cookies
const savedLanguage = Cookies.get('language');
if (savedLanguage) {
  i18n.global.locale = savedLanguage;
} else {
  Cookies.set('language', 'id');
}

app.mount('#app')