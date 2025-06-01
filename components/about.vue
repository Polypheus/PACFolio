<template>
  <div class="container mx-auto flex flex-col items-center justify-center h-screen block">
    <div class="about-text" ref="aboutText">
      <p class="text-[12px] font-serif text-gray-500">hover your mouse through the words</p>
      <h1>
        I’m <span class="hover-about">Paul Andrew Consunji</span>, a passionate and determined IT graduate from <span class="hover-about">Rizal Technological University</span>.
        <br /><br />
        I specialize in <span class="hover-about">front-end development</span>, blending clean UI with <span class="hover-about">smooth user experiences</span>. I’ve worked with tools like <span class="hover-about">Vue/Nuxt</span>, <span class="hover-about">Tailwind CSS</span>, and <span class="hover-about">GSAP</span> to bring interfaces to life.
        <br /><br />
        My journey started with <span class="hover-about">curiosity—fixing computers</span>, <span class="hover-about">designing graphics</span>, and <span class="hover-about">building web apps</span> that solve real problems. Whether it's <span class="hover-about">managing data</span>, <span class="hover-about">enhancing workflows</span>, or <span class="hover-about">designing interactive effects</span>, I aim to create digital solutions that are <span class="hover-about">useful</span>, <span class="hover-about">fast</span>, and <span class="hover-about">simple</span>.
        <br /><br />
        I’m based in <span class="hover-about">Metro Manila</span>,<span class="hover-about">Philippines</span>—and always open to new challenges and opportunities to grow as a developer.
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
