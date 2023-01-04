import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import '@/assets/main.css';
import BaseLoader from '@/components/ui/BaseLoader.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.component('BaseLoader', BaseLoader);

app.mount('#app');
