import Link from "next/link";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { marked } from "marked";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Article Not Found — anchor.md",
    };
  }

  return {
    title: `${post.title} — anchor.md Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      url: `https://anchor-md.web.app/blog/${slug}`,
      images: [
        {
          url: "https://anchor-md.web.app/og-image.png",
          width: 1200,
          height: 1200,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: ["https://anchor-md.web.app/og-image.png"],
    },
  };
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center bg-grid-pattern">
        <h1 className="text-2xl font-mono text-red-400">Post Not Found</h1>
        <Link href="/blog" className="mt-4 text-indigo-400 hover:underline">
          Return to Blog
        </Link>
      </div>
    );
  }

  // Parse markdown content to HTML string (returns string | Promise<string>)
  const htmlContent = marked.parse(post.content);
  // Ensure it is resolved as string (marked.parse is synchronous if no async extensions are used, but we cast/coerce or await if needed)
  const resolvedHtmlContent = typeof htmlContent === "string" ? htmlContent : await htmlContent;

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden bg-grid-pattern">
      {/* BlogPosting Schema markup for SEO, AEO, and GEO search compatibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.summary,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": "Dhairya Darji"
            },
            "publisher": {
              "@type": "Organization",
              "name": "anchor.md"
            }
          })
        }}
      />
      
      {/* Header / Navbar */}
      <header className="p-4 sm:p-6 max-w-5xl mx-auto">
        <nav className="flex items-center">
          <Link 
            href="/blog"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2 flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Articles
          </Link>
        </nav>
      </header>

      {/* Article Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <article>
          {/* Header section */}
          <div className="border-b border-white/10 pb-8 mb-10">
            <div className="flex items-center gap-4 text-xs font-mono text-indigo-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {post.title}
            </h1>
            
            <p className="mt-4 text-white/50 text-base sm:text-lg italic leading-relaxed">
              &ldquo;{post.summary}&rdquo;
            </p>
          </div>

          {/* Render content dynamically via marked parsed string with custom prose class */}
          <div 
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: resolvedHtmlContent }}
          />
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4 bg-slate-950 mt-24">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
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
