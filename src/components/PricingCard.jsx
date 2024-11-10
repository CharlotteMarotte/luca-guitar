import PricingCardItem from "./PricingCardItem";
import PrimaryButton from "./PrimaryButton";

const PricingCard = ({ pricingPlan }) => {
  const renderPricingCardItems = (benefit, index) => {
    return <PricingCardItem key={index} benefit={benefit} />;
  };

  return (
    <div className="flex flex-col p-6 mx-auto max-w-sm text-center text-gray-900 bg-sand rounded-lg border border-gray-100 shadow">
      <h3 className="mb-4 text-2xl font-heading">{pricingPlan.heading}</h3>

      <p className="font-body sm:text-lg text-paarl mb-4">
        {pricingPlan.description}
      </p>

      <div className="flex justify-center items-baseline my-4">
        <span className="mr-2 text-5xl font-body font-extrabold">
          {pricingPlan.price}
        </span>
        <span className="font-body">{`/${pricingPlan.priceUnit}`}</span>
      </div>

      <div className="flex-grow mb-8">
        <ul role="list" className="space-y-4 text-left">
          {pricingPlan.benefits.map(renderPricingCardItems)}
        </ul>
      </div>

      <div className="mt-auto">
        <PrimaryButton>Anmelden</PrimaryButton>
      </div>
    </div>
  );
};

export default PricingCard;
