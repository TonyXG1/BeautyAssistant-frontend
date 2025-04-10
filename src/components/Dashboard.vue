<template>
  <div>
    <section class="image-section">
      <img src="/imgs/senki11.jpg" alt="Senki Image" class="main-image" />
    </section>
    <main>
      <div class="new-container">
        <div class="content">
          <div class="text">
            <h2>
              <strong>Здравей, {{ firstName }}!</strong>
            </h2>
            <h2><strong>Добре дошли във вашият Beauty профил</strong></h2>
            <p class="small-text">
              Управлението на предпочитанията е по ваша преценка и се управлява
              от Политиката за поверителност и Условията за ползване на Beauty
              assistant. Предоставяйки ни информацията по-долу, ние ще можем да
              ви изпратим персонализирана комуникация, която е по-подходяща за
              вашите нужди. Политика за поверителност
              <br /><br />
              За да редактирате своя профил, щракнете върху бутона Управление на
              моя профил по-долу и направете промени. Предпочитанията, в които
              сте регистрирани в момента, са маркирани като избрани в Beauty
              Profile. За да премахнете информация, маркирайте избора си като
              „Предпочитам да не отговарям“ или премахнете отметката от
              отговора.
              <br /><br />
              Моля, обърнете внимание: Beauty assistant използва личната
              информация, която събира и обработва, за да ви предостави
              персонализирано и персонализирано съдържание, реклами, оферти и
              други маркетингови и промоционални комуникации (включително
              промоционални имейли или SMS, изпратени въз основа на избраните от
              вас предпочитания) от Beauty assistant, включително въз основа на
              вашия профил за красота, и за други цели, изброени в Beauty
              assistant Политика за поверителност.
            </p>
          </div>
          <div class="line"></div>
          <div class="user-info">
            <h3 class="account-title">Детайли</h3>
            <div class="user-detail-row">
              <div class="user-detail">
                <strong>Име</strong>
                <p>{{ firstName }}</p>
              </div>
              <div class="user-detail" style="margin-left: 0px">
                <strong>Фамилия</strong>
                <p>{{ lastName }}</p>
              </div>
            </div>
            <div class="user-detail-row">
              <div class="user-detail">
                <strong>Имейл</strong>
                <p>{{ email }}</p>
              </div>
              <div class="user-detail">
                <strong>Години</strong>
                <p>{{ age }}</p>
              </div>
            </div>
            <div class="user-detail-row">
              <div class="user-detail">
                <strong>Тон на кожата</strong>
                <p>{{ skinTone }}</p>
              </div>
              <div class="user-detail" style="margin-left: 0px">
                <strong>Притеснения</strong>
                <p>{{ concerns === null ? "Няма" : concerns }}</p>
              </div>
            </div>
            <div class="user-detail-row">
              <div class="user-detail">
                <strong>Тип кожа</strong>
                <p>{{ skinType }}</p>
              </div>
              <div class="user-detail" style="margin-left: 0px">
                <strong>Ниво на опит с грим</strong>
                <p>{{ experience }}</p>
              </div>
            </div>
            <div class="user-detail-row">
              <div class="user-detail">
                <strong>Форма на лицето</strong>
                <p>{{ faceShape }}</p>
              </div>
              <div class="user-detail" style="margin-left: 0px">
                <strong>Цвят на очите</strong>
                <p>{{ eyeColor }}</p>
              </div>
            </div>
            <div class="user-detail-row">
              <div class="user-detail">
                <strong>Цвят на косата</strong>
                <p>{{ hairColor }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button-container">
        <div class="button-group">
          <button class="button skincare-button" @click="getRoutine">
            Грижа за кожата
          </button>
          <div class="skincare-container">
            <p>
              Изберете каква рутина ви предстои и нашият Beauty assistant ще
              създаде подходяща за вас сутрешна или вечерна рутина според вашия
              тип кожа и притеснения.
            </p>
            <div class="routine-buttons">
              <button
                class="routine-button"
                :class="{ selected: selectedRoutine === 'morning' }"
                @click="selectRoutine('morning')"
              >
                Дневна рутина
              </button>
              <button
                class="routine-button"
                :class="{ selected: selectedRoutine === 'evening' }"
                @click="selectRoutine('evening')"
              >
                Вечерна рутина
              </button>
            </div>
            <div id="advice-container">
              <p
                v-if="routineText.length != 0"
                v-html="formattedRoutineText"
              ></p>
            </div>
          </div>
        </div>

        <div class="button-group">
          <button @click="getMakeup" class="button makeup-button">
            Персонализиран грим
          </button>
          <div class="makeup-container">
            <p>
              Изберете поводът за вашата визия и нашият Beauty assistant
              мигновено ще ви съдейства с подходящия грим точно за вас според
              вашите особености като тон на кожата, тип кожа, притеснения, също
              ще ви даде съвет, който е спрямо вашият опит с грим.
            </p>
            <div class="routine-buttons">
              <button
                class="routine-button"
                :class="{ selected: selectedMakeup === 'everyday' }"
                @click="selectMakeup('everyday')"
              >
                Ежедневен
              </button>
              <button
                class="routine-button"
                :class="{ selected: selectedMakeup === 'night' }"
                @click="selectMakeup('night')"
              >
                Вечерен
              </button>
              <button
                class="routine-button"
                :class="{ selected: selectedMakeup === 'wedding' }"
                @click="selectMakeup('wedding')"
              >
                Сватбен
              </button>
            </div>
            <div id="advice-container">
              <p v-if="makeupText.length != 0" v-html="formattedMakeupText"></p>
            </div>
          </div>
        </div>

        <div class="button-group">
          <a href="reminder.html" class="button reminder-button">Напомняне</a>
          <div class="reminder-container">
            <p>
              Тук може да получавате имейл като известие, за да не пропускате
              нито една beauty процедура.
            </p>
          </div>
        </div>

        <div class="button-group">
          <a href="chat.html" class="button chat-button">Чат</a>
          <div class="chat-container">
            <p>
              Натиснете тук, за да се отправите към група, в която ще можете да
              разменяте съвети и техники с други гримьори и начинаещи.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, reactive, inject, computed } from "vue";
