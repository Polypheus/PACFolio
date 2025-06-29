<template>
  <div class="about-section">
    <div class="container flex-col relative z-10">
      <!-- Section title -->
      <h2 class="section-title text-mega mb-20 text-center" ref="title">
        About
      </h2>
      
      <!-- Content grid -->
      <div class="content-grid">
        <!-- Profile card -->
        <div class="profile-card interactive-hover" ref="profileCard">
          <div class="profile-content">
            <div class="profile-image">
              <div class="image-placeholder">
                <span class="text-huge">👨‍💻</span>
              </div>
            </div>
            <h3 class="text-large font-semibold mt-6">Paul Andrew Consunji</h3>
            <p class="text-normal mt-2 opacity-70">Frontend Developer</p>
            <p class="text-small mt-2 opacity-50">3+ Years Experience</p>
          </div>
        </div>

        <!-- Skills showcase -->
        <div class="skills-showcase" ref="skillsShowcase">
          <h3 class="text-large font-semibold mb-8">Skills</h3>
          <div class="skills-grid">
            <div class="skill-item interactive-hover" v-for="skill in skills" :key="skill.name">
              <span class="skill-name text-normal">{{ skill.name }}</span>
              <span class="skill-level text-small opacity-60">{{ skill.level }}%</span>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience timeline -->
        <div class="experience-timeline" ref="timeline">
          <h3 class="text-large font-semibold mb-8">Experience</h3>
          <div class="timeline">
            <div class="timeline-item interactive-hover" v-for="(item, index) in timelineData" :key="index">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4 class="text-normal font-medium">{{ item.title }}</h4>
                <p class="text-small opacity-70 mt-1">{{ item.description }}</p>
                <span class="text-tiny opacity-50 mt-2 block">{{ item.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Marquee -->
    <ScrollMarquee :items="['CREATIVE', 'MINIMAL', 'INTERACTIVE', 'MODERN', 'CLEAN']" />
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
const profileCard = ref(null)
const skillsShowcase = ref(null)
const timeline = ref(null)

const skills = [
  { name: 'Vue.js', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'CSS/SCSS', level: 88 },
  { name: 'Nuxt.js', level: 85 },
  { name: 'GSAP', level: 80 },
  { name: 'Node.js', level: 75 }
]

const timelineData = [
  { title: 'Started Coding Journey', description: 'Began learning web development', date: '2020' },
  { title: 'First Freelance Project', description: 'Built my first client website', date: '2021' },
  { title: 'College Thesis Project', description: 'Developed RTU-PDSMS system', date: '2023' },
  { title: 'Professional Developer', description: 'Working on modern applications', date: '2024' }
]

onMounted(() => {
  // Animate elements on scroll
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

  gsap.fromTo(profileCard.value,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: profileCard.value,
        start: 'top 80%'
      }
    }
  )

  gsap.fromTo('.skill-item',
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: skillsShowcase.value,
        start: 'top 80%'
      }
    }
  )

  gsap.fromTo('.timeline-item',
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: timeline.value,
        start: 'top 80%'
      }
    }
  )

  emit('ready')
})
</script>

<style scoped lang="scss">
.about-section {
  min-height: 100vh;
  background: var(--gray-50);
  padding: 6rem 2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto 6rem;
}

.profile-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid var(--gray-200);
}

.skills-showcase {
  grid-column: span 2;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-item {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-bar {
  width: 100%;
  height: 4px;
  background: var(--gray-200);
  border-radius: 2px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--black);
  border-radius: 2px;
  transition: width 2s ease;
}

.experience-timeline {
  grid-column: span 2;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--gray-300);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-left: 1rem;
}

.timeline-dot {
  position: absolute;
  left: -2.25rem;
  top: 1.5rem;
  width: 8px;
  height: 8px;
  background: var(--black);
  border-radius: 50%;
  border: 2px solid var(--white);
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skills-showcase,
  .experience-timeline {
    grid-column: span 1;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>