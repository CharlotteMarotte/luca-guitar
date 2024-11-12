import Navbar from './Navbar'
import Footer from './Footer'
import { Welcome } from '@pages'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen relative bg-transparent'>
      <header
        className='relative bg-cover bg-center h-screen'
        style={{
          backgroundImage: 'url(https://www.londonguitarinstitute.co.uk/wp-content/uploads/2020/06/Folk-guitarist-1.jpg)'
        }}
      >
        <Navbar />
        <Welcome />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
