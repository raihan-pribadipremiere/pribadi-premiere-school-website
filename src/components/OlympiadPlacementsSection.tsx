import React, { useState } from 'react';
import { Language } from '../types';
import { olympiadAchievements, universityDestinations } from '../data/schoolData';
import { Award, Trophy, GraduationCap, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface OlympiadPlacementsSectionProps {
  currentLang: Language;
  onOpenAdmissions: () => void;
}

export const OlympiadPlacementsSection: React.FC<OlympiadPlacementsSectionProps> = ({
  currentLang,
  onOpenAdmissions
}) => {
  const [activeTab, setActiveTab] = useState<'olympiad' | 'university' | 'scholarship'>('olympiad');

  const getMedalBadge = (medal: string) => {
    switch (medal) {
      case 'gold':
        return <span className="bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded text-[11px] font-bold uppercase">Gold Medal</span>;
      case 'silver':
        return <span className="bg-stone-200 text-stone-800 border border-stone-300 px-2 py-0.5 rounded text-[11px] font-bold uppercase">Silver Medal</span>;
      case 'grand':
        return <span className="bg-purple-100 text-purple-900 border border-purple-300 px-2 py-0.5 rounded text-[11px] font-bold uppercase">Grand Award</span>;
      default:
        return <span className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded text-[11px] font-bold uppercase">Bronze</span>;
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>{currentLang === 'en' ? 'Track Record of Excellence' : 'Rekam Jejak Prestasi & Alumni'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
              {currentLang === 'en'
                ? 'From national science arenas to the world\'s leading universities.'
                : 'Dari panggung olimpiade sains nasional hingga universitas terbaik dunia.'}
            </h2>
            <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
              {currentLang === 'en'
                ? 'Pribadi School has established a legacy of competitive distinction in Physics, Informatics, Mathematics, and Biology, paired with 100% acceptance to premier higher education institutions.'
                : 'Pribadi School membina tradisi juara dalam sains dan riset teknologi, serta mengantarkan alumni menembus PTN unggulan dan universitas top 100 dunia.'}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-1.5 p-1 bg-stone-800 rounded-xl">
            <button
              onClick={() => setActiveTab('olympiad')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'olympiad' ? 'bg-amber-800 text-white shadow-sm' : 'text-stone-400 hover:text-white'
              }`}
            >
              {currentLang === 'en' ? 'Olympiad Medals' : 'Medali Olimpiade'}
            </button>
            <button
              onClick={() => setActiveTab('university')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'university' ? 'bg-amber-800 text-white shadow-sm' : 'text-stone-400 hover:text-white'
              }`}
            >
              {currentLang === 'en' ? 'University Destinations' : 'Kampus Impian'}
            </button>
            <button
              onClick={() => setActiveTab('scholarship')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === 'scholarship' ? 'bg-amber-800 text-white shadow-sm' : 'text-stone-400 hover:text-white'
              }`}
            >
              {currentLang === 'en' ? 'Science Scholarships' : 'Beasiswa Sains'}
            </button>
          </div>
        </div>

        {/* Tab 1: Olympiad Medals Grid */}
        {activeTab === 'olympiad' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {olympiadAchievements.map((ach) => (
                <div
                  key={ach.id}
                  className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 hover:border-amber-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-stone-400">{ach.year} · {ach.scope}</span>
                      {getMedalBadge(ach.medal)}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-white leading-snug">
                        {ach.competition}
                      </h4>
                      <p className="text-xs text-amber-300 font-medium mt-1">
                        Category: {ach.field}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-700/60 text-xs text-stone-300 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{ach.student}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner for Science Training Program */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/60 to-stone-800 border border-amber-800/40 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  {currentLang === 'en' ? 'Dedicated Science Olympiad Mentorship (OSN Camp)' : 'Program Pembinaan Intensif Olimpiade Sains (OSN)'}
                </h4>
                <p className="text-xs text-stone-300 max-w-2xl">
                  {currentLang === 'en'
                    ? 'Students undergo weekly coaching by ITB, UI, and international medalist alumni with access to modern university-grade laboratories.'
                    : 'Siswa dibimbing intensif oleh dosen tamu, alumni peraih medali, dan pelatih nasional dengan fasilitas lab eksperimen modern.'}
                </p>
              </div>
              <button
                onClick={onOpenAdmissions}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>{currentLang === 'en' ? 'Apply for Olympiad Track' : 'Daftar Jalur Olimpiade'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: University Placements */}
        {activeTab === 'university' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {universityDestinations.map((uni, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-stone-800/80 border border-stone-700/70 hover:border-amber-400/40 transition-colors text-center space-y-2 flex flex-col items-center justify-center min-h-[110px]"
                >
                  <span className="text-2xl">{uni.icon}</span>
                  <div className="font-semibold text-xs text-white leading-tight">
                    {uni.name}
                  </div>
                  <div className="text-[10px] text-amber-400 font-mono">
                    {uni.country}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-stone-800">
              <div className="p-4 rounded-xl bg-stone-800/40 border border-stone-700/50 space-y-1">
                <span className="text-xs font-mono text-amber-400">01 / Career Bridge</span>
                <h5 className="font-medium text-white text-xs">University Advisory Center</h5>
                <p className="text-[11px] text-stone-400">Personal guidance on essays, SAT, IELTS, and scholarship applications.</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-800/40 border border-stone-700/50 space-y-1">
                <span className="text-xs font-mono text-amber-400">02 / Dual Qualifications</span>
                <h5 className="font-medium text-white text-xs">Cambridge AS & A-Levels</h5>
                <p className="text-[11px] text-stone-400">Accepted by over 1,400 top universities across the UK, US, Australia & Europe.</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-800/40 border border-stone-700/50 space-y-1">
                <span className="text-xs font-mono text-amber-400">03 / SNBP & UTBK-SNBT</span>
                <h5 className="font-medium text-white text-xs">Top Indonesian PTN Track</h5>
                <p className="text-[11px] text-stone-400">Structured preparation for UI Medicine, ITB Engineering, and UGM programs.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Science Scholarships */}
        {activeTab === 'scholarship' && (
          <div className="p-8 rounded-2xl bg-stone-800 border border-stone-700 space-y-6">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl font-normal text-white">
                {currentLang === 'en' ? 'Beasiswa Prestasi & Sains 2026/2027' : 'Program Beasiswa Sains & Riset 2026/2027'}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                {currentLang === 'en'
                  ? 'We award up to 100% full tuition waivers for outstanding students with a proven passion in science, mathematics, computer informatics, robotics, and Quranic memorization.'
                  : 'Pribadi School memberikan beasiswa penuh hingga 100% biaya pendidikan dan asrama bagi siswa berbakat di bidang sains, olimpiade matematika, robotika, dan tahfidz Al-Qur\'an.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-700 space-y-2">
                <div className="text-amber-400 font-bold text-sm">Olympiad Track (OSN)</div>
                <p className="text-stone-300">For medalists or finalists of OSN tingkat Kota, Provinsi, atau Nasional.</p>
                <div className="text-[11px] text-emerald-400 font-mono">Up to 100% Tuition Waiver</div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-700 space-y-2">
                <div className="text-amber-400 font-bold text-sm">Academic Test Track</div>
                <p className="text-stone-300">Top scorers on our standardized school entrance examination.</p>
                <div className="text-[11px] text-emerald-400 font-mono">25% – 75% Tuition Waiver</div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-700 space-y-2">
                <div className="text-amber-400 font-bold text-sm">Tahfidz & Talent Track</div>
                <p className="text-stone-300">Minimum 3 Juz memorization or provincial sports/arts championship honors.</p>
                <div className="text-[11px] text-emerald-400 font-mono">Special Scholarship Benefit</div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors"
              >
                <span>{currentLang === 'en' ? 'Register for Scholarship Examination' : 'Daftar Tes Beasiswa Sekarang'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
