<template>
  <div>
    <section class="image-section">
      <div class="image-text"></div>
      <img src="/imgs/senki11.jpg" alt="Senki Image" class="main-image" />
    </section>

    <main>
      <div class="login-container">
        <h2>Вход</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-container">
            <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="Въведи e-mail"
            />
          </div>
          <div class="input-container">
            <input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="Въведи парола"
            />
          </div>
          <p class="small-text no-margin">
            С влизането си вие се съгласявате с нашите
            <a href="#">Условия за ползване</a> и нашата
            <a href="#">Политика за поверителност</a>.
          </p>
          <button type="submit" class="primary-button">Вход</button>
          <p class="small-text">
            С изпращането на този формуляр се съгласявам с Условията за ползване
            на Beauty Assistant (които включват разпоредба за арбитраж) и
            прочетох и потвърждавам Политиката за поверителност на Beauty
            Assistant. Beauty Assistant ще използва личната информация за вас,
            включително вашите коментари в този формуляр, за да ви предоставим
            персонализирани онлайн и офлайн взаимодействия, за подобряване на
            нашите продукти и услуги, за анализи и други цели, изброени в
            Политиката за поверителност на Beauty Assistant. Beauty Assistant
            също ще използва лична информация за вас, за да се свърже с вас, за
            да отговори на вашата заявка, в случай че желаете да се свърже с вас
            от екипа за обслужване на клиенти на Beauty Assistant.
          </p>
        </form>
      </div>

      <div class="new-container">
        <h3>Създай нов акаунт</h3>
        <router-link to="/register">
          <button>Регистрация</button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

// Reactive state
const state = inject("state");
const email = ref("");
const password = ref("");
const router = useRouter();
const lastScrollTop = ref(0);
const isScrolledDown = ref(false);

// Scroll handler
const handleScroll = () => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop.value) {
    isScrolledDown.value = true;
  } else {
    isScrolledDown.value = false;
  }
  lastScrollTop.value = st <= 0 ? 0 : st;
};

// Login handler
const handleLogin = async () => {
  try {
    console.log("Login submitted with email:", email.value);
    const apiUrl = "http://localhost:3005/auth/login";
    const userData = {
      email: email.value,
      password: password.value
    };
    const response = await axios.post(apiUrl, userData);
    alert(response.data.message);

    state.userData = response.data.user;
    state.isLoggedIn = true;
    console.log(state.userData);
    router.push("/dashboard");
  } catch (error) {
    console.error(
      "Error during login:",
      error.response?.data || error.message
    );
    alert(error.response?.data.error || error.message);
  };
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.image-section {
  width: 100%;
  position: relative;
  margin-top: 0px;
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}

.main-image {
  width: 100%;
  height: auto;
  background-size: cover;
  display: block;
  margin: 70;
  border-radius: 0px;
  box-shadow: var(--shadow);
  margin-top: 7rem;
}

main {
  margin-top: 20px;
  padding: -20rem;
  /* min-height: calc(70vh - 150px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 0px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -20%);
}

.login-container h2 {
  text-align: left;
  color: var(--primary-color);
  margin-bottom: 20px;
  font-size: 30px;
}

.login-container form {
  display: flex;
  flex-direction: column;
  align-items: left;
}

.login-container input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ffffff;
  border-radius: 0px;
  width: 40%;
}

.login-container button {
  margin: 10px 0px 10px 0px;
  padding: 1rem;
  border: none;
  border-radius: 0px;
  background-color: #212020;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  width: 50%;
}

.login-container button:hover {
  background-color: #333;
}

.login-container p {
  font-size: 10px;
  color: #666;
  margin-top: 0.5rem;
}

.login-container a {
  color: #212020;
  text-decoration: none;
  font-weight: 600;
}

.login-container a:hover {
  text-decoration: underline;
}

.new-container {
  max-width: 400px;
  width: 100%;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 73%;
  left: 70%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.new-container h3 {
  color: #333;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
}

.new-container button {
  padding: 15px 25px;
  border: 2px solid #000;
  border-radius: 0px;
  background-color: #fff;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.new-container button:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}

.transparent-navbar {
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.3s ease;
}

.input-container {
  position: relative;
  margin-bottom: 1.5rem;
  width: 50%;
}

.input-container input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0px;
  box-sizing: border-box;
}

.small-text {
  font-size: 14px;
  color: #666;
  margin-top: 0.5rem;
  margin-right: 45rem;
}

.no-margin {
  margin: 0;
}
</style>
