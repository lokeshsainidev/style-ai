"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.20)]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Icon */}
      <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
        <Icon className="h-8 w-8 text-blue-400 transition-transform duration-300 group-hover:rotate-6" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-4 leading-7 text-zinc-400">
        {description}
      </p>

      {/* Learn More */}
      <div className="relative z-10 mt-8 flex items-center gap-2 font-medium text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
        Learn More
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full"></div>
    </motion.div>
  );
}