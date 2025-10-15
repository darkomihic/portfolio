<script setup lang="ts">
import CursorLight from './components/CursorLight.vue'
import LeftSide from './components/Sides/LeftSide.vue'
import RightSide from './components/Sides/RightSide.vue'
</script>

<template>
  <!-- 💡 wrapper holds everything -->
  <div class="page-wrapper">
    <LeftSide />
    <RightSide />
  </div>
</template>

<style scoped>
.page-wrapper {
  position: fixed;        /* 👈 Sticks to viewport regardless of scroll */
  top: 0;
  left: 0;
  width: 100vw;           /* Full viewport width */
  height: 100vh;          /* Full viewport height */
  z-index: 0;             /* Behind other content */

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
