import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-obsidian text-white">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Services />
      <Stats />
      <About />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
