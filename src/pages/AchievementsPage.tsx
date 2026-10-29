import React from 'react';
import { Language } from '../types';
import { Trophy, Award, Sparkles, GraduationCap, ArrowRight, Microchip, CheckCircle2 } from 'lucide-react';

interface AchievementsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenAdmissions: () => void;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenAdmissions
}) => {
  const achievementCards = [
    {
      page: 'achievements/olympiads',
      badge: currentLang === 'en' ? 'Honor Roll' : 'Daftar Medali',
      title: currentLang === 'en' ? 'Science Olympiad (OSN) Medals' : 'Medali Olimpiade Sains Nasional (OSN)',
      desc: currentLang === 'en'
        ? 'Over 140 national and international medals won across Mathematics, Physics, Chemistry, Biology, and Informatics competitions.'
        : 'Lebih dari 140 torehan medali emas, perak, dan perunggu dari OSN Kemendikbudristek, IJSO, IMO, dan IPhO.',
      highlights: [
        currentLang === 'en' ? '140+ National & Global Medals' : '140+ Medali Nasional & Dunia',
        currentLang === 'en' ? 'Verified Puspresnas Competitions' : 'Kompetisi Resmi Puspresnas',
        currentLang === 'en' ? 'Gold, Silver & Bronze Honor Roll' : 'Daftar Medalis Emas, Perak & Perunggu'
      ],
      cta: currentLang === 'en' ? 'View Olympiad Honor Roll →' : 'Lihat Daftar Medalis OSN →',
      icon: Trophy
    },
    {
      page: 'achievements/destinations',
      badge: currentLang === 'en' ? '100% Acceptance' : '100% Kelulusan',
      title: currentLang === 'en' ? 'High School Alumni Placements' : 'Kampus Tujuan Kelulusan SMA',
      desc: currentLang === 'en'
        ? 'Graduates accepted to top Indonesian state universities (UI, ITB, UGM) and world top 100 universities (NUS, NTU, Oxford).'
        : 'Alumni SMA Pribadi Premiere diterima di universitas terbaik nasional (UI, ITB, UGM) dan kampus terkemuka dunia.',
      highlights: [
        '100% High School University Placement',
        'UI, ITB, UGM, Unpad, ITS Acceptance',
        'NUS, NTU, Oxford & Top Global Campuses'
      ],
      cta: currentLang === 'en' ? 'View Alumni University Map →' : 'Lihat Sebaran Kampus Alumni →',
      icon: GraduationCap
    },
    {
      page: 'achievements/camp',
      badge: currentLang === 'en' ? 'Master Coaching' : 'Inkubasi Juara',
      title: currentLang === 'en' ? 'OSN Intensive Training Camp' : 'Klinik Pembinaan Juara OSN',
      desc: currentLang === 'en'
        ? 'Structured incubation pairing high-potential students with former international medalists and university professors.'
        : 'Metode pembinaan terpadu didampingi mantan medalis olimpiade internasional dan dosen universitas mitra.',
      highlights: [
        currentLang === 'en' ? 'Phased City to National Progression' : 'Tahapan Seleksi Kota ke Nasional',
        currentLang === 'en' ? 'University Research Laboratories' : 'Praktikum Laboratorium Riset',
        currentLang === 'en' ? 'Heuristic Math & Science Problem Sets' : 'Latihan Soal Heuristik Tingkat Lanjut'
      ],
      cta: currentLang === 'en' ? 'Explore Olympiad Camp →' : 'Pelajari Klinik OSN →',
      icon: Microchip
    },
    {
      page: 'achievements/scholarships',
      badge: currentLang === 'en' ? 'Up to 100% Waiver' : 'Beasiswa s.d. 100%',
      title: currentLang === 'en' ? 'Science & Talent Scholarships' : 'Beasiswa Sains, Riset & Tahfidz',
      desc: currentLang === 'en'
        ? 'Full and partial merit scholarships funded by Yayasan Yenbu Indonesia for OSN medalists, high-scoring exam takers, and Hafidz Quran.'
        : 'Program beasiswa penuh dan parsial dari Yayasan Yenbu Indonesia bagi siswa berprestasi olimpiade sains, tes akademik, dan tahfidz.',
      highlights: [
        currentLang === 'en' ? 'OSN Medalist 100% Waiver' : 'Bebas Biaya 100% Medalis OSN',
        currentLang === 'en' ? 'Academic Entrance Merit (50% – 75%)' : 'Potongan 50% - 75% Jalur Tes',
        currentLang === 'en' ? 'Tahfidz Al-Quran Award Track' : 'Jalur Khusus Tahfidz Al-Quran'
      ],
      cta: currentLang === 'en' ? 'View Scholarship Guide →' : 'Lihat Syarat Beasiswa →',
      icon: Award
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              {currentLang === 'en' ? 'Hall of Distinction · Overview Hub' : 'Prestasi & Alumni · Pusat Informasi'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Celebrating 140+ Olympiad Medals & Top University Placements.'
                : 'Membanggakan 140+ Medali Olimpiade Sains & Kelulusan Kampus Impian.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'Explore our student achievements below. Select a topic to review our medal honor roll, alumni destinations, intensive Olympiad clinics, or scholarship opportunities.'
                : 'Pribadi Premiere School konsisten membina siswa berprestasi tinggi di kancah nasional dan internasional. Pilih topik di bawah untuk melihat rincian medali, alumni, klinik OSN, dan beasiswa.'}
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-white border-b border-stone-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-900 block">140+</span>
            <span className="text-xs text-stone-600">{currentLang === 'en' ? 'Student Medals' : 'Medali Juara Sains'}</span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-900 block">100%</span>
            <span className="text-xs text-stone-600">{currentLang === 'en' ? 'Alumni University Entry' : 'Kelulusan Alumni ke PTN/Global'}</span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-900 block">UI & ITB</span>
            <span className="text-xs text-stone-600">{currentLang === 'en' ? 'Top State Campuses' : 'Tujuan Utama Alumni PTN'}</span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-900 block">s.d. 100%</span>
            <span className="text-xs text-stone-600">{currentLang === 'en' ? 'Merit Scholarships' : 'Beasiswa Prestasi Sains'}</span>
          </div>
        </div>
      </section>

      {/* Overview Cards Gateway Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
            {currentLang === 'en' ? 'Achievements & Excellence' : 'Pusat Prestasi'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-3">
            {currentLang === 'en' ? 'Explore Specific Achievement Sections' : 'Pilih Topik Prestasi & Alumni'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {currentLang === 'en'
              ? 'Click any card to open its dedicated sub-page with comprehensive lists and guidelines.'
              : 'Klik pada kartu di bawah ini untuk membuka halaman tersendiri dengan daftar medali dan panduan lengkap.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementCards.map((card, idx) => {
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

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Are You a Passionate Young Scientist?' : 'Apakah Anda Siap Menjadi Juara Berikutnya?'}
        </h2>
        <p className="text-xs sm:text-sm text-amber-100 mb-6 max-w-xl mx-auto">
          {currentLang === 'en' ? 'Apply for our Science Scholarships and join our OSN coaching clinics.' : 'Daftar beasiswa sains dan bergabunglah dengan klinik juara OSN Pribadi Premiere.'}
        </p>
        <button
          onClick={onOpenAdmissions}
          className="px-6 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
        >
          {currentLang === 'en' ? 'Apply for PPDB Scholarship Track' : 'Daftar Jalur Beasiswa PPDB'}
        </button>
      </section>

    </div>
  );
};
