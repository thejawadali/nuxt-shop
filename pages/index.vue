<template>
  <div>
    <pre>
  {{ products.products[0] }}
  </pre>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const { data: products }: any = await useFetch(`${config.public.api_base_url}products`)

</script>
