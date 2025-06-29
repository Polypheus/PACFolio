<template>
  <div class="hero-section">
    <!-- Animated background -->
    <div class="morphing-bg"></div>
    <ParticleBackground />
    
    <!-- Floating geometric shapes -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
      <div class="shape shape-6"></div>
    </div>

    <div class="container text-center flex-col relative z-10">
      <!-- Main title with enhanced glitch effect -->
      <h1 
        class="intro glitch text-hero mb-8" 
        :class="{ 'animate-intro': animate }"
        data-text="PAUL ANDREW CONSUNJI"
      >
        PAUL ANDREW CONSUNJI
      </h1>
      
      <!-- Primary role - large and prominent -->
      <h2 
        class="intro1 holographic text-mega mb-6" 
        :class="{ 'animate-intro1': animate }"
      >
        FRONTEND DEVELOPER
      </h2>
      
      <!-- Secondary info - medium size -->
      <h3 
        class="intro2 neon-text text-large mb-4" 
        :class="{ 'animate-intro2': animate }"
      >
        CRAFTING DIGITAL EXPERIENCES
      </h3>

      <!-- Location - smaller supporting text -->
      <p 
        class="intro2b text-medium gradient-text-primary mb-12" 
        :class="{ 'animate-intro2b': animate }"
      >
        Metro Manila, Philippines
      </p>

      <!-- Interactive CTA button -->
      <div class="intro3 mb-16" :class="{ 'animate-intro3': animate }">
        <button class="cta-button group relative overflow-hidden">
          <span class="relative z-10 text-large font-bold tracking-wider">EXPLORE MY WORK</span>
          <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="button-glow"></div>
        </button>
      </div>

      <!-- Key stats - attention grabbing -->
      <div class="hero-stats" :class="{ 'animate-stats': animate }">
        <div class="stat-item">
          <div class="stat-number text-huge neon-text">50+</div>
          <div class="stat-label text-small">Projects</div>
        </div>
        <div class="stat-item">
          <div class="stat-number text-huge neon-pink">3+</div>
          <div class="stat-label text-small">Years</div>
        </div>
        <div class="stat-item">
          <div class="stat-number text-huge neon-green">100%</div>
          <div class="stat-label text-small">Satisfaction</div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" :class="{ 'animate-scroll': animate }">
        <div class="scroll-line"></div>
        <div class="scroll-dot"></div>
        <div class="scroll-text text-tiny">SCROLL TO EXPLORE</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import ParticleBackground from '@/components/ParticleBackground.vue'

const props = defineProps({
  loaderDone: Boolean
})

const emit = defineEmits(['ready'])
const animate = ref(false)

onMounted(() => {
  if (props.loaderDone) {
    triggerAnimation()
  }
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
  }, 4000)
}
</script>

<style scoped lang="scss">
.hero-section {
  min-height: 100vh;
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.shape {
  position: absolute;
  background: linear-gradient(45deg, rgba(255, 0, 128, 0.4), rgba(0, 212, 255, 0.4));
  animation: float-shape 8s ease-in-out infinite;
  filter: blur(1px);
}

.shape-1 {
  width: 120px;
  height: 120px;
  top: 15%;
  left: 8%;
  border-radius: 50%;
  animation-delay: 0s;
}

.shape-2 {
  width: 180px;
  height: 180px;
  top: 60%;
  right: 12%;
  border-radius: 30%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 25%;
  left: 15%;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  animation-delay: 4s;
}

.shape-4 {
  width: 140px;
  height: 140px;
  top: 35%;
  right: 25%;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  animation-delay: 1s;
}

.shape-5 {
  width: 80px;
  height: 80px;
  top: 70%;
  left: 70%;
  border-radius: 20%;
  animation-delay: 3s;
}

.shape-6 {
  width: 160px;
  height: 160px;
  top: 20%;
  right: 40%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation-delay: 5s;
}

@keyframes float-shape {
  0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
  25% { transform: translateY(-40px) rotate(90deg) scale(1.1); }
  50% { transform: translateY(-20px) rotate(180deg) scale(0.9); }
  75% { transform: translateY(-35px) rotate(270deg) scale(1.05); }
}

.cta-button {
  padding: 20px 60px;
  background: transparent;
  border: 3px solid #00d4ff;
  color: white;
  cursor: pointer;
  position: relative;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-transform: uppercase;
  letter-spacing: 3px;
  border-radius: 8px;
  
  .button-glow {
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(45deg, #00d4ff, #ff0080, #39ff14, #bf00ff);
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
    filter: blur(15px);
    transition: opacity 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 
      0 20px 40px rgba(0, 212, 255, 0.4),
      0 0 60px rgba(255, 0, 128, 0.3);
    border-color: #ff0080;
    
    .button-glow {
      opacity: 0.8;
    }
  }
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 80px;
  opacity: 0;
  margin-bottom: 60px;
}

.stat-item {
  text-align: center;
  
  .stat-number {
    margin-bottom: 8px;
    font-family: var(--font-primary);
  }
  
  .stat-label {
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.7;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.scroll-line {
  width: 2px;
  height: 80px;
  background: linear-gradient(to bottom, transparent, #00d4ff, transparent);
}

.scroll-dot {
  width: 12px;
  height: 12px;
  background: #00d4ff;
  border-radius: 50%;
  animation: scroll-bounce 2.5s infinite;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
}

.scroll-text {
  text-transform: uppercase;
  letter-spacing: 2px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

@keyframes scroll-bounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(25px); opacity: 0.4; }
}

// Enhanced animations with staggered timing
@keyframes slideInTopLeft {
  0% {
    opacity: 0;
    transform: translate(-300px, -300px) scale(0.3) rotate(-15deg);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
}

@keyframes slideInTopRight {
  0% {
    opacity: 0;
    transform: translate(300px, -300px) scale(0.3) rotate(15deg);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
}

@keyframes slideInBottom {
  0% {
    opacity: 0;
    transform: translateY(200px) scale(0.6);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(80px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scrollFade {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.intro, .intro1, .intro2, .intro2b, .intro3, .hero-stats, .scroll-indicator {
  opacity: 0;
}

.animate-intro {
  animation: slideInTopLeft 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.5s;
}

.animate-intro1 {
  animation: slideInTopRight 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 1s;
}

.animate-intro2 {
  animation: slideInBottom 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 1.5s;
}

.animate-intro2b {
  animation: fadeInUp 1.5s ease-out forwards;
  animation-delay: 2s;
}

.animate-intro3 {
  animation: fadeInScale 1.2s ease-out forwards;
  animation-delay: 2.5s;
}

.animate-stats {
  animation: fadeInUp 1.5s ease-out forwards;
  animation-delay: 3s;
}

.animate-scroll {
  animation: scrollFade 1.2s ease-out forwards;
  animation-delay: 3.5s;
}

@media (max-width: 768px) {
  .hero-stats {
    gap: 40px;
    flex-wrap: wrap;
  }
  
  .cta-button {
    padding: 16px 40px;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    gap: 30px;
  }
  
  .stat-item .stat-number {
    font-size: 2.5rem;
  }
}
</style>