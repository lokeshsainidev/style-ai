"use client";

import { motion } from "framer-motion";
import { Shirt, ArrowRight } from "lucide-react";

const outfits = [
  {
    name: "Old Money",
    match: "98%",
  },
  {
    name: "Business Casual",
    match: "96%",
  },
  {
    name: "Minimalist",
    match: "94%",
  },
  {
    name: "Streetwear",
    match: "91%",
  },
];

export default function OutfitList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h3 className="mb-5 text-lg font-bold text-white">
        Recommended Styles
      </h3>

      <div className="space-y-4">
        {outfits.map((outfit, index) => (
          <motion.div
            key={outfit.name}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.15,
            }}
            className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all duration-300 hover:border-blue-500 hover:bg-zinc-900"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/10 p-3">
                <Shirt className="h-5 w-5 text-blue-400" />
              </div>

              <div>
                <p className="font-semibold text-white">
                  {outfit.name}
                </p>

                <p className="text-xs text-zinc-500">
                  AI Match • {outfit.match}
                </p>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-zinc-500 transition group-hover:translate-x-1 group-hover:text-blue-400" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}