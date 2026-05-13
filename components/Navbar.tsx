"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="container-premium flex items-center justify-between rounded-full border border-white/10 bg-black/35 py-3 shadow-card backdrop-blur-2xl">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-ops via-violet-pulse to-violet-flare shadow-glow">
            <span className="h-3 w-3 rounded-full bg-white" />
          </span>
          <span className="text-sm font-bold tracking-[0.28em] text-white">MARKET OPS</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="group relative text-sm text-zinc-300 transition hover:text-white">
              {link}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-violet-pulse to-violet-flare transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-violet-100 lg:inline-flex">
          Book a Call
        </a>

        <button aria-label="Toggle menu" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white lg:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="container-premium mt-3 rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`} className="rounded-2xl px-4 py-3 text-zinc-200 hover:bg-white/10">
                  {link}
                </a>
              ))}
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-2xl bg-white px-4 py-3 text-center font-semibold text-black">
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
