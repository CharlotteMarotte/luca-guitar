import { useState } from 'react'
import PricingCardItem from './PricingCardItem'
import PrimaryButton from './PrimaryButton'

const PricingCard = ({ pricingPlan }) => {
  const [selectedDuration, setSelectedDuration] = useState(() => {
    const defaultDuration = pricingPlan.priceOptions.find((option) => option.duration === '45 Minuten')
      ? '45 Minuten'
      : pricingPlan.priceOptions.length > 0
        ? pricingPlan.priceOptions[0].duration
        : ''
    return defaultDuration
  })

  const has45MinOption = pricingPlan.priceOptions.some((option) => option.duration === '45 Minuten')
  const has60MinOption = pricingPlan.priceOptions.some((option) => option.duration === '60 Minuten')

  const selectedOption = pricingPlan.priceOptions.find((option) => option.duration === selectedDuration)

  const toggleDuration = (duration) => {
    setSelectedDuration(duration)
  }

  if (!selectedOption) {
    return <div>Fehler: Gewählte Option konnte nicht gefunden werden.</div>
  }

  const renderPricingCardItems = (benefit, index) => {
    return <PricingCardItem key={index} benefit={benefit} />
  }

  return (
    <div className='p-4 max-w-sm'>
      <div
        className={
          pricingPlan.isHighlighted
            ? 'flex flex-col p-6 mx-auto text-center text-sambuca bg-sand rounded-3xl border-4 border-white shadow h-auto sm:transform sm:translate-y-[-15px] sm:z-10 transition-transform duration-300 ease-in-out md:hover:translate-y-[-3rem]' // Highlighted cards will move more
            : 'flex flex-col p-6 mx-auto text-center text-sambuca bg-sand rounded-3xl border-4 border-spicyMustard shadow h-auto transition-transform duration-300 ease-in-out md:hover:translate-y-[-3rem]' // Non-highlighted cards will move less
        }
      >
        <h3 className='text-3xl font-heading text-sambuca mb-4'>{pricingPlan.heading}</h3>

        {(has45MinOption || has60MinOption) && (
          <div className='flex justify-center mb-3'>
            <div className='flex border rounded-full'>
              {has45MinOption && (
                <button
                  onClick={() => toggleDuration('45 Minuten')}
                  className={`px-6 py-2 text-sm rounded-l-full ${selectedDuration === '45 Minuten' ? 'bg-paarl text-white' : 'bg-gray-100 text-sambuca'}`}
                >
                  45 Min
                </button>
              )}
              {has60MinOption && (
                <button
                  onClick={() => toggleDuration('60 Minuten')}
                  className={`px-6 py-2 text-sm rounded-r-full ${selectedDuration === '60 Minuten' ? 'bg-paarl text-white' : 'bg-gray-100 text-sambuca'}`}
                >
                  60 Min
                </button>
              )}
            </div>
          </div>
        )}

        <div className='flex flex-col justify-between flex-grow'>
          <p className='font-body sm:text-lg text-sambuca mb-4'>{pricingPlan.description}</p>

          <div className='flex justify-center items-baseline my-4'>
            <span className='mr-2 text-4xl font-heading'>{selectedOption.price}</span>
            {pricingPlan.heading !== 'Probestunde' ? <span className='font-body'>/ {selectedOption.duration}</span> : <></>}
          </div>

          {pricingPlan.benefits && pricingPlan.benefits.length > 0 && (
            <div className='flex flex-col justify-between flex-grow'>
              <ul role='list' className='space-y-4 text-left'>
                {pricingPlan.benefits.map(renderPricingCardItems)}
              </ul>
            </div>
          )}

          <div className='inline-flex items-center pt-4 justify-center'>
            <PrimaryButton className='border-0'>
              <a className='px-10 py-4 text-2xl md:text-xl' href='mailto:lucademichieli@posteo.net'>
                Anmelden
              </a>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
