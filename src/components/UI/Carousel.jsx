import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'
import { useState } from 'react'

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const fullConfig = resolveConfig(tailwindConfig)
  const neutralLightHex = fullConfig.theme.colors.neutralLight

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToImage = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className='relative w-full max-w-3xl mx-auto'>
      <div className='flex items-center justify-center space-x-4'>
        <button onClick={goToPrevious} aria-label='Vorheriges Foto' className='z-10'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path d='M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z' fill={neutralLightHex} />
          </svg>
        </button>

        <div className='w-full max-w-[80%] flex justify-center'>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className='object-cover w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-lg'
            role='img'
          />
        </div>

        <button onClick={goToNext} aria-label='Nächstes Foto' className='z-10'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' fill={neutralLightHex} />
          </svg>
        </button>
      </div>

      <div className='flex justify-center space-x-2 mt-4'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-neutralLight'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
