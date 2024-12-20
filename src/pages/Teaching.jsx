import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { MusicNotes } from '@assets'
import { ShapeDivider, PageScaffold, AnimateOnScroll } from '@components'

const Teaching = () => {
  const fullConfig = resolveConfig(tailwindConfig)
  const primaryHex = fullConfig.theme.colors.primary

  return (
    <>
      <PageScaffold bgColor='bg-primary'>
        <section id='teaching' className='text-textLight pt-12'>
          <div className='container mx-auto px-8 md:px-20 pb-16'>
            <div className='gap-6'>
              <div className='flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12'>
                <div className='w-full lg:w-1/2 max-h-[90vh] overflow-hidden rounded-lg shadow-xl'>
                  <img src={MusicNotes} alt='Foto von einem Musiknoten-Heft' className='object-cover w-full h-full' role='img' />
                </div>
                <div className='w-full lg:w-1/2 flex items-center justify-center text-center lg:text-justify text-xl mt-6 lg:mt-0'>
                  <div>
                    <AnimateOnScroll>
                      <h1 id='teaching-title' className='text-4xl sm:text-5xl text-textLight pb-8'>
                        Gitarrenunterricht
                      </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                      <p className='mb-6'>
                        Du möchtest das Gitarrespielen lernen oder dein Spiel auf das nächste Level bringen? In meinem Unterricht geht es
                        vor allem darum, dir zu helfen, deine musikalischen Ziele zu erreichen. Ich gehe auf deine Wünsche ein – ob du ein
                        bestimmtes Stück spielen möchtest oder einfach die Grundlagen der Gitarre erlernen willst. Gemeinsam schaffen wir
                        eine individuelle Lernreise, die auf deine Stärken und Interessen abgestimmt ist.
                      </p>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                      <p>
                        Mein Unterricht ist nicht nur praxisorientiert, sondern vermittelt dir auch ein tiefes Verständnis für Musiktheorie
                        und Harmonielehre. So wirst du nicht nur technische Fähigkeiten am Instrument entwickeln, sondern auch lernen, Musik
                        intuitiv zu verstehen und kreativ zu gestalten. Ich lege großen Wert darauf, dass du die Freude an der Musik
                        entdeckst und selbstbewusst deine Lieblingsstücke spielen kannst.
                      </p>
                    </AnimateOnScroll>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageScaffold>
      <ShapeDivider type='shapeBottom' fillColor={primaryHex} backgroundColor='secondary' />
    </>
  )
}

export default Teaching
