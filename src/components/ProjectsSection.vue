<template>
  <section class="projects" id="projects">
    <h4>PROJECTS</h4>
    <h1>My <span class="highlight">Works</span></h1>

    <div class="project-list">
      <div
        class="project-entry"
        v-for="(project, index) in projects"
        :key="project.title"
        :class="{ reverse: index % 2 !== 0 }"
      >
        <div class="project-text">
          <h3>{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>

          <div class="features">
            <h5>Key Features:</h5>
            <ul>
              <li v-for="feature in project.features" :key="feature" class="feature-item">
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="tech-stack">
            <h5>Tags:</h5>
            <span v-for="tech in project.tag" :key="tech" class="tech-badge">{{ tech }}</span>
          </div>

          <div class="buttons">
            <a v-if="project.demo" :href="project.demo" target="_blank" aria-label="View Demo">
              <ExternalLink class="icon" /> View Demo
            </a>
            <a
              v-if="project.code"
              :href="project.code"
              target="_blank"
              aria-label="View GitHub Code"
            >
              <Github class="icon" /> GitHub
            </a>
          </div>
        </div>

        <div class="project-image">
          <img :src="project.image" :alt="project.title" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Github, ExternalLink } from 'lucide-vue-next'
import oneGracevilleAdmin from '@/assets/images/one-graceville-admin.png'
import oneGracevilleUser from '@/assets/images/one-graceville-user.png'
import portfolioWebsite from '@/assets/images/my-portfolio-website.png'
import appleWebsite from '@/assets/images/apple-web.png'
import angelsBurgerPOS from '@/assets/images/angels-burger-pos.png'
import pawSome from '@/assets/images/PAWsome.png'
import pupLearn from '@/assets/images/PUPLearn+.png'
import pupRE from '@/assets/images/PUP-RE-website.png'
import tourEZ from '@/assets/images/tourEZ.png'

const projects = [
  {
    title: 'Apple Website Redesign',
    description:
      'Recreated a pixel-perfect clone of Apple’s official website to sharpen my front-end development and UI/UX design skills. The project emphasizes clean layouts and minimalistic design—true to Apple’s brand aesthetic.',
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
      'PUPLearn+ is a Learning Management System (LMS) designed for the Polytechnic University of the Philippines. It features dedicated modules for faculty, students, and parents—making education more accessible, organized, and collaborative.',
    image: pupLearn,
    demo: '#',
    code: '#',
    features: [
      'Role-Based Access Control (Faculty, Student, Parent)',
      'Dashboard',
      'Attendance',
      'Exam',
      'Question Bank',
      'Grades',
      'Profile',
      'Settings',
    ],
    tag: ['Figma', 'UI/UX Design', 'Web Design'],
  },
  {
    title: 'PUP Railway Engineering Management Accreditation Website',
    description:
      'PUP Railway Engineering Management Accreditation Website is a centralized platform designed to support the accreditation process of the Railway Engineering Management program at the Polytechnic University of the Philippines. It streamlines document submission, tracks evaluation progress, and provides easy access to accreditation resources for faculty, assessors, and administrators.',
    image: pupRE,
    demo: '#',
    code: '#',
    features: ['View PUP BSRE Files', 'View Flipbook Magazines', 'View Certifications'],
    tag: ['Wix Studio', 'HTML', 'CSS', 'JavaScript', 'Web Design'],
  },
  {
    title: 'Angels Burger POS Mobile Application',
    description:
      'Angels Burger POS is a mobile Point-of-Sale application designed to streamline ordering, inventory tracking, and sales monitoring for Angels Burger kiosks. Fast, efficient, and easy to use—built for on-the-go operations.',
    image: angelsBurgerPOS,
    demo: '#',
    code: '#',
    features: ['Order Management', 'Inventory Management', 'Real-Time Sales Tracking'],
    tag: ['Figma', 'UI/UX Design', 'Mobile App Design'],
  },
  {
    title: 'TourEZ',
    description:
      'TourEZ is an all-in-one mobile app that simplifies travel. Easily book hotels, schedule transportation, explore tourist spots, and get guided assistance—making every trip smooth and stress-free.',
    image: tourEZ,
    demo: '#',
    code: '#',
    features: [
      'Hotel Booking',
      'Transportation Scheduler',
      'Tourist Spot Explorer',
      ' Trip Planner',
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
      'Role-Based Access Control (User, Admin, Super Admin)',
      'Dashboard with real-time ambulance and hotline status',
      'Publish community announcements',
      'Resident and family record management',
      'Automated Certificate Issuance',
      'Inventory and official management',
      'User and admin account control',
    ],
    tag: ['Vue 3', 'PrimeVue', 'Django', 'MySQL'],
  },
  {
    title: 'ONE Graceville: User Portal',
    description:
      'The resident-side interface of ONE Graceville that allows users to access barangay services digitally.',
    image: oneGracevilleUser,
    demo: '#',
    code: '#',
    features: [
      'Announcements Feed',
      'Online Document Requests',
      'Request Transaction History',
      'Emergency Hotline Access',
      'Live Ambulance Status',
      'Instant Printable Certificate Generation',
      'Email Notifications',
      'Resident-Only Registration',
    ],
    tag: ['Vue 3', 'PrimeVue', 'Django', 'MySQL'],
  },
]
</script>

<style scoped>
.projects {
  padding: 4rem 2rem;
  background-color: #fdfdfd;
}

.projects h4 {
  text-align: center;
  color: #999;
  letter-spacing: 2px;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.projects h1 {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #212529;
  margin-bottom: 1.5rem;
}

.highlight {
  font-weight: 700;
  color: #4caf50;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.project-entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.project-entry.reverse {
  flex-direction: row-reverse;
}

.project-text {
  flex: 1;
  min-width: 280px;
  padding: 1rem;
}

.project-text h3 {
  font-size: 1.8rem;
  font-weight: 500;
  color: #222;
  margin-bottom: 1rem;
}

.project-text .description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.features,
.tech-stack {
  margin-bottom: 1rem;
}

.features h5,
.tech-stack h5 {
  font-size: 0.95rem;
  color: #333;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.feature-item {
  font-size: 0.85rem;
  color: #555;
  margin-left: -1.5rem;
  margin-bottom: 0.3rem;
  list-style-type: disc;
}

.tech-badge {
  background-color: #e8f5e9;
  color: #2e7d32;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  margin: 0 0.4rem 0.4rem 0;
  display: inline-block;
}

.buttons a {
  text-decoration: none;
  margin-right: 1rem;
  background-color: #4caf50;
  color: #fff;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.buttons a:hover {
  background-color: #388e3c;
  transform: scale(1.03);
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 0.4em;
  vertical-align: middle;
}

.project-image {
  aspect-ratio: 4 / 5;
  max-width: 500px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 768px) {
  .project-entry,
  .project-entry.reverse {
    flex-direction: column;
  }

  .project-text,
  .project-image {
    width: 100%;
  }

  .project-text {
    padding: 0;
  }
}
</style>
