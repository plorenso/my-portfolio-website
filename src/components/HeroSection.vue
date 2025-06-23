<template>
  <section class="hero" id="home">
    <div class="hero-content">
      <div class="intro">
        <h2>Hello, you can call me Florence.</h2>
        <h1>
          I <span class="highlight">design</span> and <span class="highlight">develop</span> this
          for my portfolio website.
        </h1>
        <p>A future Software Engineer with a strong drive and perseverance to achieve my dreams.</p>
        <div class="hero-buttons">
          <button class="contact">Contact Me</button>
          <button class="learn">Learn More</button>
        </div>
      </div>

      <div class="profile-pic">
        <img src="@/assets/images/2X2 PICTURE_NO_NAME.jpg" alt="Florence's Picture" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  width: 100%;
  padding: 4rem 2rem;
  background-color: #f8f9fa;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
  gap: 2rem;
}

.intro {
  flex: 1;
  min-width: 300px;
}

.intro h2 {
  font-size: 1.5rem;
  color: #121212;
  margin-bottom: 0.5rem;
  font-weight: 400;
}

.intro h1 {
  font-size: 2.2rem;
  color: #121212;
  margin-bottom: 1rem;
  font-weight: 700;
}

.intro .highlight {
  color: #4caf50;
  font-weight: bold;
}

p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #121212;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-buttons button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.hero-buttons .contact {
  background-color: #4caf50;
  color: white;
}

.hero-buttons .contact:hover {
  background-color: #357b37;
}

.hero-buttons .learn {
  background-color: transparent;
  border: 2px solid #4caf50;
  color: #4caf50;
}

.hero-buttons .learn:hover {
  background-color: #4caf50;
  color: white;
}

.profile-pic {
  flex: 1;
  text-align: center;
  min-width: 280px;
}

.profile-pic img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  border: solid 5px;
  border-color: #f5f5f5;
  animation: floatUpDown 3s ease-in-out infinite;
}

@keyframes floatUpDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
