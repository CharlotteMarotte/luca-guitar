import React from 'react'

const Welcome = () => {
  return (
    <section
      id='welcome'
      className='relative flex items-end justify-end md:justify-start text-center py-16 sm:py-24 lg:py-32'
      role='region'
      aria-labelledby='welcome-section-title'
    >
      <p className='sr-only'>Willkommen auf meiner Website. Ich heiße Luca de Michieli und biete Gitarrenunterricht in Berlin an.</p>
    </section>
  )
}

export default Welcome
