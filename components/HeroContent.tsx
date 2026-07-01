"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 pt-10"
    >
      <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
        ✨ 100% Free AI Personal Stylist
      </span>

      <h1 className="mt-8 text-6xl font-extrabold leading-[1.05] text-white md:text-7xl">
        Find The Style
        <br />

        <span className="text-blue-500">
          That Actually
        </span>

        <br />

        Fits You.
      </h1>

      <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-400">
        Upload one photo and let AI analyze your face shape,
        skin tone, hairstyle and personality to recommend
        outfits, hairstyles and AI photos that truly suit you.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
          Generate My Style
        </button>

        <button className="rounded-xl border border-zinc-700 px-8 py-4 text-white transition hover:bg-zinc-900">
          See Examples
        </button>
      </div>

      <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-400">
        <span>★★★★★ 20K+ Users</span>
        <span>Free Forever</span>
        <span>No Watermark</span>
        <span>Unlimited Looks</span>
      </div>
    </motion.div>
  );
}