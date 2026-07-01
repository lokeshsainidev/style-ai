"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

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
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-blue-400 font-semibold">
            WHY STYLE AI
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            AI powered fashion assistant that helps you discover your
            perfect look in seconds.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon className="h-7 w-7 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}