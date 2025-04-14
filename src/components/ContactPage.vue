<template>
  <div>
    <main>
      <section class="image-section">
        <img src="/imgs/senki11.jpg" alt="Контакти" class="main-image" />
      </section>
      <section class="intro-text">
        <h2>Свържете се с нас</h2>
      </section>
      <section class="contact-sections">
        <div class="section-container">
          <h3>Нашите контакти</h3>
          <p>Можете да се свържете с нас чрез следните канали:</p>
          <ul class="contact-list">
            <li><strong>Телефон:</strong> +359 888 123 456</li>
            <li><strong>Имейл:</strong> support@beautyassistant.com</li>
            <li><strong>Адрес:</strong> София, ул. Красота 10</li>
          </ul>
        </div>
        <div class="section-container">
          <h3>Изпратете ни съобщение</h3>
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Име</label>
              <input type="text" id="name" placeholder="Вашето име" required />
            </div>
            <div class="form-group">
              <label for="email">Имейл</label>
              <input type="email" id="email" placeholder="Вашият имейл" required />
            </div>
            <div class="form-group">
              <label for="message">Съобщение</label>
              <textarea id="message" rows="5" placeholder="Вашето съобщение" required></textarea>
            </div>
            <button type="submit" class="submit-button">Изпрати</button>
          </form>
        </div>
        <div class="section-container">
          <h3>Социални мрежи</h3>
          <p>Последвайте ни в социалните мрежи:</p>
          <div class="social-icons">
            <a href="#" class="social-icon facebook">Facebook</a>
            <a href="#" class="social-icon instagram">Instagram</a>
            <a href="#" class="social-icon twitter">Twitter</a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* General layout */
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

/* Contact sections */
.contact-sections {
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-container {
  text-align: center;
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

.contact-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  font-size: 18px;
}

.contact-list li {
  margin-bottom: 0.5rem;
}

/* Contact form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.form-group {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  font-size: 16px;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.submit-button {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #333333;
}

/* Social icons */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-icon {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.social-icon.facebook {
  background-color: #3b5998;
}

.social-icon.instagram {
  background-color: #e4405f;
}

.social-icon.twitter {
  background-color: #1da1f2;
}

.social-icon:hover {
  opacity: 0.8;
}
</style>