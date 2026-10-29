import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Laptop, 
  Award,
  Globe2,
  Calendar,
  Layers
} from 'lucide-react';

interface PrimaryPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: (programId?: string) => void;
}

export const PrimaryPage: React.FC<PrimaryPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Preschool & TK' : 'PAUD & TK', page: 'academics/kindergarten' },
    { label: currentLang === 'en' ? 'Primary (SD)' : 'SD Premiere', page: 'academics/primary', active: true },
    { label: currentLang === 'en' ? 'Junior High (SMP)' : 'SMP Premiere', page: 'academics/junior-high' },
    { label: currentLang === 'en' ? 'Senior High (SMA)' : 'SMA Premiere', page: 'academics/senior-high' },
    { label: currentLang === 'en' ? '1:1 Chromebook' : 'Kelas Digital', page: 'academics/chromebook' },
    { label: currentLang === 'en' ? 'GTKY Assessment' : 'Asesmen Bakat', page: 'academics/gtky' }
  ];

  const pillars = [
    {
      title: { en: 'Cambridge Primary Curriculum', id: 'Kurikulum Cambridge Primary' },
      desc: {
        en: 'Rigorous international benchmarks in English as a Second Language, Mathematics, and Science developing deep foundational competencies.',
        id: 'Standar internasional teruji untuk Bahasa Inggris, Matematika, dan Sains yang membangun kecakapan berpikir kritis dan logis.'
      },
      icon: Globe2
    },
    {
      title: { en: 'Kurikulum Merdeka Integration', id: 'Integrasi Kurikulum Merdeka' },
      desc: {
        en: 'Project Penguatan Profil Pelajar Pancasila (P5), Indonesian cultural heritage, and contextual real-world community learning.',
        id: 'Projek Penguatan Profil Pelajar Pancasila (P5), kecintaan pada tanah air, dan pembelajaran kontekstual berbasis pemecahan masalah nyata.'
      },
      icon: BookOpen
    },
    {
      title: { en: '1:1 Digital Classroom', id: 'Pembelajaran Digital 1:1' },
      desc: {
        en: 'Individual managed Chromebooks used purposefully for research, digital literacy, and collaborative classroom inquiries.',
        id: 'Setiap siswa menggunakan Chromebook terkelola secara bijak untuk riset sains, literasi digital, dan tugas kolaboratif interaktif.'
      },
      icon: Laptop
    },
    {
      title: { en: 'Character & Tahfidz / Moral Focus', id: 'Pembinaan Karakter & Keagamaan' },
      desc: {
        en: 'Cultivating courteous manners (adab), daily Dhuha and Dzuhur prayers in congregation, and optional tahfidz Quran mentorship.',
        id: 'Penanaman adab dan akhlakul karimah, salat berjamaah harian, serta bimbingan tahsin dan tahfidz Al-Quran yang menyenangkan.'
      },
      icon: Award
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Academics' : 'Jenjang & Kurikulum', page: 'academics' },
          { label: currentLang === 'en' ? 'Primary School (SD)' : 'Sekolah Dasar (SD)' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      {/* Hero */}
      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Grades 1 – 6 · Ages 6 – 12 · Cambridge ID248</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'SD Pribadi Premiere: Solid Foundations, Global Competence' 
              : 'SD Pribadi Premiere: Fondasi Karakter Kuat & Berwawasan Global'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed mb-8">
            {currentLang === 'en'
              ? 'Our primary program harmonizes the analytical discipline of Cambridge Primary with the collaborative spirit of Kurikulum Merdeka. We nurture eager readers, confident speakers, and young scientists who love discovering the world.'
              : 'Memadukan keunggulan analitis Cambridge Primary dengan kreativitas Kurikulum Merdeka. Membimbing siswa menjadi pembelajar mandiri yang gemar membaca, berani berbicara dalam bahasa Inggris, dan berkarakter mulia.'}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenAdmissions('primary')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <span>{currentLang === 'en' ? 'Apply for SD PPDB 2026/2027' : 'Daftar SD PPDB 2026/2027'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenTourModal}
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>{currentLang === 'en' ? 'Book Primary Campus Tour' : 'Jadwalkan Tur Kampus SD'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
            {currentLang === 'en' ? 'Bilingual Academic Framework' : 'Kerangka Akademik Dwibahasa'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-3">
            {currentLang === 'en' ? 'Four Pillars of SD Pribadi Premiere' : 'Empat Pilar Keunggulan SD'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                  {pil.title[currentLang]}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pil.desc[currentLang]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Subject Breakdown & Sample Week */}
      <section className="bg-white py-16 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
              {currentLang === 'en' ? 'Holistic Subject Delivery' : 'Distribusi Mata Pelajaran'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              {currentLang === 'en' ? 'Subjects & Key Learning Milestones' : 'Komposisi Pembelajaran'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm mb-3 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-amber-800" />
                <span>Cambridge International Subjects (English Medium)</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Cambridge Primary English (Literature, Writing & Grammar)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Cambridge Primary Mathematics (CPA Model & Logic)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Cambridge Primary Science (Hands-on Lab Experiments)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Cambridge Primary Checkpoint (Grade 6 External Benchmark)</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
              <h4 className="font-bold text-stone-900 text-sm mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-800" />
                <span>National & Character Subjects (Indonesian Medium)</span>
              </h4>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Pendidikan Pancasila & Kewarganegaraan (PKn)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bahasa & Sastra Indonesia</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Pendidikan Agama & Budi Pekerti (Tahfidz, Fiqih, Ibadah Harian)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Seni Budaya, Musik & PJOK (Renang di Kolam Semi-Olimpik)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('academics/junior-high')}
              className="inline-flex items-center gap-2 text-amber-900 hover:text-amber-800 font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              <span>{currentLang === 'en' ? 'Continue to Junior High (SMP) →' : 'Lanjut ke Jenjang SMP Pribadi Premiere →'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Enroll in SD Pribadi Premiere' : 'Daftarkan Buah Hati di SD Pribadi Premiere'}
        </h2>
        <p className="text-xs sm:text-sm text-amber-100 mb-6 max-w-xl mx-auto">
          {currentLang === 'en' ? 'Open for Grades 1 to 6. Early bird discount and placement assessment tests available.' : 'Membuka pendaftaran kelas 1 s.d. 6. Kuota terbatas dengan fasilitas modern di Grand Depok City.'}
        </p>
        <button
          onClick={() => onOpenAdmissions('primary')}
          className="px-6 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
        >
          {currentLang === 'en' ? 'Begin Online Registration' : 'Mulai Pendaftaran Online'}
        </button>
      </section>
    </div>
  );
};
