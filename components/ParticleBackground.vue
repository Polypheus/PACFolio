<template>
  <div class="particles" ref="particlesContainer">
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :style="{
        left: particle.x + 'px',
        top: particle.y + 'px',
        animationDelay: particle.delay + 's',
        animationDuration: particle.duration + 's'
      }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const particlesContainer = ref(null)
const particles = ref([])

const createParticle = (id) => ({
  id,
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  delay: Math.random() * 2,
  duration: 8 + Math.random() * 4
})

const initParticles = () => {
  particles.value = Array.from({ length: 20 }, (_, i) => createParticle(i))
}

const updateParticles = () => {
  particles.value = particles.value.map(particle => ({
    ...particle,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight
  }))
}

let intervalId

onMounted(() => {
  initParticles()
  intervalId = setInterval(updateParticles, 12000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.1;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--black);
  border-radius: 50%;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
  25% { transform: translateY(-20px) rotate(90deg); opacity: 0.8; }
  50% { transform: translateY(-10px) rotate(180deg); opacity: 0.4; }
  75% { transform: translateY(-15px) rotate(270deg); opacity: 0.6; }
}
</style>