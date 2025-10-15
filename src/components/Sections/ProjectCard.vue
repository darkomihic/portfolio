<template>
  <div class="project-card">
    <img v-if="image" :src="image" :alt="title" />
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <ul class="tags">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
      
      <div class="project-link">
        <a 
          v-if="!inDevelopment" 
          :href="link" 
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
        <span v-else class="in-development">
          🛠 In Development
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  tags: Array,
  link: String,
  inDevelopment: {
    type: Boolean,
    default: false
  },
});
</script>

<style scoped>
.project-card {
  display: flex;
  align-items: center;
  background: #FFF4B7;
  border-radius: 3rem;
  overflow: hidden;
  transition: transform 0.3s, background 0.3s;
  color: #000B58;
}

.project-card:hover {
  transform: translateY(-4px);
  background: #ffed86;
}

img {
  width: 10%;
  height: 30%; /* Fixed height */
  object-fit: contain;
  object-position: center;
  flex-shrink: 0;
  padding: 4rem;
}
.content {
  padding: 0.25rem;
  flex: 1;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
  opacity: 0.9;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  list-style: none;
  padding: 0;
  justify-content: center;
}

.tags li {
  background: #003161;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  color: #FFF4B7;
}

.project-link {
  display: flex;
  justify-content: center;
}

a {
  color: #000B58;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  transition: background 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

a:hover {
  text-decoration: underline;
}

.in-development {
  color: #000B58;
  font-weight: 600;
  font-style: italic;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

@media(max-width: 820px){
  h3 {
    font-size: 1.1rem;
  }
  
  .project-card {
    flex-direction: column;
    padding: 0rem;
  }
  
  img {
    width: 20%;
    height: 20%;
    margin: 0;
    padding: 1rem;
  }
  
  .content {
    padding: 0rem;
  }
}
</style>