<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser';

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)
const error = ref('')

const submitForm = () => {
  error.value = ''

  // basic validation
  if (!name.value || !email.value || !message.value) {
    error.value = 'Please fill out all fields.'
    return
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email.value)) {
    error.value = 'Please enter a valid email address.'
    return
  }

  if (!name.value || !email.value || !message.value) return;

    emailjs.send('service_3s86tko', 'template_3j7dsfb', {
      from_name: name.value,
      from_email: email.value,
      message: message.value
    }, 'fDTxMjz5ma0vWzFSB')
    .then(() => {
      submitted.value = true;
      name.value = email.value = message.value = '';
    }, () => {
      error.value = 'Failed to send message. Try again later.';
    })

  submitted.value = true

  // clear form
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <section id="contact" class="contact-section">
    <h1>Contact me</h1>
    <p>If you wish to contact me, feel free to do so using this contact form or send an email at <span class="mail">mihic.dev@gmail.com</span></p>
    <p class="social-links">You can also find me on <a href="https://www.linkedin.com/in/darko-mihic/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/darkomihic" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="name" type="text" id="name" placeholder="Your name" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" placeholder="Your email" />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea v-model="message" id="message" rows="5" placeholder="Your message"></textarea>
      </div>
  <!-- message box: reserved space so layout doesn't shift -->
      <div class="form-messages" aria-live="polite">
        <p class="error" v-show="error">{{ error }}</p>
        <p class="success" v-show="submitted">Thank you! Your message has been sent.</p>
      </div>
      <button class="submit" type="submit">Send</button>

      
    </form>
  </section>
</template>

<style scoped>

/* reserve fixed area for messages so button never moves */
.form-messages {
  min-height: 1.6rem; /* adjust to match one line of text (or use height) */
  display: flex;
  align-items: center;   /* vertically center message inside reserved area */
  justify-content: center; /* center horizontally */
  margin-bottom: 0.5rem; /* small gap from messages to button */
  transition: opacity 0.2s ease;
}

.mail {
  color: #FFF4B7;
}

.social-links a {
  color: #FFF4B7;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.social-links a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.contact-section {
  display: flex;             /* make it flex */
  flex-direction: column;    /* stack items vertically */
  justify-content: center;   /* center vertically */
  align-items: center;       /* center horizontally */
  text-align: center;        /* center heading/text */
  color: white;
}

.section {
  scroll-margin-top: 2rem; /* or height of left panel */
}


h1{
  font-size: 6rem;
}

p{
  font-size: 1.5rem;
}

.contact-section h1 {
  font-size: 6rem;
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  width: 100%;
  padding-bottom: 4rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  
}

.submit{
  width: 60%;
  align-self: center;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1.5rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 1rem;

  
  
}

.form-group input {
  height: 3rem;
}

button[type="submit"] {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  background-color: #FFF4B7;
  color: #000B58;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

button[type="submit"]:hover {
  transform: scale(1.05);
}

.error {
  color: #ff6b6b;
  font-weight: 500;

}

.success {
  color: #a0ffcc;
  font-weight: 500;

}

@media (max-width: 768px)
{


  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 70%;
    margin-bottom: 3rem;
  }

  .contact-section h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .form-group label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
  }

  p{
    font-size: 1.1rem;
  }


  h1{
    font-size: 1rem;
  }
}
</style>
