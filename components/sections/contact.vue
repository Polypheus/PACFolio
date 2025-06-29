<template>
  <div class="contact-section">
    <!-- Animated background -->
    <div class="contact-bg">
      <div class="floating-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
        <div class="orb orb-4"></div>
      </div>
    </div>

    <div class="container flex-col relative z-10">
      <!-- Section title - MASSIVE and attention-grabbing -->
      <h2 class="section-title text-mega mb-24 holographic" ref="title">
        LET'S CONNECT
      </h2>

      <!-- Contact content -->
      <div class="contact-content max-w-7xl mx-auto">
        <!-- Main CTA -->
        <div class="main-cta mb-32" ref="mainCta">
          <!-- Big impactful headline -->
          <h3 class="text-huge font-black mb-8 neon-text">Ready to Build Something Amazing?</h3>
          <!-- Medium supporting text -->
          <p class="text-medium text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            I'm always excited to work on new projects and collaborate with creative minds. 
            Let's turn your ideas into reality with cutting-edge web solutions!
          </p>
          <button class="primary-cta-button group">
            <span class="relative z-10 text-medium font-bold">START A CONVERSATION</span>
            <div class="button-bg"></div>
            <div class="button-glow"></div>
          </button>
        </div>

        <!-- Contact methods -->
        <div class="contact-methods" ref="contactMethods">
          <!-- Section heading -->
          <h4 class="text-large font-bold mb-16 text-center gradient-text-primary">GET IN TOUCH</h4>
          <div class="contact-grid">
            <!-- Email -->
            <a href="mailto:paulandrew.consunji@example.com" class="contact-card email-card group">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div class="contact-info">
                <!-- Contact method - Medium prominence -->
                <h4 class="contact-title text-medium font-bold">Email</h4>
                <!-- Contact detail - Normal size -->
                <p class="contact-detail text-normal">paulandrew.consunji@example.com</p>
                <!-- Action text - Small -->
                <span class="contact-action text-small">Send a message →</span>
              </div>
              <div class="card-glow"></div>
            </a>

            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/paulandrewconsunji" target="_blank" class="contact-card linkedin-card group">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div class="contact-info">
                <h4 class="contact-title text-medium font-bold">LinkedIn</h4>
                <p class="contact-detail text-normal">Connect professionally</p>
                <span class="contact-action text-small">View profile →</span>
              </div>
              <div class="card-glow"></div>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/paulandrewconsunji" target="_blank" class="contact-card github-card group">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div class="contact-info">
                <h4 class="contact-title text-medium font-bold">GitHub</h4>
                <p class="contact-detail text-normal">Check out my code</p>
                <span class="contact-action text-small">View repositories →</span>
              </div>
              <div class="card-glow"></div>
            </a>

            <!-- Phone -->
            <a href="tel:+639123456789" class="contact-card phone-card group">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div class="contact-info">
                <h4 class="contact-title text-medium font-bold">Phone</h4>
                <p class="contact-detail text-normal">+63 912 345 6789</p>
                <span class="contact-action text-small">Give me a call →</span>
              </div>
              <div class="card-glow"></div>
            </a>
          </div>
        </div>

        <!-- Social links -->
        <div class="social-section mt-32" ref="socialSection">
          <h4 class="text-large font-bold mb-12 text-center gradient-text-secondary">Follow My Journey</h4>
          <div class="social-links">
            <a href="#" class="social-link twitter">
              <span class="social-icon text-large">🐦</span>
              <span class="social-name text-normal font-medium">Twitter</span>
              <span class="social-handle text-small">@paulandrew_dev</span>
            </a>
            <a href="#" class="social-link instagram">
              <span class="social-icon text-large">📸</span>
              <span class="social-name text-normal font-medium">Instagram</span>
              <span class="social-handle text-small">@pac.codes</span>
            </a>
            <a href="#" class="social-link dribbble">
              <span class="social-icon text-large">🏀</span>
              <span class="social-name text-normal font-medium">Dribbble</span>
              <span class="social-handle text-small">@paulandrew</span>
            </a>
          </div>
        </div>

        <!-- Footer message -->
        <div class="footer-message mt-40 text-center" ref="footerMessage">
          <!-- Medium prominence for main message -->
          <p class="text-medium text-gray-400 mb-6">
            Made with ❤️ and lots of ☕ in Metro Manila
          </p>
          <!-- Small supporting text -->
          <p class="text-small text-gray-500">
            © 2024 Paul Andrew Consunji. All rights reserved.
          </p>
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
const mainCta = ref(null)
const contactMethods = ref(null)
const socialSection = ref(null)
const footerMessage = ref(null)

