<template>
  <div class="scroll-wrapper" @mousemove="onMouseMove">
    <!-- Expanding Circle -->
    <div class="scroll-circle" ref="scrollCircle"></div>
    
    <!-- Animated background -->
    <div class="project-bg">
      <div class="bg-pattern"></div>
      <div class="bg-overlay"></div>
    </div>

    <!-- Project Section -->
    <section class="project-section" ref="projectSection">
      <!-- Section title - MASSIVE and eye-catching -->
      <h2 class="section-title text-mega mb-32 holographic text-center">
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
            <!-- Project number - Large and prominent -->
            <div class="project-number text-huge font-black">01</div>
            <div class="project-content">
              <!-- Project name - Very large -->
              <h1 class="project-title text-large font-black mb-3">
                POLYNOTES
                <!-- Tech badge - Small supporting info -->
                <span class="project-tech text-tiny">Built with Loveable</span>
              </h1>
              <!-- Description - Medium size -->
              <p class="project-description text-normal mb-4">
                A modern note-taking application with real-time collaboration features and advanced text editing capabilities
              </p>
              <!-- Tags - Small -->
              <div class="project-tags">
                <span class="tag text-tiny">React</span>
                <span class="tag text-tiny">TypeScript</span>
                <span class="tag text-tiny">Supabase</span>
                <span class="tag text-tiny">Real-time</span>
              </div>
            </div>
            <!-- Date - Small supporting info -->
            <div class="project-date text-small">3 months ago</div>
            <!-- Arrow - Visual element -->
            <div class="project-arrow text-large">→</div>
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
            <div class="project-number text-huge font-black">02</div>
            <div class="project-content">
              <h1 class="project-title text-large font-black mb-3">
                RTU-PDSMS
                <span class="project-tech text-tiny">Thesis Project</span>
              </h1>
              <p class="project-description text-normal mb-4">
                Personnel Data and Scheduling Management System for university administration with comprehensive reporting
              </p>
              <div class="project-tags">
                <span class="tag text-tiny">PHP</span>
                <span class="tag text-tiny">MySQL</span>
                <span class="tag text-tiny">Bootstrap</span>
                <span class="tag text-tiny">Admin Panel</span>
              </div>
            </div>
            <div class="project-date text-small">1 year ago</div>
            <div class="project-arrow text-large">→</div>
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
            <div class="project-number text-huge font-black">03</div>
            <div class="project-content">
              <h1 class="project-title text-large font-black mb-3">
                PORTFOLIO V2
                <span class="project-tech text-tiny">Personal Project</span>
              </h1>
              <p class="project-description text-normal mb-4">
                Interactive portfolio showcasing modern web development skills with advanced animations and effects
              </p>
              <div class="project-tags">
                <span class="tag text-tiny">Vue.js</span>
                <span class="tag text-tiny">Nuxt</span>
                <span class="tag text-tiny">GSAP</span>
                <span class="tag text-tiny">Interactive</span>
              </div>
            </div>
            <div class="project-date text-small">Current</div>
            <div class="project-arrow text-large">→</div>
          </div>
        </a>

        <!-- Coming soon section -->
        <div class="coming-soon-projects">
          <div class="coming-soon-card">
            <div class="coming-soon-content">
              <!-- Large attention-grabbing text -->
              <h3 class="text-huge font-black holographic mb-6">MORE PROJECTS</h3>
              <!-- Medium supporting text -->
              <p class="text-medium gradient-text-primary mb-8">Coming Soon...</p>
              <div class="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <!-- Small additional info -->
              <p class="text-small mt-6 opacity-60">Currently working on exciting new projects</p>
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
        :style="{ left: `${mouseX + 30}px`, top: `${mouseY - 350}px` }"
      >
        <div class="preview-header">
          <div class="preview-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="preview-url text-tiny">{{ hoveredProjectUrl }}</div>
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
      scrub: 1,
    },
  })

  tl.to(scrollCircle.value, {
    scale: 120,
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
        { opacity: 0, y: 150, rotateX: -25, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.5,
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
  background: linear-gradient(135deg, #ff0055 0%, #ff6600 25%, #ff0055 50%, #bf00ff 75%, #ff0055 100%);
  z-index: 0;
}

.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.15) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.15) 2px, transparent 2px);
  background-size: 80px 80px;
  animation: pattern-move 20s linear infinite;
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
}

@keyframes pattern-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(80px, 80px); }
}

