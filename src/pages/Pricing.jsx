import { useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'
import { Contract } from '@assets'
import { PricingCard, ToggleButton, ShapeDivider, PageScaffold, AnimateOnScroll } from '@components'
import { pricingPlans } from '@data'

const Pricing = () => {
  const [isWithContract, setIsWithContract] = useState(true)

  const fullConfig = resolveConfig(tailwindConfig)
  const secondaryHex = fullConfig.theme.colors.secondary

  const handleToggleChange = (newState) => {
    setIsWithContract(newState)
  }

  const renderPricingCard = (pricingPlan) => {
    return <PricingCard pricingPlan={pricingPlan} key={pricingPlan.heading} />
  }

  return (
    <div>
      <PageScaffold
        title='Preise mit und ohne Vertragsbindung'
        bgColor='bg-secondary'
        textColor='text-textDark'
        outerPadding=''
        innerPadding=''
        className='pb-12'
      >
        <section id='pricing' className='relative text-textDark pt-6'>
          <div>
            <AnimateOnScroll>
              <div className={'text-center mx-auto max-w-screen-md mb-8 lg:mb-12'}>
                <p className={'mb-5 text-textDark sm:text-xl'}>
                  Der Vertrag kann{' '}
                  <a href={Contract} target='_blank' rel='noreferrer' className='underline'>
                    hier
                  </a>{' '}
                  eingesehen werden.
                </p>

                <ToggleButton
                  isChecked={isWithContract}
                  onToggle={handleToggleChange}
                  activeLabel='mit Vertrag'
                  inactiveLabel='ohne Vertrag'
                  textColor='text-textDark'
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className='flex flex-wrap justify-center mt-10 gap-4 sm:gap-6 '>
                {isWithContract ? pricingPlans.withContract.map(renderPricingCard) : pricingPlans.withoutContract.map(renderPricingCard)}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </PageScaffold>
      <ShapeDivider type='curveBottom' fillColor={secondaryHex} backgroundColor='accent' />
    </div>
  )
}

export default Pricing
