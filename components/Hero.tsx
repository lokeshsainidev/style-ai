"use client";

import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-linear-to-b from-black via-[#070b16] to-black pt-36"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-[180px]" />

      <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">
        <HeroContent />
        <HeroCard />
      </div>
    </section>
  );
}