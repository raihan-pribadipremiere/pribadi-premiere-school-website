import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Microchip, Trophy, Users, CheckCircle2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface OlympiadCampPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const OlympiadCampPage: React.FC<OlympiadCampPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'OSN Medals' : 'Medali OSN', page: 'achievements/olympiads' },
    { label: currentLang === 'en' ? 'Alumni Destinations' : 'Kampus Alumni', page: 'achievements/destinations' },
    { label: currentLang === 'en' ? 'OSN Camp' : 'Klinik OSN', page: 'achievements/camp', active: true },
    { label: currentLang === 'en' ? 'Science Scholarships' : 'Beasiswa Sains', page: 'achievements/scholarships' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Olympiad & Alumni' : 'Prestasi & Alumni', page: 'achievements' },
          { label: currentLang === 'en' ? 'OSN Intensive Training Camp' : 'Klinik Pembinaan Juara OSN' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Master Coach Incubator</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'OSN Science Olympiad Intensive Camp' 
              : 'Klinik Pembinaan Intensif Olimpiade Sains (OSN)'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'A dedicated training program pairing promising young scientists with former international Olympiad medalists and university lecturers in Mathematics, Physics, Chemistry, Biology, and Informatics.'
              : 'Program inkubasi juara yang mempertemukan siswa berbakat dengan mantan medalis olimpiade internasional serta dosen universitas untuk persiapan OSN tingkat kota, provinsi, dan nasional.'}
          </p>
        </div>
      </section>

      {/* Structure */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Multi-Stage Coaching
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Phased training progression aligned with OSN-K (City), OSN-P (Province), and OSN-Nasional timelines.'
                : 'Tahapan pembinaan bertingkat dari seleksi sekolah, tingkat Kota Depok, Provinsi Jawa Barat, hingga Nasional.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Master Medalist Mentors
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Students are mentored by former IMO, IPhO, and IBO medal winners who share heuristic problem-solving strategies.'
                : 'Didampingi langsung oleh alumni peraih medali olimpiade internasional dan pakar pembina tim nasional.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
              <Microchip className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Advanced Research Labs
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Practical hands-on lab sessions in university-grade chemistry and biology laboratories at Grand Depok City.'
                : 'Praktikum mendalam di laboratorium kimia, biologi, dan komputer berstandar riset tinggi.'}
            </p>
          </div>
        </div>

        {/* Callout */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
          <h3 className="font-serif font-bold text-stone-900 text-xl mb-4">
            {currentLang === 'en' ? 'Subjects Coached in OSN Camp' : 'Bidang Pembinaan Olimpiade Sains'}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 font-semibold text-stone-800">
              📐 Matematika (SMP & SMA)
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 font-semibold text-stone-800">
              ⚛️ Fisika (SMP & SMA)
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 font-semibold text-stone-800">
              🧬 Biologi (SMP & SMA)
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 font-semibold text-stone-800">
              🧪 Kimia (SMA)
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 font-semibold text-stone-800">
              💻 Informatika / Komputer
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 font-semibold text-stone-800">
              🔭 Astronomi
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 font-semibold text-stone-800">
              🌍 Kebumian & Geografi
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 font-semibold text-stone-800">
              📈 Ekonomi
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Apply for Science Scholarships' : 'Daftar Beasiswa Olimpiade Sains'}
        </h2>
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => onNavigate('achievements/scholarships')}
            className="px-5 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
          >
            {currentLang === 'en' ? 'View Scholarship Requirements →' : 'Lihat Syarat Beasiswa Sains →'}
          </button>
        </div>
      </section>
    </div>
  );
};
