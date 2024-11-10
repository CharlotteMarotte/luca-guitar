import {PricingCard} from "@components";
import { pricingPlans } from "@assets";

const Pricing = () => {
  const renderPricingCard = (pricingPlan) => {
    return <PricingCard key={pricingPlan.heading} pricingPlan={pricingPlan} />;
  };

  return (
    <section className="bg-copper py-8 px-4 mx-auto max-w-screen-xl">
      <div className="text-center mx-auto max-w-screen-md mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-heading text-white">
          Für jeden das richtige Programm
        </h2>
        <p className="mb-5 font-body text-white sm:text-xl ">
          Mein Fokus liegt darauf für jede*n Schüler*in das richtige zu finden.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mb-8">
        {pricingPlans.map(renderPricingCard)}
      </div>
    </section>
  );
};

export default Pricing;
