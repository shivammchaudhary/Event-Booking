
Before actually starting project 

Step 1

Setup Folder Structure

Create a clean and scalable structure:

src/
├── assets/          // Static assets like images, styles
├── components/      // Reusable components
├── views/           // Page components
├── router/          // Vue Router setup
├── store/           // Vuex state management
├── services/        // API requests and logic
├── utils/           // Utility functions
├── App.vue          // Root component
├── main.js          // Entry point
└── .env             // Environment variables


Setup Vue Router then inform main.js 

"import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
"
Created functions 
