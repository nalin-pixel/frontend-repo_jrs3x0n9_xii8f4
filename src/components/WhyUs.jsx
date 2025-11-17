import { CheckCircle2, Users, Globe2, Cpu, Shield } from "lucide-react";

const points = [
  {
    icon: CheckCircle2,
    title: "End-to-End Service",
    desc: "From brand to governance, we handle the full lifecycle of your crypto project.",
  },
  { icon: Users, title: "Community-Centric", desc: "We design for long-term relationships and active participation." },
  { icon: Globe2, title: "Web3-Native", desc: "Deep domain expertise across chains, DAOs, and DeFi ecosystems." },
  { icon: Cpu, title: "Data-Driven", desc: "We iterate on what works using analytics, not guesswork." },
  { icon: Shield, title: "Reputation First", desc: "Proactive monitoring to protect and elevate your brand." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose Cyphernaut?</h2>
            <p className="mt-3 text-slate-300">
              We blend blockchain expertise with growth marketing to create compound advantages for your project.
            </p>

            <div className="mt-8 grid gap-4">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl">
                  <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="text-sm text-slate-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-8 ring-1 ring-white/10">
            <div className="aspect-video rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.3),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.3),transparent_50%)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
