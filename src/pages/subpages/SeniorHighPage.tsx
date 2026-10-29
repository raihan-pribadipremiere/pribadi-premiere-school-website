import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Sparkles, GraduationCap, CheckCircle2, ArrowRight, Calendar, Globe2, Award, Building2 } from 'lucide-react';

interface SeniorHighPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: (programId?: string) => void;
}

export const SeniorHighPage: React.FC<SeniorHighPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Preschool & TK' : 'PAUD & TK', page: 'academics/kindergarten' },
    { label: currentLang === 'en' ? 'Primary (SD)' : 'SD Premiere', page: 'academics/primary' },
    { label: currentLang === 'en' ? 'Junior High (SMP)' : 'SMP Premiere', page: 'academics/junior-high' },
    { label: currentLang === 'en' ? 'Senior High (SMA)' : 'SMA Premiere', page: 'academics/senior-high', active: true },
    { label: currentLang === 'en' ? '1:1 Chromebook' : 'Kelas Digital', page: 'academics/chromebook' },
    { label: currentLang === 'en' ? 'GTKY Assessment' : 'Asesmen Bakat', page: 'academics/gtky' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Academics' : 'Jenjang & Kurikulum', page: 'academics' },
          { label: currentLang === 'en' ? 'Senior High School (SMA)' : 'Sekolah Menengah Atas (SMA)' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Grades 10 – 12 · Cambridge IGCSE & A-Levels · PTN Pathway</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'SMA Pribadi Premiere: The Gateway to Top Universities' 
              : 'SMA Pribadi Premiere: Gerbang Menuju Perguruan Tinggi Terbaik Dunia & PTN'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed mb-8">
            {currentLang === 'en'
              ? 'Engineered for high academic ambition. 100% of our high school alumni secure placement in elite universities including Universitas Indonesia (UI), ITB, UGM, NUS Singapore, and top global institutions via Cambridge A-Levels and intensive SNBT coaching.'
              : 'Dirancang untuk keunggulan akademik tertinggi. 100% alumni SMA berhasil diterima di perguruan tinggi terkemuka seperti UI, ITB, UGM, NUS Singapura, NTU, hingga Oxford melalui kurikulum ganda Cambridge A-Levels dan klinik intensif SNBT.'}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenAdmissions('senior-high')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <span>{currentLang === 'en' ? 'Apply for SMA PPDB 2026/2027' : 'Daftar SMA PPDB 2026/2027'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('achievements/destinations')}
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>{currentLang === 'en' ? 'View Alumni University Placements' : 'Lihat Data Sebaran Alumni SMA'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-5">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-xl mb-3">
              {currentLang === 'en' ? 'Cambridge International A-Levels Pathway' : 'Jalur Cambridge International A-Levels'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
              {currentLang === 'en'
                ? 'Recognized by over 1,400 universities worldwide. Students choose advanced subject specializations in Mathematics, Physics, Chemistry, Biology, and Computer Science.'
                : 'Diakui oleh ribuan universitas ternama dunia. Siswa mendalami subjek spesialisasi di bidang Sains dan Matematika tingkat lanjut.'}
            </p>
            <ul className="space-y-2.5 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cambridge IGCSE in Grade 10 & Advanced Subsidiary/A2 in Grades 11-12</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>IELTS / TOEFL preparation and personal statement writing clinics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>One-on-one university guidance counselor consultations</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-5">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-xl mb-3">
              {currentLang === 'en' ? 'PTN Unggulan Pathway (UI, ITB, UGM)' : 'Jalur Sukses PTN Favorit (SNBP & UTBK SNBT)'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
              {currentLang === 'en'
                ? 'Structured drill programs, diagnostic simulations, and rigorous Kurikulum Merdeka portfolio curation for competitive Indonesian public universities.'
                : 'Program drilling soal intensif, try out berkala, pendampingan portofolio nilai rapor, serta strategi pemilihan jurusan kedokteran & teknik di PTN favorit.'}
            </p>
            <ul className="space-y-2.5 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>SNBP high-achiever quota prioritization based on accredited A status</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Intensive UTBK TPS & Literasi mastering sessions with senior master teachers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct alumni network mentoring from UI, ITB, and overseas campuses</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Join SMA Pribadi Premiere' : 'Raih Masa Depan Gemilang di SMA Pribadi Premiere'}
        </h2>
        <p className="text-xs sm:text-sm text-amber-100 mb-6 max-w-xl mx-auto">
          {currentLang === 'en' ? 'Scholarships up to 100% available for OSN medalists and high-scoring entrance exam takers.' : 'Tersedia beasiswa s.d. 100% untuk peraih medali OSN dan siswa berprestasi akademik.'}
        </p>
        <button
          onClick={() => onOpenAdmissions('senior-high')}
          className="px-6 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
        >
          {currentLang === 'en' ? 'Apply for Senior High' : 'Daftar SMA Online'}
        </button>
      </section>
    </div>
  );
};
