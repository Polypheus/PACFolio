<template>
  <div class="hero-section" ref="heroSection">
    <GooeyBlob />
    
    <div class="container text-center flex-col relative z-10">
      <!-- Main title -->
      <h1 class="intro text-hero mb-8" ref="mainTitle">
        {{ personalInfo.name.split(' ').slice(0, 2).join(' ') }}<br>
        {{ personalInfo.name.split(' ').slice(2).join(' ') }}
      </h1>
      
      <!-- Primary role -->
      <h2 class="intro1 text-large mb-6 font-light tracking-wide" ref="subtitle">
        {{ personalInfo.role }}
      </h2>
      
      <!-- Location -->
      <p class="intro2 text-normal mb-12 opacity-60" ref="location">
        {{ personalInfo.location }}
      </p>

      <!-- CTA button -->
      <div class="intro3 mb-16" ref="ctaButton">
        <BaseButton @click="scrollToWork">
          View My Work
        </BaseButton>
      </div>

      <!-- Stats -->
      <div class="hero-stats mb-16" ref="heroStats">
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.label"
          class="stat-item" 
          :ref="el => setStatRef(el, index)"
        >
          <div class="stat-number text-huge font-light">{{ stat.value }}</div>
          <div class="stat-label text-small">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" ref="scrollIndicator">
        <div class="scroll-line"></div>
        <div class="scroll-text text-tiny">SCROLL</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
import { useAnimations } from '@/composables/useAnimations'
import GooeyBlob from '@/components/GooeyBlob.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const props = defineProps({
  loaderDone: Boolean
})

const emit = defineEmits(['ready'])

const { personalInfo, stats } = usePortfolioData()
const { createTimeline, setupParallax, waitForGSAP, refreshScrollTrigger } = useAnimations()

const heroSection = ref(null)
const mainTitle = ref(null)
const subtitle = ref(null)
const location = ref(null)
const ctaButton = ref(null)
const heroStats = ref(null)
const scrollIndicator = ref(null)
const statRefs = ref([])

let animationsSetup = false

const setStatRef = (el, index) => {
  if (el) statRefs.value[index] = el
}

onMounted(async () => {
  await nextTick()
  
  if (process.client) {
    waitForGSAP(() => {
      if (props.loaderDone && !animationsSetup) {
        setupAnimations()
      }
    })
  }
})

watch(() => props.loaderDone, (newVal) => {
  if (newVal && !animationsSetup) {
    waitForGSAP(setupAnimations)
  }
})

function setupAnimations() {
  if (animationsSetup || !process.client) return
  animationsSetup = true

  const tl = createTimeline()
  
  if (!tl) return

  // Set initial states
  const { $gsap } = useNuxtApp()
  const elements = [mainTitle.value, subtitle.value, location.value, ctaButton.value, heroStats.value, scrollIndicator.value]
  
  $gsap.set(elements, {
    opacity: 0,
    y: 50
  })
  
  // Entrance sequence
  tl.to(mainTitle.value, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out"
  })
  .to(subtitle.value, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out"
  }, "-=1")
  .to(location.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }, "-=0.8")
  .to(ctaButton.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "back.out(1.7)"
  }, "-=0.6")
  .to(heroStats.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }, "-=0.4")
  .to(scrollIndicator.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }, "-=0.2")
  
  tl.call(() => {
    setTimeout(() => {
      setupScrollEffects()
      refreshScrollTrigger()
    }, 100)
  })
  
  setTimeout(() => {
    emit('ready')
  }, 3000)
}

function setupScrollEffects() {
  // Parallax effects
  setupParallax(mainTitle.value, { yPercent: -30 })
  setupParallax([subtitle.value, location.value], { yPercent: -20, opacity: 0 })
  
  // Stats animation
  const { createScrollTrigger } = useAnimations()
  createScrollTrigger({
    trigger: heroStats.value,
    start: "top 80%",
    animation: useNuxtApp().$gsap.fromTo(statRefs.value, 
      { scale: 0.8, opacity: 0.5 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
      }
    ),
    toggleActions: "play none none reverse"
  })
}

function scrollToWork() {
  const aboutSection = document.querySelector('.about-section')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped lang="scss">
.hero-section {
  min-height: 100vh;
  background: var(--white);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 4rem;
}

.stat-item {
  text-align: center;
  
  .stat-number {
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.6;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.scroll-line {
  width: 1px;
  height: 3rem;
  background: var(--gray-400);
  animation: scroll-bounce 2s infinite;
}

.scroll-text {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

@keyframes scroll-bounce {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@media (max-width: 768px) {
  .hero-stats {
    gap: 2rem;
    flex-wrap: wrap;
  }
}
</style>