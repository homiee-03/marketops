"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const points = ["Strategy-led design systems", "Performance creative operations", "Scalable web and commerce engineering"];

export default function About() {
  return (
    <section id="about" className="section-pad overflow-hidden">
      <div className="container-premium grid items-center gap-12 lg:grid-cols-2">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-pulse">About Market Ops</p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">A senior growth studio for brands that refuse average.</h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            We combine the taste of a luxury creative studio with the operating rhythm of a performance team. Every website, campaign, brand system, and international growth initiative is shaped to be elegant, measurable, and built for momentum.
          </p>
          <div className="mt-8 grid gap-4">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 text-zinc-200">
                <CheckCircle2 className="text-violet-flare" size={20} /> {point}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative min-h-[520px]">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-ops/20 to-transparent blur-3xl" />
          <div className="glass-card absolute left-0 top-0 h-72 w-[78%] rounded-[2rem] p-5">
            <div className="h-full rounded-[1.5rem] bg-[radial-gradient(circle_at_25%_20%,rgba(168,85,247,.45),transparent_28%),linear-gradient(135deg,rgba(255,255,255,.15),rgba(255,255,255,.03))]" />
          </div>
          <div className="glass-card absolute bottom-0 right-0 h-80 w-[78%] rounded-[2rem] p-5">
            <div className="grid h-full place-items-center rounded-[1.5rem] border border-white/10 bg-black/35 text-center">
              <div>
                <p className="text-6xl font-semibold tracking-[-0.06em] text-gradient">OPS</p>
                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-zinc-500">Design × Growth × Scale</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
