import { PageScaffold, Layout } from "@components";

const LegalDisclosure = () => {
  return (
    <Layout>
      <PageScaffold title="Impressum" bgColor="bg-yellow-200">
        <section className="relative text-black min-h-screen py-20 md:px-20">
          <h1 className="text-3xl font-semibold">
            Legal Disclosure (Impressum)
          </h1>
          <p>Your legal information goes here.</p>
        </section>
      </PageScaffold>
    </Layout>
  );
};

export default LegalDisclosure;
