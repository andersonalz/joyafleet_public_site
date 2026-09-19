"use client";

/*
 * Copyright 2026 Joya Fleet
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from '../components/RouterLink';
import { HeroBackground } from '../components/HeroBackground';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart3, 
  Share2, 
  Bookmark, 
  ArrowRight,
  ArrowLeft,
  Check
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

import { BLOG_POSTS } from '../content/blog';
export default function Blog() {
  const params = useParams<{ slug?: string }>();
  const slug = params?.slug;

  const blogPosts = BLOG_POSTS;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const article = slug ? BLOG_POSTS.find(p => p.slug === slug || p.id === slug) : null;

  useSEO({
    title: article 
      ? `${article.title} | Joya Fleet Journal` 
      : "Aviation Insights & Airline Management Blog | Joya Fleet",
    description: article 
      ? article.excerpt 
      : "Explore in-depth articles on airline digital transformation, OCC flight dispatch, automated FTL compliance, and fleet maintenance synchronization with Joya Fleet.",
    canonicalPath: article ? `/blog/${article.slug}` : "/blog",
    ogTitle: article ? article.title : "Airline Operations & Technology Blog | Joya Fleet",
    ogDescription: article ? article.excerpt : "Read technical analysis and operational strategies on modern commercial airline management and Joya Fleet software integration."
  });

  // Scroll to top when changing route or article
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const categories = ['All', 'Airline Management', 'Crew & Compliance', 'Fleet Maintenance'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // --------------------------------------------------------------------------
  // SINGLE ARTICLE FULL VIEW
  // --------------------------------------------------------------------------
  if (slug) {
    if (!article) {
      return (
        <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-5 pt-32 pb-24 text-center pointer-events-auto relative isolate">
          <div className="p-4 rounded-full bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20 mb-4 shadow-sm">
            <BookOpen size={32} />
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#10233F] mb-3">
            Article Not Found
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-md">
            The requested journal article could not be located or may have been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#002D70] hover:bg-[#071B33] text-white font-bold text-sm transition-all shadow-md shadow-[#002D70]/20"
          >
            <ArrowLeft size={16} />
            <span>Return to All Articles</span>
          </Link>
        </div>
      );
    }

    const otherArticles = BLOG_POSTS.filter(p => p.id !== article.id);

    return (
      <div className="w-full pointer-events-auto bg-transparent min-h-screen pt-28 sm:pt-36 pb-24 relative isolate">
        <HeroBackground />
        <div className="px-5 sm:px-8 max-w-5xl mx-auto w-full">
          
          {/* BACK BUTTON NAVIGATION */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#1267E5]/20 text-[#002D70] hover:text-[#071B33] hover:bg-white text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5]"
            >
              <ArrowLeft size={16} />
              <span>Back to Journal Articles</span>
            </Link>
          </div>

          {/* MAIN ARTICLE CARD */}
          <article className="bg-white/90 backdrop-blur-2xl rounded-[32px] border border-[#1267E5]/20 shadow-2xl overflow-hidden mb-16">
            
            {/* HERO BANNER (Aviation Navy Gradient) */}
            <div className="bg-gradient-to-br from-[#071B33] via-[#002D70] to-[#0A2540] text-white p-6 sm:p-12 lg:p-16 relative overflow-hidden border-b border-[#1267E5]/30">
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#1267E5]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#EE1C25]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-200 mb-6">
                  <span className="bg-[#EE1C25] text-white font-extrabold px-3 py-1 rounded-full uppercase tracking-wider text-[11px] shadow-sm shadow-[#EE1C25]/30">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-100/90 font-mono text-xs">
                    <Clock size={14} className="text-blue-300" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-100/90 font-mono text-xs">
                    <Calendar size={14} className="text-blue-300" />
                    {article.date}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                  {article.title}
                </h1>

                {/* AUTHOR BAR */}
                <div className="mt-8 pt-8 border-t border-white/15 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#1267E5] shadow-md"
                    />
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        {article.author.name}
                        <ShieldCheck size={16} className="text-[#8CBD00]" />
                      </div>
                      <div className="text-xs text-blue-200/80 font-medium">
                        {article.author.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleShare}
                      className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10"
                      title="Copy Article Link"
                    >
                      {copied ? <Check size={16} className="text-[#8CBD00]" /> : <Share2 size={16} />}
                    </button>

                    <button
                      onClick={() => setBookmarked(!bookmarked)}
                      className={`p-2.5 rounded-xl transition-all border ${
                        bookmarked 
                          ? 'bg-[#EE1C25] text-white border-[#EE1C25] shadow-md shadow-[#EE1C25]/25' 
                          : 'bg-white/10 text-white hover:bg-white/20 border-white/10'
                      }`}
                      title="Bookmark Article"
                    >
                      <Bookmark size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ARTICLE CONTENT */}
            <div className="p-6 sm:p-12 lg:p-16">
              
              {/* EXECUTIVE SUMMARY */}
              {article.content.executiveSummary && (
                <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-blue-50/90 border border-[#1267E5]/25 shadow-xs">
                  <div className="flex items-center gap-2 mb-3 text-[#002D70] font-extrabold text-xs uppercase tracking-wider">
                    <Sparkles size={16} className="text-[#1267E5]" />
                    <span>Executive Summary for Airline Leadership</span>
                  </div>
                  <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-sans font-medium">
                    {article.content.executiveSummary}
                  </p>
                </div>
              )}

              {/* INTRO */}
              <div className="text-lg sm:text-xl text-gray-800 leading-relaxed font-serif mb-12 pl-4 border-l-4 border-[#002D70]">
                {article.content.intro}
              </div>

              {/* SECTIONS */}
              <div className="space-y-12">
                {article.content.sections.map((section, idx) => (
                  <div key={idx} className="bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
                    
                    <h2 className="text-xl sm:text-3xl font-extrabold text-[#10233F] tracking-tight mb-6">
                      {section.heading}
                    </h2>

                    <div className="space-y-4 text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                      {section.body.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {section.quote && (
                      <blockquote className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#071B33] to-[#002D70] text-white border-l-4 border-[#EE1C25] font-serif italic text-base sm:text-lg shadow-md">
                        "{section.quote}"
                      </blockquote>
                    )}

                    {section.bulletPoints && (
                      <div className="mt-6 pt-6 border-t border-slate-200">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#002D70] mb-3 block">
                          Key Capabilities in Joya Fleet:
                        </span>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {section.bulletPoints.map((bp, bpIdx) => (
                            <li key={bpIdx} className="flex items-start gap-2.5 text-sm font-semibold text-gray-900 bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                              <CheckCircle2 size={16} className="text-[#1267E5] shrink-0 mt-0.5" />
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* TAKEAWAYS */}
              <div className="mt-12 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#071B33] to-[#002D70] text-white border border-[#1267E5]/30 shadow-xl">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EE1C25] text-white flex items-center justify-center shadow-xs">
                    <BarChart3 size={18} />
                  </div>
                  <span>Key Executive Takeaways</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {article.content.takeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                      <div className="w-6 h-6 rounded-full bg-[#EE1C25] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        {tIdx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-100 font-medium leading-relaxed">
                        {takeaway}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DEMO CTA */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-bold text-[#10233F] mb-1">
                    Ready to modernize your airline operations?
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Schedule a live interactive workflow demonstration with our aviation engineering team.
                  </p>
                </div>
                <Link
                  to="/contact?intent=demo"
                  className="px-8 py-4 rounded-xl bg-[#EE1C25] hover:bg-[#D4151D] text-white font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-[#EE1C25]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EE1C25]"
                >
                  Request a Demo
                </Link>
              </div>

            </div>
          </article>

          {/* OTHER ARTICLES SECTION */}
          {otherArticles.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-extrabold text-[#10233F] tracking-tight mb-8">
                Explore Other Journal Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherArticles.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-[#1267E5]/20 hover:border-[#1267E5] hover:bg-white transition-all shadow-md hover:shadow-xl flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                          <Clock size={12} className="text-[#1267E5]" />
                          {post.readTime}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#10233F] group-hover:text-[#1267E5] transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#002D70]">
                      <span className="font-mono text-gray-500 text-[11px]">{post.date}</span>
                      <span className="flex items-center gap-1 text-[#EE1C25] group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // BLOG OVERVIEW LIST VIEW (All Articles Grid)
  // --------------------------------------------------------------------------
  const featuredArticle = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];

  return (
    <div className="w-full pointer-events-auto bg-transparent min-h-screen pt-32 sm:pt-40 pb-24 relative isolate">
      <HeroBackground />
      <div className="px-5 sm:px-8 max-w-7xl mx-auto w-full">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-12 sm:mb-16 bg-white/88 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#002D70] text-white text-xs font-bold tracking-wider uppercase mb-6 shadow-sm border border-[#1267E5]/30">
            <BookOpen size={14} className="text-[#8CBD00]" />
            <span>Aviation Technology & Operations Journal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#10233F] tracking-tight mb-6 leading-tight">
            Insights for Modern Airline Leaders
          </h1>
          <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
            In-depth technical analysis, operational strategies, and regulatory guides on flight scheduling, OCC dispatch, automated FTL compliance, and fleet management.
          </p>
        </div>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className="bg-white/90 backdrop-blur-xl p-4 sm:p-6 rounded-[28px] border border-[#1267E5]/20 shadow-lg mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1267E5] ${
                  selectedCategory === cat
                    ? 'bg-[#002D70] text-white shadow-md shadow-[#002D70]/25'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-[#002D70] border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1267E5]" />
            <input
              type="text"
              placeholder="Search articles or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#1267E5]/25 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1267E5] transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* FEATURED HERO ARTICLE CARD */}
        {selectedCategory === 'All' && searchQuery === '' && featuredArticle && (
          <div className="mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-[#002D70] mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-[#EE1C25]" />
              <span>Featured Journal Deep-Dive</span>
            </div>

            <Link
              to={`/blog/${featuredArticle.slug}`}
              className="group block bg-gradient-to-br from-[#071B33] via-[#002D70] to-[#0A2540] text-white rounded-[32px] p-6 sm:p-12 border border-[#1267E5]/30 shadow-2xl hover:shadow-[#002D70]/40 transition-all relative overflow-hidden"
            >
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#1267E5]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#EE1C25]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-200 mb-6">
                  <span className="bg-[#EE1C25] text-white font-extrabold px-3 py-1 rounded-full uppercase tracking-wider text-[10px] shadow-sm shadow-[#EE1C25]/30">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-blue-100/90">
                    <Clock size={14} className="text-blue-300" />
                    {featuredArticle.readTime}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-blue-100/90">
                    <Calendar size={14} className="text-blue-300" />
                    {featuredArticle.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm sm:text-lg text-blue-50/90 leading-relaxed mb-8 max-w-3xl">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#1267E5]"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
                        {featuredArticle.author.name}
                        <ShieldCheck size={14} className="text-[#8CBD00]" />
                      </div>
                      <div className="text-[11px] text-blue-200/80">
                        {featuredArticle.author.role}
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#EE1C25] hover:bg-[#D4151D] text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-[#EE1C25]/25">
                    <span>Read Full Article</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* ARTICLES CARD GRID */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10233F] tracking-tight">
              {selectedCategory === 'All' ? 'All Articles & Technical Papers' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-xs font-mono font-bold text-[#002D70] bg-[#1267E5]/10 border border-[#1267E5]/20 px-3 py-1 rounded-full">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-12 text-center border border-[#1267E5]/20 shadow-md">
              <Search size={32} className="mx-auto text-[#1267E5] mb-3" />
              <h3 className="text-lg font-bold text-[#10233F] mb-1">No matching articles found</h3>
              <p className="text-xs text-gray-500 mb-4">Try clearing your search query or switching categories.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="px-6 py-2.5 rounded-xl bg-[#002D70] hover:bg-[#071B33] text-white text-xs font-bold transition-all shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#1267E5]/20 hover:border-[#1267E5] hover:bg-white transition-all shadow-lg hover:shadow-2xl flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002D70] via-[#1267E5] to-[#EE1C25] opacity-80 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1267E5]/10 text-[#1267E5] border border-[#1267E5]/20">
                        {post.category}
                      </span>
                      <span className="text-xs font-mono font-medium text-gray-500 flex items-center gap-1">
                        <Clock size={12} className="text-[#1267E5]" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Article Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#10233F] group-hover:text-[#1267E5] transition-colors tracking-tight mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt / Summary */}
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#002D70] border border-[#1267E5]/15"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Card Footer: Date, Author & Read Button */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-[#1267E5]/30"
                        />
                        <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-[#10233F] leading-none">
                            {post.author.name}
                          </span>
                          <span className="text-[10px] text-gray-400 font-mono mt-0.5 flex items-center gap-1">
                            <Calendar size={10} />
                            {post.date}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#EE1C25] group-hover:text-[#D4151D] transition-colors">
                        <span>Read</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* NEWSLETTER SUBSCRIPTION (Corporate Aviation Navy & Red Theme) */}
        <div className="bg-gradient-to-br from-[#071B33] via-[#002D70] to-[#0A2540] text-white rounded-[36px] p-8 sm:p-14 border border-[#1267E5]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#1267E5]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#EE1C25]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EE1C25] block mb-3 font-mono">
              Stay Informed
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Subscribe to Joya Aviation Technology Digest
            </h3>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Receive quarterly technical whitepapers, regulatory updates (CAO, EASA, FAA), and operational case studies directly in your inbox.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Joya Aviation Digest!'); }} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 relative z-10">
            <input
              type="email"
              required
              placeholder="Enter your corporate email"
              className="px-5 py-3.5 bg-[#071B33]/80 border border-[#1267E5]/30 rounded-xl text-sm text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-[#1267E5] w-full sm:w-80 shadow-inner"
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-[#EE1C25] hover:bg-[#D4151D] text-white font-bold text-sm transition-all whitespace-nowrap shadow-lg shadow-[#EE1C25]/25 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
