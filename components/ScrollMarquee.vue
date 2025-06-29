<template>
  <div class="marquee-wrapper" ref="marqueeWrapper">
    <div class="marquee" ref="marquee">
      <div class="marquee-content" ref="marqueeContent">
        <span v-for="(item, index) in items" :key="index" class="marquee-item">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  items: {
    type: Array,
    default: () => ['FRONTEND', 'DEVELOPER', 'CREATIVE', 'MINIMAL', 'INTERACTIVE']
  },
  speed: {
    type: Number,
    default: 1
  }
})

const marqueeWrapper = ref(null)
const marquee = ref(null)
const marqueeContent = ref(null)

let scrollTriggerInstance
let marqueeAnimation

onMounted(() => {
  const content = marqueeContent.value
  const wrapper = marqueeWrapper.value
  
  // Clone content for seamless loop
  const clone = content.cloneNode(true)
  marquee.value.appendChild(clone)
  
  // Base marquee animation
  marqueeAnimation = gsap.to([content, clone], {
    x: `-=${content.offsetWidth}`,
    duration: 20,
    ease: 'none',
    repeat: -1
  })
  
  // Scroll-based speed modification
  scrollTriggerInstance = ScrollTrigger.create({
    trigger: wrapper,
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
      const velocity = self.getVelocity()
      const speedMultiplier = 1 + Math.abs(velocity) * 0.0001 * props.speed
      
      // Modify animation speed based on scroll velocity
      gsap.to(marqueeAnimation, {
        timeScale: speedMultiplier,
        duration: 0.3,
        ease: 'power2.out'
      })
    },
    onEnter: () => {
      // Animate marquee items on enter
      gsap.fromTo('.marquee-item', 
        { opacity: 0.3, scale: 0.9 },
        { 
          opacity: 0.7, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1,
          ease: 'power2.out'
        }
      )
    }
  })
})

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
  }
  if (marqueeAnimation) {
    marqueeAnimation.kill()
  }
})
</script>

<style scoped>
.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  border-top: 1px solid var(--gray-200);
  border-bottom: 1px solid var(--gray-200);
  padding: 2rem 0;
  background: var(--white);
}

.marquee {
  display: flex;
  white-space: nowrap;
}

.marquee-content {
  display: flex;
  align-items: center;
  gap: 4rem;
  font-family: var(--font-primary);
  font-size: var(--text-large);
  font-weight: 700;
  letter-spacing: 0.1em;
}

.marquee-item {
  opacity: 0.7;
  transition: all 0.3s ease;
  cursor: default;
}

.marquee-item:hover {
  opacity: 1;
  transform: scale(1.05);
}
</style>