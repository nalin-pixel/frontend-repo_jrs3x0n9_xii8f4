import { Rocket, Target, LineChart, Share2, PenTool, Users, Sparkles, ShieldCheck, Gem, Megaphone, Handshake, LayoutDashboard } from "lucide-react";

const services = [
  {
    title: "Crypto Project Marketing & Launching",
    desc: "From pre-launch buzz to post-launch momentum, we position your project to stand out and scale.",
    icon: Rocket,
  },
  {
    title: "Tokenomics Strategy & Design",
    desc: "Robust models for distribution, liquidity and incentives that drive sustainable growth.",
    icon: LineChart,
  },
  {
    title: "Web3 Marketing & Campaigns",
    desc: "Targeted, on-chain native campaigns across Web3 channels and communities.",
    icon: Target,
  },
  {
    title: "Social Media Management & Handling",
    desc: "End-to-end presence across X, Telegram, Discord and Reddit with consistent brand voice.",
    icon: Share2,
  },
  {
    title: "Content Marketing",
    desc: "From memecoin avatars to deep-dives and daily trend reports—content your community loves.",
    icon: PenTool,
  },
  {
    title: "Community Engagement Campaigns",
    desc: "Airdrops, giveaways, contests and educational events that spark lasting loyalty.",
    icon: Users,
  },
  {
    title: "DAO/Community Server Management",
    desc: "Governance frameworks and proposal flow that keep your community effective.",
    icon: LayoutDashboard,
  },
  {
    title: "NFT Promotion & Strategy",
    desc: "Go-to-market plans for drops leveraging influencers and curated content.",
    icon: Gem,
  },
  {
    title: "Blockchain Partnerships & Collaborations",
    desc: "Strategic alliances with projects and platforms to grow your ecosystem.",
    icon: Handshake,
  },
  {
    title: "Reputation Management & PR",
    desc: "Sentiment monitoring and proactive PR to protect and elevate your brand.",
    icon: ShieldCheck,
  },
  {
    title: "Web3 Community Incubation & Growth",
    desc: "Support for early-stage teams on community building and incentive design.",
    icon: Sparkles,
  },
  {
    title: "Influencer Outreach & Campaigns",
    desc: "Connect with trusted voices to authentically amplify your project.",
    icon: Megaphone,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
          <p className="mt-3 text-slate-300">Comprehensive, end-to-end growth for crypto and Web3.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-slate-900/70">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent"></div>
    </section>
  );
}
