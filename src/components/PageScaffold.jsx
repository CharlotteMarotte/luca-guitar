import { Outlet } from 'react-router-dom'

const PageScaffold = ({ bgColor = 'bg-white', className = '', title }) => {
  return (
    <div className={`${bgColor} min-h-screen font-body ${className}`}>
      {title && (
        <div className='text-center py-8'>
          <h1 className='text-4xl sm:text-5xl font-heading text-white'>{title}</h1>
        </div>
      )}

      {/* Render the nested route content here */}
      <main className='mx-4 lg:px-12'>
        <Outlet /> {/* This renders the nested route content */}
      </main>
    </div>
  )
}

export default PageScaffold
