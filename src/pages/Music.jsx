import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { ShapeDivider, PageScaffold, CookieConsentPlaceholder } from '@components'
import { useCookieConsent } from '@context'

const Music = () => {
  const { cookieCategoriesConsent } = useCookieConsent()
  const { marketing, functional, analytics } = cookieCategoriesConsent

  const fullConfig = resolveConfig(tailwindConfig)
  const accentHex = fullConfig.theme.colors.accent

  const renderSoundCloudEmbed = (trackUrl, title) => (
    <>
      <div className='block sm:hidden'>
        <iframe
          width='100%'
          height='300'
          allow='autoplay'
          src={`https://w.soundcloud.com/player/?url=${trackUrl}&color=%239a5e1a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          title={title}
          aria-label={`SoundCloud Player für ${title}`}
        ></iframe>
      </div>

      <div className='hidden sm:block'>
        <iframe
          className='w-full'
          width='100%'
          height='166'
          allow='autoplay'
          src={`https://w.soundcloud.com/player/?url=${trackUrl}&color=%239a5e1a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
          title={title}
          aria-label={`SoundCloud Player für ${title}`}
        ></iframe>
      </div>
    </>
  )

  const renderYouTubeEmbed = (src, title) => (
    <div className='w-full lg:w-1/2 pb-6'>
      <div className='relative pb-[56.25%] w-full'>
        <iframe
          className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg'
          src={src}
          title={title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          aria-label={`Youtube Player für ${title}`}
        ></iframe>
      </div>
    </div>
  )

  return (
    <>
      <PageScaffold title='Meine Musik' bgColor='bg-accent' textColor='text-textMedium'>
        <section id='music' className='text-textMedium min-h-screen flex flex-col items-center justify-center'>
          <p className='px-8 md:px-20 text-lg text-center md:text-justify'>
            Hier findest du eine Auswahl an Videos, die sowohl meine eigenen Kompositionen als auch einige Interpretationen bekannter Stücke
            zeigen. In den folgenden{' '}
            <a
              href='https://www.youtube.com/@lucademichielimusic'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-white'
              aria-label='Link zu Luca de Michielis YouTube-Kanal'
            >
              YouTube
            </a>
            -Videos gibt es einen Einblick in meine Ausführung von Flamenco- und klassischen Gitarrenstücken. Auf{' '}
            <a
              href='https://soundcloud.com/lucademichieliguitar'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-white'
              aria-label='Link zu Luca de Michielis SoundCloud-Profil'
            >
              Soundcloud
            </a>{' '}
            sind einige meiner eigenen Werke veröffentlicht. Viel Spaß beim Hören!
          </p>
          {marketing && functional && analytics ? (
            <>
              <div className='py-6 container flex flex-col lg:flex-row items-center justify-center px-8 md:px-20 gap-8 flex-grow'>
                {renderYouTubeEmbed(
                  'https://www.youtube-nocookie.com/embed/t2KBqFjz-Ws?si=GE0UZpQBhU0FdAU0&controls=0',
                  'Luca - Flamenco Stücke Playlist'
                )}
                {renderYouTubeEmbed(
                  'https://www.youtube-nocookie.com/embed/iZ-P3zDm1iE?si=rT-gewQHCh-GeTKo',
                  'Luca - Klassische Stücke Playlist'
                )}
              </div>
              <div className='py-6 container flex flex-col lg:grid lg:grid-cols-2 gap-8 px-8 md:px-20'>
                {renderSoundCloudEmbed('https%3A//api.soundcloud.com/tracks/1317283315', '6th Season I (demo200722)')}
                {renderSoundCloudEmbed('https%3A//api.soundcloud.com/tracks/1332279880', '6th Season II - Luca De Michieli (demo200722)')}
                {renderSoundCloudEmbed('https%3A//api.soundcloud.com/tracks/1531309321', '6th Season III')}
                {renderSoundCloudEmbed('https%3A//api.soundcloud.com/tracks/1317278530', 'the 6th season IV (demo-juli2022)')}
              </div>
            </>
          ) : (
            <div className='flex flex-col items-center justify-center p-8 rounded-lg bg-textLight bg-opacity-20 text-center'>
              <CookieConsentPlaceholder buttonColor='bg-accentDark' />
            </div>
          )}
        </section>
      </PageScaffold>
      <ShapeDivider type='opaqueWavesBottom' fillColor={accentHex} backgroundColor='secondary' />
    </>
  )
}

export default Music
