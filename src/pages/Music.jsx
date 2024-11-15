import { ShapeDivider, PageScaffold } from "@components";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const Music = () => {
  const fullConfig = resolveConfig(tailwindConfig);
  const paarlHex = fullConfig.theme.colors.paarl;

  return (
    <PageScaffold title="Meine Musik" bgColor="bg-paarl">
      <section className="relative bg-paarl text-white min-h-screen flex flex-col items-center justify-between">
        <div className="pb-12 md:pb-32 container flex flex-col lg:flex-row items-center justify-center px-8 md:px-20 gap-8 flex-grow">
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

        <div className="absolute bottom-0 left-0 right-0">
          <ShapeDivider
            type="opaqueWavesBottom"
            fillColor={paarlHex}
            backgroundColor="copper"
          />
        </div>
      </section>
    </PageScaffold>
  );
};

export default Music;
