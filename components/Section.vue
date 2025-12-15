<template>
  <section class="section">
    <!-- Décorations -->
    <img
      src="/gateau-gauche.PNG"
      class="deco deco-left"
      alt=""
      aria-hidden="true"
    />

    <img
      src="/gateau-droite.PNG"
      class="deco deco-right"
      alt=""
      aria-hidden="true"
    />

    <!-- Contenu -->
    <div class="overlay">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  text: String
})
</script>
<style scoped>
/* =========================
   SECTION
========================= */
.section {
  position: relative;
  z-index: 2;                /* ⬇️ PAS TROP HAUT */

  margin-top: -14vh;
  padding: 12vh 16px 32px;

  background-color: #FEE6E2;
  border-radius: 48px 48px 0 0;

  overflow: visible;         /* 🔥 CRUCIAL */
}


/* =========================
   DÉCORATIONS
========================= */
.deco {
  position: absolute;
  z-index: 20;
  pointer-events: none;

  width: 360px;
  max-width: none;
}

/* Desktop positions */
.deco-left {
  left: -120px;
  bottom: 140px;
}

.deco-right {
  right: -120px;
  top: 120px;
}

/* =========================
   OVERLAY TEXTE
========================= */
.overlay {
  position: relative;
  z-index: 3;
  margin: 0 auto;
  max-width: 320px;

  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(12px);
  padding: 28px 22px;
  border-radius: 24px;
  text-align: center;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 12px;
}

p {
  font-size: 0.9rem;
  line-height: 1.5;
}

/* =========================
   MOBILE (VRAI FIX)
========================= */
@media (max-width: 768px) {
  .section {
    margin-top: -22vh;
    padding-top: 8vh;
    padding-bottom: 24px;
    border-radius: 36px 36px 0 0;
  }

  .deco {
    width: 320px;
  }

  /* ⬆️ GÂTEAUX VISIBLES DÈS L’ARRIVÉE */
  .deco-left {
    bottom: 90px;      /* PX = stable */
  }

  .deco-right {
    top: 40px;         /* PX = stable */
    right: -100px;
  }

  .overlay {
    transform: translateY(-78px);
  }
  
}


</style>
