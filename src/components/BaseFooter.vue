<template>
  <div>
    <footer class="footer-nav">
      <div class="footer-container">
        <a href="#" class="link">Начало</a>
        <router-link to="/about" class="link">За нас</router-link>
        <router-link to="/contact" class="link">Контакти</router-link>
        <router-link to="/privacy" class="link">Поверителност</router-link>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.footer-nav {
  background-color: #000;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  position: relative;
  width: 100%;
}

.footer-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.footer-container .link {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-container .link:hover {
  color: #9c9999;
}
</style>
