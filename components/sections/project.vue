<template>
  <div class="scroll-wrapper" @mousemove="onMouseMove">
    <!-- Expanding Circle -->
    <div class="scroll-circle" ref="scrollCircle"></div>
    
    <!-- Animated background -->
    <div class="project-bg">
      <div class="bg-pattern"></div>
    </div>

    <!-- Project Section -->
    <section class="project-section" ref="projectSection">
      <h2 class="section-title text-[120px] font-black mb-20 holographic text-center">
        MY PROJECTS
      </h2>

      <div class="projects-container">
        <a
          href="https://polynotes.netlify.app/"
          target="_blank"
          class="project-link"
          @mouseenter="hoveredProjectUrl = 'https://polynotes.netlify.app/'"
          @mouseleave="hoveredProjectUrl = null"
        >
          <div class="project-card" ref="project1">
            <div class="project-number">01</div>
            <div class="project-content">
              <h1 class="project-title">
                POLYNOTES
                <span class="project-tech">Built with Loveable</span>
              </h1>
              <p class="project-description">
                A modern note-taking application with real-time collaboration features
              </p>
              <div class="project-tags">
                <span class="tag">React</span>
                <span class="tag">TypeScript</span>
                <span class="tag">Supabase</span>
              </div>
            </div>
            <div class="project-date">3 months ago</div>
            <div class="project-arrow">→</div>
          </div>
        </a>

        <a
          href="https://rtu-pdsms.onrender.com/"
          target="_blank"
          class="project-link"
          @mouseenter="hoveredProjectUrl = 'https://rtu-pdsms.onrender.com/'"
          @mouseleave="hoveredProjectUrl = null"
        >
          <div class="project-card" ref="project2">
            <div class="project-number">02</div>
            <div class="project-content">
              <h1 class="project-title">
                RTU-PDSMS
                <span class="project-tech">Thesis Project</span>
              </h1>
              <p class="project-description">
                Personnel Data and Scheduling Management System for university administration
              </p>
              <div class="project-tags">
                <span class="tag">PHP</span>
                <span class="tag">MySQL</span>
                <span class="tag">Bootstrap</span>
              </div>
            </div>
            <div class="project-date">1 year ago</div>
            <div class="project-arrow">→</div>
          </div>
        </a>

        <a
          href="https://pacfolio.netlify.app/"
          target="_blank"
          class="project-link"
          @mouseenter="hoveredProjectUrl = 'https://pacfolio.netlify.app/'"
          @mouseleave="hoveredProjectUrl = null"
        >
          <div class="project-card" ref="project3">
            <div class="project-number">03</div>
            <div class="project-content">
              <h1 class="project-title">
                PORTFOLIO V2
                <span class="project-tech">Personal Project</span>
              </h1>
              <p class="project-description">
                Interactive portfolio showcasing modern web development skills
              </p>
              <div class="project-tags">
                <span class="tag">Vue.js</span>
                <span class="tag">Nuxt</span>
                <span class="tag">GSAP</span>
              </div>
            </div>
            <div class="project-date">Current</div>
            <div class="project-arrow">→</div>
          </div>
        </a>

        <div class="coming-soon-projects">
          <div class="coming-soon-card">
            <div class="coming-soon-content">
              <h3 class="text-4xl font-bold holographic mb-4">MORE PROJECTS</h3>
              <p class="text-xl text-gray-300">Coming Soon...</p>
              <div class="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Iframe Preview -->
    <transition name="preview-fade">
      <div
        v-if="hoveredProjectUrl"
        class="iframe-preview"
        :style="{ left: `${mouseX + 20}px`, top: `${mouseY - 300}px` }"
      >
        <div class="preview-header">
          <div class="preview-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="preview-url">{{ hoveredProjectUrl }}</div>
        </div>
        <iframe :src="hoveredProjectUrl" frameborder="0" scrolling="no"></iframe>
        <div class="preview-glow"></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits(['ready'])

const scrollCircle = ref(null)
const projectSection = ref(null)
const hoveredProjectUrl = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

const project1 = ref(null)
const project2 = ref(null)
const project3 = ref(null)

const onMouseMove = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

