import { useRef } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import { useIsVisible } from "@hooks";
import { MusicNotes } from "@assets";
import { ShapeDivider, PageScaffold } from "@components";

const Teaching = () => {
  const fullConfig = resolveConfig(tailwindConfig);
  const paarlHex = fullConfig.theme.colors.paarl;

  const headingRef = useRef();
  const isHeadingVisible = useIsVisible(headingRef);

  const paragraph1Ref = useRef();
  const isParagraph1Visible = useIsVisible(paragraph1Ref);

  const paragraph2Ref = useRef();
  const isParagraph2Visible = useIsVisible(paragraph2Ref);

  return (
    <div>
      <PageScaffold bgColor="bg-paarl">
        <section id="teaching" className=" text-white pt-16">
          <div className="container mx-auto px-8 md:px-20 pb-16">
            <div className="gap-6 ">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12">
                <div className="w-full lg:w-1/2 max-h-[90vh] overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={MusicNotes}
                    alt="Guitar teacher illustration"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center text-center lg:text-justify text-xl font-body mt-6 lg:mt-0">
                  <div>
                    <h1
                      ref={headingRef}
                      className={`text-4xl sm:text-5xl font-heading text-white pb-8 transition-opacity duration-1000 ease-in ${isHeadingVisible ? "opacity-100" : "opacity-0"}`}
                    >
                      Gitarrenunterricht
                    </h1>

                    <p
                      ref={paragraph1Ref}
                      className={`mb-6 transition-opacity duration-1000 ease-in ${isParagraph1Visible ? "opacity-100" : "opacity-0"}`}
                    >
                      Du möchtest das Gitarrespielen lernen oder dein Spiel auf
                      das nächste Level bringen? In meinem Unterricht geht es
                      vor allem darum, dir zu helfen, deine musikalischen Ziele
                      zu erreichen. Ich gehe auf deine Wünsche ein – ob du ein
                      bestimmtes Stück spielen möchtest oder einfach die
                      Grundlagen der Gitarre erlernen willst. Gemeinsam schaffen
                      wir eine individuelle Lernreise, die auf deine Stärken und
                      Interessen abgestimmt ist.
                    </p>
                    <p
                      ref={paragraph2Ref}
                      className={`transition-opacity duration-1000 ease-in ${isParagraph2Visible ? "opacity-100" : "opacity-0"}`}
                    >
                      Mein Unterricht ist nicht nur praxisorientiert, sondern
                      vermittelt dir auch ein tiefes Verständnis für
                      Musiktheorie und Harmonielehre. So wirst du nicht nur
                      technische Fähigkeiten am Instrument entwickeln, sondern
                      auch lernen, Musik intuitiv zu verstehen und kreativ zu
                      gestalten. Ich lege großen Wert darauf, dass du die Freude
                      an der Musik entdeckst und selbstbewusst deine
                      Lieblingsstücke spielen kannst.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageScaffold>
      <ShapeDivider
        type="customShapeBottom"
        fillColor={paarlHex}
        backgroundColor="copper"
      />
    </div>
  );
};

export default Teaching;
