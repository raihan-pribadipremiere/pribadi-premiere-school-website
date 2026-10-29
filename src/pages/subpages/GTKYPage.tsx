import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Compass, UserCheck, HeartHandshake, ArrowRight, Brain, Target, Sparkles } from 'lucide-react';

interface GTKYPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const GTKYPage: React.FC<GTKYPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Preschool & TK' : 'PAUD & TK', page: 'academics/kindergarten' },
    { label: currentLang === 'en' ? 'Primary (SD)' : 'SD Premiere', page: 'academics/primary' },
    { label: currentLang === 'en' ? 'Junior High (SMP)' : 'SMP Premiere', page: 'academics/junior-high' },
    { label: currentLang === 'en' ? 'Senior High (SMA)' : 'SMA Premiere', page: 'academics/senior-high' },
    { label: currentLang === 'en' ? '1:1 Chromebook' : 'Kelas Digital', page: 'academics/chromebook' },
    { label: currentLang === 'en' ? 'GTKY Assessment' : 'Asesmen Bakat', page: 'academics/gtky', active: true }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Academics' : 'Jenjang & Kurikulum', page: 'academics' },
          { label: currentLang === 'en' ? 'GTKY Talent Profiling' : 'Asesmen Bakat GTKY' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Getting to Know You · Personalized Mentorship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'GTKY: Unlocking Every Student’s Unique Genius' 
              : 'Asesmen Bakat GTKY: Membimbing Potensi Unik Setiap Siswa'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed mb-8">
            {currentLang === 'en'
              ? 'At Pribadi Premiere, no student is treated as a statistic. Our proprietary GTKY (Getting to Know You) profiling assesses cognitive processing style, emotional temperament, and natural interests to customize their academic trajectory.'
              : 'Di Pribadi Premiere, setiap anak memiliki cetak biru bakat tersendiri. Melalui asesmen berkala GTKY (Getting to Know You), kami memetakan gaya belajar kognitif, kecenderungan minat, serta mendampingi penjurusan karier dan pilihan universitas sejak dini.'}
          </p>

          <button
            onClick={onOpenTourModal}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer text-sm"
          >
            <span>{currentLang === 'en' ? 'Consult with Counseling Team' : 'Konsultasi dengan Tim Konseling'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
              <Brain className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              1. Diagnostic Cognitive Profiling
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Comprehensive evaluation assessing spatial, verbal, logical-mathematical, and kinesthetic aptitudes conducted by licensed educational psychologists.'
                : 'Pemetaan kecerdasan majemuk dan gaya belajar (visual, auditori, kinestetik) dipandu oleh psikolog pendidikan.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              2. Individual Growth Plan (IGP)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Teachers and homeroom mentors align instructional delivery, homework pacing, and Olympiad/club recommendations to the child’s profile.'
                : 'Penyusunan rencana tumbuh kembang pribadi yang diselaraskan dengan wali kelas, guru mata pelajaran, dan orang tua.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              3. 1-on-1 Continuous Mentorship
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Bi-weekly check-ins to monitor emotional wellbeing, time management, social relationships, and university goal calibration.'
                : 'Sesi bimbingan tatap muka berkala memastikan kesehatan mental, manajemen stres akademik, dan persiapan karier terarah.'}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Experience Individualized Education' : 'Pendidikan yang Memahami Keunikan Anak Anda'}
        </h2>
        <p className="text-xs sm:text-sm text-amber-100 mb-6 max-w-xl mx-auto">
          {currentLang === 'en' ? 'GTKY assessment is included for all enrolled students at Pribadi Premiere School.' : 'Asesmen GTKY terintegrasi untuk seluruh siswa yang terdaftar di Pribadi Premiere.'}
        </p>
        <button
          onClick={onOpenAdmissions}
          className="px-6 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
        >
          {currentLang === 'en' ? 'Enroll Your Child Today' : 'Daftar Sekarang'}
        </button>
      </section>
    </div>
  );
};
