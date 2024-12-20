import clsx from 'clsx'
import PricingCardItem from './PricingCardItem'
import Button from './Button'

const PricingCard = ({ pricingPlan }) => {
  const defaultOption = pricingPlan.priceOptions[0] || {}

  const renderPricingCardItems = (benefit, index) => {
    return <PricingCardItem key={index} benefit={benefit} />
  }

  return (
    <div className='p-4 max-w-sm'>
      <div
        className={clsx(
          'flex flex-col p-6 mx-auto text-center text-textDark rounded-3xl shadow h-auto transition-transform duration-300 ease-in-out md:hover:translate-y-[-3rem]',
          {
            'bg-neutralMedium border-4 border-textLight sm:transform sm:translate-y-[-15px] sm:z-10': pricingPlan.isHighlighted,
            'bg-neutralMedium border-4 border-neutralLight': !pricingPlan.isHighlighted
          }
        )}
      >
        <h3 className='text-3xl  text-textDark mb-4'>{pricingPlan.heading}</h3>

        <div className='flex flex-col justify-between flex-grow'>
          <p className=' sm:text-lg text-textDark mb-4'>{pricingPlan.description}</p>

          <div className='flex justify-center items-baseline my-4'>
            <span className='mr-2 text-4xl '>{defaultOption.price}</span>
            <span>/ {defaultOption.duration}</span>
          </div>

          {pricingPlan.benefits && pricingPlan.benefits.length > 0 && (
            <div className='flex flex-col justify-between flex-grow'>
              <ul role='list' className='space-y-4 text-left'>
                {pricingPlan.benefits.map(renderPricingCardItems)}
              </ul>
            </div>
          )}

          <div className='inline-flex items-center pt-4 justify-center'>
            <Button
              className='border-0'
              styleOptions={{
                backgroundColor: 'bg-secondary',
                borderColor: 'border-textDark',
                textColor: 'text-dark',
                hoverTextColor: 'hover:text-dark'
              }}
              aria-label='Anmelde-Button'
            >
              <a className='px-10 py-4 text-2xl md:text-xl' href='/#contact'>
                Anmelden
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
