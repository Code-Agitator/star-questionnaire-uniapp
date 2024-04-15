import { defineStore } from 'pinia'
import { useToken } from '@/composables/useToken'
import { DefaultToken } from '@/constants'

export const useAuthStore = defineStore('auth', () => {
  const token = useToken()
  const setToken = (newToken = DefaultToken) => {
    token.value = newToken
  }
  const isExist = () => {
    return token.value !== ''
  }
  const getToken = () => {
    return token.value
  }
  return {
    token,
    setToken,
    isExist,
    getToken,
  }
})
