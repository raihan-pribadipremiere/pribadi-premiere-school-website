import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Laptop, ShieldCheck, CheckCircle2, ArrowRight, Cloud, Lock, Sparkles, BookOpen } from 'lucide-react';

interface ChromebookPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const ChromebookPage: React.FC<ChromebookPageProps> = ({
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
    { label: currentLang === 'en' ? '1:1 Chromebook' : 'Kelas Digital', page: 'academics/chromebook', active: true },
    { label: currentLang === 'en' ? 'GTKY Assessment' : 'Asesmen Bakat', page: 'academics/gtky' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Academics' : 'Jenjang & Kurikulum', page: 'academics' },
          { label: currentLang === 'en' ? '1:1 Chromebook Classroom' : 'Kelas Digital 1:1 Chromebook' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Google for Education · Safe Digital Ecosystem</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? '1:1 Managed Chromebook Classroom' 
              : 'Kelas Digital 1:1 Chromebook Pribadi Premiere'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed mb-8">
            {currentLang === 'en'
              ? 'Equipping every student from primary through senior high with their own institutional-managed Chromebook. We integrate cloud collaboration, digital textbooks, and AI-assisted research with strict educational safety filtering.'
              : 'Setiap siswa dari SD hingga SMA dilengkapi dengan perangkat Chromebook yang terkelola secara institusional. Mengintegrasikan kolaborasi cloud Google Workspace, e-book Cambridge, dan etika digital dengan pengawasan ketat.'}
          </p>

          <button
            onClick={onOpenTourModal}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer text-sm"
          >
            <span>{currentLang === 'en' ? 'Experience Digital Classroom Tour' : 'Lihat Ruang Kelas Digital'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              {currentLang === 'en' ? 'Google Workspace for Education' : 'Google Workspace Terintegrasi'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Seamless assignment submission, real-time teacher feedback via Google Classroom, and collaborative Docs/Slides presentations.'
                : 'Pengumpulan tugas paperless, feedback langsung dari guru via Google Classroom, dan kerja kelompok interaktif secara real-time.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              {currentLang === 'en' ? 'Zero Distraction & Child-Safe Filtering' : 'Sistem Keamanan & Filter Konten'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Enterprise firewall blocks gaming, adult content, and social media during class hours, preserving razor-sharp academic focus.'
                : 'Firewall sekolah otomatis memblokir game, media sosial non-edukasi, dan konten berbahaya, memastikan penggunaan murni untuk belajar.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              {currentLang === 'en' ? 'Digital Cambridge Textbooks' : 'E-Book & Sumber Belajar Cambridge'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Lighter school bags. Interactive simulations, digital scientific calculators, and multilingual dictionaries accessible at a click.'
                : 'Mengurangi beban tas sekolah anak. Dilengkapi buku digital interaktif Cambridge University Press dan simulasi sains virtual.'}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? '21st Century Learning Awaits' : 'Siapkan Anak Anda Menjadi Generasi Digital Beretika'}
        </h2>
        <p className="text-xs sm:text-sm text-amber-100 mb-6 max-w-xl mx-auto">
          {currentLang === 'en' ? 'Learn more about our digital classroom onboarding during campus orientation.' : 'Pelajari panduan penggunaan Chromebook terkelola dan fasilitas kampus kami.'}
        </p>
        <button
          onClick={onOpenAdmissions}
          className="px-6 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
        >
          {currentLang === 'en' ? 'Apply for 2026/2027 Enrollment' : 'Daftar PPDB 2026/2027'}
        </button>
      </section>
    </div>
  );
};
