"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

const recommendations = [
  "Minimalist Fashion",
  "Neutral Color Palette",
  "Layered Streetwear",
  "Smart Casual Looks",
];

export default function Recommendation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
    >
      <div className="mb-5 flex items-center gap-2">
        <Sparkles className="text-blue-400" size={22} />
        <h3 className="text-xl font-bold text-white">
          AI Recommendation
        </h3>
      </div>

      <div className="space-y-3">
        {recommendations.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
            }}
            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-3"
          >
            <CheckCircle2
              size={18}
              className="text-green-400"
            />

            <span className="text-zinc-200">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}