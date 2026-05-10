<template>
  <div>
    <Header />
    <HeroSection />
    <StatsSection />
    <SkillsSection />
    <ProjectsSection />
    <AchievementsSection />
    <AboutUsSection />

    <!-- Scroll To Top Button -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-3"
    >
      <button
        v-if="showScroll"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl bg-green-500 hover:bg-green-400 text-black shadow-lg shadow-green-500/20 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Scroll to top"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import StatsSection from '@/components/StatsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import AchievementsSection from '@/components/AchievementsSection.vue'
import AboutUsSection from '@/components/AboutUs.vue'

const showScroll = ref(false)

const handleScroll = () => {
  showScroll.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
