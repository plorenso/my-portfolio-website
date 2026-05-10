<template>
  <section
    class="relative transition-colors duration-300 border-y"
    :class="isDark ? 'bg-[#0d0d14] border-white/5' : 'bg-white border-black/5'"
  >
    <!-- Top Accent Line -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
    />

    <div class="max-w-6xl mx-auto px-6 py-14">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(item, index) in stats"
          :key="index"
          class="group rounded-2xl px-5 py-7 text-center transition-all duration-300 border"
          :class="
            isDark
              ? 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-green-500/20'
              : 'bg-black/[0.015] border-black/5 hover:bg-green-50/70 hover:border-green-300/40'
          "
        >
          <!-- Number -->
          <div
            class="text-4xl sm:text-5xl font-bold tracking-tight leading-none text-green-500"
            style="font-family: 'Syne', sans-serif"
          >
            {{ animatedValues[index] }}+
          </div>

          <!-- Label -->
          <p
            class="mt-3 text-sm font-medium transition-colors duration-300"
            :class="isDark ? 'text-white/40' : 'text-black/45'"
            style="font-family: 'Syne', sans-serif"
          >
            {{ item.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()

const stats = [
  { value: 12, label: 'Achievements' },
  { value: 5, label: 'Clients' },
  { value: 1, label: 'Year Experience' },
  { value: 10, label: 'Projects' },
]

const animatedValues = ref(stats.map(() => 0))

const animateCount = (index, target, duration = 1200) => {
  const frameRate = 30
  const totalFrames = Math.round(duration / frameRate)
  let frame = 0
  const counter = setInterval(() => {
    frame++
    animatedValues.value[index] = Math.round(target * Math.min(frame / totalFrames, 1))
    if (frame >= totalFrames) {
      animatedValues.value[index] = target
      clearInterval(counter)
    }
  }, frameRate)
}

onMounted(() => {
  stats.forEach((item, index) => setTimeout(() => animateCount(index, item.value), index * 150))
})
</script>
