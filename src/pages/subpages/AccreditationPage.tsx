import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ShieldCheck, Award, Globe2, FileCheck, CheckCircle2, Sparkles } from 'lucide-react';

interface AccreditationPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const AccreditationPage: React.FC<AccreditationPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Vision & Mission' : 'Visi & Misi', page: 'about/vision' },
    { label: currentLang === 'en' ? 'Foundation Heritage' : 'Yayasan Yenbu', page: 'about/heritage' },
    { label: currentLang === 'en' ? 'Head of School Letter' : 'Sambutan Kepala', page: 'about/headmaster' },
    { label: currentLang === 'en' ? 'Accreditations' : 'Akreditasi', page: 'about/accreditations', active: true },
    { label: currentLang === 'en' ? 'Faculty & Mentors' : 'Dewan Guru', page: 'about/faculty' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'About Us' : 'Profil Sekolah', page: 'about' },
          { label: currentLang === 'en' ? 'Accreditations & Credentials' : 'Akreditasi & Legalitas Sekolah' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Highest Institutional Ratings</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Accreditations & Global Credentials' 
              : 'Akreditasi "A" Unggul BAN-SM & Cambridge ID248'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Operating under rigorous national educational standards and registered with Cambridge Assessment International Education.'
              : 'Memenuhi 8 Standar Nasional Pendidikan dengan nilai tertinggi serta terafiliasi resmi dengan Cambridge International Examinations.'}
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-5">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full">
              Kemendikbudristek RI
            </span>
            <h2 className="font-serif font-bold text-stone-900 text-xl mt-3 mb-2">
              Akreditasi "A" Unggul (BAN-SM)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              {currentLang === 'en'
                ? 'Awarded the highest accreditation grade by the National Accreditation Board for Schools and Madrasahs (BAN-SM) for curriculum implementation, teacher qualifications, learning infrastructure, and management standards.'
                : 'Mendapatkan predikat Akreditasi A (Unggul) dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-SM) yang menjamin kelayakan sarana, kualifikasi pendidik, dan proses belajar mengajar.'}
            </p>
            <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700 font-mono">
              Status: Terakreditasi A (Unggul) · SK BAN-SM Terverifikasi
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center mb-5">
              <Globe2 className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full">
              Cambridge International ID248
            </span>
            <h2 className="font-serif font-bold text-stone-900 text-xl mt-3 mb-2">
              Cambridge Assessment International Education
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              {currentLang === 'en'
                ? 'Official Cambridge International School offering Cambridge Primary, Lower Secondary Checkpoint, IGCSE, and International AS & A Levels examinations directly on campus.'
                : 'Penyelenggara resmi kurikulum internasional Cambridge mulai dari Primary, Lower Secondary, IGCSE, hingga Cambridge International AS & A Level dengan pusat ujian mandiri.'}
            </p>
            <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-700 font-mono">
              Centre ID: ID248 · Cambridge Registered School
            </div>
          </div>

        </div>

        {/* Legal Entities & Permits */}
        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
          <h3 className="font-serif font-bold text-stone-900 text-lg mb-4 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-amber-800" />
            <span>{currentLang === 'en' ? 'Institutional Standing & Permits' : 'Legalitas & Izin Operasional'}</span>
          </h3>
          <ul className="space-y-3 text-xs text-stone-700">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Izin Operasional Dinas Pendidikan Kota Depok & Provinsi Jawa Barat (TK, SD, SMP, SMA)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Badan Hukum Resmi Penyelenggara: Yayasan Yenbu Indonesia (Kemenkumham RI)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Nomor Pokok Sekolah Nasional (NPSN) Resmi Terdaftar di Dapodik Kemendikbudristek</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Experience Accredited Excellence' : 'Pendidikan Unggul Terpercaya'}
        </h2>
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => onNavigate('about/faculty')}
            className="px-5 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
          >
            {currentLang === 'en' ? 'Meet the Faculty & Mentors →' : 'Lihat Dewan Guru & Konselor →'}
          </button>
        </div>
      </section>
    </div>
  );
};
