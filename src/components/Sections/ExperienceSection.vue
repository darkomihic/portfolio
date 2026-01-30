<template>
  <section id="experience" class="section">
    <h1>Experience</h1>

    <div class="experience-container">
      <!-- Work Experience -->
      <div class="experience-category">
        <h2>Work Experience</h2>
        <div class="timeline">
          <div
            v-for="job in workExperience"
            :key="job.id"
            class="timeline-item"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>
                {{ job.title }}
                <span class="company-separator">@</span>
                <span class="company-name"><a href={{job.link}}>{{ job.company }}</a></span>
              </h3>
              <p class="date">{{ job.date }}</p>
              <p class="description">{{ job.description }}</p>
              <div class="tags">
                <span v-for="tech in job.technologies" :key="tech" class="tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <div class="experience-category">
        <h2>Education</h2>
        <div class="timeline">
          <div
            v-for="edu in education"
            :key="edu.id"
            class="timeline-item"
          >
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>{{ edu.degree }}</h3>
              <h4>{{ edu.school }}</h4>
              <p class="date">{{ edu.date }}</p>
              <p class="description">{{ edu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const workExperience = [
  {
    id: 1,
    title: "Tutor",
    company: "Kodland",
    link: "https://www.kodland.org/",
    date: "Aug 2025 - Present",
    description: "Brief description of your role and responsibilities. What you accomplished and what you worked on.",
    technologies: ["Lua", "Game Dev", "Python"]
  },
  {
    id: 2,
    title: "Internship",
    company: "FooBar.rs",
    link: "foobar.rs",
    date: "Apr 2025 - July 2025",
    description: "Internship at FooBar where I learned Laravel and Vue.js. Very valuable experience at the start of my career where I learned how to write better, more sustainable code from a great mentor.",
    technologies: ["Laravel", "Vue.js"]
  }
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "Faculty of Technical Sciences, University of Novi Sad",
    date: "2020 - Present",
    description: "Last-year student focused on software development, information systems, and database modeling."
  }
];
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  scroll-margin-top: 2rem;
}

a{
  color: #FFF4B7;
}

h1 {
  font-size: 6rem;
  color: white;
}

h2 {
  font-size: 3rem;
  color: #FFF4B7;
  margin-bottom: 1.5rem;
}

.experience-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
}

.experience-category {
  display: flex;
  flex-direction: column;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}



.timeline-item {
  position: relative;
  display: flex;
  align-items: flex-start;
}


.timeline-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid #FFF4B7;
  transition: transform 0.3s ease, background 0.3s ease;
  width: 100%;
}

.timeline-content:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
}

.timeline-content h3 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 0.5rem;
}

.company-separator,
.company-name {
  color: #FFF4B7;
}

.timeline-content h4 {
  font-size: 2rem;
  color: #FFF4B7;
  margin-bottom: 0.5rem;
  font-weight: 400;
}

.date {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.description {
  color: white;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tag {
  padding: 0.3rem 0.8rem;
  background: rgba(255, 244, 183, 0.2);
  color: #ffffff;
  border-radius: 1rem;
  font-size: 1rem;
  border: 1px solid rgba(255, 244, 183, 0.3);
}

@media (max-width: 820px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-marker {
    left: -1.5rem;
  }

  .timeline-content h3 {
    font-size: 1.2rem;
  }

  .timeline-content h4 {
    font-size: 1rem;
  }

  .description {
    font-size: 0.9rem;
  }
}
</style>
