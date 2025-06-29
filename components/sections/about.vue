<template>
  <div class="about-section">
    <!-- Animated background grid -->
    <div class="grid-background"></div>
    
    <div class="container flex-col relative z-10">
      <!-- Section title - HUGE and attention-grabbing -->
      <h2 class="section-title text-mega mb-20 holographic" ref="title">
        ABOUT ME
      </h2>
      
      <!-- Content grid -->
      <div class="content-grid max-w-7xl mx-auto">
        <!-- Profile card -->
        <div class="profile-card group" ref="profileCard">
          <div class="card-inner">
            <div class="card-front">
              <div class="profile-image">
                <div class="image-placeholder">
                  <span class="text-6xl">👨‍💻</span>
                </div>
              </div>
              <!-- Name - Large and prominent -->
              <h3 class="text-large font-bold mt-6 neon-text">Paul Andrew Consunji</h3>
              <!-- Role - Medium size -->
              <p class="text-medium gradient-text-primary mt-2">Frontend Developer</p>
              <!-- Experience - Small supporting text -->
              <p class="text-small mt-2">3+ Years Experience</p>
            </div>
            <div class="card-back">
              <h4 class="text-large font-bold mb-6 gradient-text-secondary">Quick Facts</h4>
              <ul class="space-y-3 text-left">
                <li class="text-normal">🎓 Computer Science Graduate</li>
                <li class="text-normal">💻 3+ Years Experience</li>
                <li class="text-normal">🌟 Vue.js Specialist</li>
                <li class="text-normal">🚀 Performance Enthusiast</li>
                <li class="text-normal">🎨 UI/UX Passionate</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Skills showcase -->
        <div class="skills-showcase" ref="skillsShowcase">
          <!-- Section heading - Large -->
          <h3 class="text-huge font-bold mb-12 text-center holographic">TECH STACK</h3>
          <div class="skills-grid">
            <div class="skill-item" v-for="skill in skills" :key="skill.name">
              <div class="skill-icon" :style="{ background: skill.color }">
                {{ skill.icon }}
              </div>
              <!-- Skill name - Medium prominence -->
              <span class="skill-name text-medium font-bold">{{ skill.name }}</span>
              <!-- Skill level - Small supporting info -->
              <span class="skill-percentage text-small">{{ skill.level }}%</span>
              <div class="skill-level">
                <div class="skill-bar" :style="{ width: skill.level + '%', background: skill.color }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience timeline -->
        <div class="experience-timeline" ref="timeline">
          <!-- Section heading - Large -->
          <h3 class="text-huge font-bold mb-12 text-center holographic">MY JOURNEY</h3>
          <div class="timeline">
            <div class="timeline-item" v-for="(item, index) in timelineData" :key="index">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <!-- Timeline title - Medium prominence -->
                <h4 class="text-medium font-bold gradient-text-primary">{{ item.title }}</h4>
                <!-- Description - Normal size -->
                <p class="text-normal text-gray-300 mt-2">{{ item.description }}</p>
                <!-- Date - Small supporting info -->
                <span class="text-small gradient-text-accent mt-2 block">{{ item.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive stats - Eye-catching numbers -->
      <div class="stats-section mt-32" ref="stats">
        <h3 class="text-large font-bold mb-16 text-center gradient-text-secondary">BY THE NUMBERS</h3>
        <div class="stats-grid">
          <div class="stat-item" v-for="stat in statsData" :key="stat.label">
            <!-- Big numbers for impact -->
            <div class="stat-number text-mega neon-text font-black">{{ stat.value }}</div>
            <!-- Small labels -->
            <div class="stat-label text-small text-gray-300 uppercase tracking-wider">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits(['ready'])

const title = ref(null)
const profileCard = ref(null)
const skillsShowcase = ref(null)
const timeline = ref(null)
const stats = ref(null)

const skills = [
  { name: 'Vue.js', icon: '⚡', level: 95, color: 'linear-gradient(45deg, #4FC08D, #42b883)' },
  { name: 'JavaScript', icon: '🚀', level: 90, color: 'linear-gradient(45deg, #F7DF1E, #F0DB4F)' },
  { name: 'CSS/SCSS', icon: '🎨', level: 88, color: 'linear-gradient(45deg, #1572B6, #33A9DC)' },
  { name: 'Nuxt.js', icon: '🔥', level: 85, color: 'linear-gradient(45deg, #00C58E, #00DC82)' },
  { name: 'GSAP', icon: '✨', level: 80, color: 'linear-gradient(45deg, #88CE02, #0AE448)' },
  { name: 'Node.js', icon: '⚙️', level: 75, color: 'linear-gradient(45deg, #339933, #68A063)' }
]

const timelineData = [
  { title: 'Started Coding Journey', description: 'Began learning web development fundamentals', date: '2020' },
  { title: 'First Freelance Project', description: 'Built my first client website', date: '2021' },
  { title: 'College Thesis Project', description: 'Developed RTU-PDSMS system', date: '2023' },
  { title: 'Professional Developer', description: 'Working on modern web applications', date: '2024' }
]

const statsData = [
  { value: '50+', label: 'Projects Completed' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Dedication' }
]

onMounted(() => {
  // Animate title
  gsap.fromTo(title.value, 
    { opacity: 0, y: 150, scale: 0.5 },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title.value,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    }
  )

  // Animate profile card
  gsap.fromTo(profileCard.value,
    { opacity: 0, rotateY: -90, scale: 0.8 },
    {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: profileCard.value,
        start: 'top 80%'
      }
    }
  )

  // Animate skills
  gsap.fromTo('.skill-item',
    { opacity: 0, x: -100, rotateX: -45 },
    {
      opacity: 1,
      x: 0,
      rotateX: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: skillsShowcase.value,
        start: 'top 80%'
      }
    }
  )

  // Animate timeline
  gsap.fromTo('.timeline-item',
    { opacity: 0, x: 150, scale: 0.8 },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      stagger: 0.25,
      ease: "power2.out",
      scrollTrigger: {
        trigger: timeline.value,
        start: 'top 80%'
      }
    }
  )

  // Animate stats
  gsap.fromTo('.stat-item',
    { opacity: 0, scale: 0.3, y: 100 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: stats.value,
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
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
  position: relative;
  padding: 120px 20px;
}

.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.15) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: grid-move 25s linear infinite;
  z-index: 0;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 80px;
}

