import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { schoolProfile } from '../../data/schoolData';
import { Compass, Target, Sparkles, CheckCircle2, Award } from 'lucide-react';

interface VisionMissionPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const VisionMissionPage: React.FC<VisionMissionPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Vision & Mission' : 'Visi & Misi', page: 'about/vision', active: true },
    { label: currentLang === 'en' ? 'Foundation Heritage' : 'Yayasan Yenbu', page: 'about/heritage' },
    { label: currentLang === 'en' ? 'Head of School Letter' : 'Sambutan Kepala', page: 'about/headmaster' },
    { label: currentLang === 'en' ? 'Accreditations' : 'Akreditasi', page: 'about/accreditations' },
    { label: currentLang === 'en' ? 'Faculty & Mentors' : 'Dewan Guru', page: 'about/faculty' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'About Us' : 'Profil Sekolah', page: 'about' },
          { label: currentLang === 'en' ? 'Vision, Mission & Motto' : 'Visi, Misi & Semboyan' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Guiding Principles & Institutional Core</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' ? 'Vision, Mission & Core Values' : 'Visi, Misi & Semboyan Pribadi Premiere'}
          </h1>

          <p className="text-base sm:text-lg text-amber-100 max-w-3xl leading-relaxed">
            "{schoolProfile.tagline[currentLang]}"
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-stone-900 text-2xl mb-3">
              {currentLang === 'en' ? 'Our Vision' : 'Visi Kami'}
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base italic bg-stone-50 p-4 rounded-xl border-l-4 border-amber-800">
              "{schoolProfile.vision[currentLang]}"
            </p>
          </div>

          {/* Motto */}
          <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-stone-900 text-2xl mb-3">
              {currentLang === 'en' ? 'School Motto' : 'Semboyan Sekolah'}
            </h2>
            <p className="text-xl font-serif font-bold text-amber-900 mb-2">
              Leading with Knowledge, Guiding with Values
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Academic brilliance without noble ethics is hollow. We balance intellectual mastery with empathy, integrity, and humility.'
                : 'Kecerdasan akal tanpa budi pekerti luhur akan kehilangan arah. Pribadi Premiere menyeimbangkan keunggulan sains dengan akhlak mulia dan keteladanan.'}
            </p>
          </div>

        </div>

        {/* Missions */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-800 text-white flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="font-serif font-bold text-stone-900 text-2xl">
              {currentLang === 'en' ? 'Institutional Missions' : 'Misi Pendidikan'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {schoolProfile.missions[currentLang].map((mission, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200/70">
                <CheckCircle2 className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">{mission}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Join Our Academic Community' : 'Bergabunglah Bersama Pribadi Premiere'}
        </h2>
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => onNavigate('about/heritage')}
            className="px-5 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
          >
            {currentLang === 'en' ? 'Read Foundation Heritage →' : 'Profil Yayasan Yenbu →'}
          </button>
        </div>
      </section>
    </div>
  );
};
