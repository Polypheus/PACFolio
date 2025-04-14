import { createRouter, createWebHistory } from 'vue-router';
import hero from '/.codespaces/hero.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: hero }
    ],
});

export default router;
