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
            <h3 class="text-large font-semibold mt-6" ref="profileName">Paul Andrew Consunji</h3>
            <p class="text-normal mt-2 opacity-70" ref="profileRole">Frontend Developer</p>
            <p class="text-small mt-2 opacity-50" ref="profileExp">Fresh Graduate</p>
            <p class="text-small mt-2 opacity-50" ref="profileEducation">BS Information Technology</p>
          </div>
        </div>

        <!-- Education & Achievements -->
        <div class="education-achievements" ref="educationSection">
          <h3 class="text-large font-semibold mb-8" ref="educationTitle">Education & Achievements</h3>
          <div class="education-grid" ref="educationGrid">
            <div class="education-item interactive-hover" ref="education1">
              <h4 class="text-normal font-medium">Bachelor of Science in Information Technology</h4>
              <p class="text-small opacity-70 mt-1">Rizal Technological University</p>
              <p class="text-tiny opacity-50 mt-1">2020-2024 • Cum Laude</p>
            </div>
            <div class="achievement-item interactive-hover" ref="achievement1">
              <h4 class="text-normal font-medium">Academic Achiever</h4>
              <p class="text-small opacity-70 mt-1">Since Freshmen Year</p>
            </div>
            <div class="achievement-item interactive-hover" ref="achievement2">
              <h4 class="text-normal font-medium">Dean's Lister</h4>
              <p class="text-small opacity-70 mt-1">Since Freshmen Year</p>
            </div>
            <div class="achievement-item interactive-hover" ref="achievement3">
              <h4 class="text-normal font-medium">Pasig City Scholar</h4>
              <p class="text-small opacity-70 mt-1">Since First Year College</p>
            </div>
          </div>
        </div>

        <!-- Skills showcase -->
        <div class="skills-showcase" ref="skillsShowcase">
          <h3 class="text-large font-semibold mb-8" ref="skillsTitle">Technical Skills</h3>
          <div class="skills-grid" ref="skillsGrid">
            <div class="skill-item interactive-hover" v-for="(skill, index) in skills" :key="skill.name" :ref="el => setSkillItem(el, index)">
              <span class="skill-name text-normal">{{ skill.name }}</span>
              <span class="skill-level text-small opacity-60">{{ skill.level }}%</span>
              <div class="skill-bar">
                <div class="skill-progress" :ref="el => setSkillBar(el, index)"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience timeline -->
        <div class="experience-timeline" ref="timeline">
          <h3 class="text-large font-semibold mb-8" ref="timelineTitle">Experience & Training</h3>
          <div class="timeline" ref="timelineContainer">
            <div class="timeline-item interactive-hover" v-for="(item, index) in timelineData" :key="index" :ref="el => setTimelineItem(el, index)">
              <div class="timeline-dot" :ref="el => setTimelineDot(el, index)"></div>
              <div class="timeline-content">
                <h4 class="text-normal font-medium">{{ item.title }}</h4>
                <p class="text-small opacity-70 mt-1">{{ item.company }}</p>
                <p class="text-small opacity-70 mt-1">{{ item.description }}</p>
                <span class="text-tiny opacity-50 mt-2 block">{{ item.date }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="certifications-section" ref="certificationsSection">
          <h3 class="text-large font-semibold mb-8" ref="certificationsTitle">Certifications</h3>
          <div class="certifications-grid" ref="certificationsGrid">
            <div class="certification-item interactive-hover" v-for="(cert, index) in certifications" :key="index" :ref="el => setCertificationItem(el, index)">
              <h4 class="text-normal font-medium">{{ cert.name }}</h4>
              <p class="text-small opacity-70 mt-1">{{ cert.issuer }}</p>
              <span class="text-tiny opacity-50 mt-1">{{ cert.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Marquee -->
    <ScrollMarquee :items="['FRESH GRADUATE', 'EAGER TO LEARN', 'PASSIONATE', 'DEDICATED', 'INNOVATIVE']" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import ScrollMarquee from '@/components/ScrollMarquee.vue'

const emit = defineEmits(['ready'])

const aboutSection = ref(null)
const title = ref(null)
const contentGrid = ref(null)
const profileCard = ref(null)
const profileImage = ref(null)
const profileName = ref(null)
const profileRole = ref(null)
const profileExp = ref(null)
const profileEducation = ref(null)
const educationSection = ref(null)
const educationTitle = ref(null)
const educationGrid = ref(null)
const education1 = ref(null)
const achievement1 = ref(null)
const achievement2 = ref(null)
const achievement3 = ref(null)
const skillsShowcase = ref(null)
const skillsTitle = ref(null)
const skillsGrid = ref(null)
const timeline = ref(null)
const timelineTitle = ref(null)
const timelineContainer = ref(null)
const certificationsSection = ref(null)
const certificationsTitle = ref(null)
const certificationsGrid = ref(null)

const skillItems = ref([])
const skillBars = ref([])
const timelineItems = ref([])
const timelineDots = ref([])
const certificationItems = ref([])

const { $gsap, $ScrollTrigger } = useNuxtApp()

let animationsSetup = false

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

const setCertificationItem = (el, index) => {
  if (el) certificationItems.value[index] = el
}

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Vue.js/Nuxt.js', level: 80 },
  { name: 'Node.js/Express', level: 75 },
  { name: 'PHP/MySQL', level: 80 },
  { name: 'MongoDB', level: 70 },
  { name: 'Figma', level: 85 },
  { name: 'Adobe Creative Cloud', level: 80 },
  { name: 'Blender (3D)', level: 70 },
  { name: 'Video Editing', level: 75 }
]

const timelineData = [
  { 
    title: 'ATM Technician (Probationary)', 
    company: 'One Point Contact Inc',
    description: 'Servicing and repairing ATM machines both offsite and at bank branches',
    date: '2024-Present' 
  },
  { 
    title: 'Assistant Computer Technician (OJT)', 
    company: 'Rizal Technological University',
    description: 'Managed and maintained computers in Computer Laboratory',
    date: '2023' 
  },
  { 
    title: 'Graphic Designer (OJT)', 
    company: 'Teravision',
    description: 'Managed social media and created graphics design including posters',
    date: '2023' 
  }
]

const certifications = [
  { name: 'CSS NC II', issuer: 'Capellan Institute of Technology, Inc.', year: '2019' },
  { name: 'CompTIA Network+', issuer: 'Capellan Institute of Technology, Inc.', year: '2019' },
  { name: 'Google\'s Foundation of Cyber Security', issuer: 'Coursera', year: '2023' },
  { name: 'TOPCIT Examination', issuer: 'Rizal Technological University', year: '2024' }
]

onMounted(async () => {
  await nextTick()
  
  if (process.client) {
    const waitForGSAP = () => {
      if ($gsap && $ScrollTrigger && !animationsSetup) {
        setupAnimations()
      } else if (!animationsSetup) {
        setTimeout(waitForGSAP, 50)
      }
    }
    
    // Wait a bit for the page to settle
    setTimeout(waitForGSAP, 200)
  }
})

function setupAnimations() {
  if (animationsSetup || !process.client || !$gsap || !$ScrollTrigger) return
  animationsSetup = true

  // Section title animation
  $ScrollTrigger.create({
    trigger: title.value,
    start: 'top 80%',
    animation: $gsap.fromTo(title.value, 
      { opacity: 0, y: 100, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    ),
    toggleActions: "play none none reverse",
    refreshPriority: -1
  })

  // Profile card animations
  $ScrollTrigger.create({
    trigger: profileCard.value,
    start: 'top 80%',
    animation: $gsap.fromTo(profileCard.value,
      { opacity: 0, x: -100, rotationY: -15 },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.2,
        ease: "power2.out"
      }
    ),
    toggleActions: "play none none reverse",
    refreshPriority: -1
  })

  // Profile image bounce effect
  $ScrollTrigger.create({
    trigger: profileImage.value,
    start: 'top 80%',
    animation: $gsap.fromTo(profileImage.value,
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }
    ),
    toggleActions: "play none none reverse",
    refreshPriority: -1
  })

  // Profile text stagger
  $ScrollTrigger.create({
    trigger: profileName.value,
    start: 'top 85%',
    animation: $gsap.fromTo([profileName.value, profileRole.value, profileExp.value, profileEducation.value],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }
    ),
    toggleActions: "play none none reverse",
    refreshPriority: -1
  })

  // Education and achievements animations
  const educationElements = [education1.value, achievement1.value, achievement2.value, achievement3.value]
  educationElements.forEach((item, index) => {
    if (item) {
      $ScrollTrigger.create({
        trigger: item,
        start: 'top 85%',
        animation: $gsap.fromTo(item,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)"
          }
        ),
        toggleActions: "play none none reverse",
        refreshPriority: -1
      })
    }
  })

  // Skills animations
  skillItems.value.forEach((item, index) => {
    if (item) {
      $ScrollTrigger.create({
        trigger: item,
        start: 'top 85%',
        animation: $gsap.fromTo(item,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)"
          }
        ),
        toggleActions: "play none none reverse",
        refreshPriority: -1
      })
    }
  })

  // Skill bars animation
  skillBars.value.forEach((bar, index) => {
    if (bar) {
      $ScrollTrigger.create({
        trigger: bar,
        start: 'top 80%',
        animation: $gsap.fromTo(bar, 
          { width: '0%' },
          {
            width: skills[index].level + '%',
            duration: 1.5,
            ease: "power2.out"
          }
        ),
        toggleActions: "play none none reverse",
        refreshPriority: -1
      })
    }
  })

  // Timeline items
  timelineItems.value.forEach((item, index) => {
    if (item) {
      $ScrollTrigger.create({
        trigger: item,
        start: 'top 85%',
        animation: $gsap.fromTo(item,
          { opacity: 0, x: 100, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power2.out"
          }
        ),
        toggleActions: "play none none reverse",
        refreshPriority: -1
      })
    }
  })

  // Timeline dots pulse
  timelineDots.value.forEach((dot, index) => {
    if (dot) {
      $ScrollTrigger.create({
        trigger: dot,
        start: 'top 85%',
        animation: $gsap.fromTo(dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            delay: index * 0.2,
            ease: "back.out(1.7)"
          }
        ),
        toggleActions: "play none none reverse",
        refreshPriority: -1
      })
    }
  })

  // Certifications animations
  certificationItems.value.forEach((item, index) => {
    if (item) {
      $ScrollTrigger.create({
        trigger: item,
        start: 'top 85%',
        animation: $gsap.fromTo(item,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out"
          }
        ),
        toggleActions: "play none none reverse",
        refreshPriority: -1
      })
    }
  })

  // Force refresh after all animations are set up
  setTimeout(() => {
    $ScrollTrigger.refresh()
  }, 100)

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
  width: 0%;
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