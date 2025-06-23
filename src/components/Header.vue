<template>
  <header class="header">
    <div class="container">
      <!-- Hamburger on the left -->
      <button class="hamburger" @click="toggleMenu">☰</button>

      <!-- Logo next to hamburger -->
      <div class="logo">
        <h1>MFC</h1>
      </div>
    </div>

    <!-- Slide-in side nav -->
    <nav class="side-menu" :class="{ open: isMenuOpen }">
      <button class="close-btn" @click="toggleMenu">×</button>
      <ul class="nav-links">
        <li><a href="#home" @click="closeMenu">Home</a></li>
        <li><a href="#skills" @click="closeMenu">Skills</a></li>
        <li><a href="#projects" @click="closeMenu">Projects</a></li>
        <li><a href="#achievements" @click="closeMenu">Achievements</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
      </ul>
      <div class="download-cv">
        <button @click="downloadCV">Download CV</button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/cv/CHAVEZ_CV.pdf'
  link.download = 'CHAVEZ_CV.pdf'
  link.click()
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  top: 0;
  z-index: 1000;
  position: relative;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Hamburger */
.hamburger {
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  display: none;
}

/* Logo */
.logo h1 {
  margin: 0;
  font-size: 1.8rem;
  color: #4caf50;
  font-weight: 700;
}

/* Side Menu */
.side-menu {
  position: fixed;
  top: 0;
  left: -300px;
  width: 260px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #ccc;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 2rem 1.5rem;
  transition: left 0.3s ease-in-out;
  z-index: 2000;
}

.side-menu.open {
  left: 0;
}

.side-menu .close-btn {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 2rem;
}

/* Nav Links */
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: #121212;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #4caf50;
}

/* CV Button */
.download-cv button {
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.download-cv button:hover {
  background-color: #357b37;
}

/* Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .container {
    justify-content: flex-start;
  }
}
</style>
