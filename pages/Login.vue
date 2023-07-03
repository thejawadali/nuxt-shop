<template>
  <div class="w-full min-h-screen flex justify-center items-center">
    <div class="border w-[28rem] rounded shadow p-5">
      <h1 class="font-semibold ml-1 text-lg">Login</h1>
      <form @submit.prevent="onSubmit">
        <Inputfield id="username" placeholder="Enter username" label="Username" :error="username_errorMessage"
          v-model="username" />
        <Inputfield id="password" type="password" placeholder="Password" label="Password" :error="password_errorMessage"
          v-model="password" />
        <button type="submit"
          class="rounded w-full my-3 bg-green-600 px-2 py-2 text-xs font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import * as yup from 'yup'

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


const onSubmit = handleSubmit( values => {
  console.log( values )

} )

const { value: username, errorMessage: username_errorMessage } = useField( 'username' )
const { value: password, errorMessage: password_errorMessage } = useField( 'password' );



</script>
