import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import Feature from "../components/Features/Feature";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import StyleGallery from "../components/StyleGallery/StyleGallery";
import CTA from "../components/CTA/CTA";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Feature />
      <HowItWorks />
      <StyleGallery />
      <CTA />
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </main>
  );
}