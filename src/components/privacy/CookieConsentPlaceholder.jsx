import { useCookieConsent } from '@context'
import { Button } from '@components'

const CookieConsentPlaceholder = ({ buttonColor, borderColor, buttonTextColor, hoverTextColor }) => {
  const { handleReset, bannerVisible } = useCookieConsent()

  const buttonText = bannerVisible ? 'Stimme der Verwendung von Cookies im Banner unten zu' : 'Cookies aktivieren'

  return (
    <div role='region' aria-live='polite' aria-labelledby='cookie-consent-heading' className='px-6 py-4'>
      <h2 id='cookie-consent-heading' className='text-xl md:text-2xl font-semibold mb-4'>
        Um diese Inhalte zu sehen, musst du die Cookies aktivieren.
      </h2>

      <p className='text-sm md:text-base mb-6'>
        Diese Website verwendet Cookies von Drittanbietern, um personalisierte Inhalte und Funktionen, wie z.B. eingebettete Videos und
        Playlists, bereitzustellen. Ohne deine Zustimmung können diese Inhalte nicht angezeigt werden.
      </p>

      <div className='flex justify-center'>
        <Button
          styleOptions={{
            backgroundColor: buttonColor,
            borderColor: borderColor,
            textColor: buttonTextColor,
            hoverTextColor: hoverTextColor ? hoverTextColor : `hover:${buttonTextColor}`
          }}
          onClick={handleReset}
          aria-label='Cookies aktivieren'
          title='Aktiviere Cookies, um personalisierte Inhalte anzuzeigen'
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default CookieConsentPlaceholder