.project-section {
  min-height: 100vh;
  position: relative;
  z-index: 1;
  padding: 120px 40px;
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.project-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.project-card {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 25px;
  padding: 50px;
  display: grid;
  grid-template-columns: 120px 1fr auto auto;
  align-items: center;
  gap: 40px;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
    transition: left 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #00d4ff, #ff0080, #39ff14, #bf00ff);
    border-radius: 27px;
    z-index: -1;
    opacity: 0;
    filter: blur(20px);
    transition: opacity 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 
      0 40px 80px rgba(0, 0, 0, 0.4),
      0 0 100px rgba(255, 0, 128, 0.3);
    border-color: rgba(255, 255, 255, 0.4);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 0.6;
    }
    
    .project-arrow {
      transform: translateX(15px) scale(1.2);
    }
    
    .project-number {
      color: #00d4ff;
      text-shadow: 0 0 30px rgba(0, 212, 255, 0.8);
      transform: scale(1.1);
    }
  }
}

.project-number {
  color: rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;
  font-family: var(--font-primary);
}

.project-content {
  flex: 1;
}

.project-title {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  font-family: var(--font-primary);
  
  .project-tech {
    background: rgba(0, 212, 255, 0.15);
    color: #00d4ff;
    padding: 8px 16px;
    border-radius: 25px;
    border: 1px solid rgba(0, 212, 255, 0.4);
    font-family: var(--font-body);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.project-description {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  font-family: var(--font-body);
}

.project-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255, 0, 128, 0.2);
  color: #ff0080;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 128, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 0, 128, 0.3);
    transform: translateY(-2px);
  }
}

.project-date {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  font-family: var(--font-mono);
}

.project-arrow {
  color: #ffffff;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-weight: bold;
}

.coming-soon-projects {
  margin-top: 80px;
}

.coming-soon-card {
  background: rgba(0, 0, 0, 0.3);
  border: 3px dashed rgba(255, 255, 255, 0.4);
  border-radius: 25px;
  padding: 80px;
  text-align: center;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-5px);
  }
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 15px;
  
  span {
    width: 16px;
    height: 16px;
    background: #00d4ff;
    border-radius: 50%;
    animation: loading-bounce 1.6s ease-in-out infinite both;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
    &:nth-child(3) { animation-delay: 0s; }
  }
}

@keyframes loading-bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.2); }
}

.scroll-circle {
  position: fixed;
  bottom: 40px;
  left: 40px;
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #ff0055, #ff6600);
  border-radius: 50%;
  z-index: 5;
  pointer-events: none;
  transform: scale(0);
  box-shadow: 
    0 0 40px rgba(255, 0, 85, 0.6),
    0 0 80px rgba(255, 102, 0, 0.4);
}

.iframe-preview {
  position: fixed;
  width: 1000px;
  height: 750px;
  background: #1a1a1a;
  z-index: 1000;
  pointer-events: none;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.6),
    0 0 0 2px rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  .preview-header {
    height: 50px;
    background: #2a2a2a;
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .preview-dots {
    display: flex;
    gap: 10px;
    
    span {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      
      &:nth-child(1) { background: #ff5f57; }
      &:nth-child(2) { background: #ffbd2e; }
      &:nth-child(3) { background: #28ca42; }
    }
  }
  
  .preview-url {
    background: #1a1a1a;
    color: #888;
    padding: 8px 16px;
    border-radius: 8px;
    flex: 1;
    font-family: var(--font-mono);
  }

  iframe {
    width: 100%;
    height: calc(100% - 50px);
    border: none;
    background: white;
  }
  
  .preview-glow {
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #00d4ff, #ff0080, #39ff14, #bf00ff);
    border-radius: 23px;
    z-index: -1;
    opacity: 0.7;
    filter: blur(15px);
  }
}

.preview-fade-enter-active,
.preview-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.preview-fade-enter-from {
  opacity: 0;
  transform: scale(0.7) translateY(30px);
}

.preview-fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}

@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 25px;
    padding: 40px 30px;
  }
  
  .project-title {
    flex-direction: column;
    gap: 15px;
  }
  
  .iframe-preview {
    width: 95vw;
    height: 70vh;
    left: 2.5vw !important;
    top: 15vh !important;
  }
  
  .projects-container {
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .project-section {
    padding: 80px 20px;
  }
  
  .coming-soon-card {
    padding: 50px 30px;
  }
}
</style>