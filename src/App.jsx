import { About, Contact, Pricing, Teaching, Music } from "@pages";
import { Layout, ParallaxScroll } from "@components";
import { guitarStock } from "@assets";

const App = () => {
  return (
    <Layout>
      <About />
      <ParallaxScroll imageUrl={guitarStock} />
      <Teaching />
      <Pricing />
      <Music />
      <Contact />
    </Layout>
  );
};

export default App;
