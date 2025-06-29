<template>
  <div class="container">
    <h2 class="text-6xl mb-8">Get In Touch</h2>
    <div class="text-2xl space-y-4">
      <p>Ready to work together?</p>
      <div class="flex justify-center space-x-8">
        <a href="mailto:your.email@example.com" class="hover:text-gray-600 transition-colors">
          Email
        </a>
        <a href="https://linkedin.com/in/yourprofile" class="hover:text-gray-600 transition-colors">
          LinkedIn
        </a>
        <a href="https://github.com/yourusername" class="hover:text-gray-600 transition-colors">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const emit = defineEmits(['ready'])

onMounted(() => {
  console.log('Contact section mounted: emitting ready')
  emit('ready')
})
</script>