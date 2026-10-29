import React, { useState } from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { facultyProfiles } from '../../data/schoolData';
import { Users, Sparkles, GraduationCap, Award } from 'lucide-react';

interface FacultyPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const siblingLinks = [
    { label: currentLang === 'en' ? 'Vision & Mission' : 'Visi & Misi', page: 'about/vision' },
    { label: currentLang === 'en' ? 'Foundation Heritage' : 'Yayasan Yenbu', page: 'about/heritage' },
    { label: currentLang === 'en' ? 'Head of School Letter' : 'Sambutan Kepala', page: 'about/headmaster' },
    { label: currentLang === 'en' ? 'Accreditations' : 'Akreditasi', page: 'about/accreditations' },
    { label: currentLang === 'en' ? 'Faculty & Mentors' : 'Dewan Guru', page: 'about/faculty', active: true }
  ];

  const filteredTeachers = selectedDept === 'all' 
    ? facultyProfiles 
    : facultyProfiles.filter(t => t.department === selectedDept);

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'About Us' : 'Profil Sekolah', page: 'about' },
          { label: currentLang === 'en' ? 'Faculty & Academic Mentors' : 'Dewan Guru & Konselor' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Cambridge Certified Educators · 1:10 Ratio</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' ? 'Our Faculty & Character Mentors' : 'Dewan Guru, Pelatih Olimpiade & Konselor'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Our educators are passionate subject specialists, Cambridge certified instructors, and nurturing mentors committed to unlocking the potential within every student.'
              : 'Pendidik berdedikasi tinggi, tersertifikasi Cambridge International, master trainer olimpiade sains, serta konselor psikologi yang siap mendampingi anak Anda.'}
          </p>
        </div>
      </section>

      {/* Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-800" />
            <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
              {currentLang === 'en' ? 'Filter by Department:' : 'Filter Bidang Studi:'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {['all', 'School Leadership', 'International Studies', 'Science & Technology', 'Student Affairs'].map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-amber-800 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {dept === 'all' ? (currentLang === 'en' ? 'All Faculty' : 'Semua Guru') : dept}
              </button>
            ))}
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-serif text-xl font-bold mb-4">
                {teacher.name.charAt(0)}
              </div>
              <h3 className="font-serif font-bold text-stone-900 text-base mb-1">
                {teacher.name}
              </h3>
              <p className="text-xs font-medium text-amber-900 mb-2">
                {teacher.role[currentLang]}
              </p>
              <div className="text-[11px] text-stone-500 font-mono mb-3">
                {teacher.education}
              </div>
              <div className="text-xs text-stone-600 border-t border-stone-100 pt-3 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-medium">{teacher.department}</span>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  {teacher.experienceYears}+ {currentLang === 'en' ? 'Years Exp.' : 'Thn Pengalaman'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Experience Personal Mentorship' : 'Bimbingan Personal untuk Buah Hati'}
        </h2>
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={onOpenTourModal}
            className="px-5 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
          >
            {currentLang === 'en' ? 'Book a Saturday Consultation →' : 'Konsultasi Tur Kampus Sabtu →'}
          </button>
        </div>
      </section>
    </div>
  );
};
