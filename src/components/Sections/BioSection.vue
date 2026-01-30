<script setup>
const emit = defineEmits(['switch-section'])

const goToContact = () => {
  emit('switch-section', 'contact')
}
</script>

<template>
  <section id="bio" class="section">
    <div class="bio-container">
      <!-- Profile Header -->
      <div class="profile-header">
        <div class="profile-image">
          <h2 class="name-mobile">Darko Mihić</h2>
          <!-- Add your photo here - replace the src path -->
          <img src="/public/darko2.PNG" alt="Darko Mihić" />
          <h2 class="name-desktop">Darko Mihić</h2>
        </div>
        <div class="bio-text">
          <h1>About me</h1>
          <p>
            Final-year student at the Faculty of Technical Sciences, University of Novi Sad, eager to expand my knowledge in software development.
            I am particularly interested in building information systems, exploring different web technologies, modeling databases, and data analysis.
            I am flexible, a strong team player, and equally effective working independently.
            I also have experience working remotely and thrive in environments with motivated colleagues and experienced mentors for professional growth.
          </p>
          <p class="personal-note">
            <!-- Add personal details here - customize this section -->
            Based in Novi Sad, Serbia. When I'm not coding, I enjoy playing sports, especially basketball, and I also like hiking. I'm also an avid gamer which naturally led me to explore game development.
            I love working on challenging projects, I always have something that I'm building. I believe that building is the best way to learn and improve my skills. Also, I love sharing my knowledge with others, whether it be through tutoring or working alongside others on projects.
          </p>
        </div>
      </div>

      <!-- Status Cards -->
      <div class="status-cards">
        <div class="card opportunities">
          <div class="card-icon">💼</div>
          <h3>Seeking Opportunities</h3>
          <p>
            Currently looking for full-time positions and internship opportunities in software development,
            particularly in web technologies and system design.
          </p>
        </div>

        <div class="card freelance">
          <div class="card-icon">💻</div>
          <h3>Available for Projects</h3>
          <p>
            Open to freelance work! Need a portfolio, business website, or custom web application?
            Let's collaborate and bring your ideas to life. Use the <a @click="goToContact" class="contact-link">contact form</a> on this site to get in touch.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-margin-top: 2rem;
  font-size: 1.5rem;
}

.bio-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Profile Header */
.profile-header {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  margin-bottom: 3rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.profile-image {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name-desktop {
  font-size: 2rem;
  color: #FFF4B7;
  margin-top: 1rem;
  margin-bottom: 0;
  text-align: center;
}

.name-mobile {
  display: none;
  font-size: 1.8rem;
  color: #FFF4B7;
  margin-bottom: 0rem;
  text-align: center;
}

.profile-image img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
}

.bio-text {
  flex: 1;
}

.bio-text h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  margin-top: 0;
}

.bio-text p {
  line-height: 1.8;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}

.personal-note {
  font-style: italic;
  color: rgba(255, 255, 255, 0.7) !important;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Status Cards */
.status-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
}

.card p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.contact-link {
  color: #FFF4B7;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.2s ease;
  border-bottom: 2px solid rgba(255, 244, 183, 0.3);
  cursor: pointer;
}

.contact-link:hover {
  opacity: 0.8;
  border-bottom-color: #FFF4B7;
}

/* Accent colors for cards */
.opportunities:hover {
  background: rgba(100, 200, 255, 0.1);
}

.freelance:hover {
  background: rgba(200, 100, 255, 0.1);
}

/* Responsive Design */
@media (max-width: 820px) {
  .section {
    font-size: 1rem;
    padding: 2rem 1rem;
  }

  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    padding: 1.5rem;
  }

  .profile-image img {
    width: 150px;
    height: 150px;
  }

  .name-desktop {
    display: none;
  }

  .name-mobile {
    display: block;
  }

  .bio-text h1 {
    font-size: 2rem;
  }

  .bio-text p {
    font-size: 1rem;
  }

  .status-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card h3 {
    font-size: 1.5rem;
  }

  .card p {
    font-size: 1rem;
  }

  .card-icon {
    font-size: 2.5rem;
  }
}
</style>
