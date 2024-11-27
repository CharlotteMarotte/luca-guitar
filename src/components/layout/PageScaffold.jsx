import clsx from 'clsx'
import { AnimateOnScroll } from '@components'

const PageScaffold = ({
  title,
  bgColor = 'bg-textLight',
  textColor = 'text-textDark',
  outerPadding = 'py-8',
  innerPadding = 'py-4',
  className = '',
  children
}) => {
  return (
    <div className={clsx(bgColor, 'min-h-screen relative', className)} role='region' aria-labelledby={title ? 'page-title' : undefined}>
      {title && (
        <div className={clsx(outerPadding, 'text-center')}>
          <AnimateOnScroll>
            <h1 id='page-title' className={clsx(textColor, 'text-4xl sm:text-5xl')}>
              {title}
            </h1>
          </AnimateOnScroll>
        </div>
      )}
      <main className={clsx(innerPadding, 'mx-4 lg:px-6')}>{children}</main>
    </div>
  )
}

export default PageScaffold
