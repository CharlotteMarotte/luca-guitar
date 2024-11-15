import { PageScaffold, Layout } from "@components";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageScaffold title="Datenschutzerklärung" bgColor="bg-copper pt-8">
        <section className=" text-black min-h-screen py-20 md:px-20">
          <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
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
