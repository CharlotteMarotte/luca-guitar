import { useRef } from 'react'
import { useIsVisible } from '@hooks'

const PageScaffold = ({ title, bgColor, className = '', backgroundImage = '', children }) => {
  const headingRef = useRef()
  const isHeadingVisible = useIsVisible(headingRef)

  return (
    <div
      className={`${bgColor} min-h-screen font-body relative ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {title && (
        <div className='text-center'>
          <h1
            ref={headingRef}
            className={`text-4xl sm:text-5xl font-heading text-white transition-opacity duration-1000 ease-in ${
              isHeadingVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {title}
          </h1>
        </div>
      )}
      <main className='mx-4 lg:px-6'>{children}</main>
    </div>
  )
}

export default PageScaffold
