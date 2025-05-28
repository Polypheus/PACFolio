<template>
  <div class="container mx-auto flex flex-col items-center justify-center h-screen">
    <div class="logo">
      <p>PAULANDREWCONSUNJI</p>
    </div>

    <div class="tools">
      <p>
        Tools: Vue/Nuxt<br>
        CSS: Tailwind/Sass<br>
        Libraries: GSAP
      </p>
    </div>

    <div id="home" class="home">
      <h1 class="intro">My name is PAUL ANDREW CONSUNJI</h1>
    </div>
    <div id="line"></div>

    <div id="home2" class="home2">
      <h1 class="intro">And this is my Portfolio</h1>
    </div>
    <div id="line1"></div>

    <div id="home3" class="home3">
      <h1 class="intro">Based in Metro Manila, Philippines</h1>
    </div>
    <div id="line2"></div>

    <div id="home4" class="home4">
      <h1 class="intro">I Am A Fresh Graduate</h1>
    </div>
    <div id="line3"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // Animate text + logo + tools
  gsap.from('.logo, .tools, .intro', {
    opacity: 0,
    y: 100,
    duration: 1.2,
    stagger: 0.5,
    ease: 'power3.out',
  })

  // Animate lines
  gsap.from('#line, #line1, #line2, #line3', {
    scaleX: 0,
    transformOrigin: 'left center',
    duration: 1,
    delay: 0.3,
    stagger: 0.3,
    ease: 'power2.out',
  })
})
</script>
