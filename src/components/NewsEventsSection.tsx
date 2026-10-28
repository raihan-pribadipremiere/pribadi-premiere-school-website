import React, { useState } from 'react';
import { Language, NewsPost } from '../types';
import { academicEvents } from '../data/schoolData';
import { Calendar, ArrowRight, X, User } from 'lucide-react';

interface NewsEventsSectionProps {
  currentLang: Language;
  newsPosts: NewsPost[];
}

export const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({
  currentLang,
  newsPosts
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [readingPost, setReadingPost] = useState<NewsPost | null>(null);

  const categories = [
    { id: 'all', label: { en: 'All Bulletins', id: 'Semua Berita' } },
    { id: 'Achievements', label: { en: 'Achievements & Olympiads', id: 'Prestasi & Olimpiade' } },
    { id: 'Admissions', label: { en: 'Admissions & PPDB', id: 'PPDB 2026/2027' } },
    { id: 'Academics', label: { en: 'Cambridge & Academics', id: 'Kurikulum & Riset' } }
  ];

  const filteredPosts = newsPosts.filter(post => {
    if (activeCategory === 'all') return true;
    return post.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section id="news" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
              {currentLang === 'en' ? 'School Chronicle & Calendar' : 'Kabar Sekolah & Agenda Akademik'}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              {currentLang === 'en' ? 'Stay connected with campus life and milestones.' : 'Tetap terhubung dengan dinamika prestasi dan agenda sekolah.'}
            </h2>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-xl max-w-2xl mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeCategory === cat.id
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat.label[currentLang]}
            </button>
          ))}
        </div>

        {/* 2-Column Grid: Featured Articles & Academic Events */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: News Articles Grid */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredPosts.map(post => (
                <article
                  key={post.id}
                  onClick={() => setReadingPost(post)}
                  className="group bg-stone-50 hover:bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {post.image ? (
                      <div className="aspect-[16/10] w-full overflow-hidden bg-stone-200">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] w-full bg-amber-900/10 flex items-center justify-center p-6 border-b border-stone-200">
                        <span className="font-serif text-lg text-amber-950 font-medium italic text-center">
                          "{post.title}"
                        </span>
                      </div>
                    )}

                    <div className="p-5 space-y-2.5">
                      {/* Zero-pill metadata with dot separator */}
                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <span className="font-semibold text-amber-900">{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="font-serif text-lg font-medium text-stone-900 group-hover:text-amber-900 transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-1">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-900 group-hover:gap-1.5 transition-all">
                      <span>{currentLang === 'en' ? 'Read full article' : 'Baca selengkapnya'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="p-8 text-center text-xs text-stone-500 bg-stone-50 rounded-xl border border-stone-200">
                No articles found in this category.
              </div>
            )}
          </div>

          {/* Right Column: Upcoming Events & Academic Calendar */}
          <div className="lg:col-span-4 bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-800" />
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                  {currentLang === 'en' ? 'Upcoming Dates' : 'Agenda Mendatang'}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-stone-500">2026 / 2027</span>
            </div>

            <div className="space-y-4">
              {academicEvents.map(evt => (
                <div key={evt.id} className="p-4 bg-white rounded-xl border border-stone-200/80 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded">
                      {evt.date}
                    </span>
                    <span className="text-stone-500 font-mono">{evt.time}</span>
                  </div>
                  <h4 className="font-bold text-xs text-stone-900 leading-snug">
                    {evt.title[currentLang]}
                  </h4>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    {evt.description[currentLang]}
                  </p>
                  <div className="text-[10px] text-stone-400 font-mono pt-1">
                    📍 {evt.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Article Reader Modal */}
      {readingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span className="font-semibold text-amber-900">{readingPost.category}</span>
                <span>·</span>
                <span>{readingPost.date}</span>
                <span>·</span>
                <span>{readingPost.readTime}</span>
              </div>
              <button
                onClick={() => setReadingPost(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 leading-tight">
                {readingPost.title}
              </h2>

              <div className="flex items-center gap-2 text-xs text-stone-600 pb-4 border-b border-stone-100">
                <User className="w-3.5 h-3.5 text-stone-400" />
                <span>By {readingPost.author}</span>
              </div>

              {readingPost.image && (
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-stone-100 my-4">
                  <img
                    src={readingPost.image}
                    alt={readingPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              {/* Prose body */}
              <div className="prose prose-stone text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 pt-2">
                {readingPost.content.includes('<p>') ? (
                  <div dangerouslySetInnerHTML={{ __html: readingPost.content }} />
                ) : (
                  readingPost.content.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))
                )}
              </div>

              <div className="pt-6 border-t border-stone-100 flex justify-end">
                <button
                  onClick={() => setReadingPost(null)}
                  className="px-5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  {currentLang === 'en' ? 'Close Article' : 'Tutup Artikel'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
