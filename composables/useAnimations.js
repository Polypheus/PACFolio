import { nextTick } from 'vue'

export const useAnimations = () => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()

  const createScrollTrigger = (options) => {
    if (!$gsap || !$ScrollTrigger || !process.client) return null
    
    return $ScrollTrigger.create({
      refreshPriority: -1,
      ...options
    })
  }

  const createTimeline = (options = {}) => {
    if (!$gsap || !process.client) return null
    
    return $gsap.timeline({
      defaults: { ease: 'power2.out' },
      ...options
    })
  }

  const animateIn = (element, options = {}) => {
    if (!$gsap || !element) return null
    
    const defaults = {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    }
    
    return $gsap.fromTo(element, 
      { opacity: 0, y: 50, ...options.from },
      { opacity: 1, y: 0, ...defaults, ...options.to }
    )
  }

  const staggerIn = (elements, options = {}) => {
    if (!$gsap || !elements) return null
    
    return $gsap.fromTo(elements,
      { opacity: 0, y: 30, ...options.from },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        ...options.to 
      }
    )
  }

  const setupParallax = (element, options = {}) => {
    if (!element) return null
    
    return createScrollTrigger({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      animation: $gsap.to(element, {
        yPercent: -20,
        ease: 'none',
        ...options
      })
    })
  }

  const waitForGSAP = (callback, timeout = 50) => {
    if ($gsap && $ScrollTrigger) {
      callback()
    } else {
      setTimeout(() => waitForGSAP(callback, timeout), timeout)
    }
  }

  const refreshScrollTrigger = (delay = 100) => {
    if ($ScrollTrigger && process.client) {
      setTimeout(() => {
        $ScrollTrigger.refresh()
      }, delay)
    }
  }

  return {
    createScrollTrigger,
    createTimeline,
    animateIn,
    staggerIn,
    setupParallax,
    waitForGSAP,
    refreshScrollTrigger
  }
}