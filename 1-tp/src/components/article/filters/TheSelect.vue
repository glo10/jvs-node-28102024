<script setup>
import { useArticle } from "@/composables/useArticle";
const emit = defineEmits(['app:change:filter'])
const { sections } = useArticle();
const changeOption = (event) => {
  emit("app:change:filter", { section: event.target.value })
};
</script>
<template>
  <div>
    <article class="filter">
      <h5>Par rayon</h5>
      <select @change="changeOption">
        <option disabled selected>Seletionnez le rayon</option>
        <option value="all">tous les rayons</option>
        <option v-for="name in sections" :key="name" :value="name">
          {{ name }}
        </option>
      </select>
    </article>
  </div>
</template>
<style scoped>
select * {
  text-transform: capitalize;
}
</style>
