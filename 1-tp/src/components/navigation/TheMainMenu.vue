<script setup>
import { menu } from '@/router/menu'
import { computed } from 'vue'
const emit = defineEmits(['app:logout'])
const { token } = defineProps({
  token: {
    type: Number,
    required: false
  }
})

const tkn = computed(() => {
  return token
})

const logout = () => {
  emit('app:logout')
}
</script>
<template>
  <div>
    <nav>
      <router-link :to="{ name: 'home' }">Accueil</router-link>
      <router-link v-for="{ name } in menu" :key="name" :to="{ name }">{{ name }}</router-link>
      <p v-if="tkn" class="green" @click="logout">Déconnexion</p>
    </nav>
  </div>
</template>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 25%;
  left: 8.25%;
}

nav a,
nav p {
  font-size: 2.5rem;
  text-align: left;
  text-transform: uppercase;
}

nav p {
  cursor: pointer;
}
</style>