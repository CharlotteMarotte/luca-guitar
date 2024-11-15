import { useState, useRef } from "react";
import { useIsVisible } from "@hooks";
import {
  PricingCard,
  ToggleButton,
  ShapeDivider,
  PageScaffold,
} from "@components";
import { pricingPlans, Contract } from "@assets";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const Pricing = () => {
  const [isWithContract, setIsWithContract] = useState(true);

  const fullConfig = resolveConfig(tailwindConfig);
  const copperHex = fullConfig.theme.colors.copper;

  const paragraphRef = useRef();
  const isParagraphVisible = useIsVisible(paragraphRef);

  const pricingRef = useRef();
  const isPricingVisible = useIsVisible(pricingRef);

  const handleToggleChange = (newState) => {
    setIsWithContract(newState);
  };

  const renderPricingCard = (pricingPlan) => {
    return <PricingCard pricingPlan={pricingPlan} key={pricingPlan.heading} />;
  };

  return (
    <div>
      <PageScaffold
        title="Preise mit und ohne Vertragsbindung"
        bgColor="bg-copper"
        className="pb-12"
      >
        <section id="pricing" className="relative text-white pt-6">
          <div
            ref={pricingRef}
            className={`text-center mx-auto max-w-screen-md mb-8 lg:mb-12 transition-opacity duration-1000 ease-in ${isPricingVisible ? "opacity-100" : "opacity-0"}`}
          >
            <p
              ref={paragraphRef}
              className={`mb-5 font-body text-white sm:text-xl transition-opacity duration-1000 ease-in ${isParagraphVisible ? "opacity-100" : "opacity-0"}`}
            >
              Der Vertrag kann{" "}
              <a
                href={Contract}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                hier
              </a>{" "}
              eingesehen werden.
            </p>

            <ToggleButton
              isChecked={isWithContract}
              onToggle={handleToggleChange}
              activeLabel="mit Vertrag"
              inactiveLabel="ohne Vertrag"
            />
          </div>

          <div className="flex flex-wrap justify-center mt-10 gap-4 sm:gap-6 ">
            {isWithContract
              ? pricingPlans.withContract.map(renderPricingCard)
              : pricingPlans.withoutContract.map(renderPricingCard)}
          </div>
        </section>
      </PageScaffold>
      <ShapeDivider
        type="curveBottom"
        fillColor={copperHex}
        backgroundColor="paarl"
      />
    </div>
  );
};

export default Pricing;
