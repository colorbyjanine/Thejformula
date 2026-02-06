'use client';

import { useState } from 'react';
import Link from 'next/link';

const articles = [
  {
    slug: 'bond-builders-explained',
    title: 'Bond Builders Explained: Olaplex, K18 & More',
    emoji: '🧬',
  },
  {
    slug: 'why-toner-fades',
    title: 'Why Your Toner Fades So Fast',
    emoji: '🎨',
  },
  {
    slug: 'truth-about-box-dye',
    title: 'The Truth About Box Dye',
    emoji: '📦',
  },
  {
    slug: 'medications-and-hair-color',
    title: 'How Medications Affect Hair Color',
    emoji: '💊',
  },
  {
    slug: 'vitamins-for-hair-growth',
    title: 'Top 10 Vitamins for Hair Growth',
    emoji: '💊',
  },
  {
    slug: 'red-light-therapy',
    title: 'Red Light Therapy for Hair Growth',
    emoji: '🔴',
  },
];

export default function SharePage() {
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const copyLink = async (slug: string) => {
    const url = `https://thejformula.com/learn/${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    }
  };

  const copyAll = async () => {
    const allLinks = articles.map(a => `${a.emoji} ${a.title}\n→ thejformula.com/learn/${a.slug}`).join('\n\n');
    try {
      await navigator.clipboard.writeText(allLinks);
      setCopiedSlug('all');
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch {
      alert('Copy failed - try copying individually');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FAF7F2]">
      <div className="container mx-auto max-w-2xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="text-sm text-[#9A9086] hover:text-[#3D3935] mb-4 inline-block">
            ← Back to site
          </Link>
          <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
            Share My Articles
          </h1>
          <p className="text-[#9A9086]">
            Quick links for Instagram stories, captions, or anywhere else ✨
          </p>
        </div>

        {/* Copy All Button */}
        <button
          onClick={copyAll}
          className="w-full mb-8 p-4 rounded-xl bg-[#3D3935] text-white flex items-center justify-center gap-2 hover:bg-[#3D3935]/90 transition"
        >
          {copiedSlug === 'all' ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied All Links!
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy All Links
            </>
          )}
        </button>

        {/* Article List */}
        <div className="space-y-3">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="p-4 rounded-xl bg-white border border-[#E8E2DA] flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-2xl flex-shrink-0">{article.emoji}</span>
                <div className="min-w-0">
                  <h3 className="font-medium text-[#3D3935] truncate">{article.title}</h3>
                  <p className="text-sm text-[#9A9086] truncate">thejformula.com/learn/{article.slug}</p>
                </div>
              </div>
              <button
                onClick={() => copyLink(article.slug)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition ${
                  copiedSlug === article.slug
                    ? 'bg-green-100 text-green-700'
                    : 'bg-[#3D3935]/10 text-[#3D3935] hover:bg-[#3D3935]/20'
                }`}
              >
                {copiedSlug === article.slug ? '✓ Copied!' : 'Copy'}
              </button>
            </div>
          ))}
        </div>

        {/* Instagram Tip */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
          <h3 className="font-medium text-[#3D3935] mb-2">📱 Instagram Tip</h3>
          <p className="text-sm text-[#9A9086]">
            Add article links to your Stories using the link sticker, or paste them in your bio using Linktree. 
            For captions, the links won't be clickable but people can copy them manually!
          </p>
        </div>
      </div>
    </div>
  );
}
