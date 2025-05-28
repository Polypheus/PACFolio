<template>
  <div class="container mx-auto flex flex-col items-center justify-center h-screen">
    <div class="about-text" ref="aboutText">
      <h1>
        I’m Paul Andrew Consunji, a passionate and determined IT graduate from Rizal Technological University.
        <br /><br />
        I specialize in front-end development, blending clean UI with smooth user experiences. I’ve worked with tools like Vue/Nuxt, Tailwind CSS, and GSAP to bring interfaces to life.
        <br /><br />
        My journey started with curiosity—fixing computers, designing graphics, and building web apps that solve real problems. Whether it's managing data, enhancing workflows, or designing interactive effects, I aim to create digital solutions that are useful, fast, and simple.
        <br /><br />
        I’m based in Metro Manila, Philippines—and always open to new challenges and opportunities to grow as a developer.
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the plugin
gsap.registerPlugin(ScrollTrigger)

const aboutText = ref(null)

onMounted(() => {
  gsap.from(aboutText.value, {
    scrollTrigger: {
      trigger: aboutText.value,
      start: 'top 80%', // when top of element hits 80% of viewport
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: 'power3.out',
  })
})
</script>

<style scoped lang="scss">
.about-text {
  font-family: 'Six Caps', sans-serif;
  font-size: 60px;
  padding: 40px;
  line-height: 1.2;
  text-align: center;
}
</style>
