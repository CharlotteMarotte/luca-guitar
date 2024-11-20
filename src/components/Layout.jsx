import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { Navbar, Footer, ParallaxScroll, CookieConsentBanner } from '@components'
import { Welcome, About, Teaching, Pricing, Music, Contact } from '@pages'
import { guitarStock } from '@assets'

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

  return (
    <Wrapper>
      <div>
        {isHomePage ? (
          <>
            <header
              className={clsx('relative bg-cover bg-center', 'lg:min-h-screen', !isHomePage && 'bg-gray-300')}
              style={{
                backgroundImage: isHomePage
                  ? 'url(https://www.londonguitarinstitute.co.uk/wp-content/uploads/2020/06/Folk-guitarist-1.jpg)'
                  : 'none'
              }}
            >
              <Navbar />
              <Welcome />
            </header>
            <main>
              <About />
              <ParallaxScroll imageUrl={guitarStock} />
              <Teaching />
              <Pricing />
              <Music />
              <Contact />
            </main>
          </>
        ) : (
          <>
            <Navbar />
            <main>{children}</main>
          </>
        )}
        <Footer />
      </div>
      <CookieConsentBanner />
    </Wrapper>
  )
}

export default Layout
