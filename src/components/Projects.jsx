import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: '3D Product Configurator',
    desc: 'Interactive WebGL configurator with real-time material and lighting controls.',
    tags: ['Three.js', 'React', 'GLTF'],
    demo: '#',
    repo: '#',
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Streaming analytics with WebSockets and animated data visualizations.',
    tags: ['Vite', 'D3', 'WebSocket'],
    demo: '#',
    repo: '#',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'Shader Playground',
    desc: 'GPU-powered experiments and curated shader snippets with live editor.',
    tags: ['WebGL', 'GLSL', 'Monaco'],
    demo: '#',
    repo: '#',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2069&auto=format&fit=crop'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <a href="#" className="text-sm underline-offset-4 hover:underline">View All</a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-1 text-sm opacity-80 flex-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-white/10 bg-white/5">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a href={p.demo} className="inline-flex items-center gap-1 text-sm hover:text-indigo-400">
                    <ExternalLink className="size-4" /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-sm hover:text-indigo-400">
                    <Github className="size-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
