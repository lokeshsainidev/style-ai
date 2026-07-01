"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  review: string;
}

export default function TestimonialCard({
  name,
  role,
  image,
  review,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.20)]"
    >
      {/* Rating */}
      <div className="mb-6 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}
      <p className="leading-7 text-zinc-300">
        "{review}"
      </p>

      {/* User */}
      <div className="mt-8 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-white">
              {name}
            </h4>

            <BadgeCheck
              size={18}
              className="text-blue-400"
            />
          </div>

          <p className="text-sm text-zinc-400">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}