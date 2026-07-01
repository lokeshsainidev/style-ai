"use client";

import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Is StyleAI completely free?",
    answer:
      "Yes. You can upload your photo and receive AI-powered fashion recommendations for free. Premium features may be introduced in the future.",
  },
  {
    question: "Is my uploaded photo safe?",
    answer:
      "Absolutely. Your images are processed securely and are never shared with third parties. Privacy is one of our top priorities.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer:
      "Our AI analyzes face shape, skin tone and overall appearance with high accuracy to provide personalized recommendations.",
  },
  {
    question: "Can I upload multiple photos?",
    answer:
      "Yes. You can upload different photos to compare styles and receive recommendations for each one.",
  },
  {
    question: "Will I get hairstyle recommendations?",
    answer:
      "Yes. StyleAI suggests hairstyles that complement your face shape and personal style.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account is required to try StyleAI. However, creating an account in the future will allow you to save your style history.",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            ❓ FAQ
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
            Frequently Asked
            <span className="block bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Everything you need to know before using StyleAI.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mt-16 space-y-5">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

      </div>
    </section>
  );
}