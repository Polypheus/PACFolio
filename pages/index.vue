<template>
  <div>
    <!-- Loading screen -->
    <div
      v-if="loading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-500"
    >
      <NumberTicker
        :value="100"
        :startValue="0"
        :direction="'up'"
        :delay="1"
        :decimalPlaces="0"
        @done="onTickerDone"
      />
    </div>

    <!-- Main content -->
      <Hero @ready="markSectionReady('hero')" />
      <About @ready="markSectionReady('about')" />
      <Project @ready="markSectionReady('project')" />
      <Contact @ready="markSectionReady('contact')" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import NumberTicker from '@/components/NumberTicker.vue'
import Hero from '@/components/sections/hero.vue'
import About from '@/components/sections/about.vue'
import Project from '@/components/sections/project.vue'
import Contact from '@/components/sections/contact.vue'

// Wait for ticker + all sections
const loading = ref(true)
const tickerDone = ref(false)

const sections = reactive({
  hero: false,
  about: false,
  project: false,
  contact: false
})

const markSectionReady = (sectionName) => {
  console.log(`Received ready event from: ${sectionName}`);
  sections[sectionName] = true;
  checkIfAllReady();
};


const onTickerDone = () => {
  tickerDone.value = true
  checkIfAllReady()
}

const checkIfAllReady = () => {
  console.log("Sections ready:", sections);
  console.log("Ticker done:", tickerDone.value);

  const allSectionsReady = Object.values(sections).every(Boolean);
  if (tickerDone.value && allSectionsReady) {
    console.log("All components loaded! Showing main content.");
    loading.value = false;
  }
};

</script>
