import { useRouter } from 'vue-router'
import { ref } from 'vue'

export const useLogin = () => {
  const token = ref(undefined)
  const router = useRouter()
  const logout = () => {
    sessionStorage.removeItem('token')
    token.value = undefined
    router.push({ name: 'home' })
  }
  
  const login = () => {
    token.value = Math.floor(Math.random() * 1000)
    sessionStorage.setItem('token', token.value)
    router.push({ name: 'home' })
  }
  
  return {
    login,
    logout,
    token
  }
}