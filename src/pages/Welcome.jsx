const Welcome = () => {
  return (
    <section
      id='welcome'
      className='flex items-center justify-center text-center text-textLight py-16 sm:py-24 lg:py-32 z-10'
      role='region'
      aria-labelledby='welcome-section-title'
    >
      <div className='w-full px-4'>
        <div className='p-6 rounded-lg bg-textDark bg-opacity-40'>
          <h2 id='welcome-section-title' className='text-3xl sm:text-4xl lg:text-5xl mb-4 zoom-in'>
            Entdecke die Welt der Gitarre – Dein musikalischer Weg beginnt hier!
          </h2>
          <p className='text-lg sm:text-xl zoom-in'>
            Egal, ob du gerade erst anfängst oder deine Fähigkeiten weiter ausbauen möchtest, hier findest du die Unterstützung, die du
            brauchst. Lass uns gemeinsam deine musikalischen Ziele erreichen!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Welcome
