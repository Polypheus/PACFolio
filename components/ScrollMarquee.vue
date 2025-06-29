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

onMounted(() => {
  const content = marqueeContent.value
  const wrapper = marqueeWrapper.value
  
  // Clone content for seamless loop
  const clone = content.cloneNode(true)
  marquee.value.appendChild(clone)
  
  // Set up scroll-based animation
  scrollTriggerInstance = ScrollTrigger.create({
    trigger: wrapper,
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
      const velocity = self.getVelocity()
      const speed = Math.abs(velocity) * 0.01 * props.speed
      
      gsap.to([content, clone], {
        x: `-=${speed}`,
        duration: 0.1,
        ease: 'none'
      })
      
      // Reset position when content moves out of view
      if (gsap.getProperty(content, 'x') <= -content.offsetWidth) {
        gsap.set(content, { x: content.offsetWidth })
      }
      if (gsap.getProperty(clone, 'x') <= -clone.offsetWidth) {
        gsap.set(clone, { x: clone.offsetWidth })
      }
    }
  })
})

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
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
  transition: opacity 0.3s ease;
}

.marquee-item:hover {
  opacity: 1;
}
</style>