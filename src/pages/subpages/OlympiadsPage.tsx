import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { olympiadAchievements } from '../../data/schoolData';
import { Trophy, Medal, Sparkles, Award, ArrowRight } from 'lucide-react';

interface OlympiadsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const OlympiadsPage: React.FC<OlympiadsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'OSN Medals' : 'Medali OSN', page: 'achievements/olympiads', active: true },
    { label: currentLang === 'en' ? 'Alumni Destinations' : 'Kampus Alumni', page: 'achievements/destinations' },
    { label: currentLang === 'en' ? 'OSN Camp' : 'Klinik OSN', page: 'achievements/camp' },
    { label: currentLang === 'en' ? 'Science Scholarships' : 'Beasiswa Sains', page: 'achievements/scholarships' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Olympiad & Alumni' : 'Prestasi & Alumni', page: 'achievements' },
          { label: currentLang === 'en' ? 'Science Olympiad Medals (OSN)' : 'Medali Olimpiade Sains Nasional' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>140+ National & International Medals</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Science Olympiad (OSN) Honor Roll' 
              : 'Tradisi Emas Olimpiade Sains Nasional & Internasional'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Our students have earned distinction at the highest levels of competitive mathematics, physics, biology, chemistry, and informatics.'
              : 'Daftar torehan medali emas, perak, dan perunggu siswa dalam ajang OSN Kemendikbudristek, IJSO, IPhO, IMO, dan kompetisi bergengsi dunia.'}
          </p>
        </div>
      </section>

      {/* Medals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {olympiadAchievements.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                  item.medal === 'gold' 
                    ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                    : item.medal === 'silver'
                    ? 'bg-stone-200 text-stone-800'
                    : 'bg-orange-100 text-orange-900'
                }`}>
                  🏅 {item.medal} Medal
                </span>
                <span className="font-mono text-xs text-stone-400 font-bold">{item.year}</span>
              </div>

              <h3 className="font-serif font-bold text-stone-900 text-base mb-1">
                {item.competition}
              </h3>
              <p className="text-xs text-amber-900 font-semibold mb-2">
                {item.field} · {item.scope}
              </p>
              <div className="text-xs text-stone-700 font-medium border-t border-stone-100 pt-3 flex items-center justify-between">
                <span>{item.student}</span>
                <span className="text-[11px] text-stone-400 font-mono">Pribadi Delegate</span>
              </div>
            </div>
          ))}
        </div>

        {/* Camp Banner */}
        <div className="mt-12 bg-amber-900 text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif font-bold mb-1">
              {currentLang === 'en' ? 'Want to join our Olympiad Camp?' : 'Ingin bergabung di Klinik Pembinaan OSN?'}
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 max-w-xl">
              {currentLang === 'en'
                ? 'We offer intensive mentoring and full academic scholarships for junior & senior high school science champions.'
                : 'Pribadi Premiere menyediakan beasiswa penuh bagi siswa berprestasi sains dan bimbingan pelatih nasional.'}
            </p>
          </div>
          <button
            onClick={() => onNavigate('achievements/camp')}
            className="px-5 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer shrink-0"
          >
            {currentLang === 'en' ? 'Explore Olympiad Camp →' : 'Pelajari Klinik OSN →'}
          </button>
        </div>
      </section>
    </div>
  );
};
