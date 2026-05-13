import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-obsidian px-6 text-center text-white">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-pulse">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">Page not found</h1>
        <p className="mt-4 text-muted">The page you requested is outside the MARKET OPS command center.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-black">
          Back home
        </Link>
      </div>
    </main>
  );
}
