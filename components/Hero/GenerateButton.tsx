"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Loader2 } from "lucide-react";

interface GenerateButtonProps {
  disabled?: boolean;
}

export default function GenerateButton({
  disabled = false,
}: GenerateButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (disabled || loading) return;

    setLoading(true);

    // Future AI API call
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`group relative mt-8 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl py-4 font-semibold transition-all duration-300
        ${
          disabled
            ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
            : "bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
        }`}
    >
      {!disabled && (
        <motion.div
          animate={{ x: ["-120%", "120%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-y-0 w-16 bg-white/20 blur-md"
        />
      )}

      {loading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="h-5 w-5" />
          Generate My Style
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </motion.button>
  );
}