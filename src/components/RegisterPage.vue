<template>
  <div id="reg-page">
    <section class="image-section">
      <div class="image-text"></div>
      <img src="/imgs/senki11.jpg" alt="Senki Image" class="main-image" />
    </section>
    <main>
      <div class="form-container">
        <h2>Регистрация</h2>
        <form id="registerForm" @submit.prevent="handleRegister" method="POST">
          <div class="form-group">
            <label for="firstName">Име</label>
            <input
              type="text"
              id="firstName"
              v-model="form.firstName"
              required
              placeholder="Име"
            />
          </div>
          <div class="form-group">
            <label for="lastName">Фамилия</label>
            <input
              type="text"
              id="lastName"
              v-model="form.lastName"
              required
              placeholder="Фамилия"
            />
          </div>
          <div class="form-group">
            <label for="email">Имейл</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              placeholder="Имейл"
            />
          </div>
          <div class="form-group">
            <label for="password">Парола</label>
            <input
              type="password"
              id="password"
              v-model="form.password"
              required
              placeholder="Парола"
            />
          </div>
          <div class="form-group">
            <label for="age">Години</label>
            <input
              type="number"
              id="age"
              v-model.number="form.age"
              min="16"
              max="100"
              required
              placeholder="Години"
            />
          </div>
          <div class="form-group">
            <label for="skinTone">Тон на кожата</label>
            <select id="skinTone" v-model="form.skinTone" required>
              <option value="">Изберете тон на кожата*</option>
              <option value="fair">Светъл</option>
              <option value="medium">Среден</option>
              <option value="dark">Тъмен</option>
            </select>
          </div>
          <div class="form-group">
            <label for="concerns">Притеснения</label>
            <select id="concerns" v-model="form.concerns">
              <option value="">Изберете притеснения*</option>
              <option value="acne">Акне</option>
              <option value="wrinkles">Бръчки</option>
              <option value="pigmentation">Пигментация</option>
            </select>
          </div>
          <div class="form-group">
            <label for="skinType">Тип кожа</label>
            <select id="skinType" v-model="form.skinType" required>
              <option value="">Изберете тип кожа*</option>
              <option value="normal">Нормална</option>
              <option value="dry">Суха</option>
              <option value="oily">Мазна</option>
            </select>
          </div>
          <div class="form-group">
            <label for="experience">Ниво на опит с грим</label>
            <select id="experience" v-model="form.experience" required>
              <option value="">Изберете ниво на опит с грим*</option>
              <option value="beginner">Начинаещ</option>
              <option value="intermediate">Среден</option>
              <option value="advanced">Напреднал</option>
            </select>
          </div>
          <div class="form-group">
            <label for="faceShape">Форма на лицето</label>
            <select id="faceShape" v-model="form.faceShape" required>
              <option value="">Изберете форма на лицето*</option>
              <option value="oval">Овално</option>
              <option value="circle">Кръгло</option>
              <option value="square">Квадратно</option>
            </select>
          </div>
          <div class="form-group">
            <label for="eyeColor">Цвят на очите</label>
            <select id="eyeColor" v-model="form.eyeColor" required>
              <option value="">Изберете цвят на очите*</option>
              <option value="blue">Сини</option>
              <option value="green">Зелени</option>
              <option value="brown">Кафяви</option>
            </select>
          </div>
          <div class="form-group">
            <label for="hairColor">Цвят на косата</label>
            <select id="hairColor" v-model="form.hairColor" required>
              <option value="">Изберете цвят на косата*</option>
              <option value="brown">Кестенява</option>
              <option value="blonde">Руса</option>
              <option value="black">Черна</option>
            </select>
          </div>
          <p class="small-text">
            С тази регистрация си вие се съгласявате с нашите Условия за ползване и
            нашата
            <router-link to="/privacy">Политика за поверителност</router-link>.
          </p>
          <div class="form-group button-container">
            <button type="submit" class="button primary-button">
              Регистрация
            </button>
          </div>
          <p class="form-footer">
            Вече имате профил?
            <router-link to="/login" class="link">Вход</router-link>
          </p>
        </form>
        <p class="small-text">
          С изпращането на този формуляр се съгласявам с Условията за ползване
          на Beauty Assistant (които включват разпоредба за арбитраж) и прочетох
          и потвърждавам Политиката за поверителност на Beauty Assistant. Beauty
          Assistant ще използва личната информация за вас, включително вашите
          коментари в този формуляр, за да ви предоставим персонализирани онлайн
          и офлайн взаимодействия, за подобряване на нашите продукти и услуги,
          за анализи и други цели, изброени в Политиката за поверителност на
          Beauty Assistant. Beauty Assistant също ще използва лична информация
          за вас, за да се свърже с вас, за да отговори на вашата заявка, в
          случай че желаете да се свърже с вас от екипа за обслужване на клиенти
          на Beauty Assistant.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  age: null,
  skinTone: "",
  concerns: "",
  skinType: "",
  experience: "",
  faceShape: "",
  eyeColor: "",
  hairColor: "",
});

