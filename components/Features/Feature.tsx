"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Brain,
    title: "AI Face Analysis",
    description:
      "Analyze your face shape, skin tone and body type with advanced AI.",
  },
  {
    icon: Sparkles,
    title: "Unlimited Styles",
    description:
      "Generate business, casual, wedding, luxury and cinematic looks instantly.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Receive professional style recommendations within seconds.",
  },
  {
    icon: ShieldCheck,
    title: "100% Free & Private",
    description:
      "No subscriptions, no hidden costs and your images stay private.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            WHY STYLE AI
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            AI-powered fashion assistant that helps you discover your perfect
            look in seconds.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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