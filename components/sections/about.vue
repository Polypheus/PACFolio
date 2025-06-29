<template>
  <div class="container">
    <h2 class="text-6xl mb-8">About Me</h2>
    <p class="text-2xl max-w-4xl mx-auto leading-relaxed">
      I'm a passionate front-end developer with expertise in modern web technologies. 
      I love creating beautiful, interactive user experiences that make a difference.
    </p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const emit = defineEmits(['ready'])

onMounted(() => {
  console.log('About section mounted: emitting ready')
  emit('ready')
})
</script>