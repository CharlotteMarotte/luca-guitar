import React from 'react'

const Welcome = () => {
  return (
    <section
      id='welcome'
      className='relative flex items-end justify-end md:justify-start text-center py-16 sm:py-24 lg:py-32'
      role='region'
      aria-labelledby='welcome-section-title'
    >
      <div className='mx-auto max-w-2xl'>
        <div className='bg-primary p-4 scalloped-box h-64 absolute right-10 top-10'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl mb-4 text-textLight' style={{ lineHeight: '1.2em' }}>
            Gitarrenunterricht in Berlin bei Luca de Michieli
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Welcome
