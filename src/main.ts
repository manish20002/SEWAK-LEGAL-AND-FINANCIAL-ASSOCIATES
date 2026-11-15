import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const page = document.body.dataset.page

if (
  page !== 'home' &&
  page !== 'about' &&
  page !== 'work' &&
  page !== 'contact' &&
  page !== 'gst' &&
  page !== 'msme'
) {
  throw new Error(`Unknown website page: ${page ?? 'missing data-page'}`)
}

createApp(App, { page }).mount('#app')
