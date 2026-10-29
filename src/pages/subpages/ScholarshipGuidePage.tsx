import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Award, Sparkles, CheckCircle2, ArrowRight, FileText, HelpCircle } from 'lucide-react';

interface ScholarshipGuidePageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const ScholarshipGuidePage: React.FC<ScholarshipGuidePageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Admission Steps' : 'Alur PPDB', page: 'admissions/steps' },
    { label: currentLang === 'en' ? 'Fee Calculator' : 'Kalkulator Biaya', page: 'admissions/calculator' },
    { label: currentLang === 'en' ? 'Scholarship Guide' : 'Panduan Beasiswa', page: 'admissions/scholarships', active: true },
    { label: currentLang === 'en' ? 'Book Saturday Tour' : 'Tur Sabtu', page: 'admissions/tour' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'PPDB 2026/2027' : 'PPDB 2026/2027', page: 'admissions' },
          { label: currentLang === 'en' ? 'Scholarship Application Guide' : 'Panduan Beasiswa PPDB' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Merit-Based Awards for Deserving Scholars</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Scholarship Application & Verification Guide' 
              : 'Panduan Beasiswa Prestasi & Prosedur Seleksi'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Comprehensive guidelines on portfolio requirements, Olympiad certificate verification, and interview schedules for scholarship candidates.'
              : 'Informasi lengkap persyaratan dokumen, verifikasi sertifikat kejuaraan sains, tahapan tes skolastik, dan jadwal wawancara beasiswa Yayasan Yenbu Indonesia.'}
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        
        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs">
          <h3 className="font-serif font-bold text-stone-900 text-lg mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-800" />
            <span>{currentLang === 'en' ? 'Required Documents for Scholarship Track' : 'Dokumen Persyaratan Khusus Jalur Beasiswa'}</span>
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Fotokopi Rapor 3 semester terakhir dengan rata-rata nilai mata pelajaran eksak ≥ 85.0.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Sertifikat Asli Medali OSN tingkat Kabupaten/Kota, Provinsi, atau Nasional (Puspresnas / Kemendikbudristek).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Surat Rekomendasi Kepala Sekolah asal yang menerangkan rekam jejak integritas siswa.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Khusus Jalur Tahfidz: Syahadah / Sertifikat kelulusan hafalan minimal 5 Juz dari lembaga tahfidz resmi.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs">
          <h3 className="font-serif font-bold text-stone-900 text-lg mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-800" />
            <span>{currentLang === 'en' ? 'Selection Timeline' : 'Jadwal Tes Seleksi Beasiswa 2026/2027'}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="font-bold text-amber-900 block mb-1">Gelombang 1</span>
              <p className="font-semibold text-stone-800">September – November 2026</p>
              <p className="text-stone-500 mt-1">Kuota Terbesar (Hingga Beasiswa 100%)</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="font-bold text-amber-900 block mb-1">Gelombang 2</span>
              <p className="font-semibold text-stone-800">Desember 2026 – Februari 2027</p>
              <p className="text-stone-500 mt-1">Beasiswa Prestasi Parsial 50% - 75%</p>
            </div>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="font-bold text-amber-900 block mb-1">Gelombang 3</span>
              <p className="font-semibold text-stone-800">Maret – Mei 2027</p>
              <p className="text-stone-500 mt-1">Sisa Kuota Terbatas</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={onOpenAdmissions}
            className="px-8 py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs sm:text-sm cursor-pointer shadow-md"
          >
            {currentLang === 'en' ? 'Start Scholarship Registration Online' : 'Daftar Jalur Beasiswa Sekarang'}
          </button>
        </div>

      </section>
    </div>
  );
};
