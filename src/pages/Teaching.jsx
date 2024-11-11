import { ShapeDivider } from "@components";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const Teaching = () => {
  const fullConfig = resolveConfig(tailwindConfig);
  const copperHex = fullConfig.theme.colors.copper; // assuming sandHex is a valid color

  return (
    <section className="relative text-white bg-paarl">
      <ShapeDivider type="assymetricalCurveBottom" fillColor={copperHex} />
      <div className="h-screen flex items-center justify-center transition-all pt-4">
        <div className="container text-center">
          <h2 className="text-4xl font-heading mb-4">Mein Unterricht</h2>
          <p className="text-lg font-body max-w-3xl mx-auto">
            Mein Ansatz ist es dich bestmöglich auf deinen individuellen,
            musikalischen Weg zu unterstützen - das heißt du zeigst mir die
            Musik und Lieder, die du lernen magst und ich hole dich dort ab wo
            du bist. Je nach Bedarf zeige ich dir gerne übergeordneten
            Zusammenhänge in der Musik. Ich versuche in meinem Unterricht ein
            ausgewogenes Verhältnis von praktischen Fähig- und Fertigkeiten am
            Instrument zu vermitteln, diese aber auch mit den theoretischen
            Grundlagen und der Harmonielehre zu verbinden. So kannst du dich mit
            der Zeit immer leichter und selbstständig in der Musik zurechtfinden
            und deine Lieblingsstücke und Songs besser spielen lernen und
            verstehen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
