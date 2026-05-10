<template>
  <section
    id="projects"
    class="relative py-24 overflow-hidden transition-colors duration-300"
    :class="isDark ? 'bg-[#0d0d14]' : 'bg-white'"
  >
    <div
      class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none transition-opacity duration-300"
      :class="isDark ? 'opacity-10' : 'opacity-15'"
      style="background: radial-gradient(circle, #22c55e, transparent 70%)"
    />

    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="inline-block text-xs font-mono tracking-[0.3em] text-green-500 uppercase mb-3"
          >Portfolio</span
        >
        <h2
          class="text-4xl sm:text-5xl font-bold tracking-tight leading-none transition-colors duration-300"
          :class="isDark ? 'text-white' : 'text-[#0a0a0f]'"
          style="font-family: 'Syne', sans-serif"
        >
          Featured Works
        </h2>
      </div>

      <!-- Projects -->
      <div class="flex flex-col gap-20">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          :class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
        >
          <!-- Text -->
          <div class="flex-1 space-y-5">
            <span
              class="inline-flex items-center text-[11px] font-medium tracking-[0.2em] uppercase transition-colors duration-300"
              :class="isDark ? 'text-white/25' : 'text-black/30'"
              style="font-family: 'DM Sans', sans-serif"
            >
              {{ String(index + 1).padStart(2, '0') }}

              <span class="mx-2 w-5 h-px bg-green-400/40"></span>

              {{ String(projects.length).padStart(2, '0') }}
            </span>

            <h3
              class="text-2xl sm:text-3xl font-bold leading-tight tracking-tight transition-colors duration-300"
              :class="isDark ? 'text-white' : 'text-[#0a0a0f]'"
              style="font-family: 'Syne', sans-serif"
            >
              {{ project.title }}
            </h3>

            <p
              class="text-sm sm:text-[15px] leading-relaxed max-w-2xl transition-colors duration-300"
              :class="isDark ? 'text-white/50' : 'text-black/55'"
              style="font-family: 'DM Sans', sans-serif"
            >
              {{ project.description }}
            </p>

            <!-- Features -->
            <div>
              <p
                class="text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300"
                :class="isDark ? 'text-white/30' : 'text-black/30'"
                style="font-family: 'Syne', sans-serif"
              >
                Key Features
              </p>
              <ul class="flex flex-wrap gap-x-4 gap-y-1">
                <li
                  v-for="feature in project.features"
                  :key="feature"
                  class="flex items-center gap-1.5 text-xs transition-colors duration-300"
                  :class="isDark ? 'text-white/50' : 'text-black/50'"
                  style="font-family: 'DM Sans', sans-serif"
                >
                  <span class="w-1 h-1 rounded-full bg-green-400/60 flex-shrink-0" />
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tag"
                :key="tech"
                class="px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300"
                :class="
                  isDark
                    ? 'bg-green-500/10 text-green-400 border-green-500/20'
                    : 'bg-green-50 text-green-700 border-green-200'
                "
                style="font-family: 'DM Sans', sans-serif"
                >{{ tech }}</span
              >
            </div>

            <!-- Buttons -->
            <div class="flex flex-wrap gap-3 pt-1">
              <a
                v-if="project.demo && project.demo !== '#'"
                :href="project.demo"
                target="_blank"
                class="group flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-black font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03]"
                style="font-family: 'Syne', sans-serif"
              >
                <ExternalLink class="w-4 h-4" /> View Demo
              </a>
              <a
                v-if="project.code && project.code !== '#'"
                :href="project.code"
                target="_blank"
                class="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:scale-[1.03]"
                :class="
                  isDark
                    ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white hover:border-green-500/30'
                    : 'border-black/10 bg-black/[0.03] hover:bg-black/[0.06] text-black/60 hover:text-black hover:border-green-400/40'
                "
                style="font-family: 'Syne', sans-serif"
              >
                <Github class="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

          <!-- Image -->
          <div class="flex-1 w-full max-w-lg lg:max-w-none">
            <button
              type="button"
              @click="openPreview(project)"
              class="relative group rounded-2xl overflow-hidden border shadow-2xl transition-all duration-300 cursor-pointer w-full text-left"
              :class="isDark ? 'border-white/5 shadow-black/40' : 'border-black/5 shadow-black/10'"
            >
              <!-- Overlay -->
              <div
                class="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <div
                  class="px-4 py-2 rounded-xl backdrop-blur-md border text-sm font-semibold"
                  :class="
                    isDark
                      ? 'bg-white/10 border-white/10 text-white'
                      : 'bg-white/80 border-black/10 text-black'
                  "
                  style="font-family: 'DM Sans', sans-serif"
                >
                  Click to View
                </div>
              </div>

              <!-- Image -->
              <img
                :src="project.image"
                :alt="project.title"
                loading="lazy"
                class="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              <!-- Green Dot -->
              <div
                class="absolute top-3 right-3 z-20 w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </button>
          </div>

          <!-- Image Preview Modal -->
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-if="selectedProject"
              class="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
              @click="closePreview"
            >
              <div class="relative max-w-6xl w-full animate-preview" @click.stop>
                <!-- Close Button -->
                <button
                  @click="closePreview"
                  class="absolute -top-12 right-0 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200"
                >
                  ✕
                </button>

                <!-- Preview Image -->
                <img
                  :src="selectedProject.image"
                  :alt="selectedProject.title"
                  class="w-full max-h-[85vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
                />

                <!-- Title -->
                <div class="mt-4 text-center">
                  <h3
                    class="text-xl sm:text-2xl font-bold text-white"
                    style="font-family: 'Syne', sans-serif"
                  >
                    {{ selectedProject.title }}
                  </h3>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Github, ExternalLink } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'
