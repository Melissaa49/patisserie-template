<template>
  <section class="hero">
    <!-- NAV -->
    <header class="nav">
      <span class="brand">Maison Élise</span>

      <!-- NAV DESKTOP -->
      <nav class="nav-links">
        <a href="#accueil">Accueil</a>
        <a href="#patisseries">Pâtisseries</a>
        <a href="#galerie">Galerie</a>
        <a href="#contact">Contact</a>
      </nav>

      <!-- BURGER MOBILE -->
      <button
        class="burger"
        :class="{ open: isOpen }"
        @click="isOpen = !isOpen"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>

    <!-- MENU LATÉRAL MOBILE -->
    <aside class="side-menu" :class="{ open: isOpen }">
      <a href="#accueil" @click="close">Accueil</a>
      <a href="#patisseries" @click="close">Pâtisseries</a>
      <a href="#galerie" @click="close">Galerie</a>
      <a href="#contact" @click="close">Contact</a>
    </aside>

    <!-- TEXTE HERO -->
    <div class="content">
      <h1>Pâtisserie artisanale</h1>
      <p>Des créations délicates pour vos moments précieux</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const close = () => {
  isOpen.value = false
}
</script>

<style scoped>
/* =========================
   HERO
========================= */
.hero {
  position: relative;
  min-height: 90vh;
  background: url('/accueil.PNG') center 16% / cover no-repeat;
  overflow: hidden;
}

/* =========================
   NAV BAR
========================= */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 28px;
  background: rgba(255,255,255,0.35);
  backdrop-filter: blur(12px);
}

/* BRAND */
.brand {
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.12em;
  font-size: 0.95rem;
  color: #5a2a2a;
}

/* =========================
   NAV DESKTOP
========================= */
.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #5a2a2a;
  text-decoration: none;
  opacity: 0.85;
  position: relative;
}

.nav-links a:hover {
  opacity: 1;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 1px;
  background: #5a2a2a;
  opacity: 0;
  transform: scaleX(0);
  transition: 0.3s ease;
}

.nav-links a:hover::after {
  opacity: 0.6;
  transform: scaleX(1);
}

/* =========================
   BURGER (CACHÉ PAR DÉFAUT)
========================= */
.burger {
  display: none; /* ⬅️ caché sur desktop */
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(10px);
  border: none;
  cursor: pointer;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.burger span {
  width: 18px;
  height: 2px;
  background: #5a2a2a;
  transition: 0.3s ease;
}

.burger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* =========================
   SIDE MENU MOBILE
========================= */
.side-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 260px;
  height: 100vh;
  background: #FEE6E2;

  padding: 120px 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  transform: translateX(100%);
  transition: transform 0.4s ease;
  z-index: 90;
}

.side-menu.open {
  transform: translateX(0);
}

.side-menu a {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: #5a2a2a;
  text-decoration: none;
}

/* =========================
   HERO CONTENT
========================= */
.content {
  position: absolute;
  top: 26%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  width: 100%;
  max-width: 380px;
  padding: 0 24px;
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.1rem;
  margin-bottom: 10px;
  color: #5a2a2a;
}

p {
  font-size: 0.95rem;
  opacity: 0.9;
}

/* =========================
   MOBILE
========================= */
@media (max-width: 768px) {
  .nav-links {
    display: none; /* ❌ nav desktop */
  }

  .burger {
    display: flex; /* ✅ burger visible */
  }

  .hero {
    min-height: 85vh;
    background-position: center 14%;
  }

  .content {
    top: 22%;
  }

  h1 {
    font-size: 1.9rem;
  }
}
</style>

