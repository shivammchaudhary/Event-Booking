import { createApp } from 'vue'
import './assets/tailwind.css';
import App from './App.vue'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router);
app.mount('#app');

createApp(App).mount('#app')


const app = createApp(App);
app.use(store);
