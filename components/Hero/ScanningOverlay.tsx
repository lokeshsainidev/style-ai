"use client";

import { motion } from "framer-motion";

interface ScanningOverlayProps {
  show: boolean;
}

export default function ScanningOverlay({
  show,
}: ScanningOverlayProps) {
  if (!show) return null;

  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* Moving Scan Line */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "120%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 h-2 w-full bg-linear-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_30px_#38bdf8]"
      />

      {/* Status */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md">
        🤖 AI is analyzing...
      </div>
    </div>
  );
}