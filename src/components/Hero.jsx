import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDownRight, Download, Github, TerminalSquare } from 'lucide-react';

export default function Hero() {
  const [stars, setStars] = useState(0);
  const [repos, setRepos] = useState(0);

  // Simple animated counters (placeholder for live stats)
  useEffect(() => {
    const targetStars = 1280;
    const targetRepos = 42;
    const duration = 1200; // ms
    const start = performance.now();

    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setStars(Math.floor(targetStars * easeOutCubic(p)));
      setRepos(Math.floor(targetRepos * easeOutCubic(p)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] w-full grid lg:grid-cols-2 items-stretch">
      <div className="relative h-[60vh] lg:h-auto">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          aria-label="Interactive 3D scene"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient overlay that won't block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-black/40" />
      </div>

      <div className="relative flex flex-col justify-center px-6 md:px-10 py-12 gap-6">
        <span className="inline-flex items-center gap-2 w-fit text-xs md:text-sm px-3 py-1 rounded-full border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md">
          <TerminalSquare className="size-4 text-emerald-400" />
          Building immersive 3D experiences
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Your Name</span>
          <br /> 3D Developer & Creative Engineer
        </h1>
        <p className="text-base md:text-lg text-black/70 dark:text-white/70 max-w-2xl">
          I craft modern web experiences with WebGL, React, and delightful motion. Explore my work, dive into my code, and let's build something extraordinary together.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-shadow">
            View Projects <ArrowDownRight className="size-4" />
          </a>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
            <Download className="size-4" /> Download Resume
          </a>
          <a href="https://github.com/octocat" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
            <Github className="size-4" /> GitHub
          </a>
        </div>

        <div className="mt-4 grid grid-cols-3 max-w-xs gap-3 text-center">
          <Stat label="Stars" value={stars} />
          <Stat label="Repos" value={repos} />
          <Stat label="Years" value={6} />
        </div>

        <TechOrbit />
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-md py-3">
      <div className="text-xl font-bold">{value.toLocaleString()}</div>
      <div className="text-xs opacity-70">{label}</div>
    </div>
  );
}

function TechOrbit() {
  const tech = [
    { name: 'React', color: 'from-sky-400 to-blue-600' },
    { name: 'Three.js', color: 'from-violet-400 to-fuchsia-600' },
    { name: 'WebGL', color: 'from-emerald-400 to-teal-600' },
    { name: 'TypeScript', color: 'from-indigo-400 to-purple-600' },
  ];
  return (
    <div className="relative mt-6 h-28">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <Badge label={tech[0].name} color={tech[0].color} />
        </div>
        <div className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Badge label={tech[1].name} color={tech[1].color} />
        </div>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
          <Badge label={tech[2].name} color={tech[2].color} />
        </div>
        <div className="absolute left-0 top-1/2 translate-x-1/2 -translate-y-1/2">
          <Badge label={tech[3].name} color={tech[3].color} />
        </div>
      </div>
    </div>
  );
}

function Badge({ label, color }) {
  return (
    <div className={`text-xs px-3 py-1 rounded-full text-white bg-gradient-to-br ${color} shadow-lg shadow-black/10`}>
      {label}
    </div>
  );
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
