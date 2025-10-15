<template>
  <section id="projects" class="section">
    <h1>Projects</h1>

    <div class="projects-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :tags="project.tags"
        :link="project.link"
        :inDevelopment="project.inDevelopment"
      />
    </div>
    <p>You can check out my other projects on my <a href="https://github.com/darkomihic">GitHub</a> page.</p>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    id: 1,
    title: "Kosa-Nostra Barber Shop Website",
    description: "Website built for a local barbershop. Includes online scheduling, barber dashboard and integrated Google calendar",
    image: '/images/KNGlava.png', // Direct public path     
    tags: ["Node.js", "React", "MySQL", "Tailwind"],
    link: "https://kosa-nostra.com",
  },
  {
    id: 2,
    title: "Mobile Unity Game",
    description: "A mobile pixel-art endless runner made in Unity. With different different types of enemy mobs, levels and bosses. Pre-Alpha is out.",
    image: "/images/ninja.png",
    tags: ["Unity", "C#", "Mobile"],
    inDevelopment: true

  },
  {
    id: 3,
    title: "Portfolio website",
    description: "My own portfolio website. The one you are currently looking at.",
    image: "/images/portfolio.png",
    tags: ["Vue"],
    link: "https://example.com/inventory",
  },
  {
    id: 4,
    title: "Hackathon project",
    description: "Cyrillic CMS Challenge, a hackathon dedicated to building innovative Content Management Services tailored specifically for Serbian Cyrillic alphabet content.",
    image: "/images/portfolio.png",
    tags: ["Node.js", "React"],
    link: "https://github.com/davidrosic/Cokolada",
  },
  {
    id: 5,
    title: "University project",
    description: "Java Swing application for drawing 2D geometric shapes. Made for an university project. Project was used for the Design Patterns course",
    image: "/images/portfolio.png",
    tags: ["Java"],
    link: "https://github.com/davidrosic/Cokolada",
  }
];
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center; /* centers the list horizontally */
  scroll-margin-top: 2rem; /* or height of left panel */
}

h2 {
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
}

  h1{
    font-size: 3rem;
  }

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%; /* ✅ make them wide but with some breathing room */
  max-width: 800px; /* optional: limits how wide they can go */
}

@media(max-width: 768px){
  h1{
    font-size: 3rem;
  }
}
</style>
