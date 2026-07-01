"use client";

import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";

const gallery = [
  {
    before: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    after: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    title: "Business Professional",
    category: "Formal",
  },
  {
    before: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    after: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
    title: "Luxury Gentleman",
    category: "Luxury",
  },
  {
    before: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    after: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",
    title: "Casual Streetwear",
    category: "Casual",
  },
  {
    before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    after: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600",
    title: "Elegant Party Look",
    category: "Party",
  },
  {
    before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    title: "Modern Office Style",
    category: "Office",
  },
  {
    before: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    after: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    title: "Wedding Collection",
    category: "Wedding",
  },
];

export default function StyleGallery() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />
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
          <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-400">
            ✨ AI STYLE GALLERY
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
            Real AI Style
            <span className="block bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Explore AI-powered style transformations designed for different
            occasions, personalities and fashion preferences.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <GalleryCard
              key={item.title}
              before={item.before}
              after={item.after}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}