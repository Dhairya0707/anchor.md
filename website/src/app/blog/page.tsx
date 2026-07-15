import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The anchor.md Blog — Insights & Guides for AI Context Management",
  description: "Practical workflows, deep dives, and ideas on managing local AI context for developers.",
  openGraph: {
    title: "The anchor.md Blog — Insights & Guides for AI Context Management",
    description: "Practical workflows, deep dives, and ideas on managing local AI context for developers.",
    url: "https://anchor-md.web.app/blog",
    images: [
      {
        url: "https://anchor-md.web.app/og-image.png",
        width: 1200,
        height: 1200,
        alt: "The anchor.md Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The anchor.md Blog — Insights & Guides for AI Context Management",
    description: "Practical workflows, deep dives, and ideas on managing local AI context for developers.",
    images: ["https://anchor-md.web.app/og-image.png"],
  },
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden bg-grid-pattern">
      {/* Navbar */}
      <header className="p-4 sm:p-6 max-w-7xl mx-auto">
        <nav className="flex items-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl pl-3 sm:pl-4 pr-3 py-2 flex items-center justify-between w-full sm:w-auto gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg leading-none">⚓</span>
              <span className="font-bold text-white text-sm tracking-tight">
                anchor.md
              </span>
            </Link>
            <div className="h-4 w-px bg-white/20" />
            <Link 
              href="/"
              className="text-white/70 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Header */}
      <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest font-semibold px-3 py-1 bg-indigo-500/10 rounded-full">
            Insights & Guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 tracking-tight">
            The anchor.md Blog
          </h1>
          <p className="mt-4 text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Practical workflows, deep dives, and ideas on managing local AI context for developers.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-3xl rounded-full" />
                
                <div className="flex items-center gap-4 text-xs font-mono text-indigo-400 mb-3">
                  <span className="bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/10">
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-white/40">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3">
                  {post.title}
                </h2>
                
                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                  {post.summary}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 font-mono group-hover:text-indigo-300 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4 bg-slate-950 mt-24">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚓</span>
            <span className="font-bold text-white text-sm">anchor.md</span>
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} anchor.md. MIT License.
          </p>
        </div>
      </footer>
    </div>
  );
}
