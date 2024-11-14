import { ShapeDivider } from '@components'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const Footer = () => {
  const fullConfig = resolveConfig(tailwindConfig)
  const copperHex = fullConfig.theme.colors.copper
  const spicyMustardHex = fullConfig.theme.colors.spicyMustard

  return (
    <div className='bg-spicyMustard text-white'>
      <ShapeDivider type='curveTop' fillColor={copperHex} backgroundColor={spicyMustardHex} />
      <div className='pb-10 text-center font-body'>
        <div className='container mx-auto px-4'>
          <p className='text-sm md:text-base'>&copy; 2024 Luca de Michieli</p>
          <div className='mt-2 space-x-4 text-sm md:text-base'>
            <a href='#' className='border-b-2 border-transparent hover:border-copper transition-all'>
              Impressum
            </a>
            <a href='#' className='border-b-2 border-transparent hover:border-copper transition-all'>
              Datenschutzerklärung
            </a>
            <a href='mailto:lucademichieli@posteo.net' className='border-b-2 border-transparent hover:border-copper transition-all'>
              lucademichieli@posteo.net
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