const { isDark } = useTheme()

import oneGracevilleAdmin from '@/assets/images/one-graceville-admin.png'
import oneGracevilleUser from '@/assets/images/one-graceville-user.png'
import appleWebsite from '@/assets/images/apple-web.png'
import angelsBurgerPOS from '@/assets/images/angels-burger-pos.png'
import pawSome from '@/assets/images/PAWsome.png'
import pupLearn from '@/assets/images/PUPLearn+.png'
import pupRE from '@/assets/images/PUP-RE-website.png'
import tourEZ from '@/assets/images/TourEZ.png'

const projects = [
  {
    title: 'Apple Website Redesign',
    description:
      'Recreated a pixel-perfect clone of Apple official website to sharpen my front-end development and UI/UX design skills. Emphasizes clean layouts and minimalistic design—true to Apple brand aesthetic.',
    image: appleWebsite,
    demo: '#',
    code: '#',
    features: ['Home Page'],
    tag: ['Webflow', 'UI/UX Design', 'Web Design'],
  },
  {
    title: 'PAWsome',
    description:
      'PAWsome is a user-friendly website for adopting and selling puppies. Connect with trusted breeders or find your perfect pup — all in one place.',
    image: pawSome,
    demo: '#',
    code: '#',
    features: ['Home', 'About', 'Pricing', 'Contact', 'Buy Puppy', 'Adopt Puppy'],
    tag: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
  },
  {
    title: 'PUPLearn+',
    description:
      'A Learning Management System designed for the Polytechnic University of the Philippines with dedicated modules for faculty, students, and parents.',
    image: pupLearn,
    demo: '#',
    code: '#',
    features: [
      'Role-Based Access Control',
      'Dashboard',
      'Attendance',
      'Exam',
      'Question Bank',
      'Grades',
      'Profile',
    ],
    tag: ['Figma', 'UI/UX Design', 'Web Design'],
  },
  {
    title: 'PUP Railway Engineering Accreditation Website',
    description:
      'A centralized platform supporting the accreditation process of the Railway Engineering Management program at PUP. Streamlines document submission and tracks evaluation progress.',
    image: pupRE,
    demo: 'https://pupcedept.wixsite.com/re-accredit-lvl3-ph2',
    code: '#',
    features: ['View PUP BSREM Files', 'View Flipbook Magazines', 'View Certifications'],
    tag: ['Wix Studio', 'HTML', 'CSS', 'JavaScript', 'Web Design'],
  },
  {
    title: 'Angels Burger POS Mobile App',
    description:
      'A mobile Point-of-Sale application designed to streamline ordering, inventory tracking, and sales monitoring for Angels Burger kiosks.',
    image: angelsBurgerPOS,
    demo: '#',
    code: '#',
    features: ['Order Management', 'Inventory Management', 'Real-Time Sales Tracking'],
    tag: ['Figma', 'UI/UX Design', 'Mobile App Design'],
  },
  {
    title: 'TourEZ',
    description:
      'An all-in-one mobile app that simplifies travel — hotel bookings, transportation, tourist spot exploration, and guided assistance.',
    image: tourEZ,
    demo: '#',
    code: '#',
    features: [
      'Hotel Booking',
      'Transportation Scheduler',
      'Tourist Spot Explorer',
      'Trip Planner',
      'Messenger',
    ],
    tag: ['Figma', 'UI/UX Design', 'Mobile App Design'],
  },
  {
    title: 'ONE Graceville: Admin Panel',
    description:
      'A web-based Barangay Information Management System designed to streamline community operations and improve local governance efficiency.',
    image: oneGracevilleAdmin,
    demo: '#',
    code: '#',
    features: [
      'Role-Based Access Control',
      'Real-time Dashboard',
      'Announcements',
      'Resident Records',
      'Certificate Issuance',
      'Inventory Management',
    ],
    tag: ['Vue 3', 'PrimeVue', 'Django', 'MySQL'],
  },
  {
    title: 'ONE Graceville: User Portal',
    description:
      'The resident-side interface of ONE Graceville that allows users to access barangay services digitally — from document requests to emergency contacts.',
    image: oneGracevilleUser,
    demo: '#',
    code: '#',
    features: [
      'Announcements Feed',
      'Online Document Requests',
      'Transaction History',
      'Emergency Hotline',
      'Live Ambulance Status',
      'Email Notifications',
    ],
    tag: ['Vue 3', 'PrimeVue', 'Django', 'MySQL'],
  },
]

const selectedProject = ref(null)

const openPreview = (project) => {
  selectedProject.value = project
}

const closePreview = () => {
  selectedProject.value = null
}
</script>
<style scoped>
.animate-preview {
  animation: previewFade 0.25s ease;
}

@keyframes previewFade {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
