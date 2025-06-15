<template>

</template>

<script setup>
import { onMounted } from 'vue'

// 👇 This is critical!
const emit = defineEmits(['ready'])

onMounted(() => {
  console.log('Section mounted: emitting ready') // ✅ Add log to confirm
  emit('ready')
})
</script>
