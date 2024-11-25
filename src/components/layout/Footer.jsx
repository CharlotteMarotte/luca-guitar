import { Link } from 'react-router-dom'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'
import { ShapeDivider } from '@components'

const Footer = () => {
  const fullConfig = resolveConfig(tailwindConfig)
  const secondaryHex = fullConfig.theme.colors.secondary

  return (
    <div className='bg-primary text-textLight'>
      <ShapeDivider type='curveTop' fillColor={secondaryHex} backgroundColor='primary' />
      <div className='pb-10 text-center '>
        <div className='container mx-auto px-4'>
          <p className='text-sm md:text-base'>&copy; 2024 Luca de Michieli</p>
          <div className='mt-2 space-x-4 text-sm md:text-base'>
            <Link to='/impressum' className='border-b-2 border-transparent hover:border-secondary transition-all'>
              Impressum
            </Link>
            <Link to='/privacy' className='border-b-2 border-transparent hover:border-secondary transition-all'>
              Datenschutzerklärung
            </Link>
            <a href='mailto:lucademichieli@posteo.net' className='border-b-2 border-transparent hover:border-secondary transition-all'>
              lucademichieli@posteo.net
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
