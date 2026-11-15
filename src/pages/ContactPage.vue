<script setup lang="ts">
import { ref } from 'vue'
import { assetUrl } from '../utils/assets'

const messageStatus = ref('')

const submitInquiry = () => {
  messageStatus.value =
    'Thanks for reaching out. This website preview is not connected to an inbox yet.'
}
</script>

<template>
  <div>
    <section class="page-hero page-hero-contact">
      <div class="page-hero-content">
        <p class="eyebrow"><span></span> Your next step starts here</p>
        <h1>Let's make a<br /><em>clear plan.</em></h1>
        <p>
          Tell us a little about what you need. We’re ready to understand your goals and help you
          explore a way forward.
        </p>
      </div>
      <img class="page-hero-logo" :src="assetUrl('images/logo.jpeg')" alt="Sewak rising-arrow monogram" />
    </section>

    <section class="contact contact-page-content">
      <div class="contact-intro">
        <div class="section-topline">
          <span class="eyebrow"><span></span> Begin a conversation</span>
          <span class="section-index">01 / CONTACT</span>
        </div>
        <h2>Tell us what<br /><em>matters to you.</em></h2>
        <p>
          Share a few details about your enquiry and the best way to reach you. We’ll take it from
          there.
        </p>
        <div class="contact-signoff">
          <span class="signoff-rule"></span>
          <span>Sewak Legal &amp; Financial Associates LLP</span>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="submitInquiry">
        <div class="form-heading">
          <span>GET IN TOUCH</span>
          <span aria-hidden="true">✳</span>
        </div>
        <label>
          Your name
          <input name="name" type="text" autocomplete="name" placeholder="How should we address you?" required />
        </label>
        <label>
          Email address
          <input name="email" type="email" autocomplete="email" placeholder="you@example.com" required />
        </label>
        <label>
          How can we help?
          <textarea name="message" rows="3" placeholder="A brief note about your enquiry..." required></textarea>
        </label>
        <button class="button button-gold form-submit" type="submit">Send an enquiry <span aria-hidden="true">↗</span></button>
        <p v-if="messageStatus" class="form-status" role="status">{{ messageStatus }}</p>
        <p v-else class="form-note">This preview form isn’t connected to an inbox yet.</p>
      </form>
    </section>

    <section class="office-location">
      <div class="section-topline">
        <span class="eyebrow"><span></span> Find our office</span>
        <span class="section-index">02 / LOCATION</span>
      </div>
      <div class="office-location-heading">
        <div>
          <h2>Visit us in<br /><em>Hyderabad.</em></h2>
          <address>
            Madhura Nagar Colony, Ameerpet<br />
            Hyderabad, Telangana
          </address>
        </div>
        <a
          class="text-link text-link-dark"
          href="https://www.google.com/maps/search/?api=1&amp;query=Madhura%20Nagar%20Colony%2C%20Ameerpet%2C%20Hyderabad%2C%20Telangana"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div class="office-map">
        <iframe
          title="Map showing Madhura Nagar Colony, Ameerpet, Hyderabad"
          src="https://www.google.com/maps?q=Madhura%20Nagar%20Colony%2C%20Ameerpet%2C%20Hyderabad%2C%20Telangana&amp;z=15&amp;output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>
