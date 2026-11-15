<script setup lang="ts">
import { assetUrl } from '../utils/assets'
</script>

<template>
  <div>
    <section class="page-hero page-hero-work">
      <div class="page-hero-content">
        <p class="eyebrow"><span></span> How we can support you</p>
        <h1>Our work &amp;<br /><em>projects.</em></h1>
        <p>
          Specialized legal and tax support shaped around the operational realities of growing
          businesses.
        </p>
      </div>
      <img class="page-hero-logo" :src="assetUrl('images/logo.jpeg')" alt="Sewak rising-arrow monogram" />
    </section>

    <section class="work work-page-content">
      <div class="section-topline">
        <span class="eyebrow"><span></span> Dedicated services</span>
        <span class="section-index">01 / OUR WORK</span>
      </div>
      <div class="work-heading">
        <h2>Focused expertise.<br /><em>Practical outcomes.</em></h2>
        <p>
          From tax compliance to commercial disputes, we help you manage complex requirements and
          protect your business interests.
        </p>
      </div>
      <div class="service-overview-grid">
        <article class="service-overview-card">
          <span class="card-index">01 / TAX &amp; COMPLIANCE</span>
          <h3>GST &amp; Indirect Tax Advisory</h3>
          <p>
            GST reconciliations, ITC support, reverse charge, voluntary payments, and tax
            classification guidance.
          </p>
          <a class="text-link text-link-dark" href="./gst-advisory.html">
            Explore GST advisory <span aria-hidden="true">↗</span>
          </a>
        </article>
        <article class="service-overview-card">
          <span class="card-index">02 / DISPUTES &amp; RECOVERY</span>
          <h3>MSME Rights &amp; Commercial Litigation</h3>
          <p>
            Support with delayed-payment recovery, commercial contract enforcement, and e-commerce
            seller disputes.
          </p>
          <a class="text-link text-link-dark" href="./msme-commercial-litigation.html">
            Explore commercial support <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </section>

    <section class="industries-section">
      <div class="section-topline">
        <span class="eyebrow"><span></span> Industries we serve</span>
        <span class="section-index">02 / INDUSTRIES</span>
      </div>
      <h2>Advice grounded in<br /><em>your industry.</em></h2>
      <p class="section-lead">
        Our methodologies are adaptable, with specialized understanding of the day-to-day realities
        across several key sectors.
      </p>
      <div class="industry-grid">
        <article>
          <span>01</span>
          <h3>Physical goods &amp; commodity trading</h3>
          <p>
            High-volume, margin-sensitive trading needs reliable supply-chain compliance—from
            e-way bills and HSN accuracy to vendor ITC reconciliations.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>E-commerce &amp; D2C sellers</h3>
          <p>
            Guidance on platform commissions, TCS under GST, and return policies for specialized or
            customized goods to help protect seller margins and support statutory compliance.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Manufacturing &amp; industrial</h3>
          <p>
            Support with capitalization of assets, factory compliance, and tax structuring for raw
            material procurement.
          </p>
        </article>
        <article>
          <span>04</span>
          <h3>Professional services &amp; tech</h3>
          <p>
            Help structuring service agreements, international billing and LUTs for zero-rated
            exports, and TDS or withholding tax compliance.
          </p>
        </article>
      </div>
    </section>

    <section class="process-section">
      <div class="section-topline">
        <span class="eyebrow"><span></span> The Sewak process</span>
        <span class="section-index">03 / HOW WE WORK</span>
      </div>
      <h2>Clear steps.<br /><em>Steady progress.</em></h2>
      <div class="process-grid">
        <article>
          <span class="process-number">01</span>
          <h3>Initial discovery &amp; audit</h3>
          <p>
            We review your current legal and financial position, recent tax filings, outstanding
            receivables, and existing vendor contracts.
          </p>
        </article>
        <article>
          <span class="process-number">02</span>
          <h3>Strategy &amp; restructuring</h3>
          <p>
            We identify compliance gaps and cash-flow bottlenecks, then build a tailored plan—whether
            that means reviewing HSN codes, strengthening Tally accounting protocols, or issuing
            MSME recovery notices.
          </p>
        </article>
        <article>
          <span class="process-number">03</span>
          <h3>Execution &amp; representation</h3>
          <p>
            Our team supports accurate return filing, dispute resolution, representation, and
            maintenance of daily financial ledgers.
          </p>
        </article>
        <article>
          <span class="process-number">04</span>
          <h3>Ongoing advisory</h3>
          <p>
            We keep you informed about legal and regulatory changes relevant to your business and
            industry.
          </p>
        </article>
      </div>
    </section>

    <section class="faq-section">
      <div class="section-topline">
        <span class="eyebrow"><span></span> Frequently asked questions</span>
        <span class="section-index">04 / FAQ</span>
      </div>
      <h2>Good questions.<br /><em>Clear answers.</em></h2>
      <div class="faq-list">
        <details>
          <summary>What can I do if a vendor has not uploaded invoices and I may lose ITC?</summary>
          <p>
            We can systematically reconcile your purchase register with GSTR-2B, communicate
            formally with non-compliant vendors, and help structure future contracts so payment
            releases account for successful GST portal uploads—helping safeguard working capital.
          </p>
        </details>
        <details>
          <summary>What options are available for delayed payment on goods already delivered?</summary>
          <p>
            Where statutory eligibility and requirements are met, including applicable Udyam
            registration requirements, we can advise on remedies under Section 18 of the MSMED Act.
            The statutory framework may provide for compound interest at three times the bank rate
            for qualifying delays beyond the applicable payment period (up to 45 days). We can
            assist with the process from an initial legal notice through Facilitation Council
            proceedings and arbitration.
          </p>
        </details>
        <details>
          <summary>Can a GST mismatch from a previous financial year be corrected voluntarily?</summary>
          <p>
            Depending on the circumstances, we can help assess whether a Form DRC-03 filing to
            voluntarily pay differential tax or reverse excess ITC is appropriate. Timely
            rectification may help mitigate penalties that could otherwise arise during a
            departmental audit.
          </p>
        </details>
      </div>
      <a class="button button-gold" href="./contact.html">Discuss your enquiry <span aria-hidden="true">↗</span></a>
    </section>
  </div>
</template>
