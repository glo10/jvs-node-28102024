<script setup>
const { product } = defineProps({
  product: Object
})

const {
  code,
  brands,
  categories,
  image_url,
  nutriscore_grade,
  product_name,
  sources
} = product
</script>
<template>
  <div class="card">
    <img :src="image_url" class="card-img-top" alt="image of product">
    <div class="card-body">
      <h5 class="card-title">{{ product_name }}</h5>
      <p class="card-text">{{ categories.substring(0,100) }}...</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Marque : {{  brands }}</li>
      <li class="list-group-item">Nutriscore : <span>{{ nutriscore_grade }}</span></li>
    </ul>
    <div class="card-body">
      <a 
        v-if="sources && sources[0].url !== undefined"
        :href="sources[0].url"
        class="card-link"
        target="_blank"
      >Voir sur OpenFoodFact</a>
    </div>
  </div>
</template>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: auto;
  margin: 2rem;
  padding: 1rem;
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}

img {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
}
span {
  text-transform: uppercase;
}
</style>