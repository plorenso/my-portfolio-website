<template>
  <section class="projects" id="projects">
    <h4>PROJECTS</h4>
    <h1>My <span class="highlight">Works</span></h1>

    <div class="project-list">
      <div
        class="project-entry"
        v-for="(project, index) in projects"
        :key="index"
        :class="{ reverse: index % 2 !== 0 }"
      >
        <div class="project-text">
          <h3>{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>

          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>

          <div class="tech-stack">
            <span v-for="tech in project.techStack" :key="tech" class="tech-badge">{{ tech }}</span>
          </div>

          <div class="buttons">
            <a v-if="project.demo" :href="project.demo" target="_blank"> View Demo</a>
            <a v-if="project.code" :href="project.code" target="_blank"> Source Code</a>
          </div>
        </div>

        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import oneGraceville from '@/assets/images/one_graceville.png'

const projects = [
  {
    title: 'ONE Graceville',
    description:
      'ONE Graceville is a web-based Barangay Information Management System designed to streamline community operations. It includes modules for announcements, resident profiling, certificate requests, inventory tracking, and role-based admin control for managing users, officials, and system data.',
    image: oneGraceville,
    demo: '#',
    code: '#',
    tags: ['Capstone Project', 'Information System', 'Community System'],
    techStack: ['Vue 3', 'PrimeVue', 'Django', 'MySQL'],
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built using Vue 3 and PrimeVue to showcase skills and projects.',
    image: '@/assets/images/project2.png',
    demo: '#',
    code: '#',
    tags: ['Information System', 'Community Tool'],
    techStack: ['Vue 3', 'Django', 'MySQL', 'PrimeVue'],
  },
  {
    title: 'E-Commerce UI',
    description: 'A frontend UI for an online store made using Bootstrap and Vue.js.',
    image: '@/assets/images/project3.png',
    demo: '#',
    code: '#',
    tags: ['Information System', 'Community Tool'],
    techStack: ['Vue 3', 'Django', 'MySQL', 'PrimeVue'],
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
  text-align: center;
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

.tags {
  margin-bottom: 1rem;
}

.tag {
  background-color: #e0f7fa;
  color: #00796b;
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  margin: 0 0.4rem 0.4rem 0;
  display: inline-block;
}

.tech-stack {
  margin-bottom: 1.5rem;
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
  transition: background 0.3s ease;
  display: inline-block;
}

.buttons a:hover {
  background-color: #388e3c;
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
