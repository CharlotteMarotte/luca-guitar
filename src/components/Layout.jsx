import { Navbar, Footer } from '@components' // Navbar and Footer components
import { Welcome, About, Teaching, Pricing, Music, Contact } from '@pages' // All the page components
import { Link } from 'react-router-dom' // For navigation to Impressum and Privacy pages

const Layout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Welcome />
        <About />
        <Teaching />
        <Pricing />
        <Music />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
