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
                <p>
                  {{
                    concerns === null || concerns.length === 0
                      ? "Няма"
                      : concerns
                  }}
                </p>
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
          <button class="button reminder-button" @click="setReminders">Напомняне</button>
          <div class="reminder-container">
            <p>
              Тук може да получавате имейл като известие, за да не пропускате
              нито една beauty процедура.
            </p>
            <div class="reminder-buttons">
              <div class="reminder">
                <button
                  class="routine-button"
                  @click="selectDayReminder"
                  :class="{ selected: isMorningReminderSelected }"
                >
                  Сутрин
                </button>
                <input
                  v-if="isMorningReminderSelected"
                  v-model="morningReminder"
                  type="time"
                  value="08:00"
                  min="05:00"
                  max="11:00"
                  step="900"
                  required
                />
              </div>
              <div class="reminder">
                <button
                  class="routine-button"
                  @click="selectNightReminder"
                  :class="{ selected: isNightReminderSelected }"
                >
                  Вечер
                </button>
                <input
                  v-if="isNightReminderSelected"
                  v-model="nightReminder"
                  type="time"
                  value="20:00"
                  min="05:00"
                  max="11:00"
                  step="900"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div class="button-group">
          <router-link to="/chat" class="button chat-button">Чат</router-link>
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

if (!state || !state.userData) {
  console.error("State or user data is not available!");
  router.push("/login");
}

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

const isMorningReminderSelected = ref(state.userData.morningReminder !== null);
const isNightReminderSelected = ref(state.userData.nightReminder !== null);
const morningReminder = ref(state.userData.morningReminder);
const nightReminder = ref(state.userData.nightReminder);

const selectDayReminder = () => {
  isMorningReminderSelected.value = !isMorningReminderSelected.value;
};

const selectNightReminder = () => {
  isNightReminderSelected.value = !isNightReminderSelected.value;
}

const setReminders = async () => {
  //get reminders from frontend
  const reminders = {
    morningReminder: null,
    nightReminder: null
  };
  if(isMorningReminderSelected) reminders.morningReminder = morningReminder.value;
  if(isNightReminderSelected) reminders.nightReminder = nightReminder.value;

  try {
    const apiUrl = "http://localhost:3005/setReminders";
    const userId = state.userData.id;
    console.log(userId);
    console.log(reminders);
    const response = await axios.post(apiUrl, {userId, reminders} )
    alert(response.data.message);

  } catch (error) {
    console.error(
      "Error setting reminders:",
      error.response?.data || error.message
    );
    alert(error.response?.data.error || error.message);
  }  
}

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

main {
  display: block;
  margin-top: 12rem;
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  box-shadow: var(--shadow);
}

.new-container {
  position: relative;
  background-color: rgb(255, 255, 255);
  padding: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: -20rem;
}

.line {
  width: 1px;
  height: 35rem;
  background-color: #ccc;
  margin-left: 2rem;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  margin-right: 20px;
  font-size: 18px;
  color: #333;
  text-align: left;
  flex: 1;
}

.text h2 {
  font-size: 18px;
}

.small-text {
  font-size: 14px;
  color: #333;
  text-align: left;
  margin-top: 10px;
}

.user-info {
  margin-left: 20px;
  text-align: left;
  flex: 1;
  /* margin-top: 17rem; */
}

.user-detail {
  /* margin-bottom: 15px; */
  flex: 1;
}

.user-detail-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.account-title {
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 30px;
  /* margin-top: -20rem; */
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.button-group .button {
  margin-bottom: 10px;
  text-decoration: none;
}

.button {
  background-color: #000000;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.chat-button{
  width: 160px;
  height: 30px;
}

.button:hover {
  background-color: #3a3a3a;
  transform: translateY(-2px);
}

.skincare-container,
.makeup-container,
.reminder-container,
.chat-container {
  background-color: #ffffff;
  padding: 5rem;
  margin-top: 10px;
  text-align: center;
  position: relative;
  width: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.routine-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.reminder-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.reminder {
  display: flex;
  flex-direction: column;
  gap: 10px;
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

#advice-container p {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.5;
}
</style>
