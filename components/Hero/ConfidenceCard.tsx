"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface ConfidenceCardProps {
  score: number;
}

export default function ConfidenceCard({
  score,
}: ConfidenceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className="mb-3 flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-green-400" />
        <h3 className="font-semibold text-white">
          AI Confidence Score
        </h3>
      </div>

      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-zinc-400">
          Profile Accuracy
        </span>

        <span className="font-bold text-green-400">
          {score}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-linear-to-r from-green-500 to-emerald-400"
        />
      </div>

      <p className="mt-3 text-xs text-zinc-500">
        AI has high confidence in your style profile.
      </p>
    </motion.div>
  );
}