import { createWebHistory, useRouter } from "vue-router";

const state = inject("state");
const firstName = state.userData.firstName;
const lastName = state.userData.lastName;
const email = state.userData.email;
const age = state.userData.age;
const skinTone = state.userData.skinTone;
const skinType = state.userData.skinType;
const concerns = state.userData.concerns;
const experience = state.userData.experience;
const faceShape = state.userData.faceShape;
const eyeColor = state.userData.eyeColor;
const hairColor = state.userData.hairColor;

const selectedRoutine = ref("morning");
const selectedMakeup = ref("everyday");
const selectRoutine = (routine) => {
  selectedRoutine.value = routine;
};
const routineText = ref("");
const makeupText = ref("");
const selectMakeup = (makeup) => {
  selectedMakeup.value = makeup;
};

const getRoutine = async () => {
  try {
    const apiUrl = "http://localhost:3005/skinRoutine";
    const userId = state.userData.id;
    const response = await axios.get(apiUrl, { params: { userId } });
    if (selectedRoutine.value === "morning") {
      routineText.value = response.data.routine.dayRoutine;
    } else {
      routineText.value = response.data.routine.nightRoutine;
    }
  } catch (error) {
    console.error(
      "Error loading routine:",
      error.response?.data || error.message
    );
    alert(error.response?.data.error || error.message);
  }
};

const getMakeup = async () => {
  try {
    const apiUrl = "http://localhost:3005/makeupRoutine";
    const userId = state.userData.id;
    const response = await axios.get(apiUrl, { params: { userId } });
    if (selectedMakeup.value === "everyday") {
      makeupText.value = response.data.makeup.everyDayMakeup;
    } else if (selectedMakeup.value === "night") {
      makeupText.value = response.data.makeup.nightMakeup;
    } else if (selectedMakeup.value === "wedding") {
      makeupText.value = response.data.makeup.weddingMakeup;
    }
  } catch (error) {
    console.error(
      "Error loading makeup:",
      error.response?.data || error.message
    );
    alert(error.response?.data || error.message);
  }
};

const formattedRoutineText = computed(() => {
  return routineText.value.replace(/\n/g, "<br>");
});

const formattedMakeupText = computed(() => {
  return makeupText.value.replace(/\n/g, "<br>");
});
</script>

<style scoped>
body {
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  color: #333;
  line-height: 1.6;
}

body.index-page {
  background-color: var(--background-color);
  margin: 0;
  color: var(--text-color);
  line-height: 1.6;
}

main {
  display: block;
  unicode-bidi: isolate;
  margin-top: 12rem;
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  border-radius: 0px;
  box-shadow: var(--shadow);
}

.senki-image {
  width: 100%;
  height: auto;
  display: block;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem; /* Reduce the padding to make the navbar smaller */
  margin-top: -3rem;
}

.logo-container.hidden {
  opacity: 0; /* Hide the logo */
  transition: opacity 0.3s ease;
}

.logo-container {
  text-align: center;
  flex: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  font-size: 0; /* Remove text logo */
  margin: 0; /* Remove margin to center the logo */
}

.logo:hover {
  color: #ffffff;
}

.logo-image {
  max-width: 500px; /* Increase the size as needed */
  height: auto;
}

.logo-subtext {
  font-size: 24px; /* Increased font size */
  font-weight: 400;
  color: var(--primary-color);
  text-decoration: none;
}

.image-section {
  position: relative;
  width: 100%;
  margin-top: 4rem; /* Добавете отстъп тук */
}

.new-container {
  top: auto; /* Премахнете абсолютното позициониране */
  left: auto;
  transform: none;
  position: relative; /* Променете на относително позициониране */
  background-color: rgb(255, 255, 255);
  padding: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80%;
  max-width: 1100px;
  margin: 0 auto; /* Центрирайте контейнера */
  margin-top: -20rem;
}

