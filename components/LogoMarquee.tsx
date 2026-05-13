import { logoNames } from "@/lib/data";

export default function LogoMarquee() {
  const logos = [...logoNames, ...logoNames];
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-8">
      <div className="container-premium mb-5 text-center text-sm uppercase tracking-[0.35em] text-zinc-500">Trusted by ambitious growth teams</div>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {logos.map((logo, index) => (
            <div key={`${logo}-${index}`} className="grid h-20 w-44 place-items-center rounded-3xl border border-white/10 bg-white/[0.04] text-lg font-bold tracking-[0.25em] text-zinc-500 grayscale transition hover:text-white hover:grayscale-0">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
