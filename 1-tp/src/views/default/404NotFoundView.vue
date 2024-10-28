<script setup>
import router from '@/router'
</script>

<template>
  <main>
    <h1>Page non trouvé</h1>
    <router-link to="/">Retour accueil</router-link>
    <button @click="router.back()">Retour page précédente</button>
  </main>
</template>