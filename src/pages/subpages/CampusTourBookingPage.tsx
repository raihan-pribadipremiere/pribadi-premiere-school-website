import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Calendar, Sparkles, MapPin, Phone, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface CampusTourBookingPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const CampusTourBookingPage: React.FC<CampusTourBookingPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Admission Steps' : 'Alur PPDB', page: 'admissions/steps' },
    { label: currentLang === 'en' ? 'Fee Calculator' : 'Kalkulator Biaya', page: 'admissions/calculator' },
    { label: currentLang === 'en' ? 'Scholarship Guide' : 'Panduan Beasiswa', page: 'admissions/scholarships' },
    { label: currentLang === 'en' ? 'Book Saturday Tour' : 'Tur Sabtu', page: 'admissions/tour', active: true }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'PPDB 2026/2027' : 'PPDB 2026/2027', page: 'admissions' },
          { label: currentLang === 'en' ? 'Saturday Campus Tour & Academic Consultation' : 'Tur Kampus Sabtu & Konsultasi' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Every Saturday · Personalized Guided Walk</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Visit Pribadi Premiere School Grand Depok City' 
              : 'Tur Kampus Sabtu & Temu Ramah Pribadi Premiere'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Experience our 4,000 m² campus firsthand. Meet our principals, step inside Chromebook smart classrooms, inspect our science laboratories, and tour the student boarding residence.'
              : 'Rasakan langsung suasana belajar di kampus modern 4.000 m² Grand Depok City. Kunjungi ruang kelas cerdas Chromebook, laboratorium Cambridge, arena olahraga, dan asrama siswa bersama tim pimpinan sekolah.'}
          </p>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <Clock className="w-8 h-8 text-amber-800 mb-3" />
            <h3 className="font-serif font-bold text-stone-900 text-base mb-1">
              {currentLang === 'en' ? 'Saturday Tour Sessions' : 'Jadwal Sesi Tur Setiap Sabtu'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Sesi 1: 09:00 – 10:30 WIB<br />
              Sesi 2: 11:00 – 12:30 WIB<br />
              (Termasuk welcome drink & sesi konsultasi 1-on-1 dengan dewan guru)
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <MapPin className="w-8 h-8 text-amber-800 mb-3" />
            <h3 className="font-serif font-bold text-stone-900 text-base mb-1">
              {currentLang === 'en' ? 'Campus Location' : 'Lokasi Kampus'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Jl. Boulevard Grand Depok City, Sukmajaya, Depok.<br />
              Tersedia area parkir luas & lobi penerimaan ber-AC.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm text-center">
          <Calendar className="w-12 h-12 text-amber-800 mx-auto mb-3" />
          <h3 className="font-serif font-bold text-stone-900 text-xl mb-2">
            {currentLang === 'en' ? 'Reserve Your Family’s Spot' : 'Pesan Tempat untuk Keluarga Anda'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-lg mx-auto">
            {currentLang === 'en'
              ? 'Campus tour slots are limited per session to ensure personalized attention for every visiting family.'
              : 'Jumlah peserta setiap sesi dibatasi demi kenyamanan dan pendampingan personal bagi setiap keluarga.'}
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={onOpenTourModal}
              className="px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs sm:text-sm cursor-pointer shadow-sm"
            >
              {currentLang === 'en' ? 'Book Saturday Tour Online' : 'Pilih Tanggal & Pesan Tur'}
            </button>
            <a
              href="https://wa.me/6281232331995?text=Halo%20Pribadi%20Premiere,%20saya%20ingin%20jadwalkan%20tur%20kampus%20Sabtu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Ms. Dinda</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
