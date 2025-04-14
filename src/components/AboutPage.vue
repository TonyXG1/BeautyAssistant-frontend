<template>
  <div>
    <main>
      <section class="image-section">
        <img src="/imgs/aboutBanner.jpg" alt="" class="main-image" />
      </section>
      <section class="intro-text">
        <h2>
          Правим красотата лесна - с персонализирани съвети, чат форум и рутина
          само за теб
        </h2>
      </section>
      <section class="about-sections">
        <div class="section-container">
          <h3>Нашата мисия</h3>
          <p>
            Да направим красотата достъпна и персонализирана за всеки. Ние
            вярваме, че всеки заслужава да се чувства уверен в кожата си.
          </p>
        </div>
        <div class="images-container">
          <img
            src="/imgs/skinCare1.jpg"
            alt="Нашата мисия"
            class="grid-image"
          />
          <img src="/imgs/skinCare2.jpg" alt="Как работи" class="grid-image" />
        </div>
        <div class="section-container">
          <h3>Как работи</h3>
          <p>
            Създайте профил, отговорете на няколко въпроса и получете
            персонализирани съвети и рутина, съобразени с вашите нужди.
          </p>
        </div>
        <div class="images-container">
          <img
            src="/imgs/makeupProducts1.jpg"
            alt="Нашата мисия"
            class="grid-image"
          />
          <img
            src="/imgs/makeupProducts2.jpg"
            alt="Как работи"
            class="grid-image"
          />
        </div>
        <div class="section-container">
          <h3>Отзиви от потребители</h3>
          <div class="feedback">
            <img class="profile-image" src="/imgs/user1.png" alt="User 1" />
            <p class="name">Мария</p>
            <div class="rating">
              <div class="stars">
                <span
                  class="star"
                  v-for="n in 5"
                  :key="n"
                  :class="{ filled: n <= 5 }"
                  >★</span
                >
              </div>
            </div>
            <p>
              "Това е най-доброто приложение, което съм използвалa!
              Персонализираните съвети са невероятни!"
            </p>
          </div>

          <div class="feedback">
            <img class="profile-image" src="/imgs/user2.png" alt="User 2" />
            <p class="name">Габриела</p>
            <div class="rating">
              <div class="stars">
                <span
                  class="star"
                  v-for="n in 4"
                  :key="n"
                  :class="{ filled: n <= Math.floor(4.5) }"
                  >★</span
                >
                <span class="half-star" v-if="4.5 % 1 !== 0">★</span>
              </div>
            </div>
            <p>
              "Обичам как всичко е съобразено с моите нужди. Препоръчвам го на
              всички!"
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
main {
  margin-top: 80px;
  padding: 0rem;
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
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
}

.intro-text h2 {
  margin-top: 4rem;
}

.about-sections {
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-container {
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-container h3 {
  font-size: 28px;
}

.section-container p {
  font-size: 20px;
}

.images-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.grid-image {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.rating {
  display: flex;
  align-items: center;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 30px;
  color: #ccc;
}

.star.filled {
  color: #ffc107;
}

.half-star {
  font-size: 30px;
  color: #ffc107;
  background: linear-gradient(90deg, #ffc107 50%, #ccc 50%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
