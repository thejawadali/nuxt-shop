<template>
  <div>
    <button type="submit" :disabled="loading"
      :class="`rounded w-full my-3 ${loading ? 'bg-gray-500 bg-opacity-50' : 'bg-green-600 w-full hover:bg-green-500 focus-visible:outline-green-600'}  px-2 py-2 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`">
      <span v-if="loading">Loading...</span>
      <slot v-else />
    </button>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}
// const props = 
withDefaults(defineProps<IProps>(), {
  type: 'button',
  loading: false
})
</script>

<style scoped></style>