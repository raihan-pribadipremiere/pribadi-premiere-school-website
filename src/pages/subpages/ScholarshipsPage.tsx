import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Sparkles, Award, CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface ScholarshipsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const ScholarshipsPage: React.FC<ScholarshipsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'OSN Medals' : 'Medali OSN', page: 'achievements/olympiads' },
    { label: currentLang === 'en' ? 'Alumni Destinations' : 'Kampus Alumni', page: 'achievements/destinations' },
    { label: currentLang === 'en' ? 'OSN Camp' : 'Klinik OSN', page: 'achievements/camp' },
    { label: currentLang === 'en' ? 'Science Scholarships' : 'Beasiswa Sains', page: 'achievements/scholarships', active: true }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Olympiad & Alumni' : 'Prestasi & Alumni', page: 'achievements' },
          { label: currentLang === 'en' ? 'Science & Talent Scholarships' : 'Beasiswa Sains & Prestasi Siswa' }
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
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Up to 100% Tuition & Boarding Waivers</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Pribadi Premiere Science & Talent Scholarships' 
              : 'Beasiswa Prestasi Sains & Tahfidz Pribadi Premiere'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Yayasan Yenbu Indonesia rewards exceptional academic distinction, Olympiad medalists, and Quran memorizers with comprehensive financial merit awards.'
              : 'Yayasan Yenbu Indonesia membuka kesempatan beasiswa penuh hingga 100% biaya pendidikan dan asrama bagi siswa berprestasi sains, matematika, riset, dan tahfidz Al-Quran.'}
          </p>
        </div>
      </section>

      {/* Scholarship Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full">
              Category 1
            </span>
            <h3 className="font-serif font-bold text-stone-900 text-base mt-2 mb-2">
              {currentLang === 'en' ? 'OSN Medalist Scholarship (Up to 100%)' : 'Beasiswa Medalis OSN (s.d. 100%)'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {currentLang === 'en'
                ? 'For winners of Gold, Silver, or Bronze medals at the National Science Olympiad (OSN) or certified international olympiads in junior or senior high.'
                : 'Diperuntukkan bagi peraih medali OSN Kemendikbudristek (Emas, Perak, Perunggu) bidang Matematika, IPA, IPS, Fisika, Biologi, Kimia, atau Informatika.'}
            </p>
            <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700">
              Coverage: Bebas SPP & Uang Pangkal s.d. 100% + Pembinaan OSN Intensif
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
              Category 2
            </span>
            <h3 className="font-serif font-bold text-stone-900 text-base mt-2 mb-2">
              {currentLang === 'en' ? 'Academic Merit Exam (50% – 75%)' : 'Beasiswa Jalur Tes Potensi Akademik'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {currentLang === 'en'
                ? 'Awarded to top performers on the Pribadi Premiere Scholarship Entrance Exam (Mathematics, Science & English logic).'
                : 'Berdasarkan perolehan skor tertinggi pada Tes Seleksi Beasiswa Masuk Pribadi Premiere mencakup Matematika Logika, Sains, dan Bahasa Inggris.'}
            </p>
            <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700">
              Coverage: Potongan Biaya Masuk 50% hingga 75%
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full">
              Category 3
            </span>
            <h3 className="font-serif font-bold text-stone-900 text-base mt-2 mb-2">
              {currentLang === 'en' ? 'Tahfidz Al-Quran Scholarship' : 'Beasiswa Tahfidz Al-Quran'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              {currentLang === 'en'
                ? 'Dedicated awards for students who have memorized 5 Juz, 10 Juz, or 30 Juz with proper tajweed and strong academic diligence.'
                : 'Penghargaan khusus bagi calon siswa yang memiliki hafalan Al-Quran minimal 5 Juz bersanad/mutqin dengan kemampuan akademik baik.'}
            </p>
            <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700">
              Coverage: Potongan Biaya Pangkal & Pembinaan Tahfidz Lanjutan
            </div>
          </div>

        </div>

        {/* Application Process */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm max-w-4xl mx-auto">
          <h3 className="font-serif font-bold text-stone-900 text-lg mb-4">
            {currentLang === 'en' ? 'How to Apply for Scholarships' : 'Tahapan Pendaftaran Beasiswa'}
          </h3>
          <div className="space-y-3 text-xs text-stone-700">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0">1</span>
              <span>Lengkapi formulir online PPDB 2026/2027 dan centang pilihan "Jalur Beasiswa".</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0">2</span>
              <span>Unggah sertifikat medali OSN / rapor semester terakhir / sertifikat tahfidz.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center shrink-0">3</span>
              <span>Ikuti tes wawancara dan verifikasi portofolio bersama Dewan Beasiswa Yayasan Yenbu.</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 text-center">
            <button
              onClick={onOpenAdmissions}
              className="px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs cursor-pointer"
            >
              {currentLang === 'en' ? 'Submit Scholarship Application' : 'Daftar Jalur Beasiswa PPDB'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
