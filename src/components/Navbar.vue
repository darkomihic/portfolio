<script setup>
const props = defineProps({
  activeSection: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['switch-section'])

const sections = [
  { id: "bio", label: "Darko" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const switchSection = (id) => {
  emit('switch-section', id)
};
</script>

<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li
        v-for="section in sections"
        :key="section.id"
        :class="{ active: props.activeSection === section.id }"
        @click="switchSection(section.id)"
      >
        <span class="nav-label">{{ section.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 8%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 0;
}

.nav-list {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  height: 100%;
}

.nav-list li {
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  user-select: none;
}

.nav-label {
  color: white;
  font-size: 2rem;
  font-weight: 400;
  transition: all 0.3s ease;
  display: block;
  transform: rotate(-90deg);
  white-space: nowrap;
  position: relative;
}

.nav-label::after {
  content: '';
  position: absolute;
  bottom: -0.3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #FFF4B7;
  transition: width 0.3s ease;
}

.nav-list li:hover .nav-label {
  color: #FFF4B7;
  font-size: 2.4rem;
}

.nav-list li:hover .nav-label::after {
  width: 100%;
}

.nav-list li.active .nav-label {
  color: #FFF4B7;
  font-weight: 600;
  font-size: 2.5rem;
}

.nav-list li.active .nav-label::after {
  width: 100%;
}

@media (min-width: 821px) {
  .nav-list li.active::before {
    display: none;
  }
}

@media (max-width: 820px) {
  .navbar {
    width: calc(100% - 1rem);
    height: auto;
    bottom: 0.5rem;
    top: auto;
    left: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2rem;
    padding: 1rem 0;
    box-shadow: 0 -8px 32px 0 rgba(0, 0, 0, 0.1);
  }

  .nav-list {
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }

  .nav-list li {
    padding: 0.5rem;
  }

  .nav-label {
    transform: rotate(0deg);
    font-size: 1.1rem;
  }

  .nav-label::after {
    display: none;
  }

  .nav-list li:hover .nav-label {
    font-size: 1.2rem;
  }

  .nav-list li.active .nav-label {
    font-size: 1.2rem;
  }

  .nav-list li.active::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 100%;
    left: 50%;
    top: 50%;
    padding: 0.2rem;
    transform: translate(-50%, -50%);
    background: rgba(255, 244, 183, 0.15);
    border-radius: 2rem;
    border: 1px solid rgba(255, 244, 183, 0.3);
    z-index: -1;
  }

  .nav-list li:hover .nav-label::after {
    display: none;
  }
}
</style>
