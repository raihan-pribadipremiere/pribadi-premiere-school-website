import React from 'react';
import { Language } from '../types';
import { AdmissionsPortal } from '../components/AdmissionsPortal';
import { 
  FileCheck, 
  Calculator, 
  Award, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  Phone,
  CheckCircle2
} from 'lucide-react';

interface AdmissionsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
  preselectedProgram?: string;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenBooking,
  preselectedProgram
}) => {
  const admissionCards = [
    {
      page: 'admissions/steps',
      badge: currentLang === 'en' ? 'TK – SMA Guide' : 'Panduan TK – SMA',
      title: currentLang === 'en' ? 'Step-by-Step Enrollment Roadmap' : 'Alur & Tahapan Pendaftaran PPDB',
      desc: currentLang === 'en'
        ? '5 clear milestones from online account creation and document submission to diagnostic play/test observations and official LoA offer letters.'
        : '5 langkah mudah dari pembuatan akun online, kelengkapan berkas rapor, tes pemetaan kesiapan belajar, hingga pengumuman penerimaan.',
      highlights: [
        currentLang === 'en' ? 'Detailed Document Checklist' : 'Daftar Lengkap Berkas Persyaratan',
        currentLang === 'en' ? 'Friendly Placement Observation' : 'Observasi Ramah Anak & Tes Akademik',
        currentLang === 'en' ? 'Fast Verification Turnaround' : 'Proses Verifikasi Cepat & Terbuka'
      ],
      cta: currentLang === 'en' ? 'View Enrollment Steps →' : 'Lihat Alur Pendaftaran →',
      icon: FileCheck
    },
    {
      page: 'admissions/calculator',
      badge: currentLang === 'en' ? 'Early Bird 15%' : 'Diskon 15% Early Bird',
      title: currentLang === 'en' ? 'Tuition & Fee Investment Simulator' : 'Kalkulator Simulasi Biaya Masuk',
      desc: currentLang === 'en'
        ? 'Transparently calculate estimated entrance fees, monthly SPP, and boarding options for TK, SD, SMP, or SMA.'
        : 'Simulasikan estimasi uang pangkal, SPP bulanan, dan asrama untuk seluruh jenjang dengan potongan Early Bird 15%.',
      highlights: [
        currentLang === 'en' ? 'Interactive Level Selector (TK–SMA)' : 'Simulasi Fleksibel TK hingga SMA',
        currentLang === 'en' ? '15% Early Bird Waiver Applied' : 'Klaim Diskon Uang Pangkal 15%',
        currentLang === 'en' ? 'Day School vs Boarding Breakdown' : 'Rincian Biaya Full Day & Asrama'
      ],
      cta: currentLang === 'en' ? 'Open Fee Simulator →' : 'Buka Kalkulator Biaya →',
      icon: Calculator
    },
    {
      page: 'admissions/scholarships',
      badge: currentLang === 'en' ? 'Up to 100% Merit' : 'Beasiswa s.d. 100%',
      title: currentLang === 'en' ? 'Scholarship Application Guide' : 'Panduan Jalur Beasiswa PPDB',
      desc: currentLang === 'en'
        ? 'Comprehensive portfolio guidelines for Science Olympiad medalists, academic merit test takers, and Tahfidz Quran memorizers.'
        : 'Informasi lengkap persyaratan dokumen, verifikasi sertifikat medali OSN, tes seleksi akademik, dan jalur tahfidz.',
      highlights: [
        currentLang === 'en' ? 'OSN Medalist 100% Waiver' : 'Beasiswa Penuh 100% Medalis OSN',
        currentLang === 'en' ? 'Entrance Merit Exam (50%–75%)' : 'Potongan Biaya 50% - 75% Jalur Tes',
        currentLang === 'en' ? 'Hafidz Quran 5+ Juz Award' : 'Jalur Khusus Hafalan Al-Quran'
      ],
      cta: currentLang === 'en' ? 'Read Scholarship Guide →' : 'Baca Panduan Beasiswa →',
      icon: Award
    },
    {
      page: 'admissions/tour',
      badge: currentLang === 'en' ? 'Every Saturday' : 'Setiap Sabtu',
      title: currentLang === 'en' ? 'Saturday Campus Tour & Consultation' : 'Tur Kampus Sabtu & Konsultasi',
      desc: currentLang === 'en'
        ? 'Step onto our 4,000 m² campus in Grand Depok City. Tour classrooms, science labs, Olympic pool, and talk with our academic directors.'
        : 'Kunjungi langsung kampus modern Grand Depok City, lihat kelas Chromebook, laboratorium Cambridge, kolam renang, dan asrama.',
      highlights: [
        currentLang === 'en' ? 'Guided Principal Walkthrough' : 'Didampingi Langsung Kepala Sekolah',
        currentLang === 'en' ? 'Interactive Classroom Experience' : 'Uji Coba Ruang Kelas & Laboratorium',
        currentLang === 'en' ? 'Personal 1-on-1 Q&A Session' : 'Sesi Konsultasi Eksklusif 1-on-1'
      ],
      cta: currentLang === 'en' ? 'Book Saturday Tour →' : 'Jadwalkan Tur Kampus →',
      icon: Calendar
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              {currentLang === 'en' ? 'Admissions & Enrollment · Overview Hub' : 'PPDB 2026/2027 · Pusat Informasi Pendaftaran'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Begin Your Family’s Journey at Pribadi Premiere School.'
                : 'Mulai Langkah Terbaik Putra-Putri Anda di Pribadi Premiere.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'Enrollment is officially open for Preschool/TK, Primary (SD), Junior High (SMP), and Senior High (SMA) for Academic Year 2026/2027. Explore our admission guide, tuition calculator, scholarships, or book a Saturday campus tour.'
                : 'Penerimaan Peserta Didik Baru (PPDB 2026/2027) dibuka untuk jenjang TK, SD, SMP, dan SMA. Dapatkan potongan Early Bird 15%, beasiswa olimpiade sains, atau jadwalkan tur kampus hari Sabtu.'}
            </p>
          </div>
        </div>
      </section>

      {/* Gateway Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
            {currentLang === 'en' ? 'Admissions Resources' : 'Pusat Layanan PPDB'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-3">
            {currentLang === 'en' ? 'Explore Specific PPDB Topics' : 'Pilih Informasi Pendaftaran'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {currentLang === 'en'
              ? 'Click any card below to view detailed requirements, interactive fee calculators, or reserve tour spots.'
              : 'Klik kartu di bawah ini untuk melihat rincian alur, kalkulator biaya interaktif, atau panduan beasiswa.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {admissionCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-stone-200 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between p-8 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 px-3 py-1 rounded-full border border-stone-200">
                      {card.badge}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-800" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-stone-900 text-2xl mb-2 group-hover:text-amber-900 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  <div className="space-y-2.5 border-t border-stone-100 pt-5 mb-8">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-stone-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate(card.page)}
                  className="w-full py-3 px-4 bg-stone-100 hover:bg-amber-800 hover:text-white text-stone-900 font-bold rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-amber-800 group-hover:text-white"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Embedded Online Application Portal */}
      <section className="bg-stone-100/80 py-16 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
              {currentLang === 'en' ? 'Online Enrollment Application' : 'Formulir Registrasi Online'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-2">
              {currentLang === 'en' ? 'Submit Your Online Application' : 'Pendaftaran Langsung PPDB 2026/2027'}
            </h2>
          </div>

          <AdmissionsPortal
            currentLang={currentLang}
            onOpenBooking={onOpenBooking}
            preselectedProgram={preselectedProgram}
          />
        </div>
      </section>

      {/* Direct Contact for Admissions Office */}
      <section className="py-12 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-amber-50/70 border border-amber-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-stone-900 font-bold">
                {currentLang === 'en' ? 'Have questions regarding admissions or scholarships?' : 'Butuh Bantuan Pendaftaran atau Konsultasi Biaya?'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
                {currentLang === 'en'
                  ? 'Our admissions specialists are ready to guide you through required documentation, placement testing dates, and sibling discounts.'
                  : 'Tim admisi kami (Ms. Dinda) siap membantu konsultasi dokumen pendaftaran, jadwal tes observasi, dan potongan biaya saudara kandung.'}
              </p>
            </div>
            <a
              href="https://wa.me/6281232331995"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-colors shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Ms. Dinda (+62 812-3233-1995)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
