const Welcome = () => {
  return (
    <section
      id='welcome'
      className='flex items-end justify-end md:justify-start text-center text-textLight py-16 sm:py-24 lg:py-32 z-10'
      role='region'
      aria-labelledby='welcome-section-title'
    >
      <div className='px-0 md:px-4 mt-72 md:mt-52 w-full md:w-auto'>
        <div className='p-6 rounded-none md:rounded-lg bg-[#002815] bg-opacity-70'>
          <h2 id='welcome-section-title' className='text-3xl sm:text-4xl lg:text-5xl mb-4 zoom-in'>
            Gitarreunterricht in Berlin
          </h2>
          <h2 id='welcome-section-title' className='text-3xl sm:text-4xl lg:text-5xl mb-4 zoom-in'>
            bei Luca de Michieli
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Welcome
