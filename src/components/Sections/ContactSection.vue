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
    }, (err) => {
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

      <button class="submit" type="submit">Send</button>

      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="submitted" class="success">Thank you! Your message has been sent.</p>
    </form>
  </section>
</template>

<style scoped>
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
  font-size: 3rem;
}


.contact-section h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  width: 100%;
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
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
}

.form-group input {
  height: 3rem;
}

button[type="submit"] {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
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

  h1{
    font-size: 3rem;
  }
}
</style>
