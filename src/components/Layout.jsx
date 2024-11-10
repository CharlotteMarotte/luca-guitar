import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='bg-paarl text-white min-h-screen '>
      <header className='pt-12 px-12 bg-paarl'>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className='py-6'>
        <div className='container mx-auto text-center font-body'>
          <p>&copy; 2024 Luca de Michieli Gitarrenunterricht</p>
          <p>
            <a href='https://twitter.com/johndoe' className='mx-2'>
              Twitter
            </a>
            <a href='https://facebook.com/johndoe' className='mx-2'>
              Facebook
            </a>
            <a href='https://instagram.com/johndoe' className='mx-2'>
              Instagram
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
