<template>
  <section class="achievements" id="achievements">
    <h4>ACCOMPLISHMENTS</h4>
    <h1>My <span class="highlight">Achievements</span></h1>
    <p class="description">
      A collection of personal achievements that reflect my journey, growth, and dedication to tech.
    </p>

    <div class="achievement-list">
      <div
        class="achievement-card"
        v-for="(achievement, index) in achievements"
        :key="index"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <div class="icon">
          <component :is="achievement.icon" class="lucide-icon" />
        </div>
        <div class="text">
          <h3>{{ achievement.title }}</h3>
          <p>{{ achievement.description }}</p>
          <small>{{ achievement.date }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Award, FileCode2, GraduationCap, Trophy } from 'lucide-vue-next'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

const achievements = [
  {
    icon: FileCode2,
    title: 'Programming JAVA NC III',
    description: 'Completed TESDA’s 40-day Java training with institutional assessment.',
    date: '2023',
  },
  {
    icon: GraduationCap,
    title: 'Certified Web Developer',
    description: 'Graduated from a full-stack web dev bootcamp at XYZ Academy.',
    date: 'December 2023',
  },
  {
    icon: Award,
    title: 'Capstone Project Excellence',
    description: 'Barangay Information System awarded Best Capstone Project.',
    date: 'May 2025',
  },
  {
    icon: Trophy,
    title: 'Coding Contest Champion',
    description: 'Won 1st place in a university-wide algorithm competition.',
    date: 'March 2024',
  },
]
</script>

<style scoped>
.achievements {
  padding: 4rem 2rem;
  background-color: #ffffff;
  text-align: center;
}

.achievements h4 {
  font-weight: 500;
  color: #b4b2c5;
  letter-spacing: 2px;
}

.achievements h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 1rem;
}

.highlight {
  color: #4caf50;
}

.description {
  max-width: 700px;
  margin: 0 auto 2.5rem;
  color: #555;
  font-size: 1rem;
}

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.achievement-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: #f9f9f9;
  border-left: 4px solid #4caf50;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-4px);
}

.icon {
  flex-shrink: 0;
}

.lucide-icon {
  width: 36px;
  height: 36px;
  color: #4caf50;
}

.text h3 {
  margin: 0 0 0.4rem;
  font-size: 1.25rem;
  color: #212529;
}

.text p {
  margin: 0 0 0.4rem;
  color: #555;
  font-size: 0.95rem;
}

.text small {
  font-size: 0.8rem;
  color: #999;
}

@media (max-width: 768px) {
  .achievement-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text {
    margin-top: 0.5rem;
  }
}
</style>
