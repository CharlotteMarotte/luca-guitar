import { ShapeDivider } from '@components'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const Footer = () => {
  const fullConfig = resolveConfig(tailwindConfig)
  const copperHex = fullConfig.theme.colors.copper
  return (
    <div className='bg-spicyMustard text-white'>
      <ShapeDivider type='curveTop' fillColor={copperHex} backgroundColor={'spicyMustard'} />
      <div className='p-10 text-center font-body'>
        Icons made from
        <a href='https://www.onlinewebfonts.com/icon'>svg icons</a>is licensed by CC BY 4.0
        <div className='container mx-auto'>
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
      </div>
    </div>
  )
}

export default Footer
