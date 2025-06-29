<template>
  <div class="about-section" ref="aboutSection">
    <div class="container">
      <!-- Section title -->
      <h2 class="section-title text-mega mb-20 text-center" ref="title">
        About
      </h2>
      
      <!-- Content grid -->
      <div class="content-grid" ref="contentGrid">
        <!-- Profile card -->
        <div class="profile-card interactive-hover" ref="profileCard">
          <div class="profile-content">
            <div class="profile-image" ref="profileImage">
              <div class="image-placeholder">
                <span class="text-huge">👨‍💻</span>
              </div>
            </div>
            <h3 class="text-large font-semibold mt-6" ref="profileName">{{ data.personalInfo.name }}</h3>
            <p class="text-normal mt-2 opacity-70" ref="profileRole">{{ data.personalInfo.role }}</p>
            <p class="text-small mt-2 opacity-50" ref="profileExp">3+ Years Experience</p>
            <p class="text-small mt-2 opacity-50" ref="profileEducation">{{ data.education.degree }}</p>
          </div>
        </div>

        <!-- Education & Achievements -->
        <div class="education-achievements" ref="educationSection">
          <h3 class="text-large font-semibold mb-8" ref="educationTitle">Education & Achievements</h3>
          <div class="education-grid" ref="educationGrid">
            <!-- Education Item -->
            <div class="education-item interactive-hover" ref="education1">
              <h4 class="text-normal font-medium">{{ data.education.degree }}</h4>
              <p class="text-small opacity-70 mt-1">{{ data.education.school }}</p>
              <p class="text-tiny opacity-50 mt-1">{{ data.education.period }} • {{ data.education.distinction }}</p>
            </div>
            
            <!-- Achievements -->
            <div 
              v-for="(achievement, index) in data.achievements" 
              :key="index"
              class="achievement-item interactive-hover" 
              :ref="el => setAchievementRef(el, index)"
            >
              <h4 class="text-normal font-medium">{{ achievement.title }}</h4>
              <p class="text-small opacity-70 mt-1">{{ achievement.description }}</p>
            </div>
          </div>
        </div>

        <!-- Skills showcase -->
        <div class="skills-showcase" ref="skillsShowcase">
          <h3 class="text-large font-semibold mb-8" ref="skillsTitle">Technical Skills</h3>
          <div class="skills-grid" ref="skillsGrid">
            <div 
              v-for="(skill, index) in data.skills" 
              :key="index"
              class="skill-item interactive-hover" 
              :ref="el => setSkillItem(el, index)"
            >
              <div class="skill-header">
                <span class="skill-name text-normal font-medium">{{ skill.name }}</span>
                <span class="skill-level text-small opacity-60">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div 
                  class="skill-progress" 
                  :ref="el => setSkillBar(el, index)"
                  :style="{ backgroundColor: getCategoryColor(skill.category) }"
                ></div>
              </div>
              <div class="skill-category text-tiny opacity-40 mt-1">{{ skill.category }}</div>
            </div>
          </div>
        </div>

        <!-- Experience timeline -->
        <div class="experience-timeline" ref="timeline">
          <h3 class="text-large font-semibold mb-8" ref="timelineTitle">Work Experience</h3>
          <div class="timeline" ref="timelineContainer">
            <div 
              v-for="(item, index) in data.workExperience" 
              :key="index"
              class="timeline-item interactive-hover" 
              :ref="el => setTimelineItem(el, index)"
            >
              <div class="timeline-dot" :ref="el => setTimelineDot(el, index)"></div>
              <div class="timeline-content">
                <h4 class="text-normal font-medium">{{ item.title }}</h4>
                <p class="text-small opacity-70 mt-1">{{ item.company }}</p>
                <p class="text-small opacity-70 mt-1">{{ item.description }}</p>
                <div class="timeline-meta">
                  <span class="text-tiny opacity-50">{{ item.period }}</span>
                  <span class="timeline-type text-tiny" :class="getTypeClass(item.type)">
                    {{ item.type }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="certifications-section" ref="certificationsSection">
          <h3 class="text-large font-semibold mb-8" ref="certificationsTitle">Certifications</h3>
          <div class="certifications-grid" ref="certificationsGrid">
            <div 
              v-for="(cert, index) in data.certifications" 
              :key="index"
              class="certification-item interactive-hover"
              :ref="el => setCertificationRef(el, index)"
            >
              <h4 class="text-normal font-medium">{{ cert.name }}</h4>
              <p class="text-small opacity-70 mt-1">{{ cert.issuer }}</p>
              <span class="text-tiny opacity-50 mt-1">{{ cert.year }}</span>
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
import { ref, onMounted, nextTick } from 'vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
import { useAnimations } from '@/composables/useAnimations'
import ScrollMarquee from '@/components/ScrollMarquee.vue'

const emit = defineEmits(['ready'])

const data = usePortfolioData()
const { waitForGSAP, createScrollTrigger, animateIn, staggerIn, refreshScrollTrigger } = useAnimations()

const aboutSection = ref(null)
const title = ref(null)
const profileCard = ref(null)
const profileImage = ref(null)
const profileName = ref(null)
const profileRole = ref(null)
const profileExp = ref(null)
const profileEducation = ref(null)
const education1 = ref(null)

const achievementRefs = ref([])
const certificationRefs = ref([])
const skillItems = ref([])
const skillBars = ref([])
const timelineItems = ref([])
const timelineDots = ref([])

let animationsSetup = false

const setAchievementRef = (el, index) => {
  if (el) achievementRefs.value[index] = el
}

const setCertificationRef = (el, index) => {
  if (el) certificationRefs.value[index] = el
}

const setSkillItem = (el, index) => {
  if (el) skillItems.value[index] = el
}

const setSkillBar = (el, index) => {
  if (el) skillBars.value[index] = el
}

const setTimelineItem = (el, index) => {
  if (el) timelineItems.value[index] = el
}

const setTimelineDot = (el, index) => {
  if (el) timelineDots.value[index] = el
}

const getCategoryColor = (category) => {
  const colors = {
    frontend: 'var(--black)',
    backend: 'var(--gray-600)',
    design: 'var(--gray-500)',
    specialized: 'var(--gray-700)',
    tools: 'var(--gray-400)',
    technical: 'var(--gray-800)'
  }
  return colors[category] || 'var(--black)'
}

const getTypeClass = (type) => {
  const classes = {
    'full-time': 'bg-green-100 text-green-800',
    'internship': 'bg-blue-100 text-blue-800',
    'part-time': 'bg-yellow-100 text-yellow-800'
  }
  return classes[type] || 'bg-gray-100 text-gray-800'
}

onMounted(async () => {
  await nextTick()
  
  if (process.client) {
    waitForGSAP(() => {
      if (!animationsSetup) {
        setupAnimations()
      }
    }, 200)
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
      from: { y: 100, scale: 0.8 },
      to: { duration: 1.2, ease: "power3.out" }
    }),
    toggleActions: "play none none reverse"
  })

  // Profile card animations
  createScrollTrigger({
    trigger: profileCard.value,
    start: 'top 80%',
    animation: animateIn(profileCard.value, {
      from: { x: -100, rotationY: -15 },
      to: { x: 0, rotationY: 0, duration: 1.2, ease: "power2.out" }
    }),
    toggleActions: "play none none reverse"
  })

  // Profile image bounce effect
  createScrollTrigger({
    trigger: profileImage.value,
    start: 'top 80%',
    animation: useNuxtApp().$gsap.fromTo(profileImage.value,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }
    ),
    toggleActions: "play none none reverse"
  })

  // Profile text stagger
  createScrollTrigger({
    trigger: profileName.value,
    start: 'top 85%',
    animation: staggerIn([profileName.value, profileRole.value, profileExp.value, profileEducation.value]),
    toggleActions: "play none none reverse"
  })

  // Education and achievements
  const educationElements = [education1.value, ...achievementRefs.value].filter(Boolean)
  educationElements.forEach((item, index) => {
    createScrollTrigger({
      trigger: item,
      start: 'top 85%',
      animation: animateIn(item, {
        from: { y: 50, scale: 0.8 },
        to: { 
          scale: 1, 
          duration: 0.8, 
          delay: index * 0.1, 
          ease: "back.out(1.7)" 
        }
      }),
      toggleActions: "play none none reverse"
    })
  })

  // Skills animations
  skillItems.value.forEach((item, index) => {
    if (item) {
      createScrollTrigger({
        trigger: item,
        start: 'top 85%',
        animation: animateIn(item, {
          from: { y: 50, scale: 0.8 },
          to: { 
            scale: 1, 
            duration: 0.8, 
            delay: index * 0.1, 
            ease: "back.out(1.7)" 
          }
        }),
        toggleActions: "play none none reverse"
      })
    }
  })

  // Skill bars animation
  skillBars.value.forEach((bar, index) => {
    if (bar) {
      createScrollTrigger({
        trigger: bar,
        start: 'top 80%',
        animation: useNuxtApp().$gsap.fromTo(bar, 
          { width: '0%' },
          {
            width: data.skills[index].level + '%',
            duration: 1.5,
            ease: "power2.out"
          }
        ),
        toggleActions: "play none none reverse"
      })
    }
  })

  // Timeline items
  timelineItems.value.forEach((item, index) => {
    if (item) {
      createScrollTrigger({
        trigger: item,
        start: 'top 85%',
        animation: animateIn(item, {
          from: { x: 100, scale: 0.9 },
          to: { 
            x: 0, 
            scale: 1, 
            duration: 1, 
            delay: index * 0.2, 
            ease: "power2.out" 
          }
        }),
        toggleActions: "play none none reverse"
      })
    }
  })

  // Timeline dots pulse
  timelineDots.value.forEach((dot, index) => {
    if (dot) {
      createScrollTrigger({
        trigger: dot,
        start: 'top 85%',
        animation: useNuxtApp().$gsap.fromTo(dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            delay: index * 0.2,
            ease: "back.out(1.7)"
          }
        ),
        toggleActions: "play none none reverse"
      })
    }
  })

  // Certifications animations
  certificationRefs.value.forEach((item, index) => {
    if (item) {
      createScrollTrigger({
        trigger: item,
        start: 'top 85%',
        animation: animateIn(item, {
          from: { y: 30, scale: 0.9 },
          to: { 
            scale: 1, 
            duration: 0.8, 
            delay: index * 0.1, 
            ease: "power2.out" 
          }
        }),
        toggleActions: "play none none reverse"
      })
    }
  })

  refreshScrollTrigger()
  emit('ready')
}
</script>

<style scoped lang="scss">
.about-section {
  min-height: 100vh;
  background: var(--gray-50);
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 6rem;
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

.education-achievements {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 3rem;
}

.education-grid {
  display: grid;
  gap: 1.5rem;
}

.education-item,
.achievement-item {
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 1.5rem;
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
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
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
  border-radius: 2px;
  width: 0%;
  transition: width 0.3s ease;
}

.skill-category {
  text-transform: uppercase;
  letter-spacing: 0.05em;
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
  z-index: 2;
}

.timeline-content {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.timeline-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.timeline-type {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.certifications-section {
  grid-column: span 2;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.certification-item {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .skills-showcase,
  .experience-timeline,
  .certifications-section {
    grid-column: span 1;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
</style>