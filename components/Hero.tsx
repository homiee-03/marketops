"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const heroStats = ["240+ Projects", "7.8x ROAS", "18 Markets"];

export default function Hero() {
  return (
    <section id="home" className="noise-overlay relative flex min-h-[100svh] items-center overflow-hidden py-28 sm:py-32">
      <motion.div animate={{ y: [0, -28, 0], scale: [1, 1.06, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-violet-ops/30 blur-3xl" />
      <motion.div animate={{ y: [0, 36, 0], x: [0, -22, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[-9rem] top-32 h-96 w-96 rounded-full bg-violet-flare/25 blur-3xl" />
      <div className="absolute inset-0 bg-radial-grid bg-[length:28px_28px] opacity-35" />
      <div className="container-premium relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
          <motion.div variants={fadeUp} className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
            <span className="mr-2 h-2 w-2 self-center rounded-full bg-violet-flare shadow-glow" />
            Scaling Brands Through Strategy, Creativity & Performance
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl font-semibold tracking-[-0.065em] text-white xs:text-5xl sm:text-7xl lg:text-8xl">
            Helping Brands <span className="text-gradient">Scale Faster</span> in the Digital Era
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            MARKET OPS designs premium websites, apps, ecommerce experiences, performance campaigns, SEO systems, and global expansion strategies that turn ambition into measurable growth.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.02]">
              Let&apos;s Build Your Brand <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a href="#work" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
              <Play size={18} /> View Work
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-xl">
                <p className="text-sm font-semibold text-white">{item}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }} className="relative mx-auto w-full max-w-xl lg:mx-0 lg:block">
          <div className="absolute inset-8 rounded-full bg-violet-pulse/20 blur-3xl" />
          <div className="glass-card relative rounded-[2.2rem] p-5">
            <div className="rounded-[1.7rem] border border-white/10 bg-black/35 p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">Growth Command</p>
                  <p className="text-2xl font-semibold text-white">Live Performance</p>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">+38.4%</div>
              </div>
              <div className="space-y-4">
                {[86, 72, 94].map((width, index) => (
                  <div key={width} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="mb-3 flex justify-between text-sm text-zinc-300">
                      <span>{["Creative Velocity", "Conversion Health", "Market Expansion"][index]}</span>
                      <span>{width}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${width}%` }} transition={{ duration: 1.3, delay: 0.8 + index * 0.15 }} className="h-full rounded-full bg-gradient-to-r from-violet-ops to-violet-flare" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 5, repeat: Infinity }} className="glass-card absolute -left-2 top-20 rounded-3xl p-4 sm:-left-10 sm:top-24 sm:p-5">
            <TrendingUp className="mb-3 text-violet-flare" />
            <p className="text-sm text-muted">Revenue Signal</p>
            <p className="text-2xl font-semibold text-white">$12.8M</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
