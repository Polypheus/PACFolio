<template>
  <span
    ref="ticker"
    class="inline-block tabular-nums tracking-wider text-black dark:text-white text-5xl"
    aria-label="Animated number"
  >
    {{ formattedValue }}
  </span>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['done']) // Optional: emit when animation ends

const props = defineProps({
  value: { type: Number, required: true },
  startValue: { type: Number, default: 0 },
  direction: { type: String, default: 'up' }, // 'up' or 'down'
  delay: { type: Number, default: 0 }, // in seconds
  decimalPlaces: { type: Number, default: 0 }
})

// This will display the formatted animated number
const formattedValue = ref(props.startValue.toFixed(props.decimalPlaces))

// Dummy object for GSAP animation
const state = { val: props.startValue }

// GSAP animation logic
const animateTo = (toValue) => {
  gsap.to(state, {
    duration: 1.5,
    val: toValue,
    onUpdate: () => {
      formattedValue.value = Number(state.val).toFixed(props.decimalPlaces)
    },
    onComplete: () => {
      emit('done') // Inform parent that animation is finished
    }
  })
}

// Run on mount with optional delay
onMounted(() => {
  setTimeout(() => {
    const target = props.direction === 'down' ? props.startValue : props.value
    animateTo(target)
  }, props.delay * 1000)
})

// Reactively update when value changes
watch(() => props.value, (newVal) => {
  animateTo(newVal)
})
</script>
