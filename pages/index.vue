<template>
  <div>
    <!-- Number Ticker Loader -->
    <div
      v-if="loading && !tickerDone"
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

    <!-- Interchange Loader Animation (Shows after NumberTicker finishes) -->
    <Interchange v-if="tickerDone && loading" @done="onLoaderDone" />

    <!-- Main content (Shows after Loader finishes) -->
    <div>
      <Hero @ready="markSectionReady('hero')" />
      <About @ready="markSectionReady('about')" />
      <Project @ready="markSectionReady('project')" />
      <Contact @ready="markSectionReady('contact')" />
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import NumberTicker from '@/components/NumberTicker.vue';
import Interchange from '@/components/Interchange.vue'; // Add Loader
import Hero from '@/components/sections/hero.vue';
import About from '@/components/sections/about.vue';
import Project from '@/components/sections/project.vue';
import Contact from '@/components/sections/contact.vue';

// Wait for ticker + loader + all sections
const loading = ref(true);
const tickerDone = ref(false);
const loaderDone = ref(false);

const sections = reactive({
  hero: false,
  about: false,
  project: false,
  contact: false
});

const markSectionReady = (sectionName) => {
  console.log(`Received ready event from: ${sectionName}`);
  sections[sectionName] = true;
  checkIfAllReady();
};

const onTickerDone = () => {
  console.log("NumberTicker done, starting Interchange animation.");
  tickerDone.value = true;
};

const onLoaderDone = () => {
  console.log("Interchange animation complete!");
  loaderDone.value = true;
  checkIfAllReady();
};

const checkIfAllReady = () => {
  console.log("Sections ready:", sections);
  console.log("Ticker done:", tickerDone.value);
  console.log("Loader done:", loaderDone.value);

  const allSectionsReady = Object.values(sections).every(Boolean);
  if (tickerDone.value && loaderDone.value && allSectionsReady) {
    console.log("All components loaded! Showing main content.");
    loading.value = false;
  }
};
</script>