.profile-card {
  perspective: 1200px;
  height: 500px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-style: preserve-3d;
  cursor: pointer;
}

.profile-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(135deg, rgba(255, 0, 128, 0.1), rgba(0, 212, 255, 0.1));
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 25px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
}

.card-back {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(191, 0, 255, 0.1));
}

.profile-image {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff0080, #00d4ff);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 0 40px rgba(0, 212, 255, 0.5);
}

.image-placeholder {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skills-showcase {
  grid-column: span 2;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.skill-item {
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 35px;
  text-align: center;
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
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 212, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
    
    &::before {
      left: 100%;
    }
  }
}

.skill-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}

.skill-name {
  display: block;
  margin-bottom: 10px;
}

.skill-percentage {
  display: block;
  margin-bottom: 20px;
  opacity: 0.8;
}

.skill-level {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  border-radius: 4px;
  transition: width 2s ease;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.experience-timeline {
  grid-column: span 2;
}

.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #00d4ff, #ff0080, #39ff14);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

.timeline-dot {
  position: absolute;
  left: -28px;
  top: 8px;
  width: 20px;
  height: 20px;
  background: #00d4ff;
  border-radius: 50%;
  box-shadow: 
    0 0 0 4px rgba(0, 212, 255, 0.3),
    0 0 30px rgba(0, 212, 255, 0.6);
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.timeline-content {
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 30px;
  margin-left: 30px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    border-color: rgba(255, 255, 255, 0.3);
  }
}

.stats-section {
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .stat-number {
    margin-bottom: 15px;
    font-family: var(--font-primary);
  }
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  
  .skills-showcase,
  .experience-timeline {
    grid-column: span 1;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>