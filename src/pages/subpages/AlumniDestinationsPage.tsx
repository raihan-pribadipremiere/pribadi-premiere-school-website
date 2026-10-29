import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { universityDestinations } from '../../data/schoolData';
import { GraduationCap, Sparkles, Building2, Globe2 } from 'lucide-react';

interface AlumniDestinationsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const AlumniDestinationsPage: React.FC<AlumniDestinationsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'OSN Medals' : 'Medali OSN', page: 'achievements/olympiads' },
    { label: currentLang === 'en' ? 'Alumni Destinations' : 'Kampus Alumni', page: 'achievements/destinations', active: true },
    { label: currentLang === 'en' ? 'OSN Camp' : 'Klinik OSN', page: 'achievements/camp' },
    { label: currentLang === 'en' ? 'Science Scholarships' : 'Beasiswa Sains', page: 'achievements/scholarships' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Olympiad & Alumni' : 'Prestasi & Alumni', page: 'achievements' },
          { label: currentLang === 'en' ? 'High School Alumni Placements' : 'Kampus Tujuan Kelulusan SMA' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>100% University Acceptance Track Record</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'High School Alumni University Placements' 
              : 'Sebaran Kelulusan Alumni SMA ke Perguruan Tinggi'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'From leading public universities in Indonesia (UI, ITB, UGM) to top global research centers in Asia, Europe, and the US.'
              : 'Bukti nyata mutu akademik SMA Pribadi Premiere. Lulusan kami diterima di perguruan tinggi negeri favorit serta universitas top 100 dunia.'}
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universityDestinations.map((dest, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4">
              <span className="text-3xl shrink-0 p-2 bg-stone-50 rounded-xl border border-stone-200/60">
                {dest.icon}
              </span>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md">
                    {dest.country}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-900">
                    {dest.category}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-stone-900 text-base mb-1">
                  {dest.name}
                </h3>
                <p className="text-xs text-stone-500">
                  {currentLang === 'en' ? 'Verified Alumni Acceptance' : 'Alumni Pribadi Terverifikasi'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Counseling CTA */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm text-center max-w-3xl mx-auto">
          <GraduationCap className="w-12 h-12 text-amber-800 mx-auto mb-3" />
          <h3 className="font-serif font-bold text-stone-900 text-xl mb-2">
            {currentLang === 'en' ? 'Dedicated College Counseling Office' : 'Bimbingan Konseling Universitas 1-on-1'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
            {currentLang === 'en'
              ? 'Our college counseling team works individually with every senior high school student starting in Grade 10 to calibrate course selections, recommendation letters, essay portfolios, and SNBT test prep.'
              : 'Tim konselor kami mendampingi setiap siswa SMA sejak kelas 10 dalam menyusun portofolio prestasi, surat rekomendasi, esai pendaftaran beasiswa, serta try out UTBK berkala.'}
          </p>
          <button
            onClick={() => onNavigate('academics/senior-high')}
            className="px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs cursor-pointer"
          >
            {currentLang === 'en' ? 'Learn About SMA Program →' : 'Pelajari Kurikulum SMA →'}
          </button>
        </div>
      </section>
    </div>
  );
};
