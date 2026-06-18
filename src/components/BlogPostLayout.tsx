import { motion } from 'motion/react';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BlogPostLayoutProps {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  children: React.ReactNode;
}

export function BlogPostLayout({ title, description, date, author, slug, children }: BlogPostLayoutProps) {
  const url = `https://kwanzax.digital/blog/${slug}`;

  return (
    <>
      <Helmet>
        <title>{title} | KwanzaX Blog</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={url} />
      </Helmet>

      <main className="relative w-full pt-32 pb-24 bg-[#0A0A0A] min-h-screen">
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-[#d4af37]/5 blur-[120px] pointer-events-none" />
        
        <article className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="mb-8 font-mono text-xs uppercase tracking-widest text-[#d4af37] flex items-center gap-4">
              <span>{date}</span>
              <span>•</span>
              <span>BY {author}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="prose prose-invert prose-lg max-w-none hover:prose-a:text-[#d4af37] prose-a:transition-colors prose-headings:font-bold prose-headings:tracking-tight text-white/80"
          >
            {children}
          </motion.div>
        </article>
      </main>
    </>
  );
}
