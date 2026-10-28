import React, { useState } from 'react';
import { Language, AcademicProgram } from '../types';
import { academicPrograms } from '../data/schoolData';
import { BookOpen, Compass, GraduationCap, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface AcademicProgramsProps {
  currentLang: Language;
  onSelectProgramForAdmissions: (programId: string) => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({
  currentLang,
  onSelectProgramForAdmissions
}) => {
  const [selectedId, setSelectedId] = useState<string>('junior-high');

  const activeProgram = academicPrograms.find(p => p.id === selectedId) || academicPrograms[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-800" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-800" />;
      case 'GraduationCap':
      default:
        return <GraduationCap className="w-5 h-5 text-amber-800" />;
    }
  };

  return (
    <section id="academics" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            {currentLang === 'en' ? 'Academic Pathways' : 'Jenjang Pendidikan & Kurikulum'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
            {currentLang === 'en'
              ? 'An integrated bilingual progression from early childhood to global university readiness.'
              : 'Jenjang pendidikan dwibahasa terpadu dari sekolah dasar hingga kesiapan perguruan tinggi dunia.'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {currentLang === 'en'
              ? 'Pribadi Bilingual School combines the values and depth of the Indonesian National Curriculum with the rigorous global standards of Cambridge Assessment International Education.'
              : 'Memadukan pembentukan akhlak mulia berkarakter Indonesia dengan standar global Cambridge International untuk melahirkan generasi pembelajar mandiri.'}
          </p>
        </div>

        {/* Level Selector Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 p-1.5 bg-stone-100 rounded-xl max-w-xl">
          {academicPrograms.map((prog) => {
            const isActive = prog.id === selectedId;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedId(prog.id)}
                className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/50'
                }`}
              >
                {getIcon(prog.iconName)}
                <span>{prog.name[currentLang].split('(')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Program Card */}
        <div className="mt-8 bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 font-mono uppercase tracking-wider mb-1">
                  <span>{activeProgram.level[currentLang]}</span>
                  <span>·</span>
                  <span>{activeProgram.grades}</span>
                  <span>·</span>
                  <span>{activeProgram.ageGroup}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">
                  {activeProgram.name[currentLang]}
                </h3>
                <div className="mt-2 text-xs font-semibold text-amber-900 bg-amber-50/80 border border-amber-200/60 rounded-md p-2 inline-block">
                  <span className="text-stone-500 font-normal mr-1">{currentLang === 'en' ? 'Accredited Curriculum:' : 'Kurikulum Terakreditasi:'}</span>
                  {activeProgram.curriculum}
                </div>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed">
                {activeProgram.description[currentLang]}
              </p>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
                  {currentLang === 'en' ? 'Key Educational Features' : 'Keunggulan Pembelajaran'}
                </h4>
                <ul className="space-y-2.5">
                  {activeProgram.highlights[currentLang].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectProgramForAdmissions(activeProgram.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl shadow-sm transition-colors"
                >
                  <span>{currentLang === 'en' ? `Apply to ${activeProgram.name[currentLang].split('(')[0]}` : `Daftar ${activeProgram.name[currentLang].split('(')[0]}`}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right outcomes & Boarding Info */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-stone-200/90 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 pb-3 border-b border-stone-100">
                  <ShieldCheck className="w-4 h-4 text-amber-800" />
                  <span>{currentLang === 'en' ? 'Graduate Competencies' : 'Profil Lulusan Unggul'}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {activeProgram.outcomes[currentLang].map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-amber-800 mt-0.5">0{idx + 1}.</span>
                      <p className="text-xs sm:text-sm text-stone-700 font-medium leading-snug">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1.5">
                <div className="font-semibold text-stone-900 flex items-center justify-between">
                  <span>{currentLang === 'en' ? 'Boarding (Dormitory) Option' : 'Pilihan Program Asrama'}</span>
                  <span className="text-[11px] font-mono text-amber-800">
                    {activeProgram.id === 'primary' ? (currentLang === 'en' ? 'Day-school only' : 'Hanya Full-Day') : (currentLang === 'en' ? 'Available' : 'Tersedia')}
                  </span>
                </div>
                <p className="text-stone-600 leading-normal">
                  {activeProgram.id === 'primary' 
                    ? (currentLang === 'en' ? 'Primary students attend full-day school (07:30 – 14:30) with rich afternoon extracurriculars.' : 'Siswa SD mengikuti program full-day (07.30 - 14.30) dengan kegiatan pendukung aktif.')
                    : (currentLang === 'en' ? 'Supervised residence with evening academic tutorials, tahsin/tahfidz mentoring, and leadership development.' : 'Asrama berfasilitas lengkap dengan pembimbingan belajar malam, tahfidz Al-Quran, dan pembinaan karakter mandiri.')}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
