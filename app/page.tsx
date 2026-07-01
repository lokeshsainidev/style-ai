import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features/Feature";
import HowItWorks from "../components/HowItWorks";
import StyleGallery from "../components/StyleGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <StyleGallery />
    </main>
  );
}