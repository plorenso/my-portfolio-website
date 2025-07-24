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

import { Award, FileCode2, MonitorCog, Code, PenTool, Headset, SquareCode } from 'lucide-vue-next'

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

const achievements = [
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Consistent President Lister',
    date: '2022-2025',
  },
  {
    icon: FileCode2,
    title: 'Programming JAVA NC III',
    description:
      'Completed 40 days Programming JAVA NC III TESDA training passed the Institutional assessment.',
    date: 'June 2023',
  },
  {
    icon: MonitorCog,
    title: 'Computer Systems Servicing NC II Holder',
    description:
      'Completed 40 days Computer System Servicing TESDA training and passed the National assessment.',
    date: 'January 2024',
  },
  {
    icon: Code,
    title: 'Full-Stack Developer Intern',
    description:
      'Completed 300 hours of practical training as a Full-Stack Developer Intern, contributing to real-world projects involving both frontend and backend technologies.',
    date: 'February 2024',
  },
  {
    icon: PenTool,
    title: 'Visual Graphic Design NC III Holder',
    description:
      'Completed 66 days Visual Graphic Design TESDA training and passed the National assessment.',
    date: 'December 2024',
  },
  {
    icon: Headset,
    title: 'Contact Center Service NC II',
    description:
      'Completed 28 days Contact Center Servicing TESDA training and passed the Institutional assessment.',
    date: 'February 2024',
  },
  {
    icon: Code,
    title: 'System Automations and Web Developer Intern',
    description:
      'Completed 300 hours of practical training as a System Automations and Web Developer Intern, contributing to real-world projects using Go HighLevel (GHL) for building automations, funnels, and websites.',
    date: 'February 2024',
  },
  {
    icon: Award,
    title: 'Capstone Project Excellence',
    description:
      'PUP recognized the system to be part of their extension project 2026, for implementation in a partnered beneficiary community, enhancing the delivery of barangay services.',
    date: 'July 2025',
  },
  {
    icon: SquareCode,
    title: 'Web Developer',
    description:
      'Part of the team for AACCUP Accreditation of PUP College of Engineering, Railway Engineering Management Program',
    date: 'July 2025',
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
  margin-bottom: 0.5rem;
}

.achievements h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 1rem;
}

.highlight {
  font-weight: 700;
  color: #4caf50;
}

.description {
  max-width: 700px;
  margin: 0 auto 2.5rem;
  color: #555;
  font-size: 1rem;
}

.achievement-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.achievement-card {
  background: #ffffff;
  border-radius: 15px;
  padding: 2rem 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e0e0;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.achievement-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.icon {
  background: #e8f5e9;
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lucide-icon {
  width: 36px;
  height: 36px;
  color: #4caf50;
}

.text h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
  color: #212529;
  font-weight: 600;
}

.text p {
  font-size: 0.95rem;
  color: #555;
  margin: 0.3rem 0 0.6rem;
}

.text small {
  font-size: 0.8rem;
  color: #999;
}
</style>
