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
  '/gallery-1.jpeg',
  '/gallery-3.jpeg',
  '/gallery-2.jpeg',
  '/gallery-4.jpeg',
  '/gallery-5.jpeg',
  '/gallery-1.jpeg'
]
</script>

<style scoped>
/* =========================
   GALERIE
========================= */
.gallery {
  padding: 5rem 1.5rem 4.5rem; /* un peu plus compact */
  background: url('/gallery.PNG') center / cover no-repeat;
  background-color: #FEE6E2;
  border-radius: 48px 48px 0 0;
  text-align: center;
  position: relative;
  z-index: 1;
}


/* TITRE */
h2 {
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.1em;
  font-size: 1.9rem;
  margin-bottom: 2.8rem;
  color: #5a2f2f;
}

/* =========================
   BULLES
========================= */
.bubbles {
  /* existant */
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
    padding-bottom: 0.5rem;


  /* 👇 MASQUER LES SCROLLBARS */
  scrollbar-width: none;          /* Firefox */
  -ms-overflow-style: none;       /* IE / Edge ancien */
}

.bubbles::-webkit-scrollbar {
  display: none;                  /* Chrome / Safari */
}


.bubble:nth-child(2),
.bubble:nth-child(5) {
  transform: translateY(14px);
}


.bubble {
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;

  box-shadow:
    0 10px 24px rgba(0,0,0,0.10),
    inset 0 0 0 6px rgba(255,255,255,0.35);

  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
@media (hover: hover) {
  .bubble:hover {
    transform: translateY(-6px) scale(1.025);
    box-shadow:
      0 16px 34px rgba(0,0,0,0.14),
      inset 0 0 0 6px rgba(255,255,255,0.45);
  }
}

.bubble img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.95) brightness(1.02);
}


/* =========================
   MOBILE
========================= */
@media (max-width: 768px) {
   .gallery {
    padding-top: 4rem;
    border-radius: 36px 36px 0 0;
  }

  .bubbles {
    display: flex;
    gap: 1.2rem;
    overflow-x: auto;
    padding-bottom: 1.2rem;
    padding-left: 0.5rem;
    scroll-snap-type: x mandatory;
    margin-top: 1.8rem;
  }

  .bubble {
    min-width: 140px;
    max-width: 140px;
    scroll-snap-align: center;

    box-shadow:
      0 8px 18px rgba(0,0,0,0.12),
      inset 0 0 0 5px rgba(255,255,255,0.4);
  }
}

</style>
