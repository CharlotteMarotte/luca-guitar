import CookieConsent from 'react-cookie-consent'
import { PrimaryButton } from '@components'
import { useCookieConsent } from '@context'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const CookieConsentBanner = () => {
  const { bannerVisible, cookieCategories, handleCategoryChange, handleSavePreferences, handleAcceptAll, handleDecline } =
    useCookieConsent()

  const fullConfig = resolveConfig(tailwindConfig)
  const jannaHex = fullConfig.theme.colors.janna
  const copperHex = fullConfig.theme.colors.cafeNoir

  return (
    <CookieConsent
      location='bottom'
      cookieName='cookieInteraction'
      style={{
        background: jannaHex,
        color: copperHex,
        zIndex: 9999,
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        fontFamily: 'Quicksand, sans-serif',
        padding: '15px 25px',
        alignItems: 'center',
        textAlign: 'center',
        gap: '10px',
        minHeight: 'unset'
      }}
      buttonStyle={{
        display: 'none'
      }}
      visible={bannerVisible}
    >
      <div className='cookie-text px-8'>
        <h3 className='text-xl pb-3'>Datenschutz-Präferenz</h3>
        <p>
          Auf dieser Seite werden Cookies verwendet, um Inhalte von Drittanbietern anzuzeigen. Wenn du jünger als 16 Jahre alt bist und
          deine Einwilligung zu diesen optionalen Services geben möchtest, musst du deine Erziehungsberechtigten um Erlaubnis bitten. Wähle
          deine Präferenzen, welche Cookies du erlauben willst:
        </p>
      </div>

      <div className='cookie-categories flex justify-center w-full px-8 py-4'>
        <div className='flex justify-around w-full max-w-4xl'>
          <label className='cookie-category flex items-center space-x-4'>
            <input
              type='checkbox'
              checked={cookieCategories.functional}
              onChange={(e) => handleCategoryChange('functional', e.target.checked)}
              className='accent-paarl form-checkbox h-5 w-5 border-radius-3xl border-2 '
            />
            <span>Funktionale</span>
          </label>

          <label className='cookie-category flex items-center space-x-4'>
            <input
              type='checkbox'
              checked={cookieCategories.analytics}
              onChange={(e) => handleCategoryChange('analytics', e.target.checked)}
              className='accent-paarl form-checkbox h-5 w-5 border-radius-3xl border-2 '
            />
            <span>Leistungs- und Performance</span>
          </label>

          <label className='cookie-category flex items-center space-x-4'>
            <input
              type='checkbox'
              checked={cookieCategories.marketing}
              onChange={(e) => handleCategoryChange('marketing', e.target.checked)}
              className='accent-paarl form-checkbox h-5 w-5 border-radius-3xl border-2 '
            />
            <span>Tracking- und Werbe</span>
          </label>

          <label className='cookie-category flex items-center space-x-4'>
            <input type='checkbox' checked disabled className='form-checkbox h-5 w-5 border-2 cursor-not-allowed' />
            <span>Essenziell*</span>
          </label>
        </div>
      </div>

      <div className='button-container w-full max-w-4xl mx-auto px-8 flex flex-col sm:flex-row sm:gap-4 justify-center'>
        <PrimaryButton onClick={handleDecline} className='w-full sm:w-auto'>
          Alle Ablehnen
        </PrimaryButton>
        <PrimaryButton onClick={handleSavePreferences} className='w-full sm:w-auto'>
          Einwilligung Speichern
        </PrimaryButton>
        <PrimaryButton onClick={handleAcceptAll} className='w-full sm:w-auto'>
          Alle Akzeptieren
        </PrimaryButton>
      </div>

      <div className='more-info pt-4'>
        <a href='/privacy' className='text-copper hover:text-sand'>
          Mehr erfahren
        </a>
      </div>
      <p className='text-sm text-gray-600 mt-2'>
        *Essenziell: Diese Cookies sind notwendig für die grundlegenden Funktionen der Website und können nicht deaktiviert werden.
      </p>
    </CookieConsent>
  )
}

export default CookieConsentBanner
