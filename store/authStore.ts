import { defineStore } from 'pinia'


export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => {
    return {
      loading: false,
      user: null,
    }
  },
  actions: {
    async login({ username, password }: { username: string, password: string }) {
      const router = useRouter()
      try {
        this.loading = true
        const data: any = await $fetch('https://dummyjson.com/auth/login', {
          method: "post",
          body: {
            username,
            password
          }
        })
        this.loading = false
        router.push({ path: "/" })
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify({
          ...data,
          token: undefined
        }))
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})