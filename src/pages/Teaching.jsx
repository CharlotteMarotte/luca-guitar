import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import { MusicNotes } from "@assets";
import { ShapeDivider } from "@components";

const Teaching = () => {
  const fullConfig = resolveConfig(tailwindConfig);
  const paarlHex = fullConfig.theme.colors.paarl;

  return (
    <section className="relative text-white bg-paarl pt-16">
      <div className="container mx-auto pb-16 px-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading mb-6 text-center">
          Dein individueller Gitarrenunterricht
        </h2>

        <div className="gap-6 px-6 md:px-16">
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
                <p className="mb-6">
                  Du möchtest das Gitarrespielen lernen oder dein Spiel auf das
                  nächste Level bringen? In meinem Unterricht geht es vor allem
                  darum, dir zu helfen, deine musikalischen Ziele zu erreichen.
                  Ich gehe auf deine Wünsche ein – ob du ein bestimmtes Stück
                  spielen möchtest oder einfach die Grundlagen der Gitarre
                  erlernen willst. Gemeinsam schaffen wir eine individuelle
                  Lernreise, die auf deine Stärken und Interessen abgestimmt
                  ist.
                </p>
                <p>
                  Mein Unterricht ist nicht nur praxisorientiert, sondern
                  vermittelt dir auch ein tiefes Verständnis für Musiktheorie
                  und Harmonielehre. So wirst du nicht nur technische
                  Fähigkeiten am Instrument entwickeln, sondern auch lernen,
                  Musik intuitiv zu verstehen und kreativ zu gestalten. Ich lege
                  großen Wert darauf, dass du die Freude an der Musik entdeckst
                  und selbstbewusst deine Lieblingsstücke spielen kannst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShapeDivider
        type="customShapeBottom"
        fillColor={paarlHex}
        backgroundColor="copper"
      />
    </section>
  );
};

export default Teaching;
