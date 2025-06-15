<template>
    <div class="container text-[150px]">
        <h1></h1>
    </div>
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
