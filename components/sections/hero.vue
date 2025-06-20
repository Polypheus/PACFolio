<template>
  <div class="container text-[200px] flex-col">
    <h1 class="intro" :class="{ 'animate-intro': animate }">HI MY NAME IS PAUL ANDREW CONSUNJI</h1>
    <h3 class="intro1" :class="{ 'animate-intro1': animate }">im a front end developer</h3>
    <h3 class="intro2" :class="{ 'animate-intro2': animate }">based in metro manila philippines</h3>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  loaderDone: Boolean
});

const emit = defineEmits(['ready']);
const animate = ref(false);

onMounted(() => {
  if (props.loaderDone) {
    triggerAnimation();
  }
});

watch(() => props.loaderDone, (newVal) => {
  if (newVal) {
    triggerAnimation();
  }
});

function triggerAnimation() {
  animate.value = true;

  // Wait for animation to finish before emitting
  setTimeout(() => {
    emit('ready');
  }, 2000); // adjust based on animation duration
}
</script>

<style scoped lang="scss">
@keyframes slideInTopLeft {
  0% {
    opacity: 0;
    transform: translate(-100px, -100px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes slideInTopRight {
  0% {
    opacity: 0;
    transform: translate(100px, -100px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes slideInBottom {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.intro, .intro1, .intro2 {
  border: 1px solid black;
  opacity: 0;
}

.animate-intro {
  animation: slideInTopLeft 1s ease-out forwards;
  animation-delay: 0.2s;
}

.animate-intro1 {
  animation: slideInTopRight 1s ease-out forwards;
  animation-delay: 0.6s;
}

.animate-intro2 {
  animation: slideInBottom 1s ease-out forwards;
  animation-delay: 1s;
}
</style>
