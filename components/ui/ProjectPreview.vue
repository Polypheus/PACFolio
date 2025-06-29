<template>
  <transition name="preview-fade">
    <div
      class="iframe-preview"
      :style="{ left: `${mouseX + 30}px`, top: `${mouseY - 200}px` }"
    >
      <div class="preview-header">
        <div class="preview-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="preview-url text-tiny">{{ project.url }}</div>
      </div>
      <iframe :src="project.url" frameborder="0" scrolling="no"></iframe>
      <div class="preview-glow"></div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  mouseX: {
    type: Number,
    required: true
  },
  mouseY: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.iframe-preview {
  position: fixed;
  width: 600px;
  height: 400px;
  background: var(--white);
  z-index: 1000;
  pointer-events: none;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 0 0 1px var(--gray-200);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  .preview-header {
    height: 40px;
    background: var(--gray-100);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    border-bottom: 1px solid var(--gray-200);
  }
  
  .preview-dots {
    display: flex;
    gap: 6px;
    
    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      
      &:nth-child(1) { background: #ff5f57; }
      &:nth-child(2) { background: #ffbd2e; }
      &:nth-child(3) { background: #28ca42; }
    }
  }
  
  .preview-url {
    background: var(--white);
    color: var(--gray-600);
    padding: 4px 8px;
    border-radius: 4px;
    flex: 1;
    font-family: var(--font-mono);
    font-size: 10px;
  }

  iframe {
    width: 100%;
    height: calc(100% - 40px);
    border: none;
    background: var(--white);
    transform: scale(0.5);
    transform-origin: top left;
    width: 200%;
    height: calc(200% - 80px);
  }
  
  .preview-glow {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, var(--gray-300), var(--gray-400));
    border-radius: 10px;
    z-index: -1;
    opacity: 0.5;
    filter: blur(8px);
  }
}

.preview-fade-enter-active,
.preview-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.preview-fade-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.preview-fade-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-10px);
}

@media (max-width: 768px) {
  .iframe-preview {
    width: 90vw;
    height: 60vh;
    left: 5vw !important;
    top: 20vh !important;
  }
}
</style>