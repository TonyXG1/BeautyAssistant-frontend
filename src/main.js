import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css';
import Dashboard from './components/Dashboard.vue';
import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import HomePage from './components/HomePage.vue';
import { state } from './state.js';
import ChatPage from './components/ChatPage.vue';
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import PrivacyPage from './components/PrivacyPage.vue'

const routes = [
    { path: "/", component: HomePage},
    { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
    { path: "/login", component: LoginPage, meta: { hideFooter: true } },
    { path: "/register", component: RegisterPage, meta: { hideFooter: true } },
    { path: "/chat", component: ChatPage, meta: { requiresAuth: true, hideFooter: true } },
    { path: "/about", component: AboutPage  },
    { path: "/contact", component: ContactPage  },
    { path: "/privacy", component: PrivacyPage  }
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
app.use(Toast, {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true,
})
app.mount('#app')