<template>
  <section class="projects" id="projects">
    <h4>PROJECTS</h4>
    <h1>My <span class="highlight">Works</span></h1>

    <div class="projects-grid">
      <div class="project-card" v-for="(project, index) in projects" :key="index">
        <img :src="project.image" :alt="project.title" />
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="buttons">
          <a v-if="project.demo" :href="project.demo" target="_blank">View Demo</a>
          <a v-if="project.code" :href="project.code" target="_blank">Source Code</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// const defaultImage = 'https://via.placeholder.com/300x200?text=Project'

const projects = [
  {
    title: 'One Graceville System',
    description:
      'A Barangay Information Management System with certificate requests, inventory, and admin control.',
    image: '@/assets/images/project1.png',
    demo: '#',
    code: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built using Vue 3 and PrimeVue to showcase skills and projects.',
    image: '@/assets/images/project2.png',
    demo: '#',
    code: '#',
  },
  {
    title: 'E-Commerce UI',
    description: 'A frontend UI for an online store made using Bootstrap and Vue.js.',
    image: '@/assets/images/project3.png',
    demo: '#',
    code: '#',
  },
]
</script>

<style scoped>
.projects {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.projects h4 {
  color: #b4b2c5;
  letter-spacing: 3px;
  font-weight: 500;
}

.projects h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.highlight {
  color: #4caf50;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.project-card {
  background: white;
  width: 300px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.project-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.project-card h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.2rem;
  color: #333;
}

.project-card p {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1rem;
  text-align: center;
}

.buttons a {
  text-decoration: none;
  margin: 0 0.5rem;
  color: white;
  background-color: #4caf50;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.buttons a:hover {
  background-color: #388e3c;
}
</style>
