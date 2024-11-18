import { AnimateOnScroll } from '@components'
import clsx from 'clsx'

const PageScaffold = ({ title, bgColor = 'bg-white', className = '', children }) => {
  return (
    <div className={clsx(bgColor, 'min-h-screen font-body relative', className)}>
      {title && (
        <div className='text-center'>
          <AnimateOnScroll>
            <h1 className='text-4xl sm:text-5xl font-heading text-white'>{title}</h1>
          </AnimateOnScroll>
        </div>
      )}
      <main className='mx-4 lg:px-6'>{children}</main>
    </div>
  )
}

export default PageScaffold
