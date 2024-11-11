import { About, Contact, Pricing, Teaching } from "@pages";
import { Layout, ParallaxScroll } from "@components";
import { guitarStock } from "@assets";

const App = () => {
  return (
    <Layout>
      <About />
      <ParallaxScroll imageUrl={guitarStock} />
      <Pricing />
      <Teaching />
      <Contact />
    </Layout>
  );
};

export default App;
