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
        <BaseCard variant="default" padding="large" interactive class="profile-card" ref="profileCard">
          <div class="profile-content">
            <div class="profile-image" ref="profileImage">
              <div class="image-placeholder">
                <span class="text-huge">👨‍💻</span>
              </div>
            </div>
            <h3 class="text-large font-semibold mt-6" ref="profileName">{{ personalInfo.name }}</h3>
            <p class="text-normal mt-2 opacity-70" ref="profileRole">{{ personalInfo.role }}</p>
            <p class="text-small mt-2 opacity-50" ref="profileExp">3+ Years Experience</p>
            <p class="text-small mt-2 opacity-50" ref="profileEducation">{{ education.degree }}</p>
          </div>
        </BaseCard>

        <!-- Education & Achievements -->
        <BaseCard variant="default" padding="large" class="education-achievements" ref="educationSection">
          <h3 class="text-large font-semibold mb-8" ref="educationTitle">Education & Achievements</h3>
          <div class="education-grid" ref="educationGrid">
            <BaseCard variant="elevated" padding="normal" interactive ref="education1">
              <h4 class="text-normal font-medium">{{ education.degree }}</h4>
              <p class="text-small opacity-70 mt-1">{{ education.school }}</p>
              <p class="text-tiny opacity-50 mt-1">{{ education.period }} • {{ education.distinction }}</p>
            </BaseCard>
            
            <BaseCard 
              v-for="(achievement, index) in achievements" 
              :key="achievement.title"
              variant="elevated" 
              padding="normal" 
              interactive 
              :ref="el => setAchievementRef(el, index)"
            >
              <h4 class="text-normal font-medium">{{ achievement.title }}</h4>
              <p class="text-small opacity-70 mt-1">{{ achievement.description }}</p>
            </BaseCard>
          </div>
        </BaseCard>

        <!-- Skills showcase -->
        <div class="skills-showcase" ref="skillsShowcase">
          <h3 class="text-large font-semibold mb-8" ref="skillsTitle">Technical Skills</h3>
          <div class="skills-grid" ref="skillsGrid">
            <SkillBar 
              v-for="(skill, index) in skills" 
              :key="skill.name"
              :skill="skill"
              :index="index"
            />
          </div>
        </div>

        <!-- Experience timeline -->
        <div class="experience-timeline" ref="timeline">
          <h3 class="text-large font-semibold mb-8" ref="timelineTitle">Work Experience</h3>
          <div class="timeline" ref="timelineContainer">
            <TimelineItem 
              v-for="(item, index) in workExperience" 
              :key="item.title"
              :item="item"
              :index="index"
            />
          </div>
        </div>

        <!-- Certifications -->
        <div class="certifications-section" ref="certificationsSection">
          <h3 class="text-large font-semibold mb-8" ref="certificationsTitle">Certifications</h3>
          <div class="certifications-grid" ref="certificationsGrid">
            <BaseCard 
              v-for="(cert, index) in certifications" 
              :key="cert.name"
              variant="default" 
              padding="normal" 
              interactive
              :ref="el => setCertificationRef(el, index)"
            >
              <h4 class="text-normal font-medium">{{ cert.name }}</h4>
              <p class="text-small opacity-70 mt-1">{{ cert.issuer }}</p>
              <span class="text-tiny opacity-50 mt-1">{{ cert.year }}</span>
            </BaseCard>
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
import BaseCard from '@/components/ui/BaseCard.vue'
import SkillBar from '@/components/ui/SkillBar.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'

const emit = defineEmits(['ready'])

const { personalInfo, education, achievements, skills, workExperience, certifications } = usePortfolioData()
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

let animationsSetup = false

const setAchievementRef = (el, index) => {
  if (el) achievementRefs.value[index] = el
}

const setCertificationRef = (el, index) => {
  if (el) certificationRefs.value[index] = el
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

.education-grid {
  display: grid;
  gap: 1.5rem;
}

.skills-showcase {
  grid-column: span 2;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
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

.certifications-section {
  grid-column: span 2;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
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