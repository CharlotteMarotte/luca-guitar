import React, { useState } from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { PrimaryButton } from '@components'

const CookieConsentBanner = () => {
  const [cookieCategories, setCookieCategories] = useState({
    marketing: false,
    analytics: false,
    necessary: true
  })

  const handleAcceptAll = () => {
    Cookies.set('analyticsCookie', 'true', { expires: 365 })
    Cookies.set('marketingCookie', 'true', { expires: 365 })
    Cookies.set('userConsent', 'true', { expires: 365 })
  }

  const handleSavePreferences = () => {
    if (cookieCategories.analytics) {
      Cookies.set('analyticsCookie', 'true', { expires: 365 })
    } else {
      Cookies.remove('analyticsCookie')
    }

    if (cookieCategories.marketing) {
      Cookies.set('marketingCookie', 'true', { expires: 365 })
    } else {
      Cookies.remove('marketingCookie')
    }

    Cookies.set('userConsent', 'true', { expires: 365 })
  }

  const handleDecline = () => {
    Cookies.remove('analyticsCookie')
    Cookies.remove('marketingCookie')
    Cookies.set('userConsent', 'false', { expires: 365 })
  }

  const handleCategoryChange = (category, isAccepted) => {
    setCookieCategories((prevState) => ({
      ...prevState,
      [category]: isAccepted
    }))
  }

  return (
    <CookieConsent
      location='bottom'
      buttonText='Alle Akzeptieren'
      declineButtonText='Ablehnen'
      cookieName='userConsent'
      onAccept={handleAcceptAll}
      onDecline={handleDecline}
      enableDeclineButton
      style={{
        background: '#333',
        zIndex: 9999,
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        fontFamily: 'Quicksand, sans-serif'
      }}
      buttonStyle={{
        backgroundColor: '#c56b2e',
        color: '#fff',
        fontSize: '14px',
        borderRadius: '2rem',
        padding: '12px 24px'
      }}
      declineButtonStyle={{
        backgroundColor: '#f0c4a2',
        color: '#fff',
        fontSize: '14px',
        borderRadius: '2rem',
        padding: '12px 24px'
      }}
    >
      <div>Auf dieser Seite werden Cookies verwendet, um Inhalte Drittanbieter anzuzeigen. Wähle deine Präferenzen:</div>

      <label>
        <input type='checkbox' checked={cookieCategories.analytics} onChange={(e) => handleCategoryChange('analytics', e.target.checked)} />
        Statistik
      </label>

      <label>
        <input type='checkbox' checked={cookieCategories.marketing} onChange={(e) => handleCategoryChange('marketing', e.target.checked)} />
        Marketing
      </label>

      <label>
        <input type='checkbox' checked disabled />
        Essenziell
      </label>

      <div>
        <PrimaryButton onClick={handleSavePreferences}>Präferenzen Speichern</PrimaryButton>
        <PrimaryButton onClick={handleAcceptAll}>Alle Akzeptieren</PrimaryButton>
      </div>

      <a href='/privacy' className='text-copper hover:text-sand'>
        Mehr erfahren
      </a>
    </CookieConsent>
  )
}

export default CookieConsentBanner
