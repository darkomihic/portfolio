<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import MainContent from './components/MainContent.vue'

const activeSection = ref('bio')

const switchSection = (sectionId: string) => {
  activeSection.value = sectionId
}
</script>

<template>
  <div class="page-wrapper">
    <Navbar :activeSection="activeSection" @switch-section="switchSection" />
    <MainContent :activeSection="activeSection" @switch-section="switchSection" />
  </div>
</template>

<style scoped>
.page-wrapper {
  position: fixed;        
  top: 0;
  left: 0;
  width: 100vw;           
  height: 100vh;          
  z-index: 0;             

  display: flex;
  overflow: hidden;

  /* 🌈 Animated gradient background */
  background: radial-gradient(circle at 25% 30%, #006A67, #003161, #000B58);
  background-size: 300% 300%;
  animation: gradientShift 12s ease-in-out infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
