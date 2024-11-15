import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, Footer } from '@components'
import { Welcome, About, Teaching, Pricing, Music, Contact } from '@pages'

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
        <Navbar />
        <main>
          {isHomePage ? (
            <>
              <Welcome />
              <About />
              <Teaching />
              <Pricing />
              <Music />
              <Contact />
            </>
          ) : (
            children
          )}
        </main>

        <Footer />
      </div>
    </Wrapper>
  )
}

export default Layout
