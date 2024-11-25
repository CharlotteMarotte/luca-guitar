import { PrimaryButton } from '@components'
import { useCookieConsent } from '@context'

const CookieConsentBanner = () => {
  const { cookieCategoriesConsent, handleCategoryChange, handleSavePreferences, handleAcceptAll, handleDecline } = useCookieConsent()

  return (
    <section
      className='bg-neutralLight text-textDark rounded-t-lg font-quickneutralMedium px-6 py-4 flex flex-col items-center text-center gap-4 fixed bottom-0 left-0 w-full max-w-full min-h-[unset] max-h-[calc(100vh-50px)] overflow-y-auto'
      role='dialog'
      aria-labelledby='cookie-consent-heading'
      aria-describedby='cookie-consent-description'
    >
      <div className='px-8'>
        <h3 id='cookie-consent-heading' className='text-xl pb-3'>
          Datenschutz-Präferenz
        </h3>
        <p id='cookie-consent-description'>
          Diese Website verwendet Cookies von Drittanbietern, um personalisierte Inhalte und Funktionen, wie z.B. eingebettete Videos und
          Playlists, bereitzustellen. Wenn du unter 16 Jahre alt bist und deine Einwilligung zu optionalen Services geben möchtest, musst du
          deine Erziehungsberechtigten um Erlaubnis bitten.
        </p>
      </div>

      <div className='px-8 py-4 mx-auto flex flex-col md:flex-row md:space-x-6 sm:space-y-0 md:justify-center w-full gap-2'>
        <label htmlFor='functional-cookie' className='flex items-center space-x-2'>
          <input
            type='checkbox'
            id='functional-cookie'
            checked={cookieCategoriesConsent.functional}
            onChange={(e) => handleCategoryChange('functional', e.target.checked)}
            className='secondary-primary h-5 w-5 rounded-xl border-2'
          />
          <span>Funktional</span>
        </label>

        <label htmlFor='analytics-cookie' className='flex items-center space-x-2'>
          <input
            type='checkbox'
            id='analytics-cookie'
            checked={cookieCategoriesConsent.analytics}
            onChange={(e) => handleCategoryChange('analytics', e.target.checked)}
            className='secondary-primary h-5 w-5 rounded-xl border-2'
          />
          <span>Performance</span>
        </label>

        <label htmlFor='marketing-cookie' className='flex items-center space-x-2'>
          <input
            type='checkbox'
            id='marketing-cookie'
            checked={cookieCategoriesConsent.marketing}
            onChange={(e) => handleCategoryChange('marketing', e.target.checked)}
            className='secondary-primary h-5 w-5 rounded-xl border-2'
          />
          <span>Tracking- und Werbung</span>
        </label>

        <label className='flex items-center space-x-2'>
          <input
            type='checkbox'
            checked
            readOnly
            className=' h-5 w-5 border-2 cursor-not-allowed secondary-neutralLight rounded-x'
            aria-label='Necessary cookies (required)'
          />
          <span className='text-gray-500'>Essenziell*</span>
        </label>
      </div>

      <div className='w-full max-w-4xl mx-auto px-8 flex flex-col sm:flex-row gap-2 justify-center'>
        <PrimaryButton onClick={handleDecline} className='w-full sm:w-auto'>
          Nur essenzielle akzeptieren
        </PrimaryButton>
        <PrimaryButton onClick={handleSavePreferences} className='w-full sm:w-auto'>
          Einwilligung Speichern
        </PrimaryButton>
        <PrimaryButton onClick={handleAcceptAll} className='w-full sm:w-auto'>
          Alle Akzeptieren
        </PrimaryButton>
      </div>

      <div className='pt-2'>
        <a href='/privacy' className='text-secondary hover:text-neutralMedium'>
          Mehr erfahren
        </a>
      </div>

      <p className='text-sm text-gray-600 mt-2'>
        *Essenziell: Diese Cookies sind notwendig für die grundlegenden Funktionen der Website und können nicht deaktiviert werden.
      </p>
    </section>
  )
}

export default CookieConsentBanner
