"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Palette,
  Shirt,
  Scissors,
  ShoppingBag,
  BadgeCheck,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI Face Analysis",
    description:
      "Detect face shape, skin tone and facial features with advanced AI in seconds.",
  },
  {
    icon: Shirt,
    title: "Outfit Recommendations",
    description:
      "Get personalized outfits for casual, office, wedding and party occasions.",
  },
  {
    icon: Palette,
    title: "Smart Color Palette",
    description:
      "Discover colors that perfectly match your skin tone and personality.",
  },
  {
    icon: Scissors,
    title: "Hairstyle Suggestions",
    description:
      "Find hairstyles that best suit your face shape and overall appearance.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Assistant",
    description:
      "Explore fashion items similar to your AI recommendations from top brands.",
  },
  {
    icon: BadgeCheck,
    title: "Style Score",
    description:
      "Receive an AI confidence score with detailed fashion improvement tips.",
  },
];

export default function Feature() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            ✨ WHY STYLE AI
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
            AI-Powered Fashion
            <span className="block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Discover your perfect style using cutting-edge AI. From face
            analysis to personalized outfits, StyleAI helps you look your best
            every day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}