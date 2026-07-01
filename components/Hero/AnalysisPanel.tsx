"use client";

import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";



interface AnalysisPanelProps {
  isScanning: boolean;
  analysisComplete: boolean;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};





export default function AnalysisPanel({
  isScanning,
  analysisComplete,
}: AnalysisPanelProps) {
  if (!analysisComplete) {
    return (
      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h3 className="mb-4 text-xl font-bold text-white">
          AI Analysis
        </h3>

        {isScanning ? (
          <div className="space-y-4">
            <div className="h-4 w-full animate-pulse rounded bg-zinc-800"></div>
            <div className="h-4 w-full animate-pulse rounded bg-zinc-800"></div>
            <div className="h-4 w-full animate-pulse rounded bg-zinc-800"></div>
            <div className="h-4 w-full animate-pulse rounded bg-zinc-800"></div>

            <p className="pt-2 text-center text-sm text-blue-400">
              AI is analyzing your style...
            </p>
          </div>
        ) : (
          <p className="text-sm text-zinc-500">
            Upload an image to start AI analysis.
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="mt-8 space-y-6"
    >
      <h3 className="text-xl font-bold text-white">
        AI Analysis
      </h3>

      <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="space-y-6"
>
  <motion.div variants={item}>
    <ProgressBar
      label="Face Shape"
      value="Oval"
      percentage={92}
    />
  </motion.div>

  <motion.div variants={item}>
    <ProgressBar
      label="Skin Tone"
      value="Warm"
      percentage={88}
    />
  </motion.div>

  <motion.div variants={item}>
    <ProgressBar
      label="Body Type"
      value="Athletic"
      percentage={95}
    />
  </motion.div>

  <motion.div variants={item}>
    <ProgressBar
      label="Hair Style"
      value="Short"
      percentage={85}
    />
  </motion.div>
</motion.div>
    </motion.div>
  );
}