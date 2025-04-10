<template>
  <div class="index-page">
    <main>
      <section class="image-section">
        <div class="image-text">
          <router-link v-if="state.isLoggedIn" to="/dashboard" class="button primary-button"
            >Започнете сега</router-link
          >
          <router-link v-else to="/register" class="button primary-button"
            >Започнете сега</router-link
          >
        </div>
        <img src="/imgs/ednoLice5.jpg" alt="Beauty Image" class="main-image" />
      </section>
      <section class="intro-text">
        <h2>Запознай се с твоя личен асистент гримьор</h2>
        <p class="sub-text">
          Експертизата в областта на красотата вече е в дланта ви
        </p>
        <p class="description-text">
          Beauty Assistant е създаден, за да ви даде експертен анализ, препоръки
          за продукти и персонализирани процедури - всичко съобразено с вашите
          индивидуални нужди. Той е безпроблемен, лесен за използване и има
          отговорите на всички ваши въпроси за красотата - винаги, когато имате
          нужда от тях, където и да сте.
        </p>
        <img src="/imgs/primer.jpg" alt="Blur Image" class="small-image" />
        <h3 class="large-text">
          ПЕРСОНАЛИЗИРАН СЪВЕТ ЗА ГРИМ И ГРИЖА ЗА КОЖАТА СПОРЕД ВСЯКА ВАША
          ОСОБЕНОСТ
        </h3>
        <div class="skin-tone-section">
          <img
            src="/imgs/cvqtKoja2.jpg"
            alt="Skin Tone Image"
            class="skin-tone-image"
          />
          <div class="skin-tone-text-container">
            <p class="skin-tone-title">Според вашия тон на кожата</p>
            <p class="skin-tone-text">
              Притеснявате се, че не може да откриете точния грим за вас? Вече
              няма нужда с нашия Beauty асистент, той ще се погрижи.
            </p>
          </div>
        </div>
        <div class="skin-type-section">
          <div class="skin-type-text-container">
            <p class="skin-type-title">Според вашият тип кожа</p>
            <p class="skin-type-text">
              Кожата ви е прекалено мазна или суха? При въвеждане на вашите
              данни според типа кожа, нашия Beauty асистент ще се погрижи за
              вашатия блясък и хидратация.
            </p>
          </div>
          <img
            src="/imgs/maznaSuha2.jpg"
            alt="Skin Type Image"
            class="skin-type-image"
          />
        </div>
        <div class="concerns-section">
          <img
            src="/imgs/pritesneniq2.jpg"
            alt="Concerns Image"
            class="concerns-image"
          />
          <div class="concerns-text-container">
            <p class="concerns-title">Според вашите притеснения</p>
            <p class="concerns-text">
              С нас повече няма се притеснявате как да се погрижите за кожата си
              склонна към акне или да прикриете бръчки и пигментация сякаш
              никога не ги е имало с подходящия грим и грижа за кожата, който
              Beauty асистентът ни ще ви посъветва.
            </p>
          </div>
        </div>
        <div class="hair-section">
          <div class="hair-text-container">
            <p class="hair-title">Според вашата коса</p>
            <p class="hair-text">
              Открийте подходящия грим, с който вашата коса ще бъде допълнение
              към него и ще се откроявате максимално.
            </p>
          </div>
          <img src="/imgs/kosa2.jpg" alt="Hair Image" class="hair-image" />
        </div>
        <div class="eyes-section">
          <img src="/imgs/ochi2.jpg" alt="Eyes Image" class="eyes-image" />
          <div class="eyes-text-container">
            <p class="eyes-title">Според вашите очи</p>
            <p class="eyes-text">
              Искате да подчертаете красотат на очите си? Изберете вашия цвят и
              Beauty асистентът ни ще се погрижи да изпъкнете.
            </p>
          </div>
        </div>
      </section>
      <section class="faq-section">
        <h3 class="faq-title">Често задавани въпроси</h3>
        <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
          <button class="faq-question" @click="toggleFaq(index)">
            {{ faq.question }}
            <i :class="faq.isOpen ? 'fas fa-minus' : 'fas fa-plus'"></i>
          </button>
          <div class="faq-answer" v-show="faq.isOpen">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer-nav">
      <div class="footer-container">
        <router-link to="/">Начало</router-link>
        <router-link to="/about">За нас</router-link>
        <router-link to="/contact">Контакти</router-link>
        <router-link to="/privacy">Поверителност</router-link>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

const state = inject("state");

// FAQ data with toggle state
const faqs = ref([
  {
    question: "Как да се регистрирам?",
    answer:
      "За да се регистрирате, натиснете бутона 'Започнете сега' и следвайте инструкциите.",
    isOpen: false,
  },
  {
    question: "Как да използвам Beauty Assistant?",
    answer:
      "След като се регистрирате, въведете вашите данни и следвайте препоръките на Beauty Assistant.",
    isOpen: false,
  },
  {
    question: "Какви услуги предлага Beauty Assistant?",
    answer:
      "Beauty Assistant предлага персонализирани препоръки за грим и грижа за кожата, базирани на вашите индивидуални нужди.",
    isOpen: false,
  },
]);

