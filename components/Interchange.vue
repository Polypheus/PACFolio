<template>
  <div class="circle-loader" ref="loaderWrapper">
    <div class="circle" ref="circle1" />
    <div class="circle" ref="circle2" />
    <div class="glow" ref="glow" />
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue'
import { gsap } from 'gsap'

const emit = defineEmits(['done'])

const loaderWrapper = ref(null)
const circle1 = ref(null)
const circle2 = ref(null)
const glow = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    onComplete: () => emit('done')
  })

  // Initial position setup
  gsap.set([circle1.value, circle2.value, glow.value], {
    scale: 0,
    opacity: 0
  })

  // Fade in and grow circles
  tl.to([circle1.value, circle2.value], {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2
  })

  // Orbit / interchange motion
  tl.to(circle1.value, {
    x: -60,
    y: -60,
    rotate: 360,
    duration: 1.2
  }, 0.4)

  tl.to(circle2.value, {
    x: 60,
    y: 60,
    rotate: -360,
    duration: 1.2
  }, 0.4)

  // Merge toward center
  tl.to([circle1.value, circle2.value], {
    x: 0,
    y: 0,
    scale: 1.2,
    duration: 0.8
  })

  // Glow pulse and fade
  tl.to(glow.value, {
    scale: 20,
    opacity: 1,
    duration: 1,
    ease: 'expo.inOut'
  }, '+=0.2')

  // Fade out everything
  tl.to(loaderWrapper.value, {
    opacity: 0,
    duration: 0.6,
    pointerEvents: 'none'
  }, '-=0.4')
})
</script>

<style scoped>
.circle-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.circle {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--black);
}

.circle:nth-child(2) {
  background: var(--gray-600);
}

.glow {
  position: absolute;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, var(--gray-400) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  z-index: 10;
}
</style>