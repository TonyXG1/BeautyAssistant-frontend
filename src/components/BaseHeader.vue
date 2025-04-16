<template>
  <header id="header">
    <nav class="main-nav">
      <div class="logo-container">
        <router-link to="/" class="logo">
          <img
            src="/imgs/logo.png"
            alt="Beauty Assistant Logo"
            class="logo-image"
          />
        </router-link>
      </div>
      <div v-if="state.isLoggedIn" class="nav-links">
        <div class="nav-item">
          <router-link to="/dashboard" class="button secondary-button"
            >Профил</router-link
          >
        </div>
        <div class="nav-item">
          <router-link to="/chat" class="button secondary-button"
          >Чат</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/" @click="logout" class="button secondary-button"
            >Изход</router-link
          >
        </div>
      </div>

      <div v-else class="nav-links">
        <div>
          <router-link to="/login" class="button secondary-button"
          >Вход</router-link
        >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { inject } from "vue";
import { saveState } from "../state";

const state = inject("state");
  
const router = useRouter();

// Logout function
const logout = () => {
  console.log(state.isLoggedIn);
  state.isLoggedIn = false;
  state.userData = null;
  saveState();
};
</script>

<style scoped>
header#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -7rem;
}

.logo-container {
  text-align: center;
  /* flex: 10; */
}

.logo {
  display: inline-block;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  padding: 0;
  color: var(--primary-color);
  text-decoration: none;
  margin-bottom: -10px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a,
.nav-links button {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links .button.secondary-button {
  margin-top: 7rem;
  display: inline-block;
  grid-area: 10px;
}

.button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 60px;
}

.button:hover {
  color: var(--primary-color);
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  transition: color 0.2s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

.logo-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 1rem auto;
  margin-top: 7.5rem;
}
.logo-image:hover {
  opacity: 70%;
  transition: opacity 0.3s ease-in-out;
}

/* TODO */
@media (max-width: 1200px) {
  .main-nav {
    padding: 0 20px;
  }
}

@media (max-width: 992px) {
  .main-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    gap: 10px;
  }

  .logo-image {
    margin-top: 5rem;
  }
}

@media (max-width: 768px) {
  .logo-image {
    width: 80%;
  }

  .button {
    font-size: 14px;
    padding: 8px 16px;
  }
}

@media (max-width: 576px) {
  .main-nav {
    align-items: center;
  }

  .logo-image {
    margin-top: 3rem;
  }

  .nav-links {
    gap: 5px;
  }

  .button {
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
