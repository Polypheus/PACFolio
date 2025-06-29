<template>
  <div class="timeline-item interactive-hover" ref="timelineItem">
    <div class="timeline-dot" ref="timelineDot"></div>
    <BaseCard variant="default" padding="normal" class="timeline-content">
      <h4 class="text-normal font-medium mb-1">{{ item.title }}</h4>
      <p class="text-small opacity-70 mb-1">{{ item.company }}</p>
      <p class="text-small opacity-70 mb-2">{{ item.description }}</p>
      <div class="timeline-meta">
        <span class="text-tiny opacity-50">{{ item.period }}</span>
        <span class="timeline-type text-tiny" :class="getTypeClass(item.type)">
          {{ item.type }}
        </span>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
import BaseCard from './BaseCard.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const timelineItem = ref(null)
const timelineDot = ref(null)
const { createScrollTrigger } = useAnimations()

const getTypeClass = (type) => {
  const classes = {
    'full-time': 'bg-green-100 text-green-800',
    'internship': 'bg-blue-100 text-blue-800',
    'part-time': 'bg-yellow-100 text-yellow-800'
  }
  return classes[type] || 'bg-gray-100 text-gray-800'
}

onMounted(() => {
  // Animate timeline item
  createScrollTrigger({
    trigger: timelineItem.value,
    start: 'top 85%',
    animation: useNuxtApp().$gsap.fromTo(timelineItem.value,
      { opacity: 0, x: 100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        delay: props.index * 0.2,
        ease: "power2.out"
      }
    ),
    toggleActions: "play none none reverse"
  })

  // Animate timeline dot
  createScrollTrigger({
    trigger: timelineDot.value,
    start: 'top 85%',
    animation: useNuxtApp().$gsap.fromTo(timelineDot.value,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.6,
        delay: props.index * 0.2,
        ease: "back.out(1.7)"
      }
    ),
    toggleActions: "play none none reverse"
  })
})
</script>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  margin-left: 1rem;
}

.timeline-dot {
  position: absolute;
  left: -2.25rem;
  top: 1.5rem;
  width: 8px;
  height: 8px;
  background: var(--black);
  border-radius: 50%;
  border: 2px solid var(--white);
  z-index: 2;
}

.timeline-content {
  position: relative;
}

.timeline-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.timeline-type {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>