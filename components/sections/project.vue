<template>
  <div class="project-section" ref="projectSection" @mousemove="onMouseMove">
    <div class="container">
      <!-- Section title -->
      <h2 class="section-title text-mega mb-20 text-center" ref="title">
        Projects
      </h2>

      <div class="projects-container" ref="projectsContainer">
        <a
          href="https://polynotes.netlify.app/"
          target="_blank"
          class="project-link"
          @mouseenter="hoveredProject = { url: 'https://polynotes.netlify.app/', name: 'polynotes' }"
          @mouseleave="hoveredProject = null"
        >
          <div class="project-card interactive-hover" ref="project1">
            <div class="project-number text-huge font-light opacity-20" ref="number1">01</div>
            <div class="project-content" ref="content1">
              <h1 class="project-title text-large font-semibold mb-2">
                Polynotes
              </h1>
              <p class="project-description text-normal opacity-70 mb-4">
                A modern note-taking application with real-time collaboration features
              </p>
              <div class="project-tags">
                <span class="tag text-tiny">React</span>
                <span class="tag text-tiny">TypeScript</span>
                <span class="tag text-tiny">Supabase</span>
              </div>
            </div>
            <div class="project-arrow text-large" ref="arrow1">→</div>
          </div>
        </a>

        <a
          href="https://rtu-pdsms.onrender.com/"
          target="_blank"
          class="project-link"
          @mouseenter="hoveredProject = { url: 'https://rtu-pdsms.onrender.com/', name: 'rtu' }"
          @mouseleave="hoveredProject = null"
        >
          <div class="project-card interactive-hover" ref="project2">
            <div class="project-number text-huge font-light opacity-20" ref="number2">02</div>
            <div class="project-content" ref="content2">
              <h1 class="project-title text-large font-semibold mb-2">
                RTU-PDSMS
              </h1>
              <p class="project-description text-normal opacity-70 mb-4">
                Personnel Data and Scheduling Management System for university administration
              </p>
              <div class="project-tags">
                <span class="tag text-tiny">PHP</span>
                <span class="tag text-tiny">MySQL</span>
                <span class="tag text-tiny">Bootstrap</span>
              </div>
            </div>
            <div class="project-arrow text-large" ref="arrow2">→</div>
          </div>
        </a>

        <a
          href="https://pacfolio.netlify.app/"
          target="_blank"
          class="project-link"
          @mouseenter="hoveredProject = { url: 'https://pacfolio.netlify.app/', name: 'portfolio' }"
          @mouseleave="hoveredProject = null"
        >
          <div class="project-card interactive-hover" ref="project3">
            <div class="project-number text-huge font-light opacity-20" ref="number3">03</div>
            <div class="project-content" ref="content3">
              <h1 class="project-title text-large font-semibold mb-2">
                Portfolio V2
              </h1>
              <p class="project-description text-normal opacity-70 mb-4">
                Interactive portfolio showcasing modern web development skills
              </p>
              <div class="project-tags">
                <span class="tag text-tiny">Vue.js</span>
                <span class="tag text-tiny">Nuxt</span>
                <span class="tag text-tiny">GSAP</span>
              </div>
            </div>
            <div class="project-arrow text-large" ref="arrow3">→</div>
          </div>
        </a>
      </div>
    </div>
    
    <!-- Marquee -->
    <ScrollMarquee :items="['FRONTEND', 'DEVELOPER', 'PORTFOLIO', 'PROJECTS', 'CREATIVE']" />

    <!-- Enhanced Iframe Preview -->
    <transition name="preview-fade">
      <div
        v-if="hoveredProject"
        class="iframe-preview"
        :style="{ left: `${mouseX + 30}px`, top: `${mouseY - 200}px` }"
      >
        <div class="preview-header">
          <div class="preview-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="preview-url text-tiny">{{ hoveredProject.url }}</div>
        </div>
        <iframe :src="hoveredProject.url" frameborder="0" scrolling="no"></iframe>
        <div class="preview-glow"></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollMarquee from '@/components/ScrollMarquee.vue'

gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits(['ready'])

const projectSection = ref(null)
const title = ref(null)
const projectsContainer = ref(null)
const hoveredProject = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

const project1 = ref(null)
const project2 = ref(null)
const project3 = ref(null)
const number1 = ref(null)
const number2 = ref(null)
const number3 = ref(null)
const content1 = ref(null)
const content2 = ref(null)
const content3 = ref(null)
const arrow1 = ref(null)
const arrow2 = ref(null)
const arrow3 = ref(null)

const onMouseMove = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

onMounted(async () => {
  await nextTick()
  setupAnimations()
})

