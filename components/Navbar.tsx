"use client";

import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Styles", href: "#features" },
  { name: "Gallery", href: "#gallery" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "About", href: "#footer" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
    >
      <div className="w-full max-w-7xl">

        <div className="flex h-24 items-center justify-between rounded-3xl border border-white/10 bg-black/70 px-8 backdrop-blur-xl">

          {/* Logo */}
          <a href="#" className="text-5xl font-extrabold tracking-tight">
            <span className="text-white">STYLE </span>
            <span className="text-blue-500">AI</span>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-12 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg text-zinc-300 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#hero"
            className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-500"
          >
            Start Creating
          </a>

        </div>

      </div>
    </motion.header>
  );
}