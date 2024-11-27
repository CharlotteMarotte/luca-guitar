import { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'

const COOKIE_EXPIRY_DAYS = 365
const CookieConsentContext = createContext()

export const useCookieConsent = () => useContext(CookieConsentContext)

export const CookieConsentProvider = ({ children }) => {
  const [cookieCategoriesConsent, setcookieCategoriesConsent] = useState({
    marketing: false,
    analytics: false,
    functional: false
  })

  const [bannerVisible, setBannerVisible] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const consentStatus = Cookies.get('cookieInteraction')
    const marketingConsent = Cookies.get('marketingCookie') === 'true'
    const analyticsConsent = Cookies.get('analyticsCookie') === 'true'
    const functionalConsent = Cookies.get('functionalCookie') === 'true'

    setcookieCategoriesConsent({
      marketing: marketingConsent,
      analytics: analyticsConsent,
      functional: functionalConsent
    })

    if (consentStatus === 'true') {
      setBannerVisible(false)
    }

    setLoading(false)
  }, [])

  const updateCookies = (categories) => {
    Cookies.set('analyticsCookie', categories.analytics.toString(), {
      expires: COOKIE_EXPIRY_DAYS
    })
    Cookies.set('marketingCookie', categories.marketing.toString(), {
      expires: COOKIE_EXPIRY_DAYS
    })
    Cookies.set('functionalCookie', categories.functional.toString(), {
      expires: COOKIE_EXPIRY_DAYS
    })
    Cookies.set('cookieInteraction', 'true', { expires: COOKIE_EXPIRY_DAYS })
  }

  const updateAndSet = (updatedCategories) => {
    setcookieCategoriesConsent(updatedCategories)
    updateCookies(updatedCategories)
    setBannerVisible(false)
  }

  const handleSavePreferences = () => {
    updateCookies(cookieCategoriesConsent)
    setBannerVisible(false)
  }

  const handleAcceptAll = () => {
    updateAndSet({ marketing: true, analytics: true, functional: true })
  }

  const handleDecline = () => {
    updateAndSet({
      marketing: false,
      analytics: false,
      functional: false
    })
  }

  const handleReset = () => {
    Cookies.remove('analyticsCookie')
    Cookies.remove('marketingCookie')
    Cookies.remove('functionalCookie')
    Cookies.remove('cookieInteraction')
    updateAndSet({
      marketing: false,
      analytics: false,
      functional: false
    })
    setBannerVisible(true)
  }

  const handleCategoryChange = (category, isAccepted) => {
    setcookieCategoriesConsent((prevState) => ({
      ...prevState,
      [category]: isAccepted
    }))
  }

  return (
    <CookieConsentContext.Provider
      value={{
        bannerVisible,
        cookieCategoriesConsent,
        handleSavePreferences,
        handleAcceptAll,
        handleDecline,
        handleReset,
        handleCategoryChange,
        loading
      }}
    >
      <div role='region' aria-live='polite' aria-labelledby='cookie-consent-banner' className={bannerVisible ? 'block' : 'hidden'}>
        <div className='bg-primary text-white p-4' id='cookie-consent-banner'>
          <h2 id='cookie-consent-header' className='text-xl font-semibold'>
            Wir verwenden Cookies
          </h2>
          <p className='text-sm'>Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.</p>

          <div className='flex gap-4'>
            <button aria-label='Alle Cookies akzeptieren' onClick={handleAcceptAll} className='btn btn-accept'>
              Alle akzeptieren
            </button>
            <button aria-label='Cookies ablehnen' onClick={handleDecline} className='btn btn-decline'>
              Ablehnen
            </button>
            <button aria-label='Einstellungen speichern' onClick={handleSavePreferences} className='btn btn-save'>
              Einstellungen speichern
            </button>
          </div>

          <div className='flex gap-2'>
            <label htmlFor='marketing' className='flex items-center'>
              <input
                type='checkbox'
                id='marketing'
                checked={cookieCategoriesConsent.marketing}
                onChange={(e) => handleCategoryChange('marketing', e.target.checked)}
                aria-label='Marketing Cookies aktivieren'
              />
              Marketing
            </label>
            <label htmlFor='analytics' className='flex items-center'>
              <input
                type='checkbox'
                id='analytics'
                checked={cookieCategoriesConsent.analytics}
                onChange={(e) => handleCategoryChange('analytics', e.target.checked)}
                aria-label='Analytics Cookies aktivieren'
              />
              Analytics
            </label>
            <label htmlFor='functional' className='flex items-center'>
              <input
                type='checkbox'
                id='functional'
                checked={cookieCategoriesConsent.functional}
                onChange={(e) => handleCategoryChange('functional', e.target.checked)}
                aria-label='Funktionale Cookies aktivieren'
              />
              Funktional
            </label>
          </div>
        </div>
      </div>

      {children}
    </CookieConsentContext.Provider>
  )
}

export default CookieConsentProvider
