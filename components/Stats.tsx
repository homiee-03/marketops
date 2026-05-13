"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Number.isInteger(value) ? Math.round(latest) : latest.toFixed(1)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.8, ease: "easeOut" });
    return () => controls.stop();
  }, [count, inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  return (
    <section className="py-10">
      <div className="container-premium">
        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-4 backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-black/30 p-8 text-center">
              <div className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
