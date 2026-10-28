import React, { useState } from 'react';
import { Language } from '../types';
import { boardingSchedule, studentClubs } from '../data/schoolData';
import { Clock, ShieldCheck, HeartHandshake, Utensils, Moon, Sparkles } from 'lucide-react';

interface BoardingLifeSectionProps {
  currentLang: Language;
}

export const BoardingLifeSection: React.FC<BoardingLifeSectionProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'clubs'>('all');

  return (
    <section id="boarding" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-800" />
              <span>{currentLang === 'en' ? 'Boarding House & Student Life' : 'Kehidupan Asrama & Karakter Siswa'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              {currentLang === 'en'
                ? 'A safe, nurturing second home fostering independent character.'
                : 'Rumah kedua yang nyaman, aman, dan mendidik kemandirian berakhlak mulia.'}
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              {currentLang === 'en'
                ? 'Our comprehensive boarding system pairs round-the-clock mentor guidance with structured night studies, healthy dining, and 20+ co-curricular clubs.'
                : 'Sistem asrama modern dengan pendampingan pembina 24 jam, klinik belajar malam, asupan makanan higienis bergizi, dan puluhan kegiatan ekstrakurikuler.'}
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl shrink-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeCategory === 'all' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {currentLang === 'en' ? 'Daily Schedule' : 'Jadwal Harian'}
            </button>
            <button
              onClick={() => setActiveCategory('clubs')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeCategory === 'clubs' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {currentLang === 'en' ? 'Clubs & Activities' : 'Ekstrakurikuler'}
            </button>
          </div>
        </div>

        {/* Pillar Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <ShieldCheck className="w-6 h-6 text-amber-800" />
            <h4 className="font-semibold text-sm text-stone-900">
              {currentLang === 'en' ? '24/7 Mentorship' : 'Pembina Asrama 24 Jam'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Resident mentors provide emotional support, character counseling, and nightly supervision.'
                : 'Pembina asrama mendampingi perkembangan karakter, ibadah, dan kenyamanan siswa setiap saat.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <Utensils className="w-6 h-6 text-amber-800" />
            <h4 className="font-semibold text-sm text-stone-900">
              {currentLang === 'en' ? 'Nutritious Dining' : 'Katering Sehat 3x Sehari'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Dietitian-approved hot buffet meals three times daily plus healthy evening study snacks.'
                : 'Menu variatif bergizi seimbang dari ahli gizi, disajikan hangat 3 kali sehari plus camilan malam.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <Clock className="w-6 h-6 text-amber-800" />
            <h4 className="font-semibold text-sm text-stone-900">
              {currentLang === 'en' ? 'Night Study Club (Etude)' : 'Belajar Malam Terbimbing'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Subject teachers assist with Cambridge homework, Olympiad coaching, and academic questions.'
                : 'Didampingi guru mata pelajaran untuk konsultasi tugas, PR Cambridge, dan persiapan ujian.'}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
            <HeartHandshake className="w-6 h-6 text-amber-800" />
            <h4 className="font-semibold text-sm text-stone-900">
              {currentLang === 'en' ? 'Character & Adab' : 'Pembiasaan Adab & Mandiri'}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Habituating mutual respect, leadership, punctuality, and spiritual mindfulness.'
                : 'Menumbuhkan kedisiplinan, kepemimpinan, persaudaraan erat, dan ibadah berjamaah.'}
            </p>
          </div>
        </div>

        {/* Schedule View vs Clubs View */}
        {activeCategory === 'all' ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-xl font-medium text-stone-900 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-800" />
              <span>{currentLang === 'en' ? 'A Day in the Life of a Pribadi Boarding Student' : 'Rutinitas Keseharian Siswa Asrama'}</span>
            </h3>

            <div className="space-y-4">
              {boardingSchedule.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-stone-50/70 border border-stone-200/60 hover:bg-white hover:border-amber-700/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100/60 px-2.5 py-1 rounded shrink-0">
                      {item.time}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-stone-900">
                        {item.activity[currentLang]}
                      </h4>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {item.description[currentLang]}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 self-start sm:self-auto shrink-0">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-xl font-medium text-stone-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-800" />
              <span>{currentLang === 'en' ? 'Extracurricular Clubs & Co-Curriculars' : 'Klub Ekstrakurikuler & Minat Bakat'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {studentClubs.map((club, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-amber-50/40 hover:border-amber-300 transition-all flex items-start gap-3"
                >
                  <span className="text-2xl">{club.icon}</span>
                  <div>
                    <span className="text-[10px] font-mono text-amber-900 uppercase font-semibold block">
                      {club.category}
                    </span>
                    <h5 className="text-xs font-semibold text-stone-900 mt-0.5">
                      {club.name[currentLang]}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
