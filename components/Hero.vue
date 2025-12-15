<template>
  <section class="hero">
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
.hero {
  position: relative;
  min-height: 90vh;

  background-image: url('/accueil.PNG');
  background-repeat: no-repeat;
  background-size: cover;              /* ✅ */
  background-position: center 16%;

  z-index: 1;
  overflow: visible;                   /* IMPORTANT */
}

/* navigation mobile */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 28px;
  background: rgba(255,255,255,0.35);
  backdrop-filter: blur(12px);
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  text-decoration: none;
  color: #5a2a2a;
  opacity: 0.85;
}

.nav-links a:hover {
  opacity: 1;
}

.brand {
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.12em;
}

.burger {
  display: none;
}
.side-menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 260px;

  background: #FEE6E2;
  padding: 100px 32px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  transform: translateX(100%);
  transition: transform 0.4s ease;
  z-index: 25;
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
.burger {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(10px);
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.burger span {
  width: 18px;
  height: 2px;
  background: #5a2a2a;
  transition: 0.3s;
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

/* TEXTE HERO — POSITIONNÉ EN HAUT */
.content {
  position: absolute;
  top: 26%;              /* ⬅️ CLÉ DU FIX */
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 360px;
  padding: 0 24px;

  text-align: center;
}

/* TITRE */
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.1rem;     /* plus élégant */
  margin-bottom: 10px;
}

/* SOUS-TEXTE */
p {
  font-size: 0.95rem;
  opacity: 0.9;
}

/* Mobile */
@media (max-width: 768px) {
  .hero {
    min-height: 85vh;
    background-position: center 14%;
  }
   .content {
    top: 22%;            /* ⬆️ encore plus haut sur mobile */
  }

  h1 {
    font-size: 1.9rem;
  }
 @media (max-width: 768px) {
  .nav-links {
    display: none; /* ⛔ desktop nav */
  }

  .burger {
    display: flex; /* ✅ burger visible */
  }
}

  
}

</style>
