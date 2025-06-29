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
    </div>

    <div class="container text-center flex-col relative z-10">
      <!-- Main title with glitch effect -->
      <h1 
        class="intro glitch text-[120px] md:text-[200px] font-black leading-none mb-8" 
        :class="{ 'animate-intro': animate }"
        data-text="PAUL ANDREW CONSUNJI"
      >
        PAUL ANDREW CONSUNJI
      </h1>
      
      <!-- Subtitle with holographic effect -->
      <h3 
        class="intro1 holographic text-[40px] md:text-[60px] font-bold mb-4" 
        :class="{ 'animate-intro1': animate }"
      >
        FRONT END DEVELOPER
      </h3>
      
      <!-- Location with neon effect -->
      <h3 
        class="intro2 neon-text text-[30px] md:text-[40px] font-medium mb-12" 
        :class="{ 'animate-intro2': animate }"
      >
        METRO MANILA, PHILIPPINES
      </h3>

      <!-- Interactive CTA button -->
      <div class="intro3" :class="{ 'animate-intro3': animate }">
        <button class="cta-button group relative overflow-hidden">
          <span class="relative z-10 text-xl font-bold tracking-wider">VIEW MY WORK</span>
          <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator" :class="{ 'animate-scroll': animate }">
        <div class="scroll-line"></div>
        <div class="scroll-dot"></div>
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
  }, 3000)
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
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(255, 0, 128, 0.3), rgba(0, 212, 255, 0.3));
  animation: float-shape 6s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
  border-radius: 20%;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 40%;
  right: 30%;
  animation-delay: 1s;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}

@keyframes float-shape {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(180deg); }
}

.cta-button {
  padding: 16px 48px;
  background: transparent;
  border: 2px solid #00d4ff;
  color: white;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
    border-color: #ff0080;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

.scroll-line {
  width: 2px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, #00d4ff, transparent);
  margin: 0 auto 10px;
}

.scroll-dot {
  width: 8px;
  height: 8px;
  background: #00d4ff;
  border-radius: 50%;
  margin: 0 auto;
  animation: scroll-bounce 2s infinite;
}

@keyframes scroll-bounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(20px); opacity: 0.5; }
}

// Enhanced animations
@keyframes slideInTopLeft {
  0% {
    opacity: 0;
    transform: translate(-200px, -200px) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
}

@keyframes slideInTopRight {
  0% {
    opacity: 0;
    transform: translate(200px, -200px) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
}

@keyframes slideInBottom {
  0% {
    opacity: 0;
    transform: translateY(200px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scrollFade {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.intro, .intro1, .intro2, .intro3, .scroll-indicator {
  opacity: 0;
}

.animate-intro {
  animation: slideInTopLeft 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.3s;
}

.animate-intro1 {
  animation: slideInTopRight 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.8s;
}

.animate-intro2 {
  animation: slideInBottom 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 1.3s;
}

.animate-intro3 {
  animation: fadeInUp 1s ease-out forwards;
  animation-delay: 1.8s;
}

.animate-scroll {
  animation: scrollFade 1s ease-out forwards;
  animation-delay: 2.3s;
}

@media (max-width: 768px) {
  .intro {
    font-size: 80px !important;
  }
  
  .intro1 {
    font-size: 35px !important;
  }
  
  .intro2 {
    font-size: 25px !important;
  }
}
</style>