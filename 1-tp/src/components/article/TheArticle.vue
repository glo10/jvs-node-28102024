<script setup>
import TheProgress from '@/components/article/filters/TheProgress.vue';
import TheRadio from '@/components/article/filters/TheRadio.vue';
import TheSelect from '@/components/article/filters/TheSelect.vue';
import TheAdd from '@/components/article/__partials/TheAdd.vue'
import BaseListLayout from '@/components/article/__partials/BaseListLayout.vue';
import TheTab from '@/components/article/__partials/open-food-fact/TheTab.vue'
import { useOpenFoodFact } from "@/composables/useOpenFoodFact";
import { useFilter } from "@/composables/useFilter";
import { useArticle } from '@/composables/useArticle';
const { products } = useOpenFoodFact();
const { items, addItem } = useArticle()

const { changeCriteria, progress, displayCriteria, itemsFiltered, criteria } = useFilter(items);
const toggleIsBought = (item) => {
  item.isBought = !item.isBought;
}
</script>
<template>
  <div>
    <transition name="shake">
      <TheProgress v-if="progress.bought > 0" :progress="progress" />
    </transition>
    <h3>Filtres</h3>
    <TheRadio @app:change:filter="changeCriteria" />
    <TheSelect @app:change:filter="changeCriteria" />
    <hr>
    <BaseListLayout>
      <template #title>
        <h2>Affichage de la liste des courses avec un total de {{ items.length }} article(s) </h2>
      </template>
      <article>
        <h3 v-if="items.length === 0">Aucun article dans le panier</h3>
        <ul v-else-if="itemsFiltered.length">
          <transition-group name="shake" appear>
            <li v-for="item in itemsFiltered" :key="item.label" :class="{ red: item.isBought }"
              @click="toggleIsBought(item)">
              {{ item.label }} - {{ item.section }}
            </li>
          </transition-group>
        </ul>
        <h4 v-else>Aucun article avec le filtre {{ displayCriteria }}</h4>
      </article>
    </BaseListLayout>
    <hr>
    <TheAdd @app:add:item="addItem" />
    <hr>
    <BaseListLayout>
      <template #title>
        <h2>
          Suggestions des produits depuis
          <a href="https://fr.openfoodfacts.org/">OpenFoodFact</a>
        </h2>
      </template>
      <TheTab :products="products" />
    </BaseListLayout>
  </div>
</template>
<style scoped>
h3 {
  color: orange;
  font-weight: 600;
  font-size: 1.5rem;
}

li {
  cursor: pointer;
}
</style>