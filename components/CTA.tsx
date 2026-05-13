"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function CTA() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-premium">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-violet-ops/30 via-white/[0.06] to-violet-flare/20 p-8 text-center shadow-glow sm:p-14 lg:p-20">
          <div className="absolute inset-0 bg-radial-grid bg-[length:26px_26px] opacity-25" />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-violet-100">Let&apos;s Build Your Brand</p>
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">Ready to turn your digital presence into a premium growth engine?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100/80">Book a strategic call with MARKET OPS and leave with a clearer path for creative, conversion, and scale.</p>
            <a href="mailto:hello@marketops.agency" className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.02]">
              Book a Call <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
