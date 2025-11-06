import { Mail, Send, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's build something</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">Open to freelance and full-time roles. Drop a message and I'll get back soon.</p>
        </div>

        <form className="mt-8 grid md:grid-cols-3 gap-3">
          <input type="text" placeholder="Your name" className="md:col-span-1 rounded-xl px-4 py-3 bg-white/5 border border-white/10 outline-none focus:border-indigo-400" />
          <input type="email" placeholder="Email" className="md:col-span-1 rounded-xl px-4 py-3 bg-white/5 border border-white/10 outline-none focus:border-indigo-400" />
          <input type="text" placeholder="Subject" className="md:col-span-1 rounded-xl px-4 py-3 bg-white/5 border border-white/10 outline-none focus:border-indigo-400" />
          <textarea rows="5" placeholder="Your message" className="md:col-span-3 rounded-xl px-4 py-3 bg-white/5 border border-white/10 outline-none focus:border-indigo-400" />
          <button type="button" className="md:col-span-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white bg-gradient-to-br from-indigo-600 to-purple-600">
            <Send className="size-4" /> Send Message
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm">
          <a href="mailto:you@example.com" className="inline-flex items-center gap-2"><Mail className="size-4" /> you@example.com</a>
          <span className="opacity-40">•</span>
          <a href="#" className="inline-flex items-center gap-2"><Linkedin className="size-4" /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
