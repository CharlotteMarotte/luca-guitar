import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import clsx from 'clsx'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { useCookieConsent } from '@context'
import { ContactForm, PageScaffold, AnimateOnScroll, CookieConsentPlaceholder } from '@components'

const Contact = () => {
  const { cookieCategoriesConsent } = useCookieConsent()
  const { marketing, functional, analytics } = cookieCategoriesConsent

  const [responseMessage, setResponseMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)

  const fullConfig = resolveConfig(tailwindConfig)
  const neutralMediumHex = fullConfig.theme.colors.neutralMedium
  const accentHex = fullConfig.theme.colors.accent

  const handleSuccess = () => {
    setResponseMessage('Vielen Dank für deine Nachricht! Ich melde mich so schnell wie möglich zurück.')
    setIsSubmitted(true)
    setIsError(false)
    setTimeout(() => {
      setIsSubmitted(false)
      setResponseMessage('')
    }, 10000)
  }

  const handleError = () => {
    setResponseMessage(
      <span>
        Etwas ist schief gelaufen. Bitte versuche es später noch einmal oder sende mir{' '}
        <a href='mailto:lucademichieli@posteo.net' className='text-amber-50 underline'>
          direkt eine Email.
        </a>
      </span>
    )
    setIsError(true)
    setIsSubmitted(false)
  }

  return (
    <PageScaffold bgColor='bg-secondary' className='py-16'>
      <main role='main'>
        <section id='contact'>
          <div className='container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-textDark'>
            <div className='flex flex-col justify-center text-center md:text-left bg-secondaryLight p-6 rounded-3xl'>
              <h2 id='contact-header' className='text-3xl md:text-4xl mb-4'>
                Interesse geweckt? Melde dich gerne bei mir!
              </h2>
              <p className='text-lg md:text-xl mb-6'>
                Möchtest du mehr erfahren oder eine Probestunde buchen? Fülle das Formular aus, um mich zu kontaktieren!
              </p>

              {responseMessage && (
                <div
                  role='status'
                  aria-live='polite'
                  className={clsx('text-lg p-6 rounded-3xl mb-4 w-full max-w-md mx-auto md:mx-0 border-2', {
                    'text-textLight bg-error': isError,
                    'text-textLight bg-success': !isError
                  })}
                >
                  {responseMessage}
                </div>
              )}

              {!isError && !isSubmitted && <ContactForm onSubmitSuccess={handleSuccess} onSubmitError={handleError} />}
            </div>

            <div className='flex flex-col justify-center items-center h-full'>
              {marketing && functional && analytics ? (
                <div className='relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6'>
                  <iframe
                    title='Google Maps - Standort des Unterrichtsraums'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.731562934032!2d13.3221693!3d52.465888799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85186a55cabd7%3A0x9e15c3827909e3c8!2sGitarrenunterricht%20bei%20Luca%20de%20Michieli!5e0!3m2!1sde!2sde!4v1733484864233!5m2!1sde!2sde'
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden='false'
                    tabIndex='0'
                  />
                </div>
              ) : (
                <CookieConsentPlaceholder
                  buttonColor='bg-accent'
                  buttonTextColor='text-neutralMedium'
                  hoverTextColor='hover:text-textDark'
                  borderColor='border-neutralMedium'
                  aria-label='Cookies müssen akzeptiert werden, um Zugriff auf die Google Maps-Karte zu haben'
                />
              )}
              <AnimateOnScroll>
                <div className='flex flex-wrap justify-center items-center gap-4 mt-6'>
                  <SocialIcon
                    url='https://www.instagram.com/'
                    href='https://www.instagram.com/luca_de_michieli'
                    target='_blank'
                    rel='noopener noreferrer'
                    bgColor={neutralMediumHex}
                    fgColor={accentHex}
                    label='Instagram - Luca de Michieli'
                    aria-label='Instagram-Account von Luca de Michieli'
                    style={{
                      width: '70px',
                      height: '70px'
                    }}
                    className='rounded-full hover:border-2 hover:border-accent'
                  />

                  <SocialIcon
                    url='https://www.soundcloud.com'
                    href='https://soundcloud.com/lucademichieliguitar'
                    target='_blank'
                    rel='noopener noreferrer'
                    bgColor={neutralMediumHex}
                    fgColor={accentHex}
                    label='SoundCloud - Luca de Michieli'
                    aria-label='SoundCloud-Account von Luca de Michieli'
                    style={{
                      width: '70px',
                      height: '70px'
                    }}
                    className='rounded-full hover:border-2 hover:border-accent'
                  />

                  <SocialIcon
                    url='https://youtube.com'
                    href='https://www.youtube.com/@lucademichielimusic'
                    target='_blank'
                    rel='noopener noreferrer'
                    bgColor={neutralMediumHex}
                    fgColor={accentHex}
                    label='YouTube - Luca de Michieli'
                    aria-label='YouTube-Account von Luca de Michieli'
                    style={{
                      width: '70px',
                      height: '70px'
                    }}
                    className='rounded-full hover:border-2 hover:border-accent'
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
    </PageScaffold>
  )
}

export default Contact
