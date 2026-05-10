<template>
  <section
    id="about"
    class="relative py-24 overflow-hidden transition-colors duration-300"
    :class="isDark ? 'bg-[#0d0d14]' : 'bg-[#f8fafc]'"
  >
    <!-- Background Glow -->
    <div
      class="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
      style="background: radial-gradient(circle, #22c55e, transparent 70%)"
    />

    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <!-- IMAGE SIDE -->
        <div class="flex-shrink-0 flex justify-center">
          <div class="relative">
            <!-- Decorative Rings -->
            <div
              class="absolute inset-[-16px] rounded-[2rem] border border-green-500/15 rotate-3"
            />

            <div
              class="absolute inset-[-28px] rounded-[2.5rem] -rotate-2"
              :class="isDark ? 'border border-white/5' : 'border border-black/5'"
            />

            <!-- Image -->
            <!-- Image -->
            <div
              class="relative w-64 sm:w-72 xl:w-80 rounded-[1.75rem] overflow-hidden shadow-2xl about-float transition-all duration-500"
              :class="
                isDark
                  ? 'shadow-black/60 border border-white/10'
                  : 'shadow-black/10 border border-black/10'
              "
              style="aspect-ratio: 3/4"
            >
              <div
                class="absolute inset-0 z-10 transition-all duration-500"
                :class="
                  isDark
                    ? 'bg-gradient-to-br from-transparent to-black/40'
                    : 'bg-gradient-to-br from-transparent to-black/10'
                "
              />

              <!-- Smooth Image Transition -->
              <transition
                mode="out-in"
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 scale-[1.02]"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-[0.98]"
              >
                <img
                  :key="isDark"
                  :src="isDark ? togaPic : sablayPic"
                  alt="Florence Picture"
                  class="w-full h-full object-cover object-center"
                />
              </transition>
            </div>

            <!-- Floating Badge -->
            <div
              class="absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 shadow-xl transition-colors duration-300"
              :class="
                isDark ? 'bg-[#0d0d14] border border-white/10' : 'bg-white border border-black/5'
              "
            >
              <p class="text-2xl font-black text-green-400" style="font-family: 'Syne', sans-serif">
                1+
              </p>

              <p
                class="text-[10px] font-mono uppercase tracking-widest transition-colors duration-300"
                :class="isDark ? 'text-white/40' : 'text-black/40'"
              >
                Yr Experience
              </p>
            </div>
          </div>
        </div>

        <!-- CONTENT SIDE -->
        <div class="flex-1 space-y-7 text-center lg:text-left">
          <!-- Heading -->
          <div>
            <span
              class="inline-block text-xs font-medium tracking-[0.25em] text-green-400 uppercase mb-4"
              style="font-family: 'DM Sans', sans-serif"
            >
              About Me
            </span>

            <h2
              class="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight tracking-tight transition-colors duration-300 max-w-2xl"
              :class="isDark ? 'text-white' : 'text-[#0a0a0f]'"
              style="font-family: 'Syne', sans-serif"
            >
              Building modern digital experiences.
            </h2>
          </div>

          <!-- Description -->
          <div class="space-y-4">
            <p
              class="text-sm leading-relaxed transition-colors duration-300"
              :class="isDark ? 'text-white/50' : 'text-black/60'"
              style="font-family: 'DM Sans', sans-serif"
            >
              Hello! I'm Florence, a Junior Developer passionate about frontend development, backend
              development, and UI/UX design. I enjoy creating clean, responsive, and user-friendly
              applications that deliver meaningful digital experiences.
            </p>

            <p
              class="text-sm leading-relaxed transition-colors duration-300"
              :class="isDark ? 'text-white/50' : 'text-black/60'"
              style="font-family: 'DM Sans', sans-serif"
            >
              I graduated with a Diploma in Information Technology and I am currently pursuing a
              Bachelor's degree in Information Technology. As I continue growing in the tech field,
              I am constantly improving my skills, exploring modern technologies, and building
              projects that combine functionality and design.
            </p>
          </div>

          <!-- Stats -->
          <!-- <div class="grid grid-cols-3 gap-4 py-2">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="flex flex-col items-center lg:items-start p-4 rounded-2xl transition-all duration-300"
              :class="
                isDark
                  ? 'border border-white/5 bg-white/[0.02] hover:border-green-500/20 hover:bg-white/[0.05]'
                  : 'border border-black/5 bg-black/[0.02] hover:border-green-500/20 hover:bg-black/[0.03]'
              "
            >
              <span
                class="text-2xl font-black text-green-400"
                style="font-family: 'Syne', sans-serif"
              >
                {{ stat.value }}
              </span>

              <span
                class="text-[11px] font-medium mt-0.5 transition-colors duration-300"
                :class="isDark ? 'text-white/35' : 'text-black/40'"
                style="font-family: 'DM Sans', sans-serif"
              >
                {{ stat.label }}
              </span>
            </div>
          </div> -->

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <!-- Download CV -->
            <button
              @click="downloadCV"
              class="group flex items-center gap-2 px-7 py-3 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:scale-[1.03] active:scale-[0.98]"
              style="font-family: 'Syne', sans-serif"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
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

            <!-- Contact -->
            <a
              href="mailto:markflorencechavez017@gmail.com"
              class="group flex items-center gap-2 px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:border-green-500/30 hover:scale-[1.03]"
              :class="
                isDark
                  ? 'border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white'
                  : 'border border-black/10 bg-black/[0.03] hover:bg-black/[0.05] text-black/70 hover:text-black'
              "
              style="font-family: 'Syne', sans-serif"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="mt-24 border-t pt-8 transition-colors duration-300"
      :class="isDark ? 'border-white/5' : 'border-black/5'"
    >
      <div
        class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p
          class="text-xs font-mono transition-colors duration-300"
          :class="isDark ? 'text-white/20' : 'text-black/30'"
        >
          © 2025 Mark Florence Chavez. All rights reserved.
        </p>

        <div class="flex gap-6">
          <a
            v-for="link in footerLinks"
            :key="link.href"
            :href="link.href"
            class="text-xs font-mono transition-colors duration-200"
            :class="
              isDark ? 'text-white/20 hover:text-green-400' : 'text-black/30 hover:text-green-600'
            "
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'
import togaPic from '@/assets/images/CHAVEZ_PUP_TOGA.jpg'
import sablayPic from '@/assets/images/CHAVEZ_PUP_SABLAY.jpg'

const { isDark } = useTheme()

// const stats = [
//   { value: '1+', label: 'Years Learning' },
//   { value: '10+', label: 'Projects Built' },
//   { value: '100%', label: 'Dedication' },
// ]

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#about', label: 'About' },
]

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/cv/CHAVEZ_RESUME.pdf'
  link.download = 'CHAVEZ_RESUME.pdf'
  link.click()
}
</script>

<style scoped>
.about-float {
  animation: floatAbout 5s ease-in-out infinite;
}

@keyframes floatAbout {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}
</style>
