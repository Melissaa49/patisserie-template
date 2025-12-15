<template>
  <section class="contact">
    <div class="content">
      <h2>Contact</h2>

      <p class="intro" v-if="!sent">
        Une question, une demande particulière ou un événement à célébrer ?
      </p>

      <!-- FORMULAIRE -->
      <form
        v-if="!sent"
        class="form"
        action="https://formspree.io/f/xovgzvzg"
        method="POST"
        @submit="handleSubmit"
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
        />

        <textarea
          name="message"
          placeholder="Votre message"
          required
        ></textarea>

        <!-- Anti-spam invisible -->
        <input type="text" name="_gotcha" style="display:none" />

        <button type="submit">Envoyer</button>
      </form>

      <!-- MESSAGE DE CONFIRMATION -->
      <div v-else class="success">
        <p class="success-title">Message envoyé </p>
        <p class="success-text">
          Merci pour votre message.<br />
          Nous vous répondrons avec plaisir très prochainement.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const sent = ref(false)

function handleSubmit() {
  sent.value = true
}
</script>

<style scoped>
/* =========================
   CONTACT
========================= */
.contact {
  position: relative;
  min-height: 72vh;

  background-image: url('/contact.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center;

  padding-top: 26vh;
  padding-bottom: 3rem;
  margin-top: -60px;

  text-align: center;
  overflow: hidden;
}

.contact::after {
  content: '';
  position: absolute;
  left: -1px;
  right: -1px;
  bottom: -1px;
  height: 160px;
  background-color: #FEE6E2;
  z-index: 1;
}

/* =========================
   CONTENU
========================= */
.content {
  max-width: 360px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

/* TITRE */
h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 12px;
  color: #5a2f2f;
}

/* TEXTE */
.intro {
  font-size: 0.95rem;
  opacity: 0.85;
  margin-bottom: 2rem;
}

/* =========================
   FORMULAIRE
========================= */
.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

input,
textarea {
  padding: 14px 16px;
  border-radius: 14px;
  border: none;
  font-family: inherit;
  font-size: 0.9rem;
}

textarea {
  min-height: 120px;
  resize: none;
}

button {
  margin-top: 12px;
  padding: 14px;
  border-radius: 24px;
  border: none;
  background: #5a2f2f;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(0,0,0,0.15);
}

/* =========================
   SUCCESS
========================= */
.success {
  margin-top: 2.5rem;
  padding: 2rem 1.5rem;

  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(12px);

  border-radius: 24px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
}

.success-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: #5a2f2f;
}

.success-text {
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.5;
}

/* =========================
   MOBILE
========================= */
@media (max-width: 768px) {
  .contact {
    min-height: 74vh;
    padding-top: 28vh;
    padding-bottom: 2.5rem;
  }

  .contact::after {
    height: 90px;
  }

  h2 {
    font-size: 1.8rem;
  }
}
</style>
