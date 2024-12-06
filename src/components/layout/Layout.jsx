import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'
import { Navbar, Footer, CookieConsentBanner, ShapeDivider } from '@components'
import { Welcome, About, Teaching, Pricing, Music, Contact } from '@pages'
import { guitarStock, LucaHorizontal } from '@assets'
import { useCookieConsent } from '@context'

const Wrapper = ({ children }) => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return children
}

const Layout = ({ children }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const { bannerVisible, loading } = useCookieConsent()

  const fullConfig = resolveConfig(tailwindConfig)
  const primaryHex = fullConfig.theme.colors.primary

  return (
    <Wrapper>
      <div>
        <a href='#about' className='sr-only focus:not-sr-only'>
          Skip to content
        </a>

        <header
          className={clsx('w-full bg-fixed bg-cover bg-center', isHomePage && 'min-h-screen')}
          style={{
            backgroundImage: isHomePage ? `url(${LucaHorizontal})` : 'none'
          }}
          aria-hidden='true'
        >
          <Navbar />
          {isHomePage && <Welcome />}
        </header>

        <main id='main-content'>
          {isHomePage ? (
            <>
              <About />
              <div className='relative'>
                <div className='w-full bg-fixed bg-center bg-cover' style={{ backgroundImage: `url(${guitarStock})` }}>
                  <ShapeDivider
                    type='wavesDividerTop'
                    fillColor={primaryHex}
                    className='absolute top-0 left-0 w-full'
                    backgroundColor='transparent'
                  />
                  <div className='h-screen bg-opacity-75 flex justify-center pt-8'></div>
                  <ShapeDivider
                    type='curveTop'
                    fillColor={primaryHex}
                    className='absolute bottom-0 left-0 w-full'
                    backgroundColor='transparent'
                  />
                </div>
              </div>
              <Teaching />
              <Pricing />
              <Music />
              <Contact />
            </>
          ) : (
            <>{children}</>
          )}
        </main>

        <Footer />
      </div>

      {!loading && bannerVisible && <CookieConsentBanner />}
    </Wrapper>
  )
}

export default Layout
