<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Define props with optional opacity
const props = defineProps<{ opacity?: number }>();
const opacity = props.opacity ?? 0.3;

// Target and actual cursor positions
const target = ref({ x: -100, y: -100 });
const position = ref({ x: -100, y: -100 });

const handleMouseMove = (e: MouseEvent) => {
  target.value = { x: e.clientX, y: e.clientY };
};

// Smooth animation
const animate = () => {
  position.value.x += (target.value.x - position.value.x) * 0.05;
  position.value.y += (target.value.y - position.value.y) * 0.05;
  requestAnimationFrame(animate);
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  animate();
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <div
    class="cursor-light"
    :style="{
      background: `radial-gradient(circle 150px at ${position.x}px ${position.y}px, rgba(52,101,109,${opacity}), rgba(51,68,67,0.85))`
    }"
  ></div>
</template>

<style scoped>
.cursor-light {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  mix-blend-mode: lighten;
  z-index: 99;
}
</style>
