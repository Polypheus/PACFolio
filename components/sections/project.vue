<template>
  <div class="scroll-wrapper" @mousemove="onMouseMove">
    <!-- Expanding Circle -->
    <div class="scroll-circle" ref="scrollCircle"></div>

    <!-- Project Section -->
    <section class="project-section" ref="projectSection">
      <a
        href="https://polynotes.netlify.app/"
        target="_blank"
        class="project-link"
        @mouseenter="hoveredProjectUrl = 'https://polynotes.netlify.app/'"
        @mouseleave="hoveredProjectUrl = null"
      >
        <h1 class="project-title" ref="title1">
          first project made with <span class="project-text text-white">Loveable</span> <span class="text-[25px] absolute bottom-7 right-0">3 months ago</span>
        </h1>
      </a>
      <hr />

      <a
        href="https://rtu-pdsms.onrender.com/"
        target="_blank"
        class="project-link"
        @mouseenter="hoveredProjectUrl = 'https://rtu-pdsms.onrender.com/'"
        @mouseleave="hoveredProjectUrl = null"
      >
        <h1 class="project-title" ref="title2">
          second project our <span class="text-white">Thesis</span> project during college <span class="text-[25px] absolute bottom-7 right-0">a year ago</span>
        </h1>
      </a>
      <hr />

      <a
        href="https://example.com/project3"
        target="_blank"
        class="project-link"
        @mouseenter="hoveredProjectUrl = 'https://pacfolio.netlify.app/'"
        @mouseleave="hoveredProjectUrl = null"
      >
        <h1 class="project-title" ref="title3">My Portfolio <span class="text-[25px] absolute bottom-7 right-0">current</span>

        </h1> 
      </a>
      <hr />

      <a
        href="https://example.com/project4"
        target="_blank"
        class="project-link"
        @mouseenter="hoveredProjectUrl = 'https://example.com/project4'"
        @mouseleave="hoveredProjectUrl = null"
      >
        <h1 class="project-title" ref="title4">fourth</h1>
      </a>
      <hr />

      <a
        href="https://example.com/project5"
        target="_blank"
        class="project-link"
        @mouseenter="hoveredProjectUrl = 'https://example.com/project5'"
        @mouseleave="hoveredProjectUrl = null"
      >
        <h1 class="project-title" ref="title5">fifth</h1>
      </a>
      <hr />

      <a
        href="https://example.com/project6"
        target="_blank"
        class="project-link"
        @mouseenter="hoveredProjectUrl = 'https://example.com/project6'"
        @mouseleave="hoveredProjectUrl = null"
      >
        <h1 class="project-title" ref="title6">sixth</h1>
      </a>
      <hr />
    </section>

    <!-- Iframe Preview -->
    <transition name="fade">
      <div
        v-if="hoveredProjectUrl"
        class="iframe-preview"
        :style="{ left: `${mouseX + 20}px`, top: `${mouseY - 200}px` }"
      >
        <iframe :src="hoveredProjectUrl" frameborder="0" scrolling="no"></iframe>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits(['ready'])

const scrollCircle = ref(null)
const projectSection = ref(null)
const hoveredProjectUrl = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

const title1 = ref(null)
const title2 = ref(null)
const title3 = ref(null)
const title4 = ref(null)
const title5 = ref(null)
const title6 = ref(null)

const onMouseMove = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

onMounted(() => {
  console.log('Project section mounted: emitting ready')
  
  // Circle animation
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
  }).to(scrollCircle.value, {
    opacity: 0,
    duration: 0,
    ease: 'power2.out',
  })

  // Title animation with reverse scroll
  const titleRefs = [title1, title2, title3, title4, title5, title6]
  titleRefs.forEach((el) => {
    if (el.value) {
      gsap.fromTo(
        el.value,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el.value,
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
          },
        }
      )
    }
  })

  // Emit ready after animations are set up
  emit('ready')
})
</script>

<style scoped lang="scss">
.scroll-wrapper {
  scroll-behavior: smooth;
  position: relative;
}

.project-link {
  text-decoration: none;
  color: inherit;
}

.project-section {
  min-height: 100vh;
  min-width: 100%;
  background: #ff0055;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
  z-index: 1;
  text-align: center;
  justify-content: center;
}

.project-title {
  font-size: 60px;
  margin-bottom: 1px;
  font-family: 'Six Caps', sans-serif;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(50px); /* prepare for GSAP entrance */
}

.project-title:hover {
  color: #fff;
  font-size: 62px;
}

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

.iframe-preview {
  position: fixed;
  width: 800px;
  height: 600px;
  background: #fff;
  z-index: 1000;
  pointer-events: none;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s ease, transform 0.2s ease;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    overflow: hidden;
    border-radius: 20px;
  }
}

/* Smooth fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>