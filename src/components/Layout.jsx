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

import AnimateOnScroll from '@components/AnimateOnScroll' // Import the AnimateOnScroll component

const Layout = ({ children }) => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <Wrapper>
      <div>
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
              <AnimateOnScroll className='about-section'>
                <About />
              </AnimateOnScroll>
              <AnimateOnScroll className='teaching-section'>
                <Teaching />
              </AnimateOnScroll>
              <AnimateOnScroll className='pricing-section'>
                <Pricing />
              </AnimateOnScroll>
              <AnimateOnScroll className='music-section'>
                <Music />
              </AnimateOnScroll>
              <AnimateOnScroll className='contact-section'>
                <Contact />
              </AnimateOnScroll>
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
