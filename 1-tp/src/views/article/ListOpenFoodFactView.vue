<script setup>
import BaseListLayout from '@/components/article/__partials/BaseListLayout.vue'
import TheCard from '@/components/article/__partials/open-food-fact/TheCard.vue'
import { useOpenFoodFact } from '@/composables/useOpenFoodFact'
const { products } = useOpenFoodFact()
</script>

<template>
  <main>
    <BaseListLayout>
      <template #title>
        <h2>Suggestions des produits depuis <a href="https://fr.openfoodfacts.org/">OpenFoodFact</a></h2>
      </template>
      <div id="wrapper">
        <TheCard v-for="product in products" :product="product" :key="product.code"/>
      </div>
    </BaseListLayout>
  </main>
</template>
<style scoped>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>