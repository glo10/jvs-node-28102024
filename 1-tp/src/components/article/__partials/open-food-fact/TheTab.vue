<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
});
</script>
<template>
  <div>
    <table>
      <tr
        v-for="{
          code,
          brands,
          categories,
          image_url,
          nutriscore_grade,
          product_name,
          sources,
        } in products"
        :key="code"
      >
        <td>
          <img :src="image_url" :alt="`image of product ${product_name}`" />
          <span>
            <a v-if="sources && sources[0].url !== undefined">
              {{ product_name }} {{ brands }}
            </a>
            <template v-else> {{ product_name }} {{ brands }} </template>
          </span>
          <span>Nutriscore {{ nutriscore_grade.toUpperCase() }}</span>
          <span>Rayons/catégories : {{ categories }}</span>
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
img {
  width: 3rem;
}
</style>
