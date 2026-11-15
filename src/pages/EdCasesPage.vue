<script setup lang="ts">
import { assetUrl } from '../utils/assets'
</script>

<template>
  <div>
    <section class="page-hero service-hero">
      <div class="page-hero-content">
        <p class="eyebrow"><span></span> Service 01 / ED &amp; economic offences</p>
        <h1>Enforcement Directorate<br /><em>(ED) matters.</em></h1>
        <p>Legal representation and advisory in appropriate PMLA and FEMA proceedings.</p>
      </div>
      <img class="page-hero-logo" :src="assetUrl('images/logo.jpeg')" alt="Sewak rising-arrow monogram" />
    </section>

    <section class="service-detail">
      <div class="service-detail-intro">
        <span class="section-index">UNDERSTANDING ED PROCEEDINGS</span>
        <h2>What is the ED?<br /><em>What does it investigate?</em></h2>
        <p>
          The Directorate of Enforcement (ED) is a Government of India financial-investigation
          agency responsible for enforcing laws concerning anti-money laundering and foreign
          exchange. Its statutory remit includes the Prevention of Money Laundering Act (PMLA), the
          Foreign Exchange Management Act (FEMA), and the Fugitive Economic Offenders Act (FEOA).
          Under the PMLA, ED investigates alleged money laundering involving proceeds of crime
          connected to scheduled offences; the underlying scheduled offence is generally
          investigated by the agency with jurisdiction over it. FEMA proceedings concern alleged
          contraventions of foreign-exchange law.
        </p>
      </div>

      <h2 class="service-capabilities-heading">ED matters we assist with</h2>
      <div class="service-capabilities">
        <article class="service-capability-card">
          <span>01</span>
          <div>
            <h3>PMLA investigations and summons</h3>
            <p>
              Advice and representation in response to ED notices and summons, including summons
              under Section 50 of the PMLA, and in related investigation or prosecution proceedings.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>02</span>
          <div>
            <h3>Search and seizure proceedings</h3>
            <p>
              Legal support during PMLA-related search and seizure operations, including assistance
              with procedural and documentary matters arising from the action.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>03</span>
          <div>
            <h3>Provisional attachment and adjudication</h3>
            <p>
              Responses to provisional attachment proceedings, representation before the PMLA
              Adjudicating Authority, and related appellate matters concerning attached property.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>04</span>
          <div>
            <h3>FEMA investigations and adjudication</h3>
            <p>
              Advice and representation in alleged foreign-exchange contraventions involving
              remittances, foreign investment, overseas holdings, external borrowings, or export
              proceeds.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>05</span>
          <div>
            <h3>Appeals and court proceedings</h3>
            <p>
              Representation in statutory appeals before the Appellate Tribunal (PMLA) and in
              related court proceedings, including matters involving ED actions and attachment
              orders.
            </p>
          </div>
        </article>
        <article class="service-capability-card">
          <span>06</span>
          <div>
            <h3>ECIR and look-out circular matters</h3>
            <p>
              Assessment of available legal remedies and court challenges concerning Enforcement
              Case Information Reports (ECIRs) and look-out circulars (LOCs), where appropriate.
            </p>
          </div>
        </article>
      </div>

      <div class="service-cta">
        <div>
          <span class="eyebrow"><span></span> Need advice on an ED matter?</span>
          <h2>Discuss your<br /><em>next step.</em></h2>
        </div>
        <a class="button button-gold" href="./contact.html">Talk to our team <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </div>
</template>
