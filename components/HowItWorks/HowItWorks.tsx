"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Brain,
  Sparkles,
} from "lucide-react";

import StepCard from "./StepCard";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload Your Photo",
    description:
      "Upload a clear image of yourself. Our AI securely processes your photo while keeping your data private.",
  },
  {
    step: "02",
    icon: Brain,
    title: "AI Style Analysis",
    description:
      "Our AI analyzes your face shape, skin tone, hairstyle and overall appearance in just a few seconds.",
  },
  {
    step: "03",
    icon: Sparkles,
    title: "Get Your Style",
    description:
      "Receive personalized outfit ideas, hairstyles, colors and fashion recommendations instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            🚀 HOW IT WORKS
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
            Get Your Perfect Style
            <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              In Just 3 Steps
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Upload your photo, let our AI analyze your appearance, and receive
            personalized fashion recommendations within seconds.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}