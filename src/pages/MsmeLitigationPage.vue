<script setup lang="ts">
import { assetUrl } from '../utils/assets'
</script>

<template>
  <div>
    <section class="page-hero service-hero">
      <div class="page-hero-content">
        <p class="eyebrow"><span></span> Service 02 / Disputes &amp; recovery</p>
        <h1>MSME Rights &amp;<br /><em>Commercial Litigation.</em></h1>
        <p>Protecting your working capital and commercial interests.</p>
      </div>
      <img class="page-hero-logo" :src="assetUrl('images/logo.jpeg')" alt="Sewak rising-arrow monogram" />
    </section>

    <section class="service-detail">
      <div class="service-detail-intro">
        <span class="section-index">COMMERCIAL DISPUTES &amp; DEBT RECOVERY</span>
        <h2>Protect your dues.<br /><em>Keep business moving.</em></h2>
        <p>
          Delayed payments can cripple business operations. We leverage powerful statutory
          frameworks to help clients recover their rightful dues efficiently. Our litigation team
          represents operational creditors and works to protect enterprise cash flow.
        </p>
      </div>

      <div class="service-capabilities">
        <article class="service-capability-card">
          <span>01</span>
          <div>
            <h3>MSMED Act Section 18 debt recovery</h3>
            <p>
              We provide legal representation under Section 18 of the Micro, Small and Medium
              Enterprises Development (MSMED) Act. We handle the filing of claims through the MSME
              Samadhaan portal, manage conciliation proceedings, and represent you in statutory
              arbitration to recover delayed payments along with compound interest.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>02</span>
          <div>
            <h3>Commercial contract enforcement</h3>
            <p>
              We draft commercial agreements, purchase orders, and vendor contracts, and advise on
              legal action—including legal notices and summary suits—when breaches occur.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>03</span>
          <div>
            <h3>E-commerce seller protection</h3>
            <p>
              We advise independent online sellers on consumer protection laws, return regulations
              for personalized or custom goods, and platform dispute resolution.
            </p>
          </div>
        </article>
      </div>

      <p class="service-disclaimer">
        Rights, remedies, and timelines depend on eligibility, statutory requirements, and the facts
        of each matter. We’ll review your circumstances before recommending next steps.
      </p>
      <div class="service-cta">
        <div>
          <span class="eyebrow"><span></span> Need help with a commercial matter?</span>
          <h2>Let’s discuss a<br /><em>way forward.</em></h2>
        </div>
        <a class="button button-gold" href="./contact.html">Talk to our team <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </div>
</template>
