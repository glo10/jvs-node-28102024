<script setup>
import TheArticle from '@/components/article/TheArticle.vue';
</script>
<template>
  <main>
    <h1>Mes courses</h1>
    <TheArticle/>
  </main>
</template>
<style scoped>
img {
  grid-column-end: -1;
  display: block;
  margin: 1rem auto;
  width: 100%;
}
</style>
