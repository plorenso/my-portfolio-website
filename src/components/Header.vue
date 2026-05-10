<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      scrolled
        ? isDark
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-white/90 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm'
        : 'bg-transparent py-5',
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-2 group">
        <span
          class="text-2xl font-black tracking-tight transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-[#0a0a0f]'"
          style="font-family: 'Syne', sans-serif"
        >
          MFC
        </span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="relative text-sm font-medium transition-colors duration-200 group"
          :class="isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'"
          style="font-family: 'DM Sans', sans-serif"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-1 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300"
          />
        </a>
      </nav>

      <div class="hidden md:flex items-center gap-3">
        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
          :class="
            isDark
              ? 'bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10'
              : 'bg-black/5 hover:bg-black/10 text-black/50 hover:text-black border border-black/10'
          "
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg
            v-if="isDark"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg
            v-else
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>

        <!-- Download CV -->
        <button
          @click="downloadCV"
          class="flex items-center gap-2 px-5 py-2 bg-green-500 hover:bg-green-400 text-black text-sm font-bold rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-green-500/20"
          style="font-family: 'Syne', sans-serif"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Resume
        </button>
      </div>

      <!-- Hamburger -->
      <div class="md:hidden flex items-center gap-2">
        <button
          @click="toggleTheme"
          class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
          :class="isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'"
        >
          <svg
            v-if="isDark"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </svg>
          <svg
            v-else
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>
        <button
          class="flex flex-col gap-1.5 p-2 rounded-lg transition-colors"
          :class="isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span
            class="block w-5 h-0.5 transition-all duration-300"
            :class="[isDark ? 'bg-white' : 'bg-black', isMenuOpen ? 'rotate-45 translate-y-2' : '']"
          />
          <span
            class="block w-5 h-0.5 transition-all duration-300"
            :class="[isDark ? 'bg-white' : 'bg-black', isMenuOpen ? 'opacity-0' : '']"
          />
          <span
            class="block w-5 h-0.5 transition-all duration-300"
            :class="[
              isDark ? 'bg-white' : 'bg-black',
              isMenuOpen ? '-rotate-45 -translate-y-2' : '',
            ]"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden backdrop-blur-xl border-t px-6 py-6 transition-colors duration-300"
        :class="isDark ? 'bg-[#0d0d14]/95 border-white/5' : 'bg-white/95 border-black/5'"
      >
        <nav class="flex flex-col gap-4 mb-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="closeMenu"
            class="font-medium text-base transition-colors duration-200 py-1"
            :class="
              isDark ? 'text-white/60 hover:text-green-400' : 'text-black/60 hover:text-green-600'
            "
            style="font-family: 'DM Sans', sans-serif"
            >{{ link.label }}</a
          >
        </nav>
        <button
          @click="downloadCV"
          class="w-full py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all duration-200"
          style="font-family: 'Syne', sans-serif"
        >
          Download Resume
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme, initTheme } = useTheme()
const isMenuOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#about', label: 'About' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}
const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/cv/CHAVEZ_RESUME.pdf'
  link.download = 'CHAVEZ_RESUME.pdf'
  link.click()
}

onMounted(() => {
  initTheme()
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
