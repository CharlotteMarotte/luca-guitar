import { Link } from 'react-router-dom'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'
import { ShapeDivider } from '@components'

const Footer = () => {
  const fullConfig = resolveConfig(tailwindConfig)
  const primaryHex = fullConfig.theme.colors.primary

  return (
    <footer className='bg-primary text-textLight'>
      <ShapeDivider type='curveTop' fillColor={primaryHex} backgroundColor='secondary' />

      <div className='pb-10 text-center'>
        <div className='container mx-auto px-4'>
          <p className='text-sm md:text-base'>&copy; 2024 Luca de Michieli</p>
          <nav aria-label='Footer Navigation' className='mt-2 space-x-4 text-sm md:text-base'>
            <Link
              to='/impressum'
              className='border-b-2 border-transparent hover:border-secondary focus:border-secondary transition-all'
              aria-label='Impressum'
            >
              Impressum
            </Link>
            <Link
              to='/privacy'
              className='border-b-2 border-transparent hover:border-secondary focus:border-secondary transition-all'
              aria-label='Datenschutzerklärung'
            >
              Datenschutzerklärung
            </Link>
            <a
              href='mailto:lucademichieli@posteo.net'
              className='border-b-2 border-transparent hover:border-secondary focus:border-secondary transition-all'
              aria-label='E-Mail an Luca de Michieli senden'
            >
              lucademichieli@posteo.net
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
