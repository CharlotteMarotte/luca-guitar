import { PrimaryButton } from "@components";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <section className="relative bg-copper text-white py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Interesse geweckt? Lass uns in Kontakt treten!
          </h2>
          <p className="text-lg md:text-xl mb-6 font-body">
            Möchtest du mehr erfahren oder eine Probestunde buchen? Schreib mir
            eine E-Mail oder kontaktiere mich über WhatsApp.
          </p>

          <h3 className="text-xl md:text-2xl font-heading text-white mb-4">
            Bereit für deine erste Stunde?
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <PrimaryButton backgroundColor="spicyMustard">
              <a href="mailto:kontakt@deineadresse.de">Nachricht schreiben</a>
            </PrimaryButton>

            <a
              href="https://wa.me/2348100000000"
              target="_blank"
              className="inline-block"
            >
              <SocialIcon
                url="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10"
              />
            </a>

            <a
              href="https://t.me/lucademi"
              target="_blank"
              className="inline-block"
            >
              <SocialIcon
                url="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>

        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg ">
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
