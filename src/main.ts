import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import '@/assets/main.css';
import BaseLoader from '@/components/ui/BaseLoader.vue';
import BaseSearch from './components/users/UI/BaseSearch.vue';
import vuetify from '@/vuetify';
import VueApexCharts from 'vue3-apexcharts';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(VueApexCharts);
app.component('BaseSearch', BaseSearch);
app.component('BaseLoader', BaseLoader);

app.mount('#app');
