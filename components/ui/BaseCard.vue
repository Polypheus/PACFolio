<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'elevated', 'bordered', 'minimal'].includes(value)
  },
  padding: {
    type: String,
    default: 'normal',
    validator: (value) => ['none', 'small', 'normal', 'large'].includes(value)
  },
  interactive: {
    type: Boolean,
    default: false
  }
})

const cardClasses = computed(() => {
  const base = 'transition-all duration-300 ease-in-out'
  
  const variants = {
    default: 'bg-white border border-gray-200 rounded-lg',
    elevated: 'bg-white shadow-lg rounded-lg',
    bordered: 'border-2 border-gray-300 rounded-lg',
    minimal: 'bg-transparent'
  }
  
  const paddings = {
    none: '',
    small: 'p-4',
    normal: 'p-6',
    large: 'p-8'
  }
  
  const interactive = props.interactive ? 'interactive-hover cursor-pointer' : ''
  
  return [base, variants[props.variant], paddings[props.padding], interactive].join(' ')
})
</script>