<template>
  <div>
    <!-- Particle background for entire site -->
    <ParticleBackground />
    
    <!-- Single ClientOnly wrapper for all loader components -->
    <ClientOnly>
      <div
        v-if="showNumberTicker"
        class="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500"
      >
        <NumberTicker
          :value="100"
          :startValue="0"
          :direction="'up'"
          :delay="0.5"
          :decimalPlaces="0"
          @done="onTickerDone"
        />
      </div>
      
      <!-- Interchange Loader Animation (Shows after NumberTicker finishes) -->
      <Interchange v-if="showInterchange" @done="onLoaderDone" />
    </ClientOnly>

    <!-- Main content (Shows after Loader finishes) -->
    <div v-show="showMainContent">
      <Hero :loaderDone="loaderDone" @ready="markSectionReady('hero')" />
      <About @ready="markSectionReady('about')" />
      <Project @ready="markSectionReady('project')" />
      <Contact @ready="markSectionReady('contact')" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import NumberTicker from '@/components/NumberTicker.vue'
import Interchange from '@/components/Interchange.vue'
import ParticleBackground from '@/components/ParticleBackground.vue'
import Hero from '@/components/sections/hero.vue'
import About from '@/components/sections/about.vue'
import Project from '@/components/sections/project.vue'
import Contact from '@/components/sections/contact.vue'

// Loading states
const tickerDone = ref(false)
const loaderDone = ref(false)

const sections = reactive({
  hero: false,
  about: false,
  project: false,
  contact: false
})

// Computed properties for cleaner template logic
const showNumberTicker = computed(() => !tickerDone.value)
const showInterchange = computed(() => tickerDone.value && !loaderDone.value)
const showMainContent = computed(() => loaderDone.value)

const markSectionReady = (sectionName) => {
  console.log(`✅ Section ready: ${sectionName}`)
  sections[sectionName] = true
}

const onTickerDone = () => {
  console.log("✅ NumberTicker animation complete")
  tickerDone.value = true
}

const onLoaderDone = () => {
  console.log("✅ Interchange animation complete")
  loaderDone.value = true
}
</script>