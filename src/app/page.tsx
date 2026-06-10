import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
import Resume from "@/components/sections/resume";
import Services from "@/components/sections/services";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Resume />
      <Services />
      <Pricing />
    </main>
  );
}

export default Home