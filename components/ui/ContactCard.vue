<template>
  <a :href="contact.href" class="contact-card interactive-hover" ref="contactCard">
    <BaseCard variant="default" padding="normal" class="contact-info">
      <div class="contact-icon text-large mb-2">{{ contact.icon }}</div>
      <h4 class="contact-title text-normal font-medium mb-1">{{ contact.type }}</h4>
      <p class="contact-detail text-small opacity-70">{{ contact.value }}</p>
    </BaseCard>
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
import BaseCard from './BaseCard.vue'

const props = defineProps({
  contact: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const contactCard = ref(null)
const { createScrollTrigger, animateIn } = useAnimations()

onMounted(() => {
  setupAnimations()
  setupHoverEffects()
})

function setupAnimations() {
  createScrollTrigger({
    trigger: contactCard.value,
    start: 'top 85%',
    animation: animateIn(contactCard.value, {
      from: { 
        y: 80, 
        scale: 0.8,
        rotationX: -15
      },
      to: {
        scale: 1,
        rotationX: 0,
        duration: 1,
        delay: props.index * 0.15,
        ease: "power3.out"
      }
    }),
    toggleActions: "play none none reverse"
  })
}

function setupHoverEffects() {
  const { $gsap } = useNuxtApp()
  
  contactCard.value.addEventListener('mouseenter', () => {
    $gsap.to(contactCard.value, { 
      y: -8, 
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    })
  })

  contactCard.value.addEventListener('mouseleave', () => {
    $gsap.to(contactCard.value, { 
      y: 0, 
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    })
  })
}
</script>

<style scoped>
.contact-card {
  text-decoration: none;
  color: inherit;
  display: block;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    .contact-info {
      border-color: var(--gray-400);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
    
    &::before {
      left: 100%;
    }
  }
}

.contact-info {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;
}

.contact-icon {
  margin-bottom: 0.5rem;
}

.contact-detail {
  word-break: break-all;
}
</style>