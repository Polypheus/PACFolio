<template>
  <div class="hero-section" ref="heroSection">
    <GooeyBlob />
    
    <div class="container text-center flex-col relative z-10">
      <!-- Main title -->
      <h1 
        class="intro text-hero mb-8" 
        ref="mainTitle"
      >
        PAUL ANDREW<br>CONSUNJI
      </h1>
      
      <!-- Primary role -->
      <h2 
        class="intro1 text-large mb-6 font-light tracking-wide" 
        ref="subtitle"
      >
        Frontend Developer
      </h2>
      
      <!-- Location -->
      <p 
        class="intro2 text-normal mb-12 opacity-60" 
        ref="location"
      >
        Metro Manila, Philippines
      </p>

      <!-- CTA button -->
      <div class="intro3 mb-16" ref="ctaButton">
        <button class="btn-minimal text-normal" @click="scrollToWork">
          View My Work
        </button>
      </div>

      <!-- Stats -->
      <div class="hero-stats mb-16" ref="heroStats">
        <div class="stat-item" ref="stat1">
          <div class="stat-number text-huge font-light">50+</div>
          <div class="stat-label text-small">Projects</div>
        </div>
        <div class="stat-item" ref="stat2">
          <div class="stat-number text-huge font-light">3+</div>
          <div class="stat-label text-small">Years</div>
        </div>
        <div class="stat-item" ref="stat3">
          <div class="stat-number text-huge font-light">100%</div>
          <div class="stat-label text-small">Satisfaction</div>
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
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GooeyBlob from '@/components/GooeyBlob.vue'

// Register ScrollTrigger plugin
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const props = defineProps({
  loaderDone: Boolean
})

const emit = defineEmits(['ready'])

const heroSection = ref(null)
const mainTitle = ref(null)
const subtitle = ref(null)
const location = ref(null)
const ctaButton = ref(null)
const heroStats = ref(null)
const scrollIndicator = ref(null)
const stat1 = ref(null)
const stat2 = ref(null)
const stat3 = ref(null)

onMounted(async () => {
  await nextTick()
  
  if (props.loaderDone) {
    setupAnimations()
  }
})

watch(() => props.loaderDone, (newVal) => {
  if (newVal) {
    setupAnimations()
  }
})

function setupAnimations() {
  if (!process.client) return

  // Initial entrance animations
  const tl = gsap.timeline()
  
  // Set initial states
  gsap.set([mainTitle.value, subtitle.value, location.value, ctaButton.value, heroStats.value, scrollIndicator.value], {
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
  
  // Parallax effects on scroll
  ScrollTrigger.create({
    trigger: heroSection.value,
    start: "top top",
    end: "bottom top",
    scrub: 1,
    animation: gsap.to(mainTitle.value, {
      yPercent: -30,
      ease: "none"
    })
  })
  
  ScrollTrigger.create({
    trigger: heroSection.value,
    start: "top top",
    end: "center top",
    scrub: 1,
    animation: gsap.to([subtitle.value, location.value], {
      yPercent: -20,
      opacity: 0,
      ease: "none"
    })
  })
  
  // Stats animation on scroll
  ScrollTrigger.create({
    trigger: heroStats.value,
    start: "top 80%",
    animation: gsap.fromTo([stat1.value, stat2.value, stat3.value], 
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
  
  setTimeout(() => {
    emit('ready')
  }, 3000)
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