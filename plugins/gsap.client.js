import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  // Register ScrollTrigger plugin on client side
  gsap.registerPlugin(ScrollTrigger)
  
  // Make GSAP available globally
  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})