"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:bg-blue-500/20">
        <Icon className="h-7 w-7 text-blue-400" />
      </div>

      <h3 className="mb-3 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-7 text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}