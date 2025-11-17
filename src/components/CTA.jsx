export default function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Launch?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Tell us about your project and we’ll craft a tailored growth plan covering launch, tokenomics, community, and partnerships.
        </p>

        <form className="mx-auto mt-8 grid gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-left backdrop-blur-xl">
          <div className="grid gap-2">
            <label className="text-sm text-slate-300">Project name</label>
            <input className="rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="E.g., NovaSwap" />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-slate-300">What are you building?</label>
            <textarea rows={4} className="rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Memecoin, NFT collection, DeFi protocol, tooling, etc." />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-slate-300">Contact email or Telegram</label>
            <input className="rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="you@project.xyz or @handle" />
          </div>

          <button type="button" className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10">
            Request Proposal
          </button>

          <p className="text-center text-xs text-slate-400">We’ll get back within 24 hours.</p>
        </form>
      </div>
    </section>
  );
}