const router = useRouter();

const handleRegister = async () => {
  try {
    console.log("Registration submitted:", form);
    // Add your registration logic here (e.g., API call)
    const apiUrl = "http://localhost:3005/auth/register";
    const response = await axios.post(apiUrl, form);
    console.log(response.data);
    alert(response.data.message);
    router.push("/login");
  } catch (error) {
    console.error(
      "Error during registration:",
      error.response?.data || error.message
    );
    alert(error.response?.data.error || error.message);
  }
};
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
  position: relative; /* Ensure main is a positioning context */
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Form container adjustments */
.form-container {
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute; /* Position over the image */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  overflow-y: auto;
  max-height: 600px;
  z-index: 1; /* Ensure it’s above the image */
}

.form-container h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 20px;
}

/* Form group styling */
.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-group label {
  position: absolute;
  top: -0.75rem;
  left: 0.5rem;
  background-color: #fff;
  padding: 0 0.25rem;
  color: #333;
  font-weight: 500;
  pointer-events: none;
  transition: all 0.3s ease;
}

.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group select:focus + label,
.form-group select:not(:placeholder-shown) + label {
  top: -0.75rem;
  left: 0.5rem;
  font-size: 0.75rem;
  color: var(--primary-color);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: all 0.3s ease;
  appearance: none;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
}

/* Button styling */
.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.primary-button {
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.primary-button:hover {
  background-color: #ffffff;
  color: #000000;
  transform: translateY(-1px);
}

/* Button container adjustments */
.button-container {
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 4px;
}

/* Footer adjustments */
.form-footer {
  text-align: center;
  margin-top: 15px;
}

.form-footer a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.form-footer a:hover {
  color: #000000;
}

.small-text {
  font-size: 12px;
  color: #666;
  margin-top: 0.5rem;
  text-align: center;
}

@media (max-width: 768px) {
  .form-container {
    max-width: 90%; /* Reduce the width of the form */
    padding: 15px; /* Adjust padding for smaller screens */
    top: 55%; /* Adjust vertical position */
    margin-top: 11rem;
    transform: translate(-50%, -55%); /* Adjust centering */
  }

  .main-image {
    margin-top: 5rem; /* Reduce the top margin of the image */
  }

  main {
    margin-top: 0; /* Remove extra margin on smaller screens */
  }
}

@media (max-width: 480px) {
  .form-container {
    max-width: 95%; /* Further reduce the width for very small screens */
    margin-top: 14.5rem;
    padding: 10px; /* Adjust padding */
    top: 80%; /* Adjust vertical position */
    transform: translate(-50%, -60%); /* Adjust centering */
  }

  .form-footer {
    font-size: 12px; /* Reduce footer text size */
  }

  .primary-button {
    font-size: 12px; /* Reduce button text size */
    padding: 8px 15px; /* Adjust button padding */
  }
}
</style>
