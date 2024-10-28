<script setup>
const emit = defineEmits(['app:change:filter'])
const changeOption = (criteria) => {
  emit("app:change:filter", criteria)
};
</script>
<template>
  <div>
    <article>
      <h5>Par état</h5>
      <label for="yes">oui</label>
      <input type="radio" name="bought" value="yes" id="yes" @change="changeOption({ isBought: true })">
      <label for="no">non</label>
      <input type="radio" name="bought" value="no" id="no" @change="changeOption({ isBought: false })">
      <label for="all">oui&amp;non</label>
      <input type="radio" name="bought" value="all" id="all" @change="changeOption({ isBought: null })">
    </article>
  </div>
</template>
<style scoped>
label {
  text-transform: capitalize;
  padding: .5rem;
}

article {
  text-align: right;
  margin-bottom: 2rem;
}

h5 {
  text-align: left;
  font-weight: 600;
}

</style>
