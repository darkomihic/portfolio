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
    description: "Website built for a local barbershop. Includes online scheduling, barber dashboard and integrated Google calendar. Supports multiple barbers with different working hours. Currently working on a Telegram bot for appointment notifications.",
    image: '/images/KNGlava.png', // Direct public path     
    tags: ["Node.js", "React", "MySQL", "Tailwind"],
    link: "https://kosa-nostra.com",
  },
  {
    id: 2,
    title: "Mobile Unity Game",
    description: "A mobile pixel-art endless runner made in Unity. With different types of enemy mobs, levels and bosses. Pre-Alpha is out.",
    image: "/images/ninja.png",
    tags: ["Unity", "C#", "Mobile"],
    inDevelopment: true

  },
  {
    id: 3,
    title: "Mokra Gora Apartments",
    description: 'Working on optimizing an already built website for apartments in Mokra Gora. The website contains 360° pictures and multiple videos. Originally built by <a href="https://www.linkedin.com/in/vuk-stojic/">Vuk Stojić</a> and <a href="https://www.linkedin.com/in/danilo-radivojevic-441351256/" target="_blank">Danilo Radivojević</a>.',
    image: "/images/cabin.png",
    tags: ["Next.js"],
    inDevelopment: true
  },
  {
    id: 4,
    title: "ReFocus",
    description: "Website built for a group of young students to bring their business idea to life. They are making 3D printed keychains to help kids find their lost keys, all while using recycled plastic. The MVP is live.",
    image: "/images/ReFocusLogo.png",
    tags: ["React", "Node.js", "MySQL"],
    link: "https://www.refocusco.rs/"
  },
    {
    id: 5,
    title: "Portfolio website",
    description: "My own portfolio website. The one you are currently looking at.",
    image: "/images/portfolio.png",
    tags: ["Vue"],
    link: "https://mihic.dev",
  },
  {
    id: 6,
    title: "Hackathon project",
    description: "Cyrillic CMS Challenge, a hackathon dedicated to building innovative Content Management Services tailored specifically for Serbian Cyrillic alphabet content. Worked alongside 2 other developers with a 48 hour time limit.",
    image: "/images/hackathon.png",
    tags: ["Node.js", "React"],
    link: "https://github.com/davidrosic/Cokolada",
  },
  {
    id: 7,
    title: "University project",
    description: "Java Swing application for drawing 2D geometric shapes. Made for a university project. Project was used for the Design Patterns course.",
    image: "/images/designpatterns.png",
    tags: ["Java"],
    link: "https://github.com/darkomihic/designpatternsproject",
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
  font-size: 6rem;
}


.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%; /* ✅ make them wide but with some breathing room */
  max-width: 800px; /* optional: limits how wide they can go */
}

@media(max-width: 820px){
  h1{
    font-size: 2rem;
  }
}
</style>
