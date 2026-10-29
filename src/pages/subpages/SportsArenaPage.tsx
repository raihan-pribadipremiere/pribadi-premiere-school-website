import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Waves, Sparkles, Activity, ShieldCheck, HeartPulse, Award } from 'lucide-react';

interface SportsArenaPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const SportsArenaPage: React.FC<SportsArenaPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'GDC Campus' : 'Kampus GDC', page: 'campus-life/gdc' },
    { label: currentLang === 'en' ? 'Robotics & Labs' : 'Lab Sains & AI', page: 'campus-life/labs' },
    { label: currentLang === 'en' ? 'Boarding Residence' : 'Asrama 24 Jam', page: 'campus-life/boarding' },
    { label: currentLang === 'en' ? 'Sports & Pool' : 'Olahraga & Kolam', page: 'campus-life/sports', active: true },
    { label: currentLang === 'en' ? 'Clubs & Activities' : 'Ekstrakurikuler', page: 'campus-life/clubs' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Campus Life' : 'Fasilitas & Asrama', page: 'campus-life' },
          { label: currentLang === 'en' ? 'Semi-Olympic Pool & Sports Arena' : 'Kolam Renang Semi-Olimpik & Sarana Olahraga' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Health, Stamina & Sportsmanship</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Semi-Olympic Pool & Multi-Sport Complex' 
              : 'Kolam Renang Semi-Olimpik & Kompleks Olahraga Terpadu'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'A healthy mind thrives in a healthy body. Our Grand Depok City campus features a dedicated 25-meter aquatic center, multi-purpose basketball arena, and green athletic spaces.'
              : 'Mens sana in corpore sano. Kampus Pribadi Premiere GDC dilengkapi fasilitas akuatik 25 meter beratap, lapangan basket dan futsal indoor standar, serta ruang latihan kebugaran jasmani.'}
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              25m Semi-Olympic Swimming Pool
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Covered swimming pool with certified lifeguards, separated shower facilities, and designated weekly swim classes for TK, SD, SMP, and SMA.'
                : 'Kolam renang beratap dengan sirkulasi air terawat, pengawasan lifeguard bersertifikat, dan jadwal renang terjadwal terpisah per jenjang.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Multi-Purpose Basketball & Futsal Arena
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'High-traction indoor flooring, electronic scoreboard, and full court dimensions for inter-school tournaments and daily sports.'
                : 'Lapangan multifungsi berstandar untuk basket, voli, dan futsal, dilengkapi tribun penonton dan pencahayaan optimal.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Archery Range & Badminton Courts
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Specialized archery range building focus, patience, and upper body control under national archery coaches.'
                : 'Fasilitas panahan (archery) untuk melatih fokus dan ketenangan mental, serta lapangan bulu tangkis berstandar.'}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenTourModal}
            className="px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs sm:text-sm cursor-pointer shadow-sm"
          >
            {currentLang === 'en' ? 'Tour Sports Facilities on Saturday' : 'Kunjungi Arena Olahraga Saat Tur Sabtu'}
          </button>
        </div>
      </section>
    </div>
  );
};
