const PageScaffold = ({ title, bgColor = 'bg-white', className = '', children }) => {
  return (
    <div className={`${bgColor} min-h-screen font-body ${className}`}>
      {title && (
        <div className='text-center py-8'>
          <h1 className='text-4xl sm:text-5xl font-heading text-white'>{title}</h1>
        </div>
      )}
      <main className='mx-4 lg:px-12'>{children}</main>
    </div>
  )
}

export default PageScaffold
