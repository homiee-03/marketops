"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-32 mx-auto h-72 max-w-3xl rounded-full bg-violet-ops/10 blur-3xl" />
      <div className="container-premium relative">
        <SectionHeading eyebrow="Services" title="Full-stack growth systems for premium brands" description="From first impression to repeatable acquisition, every touchpoint is designed to look exceptional and perform even better." />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <motion.article key={title} variants={fadeUp} whileHover={{ y: -10, scale: 1.015 }} className="group glass-card relative overflow-hidden rounded-3xl p-6">
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-flare/25 blur-2xl" />
              </div>
              <div className="relative mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/12 to-white/5 text-violet-flare">
                <Icon size={25} />
              </div>
              <h3 className="relative text-xl font-semibold tracking-[-0.02em] text-white">{title}</h3>
              <p className="relative mt-4 leading-7 text-zinc-400">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
