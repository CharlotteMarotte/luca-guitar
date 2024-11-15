import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, Footer, ParallaxScroll } from '@components'
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
        {/* Conditionally render both the header and the main content */}
        {isHomePage ? (
          <>
            <header
              className='relative bg-cover bg-center lg:min-h-screen'
              style={{
                backgroundImage: 'url(https://www.londonguitarinstitute.co.uk/wp-content/uploads/2020/06/Folk-guitarist-1.jpg)'
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
    </Wrapper>
  )
}

export default Layout
