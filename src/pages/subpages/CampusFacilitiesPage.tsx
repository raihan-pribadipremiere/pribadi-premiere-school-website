import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { facilitiesData } from '../../data/schoolData';
import { Building2, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface CampusFacilitiesPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const CampusFacilitiesPage: React.FC<CampusFacilitiesPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'GDC Campus' : 'Kampus GDC', page: 'campus-life/gdc', active: true },
    { label: currentLang === 'en' ? 'Robotics & Labs' : 'Lab Sains & AI', page: 'campus-life/labs' },
    { label: currentLang === 'en' ? 'Boarding Residence' : 'Asrama 24 Jam', page: 'campus-life/boarding' },
    { label: currentLang === 'en' ? 'Sports & Pool' : 'Olahraga & Kolam', page: 'campus-life/sports' },
    { label: currentLang === 'en' ? 'Clubs & Activities' : 'Ekstrakurikuler', page: 'campus-life/clubs' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Campus Life' : 'Fasilitas & Asrama', page: 'campus-life' },
          { label: currentLang === 'en' ? 'Grand Depok City Modern Campus (4,000 m²)' : 'Fasilitas Kampus Grand Depok City' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>4,000 m² Dedicated Grounds · Grand Depok City</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'A Purpose-Built Sanctuary for Learning & Growth' 
              : 'Kampus Modern 4.000 m² Grand Depok City'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Specifically engineered for the health, safety, and inspiration of modern students. Featuring smart air-conditioned classrooms, acoustic music studios, Olympic sports facilities, and lush outdoor green spaces.'
              : 'Didesain khusus untuk kenyamanan dan inspirasi belajar siswa. Dilengkapi ruang kelas cerdas ber-AC, laboratorium sains Cambridge, fasilitas olahraga lengkap, dan asrama terpadu di kawasan asri Grand Depok City.'}
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilitiesData.map((fac) => (
            <div key={fac.id} className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="aspect-video relative bg-stone-100 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title[currentLang]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {fac.category[currentLang]}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                    {fac.title[currentLang]}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {fac.description[currentLang]}
                  </p>
                  <div className="border-t border-stone-100 pt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                      {currentLang === 'en' ? 'Key Specifications:' : 'Spesifikasi Unggulan:'}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-700">
                      {fac.specs[currentLang].map((spec, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Banner */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-lg">
                Pribadi Premiere School Grand Depok City
              </h3>
              <p className="text-xs text-stone-600 mt-1 max-w-xl">
                Jl. Boulevard Grand Depok City, Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412.
                Kawasan bebas banjir, tenang, dan mudah diakses dari Tol Margonda maupun Stasiun Depok.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenTourModal}
            className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs whitespace-nowrap cursor-pointer shrink-0"
          >
            {currentLang === 'en' ? 'Book Saturday Campus Tour' : 'Jadwalkan Tur Kampus Sabtu'}
          </button>
        </div>
      </section>
    </div>
  );
};
