import React from 'react';
import { Language } from '../types';
import { CampusFacilities } from '../components/CampusFacilities';
import { BoardingLifeSection } from '../components/BoardingLifeSection';
import { CampusLocationsSection } from '../components/CampusLocationsSection';
import { Building2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

interface CampusLifePageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTour: () => void;
}

export const CampusLifePage: React.FC<CampusLifePageProps> = ({
  currentLang,
  onNavigate,
  onOpenTour
}) => {
  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              {currentLang === 'en' ? 'Campus Life & Facilities' : 'Fasilitas & Kehidupan Kampus'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Inspiring spaces for inquiry, athletics, and vibrant boarding community.'
                : 'Lingkungan belajar representatif untuk riset sains, olahraga, dan asrama terpadu.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'Explore our 4,000 m² Grand Depok City campus designed for 21st-century digital learning alongside our renowned Margonda boarding residence.'
                : 'Jelajahi kampus modern 4.000 m² di Grand Depok City yang dirancang khusus untuk pembelajaran digital interaktif serta asrama terpadu Margonda.'}
            </p>
          </div>
        </div>
      </section>

      {/* Dual Campus Comparison & Addresses */}
      <CampusLocationsSection
        currentLang={currentLang}
        onOpenBooking={onOpenTour}
      />

      {/* Campus Facilities Detailed Component */}
      <CampusFacilities
        currentLang={currentLang}
      />

      {/* Boarding House Life & Student Clubs */}
      <BoardingLifeSection
        currentLang={currentLang}
      />

      {/* Tour CTA */}
      <section className="py-16 bg-white border-b border-stone-200 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="font-serif text-3xl text-stone-900 font-normal">
            {currentLang === 'en' ? 'Experience our campus in person' : 'Kunjungi Langsung Kampus Kami'}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {currentLang === 'en'
              ? 'Join our guided Open House tours every Saturday morning to explore our laboratories, smart classrooms, and dormitories.'
              : 'Ikuti tur kampus setiap hari Sabtu pagi untuk melihat ruang kelas cerdas, laboratorium, gelanggang olahraga, dan asrama kami.'}
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenTour}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors shadow-md"
            >
              {currentLang === 'en' ? 'Book Saturday Campus Tour' : 'Jadwalkan Tur Kampus'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
