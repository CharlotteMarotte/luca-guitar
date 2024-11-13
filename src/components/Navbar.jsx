import { useState } from 'react'
import MenuItem from './MenuItem'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const renderMenuItems = (item) => {
    return (
      <MenuItem key={item.name} href={item.href}>
        {item.name}
      </MenuItem>
    )
  }

  const menuItems = [
    { name: 'Start', href: '#' },
    { name: 'Über mich', href: '#' },
    { name: 'Gitarrenunterricht', href: '#' },
    { name: 'Preise', href: '#' },
    { name: 'Kontakt', href: '#' }
  ]

  return (
    <div className='px-6 py-3 flex flex-wrap place-items-center lg:bg-paarl relative z-10'>
      <section className='relative mx-auto w-full'>
        <nav className='flex justify-between items-center text-white w-full'>
          <p className='text-2xl italic font-heading font-sm mr-8 pr-8'>Luca de Michieli</p>
          <div className='hidden lg:flex px-5 lg:px-12 py-6 w-full justify-center'>
            <ul className='flex space-x-6 font-body'>
              {/* Map through the menu items and render pill buttons */}
              {menuItems.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className='inline-block py-2 px-6 rounded-full border-2 border-white text-white hover:bg-white hover:bg-opacity-20 hover:text-paarl transition-all duration-300'
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a className='navbar-burger self-center mr-12 lg:hidden' href='#' onClick={toggleMobileMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 hover:text-gray-200'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </a>
        </nav>

        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-paarl transition-all duration-300 w-full py-4`}>
          <ul className='flex flex-col space-y-4 font-body'>
            {menuItems.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  className='block py-2 px-6 rounded-full border-2 border-white text-white hover:bg-white hover:bg-opacity-20 hover:text-paarl transition-all duration-300 text-center'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Navbar
