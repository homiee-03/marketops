"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { portfolio } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="work" className="section-pad">
      <div className="container-premium">
        <SectionHeading eyebrow="Portfolio" title="Showcase systems with boardroom-ready polish" description="Original concept work illustrating the strategic, creative, and performance depth MARKET OPS brings to each growth challenge." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 lg:grid-cols-2">
          {portfolio.map(({ name, category, metric, icon: Icon }, index) => (
            <motion.article key={name} variants={fadeUp} whileHover={{ scale: 1.015 }} className="group glass-card relative min-h-[360px] overflow-hidden rounded-[2rem] p-7">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-ops/25 via-transparent to-violet-flare/10 opacity-70 transition group-hover:scale-110" />
              <div className="absolute inset-6 rounded-[1.5rem] border border-white/10 bg-black/20" />
              <div className="relative flex h-full min-h-[300px] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white"><Icon size={24} /></div>
                  <ArrowUpRight className="text-zinc-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-violet-200">{category}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{name}</h3>
                  <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white">{metric}</div>
                </div>
              </div>
              <span className="absolute right-8 top-24 text-8xl font-semibold text-white/[0.04]">0{index + 1}</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
