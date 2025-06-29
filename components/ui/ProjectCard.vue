<template>
  <a
    :href="project.url"
    target="_blank"
    class="project-link"
    @mouseenter="$emit('hover', project)"
    @mouseleave="$emit('leave')"
  >
    <BaseCard variant="default" padding="large" interactive class="project-card" ref="projectCard">
      <div class="project-number text-huge font-light opacity-20" ref="projectNumber">
        {{ String(index + 1).padStart(2, '0') }}
      </div>
      <div class="project-content" ref="projectContent">
        <h1 class="project-title text-large font-semibold mb-2">
          {{ project.title }}
        </h1>
        <p class="project-description text-normal opacity-70 mb-4">
          {{ project.description }}
        </p>
        <div class="project-tags">
          <span 
            v-for="tag in project.tags" 
            :key="tag"
            class="tag text-tiny"
          >
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="project-arrow text-large" ref="projectArrow">→</div>
    </BaseCard>
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
import BaseCard from './BaseCard.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

defineEmits(['hover', 'leave'])

const projectCard = ref(null)
const projectNumber = ref(null)
const projectContent = ref(null)
const projectArrow = ref(null)

const { createScrollTrigger } = useAnimations()

onMounted(() => {
  setupAnimations()
  setupHoverEffects()
})

function setupAnimations() {
  const direction = props.index % 2 === 0 ? -100 : 100
  
  // Card slide in animation
  createScrollTrigger({
    trigger: projectCard.value,
    start: 'top 85%',
    animation: useNuxtApp().$gsap.fromTo(projectCard.value,
      { 
        opacity: 0, 
        x: direction, 
        y: 50,
        scale: 0.8,
        rotationY: direction > 0 ? 15 : -15
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        delay: props.index * 0.2,
        ease: "power3.out"
      }
    ),
    toggleActions: "play none none reverse"
  })

  // Number animation
  createScrollTrigger({
    trigger: projectNumber.value,
    start: 'top 85%',
    animation: useNuxtApp().$gsap.fromTo(projectNumber.value,
      { scale: 0, rotation: 180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        delay: props.index * 0.2 + 0.3,
        ease: "back.out(1.7)"
      }
    ),
    toggleActions: "play none none reverse"
  })

  // Content stagger animation
  if (projectContent.value?.children) {
    createScrollTrigger({
      trigger: projectContent.value,
      start: 'top 85%',
      animation: useNuxtApp().$gsap.fromTo(projectContent.value.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: props.index * 0.2 + 0.5,
          ease: "power2.out"
        }
      ),
      toggleActions: "play none none reverse"
    })
  }

  // Arrow bounce animation
  createScrollTrigger({
    trigger: projectArrow.value,
    start: 'top 85%',
    animation: useNuxtApp().$gsap.fromTo(projectArrow.value,
      { opacity: 0, x: -20, scale: 0.5 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        delay: props.index * 0.2 + 0.7,
        ease: "back.out(1.7)"
      }
    ),
    toggleActions: "play none none reverse"
  })
}

function setupHoverEffects() {
  const { $gsap } = useNuxtApp()
  
  projectCard.value.addEventListener('mouseenter', () => {
    $gsap.to(projectNumber.value, { scale: 1.1, opacity: 0.6, duration: 0.3 })
    $gsap.to(projectArrow.value, { x: 10, scale: 1.2, duration: 0.3 })
    $gsap.to(projectCard.value, { y: -5, duration: 0.3 })
  })

  projectCard.value.addEventListener('mouseleave', () => {
    $gsap.to(projectNumber.value, { scale: 1, opacity: 0.2, duration: 0.3 })
    $gsap.to(projectArrow.value, { x: 0, scale: 1, duration: 0.3 })
    $gsap.to(projectCard.value, { y: 0, duration: 0.3 })
  })
}
</script>

<style scoped>
.project-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.project-card {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--gray-400);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}

.project-number {
  transition: all 0.3s ease;
}

.project-content {
  flex: 1;
}

.project-title {
  margin-bottom: 0.5rem;
}

.project-description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: var(--gray-100);
  color: var(--gray-700);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--gray-200);
    transform: translateY(-1px);
  }
}

.project-arrow {
  transition: all 0.3s ease;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
}
</style>