<template>
  <div class="contact-section" ref="contactSection">
    <div class="container">
      <!-- Section title -->
      <h2 class="section-title text-mega mb-20 text-center" ref="title">
        Contact
      </h2>

      <!-- Contact content -->
      <div class="contact-content" ref="contactContent">
        <!-- Main CTA -->
        <div class="main-cta mb-16" ref="mainCta">
          <h3 class="text-large font-semibold mb-6" ref="ctaTitle">Let's work together</h3>
          <p class="text-normal opacity-70 mb-8 max-w-2xl mx-auto" ref="ctaDescription">
            I'm always interested in new opportunities and collaborations. 
            Let's create something amazing together.
          </p>
          <button class="btn-minimal text-normal" ref="ctaButton">
            Get In Touch
          </button>
        </div>

        <!-- Contact methods -->
        <div class="contact-methods" ref="contactMethods">
          <div class="contact-grid" ref="contactGrid">
            <!-- Email -->
            <a :href="`mailto:${data.personalInfo.email}`" class="contact-card interactive-hover" ref="emailCard">
              <div class="contact-info">
                <div class="contact-icon text-large mb-2">📧</div>
                <h4 class="contact-title text-normal font-medium">Email</h4>
                <p class="contact-detail text-small opacity-70">{{ data.personalInfo.email }}</p>
              </div>
            </a>

            <!-- LinkedIn -->
            <a :href="`https://${data.personalInfo.linkedin}`" target="_blank" class="contact-card interactive-hover" ref="linkedinCard">
              <div class="contact-info">
                <div class="contact-icon text-large mb-2">💼</div>
                <h4 class="contact-title text-normal font-medium">LinkedIn</h4>
                <p class="contact-detail text-small opacity-70">{{ data.personalInfo.linkedin }}</p>
              </div>
            </a>

            <!-- GitHub -->
            <a :href="data.personalInfo.github" target="_blank" class="contact-card interactive-hover" ref="githubCard">
              <div class="contact-info">
                <div class="contact-icon text-large mb-2">💻</div>
                <h4 class="contact-title text-normal font-medium">GitHub</h4>
                <p class="contact-detail text-small opacity-70">View my repositories</p>
              </div>
            </a>

            <!-- Phone -->
            <a :href="`tel:${data.personalInfo.phone}`" class="contact-card interactive-hover" ref="phoneCard">
              <div class="contact-info">
                <div class="contact-icon text-large mb-2">📱</div>
                <h4 class="contact-title text-normal font-medium">Phone</h4>
                <p class="contact-detail text-small opacity-70">{{ data.personalInfo.phone }}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Footer message -->
        <div class="footer-message mt-16 text-center" ref="footerMessage">
          <p class="text-small opacity-50">
            © 2024 {{ data.personalInfo.name }}. Made with care in {{ data.personalInfo.location }}.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Final marquee -->
    <ScrollMarquee :items="['THANK YOU', 'FOR VISITING', 'LET\'S CONNECT', 'SOON']" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { usePortfolioData } from '@/composables/usePortfolioData'
import { useAnimations } from '@/composables/useAnimations'
import ScrollMarquee from '@/components/ScrollMarquee.vue'

const emit = defineEmits(['ready'])

const data = usePortfolioData()
const { waitForGSAP, createScrollTrigger, animateIn, refreshScrollTrigger } = useAnimations()

const contactSection = ref(null)
const title = ref(null)
const ctaTitle = ref(null)
const ctaDescription = ref(null)
const ctaButton = ref(null)
const footerMessage = ref(null)

const emailCard = ref(null)
const linkedinCard = ref(null)
const githubCard = ref(null)
const phoneCard = ref(null)

let animationsSetup = false

onMounted(async () => {
  await nextTick()
  
  if (process.client) {
    waitForGSAP(() => {
      if (!animationsSetup) {
        setupAnimations()
      }
    }, 400)
  }
})

function setupAnimations() {
  if (animationsSetup || !process.client) return
  animationsSetup = true

  // Section title with dramatic entrance
  createScrollTrigger({
    trigger: title.value,
    start: 'top 80%',
    animation: animateIn(title.value, {
      from: { 
        y: 150, 
        scale: 0.3,
        rotation: 10
      },
      to: {
        scale: 1,
        rotation: 0,
        duration: 1.8,
        ease: "power3.out"
      }
    }),
    toggleActions: "play none none reverse"
  })

  // CTA section animations
  createScrollTrigger({
    trigger: ctaTitle.value,
    start: 'top 80%',
    animation: animateIn(ctaTitle.value, {
      from: { y: 50, scale: 0.8 },
      to: { scale: 1, duration: 1, ease: "power2.out" }
    }),
    toggleActions: "play none none reverse"
  })

  createScrollTrigger({
    trigger: ctaDescription.value,
    start: 'top 80%',
    animation: animateIn(ctaDescription.value, {
      from: { y: 30 },
      to: { duration: 1, delay: 0.2, ease: "power2.out" }
    }),
    toggleActions: "play none none reverse"
  })

  createScrollTrigger({
    trigger: ctaButton.value,
    start: 'top 80%',
    animation: useNuxtApp().$gsap.fromTo(ctaButton.value,
      { opacity: 0, scale: 0.5, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "back.out(1.7)"
      }
    ),
    toggleActions: "play none none reverse"
  })

  // Contact cards with staggered entrance
  const contactCards = [emailCard.value, linkedinCard.value, githubCard.value, phoneCard.value]
  
  contactCards.forEach((card, index) => {
    if (card) {
      createScrollTrigger({
        trigger: card,
        start: 'top 85%',
        animation: useNuxtApp().$gsap.fromTo(card,
          { 
            opacity: 0, 
            y: 80, 
            scale: 0.8,
            rotationX: -15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1,
            delay: index * 0.15,
            ease: "power3.out"
          }
        ),
        toggleActions: "play none none reverse"
      })

      // Individual card hover animations
      card.addEventListener('mouseenter', () => {
        useNuxtApp().$gsap.to(card, { 
          y: -8, 
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      card.addEventListener('mouseleave', () => {
        useNuxtApp().$gsap.to(card, { 
          y: 0, 
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    }
  })

  // Footer message fade in
  createScrollTrigger({
    trigger: footerMessage.value,
    start: 'top 90%',
    animation: animateIn(footerMessage.value, {
      from: { y: 30 },
      to: { duration: 1.2, ease: "power2.out" }
    }),
    toggleActions: "play none none reverse"
  })

  refreshScrollTrigger()
  emit('ready')
}
</script>

<style scoped lang="scss">
.contact-section {
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

.contact-content {
  text-align: center;
}

.main-cta {
  margin-bottom: 4rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.contact-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    border-color: var(--gray-400);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    
    &::before {
      left: 100%;
    }
  }
}

.contact-info {
  text-align: center;
}

.contact-icon {
  margin-bottom: 0.5rem;
}

.contact-title {
  margin-bottom: 0.5rem;
}

.contact-detail {
  word-break: break-all;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>