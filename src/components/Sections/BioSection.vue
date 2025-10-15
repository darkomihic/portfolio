<template>
  <section id="bio" class="section">
    <h1>About me</h1>
    <p>
      Last-year student at the Faculty of Technical Sciences, University of Novi Sad, eager to expand my knowledge in software development. 
      I am particularly interested in building information systems, exploring different web technologies, and modeling databases. 
      I am flexible, a strong team player, and equally effective working independently. 
      I also have experience working remotely and thrive in environments with motivated colleagues and experienced mentors for professional growth.
    </p>
  </section>
</template>

<style scoped>
.section {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-margin-top: 2rem; /* so the header isn’t hidden after scroll */
  font-size: 1.5rem;
}

h1{
  font-size: 3rem;
}

@media (max-width: 768px)
{
  .section{
    font-size: 1rem;
  }

  h1{
    font-size: 3rem;
  }
 
}
</style>
