<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <h1>MFC</h1>
      </div>
      <nav class="nav">
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      <div class="download-cv">
        <button @click="downloadCV">Download CV</button>
      </div>
    </div>
  </header>
</template>

<script setup>
const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/cv/CHAVEZ_CV.pdf' // file path
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
}

.container {
  max-width: 1180px;
  margin-left: 8rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

/* Logo */
.logo h1 {
  margin: 0;
  font-size: 1.8rem;
  color: #4caf50;
  font-weight: 700;
}

/* Nav */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
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

/* Button */
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

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .nav-links {
    justify-content: center;
  }

  .download-cv {
    text-align: center;
  }
}
</style>
