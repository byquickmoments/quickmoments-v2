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
    <main className="bg-black min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <ForCreators />
      <About />
      <Footer />
    </main>
  );
}
