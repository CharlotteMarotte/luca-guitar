import { useCookieConsent } from '@context'
import { PrimaryButton } from '@components'

const CookieConsentPlaceholder = () => {
  const { handleReset, bannerVisible } = useCookieConsent()

  return (
    <div>
      <h2 className='text-xl md:text-2xl font-semibold mb-4'>Um diese Inhalte zu sehen, musst du die Cookies aktivieren.</h2>
      <p className='text-sm md:text-base mb-6'>
        Diese Website verwendet Cookies von Drittanbietern, um personalisierte Inhalte und Funktionen, wie z.B. eingebettete Videos und
        Playlists, bereitzustellen. Ohne deine Zustimmung können diese Inhalte nicht angezeigt werden.
      </p>
      <PrimaryButton onClick={handleReset}>
        {bannerVisible ? 'Stimme der Verwendung von Cookies im Banner unten zu, um die Inhalte anzuzeigen.' : 'Cookies aktivieren'}
      </PrimaryButton>
    </div>
  )
}

export default CookieConsentPlaceholder
