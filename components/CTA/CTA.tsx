"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
          <Sparkles size={16} />
          AI Powered Fashion
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
          Ready To Upgrade
          <span className="block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Your Style?
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Upload your photo and receive AI-powered fashion recommendations,
          hairstyle suggestions, color palettes and personalized outfits in
          just a few seconds.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
          <button className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700">
            Upload My Photo
            <ArrowRight size={20} />
          </button>

          <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5">
            Explore Gallery
          </button>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
          <div>
            <h3 className="text-3xl font-bold text-white">50K+</h3>
            <p className="mt-2 text-sm text-zinc-400">
              AI Analyses
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">98%</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Accuracy
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">100%</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Free
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
}