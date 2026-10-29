import React, { useState } from 'react';
import { Language } from '../types';
import { campusesData } from '../data/schoolData';
import { MapPin, Phone, MessageSquare, ExternalLink, Sparkles, Building2, Check } from 'lucide-react';

interface CampusLocationsSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const CampusLocationsSection: React.FC<CampusLocationsSectionProps> = ({
  currentLang,
  onOpenBooking
}) => {
  const [selectedCampusId, setSelectedCampusId] = useState<string>('gdc-premiere');
  const activeCampus = campusesData.find(c => c.id === selectedCampusId) || campusesData[0];

  return (
    <section id="campuses" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            {currentLang === 'en' ? 'Pribadi Premiere School Complex' : 'Kompleks Kampus Pribadi Premiere'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
            {currentLang === 'en'
              ? 'A 4,000 m² purpose-built campus in Grand Depok City.'
              : 'Kampus modern terpadu 4.000 m² di Grand Depok City.'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {currentLang === 'en'
              ? 'Explore our next-generation academic complex with 1:1 Chromebook digital classrooms, AI & robotics studios, and our dedicated 24-hour student boarding residence.'
              : 'Jelajahi kompleks akademik modern dengan ruang kelas digital 1:1 Chromebook, laboratorium sains & robotika, serta asrama siswa terpadu 24 jam.'}
          </p>
        </div>

        {/* Campus Toggle Pills */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {campusesData.map((campus) => {
            const isSelected = campus.id === selectedCampusId;
            return (
              <button
                key={campus.id}
                onClick={() => setSelectedCampusId(campus.id)}
                className={`flex-1 p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-white border-amber-800 shadow-md ring-1 ring-amber-800/20'
                    : 'bg-stone-100/80 border-stone-200 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                    campus.isPremiere 
                      ? 'bg-amber-100 text-amber-900' 
                      : 'bg-stone-200 text-stone-800'
                  }`}>
                    {campus.badge[currentLang]}
                  </span>
                  {isSelected && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-900">
                      <Check className="w-3.5 h-3.5" />
                      {currentLang === 'en' ? 'Selected' : 'Dipilih'}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-lg font-semibold text-stone-900">
                  {campus.name[currentLang]}
                </h3>
                <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>{campus.district}</span>
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Campus Feature Spotlight */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Image / Visual Container */}
            <div className="lg:col-span-5 relative bg-stone-200 min-h-[300px] lg:min-h-full">
              <img
                src={activeCampus.image}
                alt={activeCampus.name[currentLang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    {activeCampus.badge[currentLang]}
                  </div>
                  <div className="font-serif text-xl sm:text-2xl font-bold">
                    {activeCampus.name[currentLang]}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information & Amenities */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-mono">
                  <span>{currentLang === 'en' ? 'Offered Levels:' : 'Jenjang:'}</span>
                  {activeCampus.levels.map((lvl, i) => (
                    <span key={i} className="font-semibold text-stone-800 bg-stone-100 px-2 py-0.5 rounded">
                      {lvl}
                    </span>
                  ))}
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {activeCampus.description[currentLang]}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-2.5">
                    {currentLang === 'en' ? 'Campus Distinctives & Facilities:' : 'Keunggulan & Fasilitas Utama:'}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {activeCampus.highlights[currentLang].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Location & Contact Bar */}
              <div className="pt-6 border-t border-stone-100 space-y-4">
                <div className="flex items-start gap-2 text-xs text-stone-600">
                  <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <span>{activeCampus.address}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/${activeCampus.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20Admin%20${encodeURIComponent(activeCampus.name[currentLang])},%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20siswa%20baru.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp: {activeCampus.whatsapp}</span>
                  </a>

                  <a
                    href={`tel:${activeCampus.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-500" />
                    <span>{activeCampus.phone}</span>
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors"
                  >
                    <Building2 className="w-3.5 h-3.5 text-amber-800" />
                    <span>{currentLang === 'en' ? 'Schedule Visit Here' : 'Jadwalkan Kunjungan'}</span>
                  </button>

                  <a
                    href={activeCampus.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 ml-auto"
                  >
                    <span>{currentLang === 'en' ? 'Open in Google Maps' : 'Petunjuk Arah'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
