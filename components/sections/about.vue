<template>
  <div class="about-section">
    <!-- Animated background grid -->
    <div class="grid-background"></div>
    
    <div class="container flex-col relative z-10">
      <!-- Section title -->
      <h2 class="section-title text-[120px] font-black mb-16 holographic" ref="title">
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
              <h3 class="text-3xl font-bold mt-6 neon-text">Paul Andrew Consunji</h3>
              <p class="text-xl text-gray-300 mt-2">Frontend Developer</p>
            </div>
            <div class="card-back">
              <h4 class="text-2xl font-bold mb-4 text-pink-400">Quick Facts</h4>
              <ul class="space-y-2 text-left">
                <li>🎓 Computer Science Graduate</li>
                <li>💻 3+ Years Experience</li>
                <li>🌟 Vue.js Specialist</li>
                <li>🚀 Performance Enthusiast</li>
                <li>🎨 UI/UX Passionate</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Skills showcase -->
        <div class="skills-showcase" ref="skillsShowcase">
          <h3 class="text-4xl font-bold mb-8 text-center holographic">TECH STACK</h3>
          <div class="skills-grid">
            <div class="skill-item" v-for="skill in skills" :key="skill.name">
              <div class="skill-icon" :style="{ background: skill.color }">
                {{ skill.icon }}
              </div>
              <span class="skill-name">{{ skill.name }}</span>
              <div class="skill-level">
                <div class="skill-bar" :style="{ width: skill.level + '%', background: skill.color }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience timeline -->
        <div class="experience-timeline" ref="timeline">
          <h3 class="text-4xl font-bold mb-8 text-center holographic">JOURNEY</h3>
          <div class="timeline">
            <div class="timeline-item" v-for="(item, index) in timeline" :key="index">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4 class="text-xl font-bold text-blue-400">{{ item.title }}</h4>
                <p class="text-gray-300">{{ item.description }}</p>
                <span class="text-sm text-pink-400">{{ item.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive stats -->
      <div class="stats-section mt-20" ref="stats">
        <div class="stats-grid">
          <div class="stat-item" v-for="stat in stats" :key="stat.label">
            <div class="stat-number neon-text text-5xl font-black">{{ stat.value }}</div>
            <div class="stat-label text-xl text-gray-300">{{ stat.label }}</div>
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
    { opacity: 0, y: 100 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1.5,
      scrollTrigger: {
        trigger: title.value,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      }
    }
  )

  // Animate profile card
  gsap.fromTo(profileCard.value,
    { opacity: 0, rotateY: -90 },
    {
      opacity: 1,
      rotateY: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: profileCard.value,
        start: 'top 80%'
      }
    }
  )

  // Animate skills
  gsap.fromTo('.skill-item',
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: skillsShowcase.value,
        start: 'top 80%'
      }
    }
  )

  // Animate timeline
  gsap.fromTo('.timeline-item',
    { opacity: 0, x: 100 },
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

  // Animate stats
  gsap.fromTo('.stat-item',
    { opacity: 0, scale: 0.5 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
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
  padding: 100px 20px;
}

.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
  z-index: 0;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.profile-card {
  perspective: 1000px;
  height: 400px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-back {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(191, 0, 255, 0.1));
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff0080, #00d4ff);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.image-placeholder {
  width: 110px;
  height: 110px;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.skill-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
  }
}

.skill-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 0 auto 15px;
}

.skill-name {
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.skill-level {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  border-radius: 3px;
  transition: width 1s ease;
}

.experience-timeline {
  grid-column: span 2;
}

.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #00d4ff, #ff0080);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-dot {
  position: absolute;
  left: -23px;
  top: 5px;
  width: 16px;
  height: 16px;
  background: #00d4ff;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
}

.timeline-content {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-left: 20px;
}

.stats-section {
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  
  .stat-number {
    margin-bottom: 10px;
  }
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .skills-showcase,
  .experience-timeline {
    grid-column: span 1;
  }
  
  .section-title {
    font-size: 80px !important;
  }
}
</style>