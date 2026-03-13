import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import ForCreators from "@/components/ForCreators";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen pb-24">

      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      <section id="work" className="scroll-mt-24">
        <Portfolio />
      </section>

      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>

      <section id="for-creators" className="scroll-mt-24">
        <ForCreators />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <Footer />

    </main>
  );
}
