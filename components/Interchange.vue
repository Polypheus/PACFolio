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
    x: -80,
    y: -80,
    rotate: 360,
    duration: 1.2
  }, 0.4)

  tl.to(circle2.value, {
    x: 80,
    y: 80,
    rotate: -360,
    duration: 1.2
  }, 0.4)

  // Merge toward center
  tl.to([circle1.value, circle2.value], {
    x: 0,
    y: 0,
    scale: 1.3,
    duration: 0.8
  })

  // Glow pulse and full-screen flash
  tl.to(glow.value, {
    scale: 40,
    opacity: 1,
    duration: 1.2,
    ease: 'expo.inOut'
  }, '+=0.2')

  // Fade out everything
  tl.to(loaderWrapper.value, {
    opacity: 0,
    duration: 0.8,
    pointerEvents: 'none'
  }, '-=0.6')
})
</script>
<style scoped>
.circle-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.circle {
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ff0055, #ff6600);
  box-shadow: 0 0 40px rgba(255, 0, 85, 0.7);
}

.circle:nth-child(2) {
  background: radial-gradient(circle at 70% 70%, #00ccff, #0066ff);
  box-shadow: 0 0 40px rgba(0, 204, 255, 0.7);
}

.glow {
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #ffffff 0%, transparent 80%);
  border-radius: 50%;
  pointer-events: none;
  opacity: 0;
  mix-blend-mode: screen;
  z-index: 10;
}
</style>