// Toggle FAQ visibility
const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<style scoped>
.index-page {
  background-color: var(--background-color);
  margin: 0;
  color: var(--text-color);
  line-height: 1.6;
}

.button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background-color: #9c9999;
  transform: translateY(-2px);
}

.primary-button {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  box-shadow: 0 0 10px 10px var(--accent-color);
  width: 100%;
  padding: 15px;
  font-size: 2rem;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}

.primary-button:hover {
  background-color: var(--accent-color);
  color: var(--primary-color);
  transform: translateY(-2px);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

main {
  margin-top: 80px;
  padding: 0rem;
  min-height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image-section {
  width: 100%;
  position: relative;
  top: 4px;
}

.image-text {
  position: absolute;
  top: 75%;
  left: 10%;
  transform: translateY(-50%);
  color: var(--secondary-color);
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0px;
  box-shadow: var(--shadow);
}

.intro-text {
  text-align: center;
  margin-top: 0;
  font-size: 2.5rem;
  color: var(--primary-color);
  font-weight: 700;
}

.sub-text {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-top: -2rem;
}

.description-text {
  font-size: 1rem;
  color: var(--primary-color);
  margin-top: 1rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

.small-image {
  display: block;
  margin: 1rem auto;
  max-width: 70%;
  height: auto;
  border-radius: 15px;
  box-shadow: var(--shadow);
}

.large-text {
  text-align: center;
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 700;
  margin-top: 6rem;
}

.skin-tone-section {
  display: flex;
  align-items: center;
  margin-top: 4rem;
}

.skin-tone-image {
  max-width: 650px;
  height: auto;
  border-radius: 3px;
  box-shadow: var(--shadow);
  margin-right: 6rem;
  margin-left: 6rem;
}

.skin-tone-text-container {
  display: flex;
  flex-direction: column;
  margin-right: 7rem;
}

.skin-tone-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
  text-align: left;
}

.skin-tone-text {
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 400;
  margin-top: -2rem;
  text-align: left;
}

.skin-type-section {
  display: flex;
  align-items: center;
  margin-top: 4rem;
}

.skin-type-image {
  max-width: 650px;
  height: auto;
  border-radius: 3px;
  box-shadow: var(--shadow);
  margin-left: 6rem;
  margin-right: 6rem;
}

.skin-type-text-container {
  display: flex;
  flex-direction: column;
  margin-left: 7rem;
}

.skin-type-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
  text-align: left;
}

.skin-type-text {
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 400;
  margin-top: -2rem;
  text-align: left;
}

.concerns-section {
  display: flex;
  align-items: center;
  margin-top: 4rem;
}

.concerns-image {
  max-width: 650px;
  height: auto;
  border-radius: 3px;
  box-shadow: var(--shadow);
  margin-right: 6rem;
  margin-left: 6rem;
}

.concerns-text-container {
  display: flex;
  flex-direction: column;
  margin-right: 7rem;
}

.concerns-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
  text-align: left;
}

.concerns-text {
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 400;
  margin-top: -2rem;
  text-align: left;
}

.hair-section {
  display: flex;
  align-items: center;
  margin-top: 4rem;
}

.hair-image {
  max-width: 650px;
  height: auto;
  border-radius: 3px;
  box-shadow: var(--shadow);
  margin-left: 6rem;
  margin-right: 6rem;
}

.hair-text-container {
  display: flex;
  flex-direction: column;
  margin-left: 7rem;
}

.hair-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
  text-align: left;
}

.hair-text {
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 400;
  margin-top: -2rem;
  text-align: left;
}

.eyes-section {
  display: flex;
  align-items: center;
  margin-top: 4rem;
}

.eyes-image {
  max-width: 650px;
  height: auto;
  border-radius: 3px;
  box-shadow: var(--shadow);
  margin-right: 6rem;
  margin-left: 6rem;
}

.eyes-text-container {
  display: flex;
  flex-direction: column;
  margin-right: 7rem;
}

.eyes-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
  text-align: left;
}

.eyes-text {
  font-size: 1rem;
  color: var(--primary-color);
  font-weight: 400;
  margin-top: -2rem;
  text-align: left;
}

.faq-section {
  margin-top: 4rem;
  padding: 1rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: var(--shadow);
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  font-family: "Poppins", sans-serif;
  margin-bottom: 4rem;
}

.faq-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 850;
}

.faq-item {
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}

.faq-question {
  background-color: transparent;
  color: var(--primary-color);
  padding: 0.5rem 0;
  width: 100%;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  transition: color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question:hover {
  color: #9c9999;
}

.faq-answer {
  padding: 0.5rem 0;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 0.5rem;
}

.faq-answer p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--primary-color);
  font-weight: 300;
}

.full-width-image-section {
  width: 100%;
  position: relative;
}

.worth-it-image {
  width: 100%;
  height: auto;
  display: block;
}

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

.footer-container a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-container a:hover {
  color: #9c9999;
}
</style>