function setupAnimations() {
  // Section title animation
  ScrollTrigger.create({
    trigger: title.value,
    start: 'top 80%',
    toggleActions: "play none none reverse",
    animation: gsap.fromTo(title.value,
      { opacity: 0, y: 100, scale: 0.5, rotation: -5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power3.out"
      }
    )
  })

  // Project cards entrance animations
  const projects = [
    { card: project1.value, number: number1.value, content: content1.value, arrow: arrow1.value },
    { card: project2.value, number: number2.value, content: content2.value, arrow: arrow2.value },
    { card: project3.value, number: number3.value, content: content3.value, arrow: arrow3.value }
  ]

  projects.forEach((project, index) => {
    if (project.card) {
      // Card slide in from different directions
      const direction = index % 2 === 0 ? -100 : 100
      
      ScrollTrigger.create({
        trigger: project.card,
        start: 'top 85%',
        toggleActions: "play none none reverse",
        animation: gsap.fromTo(project.card,
          { 
            opacity: 0, 
            x: direction, 
            y: 50,
            scale: 0.8,
            rotationY: direction > 0 ? 15 : -15
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            delay: index * 0.2,
            ease: "power3.out"
          }
        )
      })

      // Number animation
      ScrollTrigger.create({
        trigger: project.number,
        start: 'top 85%',
        toggleActions: "play none none reverse",
        animation: gsap.fromTo(project.number,
          { scale: 0, rotation: 180 },
          {
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: index * 0.2 + 0.3,
            ease: "back.out(1.7)"
          }
        )
      })

      // Content stagger animation
      if (project.content && project.content.children) {
        ScrollTrigger.create({
          trigger: project.content,
          start: 'top 85%',
          toggleActions: "play none none reverse",
          animation: gsap.fromTo(project.content.children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              delay: index * 0.2 + 0.5,
              ease: "power2.out"
            }
          )
        })
      }

      // Arrow bounce animation
      ScrollTrigger.create({
        trigger: project.arrow,
        start: 'top 85%',
        toggleActions: "play none none reverse",
        animation: gsap.fromTo(project.arrow,
          { opacity: 0, x: -20, scale: 0.5 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2 + 0.7,
            ease: "back.out(1.7)"
          }
        )
      })

      // Hover animations
      project.card.addEventListener('mouseenter', () => {
        gsap.to(project.number, { scale: 1.1, opacity: 0.6, duration: 0.3 })
        gsap.to(project.arrow, { x: 10, scale: 1.2, duration: 0.3 })
        gsap.to(project.card, { y: -5, duration: 0.3 })
      })

      project.card.addEventListener('mouseleave', () => {
        gsap.to(project.number, { scale: 1, opacity: 0.2, duration: 0.3 })
        gsap.to(project.arrow, { x: 0, scale: 1, duration: 0.3 })
        gsap.to(project.card, { y: 0, duration: 0.3 })
      })
    }
  })

  emit('ready')
}
</script>

<style scoped lang="scss">
.project-section {
  min-height: 100vh;
  background: var(--white);
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-container {
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.project-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 3rem;
  display: grid;
  grid-template-columns: 100px 1fr auto;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--gray-400);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}

.project-number {
  transition: all 0.3s ease;
}

.project-content {
  flex: 1;
}

.project-title {
  margin-bottom: 0.5rem;
}

.project-description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: var(--gray-100);
  color: var(--gray-700);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--gray-200);
    transform: translateY(-1px);
  }
}

.project-arrow {
  transition: all 0.3s ease;
  opacity: 0.6;
}

.iframe-preview {
  position: fixed;
  width: 600px;
  height: 400px;
  background: var(--white);
  z-index: 1000;
  pointer-events: none;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 0 0 1px var(--gray-200);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  .preview-header {
    height: 40px;
    background: var(--gray-100);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    border-bottom: 1px solid var(--gray-200);
  }
  
  .preview-dots {
    display: flex;
    gap: 6px;
    
    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      
      &:nth-child(1) { background: #ff5f57; }
      &:nth-child(2) { background: #ffbd2e; }
      &:nth-child(3) { background: #28ca42; }
    }
  }
  
  .preview-url {
    background: var(--white);
    color: var(--gray-600);
    padding: 4px 8px;
    border-radius: 4px;
    flex: 1;
    font-family: var(--font-mono);
    font-size: 10px;
  }

  iframe {
    width: 100%;
    height: calc(100% - 40px);
    border: none;
    background: var(--white);
    transform: scale(0.5);
    transform-origin: top left;
    width: 200%;
    height: calc(200% - 80px);
  }
  
  .preview-glow {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, var(--gray-300), var(--gray-400));
    border-radius: 10px;
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
    gap: 1.5rem;
  }
  
  .iframe-preview {
    width: 90vw;
    height: 60vh;
    left: 5vw !important;
    top: 20vh !important;
  }
}
</style>