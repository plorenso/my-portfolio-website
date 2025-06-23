<template>
  <section class="stats">
    <div class="stat" v-for="(item, index) in stats" :key="index">
      <component :is="item.icon" class="icon" />
      <h1>{{ animatedValues[index] }}</h1>
      <p>{{ item.label }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { Trophy, Users, CalendarDays, Laptop2 } from 'lucide-vue-next'

// const stats = [
//   { icon: Trophy, value: 10, label: 'Achievements' },
//   { icon: Users, value: 0, label: 'Clients' },
//   { icon: CalendarDays, value: 0, label: 'Years Experience' },
//   { icon: Laptop2, value: 10, label: 'Projects' },
// ]

const stats = [
  { value: 10, label: 'Achievements' },
  { value: 0, label: 'Clients' },
  { value: 0, label: 'Years Experience' },
  { value: 10, label: 'Projects' },
]

const animatedValues = ref(stats.map(() => 0))

const animateCount = (index, target, duration = 1000) => {
  const frameRate = 30
  const totalFrames = Math.round(duration / frameRate)
  let frame = 0

  const counter = setInterval(() => {
    frame++
    const progress = frame / totalFrames
    animatedValues.value[index] = Math.round(target * progress)

    if (frame === totalFrames) {
      animatedValues.value[index] = target
      clearInterval(counter)
    }
  }, frameRate)
}

onMounted(() => {
  stats.forEach((item, index) => {
    animateCount(index, item.value)
  })
})
</script>

<style scoped>
.stats {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 2rem 1rem;
  background-color: #f5f5f5;
  text-align: center;
}

.stat {
  flex: 0 1 150px;
  max-width: 160px;
  padding: 0.5rem 0.75rem;
  transition: transform 0.3s;
}

.stat:hover {
  transform: translateY(-5px);
}

.icon {
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.5rem;
  color: #4caf50;
}

.stat h1 {
  font-size: 3.5rem;
  font-weight: 700;
  color: #4caf50;
  margin: 0;
}

.stat p {
  font-size: 1.1rem;
  color: #333;
  margin-top: 0.3rem;
}
</style>
