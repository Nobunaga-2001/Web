<template>
  <div>
    <div class="container">
      <div class="sidebar">
        <div class="logo">
          <img src="../assets/logo2.jpg" alt="Logo">
        </div>
        <nav class="navigation">
          <ul>
            <li><a href="#" @click="scrollToSection('home')">Home</a></li>
            <li><a href="#" @click="scrollToSection('about')">About</a></li>
            <li><a href="#" @click="scrollToSection('services')">Services</a></li>
            <li><a href="#" @click="scrollToSection('contact')">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="content">
        <div class="long-content home">
          <h2>Home</h2>
          <p>This is the About section content.</p>
        </div>
        <div class="long-content about">
          <h2>About</h2>
          <p>This is the About section content.</p>
        </div>
        <div class="long-content services">
          <h2>Services</h2>
          <p>This is the Services section content.</p>
        </div>
        <div class="long-content contact">
          <h2>Contact</h2>
          <p>This is the Contact section content.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    scrollToSection(section) {
      const el = document.querySelector(`.${section}`);
      if (el) {
        window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  margin: 0;
}

.sidebar {
  width: 250px;
  background-color: #000000;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
  position: fixed; 
  top: 10px;
  bottom: 10px;
}

.logo img {
  width: 150px;
}

.navigation ul {
  list-style: none;
  padding: 0;
  margin-top: 50%;
  font-size: 1.5em;
}

.navigation ul li {
  margin-bottom: 40px;
}

.navigation ul li a {
  color: #fff;
  text-decoration: none;
}

.navigation ul li a:hover {
  color: #ffcc00;
  font-size: 2.0em;
}

.content {
  flex-grow: 1;
  padding-left: 270px;
  padding-top: 20px;
}

.long-content {
  min-height: 100vh;
  padding: 20px;
}

.long-content h2 {
  color: #333;
}

.long-content p {
  color: #666;
}

.long-content.home {
  background-color: #f0f0f0;
}

.long-content.about {
  background-color: #e0e0e0;
}

.long-content.services {
  background-color: #d0d0d0;
}

.long-content.contact {
  background-color: #c0c0c0;
}
</style>
