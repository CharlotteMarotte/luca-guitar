import { PrimaryButton } from "@components";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const fullConfig = resolveConfig(tailwindConfig);
  const paarlHex = fullConfig.theme.colors.paarl;

  return (
    <section className="relative bg-paarl text-white py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 text-center">
            Interesse geweckt? Lass uns in Kontakt treten!
          </h2>
          <p className="text-lg md:text-xl mb-6 font-body text-center">
            Möchtest du mehr erfahren oder eine Probestunde buchen? Schreib mir
            eine E-Mail oder kontaktiere mich über WhatsApp.
          </p>

          <h3 className="text-xl md:text-2xl font-heading text-white mb-4 text-center">
            Bereit für deine erste Stunde?
          </h3>

          {/* Flex container for button and contact icons */}
          <div className="flex justify-center items-center space-x-4">
            <PrimaryButton>
              <a
                className="px-10 py-4 text-2xl md:text-xl"
                href="mailto:kontakt@deineadresse.de"
              >
                Nachricht schreiben
              </a>
            </PrimaryButton>

            <a
              href="https://wa.me/2348100000000"
              target="_blank"
              className="inline-block"
            ></a>

            <SocialIcon
              url="https://whatsapp.com"
              href="https://wa.me/2348100000000"
              target="_blank"
              rel="noopener noreferrer"
            />
            <SocialIcon
              url="https://telegram.org"
              href="https://t.me/lucademi"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>

        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.2179847488793!2d13.4050!3d52.5200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e23c8f6c2f1%3A0x8c349a6be9f1f24a!2sDeine+Stra%C3%9Fe+123%2C+12345+Berlin!5e0!3m2!1sde!2sde!4v1631051931410!5m2!1sde!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
