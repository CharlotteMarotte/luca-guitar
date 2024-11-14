import { useState } from "react";
import { ContactForm } from "@components";
import { SocialIcon } from "react-social-icons";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const Contact = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const fullConfig = resolveConfig(tailwindConfig);
  const sandHex = fullConfig.theme.colors.sand;
  const paarlHex = fullConfig.theme.colors.spicyMustard;

  const handleSuccess = () => {
    setResponseMessage(
      "Vielen Dank für deine Nachricht! Ich melde mich so schnell wie möglich zurück."
    );
    setIsSubmitted(true);
    setIsError(false);
    setTimeout(() => {
      setIsSubmitted(false), setResponseMessage("");
    }, 10000);
  };

  const handleError = () => {
    setResponseMessage(
      <span>
        Etwas ist schief gelaufen. Bitte versuche es später noch einmal oder
        sende mir{" "}
        <a
          href="mailto:lucademichieli@posteo.net"
          className="text-amber-50 underline"
        >
          direkt eine Email.
        </a>
      </span>
    );
    setIsError(true);
    setIsSubmitted(false);
  };

  return (
    <section className="relative bg-copper text-white py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-cafeNoir">
        <div className="flex flex-col justify-center text-center md:text-left bg-diSerria p-6 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Interesse geweckt? Lass uns in Kontakt treten!
          </h2>
          <p className="text-lg md:text-xl mb-6 font-body">
            Möchtest du mehr erfahren oder eine Probestunde buchen? Fülle das
            Formular aus, um mit mir in Kontakt zu treten!
          </p>

          {responseMessage && (
            <div
              className={`font-body text-lg p-6 rounded-3xl mb-4 w-full max-w-md mx-auto md:mx-0 border-2 ${
                isError ? "text-white bg-redWood" : "text-spicyMustard bg-sand"
              }`}
            >
              {responseMessage}
            </div>
          )}

          {!isError && !isSubmitted && (
            <ContactForm
              onSubmitSuccess={handleSuccess}
              onSubmitError={handleError}
            />
          )}
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
            <SocialIcon
              url="https://whatsapp.com"
              href="https://wa.me/2348100000000"
              target="_blank"
              rel="noopener noreferrer"
              bgColor={sandHex}
              fgColor={paarlHex}
              label="Whatsapp Kontakt"
              style={{
                width: "70px",
                height: "70px",
              }}
              className="rounded-full hover:border-2 hover:border-white"
            />

            <SocialIcon
              url="https://telegram.org"
              href="https://t.me/lucademi"
              target="_blank"
              rel="noopener noreferrer"
              bgColor={sandHex}
              fgColor={paarlHex}
              label="Telegram Kontakt"
              style={{
                width: "70px",
                height: "70px",
              }}
              className="rounded-full hover:border-2 hover:border-white"
            />

            <SocialIcon
              url="https://www.instagram.com/"
              href="https://www.instagram.com/luca_de_michieli"
              target="_blank"
              rel="noopener noreferrer"
              bgColor={sandHex}
              fgColor={paarlHex}
              label="Mein Instagram Account"
              style={{
                width: "70px",
                height: "70px",
              }}
              className="rounded-full hover:border-2 hover:border-white"
            />

            <SocialIcon
              url="https://www.soundcloud.com"
              href="https://soundcloud.com/lucademichieliguitar"
              target="_blank"
              rel="noopener noreferrer"
              bgColor={sandHex}
              fgColor={paarlHex}
              label="Mein Soundcloud Account"
              style={{
                width: "70px",
                height: "70px",
              }}
              className="rounded-full hover:border-2 hover:border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
