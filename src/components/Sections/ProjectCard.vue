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
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  padding: 0rem;
  border-radius: 0.5rem;
  border: 0.1rem solid #FFF4B7;
  transition: transform 0.3s ease, background 0.3s ease;
  width: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  background: #fff4b770;
}

img {
  width: 15%;
  height: 50%; /* Fixed height */
  object-position: center;
  flex-shrink: 0;
  padding: 1rem 1rem 0.3rem 1rem;
}

.content {
  flex: 1;
}

h3 {
  font-size: 2.2rem;
  margin: 0;
}

p {
  margin-bottom: 0.5rem;
  padding: 0rem 2rem;
  font-size: 1.5rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  justify-content: center;
}

.tags li {
  background: #003161;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  color: #FFF4B7;
}

.project-link {
  display: flex;
  justify-content: center;
  padding: 0.5rem;
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
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
}

@media(max-width: 820px){
  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    padding: 0rem 1rem;
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

  .tags li {
    font-size: 0.75rem;
    padding: 0.25rem 0.6rem;
  }

  .project-link {
    padding: 0.25rem;
  }

  a {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }

  .in-development {
    font-size: 1rem;
    padding: 0.4rem;
  }
}
</style>