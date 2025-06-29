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
        animationDuration: particle.duration + 's',
        background: particle.color
      }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const particlesContainer = ref(null)
const particles = ref([])
const colors = ['#00d4ff', '#ff0080', '#39ff14', '#bf00ff', '#ffffff']

const createParticle = (id) => ({
  id,
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  delay: Math.random() * 2,
  duration: 3 + Math.random() * 4,
  color: colors[Math.floor(Math.random() * colors.length)]
})

const initParticles = () => {
  particles.value = Array.from({ length: 50 }, (_, i) => createParticle(i))
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
  intervalId = setInterval(updateParticles, 8000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>