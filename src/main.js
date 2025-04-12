import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import HomePage from './components/HomePage.vue';
import { state } from './state.js';
import ChatPage from './components/ChatPage.vue';

const routes = [
    { path: "/", component: HomePage},
    { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "/chat", component: ChatPage, meta: { requiresAuth: true } }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeEach((to, from, next) => {
    console.log('isLoggedIn:', state.isLoggedIn); // Debugging
    if (to.meta.requiresAuth && !state.isLoggedIn) {
      next("/login"); // Redirect to login if not logged in
    } else {
      next(); // Allow navigation
    }
  });

const app = createApp(App);
app.use(router);
app.mount('#app')