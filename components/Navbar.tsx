"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4">

          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-wide">
            STYLE <span className="text-blue-500">AI</span>
          </h1>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-300">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Styles</a>
            <a href="#" className="hover:text-white transition">Gallery</a>
            <a href="#" className="hover:text-white transition">How It Works</a>
            <a href="#" className="hover:text-white transition">About</a>
          </div>

          {/* Button */}
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Start Creating
          </button>

        </div>
      </div>
    </motion.nav>
  );
}