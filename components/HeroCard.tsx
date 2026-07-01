"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import UploadBox from "./Hero/UploadBox";
import AnalysisPanel from "./Hero/AnalysisPanel";
import Recommendation from "./Recommendation";
import ColorPalette from "./Hero/ColorPalette";
import OutfitList from "./Hero/OutfitList";
import ConfidenceCard from "./Hero/ConfidenceCard";
import GenerateButton from "./Hero/GenerateButton";

export default function HeroCard() {
  const [preview, setPreview] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.8 }}
      className="flex flex-1 justify-center"
    >
      <div className="relative w-full max-w-md rounded-3xl border border-white/15 bg-white/6 p-5 shadow-2xl backdrop-blur-xl sm:p-6 lg:p-8">

        {/* Background Glow */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>

        {/* Header */}
        <div className="relative mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            AI Style Analysis
          </h2>

          <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
            ● Online
          </span>
        </div>

        {/* Upload Section */}
        <UploadBox
          preview={preview}
          setPreview={setPreview}
          isScanning={isScanning}
          setIsScanning={setIsScanning}
          setAnalysisComplete={setAnalysisComplete}
        />

        {/* Analysis */}
        <div className="mt-8">
          <AnalysisPanel
            isScanning={isScanning}
            analysisComplete={analysisComplete}
          />
        </div>

        {/* Results */}
        {analysisComplete && (
          <>
            <div className="mt-8">
              <Recommendation />
            </div>

            <div className="mt-8">
              <ColorPalette />
            </div>

            <div className="mt-8">
              <OutfitList />
            </div>

            <div className="mt-8">
              <ConfidenceCard score={96} />
            </div>

            <GenerateButton disabled={!analysisComplete} />
          </>
        )}
      </div>
    </motion.div>
  );
}