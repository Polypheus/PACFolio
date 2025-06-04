<template>
  <div class="scroll-wrapper">
    <!-- Expanding Circle -->
    <div class="scroll-circle" ref="scrollCircle"></div>

    <!-- Project Section -->
    <section class="project-section" ref="projectSection">
      <h2 class="project-title">first project</h2>
      <div class="iframe-wrapper">
        <iframe
          src="https://polynotes.netlify.app/"
          class="project-iframe"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scrollCircle = ref(null)
const projectSection = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: projectSection.value,
      start: 'top bottom',
      end: 'top top',
      scrub: true,
    },
  })

  tl.to(scrollCircle.value, {
    scale: 100,
    ease: 'power2.out',
  })

  tl.to(scrollCircle.value, {
    opacity: 0,
    duration: 0.1,
    ease: 'power2.out',
  })
})
</script>

<style scoped lang="scss">
.scroll-wrapper {
  scroll-behavior: smooth;
}

/* Project Section */
.project-section {
  height: 100vh;
  background: #ff0055;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.project-title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Six Caps', sans-serif;
}

.iframe-wrapper {
  width: 90%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
}

.project-iframe {
  width: 100%;
  height: 100%;
  border: none;
  transform: scale(0.95);
  transform-origin: center;
}

/* Expanding Circle */
.scroll-circle {
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 50px;
  height: 50px;
  background-color: #ff0055;
  border-radius: 50%;
  z-index: 5;
  pointer-events: none;
  transform: scale(0);
}
</style>
