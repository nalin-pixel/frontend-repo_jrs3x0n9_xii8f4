import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            End-to-end Web3 growth studio
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Cyphernaut: Your Gateway to Crypto Success
          </h1>
          <p className="mt-4 text-lg text-slate-200/90">
            We launch, market, and scale Web3 products with tailored strategies, tokenomics, and community-led growth. From memecoins to DeFi, we help your project thrive.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-white/10">
              Explore Services
            </a>
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-semibold ring-1 ring-white/20">
              Get a Proposal
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/95"></div>
    </section>
  );
}
