import React from 'react';
import { Language } from '../types';
import { schoolProfile } from '../data/schoolData';
import { ArrowRight, CheckCircle, MapPin, Calendar, Award, Sparkles, Building2 } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onOpenAdmissions: () => void;
  onOpenTourModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenAdmissions,
  onOpenTourModal
}) => {
  return (
    <section className="relative overflow-hidden bg-stone-100 border-b border-stone-200 pt-8 pb-12 lg:pt-14 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-900">
              <span>Pribadi Premiere School</span>
              <span aria-hidden="true">·</span>
              <span>Cambridge International ID248</span>
              <span aria-hidden="true">·</span>
              <span>Grand Depok City · Boarding & Day School</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.12]" style={{ textWrap: 'balance' }}>
              {currentLang === 'en' ? (
                <>
                  Nurturing visionary thinkers and <span className="italic font-medium text-amber-900">global leaders</span> with grounded character.
                </>
              ) : (
                <>
                  Membina pemikir visioner dan <span className="italic font-medium text-amber-900">pemimpin global</span> berkarakter mulia.
                </>
              )}
            </h1>

            {/* Narrative Description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
              {currentLang === 'en'
                ? 'Providing a world-class dual curriculum blending Kurikulum Merdeka with Cambridge Primary, Lower Secondary, and IGCSE / A-Levels. Recognized for national science olympiad achievements, robotics innovation, and high-caliber university placements.'
                : 'Menghadirkan perpaduan unggul Kurikulum Merdeka dan Cambridge International (Primary, Secondary, IGCSE & A-Levels). Membimbing putra-putri berprestasi di kancah olimpiade sains, robotika, dan tembus perguruan tinggi terkemuka dunia.'}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <span>{currentLang === 'en' ? 'Register for PPDB 2026/2027' : 'Daftar PPDB 2026/2027'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTourModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-colors"
              >
                <Calendar className="w-4 h-4 text-amber-800" />
                <span>{currentLang === 'en' ? 'Book Campus Tour' : 'Jadwal Tur Kampus'}</span>
              </button>

              <a
                href="#campuses"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-950 bg-stone-200/70 hover:bg-stone-200 rounded-xl transition-colors"
              >
                <Building2 className="w-4 h-4 text-amber-800" />
                <span>{currentLang === 'en' ? 'Explore Campus' : 'Fasilitas Kampus'}</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {schoolProfile.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-stone-900 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-stone-700">
                    {metric.label[currentLang]}
                  </div>
                  <div className="text-[11px] text-stone-500 hidden sm:block">
                    {metric.context}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-white group">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-stone-200">
                <img
                  src="/src/assets/images/school_campus_exterior_1793156837942.jpg"
                  alt="Sekolah Pribadi Depok Bilingual Campus Grounds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Verified badge strip */}
              <div className="p-4 bg-white border-t border-stone-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-800 font-medium">
                  <Award className="w-4 h-4 text-amber-800" />
                  <span>Akreditasi A Unggul BAN-SM</span>
                </div>
                <div className="text-stone-500 font-mono text-[11px]">
                  Est. 1995 · Depok, West Java
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Utility Ribbon below hero */}
        <div className="mt-10 pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong className="text-stone-900 font-semibold">{currentLang === 'en' ? 'Admissions Open:' : 'Pendaftaran Dibuka:'}</strong> Academic Year 2026/2027
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong className="text-stone-900 font-semibold">{currentLang === 'en' ? 'Scholarships:' : 'Jalur Beasiswa:'}</strong> OSN, Academic, & Tahfidz
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
            <span className="truncate">
              <strong className="text-stone-900 font-semibold">{currentLang === 'en' ? 'Location:' : 'Lokasi:'}</strong> GDC Boulevard & Margonda Raya
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-stone-500 shrink-0" />
            <span>
              <strong className="text-stone-900 font-semibold">{currentLang === 'en' ? 'Visits:' : 'Konsultasi:'}</strong> Mon–Fri 07:30–16:00 WIB
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
