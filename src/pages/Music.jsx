import {
  ShapeDivider,
  PageScaffold,
  CookieConsentPlaceholder,
} from "@components";
import { useCookieConsent } from "@context";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const Music = () => {
  const { cookieConsentGiven } = useCookieConsent();

  const fullConfig = resolveConfig(tailwindConfig);
  const paarlHex = fullConfig.theme.colors.paarl;

  return (
    <div>
      <PageScaffold title="Meine Musik" bgColor="bg-paarl">
        <section className="text-white min-h-screen flex flex-col items-center justify-center">
          {cookieConsentGiven ? (
            <div className="py-12 md:pb-32 container flex flex-col lg:flex-row items-center justify-center px-8 md:px-20 gap-8 flex-grow">
              <div className="w-full lg:w-1/2 pb-6">
                <div className="relative pb-[56.25%] w-full">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/iZ-P3zDm1iE"
                    title="Luca - Gitarrenstück"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full lg:w-1/2 pb-6">
                <div className="relative pb-[56.25%] w-full">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed?list=PLln4ZKDJpfJWMyEXNsYuTLgbNlm5uvdvk"
                    title="Luca - Musik Playlist"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 rounded-lg bg-white bg-opacity-20 text-center">
              <CookieConsentPlaceholder />
            </div>
          )}
        </section>
      </PageScaffold>
      <ShapeDivider
        type="opaqueWavesBottom"
        fillColor={paarlHex}
        backgroundColor="copper"
      />
    </div>
  );
};

export default Music;
