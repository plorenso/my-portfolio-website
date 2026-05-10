<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center overflow-hidden transition-colors duration-300"
    :class="isDark ? 'bg-[#0a0a0f]' : 'bg-[#f8faf9]'"
  >
    <!-- Background blobs -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] transition-opacity duration-300"
        :class="isDark ? 'opacity-20' : 'opacity-30'"
        style="background: radial-gradient(circle, #22c55e, transparent 70%)"
      />
      <div
        class="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] transition-opacity duration-300"
        :class="isDark ? 'opacity-15' : 'opacity-20'"
        style="background: radial-gradient(circle, #16a34a, transparent 70%)"
      />
      <!-- Grid -->
      <div
        class="absolute inset-0 transition-opacity duration-300"
        :class="isDark ? 'opacity-[0.04]' : 'opacity-[0.07]'"
        style="
          background-image:
            linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px);
          background-size: 60px 60px;
        "
      />
    </div>

    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-24 lg:py-0">
      <div class="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
        <!-- Text -->
        <div class="flex-1 space-y-7 text-center lg:text-left">
          <!-- Pill badge -->
          <div
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm transition-colors duration-300"
            :class="isDark ? 'border-white/10 bg-white/5' : 'border-green-200 bg-green-50'"
          >
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span class="text-sm font-medium tracking-widest text-green-500 uppercase font-mono"
              >Available for work</span
            >
          </div>

          <!-- Name -->
          <div>
            <p
              class="text-lg tracking-wide mb-1 font-light transition-colors duration-300"
              :class="isDark ? 'text-white/50' : 'text-black/40'"
              style="font-family: 'DM Sans', sans-serif"
            >
              Hello, you can call me
            </p>
            <h1
              class="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-[-0.04em] transition-colors duration-300"
              :class="isDark ? 'text-white' : 'text-[#0a0a0f]'"
              style="font-family: 'Syne', sans-serif"
            >
              Florence<span class="text-green-500">.</span>
            </h1>
          </div>

          <!-- Tagline -->
          <h2
            class="text-xl sm:text-2xl font-medium leading-snug max-w-lg mx-auto lg:mx-0 transition-colors duration-300"
            :class="isDark ? 'text-white/70' : 'text-black/60'"
            style="font-family: 'DM Sans', sans-serif"
          >
            Building
            <span class="relative inline-block mx-1">
              <span class="relative z-10 text-green-500 font-bold">experiences</span>
              <span class="absolute bottom-0 left-0 w-full h-[6px] bg-green-400/20 rounded" />
            </span>
            beyond
            <span class="relative inline-block mx-1">
              <span class="relative z-10 text-green-500 font-bold">screens</span>.
              <span class="absolute bottom-0 left-0 w-full h-[6px] bg-green-400/20 rounded" />
            </span>
          </h2>

          <!-- Bio -->
          <p
            class="text-base leading-relaxed max-w-md mx-auto lg:mx-0 transition-colors duration-300"
            :class="isDark ? 'text-white/40' : 'text-black/45'"
            style="font-family: 'DM Sans', sans-serif"
          >
            A Junior Developer with a strong drive and perseverance to achieve my dreams — turning
            ideas into clean, functional interfaces.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-2">
            <a
              href="#about"
              class="px-7 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:scale-[1.03] active:scale-[0.98]"
              style="font-family: 'Syne', sans-serif"
              >Contact Me</a
            >
            <a
              href="#projects"
              class="group flex items-center gap-2 px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border"
              :class="
                isDark
                  ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white hover:border-green-500/40'
                  : 'border-black/10 bg-black/5 hover:bg-black/10 text-black/70 hover:text-black hover:border-green-500/40'
              "
              style="font-family: 'Syne', sans-serif"
            >
              View Work
              <svg
                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <!-- Socials -->
          <div class="flex items-center gap-5 justify-center lg:justify-start">
            <span
              class="text-xs tracking-widest uppercase font-mono transition-colors duration-300"
              :class="isDark ? 'text-white/20' : 'text-black/25'"
              >Let’s Connect</span
            >
            <div class="h-px w-8" :class="isDark ? 'bg-white/10' : 'bg-black/10'" />
            <div class="flex gap-4">
              <a
                href="mailto:markflorencechavez017@email.com"
                class="transition-all duration-200 hover:-translate-y-0.5"
                :class="
                  isDark
                    ? 'text-white/30 hover:text-green-400'
                    : 'text-black/30 hover:text-green-600'
                "
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16v12H4z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4 7 8 6 8-6" />
                </svg>
              </a>
              <a
                href="https://github.com/plorenso"
                class="transition-colors duration-200"
                :class="
                  isDark
                    ? 'text-white/30 hover:text-green-400'
                    : 'text-black/30 hover:text-green-600'
                "
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/mark-florence-chavez"
                class="transition-colors duration-200"
                :class="
                  isDark
                    ? 'text-white/30 hover:text-green-400'
                    : 'text-black/30 hover:text-green-600'
                "
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="flex-shrink-0 flex justify-center lg:justify-end">
          <div class="relative">
            <div
              class="absolute inset-[-12px] rounded-[2rem] border border-green-500/20 rotate-3"
            />
            <div
              class="absolute inset-[-24px] rounded-[2.5rem] border rotate-[-2deg] transition-colors duration-300"
              :class="isDark ? 'border-white/5' : 'border-black/5'"
            />

            <div
              class="relative w-64 h-72 sm:w-72 sm:h-80 xl:w-80 xl:h-96 rounded-[1.75rem] overflow-hidden shadow-2xl profile-float transition-shadow duration-300"
              :class="isDark ? 'shadow-black/60' : 'shadow-green-900/10'"
              :style="`border: 1.5px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`"
            >
              <div
                class="absolute inset-0 z-10"
                :style="`background: linear-gradient(160deg, transparent 50%, ${isDark ? 'rgba(10,10,15,0.6)' : 'rgba(240,253,244,0.5)'} 100%)`"
              />
              <!-- Image Container -->
              <div
                class="relative w-64 sm:w-72 xl:w-80 rounded-[1.75rem] overflow-hidden shadow-2xl about-float transition-colors duration-500"
                :class="
                  isDark
                    ? 'shadow-black/60 border border-white/10'
                    : 'shadow-black/10 border border-black/10'
                "
                style="aspect-ratio: 3/4"
              >
                <!-- Overlay -->
                <div
                  class="absolute inset-0 z-20 transition-all duration-500"
                  :class="
                    isDark
                      ? 'bg-gradient-to-br from-transparent to-black/40'
                      : 'bg-gradient-to-br from-transparent to-black/10'
                  "
                />

                <!-- Smooth Image Transition -->
                <transition name="fade" mode="out-in">
                  <img
                    :key="profileImage"
                    :src="profileImage"
                    alt="Florence's Picture"
                    class="w-full h-full object-cover object-center absolute inset-0"
                  />
                </transition>
              </div>
              <div class="absolute bottom-4 left-4 right-4 z-20">
                <div
                  class="flex items-center gap-2 backdrop-blur-md rounded-xl px-3 py-2 border transition-colors duration-300"
                  :class="isDark ? 'bg-black/40 border-white/10' : 'bg-white/70 border-black/10'"
                >
                  <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <div>
                    <p
                      class="text-xs font-bold transition-colors duration-300"
                      :class="isDark ? 'text-white' : 'text-black'"
                      style="font-family: 'Syne', sans-serif"
                    >
                      Mark Florence P. Chavez
                    </p>
                    <p
                      class="text-[10px] font-mono transition-colors duration-300"
                      :class="isDark ? 'text-white/40' : 'text-black/40'"
                    >
                      Junior Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="absolute -top-4 -right-4 bg-green-500 text-black text-xs font-black px-3 py-1.5 rounded-full shadow-lg shadow-green-500/30 rotate-6"
              style="font-family: 'Syne', sans-serif"
            >
              Open to roles
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
    >
      <span
        class="text-[10px] tracking-[0.3em] uppercase font-mono transition-colors duration-300"
        :class="isDark ? 'text-white' : 'text-black'"
        >Scroll</span
      >
      <div
        class="w-px h-10 animate-bounce transition-colors duration-300"
        :class="
          isDark
            ? 'bg-gradient-to-b from-white to-transparent'
            : 'bg-gradient-to-b from-black to-transparent'
        "
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
import togaPic from '@/assets/images/CHAVEZ_PUP_TOGA.jpg'
import sablayPic from '@/assets/images/CHAVEZ_PUP_SABLAY.jpg'

const { isDark } = useTheme()

const profileImage = computed(() => {
  return isDark.value ? togaPic : sablayPic
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');
.profile-float {
  animation: floatUpDown 4s ease-in-out infinite;
}
@keyframes floatUpDown {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-14px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(1.02);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
