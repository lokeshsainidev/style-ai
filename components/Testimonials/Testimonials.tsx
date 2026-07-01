"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "StyleAI completely changed my wardrobe. The outfit recommendations were surprisingly accurate.",
  },
  {
    name: "Priya Mehta",
    role: "Content Creator",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "I loved the hairstyle and color suggestions. It feels like having a personal stylist available anytime.",
  },
  {
    name: "Aman Verma",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The AI analysis is incredibly fast and helped me choose outfits for meetings and events.",
  },
  {
    name: "Sneha Kapoor",
    role: "Fashion Blogger",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Beautiful UI and amazing recommendations. I now use it before every photoshoot.",
  },
  {
    name: "Arjun Singh",
    role: "College Student",
    image: "https://i.pravatar.cc/150?img=18",
    review:
      "It helped me improve my everyday style without spending hours searching online.",
  },
  {
    name: "Neha Gupta",
    role: "Marketing Manager",
    image: "https://i.pravatar.cc/150?img=41",
    review:
      "Simple, fast and genuinely useful. The personalized suggestions are on point.",
  },
];

export default function Testimonials() {
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
            ⭐ TESTIMONIALS
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
            Loved By
            <span className="block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Thousands Of Users
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            See what our users say after transforming their style with AI.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              role={item.role}
              image={item.image}
              review={item.review}
            />
          ))}
        </div>

      </div>
    </section>
  );
}