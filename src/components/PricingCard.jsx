import PricingCardItem from './PricingCardItem'
import PrimaryButton from './PrimaryButton'

const PricingCard = ({ pricingPlan }) => {
  const renderPricingCardItems = (benefit, index) => {
    return <PricingCardItem key={index} benefit={benefit} />
  }

  return (
    <div className='p-4 max-w-sm'>
      <div
        className={
          pricingPlan.isHighlighted
            ? 'flex flex-col p-6 mx-auto text-center text-sambuca bg-sand rounded-3xl border-4 border-white shadow h-full sm:transform sm:translate-y-[-15px] sm:z-10'
            : 'flex flex-col p-6 mx-auto text-center text-sambuca bg-sand rounded-3xl border-4 border-spicyMustard shadow h-full'
        }
      >
        <div className='flex items-center justify-center mb-3'>
          <h2 className='text-sambuca text-xl font-heading'>{pricingPlan.heading}</h2>
        </div>

        <div className='flex flex-col justify-between flex-grow'>
          <p className='font-body sm:text-lg text-sambuca mb-4'>{pricingPlan.description}</p>

          <div className='flex justify-center items-baseline my-4'>
            <span className='mr-2 text-5xl font-body font-extrabold'>{pricingPlan.price}</span>
            <span className='font-body'>/ {pricingPlan.priceUnit}</span>
          </div>

          <div className='flex flex-col justify-between flex-grow'>
            <ul role='list' className='space-y-4 text-left'>
              {pricingPlan.benefits.map(renderPricingCardItems)}
            </ul>
          </div>

          <div className='inline-flex items-center pt-4 justify-center'>
            <PrimaryButton className='border-0'>Anmelden</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
