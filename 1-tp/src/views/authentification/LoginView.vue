<script setup>
import IconLogin from '@/components/icons/IconLogin.vue'
const emit = defineEmits(['app:login'])
const login = () => {
  emit('app:login')
}
</script>
<template>
  <div class="container">
    <h1>Authentification</h1>
    <button @click="login" class="btn">
      <IconLogin />&nbsp;Entrer
    </button>
  </div>
</template>
<style scoped>
div {
  grid-column-end: -1;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

button {
cursor: pointer;
}
</style>