<template>
  <section
    id="skills"
    class="relative py-24 overflow-hidden transition-colors duration-300"
    :class="isDark ? 'bg-[#0a0a0f]' : 'bg-[#f8faf9]'"
  >
    <div
      class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none transition-opacity duration-300"
      :class="isDark ? 'opacity-10' : 'opacity-20'"
      style="background: radial-gradient(circle, #22c55e, transparent 70%)"
    />

    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block text-xs font-mono tracking-[0.3em] text-green-500 uppercase mb-3"
          >Expertise</span
        >
        <h2
          class="text-4xl sm:text-5xl font-bold tracking-tight leading-none transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-[#0a0a0f]'"
          style="font-family: 'Syne', sans-serif"
        >
          Tech Stack
        </h2>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(skill, index) in skillCategories"
          :key="index"
          class="group relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1"
          :class="
            isDark
              ? 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-green-500/20'
              : 'border-black/5 bg-white hover:bg-green-50/60 hover:border-green-300/50 shadow-sm hover:shadow-md shadow-black/5'
          "
        >
          <!-- Card header -->
          <div class="flex items-center gap-3 mb-5">
            <div
              class="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400"
            >
              <component :is="skill.icon" class="w-5 h-5 stroke-[2]" />
            </div>
            <h3
              class="text-sm font-bold tracking-wide transition-colors duration-300"
              :class="isDark ? 'text-white/80' : 'text-black/70'"
              style="font-family: 'Syne', sans-serif"
            >
              {{ skill.title }}
            </h3>
          </div>

          <!-- Skill pills -->
          <div class="flex flex-wrap gap-2">
            <div
              v-for="(item, i) in skill.items"
              :key="i"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-default"
              :class="
                isDark
                  ? 'bg-white/5 border-white/5 hover:border-green-500/30 hover:bg-green-500/5'
                  : 'bg-black/[0.03] border-black/5 hover:border-green-400/40 hover:bg-green-50'
              "
            >
              <img
                :src="item.img"
                :alt="item.name"
                class="w-4 h-4 object-contain"
                @error="(e) => (e.target.src = defaultIcon)"
              />
              <span
                class="text-xs font-medium transition-colors duration-300"
                :class="isDark ? 'text-white/60' : 'text-black/60'"
                style="font-family: 'DM Sans', sans-serif"
                >{{ item.name }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Hire Me -->
      <div class="flex justify-center mt-14">
        <a
          href="#about"
          class="group flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:scale-[1.03] active:scale-[0.98]"
          style="font-family: 'Syne', sans-serif"
        >
          Hire Me
          <!-- <svg
            class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg> -->
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'
import {
  IconWorld,
  IconStack2,
  IconDatabase,
  IconCode,
  IconPalette,
  IconGitBranch,
} from '@tabler/icons-vue'
// Web development icons
import htmlIcon from '@/assets/images/html.png'
import cssIcon from '@/assets/images/css.png'
import jsIcon from '@/assets/images/javascript.png'
import phpIcon from '@/assets/images/php.png'
// Database icons
import mysqlIcon from '@/assets/images/mysql.png'
import postgresqlIcon from '@/assets/images/postgresql.png'
import xamppIcon from '@/assets/images/xampp.png'
import accessIcon from '@/assets/images/access.png'
// Programming language icons
import cIcon from '@/assets/images/C Programming.png'
import cppIcon from '@/assets/images/C++.png'
import javaIcon from '@/assets/images/java.png'
import pythonIcon from '@/assets/images/python.png'
// Frameworks & libraries icons
import codeigniterIcon from '@/assets/images/codeigniter.png'
import djangoIcon from '@/assets/images/django.png'
import vueIcon from '@/assets/images/vue.png'
import primevueIcon from '@/assets/images/primevue.png'
import tailwindIcon from '@/assets/images/tailwind.png'
import bootstrapIcon from '@/assets/images/bootstrap.png'
// UI & UX design icons
import figmaIcon from '@/assets/images/figma.png'
import illustratorIcon from '@/assets/images/illustrator.png'
import photoshopIcon from '@/assets/images/photoshop.png'
// Version control & Tools icons
import gitIcon from '@/assets/images/git.png'
import githubIcon from '@/assets/images/github.png'
import dockerIcon from '@/assets/images/docker.png'
import ghl from '@/assets/images/ghl.png'
import wix from '@/assets/images/wix.png'

const { isDark } = useTheme()
const defaultIcon = 'https://via.placeholder.com/30?text=?'

const skillCategories = [
  {
    title: 'Web Development',
    icon: IconWorld,
    items: [
      { name: 'HTML', img: htmlIcon },
      { name: 'CSS', img: cssIcon },
      { name: 'JavaScript', img: jsIcon },
      { name: 'PHP', img: phpIcon },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: IconStack2,
    items: [
      { name: 'CodeIgniter', img: codeigniterIcon },
      { name: 'Django', img: djangoIcon },
      { name: 'Vue.js', img: vueIcon },
      { name: 'PrimeVue', img: primevueIcon },
      { name: 'Tailwind CSS', img: tailwindIcon },
      { name: 'Bootstrap', img: bootstrapIcon },
    ],
  },
  {
    title: 'Database Management',
    icon: IconDatabase,
    items: [
      { name: 'MySQL', img: mysqlIcon },
      { name: 'PostgreSQL', img: postgresqlIcon },
      { name: 'XAMPP', img: xamppIcon },
      { name: 'MS Access', img: accessIcon },
    ],
  },
  {
    title: 'Programming Languages',
    icon: IconCode,
    items: [
      { name: 'C', img: cIcon },
      { name: 'C++', img: cppIcon },
      { name: 'Java', img: javaIcon },
      { name: 'Python', img: pythonIcon },
    ],
  },
  {
    title: 'UI & UX Design',
    icon: IconPalette,
    items: [
      { name: 'Figma', img: figmaIcon },
      { name: 'Adobe Illustrator', img: illustratorIcon },
      { name: 'Adobe Photoshop', img: photoshopIcon },
    ],
  },
  {
    title: 'Version Control & Tools',
    icon: IconGitBranch,
    items: [
      { name: 'Git', img: gitIcon },
      { name: 'GitHub', img: githubIcon },
      { name: 'Docker', img: dockerIcon },
      { name: 'GoHighLevel', img: ghl },
      { name: 'Wix Studio', img: wix },
    ],
  },
]
</script>
