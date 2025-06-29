<template>
  <button 
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'minimal',
    validator: (value) => ['minimal', 'solid', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'normal',
    validator: (value) => ['small', 'normal', 'large'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const buttonClasses = computed(() => {
  const base = 'transition-all duration-300 ease-in-out cursor-pointer font-medium'
  
  const variants = {
    minimal: 'btn-minimal',
    solid: 'bg-black text-white hover:bg-gray-800',
    outline: 'border border-gray-300 hover:border-gray-400'
  }
  
  const sizes = {
    small: 'px-4 py-2 text-small',
    normal: 'px-6 py-3 text-normal',
    large: 'px-8 py-4 text-medium'
  }
  
  const disabled = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  return [base, variants[props.variant], sizes[props.size], disabled].join(' ')
})
</script>