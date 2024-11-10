import { useState } from "react";
import { PricingCard, ToggleButton } from "@components";
import { pricingPlans } from "@assets";

const Pricing = () => {
  const [isWithContract, setIsWithContract] = useState(true);

  const handleToggleChange = (newState) => {
    setIsWithContract(newState);
  };

  const renderPricingCard = (pricingPlan) => {
    return <PricingCard pricingPlan={pricingPlan} />;
  };

  return (
    <section className="bg-copper py-8 px-4 mx-auto max-w-screen-xl">
      <div className="text-center mx-auto max-w-screen-md mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-heading text-white">
          Für jeden das richtige Programm
        </h2>
        <p className="mb-5 font-body text-white sm:text-xl">
          Mein Fokus liegt darauf für jede*n Schüler*in das richtige zu finden.
        </p>

        <ToggleButton
          isChecked={isWithContract}
          onToggle={handleToggleChange}
          activeLabel="mit Vertrag"
          inactiveLabel="ohne Vertrag"
        />
      </div>

      <div className="flex flex-wrap justify-center mt-10 gap-4 sm:gap-6">
        {isWithContract
          ? pricingPlans.withContract.map(renderPricingCard)
          : pricingPlans.withoutContract.map(renderPricingCard)}
      </div>
    </section>
  );
};

export default Pricing;
