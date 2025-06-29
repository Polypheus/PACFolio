<template>
  <div class="project-section">
    <div class="container flex-col relative z-10">
      <!-- Section title -->
      <h2 class="section-title text-mega mb-20 text-center" ref="title">
        Projects
      </h2>

      <div class="projects-container">
        <a
          href="https://polynotes.netlify.app/"
          target="_blank"
          class="project-link"
          @mouseenter="hoveredProject = 'polynotes'"
          @mouseleave="hoveredProject = null"
        >
          <div class="project-card interactive-hover" ref="project1">
            <div class="project-number text-huge font-light opacity-20">01</div>
            <div class="project-content">
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
            <div class="project-arrow text-large">→</div>
          </div>
        </a>

        <a
          href="https://rtu-pdsms.onrender.com/"
          target="_blank"
          class="project-link"
          @mouseenter="hoveredProject = 'rtu'"
          @mouseleave="hoveredProject = null"
        >
          <div class="project-card interactive-hover" ref="project2">
            <div class="project-number text-huge font-light opacity-20">02</div>
            <div class="project-content">
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
            <div class="project-arrow text-large">→</div>
          </div>
        </a>

        <a
          href="https://pacfolio.netlify.app/"
          target="_blank"
          class="project-link"
          @mouseenter="hoveredProject = 'portfolio'"
          @mouseleave="hoveredProject = null"
        >
          <div class="project-card interactive-hover" ref="project3">
            <div class="project-number text-huge font-light opacity-20">03</div>
            <div class="project-content">
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
            <div class="project-arrow text-large">→</div>
          </div>
        </a>
      </div>
    </div>
    
    <!-- Marquee -->
    <ScrollMarquee :items="['FRONTEND', 'DEVELOPER', 'PORTFOLIO', 'PROJECTS', 'CREATIVE']" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollMarquee from '@/components/ScrollMarquee.vue'

gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits(['ready'])

const title = ref(null)
const hoveredProject = ref(null)
const project1 = ref(null)
const project2 = ref(null)
const project3 = ref(null)

onMounted(() => {
  // Animate title
  gsap.fromTo(title.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: title.value,
        start: 'top 80%'
      }
    }
  )

  // Animate project cards
  const projectRefs = [project1, project2, project3]
  projectRefs.forEach((el, index) => {
    if (el.value) {
      gsap.fromTo(
        el.value,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el.value,
            start: 'top 85%'
          }
        }
      )
    }
  })

  emit('ready')
})
</script>

<style scoped lang="scss">
.project-section {
  min-height: 100vh;
  background: var(--white);
  padding: 6rem 2rem;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto 6rem;
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
    
    .project-arrow {
      transform: translateX(0.5rem);
    }
    
    .project-number {
      opacity: 0.4;
    }
  }
}

.project-number {
  transition: opacity 0.3s ease;
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
}

.project-arrow {
  transition: transform 0.3s ease;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
}
</style>