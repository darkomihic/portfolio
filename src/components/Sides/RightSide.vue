<template>
  <div class="right-panel">
    <section class="small-screen">
      <h1>Darko Mihić</h1>
      <h3>Web developer and Indie Game Dev</h3>
    </section>
    <section id="bio" class="section">
      <BioSection />
    </section>

    <section id="projects" class="section">
      <ProjectSection />
    </section>

    <section id="contact" class="contact">
      <ContactSection />
    </section>
  </div>
</template>


<script setup>

import CursorLight from '../CursorLight.vue'
import BioSection from '../Sections/BioSection.vue';
import ContactSection from '../Sections/ContactSection.vue';
import ProjectSection from '../Sections/ProjectSection.vue';
</script>

<style scoped>
.right-panel {
  position: fixed;
  top: 0;
  left: 40%;
  width: 60%;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  background: transparent;
  color: white;
  padding: 2rem;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}

.small-screen {
  display: none; /* hide on desktop */
}

.section {
  scroll-margin-top: 2rem; /* adjust to match left-panel height if needed */
}


@media (max-width: 768px)
{
  .right-panel {
    position: relative; /* remove fixed positioning */
    left: 0;
    width: 100%;       /* full width */
    height: auto;      /* let content expand */
    overflow-y: auto;
    padding: 0rem 0rem;
    scroll-behavior: smooth;

  }

  .small-screen {
    display: block; /* show on mobile */
  }

}



/* ✅ Section spacing control */
.section {
  padding-bottom: 4rem; /* space between sections */
}

/* Optional: remove default margins from inner elements */
.section > *:first-child {
  margin-top: 0;
}
.section > *:last-child {
  margin-bottom: 0;
}


</style>
