import React, { useState } from 'react';
import { Language, FacilityItem } from '../types';
import { facilitiesData } from '../data/schoolData';
import { Eye, Check, X, Shield, ChevronRight } from 'lucide-react';

interface CampusFacilitiesProps {
  currentLang: Language;
}

export const CampusFacilities: React.FC<CampusFacilitiesProps> = ({ currentLang }) => {
  const [activeModalFacility, setActiveModalFacility] = useState<FacilityItem | null>(null);

  return (
    <section id="facilities" className="py-16 sm:py-20 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
              {currentLang === 'en' ? 'Campus Infrastructure' : 'Fasilitas & Lingkungan Kampus'}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              {currentLang === 'en' 
                ? 'Designed for exploration, academic rigor, and vibrant student life.'
                : 'Dirancang untuk eksplorasi sains, kenyamanan belajar, dan tumbuh kembang optimal.'}
            </h2>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm max-w-sm">
            {currentLang === 'en'
              ? 'Our purpose-built campus in Grand Depok City offers specialized laboratories, high-tech commons, and safe boarding quarters.'
              : 'Kampus representatif di Grand Depok City dilengkapi laboratorium modern, sarana olahraga terstandar, dan asrama ramah anak.'}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilitiesData.map((item) => (
            <div 
              key={item.id}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with measured scrim */}
                <div className="relative aspect-video w-full overflow-hidden bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.title[currentLang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {item.category[currentLang]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-stone-900 mb-2 group-hover:text-amber-900 transition-colors">
                    {item.title[currentLang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {item.description[currentLang]}
                  </p>

                  {/* Specs Pill-free list */}
                  <div className="pt-3 border-t border-stone-100 flex flex-wrap gap-y-1.5 gap-x-4 text-xs text-stone-500 font-mono">
                    {item.specs[currentLang].map((spec, sIdx) => (
                      <span key={sIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-700" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="px-6 pb-6 pt-1">
                <button
                  onClick={() => setActiveModalFacility(item)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-stone-700 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-stone-500" />
                  <span>{currentLang === 'en' ? 'View Facility Details' : 'Lihat Spesifikasi Fasilitas'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Facility Detail Modal */}
      {activeModalFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full overflow-hidden bg-stone-900">
              <img
                src={activeModalFacility.image}
                alt={activeModalFacility.title[currentLang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveModalFacility(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-amber-800">
                  {activeModalFacility.category[currentLang]}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  {activeModalFacility.title[currentLang]}
                </h3>
              </div>

              <p className="text-sm text-stone-700 leading-relaxed">
                {activeModalFacility.description[currentLang]}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  {currentLang === 'en' ? 'Key Specifications & Equipment' : 'Spesifikasi & Standar Fasilitas'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeModalFacility.specs[currentLang].map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-50 border border-stone-100 text-stone-800">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveModalFacility(null)}
                  className="px-5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                >
                  {currentLang === 'en' ? 'Close Window' : 'Tutup'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
