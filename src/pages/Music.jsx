import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import {
  ShapeDivider,
  PageScaffold,
  CookieConsentPlaceholder,
} from "@components";
import { useCookieConsent } from "@context";

const Music = () => {
  const { cookieCategoriesConsent } = useCookieConsent();
  const { marketing, functional, analytics } = cookieCategoriesConsent;

  const fullConfig = resolveConfig(tailwindConfig);
  const paarlHex = fullConfig.theme.colors.paarl;

  return (
    <div>
      <PageScaffold title="Meine Musik" bgColor="bg-paarl">
        <section className="text-white min-h-screen flex flex-col items-center justify-center">
          {marketing && functional && analytics ? (
            <div className="py-12 md:pb-32 container flex flex-col lg:flex-row items-center justify-center px-8 md:px-20 gap-8 flex-grow">
              <div className="w-full lg:w-1/2 pb-6">
                <div className="relative pb-[56.25%] w-full">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube-nocookie.com/embed/t2KBqFjz-Ws?si=GE0UZpQBhU0FdAU0&amp;controls=0"
                    title="Luca - Flamenco Stücke Playlist"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full lg:w-1/2 pb-6">
                <div className="relative pb-[56.25%] w-full">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube-nocookie.com/embed/iZ-P3zDm1iE?si=rT-gewQHCh-GeTKo"
                    title="Luca - Klassische Stücke Playlist"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
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
