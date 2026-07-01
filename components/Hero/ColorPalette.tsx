"use client";

import { motion } from "framer-motion";

const colors = [
  { name: "Navy", code: "#1E3A8A" },
  { name: "Beige", code: "#D6C7A1" },
  { name: "White", code: "#FFFFFF" },
  { name: "Charcoal", code: "#36454F" },
  { name: "Olive", code: "#556B2F" },
];

export default function ColorPalette() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h3 className="mb-5 text-lg font-bold text-white">
        Recommended Color Palette
      </h3>

      <div className="flex justify-between gap-3">
        {colors.map((color, index) => (
          <motion.div
            key={color.name}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: index * 0.12,
              type: "spring",
              stiffness: 180,
            }}
            className="flex flex-col items-center"
          >
            <div
              className="h-14 w-14 rounded-full border-2 border-white/20 shadow-lg"
              style={{ backgroundColor: color.code }}
            />

            <span className="mt-2 text-xs text-zinc-400">
              {color.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}