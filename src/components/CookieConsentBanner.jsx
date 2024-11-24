import { PrimaryButton } from '@components'
import { useCookieConsent } from '@context'

const CookieConsentBanner = () => {
  const { cookieCategories, handleCategoryChange, handleSavePreferences, handleAcceptAll, handleAcceptNecessary } = useCookieConsent()

  return (
    <div className='bg-janna text-cafeNoir z-[9999] border-t-4 border-t-transparent rounded-t-lg font-quicksand px-6 py-4 flex flex-col items-center text-center gap-4 fixed bottom-0 left-0 w-full max-w-full min-h-[unset] max-h-[calc(100vh-50px)] overflow-y-auto'>
      <div className='px-8'>
        <h3 className='text-xl pb-3'>Datenschutz-Präferenz</h3>
        <p>
          Diese Website verwendet Cookies von Drittanbietern, um personalisierte Inhalte und Funktionen, wie z.B. eingebettete Videos und
          Playlists, bereitzustellen. Wenn du unter 16 Jahre alt bist und deine Einwilligung zu optionalen Services geben möchtest, musst du
          deine Erziehungsberechtigten um Erlaubnis bitten.
        </p>
      </div>

      <div className='px-8 py-4 mx-auto flex flex-col md:flex-row md:space-x-6 sm:space-y-0 md:justify-center w-full gap-2'>
        <label className='flex items-center space-x-2'>
          <input
            type='checkbox'
            checked={cookieCategories.functional}
            onChange={(e) => handleCategoryChange('functional', e.target.checked)}
            className='accent-paarl form-checkbox h-5 w-5 rounded-xl border-2'
          />
          <span>Funktional</span>
        </label>

        <label className='flex items-center space-x-2'>
          <input
            type='checkbox'
            checked={cookieCategories.analytics}
            onChange={(e) => handleCategoryChange('analytics', e.target.checked)}
            className='accent-paarl form-checkbox h-5 w-5 rounded-xl border-2'
          />
          <span>Leistung- und Performance</span>
        </label>

        <label className='flex items-center space-x-2'>
          <input
            type='checkbox'
            checked={cookieCategories.marketing}
            onChange={(e) => handleCategoryChange('marketing', e.target.checked)}
            className='accent-paarl form-checkbox h-5 w-5 rounded-xl border-2'
          />
          <span>Tracking- und Werbung</span>
        </label>

        <label className='flex items-center space-x-2'>
          <input type='checkbox' checked disabled className='form-checkbox h-5 w-5 border-2 cursor-not-allowed' />
          <span>Essenziell*</span>
        </label>
      </div>

      <div className='w-full max-w-4xl mx-auto px-8 flex flex-col sm:flex-row gap-2 justify-center'>
        <PrimaryButton onClick={handleAcceptNecessary} className='w-full sm:w-auto'>
          Alle Ablehnen
        </PrimaryButton>
        <PrimaryButton onClick={handleSavePreferences} className='w-full sm:w-auto'>
          Einwilligung Speichern
        </PrimaryButton>
        <PrimaryButton onClick={handleAcceptAll} className='w-full sm:w-auto'>
          Alle Akzeptieren
        </PrimaryButton>
      </div>

      <div className='pt-4'>
        <a href='/privacy' className='text-copper hover:text-sand'>
          Mehr erfahren
        </a>
      </div>

      <p className='text-sm text-gray-600 mt-2'>
        *Essenziell: Diese Cookies sind notwendig für die grundlegenden Funktionen der Website und können nicht deaktiviert werden.
      </p>
    </div>
  )
}

export default CookieConsentBanner
