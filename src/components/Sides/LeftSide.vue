<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import CursorLight from "../CursorLight.vue";

const sections = [
  { id: "bio", label: "About me", component: "BioSection" },
  { id: "projects", label: "Projects", component: "ProjectSection" },
  { id: "contact", label: "Contact", component: "ContactSection" },
];

const activeSection = ref("bio");

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

let observer;

onMounted(() => {
  // ✅ Find the scrollable container
  const rightPanel = document.querySelector(".right-panel");

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      root: rightPanel, // 👈 Observe inside right-panel
      threshold: [0.2, 0.9, 0.5], // Multiple thresholds to catch both directions
      rootMargin: "-20% 0px -20% 0px" // Equal margins top and bottom
    }
  );

  sections.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});


onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>


<template>
  <div class="left-panel">
    <div class="intro">
      <h1 class="name">Darko Mihić</h1>
      <p class="short-bio">Web Developer & Indie Game Dev</p>
    </div>

    <ul class="nav-bullets">
      <li
        v-for="section in sections"
        :key="section.id"
        :class="{ active: activeSection === section.id }"
        @click="scrollToSection(section.id)"
      >
        <div class="bullet-wrapper">
          <span class="bullet"></span>
        </div>
        <span class="label">{{ section.label }}</span>
      </li>
    </ul>




    <!-- Social links -->
    <div class="social-links">
      <a href="https://www.linkedin.com/in/darko-mihic/" target="_blank">LinkedIn</a>
      <a href="https://github.com/darkomihic" target="_blank">GitHub</a>
    </div>
  </div>
</template>

<style scoped>
.left-panel {
  position: fixed;
  width: 40%;
  left: 0;
  top: 0;
  height: 90vh;
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Work Sans", sans-serif;
  z-index: 10;
  background: transparent;

}

@media (max-width: 768px)
{
  .left-panel{
    display: none;
  }
}

.short-bio {
  font-size: 1.5rem
}
.name {
  font-size: 6rem;
}

.nav-bullets {
  position: relative;
  display: flex;
  flex-direction: column;
  left: 40%;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 0;
}

.nav-bullets li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.bullet-wrapper {
  width: 24px;
  display: flex;
  justify-content: center;
}

.bullet {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  flex-shrink: 0;
  transition: transform 0.3s, background 0.3s, box-shadow 0.3s;
}

.nav-bullets li.active .bullet {
  transform: scale(1.6);
  background: #FFF4B7;
  box-shadow: 0 0 10px #FFF4B7, 0 0 20px #beb687;
}

.nav-bullets li:hover .bullet {
  transform: scale(1.3);
  background: #fcf4cb;
}

.label {
  color: white;
  font-size: 2rem;
  transition: color 0.3s;
}

.nav-bullets li.active .label {
  color: #FFF4B7;
  font-weight: 600;
}

.social-links a {
  display: block;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
}

.social-links a:hover {
  text-decoration: underline;
}
</style>
