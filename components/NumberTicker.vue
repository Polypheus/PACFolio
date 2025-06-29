<template>
  <span
    ref="ticker"
    class="inline-block tabular-nums tracking-wider text-black text-mega font-light"
    aria-label="Animated number"
  >
    {{ formattedValue }}
  </span>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['done'])

const props = defineProps({
  value: { type: Number, required: true },
  startValue: { type: Number, default: 0 },
  direction: { type: String, default: 'up' },
  delay: { type: Number, default: 0 },
  decimalPlaces: { type: Number, default: 0 }
})

const formattedValue = ref(props.startValue.toFixed(props.decimalPlaces))
const state = { val: props.startValue }

const animateTo = (toValue) => {
  gsap.to(state, {
    duration: 2,
    val: toValue,
    ease: 'power2.out',
    onUpdate: () => {
      formattedValue.value = Number(state.val).toFixed(props.decimalPlaces)
    },
    onComplete: () => {
      emit('done')
    }
  })
}

onMounted(() => {
  setTimeout(() => {
    const target = props.direction === 'down' ? props.startValue : props.value
    animateTo(target)
  }, props.delay * 1000)
})

watch(() => props.value, (newVal) => {
  animateTo(newVal)
})
</script>