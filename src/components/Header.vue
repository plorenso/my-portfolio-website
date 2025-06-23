<template>
  <header class="header">
    <div class="container">
      <!-- Left Section: Hamburger + Logo -->
      <div class="left-group">
        <button class="hamburger" @click="toggleMenu">☰</button>
        <div class="logo">
          <h1>MFC</h1>
        </div>
      </div>

      <!-- Right Section: Desktop Nav -->
      <nav class="desktop-nav">
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div class="download-cv">
          <button @click="downloadCV">Download CV</button>
        </div>
      </nav>
    </div>

    <!-- Mobile Slide Menu -->
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
/* Header */
.header {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  z-index: 1000;
}

/* Flex Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Left: Hamburger + Logo */
.left-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Hamburger Button */
.hamburger {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}

/* Logo */
.logo h1 {
  margin: 0;
  font-size: 1.8rem;
  color: #4caf50;
  font-weight: bold;
}

/* Desktop Nav */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.desktop-nav .nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.desktop-nav .nav-links a {
  text-decoration: none;
  color: #121212;
  font-weight: 500;
  transition: color 0.3s ease;
}

.desktop-nav .nav-links a:hover {
  color: #4caf50;
}

.download-cv button {
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

/* Mobile Side Menu */
.side-menu {
  position: fixed;
  top: 0;
  left: -300px;
  width: 260px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #ccc;
  padding: 2rem 1.5rem;
  transition: left 0.3s ease;
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

.side-menu .nav-links {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.side-menu .nav-links a {
  text-decoration: none;
  color: #121212;
  font-weight: 500;
  transition: color 0.3s ease;
}

.side-menu .nav-links a:hover {
  color: #4caf50;
}

.side-menu .download-cv button {
  width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .desktop-nav {
    display: none;
  }
}
</style>
