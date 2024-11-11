import Navbar from './Navbar'
import Footer from './Footer'
import { Welcome } from '@pages'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen relative'>
      <header
        className='relative bg-cover bg-center h-screen'
        style={{
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2013/08/29/02/45/building-176932_1280.jpg)'
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
