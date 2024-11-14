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
        <div className='container mx-auto'>
          <p>&copy; 2024 Luca de Michieli</p>
          <p>
            <a href='https://twitter.com/johndoe' className='mx-2 border-b-2 border-transparent hover:border-copper transition-all'>
              Impressum
            </a>
            <a href='https://facebook.com/johndoe' className='mx-2 border-b-2 border-transparent hover:border-copper transition-all'>
              Datenschutzerklärung
            </a>
            <a href='https://instagram.com/johndoe' className='mx-2 border-b-2 border-transparent hover:border-copper transition-all'>
              lucademichieli@posteo.net
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
