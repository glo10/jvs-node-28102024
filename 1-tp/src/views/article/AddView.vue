<script setup>
import TheAdd from '@/components/article/__partials/TheAdd.vue'
import TheTab from '@/components/article/__partials/open-food-fact/TheTab.vue'
import BaseListLayout from '@/components/article/__partials/BaseListLayout.vue'
import { useOpenFoodFact } from '@/composables/useOpenFoodFact'
import { useArticle } from '@/composables/useArticle'
const { items } = useArticle()
const { products } = useOpenFoodFact()
</script>
<template>
  <div>
    <h1>Total des éléments dans la liste des courses {{ items.length }}</h1>
    <TheAdd />
    <BaseListLayout>
      <template>
        <TheTab :items="products" />
      </template>
    </BaseListLayout>
  </div>
</template>
<style scoped>
div {
  
}
</style>