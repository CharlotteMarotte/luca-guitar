import { useCookieConsent } from '@context'
import { PrimaryButton } from '@components'

const CookieConsentPlaceholder = ({ buttonColor, borderColor, buttonTextColor, hoverTextColor }) => {
  const { handleReset, bannerVisible } = useCookieConsent()

  const buttonText = bannerVisible ? 'Stimme der Verwendung von Cookies im Banner unten zu' : 'Cookies aktivieren'

  return (
    <div role='region' aria-live='polite'>
      <h2 className='text-xl md:text-2xl font-semibold mb-4'>Um diese Inhalte zu sehen, musst du die Cookies aktivieren.</h2>
      <p className='text-sm md:text-base mb-6'>
        Diese Website verwendet Cookies von Drittanbietern, um personalisierte Inhalte und Funktionen, wie z.B. eingebettete Videos und
        Playlists, bereitzustellen. Ohne deine Zustimmung können diese Inhalte nicht angezeigt werden.
      </p>

      <div className='flex justify-center'>
        <PrimaryButton
          backgroundColor={buttonColor}
          borderColor={borderColor}
          textColor={buttonTextColor}
          hoverTextColor={hoverTextColor ? hoverTextColor : `hover:${buttonTextColor}`}
          onClick={handleReset}
          hoverEffect={true}
          aria-label='Cookies akzeptieren'
        >
          {buttonText}
        </PrimaryButton>
      </div>
    </div>
  )
}

export default CookieConsentPlaceholder
