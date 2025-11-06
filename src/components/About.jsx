export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2069&auto=format&fit=crop"
                alt="Developer portrait"
                className="h-full w-full object-cover scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-pink-500/20 mix-blend-overlay" />
            </div>
            <FloatingBadge />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
              I'm a creative developer focused on building immersive interfaces powered by modern web technologies. Over the last several years, I've delivered interactive experiences, data visualizations, and performant product UIs for startups and brands. My approach blends strong engineering fundamentals with design sensitivity and a passion for motion.
            </p>
            <p className="mt-4 text-black/70 dark:text-white/70 leading-relaxed">
              I value accessibility, thoughtful animations, and resilient architectures. When I'm not coding, you'll find me sketching interfaces, experimenting with shaders, or contributing to open-source.
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <InfoCard title="Projects" value="30+" />
              <InfoCard title="Commits" value="10k+" />
              <InfoCard title="Years" value="6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs opacity-70">{title}</div>
    </div>
  );
}

function FloatingBadge() {
  return (
    <div className="absolute -bottom-6 -right-4">
      <div className="relative px-4 py-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-xl rotate-3">
        <div className="text-xs opacity-80">Tech Philosophy</div>
        <div className="text-sm font-semibold">Simple. Performant. Playful.</div>
        <div className="absolute -top-2 -left-2 size-8 rounded-xl bg-white/20" />
      </div>
    </div>
  );
}
