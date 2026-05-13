"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-pulse">{eyebrow}</p>
      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
    </motion.div>
  );
}
