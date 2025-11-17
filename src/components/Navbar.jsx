import { Menu, Rocket, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-5 py-3 shadow-lg">
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-900">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">Cyphernaut</span>
          </a>

          <nav className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/15"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-4 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-white/10 px-3 py-2 text-white ring-1 ring-white/20"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
