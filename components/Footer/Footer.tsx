"use client";

import { Instagram, Linkedin, Globe , Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black px-6 py-16">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Style<span className="text-blue-400">AI</span>
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              AI powered fashion assistant helping you discover your perfect
              style with personalized recommendations.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Gallery</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Privacy</li>
              <li className="hover:text-white cursor-pointer">Terms</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Connect
            </h3>

            <div className="flex gap-4">

              <div className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:border-blue-500 hover:text-blue-400">
                <Instagram />
              </div>

              <div className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:border-blue-500 hover:text-blue-400">
                <Linkedin />
              </div>

              <div className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:border-blue-500 hover:text-blue-400">
                <Globe />
              </div>

              <div className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:border-blue-500 hover:text-blue-400">
                <Mail />
              </div>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-zinc-500">
          © 2026 StyleAI. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}