"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface GalleryCardProps {
  before: string;
  after: string;
  title: string;
  category: string;
}

export default function GalleryCard({
  before,
  after,
  title,
  category,
}: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.20)]"
    >
      {/* Images */}
      <div className="grid grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src={before}
            alt="Before"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
            Before
          </span>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={after}
            alt="After"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
            After
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
          {category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-white">
          {title}
        </h3>

        <button className="mt-6 flex items-center gap-2 text-blue-400 transition hover:gap-3">
          View Style
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}