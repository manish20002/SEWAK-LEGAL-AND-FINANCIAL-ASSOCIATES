<script setup lang="ts">
import { assetUrl } from '../utils/assets'
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> Legal clarity. Financial confidence.</p>
        <h1>Sound advice for<br />what comes <em>next.</em></h1>
        <p class="hero-description">
          Thoughtful legal and financial guidance for businesses, professionals, and the people
          building what matters.
        </p>
        <div class="hero-actions">
          <a class="button button-gold" href="./contact.html">Talk to our team <span aria-hidden="true">↗</span></a>
          <a class="text-link" href="./about.html">Discover Sewak <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-note">
          <span class="note-line"></span>
          <span>Practical counsel, built around you.</span>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-image-frame">
          <img :src="assetUrl('images/banner.jpeg')" alt="Sewak Legal & Financial Associates LLP" />
        </div>
        <div class="visual-caption">
          <span class="caption-number">01</span>
          <span>Trusted counsel.<br />A clearer way forward.</span>
          <span class="caption-rule"></span>
        </div>
        <div class="hero-seal" aria-hidden="true">
          <span>ADVICE WITH</span>
          <strong>INTEGRITY</strong>
          <span>EST. ON TRUST</span>
        </div>
      </div>
    </section>

    <section class="home-intro">
      <div>
        <p class="eyebrow"><span></span> A steady hand, at every stage</p>
        <h2>Complex matters.<br /><em>Clear direction.</em></h2>
      </div>
      <div class="home-intro-copy">
        <p>
          Legal insight and financial thinking, brought together to help you make informed decisions
          with confidence.
        </p>
        <a class="text-link text-link-dark" href="./about.html">Meet Sewak <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="home-work">
      <div class="section-topline">
        <span class="eyebrow"><span></span> How we can support you</span>
        <a class="text-link text-link-dark" href="./work.html">View services <span aria-hidden="true">↗</span></a>
      </div>
      <div class="home-work-items">
        <article><span>01</span><h3>Legal advisory</h3></article>
        <article><span>02</span><h3>Business support</h3></article>
        <article><span>03</span><h3>Financial guidance</h3></article>
      </div>
    </section>
  </div>
</template>
