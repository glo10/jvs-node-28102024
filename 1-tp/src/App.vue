<script setup>
import TheMainMenu from '@/components/navigation/TheMainMenu.vue';
import { useLogin } from './composables/useLogin';
const { login, logout, token } = useLogin()
</script>

<template>
  <TheMainMenu @app:logout="logout" :token="token"/>
  <RouterView @app:login="login"/>
</template>