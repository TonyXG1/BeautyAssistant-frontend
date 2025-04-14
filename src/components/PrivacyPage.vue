<template>
  <div>
    <main>
      <section class="intro-text">
        <h2>Поверителност на личните данни и Авторски права</h2>
        <p>
          Ние се ангажираме да защитаваме вашата поверителност и да гарантираме,
          че вашите лични данни са защитени.
        </p>
      </section>
      <section class="privacy-sections">
        <div class="section-container">
          <h3>Събиране на данни</h3>
          <p>
            Ние събираме само необходимата информация, за да ви предоставим
            персонализирани услуги. Вашите данни няма да бъдат споделяни с
            трети страни без вашето съгласие.
          </p>
        </div>
        <div class="section-container">
          <h3>Използване на данни</h3>
          <p>
            Вашите данни се използват за подобряване на нашите услуги и за
            предоставяне на персонализирани съвети и препоръки.
          </p>
        </div>
        <div class="section-container">
          <h3>Авторски права</h3>
          <p>
            Цялото съдържание на този уебсайт, включително текстове, дизайн и
            лого, е защитено от авторски права. <span class="copyright-symbol">©</span> 2025 Beauty Assistant. Всички права запазени.
          </p>
        </div>
        <div class="section-container">
          <h3>Вашите права</h3>
          <p>
            Имате право да поискате достъп до вашите данни, да ги коригирате или
            изтриете. Ако имате въпроси относно вашата поверителност, моля,
            свържете се с нас.
          </p>
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

.intro-text {
  text-align: center;
  margin-top: 0;
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
}

.intro-text h2 {
  margin-top: 4rem;
  font-size: 2rem;
}

.intro-text p {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #555;
}

/* Privacy sections */
.privacy-sections {
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-container {
  text-align: left;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-container h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.section-container p {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
}

.copyright-symbol {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>