onMounted(() => {
  console.log('Project section mounted: emitting ready')
  
  // Circle animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: projectSection.value,
      start: 'top bottom',
      end: 'top top',
      scrub: true,
    },
  })

  tl.to(scrollCircle.value, {
    scale: 100,
    ease: 'power2.out',
  }).to(scrollCircle.value, {
    opacity: 0,
    duration: 0,
    ease: 'power2.out',
  })

  // Project cards animation
  const projectRefs = [project1, project2, project3]
  projectRefs.forEach((el, index) => {
    if (el.value) {
      gsap.fromTo(
        el.value,
        { opacity: 0, y: 100, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el.value,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      )
    }
  })

  emit('ready')
})
</script>

<style scoped lang="scss">
.scroll-wrapper {
  scroll-behavior: smooth;
  position: relative;
}

.project-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #ff0055 0%, #ff6600 50%, #ff0055 100%);
  z-index: 0;
}

.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
  background-size: 60px 60px;
  animation: pattern-move 15s linear infinite;
}

@keyframes pattern-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

.project-section {
  min-height: 100vh;
  position: relative;
  z-index: 1;
  padding: 100px 40px;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.project-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.project-card {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  display: grid;
  grid-template-columns: 80px 1fr auto auto;
  align-items: center;
  gap: 30px;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
    
    &::before {
      left: 100%;
    }
    
    .project-arrow {
      transform: translateX(10px);
    }
    
    .project-number {
      color: #00d4ff;
      text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
    }
  }
}

.project-number {
  font-size: 48px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.project-content {
  flex: 1;
}

.project-title {
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  
  .project-tech {
    font-size: 16px;
    font-weight: 500;
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
    padding: 5px 15px;
    border-radius: 20px;
    border: 1px solid rgba(0, 212, 255, 0.3);
  }
}

.project-description {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255, 0, 128, 0.2);
  color: #ff0080;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(255, 0, 128, 0.3);
}

.project-date {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.project-arrow {
  font-size: 24px;
  color: #ffffff;
  transition: transform 0.3s ease;
}

.coming-soon-projects {
  margin-top: 60px;
}

.coming-soon-card {
  background: rgba(0, 0, 0, 0.2);
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 60px;
  text-align: center;
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  
  span {
    width: 12px;
    height: 12px;
    background: #00d4ff;
    border-radius: 50%;
    animation: loading-bounce 1.4s ease-in-out infinite both;
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
    &:nth-child(3) { animation-delay: 0s; }
  }
}

@keyframes loading-bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

.scroll-circle {
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #ff0055, #ff6600);
  border-radius: 50%;
  z-index: 5;
  pointer-events: none;
  transform: scale(0);
  box-shadow: 0 0 30px rgba(255, 0, 85, 0.5);
}

.iframe-preview {
  position: fixed;
  width: 900px;
  height: 700px;
  background: #1a1a1a;
  z-index: 1000;
  pointer-events: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  .preview-header {
    height: 40px;
    background: #2a2a2a;
    display: flex;
    align-items: center;
    padding: 0 15px;
    gap: 15px;
  }
  
  .preview-dots {
    display: flex;
    gap: 8px;
    
    span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      
      &:nth-child(1) { background: #ff5f57; }
      &:nth-child(2) { background: #ffbd2e; }
      &:nth-child(3) { background: #28ca42; }
    }
  }
  
  .preview-url {
    background: #1a1a1a;
    color: #888;
    padding: 5px 12px;
    border-radius: 5px;
    font-size: 12px;
    flex: 1;
  }

  iframe {
    width: 100%;
    height: calc(100% - 40px);
    border: none;
    background: white;
  }
  
  .preview-glow {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00d4ff, #ff0080, #39ff14, #bf00ff);
    border-radius: 17px;
    z-index: -1;
    opacity: 0.5;
    filter: blur(8px);
  }
}

.preview-fade-enter-active,
.preview-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.preview-fade-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.preview-fade-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-10px);
}

@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
  
  .project-title {
    font-size: 28px;
    flex-direction: column;
    gap: 10px;
  }
  
  .iframe-preview {
    width: 90vw;
    height: 60vh;
    left: 5vw !important;
    top: 20vh !important;
  }
  
  .section-title {
    font-size: 80px !important;
  }
}
</style>