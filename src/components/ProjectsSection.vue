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
            <h5>Tech Stack:</h5>
            <span v-for="tech in project.techStack" :key="tech" class="tech-badge">{{ tech }}</span>
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
import oneGracevilleAdmin from '@/assets/images/one_graceville_admin.png'
import oneGracevilleUser from '@/assets/images/one_graceville_user.png'
import portfolioWebsite from '@/assets/images/my-portfolio-website.png'

const projects = [
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
    techStack: ['Vue 3', 'PrimeVue', 'Django', 'MySQL'],
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
    techStack: ['Vue 3', 'PrimeVue', 'Django', 'MySQL'],
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built using Vue 3 and PrimeVue to showcase development skills and completed projects.',
    image: portfolioWebsite,
    demo: '#',
    code: '#',
    features: [
      'Fully responsive UI design',
      'Project and skill showcase',
      'GitHub and social links integration',
      'Clean and minimal layout',
      'Built with reusable components',
    ],
    techStack: ['Vue 3', 'PrimeVue'],
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
  flex: 1;
  min-width: 280px;
}

.project-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
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
