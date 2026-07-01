"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  value: string;
  percentage: number;
}

export default function ProgressBar({
  label,
  value,
  percentage,
}: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">
          {label}
        </span>

        <span className="text-sm font-medium text-white">
          {value}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400"
        />
      </div>

      <div className="text-right text-xs text-zinc-500">
        {percentage}%
      </div>
    </div>
  );
}