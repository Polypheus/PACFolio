<template>
  <div class="contact-section">
    <div class="container flex-col relative z-10">
      <!-- Section title -->
      <h2 class="section-title text-mega mb-20 text-center" ref="title">
        Contact
      </h2>

      <!-- Contact content -->
      <div class="contact-content">
        <!-- Main CTA -->
        <div class="main-cta mb-16" ref="mainCta">
          <h3 class="text-large font-semibold mb-6">Let's work together</h3>
          <p class="text-normal opacity-70 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's create something amazing together.
          </p>
          <button class="btn-minimal text-normal">
            Get In Touch
          </button>
        </div>

        <!-- Contact methods -->
        <div class="contact-methods" ref="contactMethods">
          <div class="contact-grid">
            <!-- Email -->
            <a href="mailto:paulandrew.consunji@example.com" class="contact-card interactive-hover">
              <div class="contact-info">
                <h4 class="contact-title text-normal font-medium">Email</h4>
                <p class="contact-detail text-small opacity-70">paulandrew.consunji@example.com</p>
              </div>
            </a>

            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/paulandrewconsunji" target="_blank" class="contact-card interactive-hover">
              <div class="contact-info">
                <h4 class="contact-title text-normal font-medium">LinkedIn</h4>
                <p class="contact-detail text-small opacity-70">Connect professionally</p>
              </div>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/paulandrewconsunji" target="_blank" class="contact-card interactive-hover">
              <div class="contact-info">
                <h4 class="contact-title text-normal font-medium">GitHub</h4>
                <p class="contact-detail text-small opacity-70">View my repositories</p>
              </div>
            </a>

            <!-- Phone -->
            <a href="tel:+639123456789" class="contact-card interactive-hover">
              <div class="contact-info">
                <h4 class="contact-title text-normal font-medium">Phone</h4>
                <p class="contact-detail text-small opacity-70">+63 912 345 6789</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Footer message -->
        <div class="footer-message mt-16 text-center" ref="footerMessage">
          <p class="text-small opacity-50">
            © 2024 Paul Andrew Consunji. Made with care in Metro Manila.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Final marquee -->
    <ScrollMarquee :items="['THANK YOU', 'FOR VISITING', 'LET\'S CONNECT', 'SOON']" />
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
const mainCta = ref(null)
const contactMethods = ref(null)
const footerMessage = ref(null)

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

  // Animate main CTA
  gsap.fromTo(mainCta.value,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: mainCta.value,
        start: 'top 80%'
      }
    }
  )

  // Animate contact cards
  gsap.fromTo('.contact-card',
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: contactMethods.value,
        start: 'top 80%'
      }
    }
  )

  // Animate footer
  gsap.fromTo(footerMessage.value,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: footerMessage.value,
        start: 'top 90%'
      }
    }
  )

  emit('ready')
})
</script>

<style scoped lang="scss">
.contact-section {
  min-height: 100vh;
  background: var(--gray-50);
  padding: 6rem 2rem;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
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
  
  &:hover {
    border-color: var(--gray-400);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}

.contact-info {
  text-align: left;
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