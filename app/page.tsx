import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ServiceCTA from "./components/services/ServiceCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      <Services />

      <Testimonials />

      <ServiceCTA />

      <Contact />

      <Footer />
    </main>
  );
}