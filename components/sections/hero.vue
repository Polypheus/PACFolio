<template>
<div class="container text-[200px]">
<h1>Hi</h1>
</div>
</template>

<style scoped lang = "scss">

</style>

<script setup>
import { onMounted } from 'vue'

// 👇 This is critical!
const emit = defineEmits(['ready'])

onMounted(() => {
  console.log('Section mounted: emitting ready') // ✅ Add log to confirm
  emit('ready')
})
</script>
