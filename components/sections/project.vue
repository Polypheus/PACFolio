<template>
  <div class="project-section" ref="projectSection" @mousemove="onMouseMove">
    <div class="container">
      <!-- Section title -->
      <h2 class="section-title text-mega mb-20 text-center" ref="title">
        Projects
      </h2>

      <div class="projects-container" ref="projectsContainer">
        <ProjectCard
          v-for="(project, index) in data.projects"
          :key="project.id"
          :project="project"
          :index="index"
          @hover="onProjectHover"
          @leave="onProjectLeave"
        />
      </div>
    </div>
    
    <!-- Marquee -->
    <ScrollMarquee :items="['FRONTEND', 'DEVELOPER', 'PORTFOLIO', 'PROJECTS', 'CREATIVE']" />

    <!-- Enhanced Iframe Preview -->
    <ProjectPreview 
      v-if="hoveredProject"
      :project="hoveredProject"
      :mouse-x="mouseX"
      :mouse-y="mouseY"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
import { useAnimations } from '@/composables/useAnimations'
import ScrollMarquee from '@/components/ScrollMarquee.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import ProjectPreview from '../ui/ProjectPreview.vue'

const emit = defineEmits(['ready'])

const data = usePortfolioData()
const { waitForGSAP, createScrollTrigger, animateIn, refreshScrollTrigger } = useAnimations()

const projectSection = ref(null)
const title = ref(null)
const hoveredProject = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

let animationsSetup = false

const onMouseMove = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

const onProjectHover = (project) => {
  hoveredProject.value = project
}

const onProjectLeave = () => {
  hoveredProject.value = null
}

onMounted(async () => {
  await nextTick()
  
  if (process.client) {
    waitForGSAP(() => {
      if (!animationsSetup) {
        setupAnimations()
      }
    }, 300)
  }
})

function setupAnimations() {
  if (animationsSetup || !process.client) return
  animationsSetup = true

  // Section title animation
  createScrollTrigger({
    trigger: title.value,
    start: 'top 80%',
    animation: animateIn(title.value, {
      from: { y: 100, scale: 0.5, rotation: -5 },
      to: { 
        scale: 1, 
        rotation: 0, 
        duration: 1.5, 
        ease: "power3.out" 
      }
    }),
    toggleActions: "play none none reverse"
  })

  refreshScrollTrigger()
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
</style>