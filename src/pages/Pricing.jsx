import { useState } from "react";
import { PricingCard, ToggleButton, ShapeDivider } from "@components";
import { pricingPlans } from "@assets";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const Pricing = () => {
  const [isWithContract, setIsWithContract] = useState(true);

  const fullConfig = resolveConfig(tailwindConfig);
  const copperHex = fullConfig.theme.colors.copper;

  const handleToggleChange = (newState) => {
    setIsWithContract(newState);
  };

  const renderPricingCard = (pricingPlan) => {
    return <PricingCard pricingPlan={pricingPlan} />;
  };

  return (
    <section className="relative bg-copper text-white">
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

      <div className="flex flex-wrap justify-center mt-10 gap-4 sm:gap-6 mb-12">
        {isWithContract
          ? pricingPlans.withContract.map(renderPricingCard)
          : pricingPlans.withoutContract.map(renderPricingCard)}
      </div>

      <ShapeDivider
        type="curveBottom"
        fillColor={copperHex}
        backgroundColor="paarl"
      />
    </section>
  );
};

export default Pricing;
