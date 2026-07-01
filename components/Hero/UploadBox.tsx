"use client";

import { Dispatch, SetStateAction, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, Camera, ImageIcon } from "lucide-react";
import ScanningOverlay from "./ScanningOverlay";

interface UploadBoxProps {
  preview: string | null;
  setPreview: Dispatch<SetStateAction<string | null>>;
  isScanning: boolean;
  setIsScanning: Dispatch<SetStateAction<boolean>>;
  setAnalysisComplete: Dispatch<SetStateAction<boolean>>;
}

export default function UploadBox({
  preview,
  setPreview,
  isScanning,
  setIsScanning,
  setAnalysisComplete,
}: UploadBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image.");
      return;
    }

    const url = URL.createObjectURL(file);

    setPreview(url);

    setAnalysisComplete(false);

    setIsScanning(true);

    setTimeout(() => {
      setIsScanning(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-6"
    >
      <div
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer overflow-hidden rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-blue-500 hover:bg-zinc-900"
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImage}
        />

        {preview ? (
          <div className="space-y-4">
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="h-72 w-full rounded-xl object-cover"
              />

              <ScanningOverlay show={isScanning} />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Change Image
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
              <Camera className="h-8 w-8 text-blue-400" />
            </div>

            <h3 className="text-xl font-semibold text-white">
              Upload Your Photo
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              Drag & Drop or Click to Upload
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              JPG • PNG • WEBP
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
              className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              <Upload size={18} />
              Choose Image
            </button>

            <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
              <ImageIcon size={14} />
              Max Size 10 MB
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}