import React from 'react';
import { Language } from '../types';
import { AdmissionsPortal } from '../components/AdmissionsPortal';
import { Calendar, FileCheck, HelpCircle, ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface AdmissionsPageProps {
  currentLang: Language;
  onOpenBooking: () => void;
  preselectedProgram?: string;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  currentLang,
  onOpenBooking,
  preselectedProgram
}) => {
  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              {currentLang === 'en' ? 'Admissions & Enrollment' : 'Penerimaan Peserta Didik Baru (PPDB 2026/2027)'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Join Pribadi Premiere: Transparent admissions and scholarship pathways.'
                : 'Bergabung bersama Pribadi Premiere: Pendaftaran transparan dan beasiswa unggulan.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'We invite prospective students for Kindergarten, Primary, Junior High, and Senior High to register for Academic Year 2026/2027 with early-bird privileges and science scholarships.'
                : 'Kami membuka pendaftaran siswa baru jenjang TK, SD, SMP, dan SMA untuk Tahun Ajaran 2026/2027 dengan potongan Early Bird dan beasiswa olimpiade sains.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Fee Calculator & Roadmap Section */}
      <AdmissionsPortal
        currentLang={currentLang}
        onOpenBooking={onOpenBooking}
        preselectedProgram={preselectedProgram}
      />

      {/* Direct Contact for Admissions Office */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-stone-900 font-normal">
                {currentLang === 'en' ? 'Have questions regarding admissions or scholarships?' : 'Butuh Bantuan Pendaftaran atau Konsultasi Biaya?'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
                {currentLang === 'en'
                  ? 'Our admissions specialists are ready to guide you through required documentation, placement testing dates, and sibling discounts.'
                  : 'Tim admisi kami (Ms. Dinda) siap membantu konsultasi dokumen pendaftaran, jadwal tes observasi, dan potongan biaya saudara kandung.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://wa.me/6281232331995?text=Halo%20Ms.%20Dinda,%20saya%20ingin%20berkonsultasi%20mengenai%20pendaftaran%20siswa%20baru%20di%20Pribadi%20Premiere%20School."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Admisi: +62 812-3233-1995</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-colors"
              >
                <Calendar className="w-4 h-4 text-amber-800" />
                <span>{currentLang === 'en' ? 'Book Visit' : 'Jadwal Tur Kampus'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
