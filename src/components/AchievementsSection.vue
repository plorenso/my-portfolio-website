<template>
  <section
    id="achievements"
    class="relative py-24 overflow-hidden transition-colors duration-300"
    :class="isDark ? 'bg-[#0a0a0f]' : 'bg-[#f8faf9]'"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-300"
      :class="isDark ? 'opacity-[0.06]' : 'opacity-[0.12]'"
      style="background: radial-gradient(circle, #22c55e, transparent 70%)"
    />

    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span
          class="inline-block text-xs font-medium tracking-[0.25em] text-green-500 uppercase mb-4"
          style="font-family: 'DM Sans', sans-serif"
        >
          Accomplishments
        </span>

        <h2
          class="text-4xl sm:text-5xl font-bold tracking-tight leading-none transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-[#0a0a0f]'"
          style="font-family: 'Syne', sans-serif"
        >
          Learning Milestones
        </h2>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(achievement, index) in achievements"
          :key="index"
          class="group relative flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
          :class="
            isDark
              ? 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-green-500/20'
              : 'border-black/5 bg-white hover:bg-green-50/60 hover:border-green-300/40 shadow-sm hover:shadow-md shadow-black/5'
          "
        >
          <div class="flex items-start justify-between">
            <div
              class="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0"
            >
              <component :is="achievement.icon" class="w-5 h-5 text-green-500" />
            </div>
            <span
              class="text-xs font-mono px-2 py-1 rounded-lg border transition-colors duration-300"
              :class="
                isDark
                  ? 'text-white/25 bg-white/5 border-white/5'
                  : 'text-black/30 bg-black/[0.03] border-black/5'
              "
            >
              {{ achievement.date }}
            </span>
          </div>

          <div>
            <h3
              class="text-sm font-bold mb-1.5 leading-snug transition-colors duration-300"
              :class="isDark ? 'text-white' : 'text-[#0a0a0f]'"
              style="font-family: 'Syne', sans-serif"
            >
              {{ achievement.title }}
            </h3>
            <p
              class="text-xs leading-relaxed transition-colors duration-300"
              :class="isDark ? 'text-white/40' : 'text-black/50'"
              style="font-family: 'DM Sans', sans-serif"
            >
              {{ achievement.description }}
            </p>
          </div>

          <!-- Hover accent line -->
          <div
            class="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'
import { Award, FileCode2, MonitorCog, Code, PenTool, Headset, SquareCode } from 'lucide-vue-next'

const { isDark } = useTheme()

const achievements = [
  {
    icon: Award,
    title: 'Diploma in Information Technology',
    description:
      'Graduated with Academic Excellence and consistently recognized as a President Lister throughout my Diploma in Information Technology journey.',
    date: '2022 – 2025',
  },

  {
    icon: FileCode2,
    title: 'Programming JAVA NC III',
    description:
      'Completed a 40-day TESDA training program and successfully passed the Institutional Assessment.',
    date: 'June 2023',
  },

  {
    icon: MonitorCog,
    title: 'Computer Systems Servicing NC II',
    description:
      'Completed a 40-day TESDA training program and successfully passed the National Assessment.',
    date: 'January 2024',
  },

  {
    icon: Code,
    title: 'Full-Stack Developer Intern',
    description:
      'Completed 300 hours of internship experience contributing to real-world frontend and backend development projects.',
    date: 'July 2024 – September 2024',
  },

  {
    icon: PenTool,
    title: 'Visual Graphic Design NC III',
    description:
      'Completed a 66-day TESDA training program and successfully passed the National Assessment.',
    date: 'December 2024',
  },

  {
    icon: Headset,
    title: 'Contact Center Services NC II',
    description:
      'Completed a 28-day TESDA training program and successfully passed the Institutional Assessment.',
    date: 'February 2024',
  },

  {
    icon: Code,
    title: 'System Automations & Web Development Intern',
    description:
      'Completed 300 hours of internship experience using GoHighLevel (GHL) for system automations, funnels, and website development.',
    date: 'March 2025 – May 2025',
  },

  {
    icon: SquareCode,
    title: 'Web Developer – AACCUP Accreditation',
    description:
      'Contributed as part of the development team for the PUP Railway Engineering Management Program accreditation website.',
    date: 'July 2025',
  },

  {
    icon: Award,
    title: 'Capstone Project Excellence',
    description:
      'PUP recognized the system to be part of their extension project 2026, for implementation in apartnered beneficiary community, enhancing the delivery of barangay services.',
    date: 'July 2025',
  },

  {
    icon: Award,
    title: 'Junior Web Developer',
    description:
      'Worked as a Junior Web Developer focused on frontend development, UI/UX enhancements, and building modern web solutions for real-world projects.',
    date: 'September 2025 - May 2026',
  },
]
</script>
