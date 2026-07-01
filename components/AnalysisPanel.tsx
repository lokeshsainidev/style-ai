"use client";

import { motion } from "framer-motion";

const analysis = [
  {
    title: "Face Shape",
    value: "Oval",
    confidence: "98%",
  },
  {
    title: "Skin Tone",
    value: "Warm",
    confidence: "95%",
  },
  {
    title: "Body Type",
    value: "Athletic",
    confidence: "97%",
  },
  {
    title: "Hair Style",
    value: "Short",
    confidence: "99%",
  },
];

export default function AnalysisPanel() {
  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-semibold text-white">
        AI Analysis
      </h3>

      {analysis.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-xl border border-white/10 bg-white/5 p-4"
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-zinc-400">
              {item.title}
            </span>

            <span className="font-semibold text-white">
              {item.value}
            </span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">
            <div
              className="h-2 rounded-full bg-blue-500"
              style={{ width: item.confidence }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}