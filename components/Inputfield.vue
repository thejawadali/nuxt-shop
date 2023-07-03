<template>
  <div class="mt-2">
    <label v-if="label" :for="id" class="inline text-gray-700 ml-1 text-sm mb-1">{{ label }}</label>
    <div class="relative mt-1 rounded-md shadow-sm">
      <input :type="type" :name="id" :id="id"
        :class="['block outline-none w-full rounded-md border p-1.5 text-gray-900 shadow-sm placeholder:text-sm placeholder:text-gray-400', { 'border-red-500': error }]"
        :placeholder="placeholder" @input="handleInputChange" :value="modelValue" />
    </div>
    <span v-if="error" class="text-red-500 text-xs ml-1">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label?: string
  id: string
  type?: string
  placeholder?: string
  modelValue?: string
  error?: string
  disabled?: boolean
}
// const props = 
withDefaults(defineProps<IProps>(), {
  label: 'Enter Email',
  type: 'text',
  placeholder: 'Type',
  modelValue: '',
  error: '',
  disabled: false
})
const emit = defineEmits(['update:modelValue'])

const handleInputChange = (e: any) => {
  emit('update:modelValue', e.target.value)
}

</script>

<style scoped></style>