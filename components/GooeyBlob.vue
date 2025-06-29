<template>
  <div class="gooey-container" ref="container">
    <svg class="gooey-filter">
      <defs>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
        </filter>
      </defs>
    </svg>
    
    <div class="gooey" ref="gooeyGroup">
      <div 
        v-for="blob in blobs" 
        :key="blob.id"
        class="gooey-blob"
        :style="{
          left: blob.x + 'px',
          top: blob.y + 'px',
          width: blob.size + 'px',
          height: blob.size + 'px',
          animationDelay: blob.delay + 's',
          animationDuration: blob.duration + 's'
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const container = ref(null)
const gooeyGroup = ref(null)
const blobs = ref([])

const createBlob = (id) => ({
  id,
  x: Math.random() * (window.innerWidth - 100),
  y: Math.random() * (window.innerHeight - 100),
  size: 20 + Math.random() * 40,
  delay: Math.random() * 2,
  duration: 6 + Math.random() * 4
})

const initBlobs = () => {
  blobs.value = Array.from({ length: 8 }, (_, i) => createBlob(i))
}

const updateBlobs = () => {
  blobs.value = blobs.value.map(blob => ({
    ...blob,
    x: Math.random() * (window.innerWidth - 100),
    y: Math.random() * (window.innerHeight - 100)
  }))
}

let intervalId

onMounted(() => {
  initBlobs()
  intervalId = setInterval(updateBlobs, 8000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
.gooey-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.1;
}

.gooey-filter {
  position: absolute;
  width: 0;
  height: 0;
}
</style>