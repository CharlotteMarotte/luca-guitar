import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import { MusicNotes } from "@assets";
import { ShapeDivider } from "@components";

const Teaching = () => {
  const fullConfig = resolveConfig(tailwindConfig);
  const paarlHex = fullConfig.theme.colors.paarl;

  return (
    <section className="relative text-white bg-paarl  pt-16">
      <div className="container mx-auto pb-16 px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={MusicNotes}
              alt="Guitar teacher illustration"
              className="w-full h-auto rounded-lg shadow-xl max-w-md"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl font-heading mb-4">
              Dein individueller Gitarrenunterricht
            </h2>
            <p className="text-lg font-body max-w-xl mx-auto mb-6">
              Du möchtest das Gitarrespielen lernen oder dein Spiel auf das
              nächste Level bringen? In meinem Unterricht geht es vor allem
              darum, dir zu helfen, deine musikalischen Ziele zu erreichen. Ich
              gehe auf deine Wünsche ein – ob du ein bestimmtes Stück spielen
              möchtest oder einfach die Grundlagen der Gitarre erlernen willst.
              Gemeinsam schaffen wir eine individuelle Lernreise, die auf deine
              Stärken und Interessen abgestimmt ist.
            </p>
            <p className="text-lg font-body max-w-xl mx-auto">
              Mein Unterricht ist nicht nur praxisorientiert, sondern vermittelt
              dir auch ein tiefes Verständnis für Musiktheorie und
              Harmonielehre. So wirst du nicht nur technische Fähigkeiten am
              Instrument entwickeln, sondern auch lernen, Musik intuitiv zu
              verstehen und kreativ zu gestalten. Ich lege großen Wert darauf,
              dass du die Freude an der Musik entdeckst und selbstbewusst deine
              Lieblingsstücke spielen kannst.
            </p>
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