onMounted(() => {
  console.log('Contact section mounted: emitting ready')

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
        start: 'top 80%'
      }
    }
  )

  // Animate main CTA
  gsap.fromTo(mainCta.value,
    { opacity: 0, scale: 0.6, y: 100 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: mainCta.value,
        start: 'top 80%'
      }
    }
  )

  // Animate contact cards
  gsap.fromTo('.contact-card',
    { opacity: 0, y: 80, rotateX: -25, scale: 0.8 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: contactMethods.value,
        start: 'top 80%'
      }
    }
  )

  // Animate social links
  gsap.fromTo('.social-link',
    { opacity: 0, scale: 0, rotation: -180 },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: socialSection.value,
        start: 'top 80%'
      }
    }
  )

  // Animate footer
  gsap.fromTo(footerMessage.value,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
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
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0a0a0a 100%);
  position: relative;
  padding: 120px 20px;
}

.contact-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.floating-orbs {
  position: relative;
  width: 100%;
  height: 100%;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: float-orb 10s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent);
  top: 15%;
  left: 5%;
  animation-delay: 0s;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 0, 128, 0.3), transparent);
  bottom: 15%;
  right: 5%;
  animation-delay: 4s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(191, 0, 255, 0.35), transparent);
  top: 50%;
  left: 50%;
  animation-delay: 8s;
}

.orb-4 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(57, 255, 20, 0.25), transparent);
  top: 70%;
  left: 20%;
  animation-delay: 2s;
}

@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(40px, -40px) scale(1.1); }
  50% { transform: translate(-30px, 30px) scale(0.9); }
  75% { transform: translate(50px, -20px) scale(1.05); }
}

.primary-cta-button {
  position: relative;
  padding: 25px 80px;
  background: transparent;
  border: 3px solid #00d4ff;
  color: white;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-transform: uppercase;
  letter-spacing: 3px;
  border-radius: 12px;
  font-family: var(--font-primary);
  
  .button-bg {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #00d4ff, #ff0080);
    transition: left 0.6s ease;
    z-index: -1;
  }
  
  .button-glow {
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    background: linear-gradient(45deg, #00d4ff, #ff0080, #39ff14, #bf00ff);
    border-radius: 16px;
    z-index: -2;
    opacity: 0;
    filter: blur(20px);
    transition: opacity 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 
      0 25px 50px rgba(0, 212, 255, 0.4),
      0 0 100px rgba(255, 0, 128, 0.3);
    
    .button-bg {
      left: 0;
    }
    
    .button-glow {
      opacity: 0.8;
    }
  }
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.contact-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 25px;
  padding: 40px;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 25px;
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  
  .card-glow {
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 28px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.03);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
    
    .card-glow {
      opacity: 0.6;
    }
    
    .contact-action {
      transform: translateX(15px);
    }
  }
  
  &.email-card:hover .card-glow {
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  }
  
  &.linkedin-card:hover .card-glow {
    background: linear-gradient(45deg, #0077b5, #00a0dc);
  }
  
  &.github-card:hover .card-glow {
    background: linear-gradient(45deg, #333, #666);
  }
  
  &.phone-card:hover .card-glow {
    background: linear-gradient(45deg, #00d4ff, #0099cc);
  }
}

.contact-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #00d4ff, #ff0080);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
}

.contact-info {
  flex: 1;
}

.contact-title {
  margin-bottom: 8px;
  font-family: var(--font-secondary);
}

.contact-detail {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
  font-family: var(--font-body);
}

.contact-action {
  color: #00d4ff;
  font-weight: 600;
  transition: transform 0.4s ease;
  font-family: var(--font-body);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  text-decoration: none;
  color: inherit;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  min-width: 160px;
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .social-icon {
    font-size: 2.5rem;
  }
  
  .social-name {
    font-family: var(--font-secondary);
  }
  
  .social-handle {
    opacity: 0.7;
    font-family: var(--font-mono);
  }
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .social-links {
    gap: 30px;
  }
  
  .primary-cta-button {
    padding: 20px 50px;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 80px 15px;
  }
  
  .contact-card {
    padding: 30px 25px;
    flex-direction: column;
    text-align: center;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>