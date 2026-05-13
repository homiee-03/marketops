import { Dribbble, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/45 py-14">
      <div className="container-premium">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet-ops to-violet-flare"><span className="h-3 w-3 rounded-full bg-white" /></span>
              <span className="text-sm font-bold tracking-[0.28em] text-white">MARKET OPS</span>
            </div>
            <p className="max-w-sm leading-7 text-zinc-400">Scaling brands through strategy, creativity, and performance with premium digital systems built for modern markets.</p>
            <div className="mt-6 flex gap-3 text-zinc-400">
              {[Instagram, Linkedin, Twitter, Dribbble].map((Icon, index) => <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:text-white"><Icon size={18} /></a>)}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Services</h3>
            <div className="grid gap-3 text-sm text-zinc-400">
              {services.slice(0, 6).map((service) => <a key={service.title} href="#services" className="transition hover:text-white">{service.title}</a>)}
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <div className="grid gap-4 text-sm text-zinc-400">
              <a href="mailto:hello@marketops.agency" className="flex items-center gap-3 transition hover:text-white"><Mail size={17} /> hello@marketops.agency</a>
              <p className="flex items-center gap-3"><MapPin size={17} /> Global remote studio</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Growth Notes</h3>
            <p className="mb-4 text-sm leading-7 text-zinc-400">Premium insights on creative strategy, acquisition, SEO, and international growth.</p>
            <form className="flex overflow-hidden rounded-full border border-white/10 bg-white/[0.04] p-1">
              <input aria-label="Email address" placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-zinc-600" />
              <button className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-black" type="button">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 MARKET OPS. All rights reserved.</p>
          <p>Original premium interface crafted for digital scale.</p>
        </div>
      </div>
    </footer>
  );
}
