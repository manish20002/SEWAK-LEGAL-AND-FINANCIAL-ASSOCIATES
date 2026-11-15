<script setup lang="ts">
import { assetUrl } from '../utils/assets'
</script>

<template>
  <div>
    <section class="page-hero page-hero-about">
      <div class="page-hero-content">
        <p class="eyebrow"><span></span> About the firm</p>
        <h1>Service rooted in<br /><em>integrity.</em></h1>
        <p>Solutions driven by expertise.</p>
      </div>
      <img class="page-hero-logo" :src="assetUrl('images/logo.jpeg')" alt="Sewak rising-arrow monogram" />
    </section>

    <section class="about-story">
      <div class="section-topline">
        <span class="eyebrow"><span></span> Our story</span>
        <span class="section-index">01 / ABOUT SEWAK</span>
      </div>
      <div class="about-story-grid">
        <h2>One who serves.<br /><em>Here to help you grow.</em></h2>
        <div class="about-story-copy">
          <p>
            Established on December 15, 2025, and headquartered in Hyderabad, Telangana, Sewak Legal
            and Financial Associates LLP was founded to bridge the gap between strict statutory
            frameworks and the day-to-day realities of running a business.
          </p>
          <p>
            The regulatory environment for enterprises in India is intricate, demanding, and
            constantly evolving. Recognizing this challenge, we formed a multidisciplinary coalition
            of legal strategists, tax advisors, and financial consultants.
          </p>
          <p>
            Our name, <em>Sewak</em>, translates to “one who serves,” and represents the foundational
            ethos of our firm. We do not view ourselves merely as external consultants; we operate
            as an integrated extension of your business, dedicated to safeguarding your commercial
            interests and fostering sustainable growth.
          </p>
          <p>
            From day one, our goal has been to eliminate the friction enterprises face when
            navigating complex GST laws, commercial disputes, and financial compliance, allowing
            business owners to focus on what they do best: scaling their operations.
          </p>
        </div>
      </div>

      <div class="about-facts" aria-label="Firm registration details">
        <article>
          <span>INCORPORATED</span>
          <strong>December 15, 2025</strong>
        </article>
        <article>
          <span>REGISTERED WITH</span>
          <strong>Registrar of Companies, Hyderabad</strong>
        </article>
        <article>
          <span>HEADQUARTERS</span>
          <strong>Madhura Nagar Colony, Ameerpet, Hyderabad, Telangana</strong>
        </article>
      </div>
    </section>

    <section class="leadership-section">
      <div class="section-topline">
        <span class="eyebrow"><span></span> Our leadership</span>
        <span class="section-index">02 / FOUNDER</span>
      </div>
      <div class="leadership-grid">
        <div class="leader-monogram" aria-hidden="true">AM</div>
        <div class="leadership-copy">
          <span class="leader-role">FOUNDER</span>
          <h2>Amit <em>Marda</em></h2>
          <p>
            Sewak Legal and Financial Associates LLP is spearheaded by our founder, Amit Marda.
          </p>
          <p>
            With a visionary approach to corporate advisory, Amit established the firm with a clear
            mandate: to eliminate the operational silos between legal counsel and financial
            management. Recognizing that growing enterprises need holistic, pragmatic solutions
            rather than fragmented advice, he built Sewak into a firm where legal foresight and
            financial precision operate in tandem.
          </p>
          <p>
            Under Amit’s leadership, the firm has cultivated a culture of unyielding integrity,
            proactive problem-solving, and relentless client advocacy. He ensures that every
            strategy—whether in commercial dispute resolution, complex GST compliance, or financial
            structuring—is aligned with the long-term commercial success and security of the
            businesses we serve.
          </p>
        </div>
      </div>
    </section>

    <section class="mission-section">
      <div class="section-topline">
        <span class="eyebrow"><span></span> What guides us</span>
        <span class="section-index">03 / OUR PURPOSE</span>
      </div>
      <div class="mission-grid">
        <article>
          <span>OUR MISSION</span>
          <h2>Make the complex<br /><em>clear and actionable.</em></h2>
          <p>
            To demystify complex legal and financial regulations, providing enterprises with
            proactive, airtight compliance, robust dispute resolution, and strategic financial
            oversight under one roof.
          </p>
        </article>
        <article>
          <span>OUR VISION</span>
          <h2>A trusted partner<br /><em>for growing enterprises.</em></h2>
          <p>
            To be the most trusted and reliable advisory partner for growing enterprises across
            India, known for our unwavering ethical standards, operational precision, and commitment
            to client success.
          </p>
        </article>
      </div>
    </section>

    <section class="advantage-section">
      <div class="advantage-heading">
        <p class="eyebrow"><span></span> The Sewak advantage</p>
        <h2>A multidisciplinary<br /><em>approach.</em></h2>
      </div>
      <div class="advantage-copy">
        <p>
          Traditionally, businesses are forced to act as middlemen between their chartered
          accountants and legal counsel. This silos information, delays critical decisions, and
          creates compliance blind spots.
        </p>
        <p>
          At Sewak, we break down these silos. By housing both deep financial acumen and aggressive
          legal representation within the same LLP, we provide holistic solutions. When we structure
          a commercial contract, we factor in the GST implications. When we file a recovery suit
          under the MSMED Act, our financial team has already meticulously reconciled the ledgers.
          This integrated approach ensures no detail falls through the cracks.
        </p>
      </div>
    </section>

    <section class="values-section">
      <div class="section-topline">
        <span class="eyebrow"><span></span> Our core values</span>
        <span class="section-index">04 / WHAT WE STAND FOR</span>
      </div>
      <h2>Principles behind<br /><em>every decision.</em></h2>
      <div class="values-grid">
        <article>
          <span>01</span>
          <h3>Integrity above all</h3>
          <p>
            We believe in absolute transparency with our clients and unyielding ethical standards
            in our practice. Your trust is our most valuable asset.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Proactive precision</h3>
          <p>
            We do not wait for notices to arrive. We meticulously audit, structure, and reconcile
            your operations to prevent liabilities before they materialize.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Commercial pragmatism</h3>
          <p>
            We understand that legal and tax advice cannot exist in a vacuum. Our strategies are
            designed to protect your bottom line, ensure liquidity, and support your specific
            operational realities.
          </p>
        </article>
        <article>
          <span>04</span>
          <h3>Relentless advocacy</h3>
          <p>
            Whether navigating a complex tax tribunal hearing or enforcing a delayed payment claim,
            we represent your interests fiercely and effectively.
          </p>
        </article>
      </div>
    </section>

    <section class="about-cta">
      <div>
        <p class="eyebrow"><span></span> Let’s build a secure future together</p>
        <h2>Advisory that works<br /><em>as hard as you do.</em></h2>
        <p>
          Your business deserves advisory that works as hard as you do. Partner with Sewak Legal
          and Financial Associates LLP and experience the peace of mind that comes with regulatory
          and financial oversight.
        </p>
      </div>
      <div class="about-cta-actions">
        <a class="button button-gold" href="./work.html">Explore work &amp; projects <span aria-hidden="true">↗</span></a>
        <a class="text-link" href="./contact.html">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </div>
</template>
