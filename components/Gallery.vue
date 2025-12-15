<template>
  <section class="gallery">
    <h2>Galerie</h2>

    <div class="bubbles">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="bubble"
      >
        <img :src="img" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
const images = [
  '/galerie-1.jpg',
  '/galerie-2.jpg',
  '/galerie-3.jpg',
  '/galerie-4.jpg',
  '/galerie-5.jpg',
  '/galerie-6.jpg'
]
</script>

<style scoped>
/* =========================
   GALERIE
========================= */
.gallery {
  padding: 6rem 1.5rem 5rem; /* ⬅️ PLUS BAS */
  background: url('/gallery.PNG') center / cover no-repeat;
  background-color: #FEE6E2;
  border-radius: 48px 48px 0 0;
  text-align: center;
}

/* TITRE */
h2 {
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.08em;
  margin-bottom: 3.5rem;
}

/* =========================
   BULLES
========================= */
.bubbles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
  max-width: 900px;
  margin: 0 auto;
}

.bubble {
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
    box-shadow: 0 12px 28px rgba(0,0,0,0.10);

}

.bubble img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* effet très doux */
@media (hover: hover) {
  .bubble:hover {
    transform: translateY(-6px) scale(1.03);
  }
}

/* =========================
   MOBILE
========================= */
@media (max-width: 768px) {
  .gallery {
    padding-top: 4.5rem;
    border-radius: 36px 36px 0 0;
  }


  .gallery {
    padding-top: 4rem;
    border-radius: 36px 36px 0 0;
  }

  .bubbles {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;
    scroll-snap-type: x mandatory;
  }

  .bubble {
    min-width: 160px;     /* ⬅️ PLUS FIN */
    max-width: 160px;
    scroll-snap-align: center;
        box-shadow: 0 8px 18px rgba(0,0,0,0.12);

  }
}

</style>
