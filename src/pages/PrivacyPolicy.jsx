import { useRef } from "react";
import { useIsVisible } from "@hooks";
import { PageScaffold, Layout } from "@components";

const PrivacyPolicy = () => {
  const paragraphRef = useRef();
  const isParagraphVisible = useIsVisible(paragraphRef);

  return (
    <Layout>
      <PageScaffold title="Datenschutzerklärung" bgColor="bg-copper pt-8">
        <section
          ref={paragraphRef}
          className={`text-black min-h-screen py-20 md:px-20 ${isParagraphVisible ? "opacity-100" : "opacity-0"}`}
        >
          <p className="mb-4">
            Icons made from{" "}
            <a
              href="https://www.onlinewebfonts.com/icon"
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-600"
            >
              svg icons
            </a>{" "}
            is licensed by CC BY 4.0
          </p>
        </section>
      </PageScaffold>
    </Layout>
  );
};

export default PrivacyPolicy;
