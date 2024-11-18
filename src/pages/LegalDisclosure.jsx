import { PageScaffold, Layout, AnimateOnScroll } from "@components";

const LegalDisclosure = () => {
  return (
    <Layout>
      <PageScaffold title="Impressum" bgColor="bg-copper pt-8">
        <section className=" min-h-screen py-20 md:px-20 font-body ">
          <AnimateOnScroll>
            <div
              ref={paragraphRef}
              className={`max-w-4xl mx-auto p-12 bg-diSerria rounded-3xl text-cafeNoir`}
            >
              <p className="mb-4">Angaben gemäß § 5 DDG</p>
              <p>Luca De Michieli</p>
              <p>Lepsiusstr. 6</p>
              <p>12163 Berlin</p>

              <div className="mb-4">
                <span className="font-bold">Vertreten durch:</span>
                <p>Luca De Michieli</p>
              </div>

              <div className="mb-4">
                <span className="font-bold">Kontakt:</span>
                <p>Telefon: +49 157 53366391</p>
              </div>

              <div>
                <span className="font-bold">E-Mail: </span>
                <a
                  href="mailto:lucademichieli@posteo.net"
                  className="hover:underline"
                >
                  lucademichieli@posteo.net
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
      </PageScaffold>
    </Layout>
  );
};

export default LegalDisclosure;
