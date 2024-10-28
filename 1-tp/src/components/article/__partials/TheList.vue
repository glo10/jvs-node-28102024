<script setup>
import { computed } from "vue";
import { useFilter } from "@/composables/useFilter";
const { items, criteria } = defineProps({
  items: {
    type: Array,
    required: true,
  },
  criteria: {
    type: Object,
    required: false,
    default: null,
  },
});
const { filterItems, displayCriteria } = useFilter();

const itemsFiltered = computed(() => {
  return criteria ? filterItems(items, criteria).value : items;
});

const toggleIsBought = (item) => {
  item.isBought = !item.isBought;
};

</script>
<template>
  <section class="container">
    <h2>Affichage de la liste des courses</h2>
    <article>
      <!--
        Optimisation possible avec la balise <component/> un composant calculé en fonction de la condition
        en créent un composant pour chaque cas et en créant une constante computed qui fera
        le calcul pour retourne le bon
        <component :is="comp"/>
        const comp = computed(() => {
          return true ? AComponent : BComponent
        })
      -->
      <h3 v-if="items.length === 0">Aucun article dans le panier</h3>
      <ul v-else-if="itemsFiltered.length">
        <transition-group name="shake">
          <li v-for="item in itemsFiltered" :key="item.label" :class="{ red: item.isBought }"
            @click="toggleIsBought(item)">
            {{ item.label }} - {{ item.section }}
          </li>
        </transition-group>
      </ul>
      <h3 v-else>Aucun article avec le(s) filtre(s) {{ displayCriteria }}</h3>
    </article>
  </section>
</template>
<style scoped>
li {
  cursor: pointer;
}

img {
  width: 3rem;
}
</style>
