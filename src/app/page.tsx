import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import ForCreators from "@/components/ForCreators";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden w-full max-w-full">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <ForCreators />
      <About />
      <Footer />
    </main>
  );
}