.line {
  width: 1px;
  height: 35rem;
  background-color: #ccc;
  margin: 0 20px; /* Adjust the margin to center the line */
  margin-left: 2rem;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center; /* Center the content */
}

.text {
  margin-right: 20px; /* Adjust the margin to balance the space */
  font-size: 18px; /* Smaller font size */
  color: #333;
  text-align: left; /* Align text to the left */
  flex: 1; /* Allow the text to take up available space */
}

.text h2 {
  font-size: 18px; /* Smaller font size for h2 elements */
}

.small-text {
  font-size: 14px; /* Smaller font size for the additional text */
  color: #333;
  text-align: left; /* Align text to the left */
  margin-top: 10px;
}

.user-info {
  margin-left: 20px; /* Adjust the margin to balance the space */
  text-align: left;
  flex: 1; /* Allow the user info to take up available space */
  margin-top: 17rem; /* Move the user info up */
}

.user-info p {
  margin: -2px 0;
}

.user-detail {
  margin-bottom: 15px; /* Increase the space between user details */
  flex: 1;
}

.user-detail-row {
  display: flex;
  justify-content: space-between;
  gap: 20px; /* Adjust the gap value as needed */
}

.user-detail p {
  text-align: left; /* Align the text to the left */
}

.account-title {
  font-size: 20px; /* Increase the font size */
  font-weight: bold;
  text-align: left;
  margin-bottom: 50px; /* Add more space between the title and the text */
  margin-top: -24rem;
}

.button.edit-button {
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
  border-radius: 25px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  position: absolute;
  top: 10px;
  right: 10px;
}

.button.edit-button:hover {
  background-color: #333;
  color: #fff;
  transform: translateY(-2px);
}

.skincare-button-container {
  text-align: center;
  margin-top: -1rem; /* Преместете бутона нагоре, като застъпва new-container */
  margin-left: -50rem;
  position: relative; /* Позволява преместване спрямо нормалния поток */
  z-index: 10; /* Уверете се, че бутонът е над new-container */
}

.button.skincare-button {
  background-color: #000000; /* Черен цвят за бутона */
  color: white;
  border: none;
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button.skincare-button:hover {
  background-color: #3a3a3a; /* По-тъмен цвят при задържане */
  transform: translateY(-2px);
}

.button-container {
  display: flex;
  flex-direction: column; /* Подредете бутоните и контейнерите вертикално */
  align-items: center; /* Центрирайте бутоните и контейнерите хоризонтално */
  gap: 2rem; /* Разстояние между групите бутони и контейнери */
}

.button-group {
  display: flex;
  flex-direction: column; /* Подредете бутона и контейнера вертикално */
  align-items: center; /* Центрирайте съдържанието хоризонтално */
  width: 100%; /* Уверете се, че групата заема цялата ширина */
}

.button-group .button {
  margin-bottom: 10px; /* Разстояние между бутона и контейнера */
}

.button.skincare-button,
.button.makeup-button,
.button.reminder-button,
.button.chat-button {
  background-color: #000000; /* Черен цвят за бутоните */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 200px; /* Фиксирана ширина */
  height: 50px; /* Фиксирана височина */
  display: flex;
  align-items: center; /* Центрира текст вертикално */
  justify-content: center; /* Центрира текст хоризонтално */
  margin-top: 2rem;
}

.button.skincare-button:hover,
.button.makeup-button:hover,
.button.reminder-button:hover,
.button.chat-button:hover {
  background-color: #3a3a3a; /* По-тъмен цвят при задържане */
  transform: translateY(-2px);
}

/* Контейнер за грижа за кожата */
.skincare-container {
  background-color: #ffffff;
  padding: 5rem;
  margin-top: 10px; /* Добавете разстояние под бутона */
  text-align: center;
  position: relative;
  width: 50%; /* Задайте ширина за контейнерите */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Контейнер за персонализиран грим */
.makeup-container {
  background-color: #ffffff;
  padding: 5rem;
  margin-top: 10px; /* Добавете разстояние под бутона */
  border: 1px solid #ffffff;
  text-align: center;
  position: relative;
  width: 50%; /* Задайте ширина за контейнерите */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Контейнер за напомняне */
.reminder-container {
  background-color: #ffffff;
  padding: 5rem;
  margin-top: 10px; /* Добавете разстояние под бутона */
  border: 1px solid #ffffff;
  text-align: center;
  position: relative;
  width: 50%; /* Задайте ширина за контейнерите */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Контейнер за чат */
.chat-container {
  background-color: #ffffff;
  padding: 5rem;
  margin-top: 10px; /* Добавете разстояние под бутона */
  border: 1px solid #ffffff;
  text-align: center;
  position: relative;
  width: 50%; /* Задайте ширина за контейнерите */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.routine-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.routine-button {
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.routine-button:hover {
  background-color: #e0e0e0;
}

.routine-button.selected {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-color: var(--primary-color);
}

#advice-container {
  margin-top: 15px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
