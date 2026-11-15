const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

type AnalyticsWindow = Window & {
  dataLayer?: unknown[][]
  gtag?: (...args: unknown[]) => void
}

export const loadPageViewAnalytics = () => {
  if (!measurementId) return

  const analyticsWindow = window as AnalyticsWindow
  if (analyticsWindow.gtag) return

  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? []
  analyticsWindow.gtag = (...args) => {
    analyticsWindow.dataLayer?.push(args)
  }

  analyticsWindow.gtag('js', new Date())
  analyticsWindow.gtag('config', measurementId, { send_page_view: true })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.append(script)
}

export const removeAnalyticsCookies = () => {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim()
    if (name === '_ga' || name?.startsWith('_ga_')) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`
    }
  })
}
