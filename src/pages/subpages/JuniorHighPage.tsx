import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Sparkles, BookOpen, CheckCircle2, ArrowRight, Calendar, Microchip, Trophy } from 'lucide-react';

interface JuniorHighPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: (programId?: string) => void;
}

export const JuniorHighPage: React.FC<JuniorHighPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Preschool & TK' : 'PAUD & TK', page: 'academics/kindergarten' },
    { label: currentLang === 'en' ? 'Primary (SD)' : 'SD Premiere', page: 'academics/primary' },
    { label: currentLang === 'en' ? 'Junior High (SMP)' : 'SMP Premiere', page: 'academics/junior-high', active: true },
    { label: currentLang === 'en' ? 'Senior High (SMA)' : 'SMA Premiere', page: 'academics/senior-high' },
    { label: currentLang === 'en' ? '1:1 Chromebook' : 'Kelas Digital', page: 'academics/chromebook' },
    { label: currentLang === 'en' ? 'GTKY Assessment' : 'Asesmen Bakat', page: 'academics/gtky' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Academics' : 'Jenjang & Kurikulum', page: 'academics' },
          { label: currentLang === 'en' ? 'Junior High School (SMP)' : 'Sekolah Menengah Pertama (SMP)' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/assets/aistudio/logo_Pribadi_Premiere_4x4_cm_white-transparent_833fb355.png" 
              alt="Pribadi Premiere Crest" 
              className="h-9 w-auto object-contain"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Grades 7 – 9 · Ages 12 – 15 · Cambridge Lower Secondary</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'SMP Pribadi Premiere: Analytical Rigor & Early Research' 
              : 'SMP Pribadi Premiere: Riset Dini, Karakter Tangguh & Bahasa Global'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed mb-8">
            {currentLang === 'en'
              ? 'Navigating the transformative adolescent years with purpose. We challenge junior high students with Cambridge Lower Secondary Checkpoints, early scientific research methodology, and optional on-campus boarding life.'
              : 'Masa transisi remaja dibimbing secara komprehensif. Menyiapkan siswa menghadapi ujian Cambridge Checkpoint, eksplorasi riset sains, kompetisi olimpiade (OSN), serta opsi asrama berkarakter 24 jam.'}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenAdmissions('junior-high')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <span>{currentLang === 'en' ? 'Apply for SMP PPDB 2026/2027' : 'Daftar SMP PPDB 2026/2027'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenTourModal}
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>{currentLang === 'en' ? 'Book Campus Tour' : 'Jadwalkan Tur Kampus'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Cambridge Lower Secondary
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Standardized international benchmark tests in English, Math, and Science assessing student progression against global cohorts.'
                : 'Ujian terstandarisasi internasional dari Cambridge Assessment International Education untuk mengukur kompetensi global.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4">
              <Microchip className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              STEM & Coding Integration
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Python programming, robotics competitions, and physics lab investigations fostering logical problem-solving abilities.'
                : 'Bahasa pemrograman Python, klub robotika, dan praktikum sains di laboratorium fisika-biologi berstandar modern.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Junior Olympiad Squad (OSN)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Dedicated coaching clinics for OSN-K, OSN-P, and OSN Nasional in Mathematics, Natural Sciences (IPA), and Social Sciences (IPS).'
                : 'Klinik pembinaan intensif olimpiade sains nasional (OSN Matematika, IPA, dan IPS) didampingi pelatih medalis.'}
            </p>
          </div>
        </div>
      </section>

      {/* Boarding Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-amber-900/10 border border-amber-300 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase font-bold text-amber-900 tracking-wider">
              {currentLang === 'en' ? '24-Hour Student Residence Available' : 'Tersedia Fasilitas Asrama 24 Jam'}
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
              {currentLang === 'en' ? 'Boarding or Day School Options' : 'Pilihan Boarding School atau Full Day'}
            </h3>
            <p className="text-xs text-stone-600 mt-1 max-w-xl">
              {currentLang === 'en'
                ? 'Junior high students can enroll as day students (07:30 - 15:30) or reside on-campus with night mentoring and tahfidz supervision.'
                : 'Siswa SMP dapat memilih program harian (Day School) maupun asrama ber-AC dengan bimbingan belajar malam terstruktur.'}
            </p>
          </div>
          <button
            onClick={() => onNavigate('campus-life/boarding')}
            className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs whitespace-nowrap cursor-pointer shrink-0"
          >
            {currentLang === 'en' ? 'Explore Boarding Life' : 'Pelajari Asrama Siswa'}
          </button>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Ready for SMP Pribadi Premiere?' : 'Daftar di SMP Pribadi Premiere'}
        </h2>
        <p className="text-xs sm:text-sm text-amber-100 mb-6 max-w-xl mx-auto">
          {currentLang === 'en' ? 'Early bird 15% tuition waiver available for early registrants.' : 'Dapatkan potongan biaya pendaftaran dan beasiswa prestasi rapor.'}
        </p>
        <button
          onClick={() => onOpenAdmissions('junior-high')}
          className="px-6 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
        >
          {currentLang === 'en' ? 'Register Online Now' : 'Daftar Online Sekarang'}
        </button>
      </section>
    </div>
  );
};
