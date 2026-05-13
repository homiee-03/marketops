"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="section-pad bg-white/[0.02]">
      <div className="container-premium">
        <SectionHeading eyebrow="Workflow" title="A clear operating cadence from idea to scale" description="Premium outcomes come from disciplined sequencing: learn fast, design precisely, ship cleanly, and optimize relentlessly." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative grid gap-5 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-violet-pulse/60 to-transparent lg:block" />
          {processSteps.map(({ title, description, icon: Icon }, index) => (
            <motion.div key={title} variants={fadeUp} whileHover={{ y: -8 }} className="glass-card relative rounded-3xl p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-ops/15 text-violet-flare ring-1 ring-violet-pulse/30"><Icon size={24} /></div>
                <span className="text-sm text-zinc-500">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
