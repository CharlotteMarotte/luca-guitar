import {About, Contact, Pricing, Teaching} from "@pages"

import { Layout, PrimaryButton, ParallaxScroll } from "@components";
import {guitarStock} from "@assets";

const App = () => {
  return (
    <Layout>
      <About />
      <ParallaxScroll imageUrl={guitarStock} />
      <Pricing />
      <Teaching />
      <Contact />
      <PrimaryButton>Click me</PrimaryButton>
      <div>
        Icons made from
        <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed
        by CC BY 4.0
      </div>
    </Layout>
  );
};

export default App;
