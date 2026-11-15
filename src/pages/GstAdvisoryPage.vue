<script setup lang="ts">
import { assetUrl } from '../utils/assets'
</script>

<template>
  <div>
    <section class="page-hero service-hero">
      <div class="page-hero-content">
        <p class="eyebrow"><span></span> Service 01 / Tax &amp; compliance</p>
        <h1>GST &amp; Indirect<br /><em>Tax Advisory.</em></h1>
        <p>Navigating complex tax frameworks with precision.</p>
      </div>
      <img class="page-hero-logo" :src="assetUrl('images/logo.jpeg')" alt="Sewak rising-arrow monogram" />
    </section>

    <section class="service-detail">
      <div class="service-detail-intro">
        <span class="section-index">ENTERPRISE GST MANAGEMENT</span>
        <h2>More than filing.<br /><em>Built for better control.</em></h2>
        <p>
          For growing enterprises, Goods and Services Tax (GST) compliance is more than just filing
          returns—it is about optimizing cash flow, preventing revenue leakage, and maintaining a
          flawless regulatory record. Our specialized tax division handles the heavy lifting of
          enterprise GST management so you can focus on scaling your business.
        </p>
      </div>

      <div class="service-capabilities">
        <article class="service-capability-card">
          <span>01</span>
          <div>
            <h3>ITC optimization &amp; dispute resolution</h3>
            <p>
              We meticulously track and claim your Input Tax Credit (ITC) while navigating stringent
              regulations like Section 16(4) of the CGST Act to prevent time-barred credit losses.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>02</span>
          <div>
            <h3>GSTR reconciliation</h3>
            <p>
              Deep-dive reconciliations between your books, GSTR-1, GSTR-2B, and GSTR-3B to identify
              mismatches, missing vendor uploads, and compliance gaps before they trigger
              departmental notices.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>03</span>
          <div>
            <h3>Reverse charge mechanism (RCM)</h3>
            <p>
              Strategic guidance on RCM applicability for unregistered vendor purchases, freight,
              and specific services, ensuring proper tax discharge and simultaneous credit claims.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>04</span>
          <div>
            <h3>Voluntary tax payments &amp; rectifications</h3>
            <p>
              Expert handling of Form DRC-03 for voluntary payments related to short-paid taxes,
              ITC reversals, or audit observations, protecting you from escalating penalties.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>05</span>
          <div>
            <h3>Classification &amp; structuring</h3>
            <p>
              Accurate mapping of HSN and SAC codes across your entire product and service catalog
              to ensure the correct tax rates are applied, mitigating the risk of future
              assessments.
            </p>
          </div>
        </article>
      </div>

      <p class="service-disclaimer">
        Advice depends on the applicable law and the facts of each matter. We’ll review your
        circumstances before recommending a course of action.
      </p>
      <div class="service-cta">
        <div>
          <span class="eyebrow"><span></span> Ready to get started?</span>
          <h2>Let’s review your<br /><em>GST position.</em></h2>
        </div>
        <a class="button button-gold" href="./contact.html">Talk to our team <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </div>
</template>
