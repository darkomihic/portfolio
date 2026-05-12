<script setup>
import ContactSection from './ContactSection.vue';

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
        <div class="bio-text">
          <h1>Tutoring</h1>
          <p>
            I have a strong passion towards teaching. For the past year I have been teaching at an online school and also offer my own private sessions. I have experience working with students ages 8-15 and also SEN students. I have experience in many programming languages, including C#, Java, JavaScript, C, etc. However, for the younger learners I recommend learning <a href="https://www.scratchfoundation.org/home" target="_blank" rel="noopener noreferrer" class="contact-link">Scratch</a>.
          </p>
          <p class="personal-note">
            <!-- Add personal details here - customize this section -->
             Coming from a family with a background in education I have had the chance to learn from amazing teachers and I use all of that knowledge in my lessons. My main goal is to showcase all of the amazing details in programming to the young learners, making them interested and willing to learn from lesson to lesson.
          </p>
        </div>
      </div>

      <!-- Status Cards -->
      <div class="status-cards">
        <div class="card opportunities">
          <div class="card-icon">🐱</div>
          <h3>Scratch Course</h3>
          <p>
            I am currently building my own <a href="https://www.scratchfoundation.org/home" target="_blank" rel="noopener noreferrer" class="contact-link">Scratch</a> course! I recommend this course to all of the young students who don't have any experience, as it is an amazing language meant for them.
          </p>
        </div>

        <div class="card freelance">
          <div class="card-icon">🏫</div>
          <h3>Personalized lessons</h3>
          <p>
            Do you want to learn a specific language? I offer personalized lessons catered to each student. Ranging from the basics of coding, web development and even game development in Unity or Roblox Studio.
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="contact-text">
    <p>If you are interested in my tutoring services you can use the contact form or send an email at <span class="mail">mihic.dev@gmail.com</span></p>
    <p>You can also find me on <a href="https://www.superprof.rs/web-developer-iskustvom-radu-decom-mladima-casovima-fokusiram-programiranje-postane-nesto-sto-stvarno-vole.html" target="_blank" rel="noopener noreferrer"><span class="mail">Superprof</span></a></p>
  </div>
  <ContactSection>

  </ContactSection>
</template>

<style scoped>

.contact-text {
  margin-top: 6rem;
  font-size: 1.5rem;
}

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

.mail {
  color: #FFF4B7;
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
