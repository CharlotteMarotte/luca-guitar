import CookieConsent from 'react-cookie-consent'

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location='bottom'
      buttonText='Akzeptieren'
      declineButtonText='Ablehnen'
      cookieName='userConsent'
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
      enableDeclineButton
    >
      Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Indem Sie diese Website weiterhin nutzen, stimmen Sie der Verwendung
      von Cookies zu. Sie können entscheiden, welche Cookie-Kategorien Sie akzeptieren möchten.
      <a href='/privacy' className='text-copper hover:text-sand'>
        Mehr erfahren
      </a>
    </CookieConsent>
  )
}

export default CookieConsentBanner
