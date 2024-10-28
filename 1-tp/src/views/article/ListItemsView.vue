<script setup>
import BaseListLayout from '@/components/article/__partials/BaseListLayout.vue'
import { useArticle } from '@/composables/useArticle'
import { useFilter } from '@/composables/useFilter'
const { items } = useArticle()
const { criteria } = useFilter(items)
</script>

<template>
  <main>
    <BaseListLayout>
      <template #title>
        <h2>Liste des courses</h2>
      </template>
      <TheList :items="items" :criteria="criteria"/>
    </BaseListLayout>
  </main>
</template>
<style scoped>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>