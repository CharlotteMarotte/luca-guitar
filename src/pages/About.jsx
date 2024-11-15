import { useRef } from "react";
import { useIsVisible } from "@hooks";
import { LucaPortrait } from "@assets";
import { PageScaffold } from "@components";

const About = () => {
  const headingRef = useRef();
  const isHeadingVisible = useIsVisible(headingRef);

  const paragraph1Ref = useRef();
  const isParagraph1Visible = useIsVisible(paragraph1Ref);

  const paragraph2Ref = useRef();
  const isParagraph2Visible = useIsVisible(paragraph2Ref);

  const paragraph3Ref = useRef();
  const isParagraph3Visible = useIsVisible(paragraph3Ref);

  return (
    <PageScaffold bgColor="bg-paarl">
      <section
        id="about"
        className=" text-white py-20 min-h-screen flex items-center justify-center"
      >
        <div className="container flex flex-col lg:flex-row items-center px-8 md:px-20 gap-8 md:gap-16">
          <div className="flex-1">
            <h1
              ref={headingRef}
              className={`text-center md:text-left text-3xl sm:text-4xl md:text-5xl font-heading mb-6 transition-opacity duration-1000 ease-in ${isHeadingVisible ? "opacity-100" : "opacity-0"}`}
            >
              Über mich
            </h1>

            <p
              ref={paragraph1Ref}
              className={`font-body text-lg md:text-justify mb-6 transition-opacity duration-1000 ease-in ${isParagraph1Visible ? "opacity-100" : "opacity-0"}`}
            >
              Ciao, ich bin Luca, 32 Jahre alt, und spiele Gitarre seit 22
              Jahren. Ursprünglich aus Berlin, wurde ich schon früh von meinem
              Vater, der selbst Gitarre spielt, inspiriert. Als Kind habe ich
              klassischen Gitarrenunterricht genommen, später verschiedene Stile
              wie Jazz und Flamenco ausprobiert und vieles auch autodidaktisch
              erlernt.
            </p>
            <p
              ref={paragraph2Ref}
              className={`font-body text-lg md:text-justify mb-6 transition-opacity duration-1000 ease-in ${isParagraph2Visible ? "opacity-100" : "opacity-0"}`}
            >
              Seit über 12 Jahren unterrichte ich Gitarre – vom Anfänger bis zum
              Fortgeschrittenen, auf Akustik-, Konzert- und E-Gitarre. Momentan
              liegt mein Fokus auf klassischer Gitarre, dem Komponieren eigener
              Stücke und der Produktion elektronischer Musik. Zudem habe ich
              auch schon Filmmusik produziert und werde immer wieder für solche
              Projekte engagiert – ein spannendes Feld, das meine kreative
              Arbeit immer wieder auf neue Weise herausfordert.
            </p>
            <p
              ref={paragraph3Ref}
              className={`font-body text-lg md:text-justify sm:text-left transition-opacity duration-1000 ease-in ${isParagraph3Visible ? "opacity-100" : "opacity-0"}`}
            >
              Wenn du einen flexiblen und persönlichen Gitarrenunterricht
              suchst, der dich in deinem eigenen Tempo weiterbringt, freue ich
              mich darauf, mit dir zu arbeiten!
            </p>
          </div>

          <div className="flex-shrink-0 w-full lg:w-1/3 mt-4 md:mt-0">
            <img
              src={LucaPortrait}
              alt="Luca"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </PageScaffold>
  );
};

export default About;
