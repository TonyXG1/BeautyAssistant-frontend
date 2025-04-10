import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import HomePage from './components/HomePage.vue';

const routes = [
    { path: "/", component: HomePage},
    { path: "/dashboard", component: Dashboard},
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });


const app = createApp(App);
app.use(router);
app.mount('#app')