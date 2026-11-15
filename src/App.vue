<script setup lang="ts">
import { ref, watch } from 'vue'
import AboutPage from './pages/AboutPage.vue'
import ContactPage from './pages/ContactPage.vue'
import GstAdvisoryPage from './pages/GstAdvisoryPage.vue'
import HomePage from './pages/HomePage.vue'
import MsmeLitigationPage from './pages/MsmeLitigationPage.vue'
import WorkPage from './pages/WorkPage.vue'
import { assetUrl } from './utils/assets'
import { loadPageViewAnalytics, removeAnalyticsCookies } from './utils/googleAnalytics'

type SitePage = 'home' | 'about' | 'work' | 'contact' | 'gst' | 'msme'

defineProps<{ page: SitePage }>()

type Theme = 'light' | 'dark'
type CookieConsent = 'accepted' | 'rejected'

const consentCookieName = 'sewak_analytics_consent'

const readCookieConsent = (): CookieConsent | null => {
  const value = document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${consentCookieName}=`))
    ?.slice(consentCookieName.length + 1)

  return value === 'accepted' || value === 'rejected' ? value : null
}

const getInitialTheme = (): Theme => {
  const savedTheme = window.localStorage.getItem('sewak-theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const menuOpen = ref(false)
const theme = ref<Theme>(getInitialTheme())
const cookieConsent = ref<CookieConsent | null>(readCookieConsent())
const cookieSettingsOpen = ref(cookieConsent.value === null)
const googleAnalyticsConfigured = Boolean(import.meta.env.VITE_GA_MEASUREMENT_ID?.trim())

watch(
  theme,
  (value) => {
    document.documentElement.dataset.theme = value
    window.localStorage.setItem('sewak-theme', value)
  },
  { immediate: true },
)

watch(
  cookieConsent,
  (value) => {
    if (value === 'accepted') loadPageViewAnalytics()
  },
  { immediate: true },
)

const closeMenu = () => {
  menuOpen.value = false
}

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const saveCookieConsent = (value: CookieConsent) => {
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${consentCookieName}=${value}; Max-Age=15552000; Path=/; SameSite=Lax${secure}`

  if (value === 'rejected') removeAnalyticsCookies()

  cookieConsent.value = value
  cookieSettingsOpen.value = false
}
</script>

<template>
  <div id="top" class="site-shell" :data-theme="theme">
    <header class="site-header">
      <a class="brand" href="./index.html" aria-label="Sewak Legal & Financial Associates home" @click="closeMenu">
        <span class="brand-mark">
          <img :src="assetUrl('images/logo.jpeg')" alt="" />
        </span>
        <span class="brand-name">
          <strong>SEWAK</strong>
          <span>LEGAL &amp; FINANCIAL<br />ASSOCIATES LLP</span>
        </span>
      </a>

      <nav id="primary-navigation" class="navigation" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
        <a href="./index.html" :aria-current="page === 'home' ? 'page' : undefined" @click="closeMenu">Home</a>
        <a href="./about.html" :aria-current="page === 'about' ? 'page' : undefined" @click="closeMenu">About</a>
        <a href="./work.html" :aria-current="page === 'work' ? 'page' : undefined" @click="closeMenu">Services</a>
        <a class="nav-contact" href="./contact.html" :aria-current="page === 'contact' ? 'page' : undefined" @click="closeMenu">
          Contact us <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <div class="header-actions">
        <button
          class="theme-toggle"
          type="button"
          :aria-label="theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'"
          :aria-pressed="theme === 'dark'"
          :title="theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'"
          @click="toggleTheme"
        >
          <svg v-if="theme === 'light'" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.2 15.4A8.2 8.2 0 0 1 8.6 3.8 8.3 8.3 0 1 0 20.2 15.4Z" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="3.7" />
            <path d="M12 2.5v2.1M12 19.4v2.1M4.6 4.6l1.5 1.5m11.8 11.8 1.5 1.5M2.5 12h2.1m14.8 0h2.1M4.6 19.4l1.5-1.5M17.9 6.1l1.5-1.5" />
          </svg>
        </button>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="primary-navigation"
          :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <main>
      <HomePage v-if="page === 'home'" />
      <AboutPage v-else-if="page === 'about'" />
      <WorkPage v-else-if="page === 'work'" />
      <ContactPage v-else-if="page === 'contact'" />
      <GstAdvisoryPage v-else-if="page === 'gst'" />
      <MsmeLitigationPage v-else />
    </main>

    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-identity">
          <a class="footer-brand" href="./index.html">
            <img :src="assetUrl('images/logo.jpeg')" alt="" />
            <span>SEWAK<small>LEGAL &amp; FINANCIAL ASSOCIATES LLP</small></span>
          </a>
          <p>Legal clarity. Financial confidence.</p>
        </div>

        <nav class="footer-link-group" aria-label="Explore">
          <h2>Explore</h2>
          <a href="./index.html">Home</a>
          <a href="./about.html">About</a>
          <a href="./work.html">Services</a>
          <a href="./contact.html">Contact us</a>
        </nav>

        <nav class="footer-link-group" aria-label="Services">
          <h2>Services</h2>
          <a href="./gst-advisory.html">GST &amp; Indirect Tax Advisory</a>
          <a href="./msme-commercial-litigation.html">MSME Rights &amp; Commercial Litigation</a>
        </nav>
      </div>

      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} Sewak Legal &amp; Financial Associates LLP</span>
        <button class="cookie-preferences-link" type="button" @click="cookieSettingsOpen = true">
          Cookie preferences
        </button>
        <a href="#top" @click="closeMenu">Back to top ↑</a>
      </div>
    </footer>

    <aside v-if="cookieSettingsOpen" class="cookie-banner" aria-label="Cookie preferences" role="region">
      <div class="cookie-banner-copy">
        <h2>Privacy &amp; cookies</h2>
        <p>
          An essential cookie remembers your choice. Optional Google Analytics is limited to page
          views and loads only with your permission.
          <template v-if="!googleAnalyticsConfigured">
            GA4 is not configured yet, so analytics are currently inactive.
          </template>
          We never track form contents. Your choice is saved for six months.
        </p>
      </div>
      <div class="cookie-banner-actions">
        <button class="cookie-reject" type="button" @click="saveCookieConsent('rejected')">
          Reject optional
        </button>
        <button class="button button-gold" type="button" @click="saveCookieConsent('accepted')">
          Allow analytics
        </button>
      </div>
    </aside>
  </div>
</template>
