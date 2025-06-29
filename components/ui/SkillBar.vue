<template>
  <div class="skill-item" ref="skillItem">
    <div class="skill-header">
      <span class="skill-name text-normal font-medium">{{ skill.name }}</span>
      <span class="skill-level text-small opacity-60">{{ skill.level }}%</span>
    </div>
    <div class="skill-bar">
      <div 
        class="skill-progress" 
        ref="skillProgress"
        :style="{ backgroundColor: getCategoryColor(skill.category) }"
      ></div>
    </div>
    <div class="skill-category text-tiny opacity-40 mt-1">{{ skill.category }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAnimations } from '@/composables/useAnimations'

const props = defineProps({
  skill: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const skillItem = ref(null)
const skillProgress = ref(null)
const { createScrollTrigger } = useAnimations()

const getCategoryColor = (category) => {
  const colors = {
    frontend: 'var(--black)',
    backend: 'var(--gray-600)',
    design: 'var(--gray-500)',
    specialized: 'var(--gray-700)',
    tools: 'var(--gray-400)',
    technical: 'var(--gray-800)'
  }
  return colors[category] || 'var(--black)'
}

onMounted(() => {
  // Animate skill item entrance
  createScrollTrigger({
    trigger: skillItem.value,
    start: 'top 85%',
    animation: useNuxtApp().$gsap.fromTo(skillItem.value,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: props.index * 0.1,
        ease: "back.out(1.7)"
      }
    ),
    toggleActions: "play none none reverse"
  })

  // Animate skill bar progress
  createScrollTrigger({
    trigger: skillProgress.value,
    start: 'top 80%',
    animation: useNuxtApp().$gsap.fromTo(skillProgress.value,
      { width: '0%' },
      {
        width: props.skill.level + '%',
        duration: 1.5,
        ease: "power2.out"
      }
    ),
    toggleActions: "play none none reverse"
  })
})
</script>

<style scoped>
.skill-item {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-bar {
  width: 100%;
  height: 4px;
  background: var(--gray-200);
  border-radius: 2px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  border-radius: 2px;
  width: 0%;
  transition: width 0.3s ease;
}

.skill-category {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>