import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const rows = [...testimonials, ...testimonials];
  return (
    <section className="section-pad overflow-hidden bg-white/[0.02]">
      <div className="container-premium">
        <SectionHeading eyebrow="Testimonials" title="Operators, founders, and CMOs trust the process" description="Partnerships are built on clarity, craft, and the ability to keep momentum when growth gets complex." />
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {rows.map((item, index) => (
            <article key={`${item.name}-${index}`} className="glass-card w-[330px] rounded-3xl p-6 sm:w-[430px]">
              <div className="mb-5 flex gap-1 text-violet-flare">
                {Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg leading-8 text-zinc-200">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-violet-ops to-violet-flare font-semibold text-white">{item.name.charAt(0)}</div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
