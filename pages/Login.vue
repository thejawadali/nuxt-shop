<template>
  <div class="w-full min-h-screen flex justify-center items-center">
    <div class="border w-[28rem] rounded shadow p-5">
      <h1 class="font-semibold ml-1 text-lg">Login</h1>
      <form @submit.prevent="onSubmit">
        <Inputfield id="username" placeholder="Enter username" label="Username" :error="username_errorMessage"
          v-model="username" />
        <Inputfield id="password" type="password" placeholder="Password" label="Password" :error="password_errorMessage"
          v-model="password" />
        <Button :loading="authStore.loading" type="submit">Submit</Button>
      </form>
    </div>
  </div>
</template>

<script setup>
import * as yup from 'yup'
import { useAuthStore } from "../store/authStore"


useHead( {
  title: "Nuxt Mart - Login"
} )

const authStore = useAuthStore()

const validationSchema = yup.object( {
  username: yup.string().required( 'username is required' ),
  password: yup.string().required( 'Password is required' )
} )

const { handleSubmit } = useForm( {
  validationSchema,
} )

onMounted( () => {
  username.value = 'kminchelle'
  password.value = '0lelplR'
} )


const onSubmit = handleSubmit( authStore.login )

const { value: username, errorMessage: username_errorMessage } = useField( 'username' )
const { value: password, errorMessage: password_errorMessage } = useField( 'password' );



</script>
