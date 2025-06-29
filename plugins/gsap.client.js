import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  // Register ScrollTrigger plugin on client side
  gsap.registerPlugin(ScrollTrigger)
  
  // Configure ScrollTrigger defaults
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
  })
  
  // Refresh ScrollTrigger when page is fully loaded
  if (process.client) {
    // Initial refresh after DOM is ready
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
    
    // Refresh after fonts are loaded
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh()
    })
    
    // Refresh on window load
    window.addEventListener('load', () => {
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    })
    
    // Refresh on resize with debounce
    let resizeTimeout
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh()
      }, 150)
    })
  }
  
  // Make GSAP available globally
  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})