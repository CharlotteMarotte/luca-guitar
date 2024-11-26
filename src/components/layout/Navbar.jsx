import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { MenuItem } from '@components'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const renderMenuItems = (item) => {
    return (
      <MenuItem key={item.name} href={item.href} onMenuItemClick>
        {item.name}
      </MenuItem>
    )
  }

  const menuItems = [
    { name: 'Über mich', href: '/#about' },
    { name: 'Gitarrenunterricht', href: '/#teaching' },
    { name: 'Preise', href: '/#pricing' },
    { name: 'Hörproben', href: '/#music' },
    { name: 'Kontakt', href: '/#contact' }
  ]

  return (
    <div className='px-6 py-3 flex flex-wrap place-items-center lg:border-y lg:border-textLight bg-primary relative z-10'>
      <section className='relative mx-auto w-full'>
        <nav className='flex justify-between items-center text-textLight w-full'>
          <a
            href='#home'
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }}
            className='group text-textLight transition-all duration-800 hover:text-white relative text-xl sm:text-2xl lg:text-3xl whitespace-nowrap'
          >
            <span className='group-hover:text-white'>Luca de Michieli</span>
            <span className='block w-full h-[2px] bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100 group-hover:w-full absolute bottom-0 left-0'></span>
          </a>

          <div className='hidden lg:flex px-5 lg:px-12 py-6 w-full justify-center'>
            <ul className='flex space-x-8'>{menuItems.map(renderMenuItems)}</ul>
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
        <div className={clsx('lg:hidden bg-primary transition-all duration-300 w-full py-4', isMobileMenuOpen ? 'block' : 'hidden')}>
          <ul className='flex flex-col space-y-4'>
            {menuItems.map(({ name, href }) => (
              <li key={name}>
                <a
                  onClick={(e) => {
                    setIsMobileMenuOpen(false)
                  }}
                  className='text-textLight hover:text-gray-200 hover:bg-textLight hover:bg-opacity-20 rounded-lg block p-2'
                  href={href}
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
