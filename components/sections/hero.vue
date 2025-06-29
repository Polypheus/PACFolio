<template>
  <div class="hero-section">
    <GooeyBlob />
    
    <div class="container text-center flex-col relative z-10">
      <!-- Main title -->
      <h1 
        class="intro text-hero mb-8" 
        :class="{ 'animate-intro': animate }"
        ref="mainTitle"
      >
        PAUL ANDREW<br>CONSUNJI
      </h1>
      
      <!-- Primary role -->
      <h2 
        class="intro1 text-large mb-6 font-light tracking-wide" 
        :class="{ 'animate-intro1': animate }"
        ref="subtitle"
      >
        Frontend Developer
      </h2>
      
      <!-- Location -->
      <p 
        class="intro2 text-normal mb-12 opacity-60" 
        :class="{ 'animate-intro2': animate }"
        ref="location"
      >
        Metro Manila, Philippines
      </p>

      <!-- CTA button -->
      <div class="intro3 mb-16" :class="{ 'animate-intro3': animate }" ref="ctaButton">
        <button class="btn-minimal text-normal" @click="scrollToWork">
          View My Work
        </button>
      </div>

      <!-- Stats -->
      <div class="hero-stats" :class="{ 'animate-stats': animate }" ref="heroStats">
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
      <div class="scroll-indicator" :class="{ 'animate-scroll': animate }" ref="scrollIndicator">
        <div class="scroll-line"></div>
        <div class="scroll-text text-tiny">SCROLL</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GooeyBlob from '@/components/GooeyBlob.vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  loaderDone: Boolean
})

const emit = defineEmits(['ready'])
const animate = ref(false)
const mainTitle = ref(null)
const subtitle = ref(null)
const location = ref(null)
const ctaButton = ref(null)
const heroStats = ref(null)
const scrollIndicator = ref(null)
const stat1 = ref(null)
const stat2 = ref(null)
const stat3 = ref(null)

onMounted(() => {
  if (props.loaderDone) {
    triggerAnimation()
  }
  
  // Parallax effect on scroll
  gsap.to(mainTitle.value, {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: mainTitle.value,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })
  
  // Fade out hero content on scroll
  gsap.to([subtitle.value, location.value, ctaButton.value], {
    opacity: 0,
    y: -30,
    ease: "none",
    scrollTrigger: {
      trigger: heroStats.value,
      start: "top bottom",
      end: "center center",
      scrub: true
    }
  })
  
  // Stats counter animation on scroll
  ScrollTrigger.create({
    trigger: heroStats.value,
    start: "top 80%",
    onEnter: () => {
      gsap.fromTo([stat1.value, stat2.value, stat3.value], 
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "back.out(1.7)"
        }
      )
    }
  })
})

watch(() => props.loaderDone, (newVal) => {
  if (newVal) {
    triggerAnimation()
  }
})

function triggerAnimation() {
  animate.value = true
  setTimeout(() => {
    emit('ready')
  }, 3000)
}

function scrollToWork() {
  document.querySelector('.about-section')?.scrollIntoView({ 
    behavior: 'smooth' 
  })
}
</script>

<style scoped lang="scss">
.hero-section {
  min-height: 100vh;
  background: var(--white);
  position: relative;
  overflow: hidden;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  opacity: 0;
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
  opacity: 0;
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

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.intro, .intro1, .intro2, .intro3, .hero-stats, .scroll-indicator {
  opacity: 0;
}

.animate-intro {
  animation: fadeInUp 1.5s ease-out forwards;
  animation-delay: 0.5s;
}

.animate-intro1 {
  animation: fadeInUp 1.2s ease-out forwards;
  animation-delay: 1s;
}

.animate-intro2 {
  animation: fadeInUp 1s ease-out forwards;
  animation-delay: 1.3s;
}

.animate-intro3 {
  animation: fadeInUp 1s ease-out forwards;
  animation-delay: 1.6s;
}

.animate-stats {
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 2s;
}

.animate-scroll {
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 2.5s;
}

@media (max-width: 768px) {
  .hero-stats {
    gap: 2rem;
    flex-wrap: wrap;
  }
}
</style>