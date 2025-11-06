import { useEffect, useState } from 'react';
import { Github, Moon, Sun, Rocket } from 'lucide-react';

function useTheme() {
  const [theme, setTheme] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%]">
      <nav className="backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-2xl shadow-xl px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="size-8 md:size-9 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
            <Rocket className="size-4 md:size-5" />
          </div>
          <span className="font-semibold tracking-tight text-sm md:text-base">Dev Portfolio</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
          <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
          <span className="ml-2 text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-400/20 animate-pulse">Available for hire</span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            className="hidden md:inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1.5 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
            href="https://github.com/octocat" target="_blank" rel="noreferrer"
          >
            <Github className="size-4" /> GitHub
          </a>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative size-9 grid place-items-center rounded-xl border border-white/20 hover:border-white/40 transition-colors"
          >
            <div className="absolute inset-0 grid place-items-center [transform-style:preserve-3d] transition-transform duration-500" style={{ transform: theme === 'dark' ? 'rotateY(0deg)' : 'rotateY(180deg)' }}>
              <Moon className="size-4 text-yellow-300 [backface-visibility:hidden]" />
              <Sun className="size-5 text-amber-400 absolute [transform:rotateY(180deg)]" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
