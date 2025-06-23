<template>
  <section class="skills" id="skills">
    <h4>EXPERTISE</h4>
    <h1>My <span class="highlight">Tech Stacks</span></h1>
    <div class="skills-cards">
      <div class="card" v-for="(skill, index) in skillCategories" :key="index">
        <h3>{{ skill.title }}</h3>
        <ul>
          <li v-for="(item, i) in skill.items" :key="i">
            <img :src="item.img" :alt="item.name" @error="(e) => (e.target.src = defaultIcon)" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="hire-button">
      <button>Hire Me</button>
    </div>
  </section>
</template>

<script setup>
import htmlIcon from '@/assets/images/html.png'
import cssIcon from '@/assets/images/css.png'
import jsIcon from '@/assets/images/javascript.png'
import phpIcon from '@/assets/images/php.png'

import mysqlIcon from '@/assets/images/mysql.png'
import xamppIcon from '@/assets/images/xampp.png'
import accessIcon from '@/assets/images/access.png'

import cIcon from '@/assets/images/C Programming.png'
import cppIcon from '@/assets/images/C++.png'
import javaIcon from '@/assets/images/java.png'

import codeigniterIcon from '@/assets/images/codeigniter.png'
import djangoIcon from '@/assets/images/django.png'
import vueIcon from '@/assets/images/vue.png'
import primevueIcon from '@/assets/images/primevue.png'
import tailwindIcon from '@/assets/images/tailwind.png'
import bootstrapIcon from '@/assets/images/bootstrap.png'

import figmaIcon from '@/assets/images/figma.png'
import illustratorIcon from '@/assets/images/illustrator.png'
import photoshopIcon from '@/assets/images/photoshop.png'

import gitIcon from '@/assets/images/git.png'
import githubIcon from '@/assets/images/github.png'

const defaultIcon = 'https://via.placeholder.com/30?text=?'

const skillCategories = [
  {
    title: 'Web Development',
    items: [
      { name: 'HTML', img: htmlIcon },
      { name: 'CSS', img: cssIcon },
      { name: 'JavaScript', img: jsIcon },
      { name: 'PHP', img: phpIcon },
    ],
  },
  {
    title: 'Frameworks & Libraries',
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
    items: [
      { name: 'MySQL', img: mysqlIcon },
      { name: 'XAMPP', img: xamppIcon },
      { name: 'MS Access', img: accessIcon },
    ],
  },
  {
    title: 'Programming Languages',
    items: [
      { name: 'C', img: cIcon },
      { name: 'C++', img: cppIcon },
      { name: 'Java', img: javaIcon },
    ],
  },
  {
    title: 'UI & UX Design',
    items: [
      { name: 'Figma', img: figmaIcon },
      { name: 'Adobe Illustrator', img: illustratorIcon },
      { name: 'Adobe Photoshop', img: photoshopIcon },
    ],
  },
  {
    title: 'Version Control',
    items: [
      { name: 'Git', img: gitIcon },
      { name: 'GitHub', img: githubIcon },
    ],
  },
]
</script>

<style scoped>
.skills {
  padding: 4rem 2rem;
  background-color: #fdfdfd;
  text-align: center;
}

.skills h4 {
  font-weight: 500;
  color: #b4b2c5;
  letter-spacing: 3px;
}

.skills h2 {
  font-size: 1.5rem;
  color: #888;
  margin-bottom: 0.5rem;
}

.skills h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 1.5rem;
}

.highlight {
  font-weight: 700;
  color: #4caf50;
}

.description {
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1rem;
  color: #555;
}

.skills-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* tighter gap */
  justify-content: center;
  max-width: 900px; /* fits 3 cards of 280px + gaps */
  margin: 2rem auto 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  width: 280px;
  height: 350px;
  text-align: center;
  opacity: 0;
  cursor: pointer;
  animation: fadeInUp 0.8s ease forwards;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.skills-cards .card:nth-child(1) {
  animation-delay: 0.1s;
}
.skills-cards .card:nth-child(2) {
  animation-delay: 0.2s;
}
.skills-cards .card:nth-child(3) {
  animation-delay: 0.3s;
}
.skills-cards .card:nth-child(4) {
  animation-delay: 0.4s;
}
.skills-cards .card:nth-child(5) {
  animation-delay: 0.5s;
}
.skills-cards .card:nth-child(6) {
  animation-delay: 0.6s;
}

.card h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
}

.card ul {
  align-items: center;
  list-style: none;
  padding: 0;
}

.card li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.card img {
  height: 30px;
  width: 30px;
  object-fit: contain;
}

.card span {
  color: #212529;
}

.hire-button {
  margin-top: 2rem;
}

.hire-button button {
  padding: 0.75rem 1.5rem;
  background-color: #4caf50;
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.hire-button button:hover {
  background-color: #388e3c;
}
</style>
