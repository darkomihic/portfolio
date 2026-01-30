<template>
  <div class="main-content">
    <!-- Single section display -->
    <transition name="fade" mode="out-in">
      <div :key="props.activeSection" class="section-container">
        <BioSection v-if="props.activeSection === 'bio'" />
        <ProjectSection v-else-if="props.activeSection === 'projects'" />
        <ExperienceSection v-else-if="props.activeSection === 'experience'" />
        <ContactSection v-else-if="props.activeSection === 'contact'" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import BioSection from './Sections/BioSection.vue';
import ProjectSection from './Sections/ProjectSection.vue';
import ExperienceSection from './Sections/ExperienceSection.vue';
import ContactSection from './Sections/ContactSection.vue';

const props = defineProps({
  activeSection: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.main-content {
  position: fixed;
  top: 0;
  left: 12%;
  width: 88%;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  background: transparent;
  color: white;
  padding: 3rem;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.section-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Scrollbar styling */
.main-content::-webkit-scrollbar {
  width: 8px;
}

.main-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.main-content::-webkit-scrollbar-thumb {
  background: rgba(255, 244, 183, 0.3);
  border-radius: 4px;
}

.main-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 244, 183, 0.5);
}

@media (max-width: 820px) {
  .main-content {
    position: relative;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    padding: 2rem 1rem;
    padding-bottom: 80px;
  }

  .section-container {
    max-width: 100%;
  }
}
</style>
