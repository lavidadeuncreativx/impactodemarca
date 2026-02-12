import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import StickyWhatsApp from "./components/StickyWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background-dark selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Process />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <StickyWhatsApp />
    </div>
  );
}
