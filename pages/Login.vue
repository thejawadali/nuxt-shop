<template>
  <v-container fluid class="full-page d-flex flex-column justify-center align-center">
    <h1 class="text-center mx-auto my-2">Nuxt Shop</h1>
    <v-card class="mx-auto pa-8" elevation="4" width="600" rounded="lg">
      <v-card-title>
        Login
      </v-card-title>
      <v-form ref="form" @submit.prevent="onSubmit">
        <v-text-field color="#777" class="mb-4" variant="outlined" label="Email" v-model="email" validate-on-blur
          :error-messages="email_errorMessage" />
        <v-text-field color="#777" class="mb-4" variant="outlined"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" label="Password"
          :error-messages="password_errorMessage" :type="visible ? 'text' : 'password'"
          @click:append-inner="visible = !visible" v-model="password" required />
        <v-btn type="submit" :disabled="!meta.valid" color="success" block size="large">Login</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import * as yup from 'yup'

// const { handleSubmit, meta } = useForm()
const visible = ref(false)



const validationSchema = yup.object({
  email: yup.string().required('Email is required').email("Valid email is required"),
  password: yup.string().required('Password is required').min(8, 'Min 8 characters')
})
const { handleSubmit, meta } = useForm({
  validationSchema,
  // validateOnBlur: true, // Enable validation on blur
})


const onSubmit = handleSubmit(values => {
  console.log(values)

})

const { value: email, errorMessage: email_errorMessage } = useField('email')
const { value: password, errorMessage: password_errorMessage } = useField('password');


</script>

<style scoped></style>