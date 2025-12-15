<template>
  <footer class="footer">
    © {{ year }} — Melissa Alfonsi · Développeuse web
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
<style scoped>
.footer {
  padding: 1.8rem 1rem;
  text-align: center;

  font-size: 0.75rem;
  letter-spacing: 0.04em;

  color: rgba(90, 42, 42, 0.6);
  background: #FEE6E2;
}
</style>
