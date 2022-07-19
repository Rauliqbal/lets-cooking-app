import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import './index.css'
import router from './router'
import "boxicons/css/boxicons.min.css";

createApp(App).use(router).mount('#app')
