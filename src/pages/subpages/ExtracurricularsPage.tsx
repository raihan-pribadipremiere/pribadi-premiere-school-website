import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Sparkles, Palette, Music, Trophy, Compass, CheckCircle2 } from 'lucide-react';

interface ExtracurricularsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const ExtracurricularsPage: React.FC<ExtracurricularsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'GDC Campus' : 'Kampus GDC', page: 'campus-life/gdc' },
    { label: currentLang === 'en' ? 'Robotics & Labs' : 'Lab Sains & AI', page: 'campus-life/labs' },
    { label: currentLang === 'en' ? 'Boarding Residence' : 'Asrama 24 Jam', page: 'campus-life/boarding' },
    { label: currentLang === 'en' ? 'Sports & Pool' : 'Olahraga & Kolam', page: 'campus-life/sports' },
    { label: currentLang === 'en' ? 'Clubs & Activities' : 'Ekstrakurikuler', page: 'campus-life/clubs', active: true }
  ];

  const clubs = [
    { category: 'STEM & Technology', items: ['Robotics & IoT Club', 'Python & Game Coding', 'Science Olympiad Club', 'Astronomy Society'] },
    { category: 'Arts & Creative', items: ['Orchestra & Traditional Ensemble', 'Graphic Design & Photography', 'Digital Illustration', 'Drama & Theatre'] },
    { category: 'Athletics & Martial Arts', items: ['Competitive Swimming', 'Basketball Club', 'Futsal League', 'Traditional Archery (Panahan)', 'Pencak Silat'] },
    { category: 'Leadership & Humanities', items: ['Model United Nations (MUN)', 'English Debate Society', 'Pramuka & PMR', 'Journalism & School Media', 'Tahfidz Community'] }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Campus Life' : 'Fasilitas & Asrama', page: 'campus-life' },
          { label: currentLang === 'en' ? '20+ Student Clubs & Extracurriculars' : '20+ Ekstrakurikuler & Organisasi Siswa' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>20+ Diverse Clubs & Creative Outlets</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Discover Passion Beyond the Textbook' 
              : 'Eksplorasi Minat, Bakat & Kepemimpinan Siswa'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'From robotics and model UN to archery and symphonic music, our vibrant after-school activities nurture well-rounded leaders.'
              : 'Pendidikan holistik melampaui ruang kelas. Melalui 20+ ekstrakurikuler pilihan, siswa melatih kepemimpinan, kerja tim, dan ketahanan mental.'}
          </p>
        </div>
      </section>

      {/* Clubs List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clubs.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xs">
              <h3 className="font-serif font-bold text-stone-900 text-lg mb-4 text-amber-900">
                {c.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-stone-50 rounded-xl border border-stone-200/60 text-xs text-stone-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-amber-900 text-white rounded-3xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="font-serif font-bold text-xl mb-2">
            {currentLang === 'en' ? 'Start a New Student Club' : 'Dukungan Inisiatif Klub Baru'}
          </h3>
          <p className="text-xs sm:text-sm text-amber-100 mb-6">
            {currentLang === 'en'
              ? 'Students with novel passions can propose new clubs with faculty mentorship and foundation grant support.'
              : 'Siswa yang memiliki minat spesifik didukung penuh untuk mendirikan komunitas baru dengan bimbingan dewan guru.'}
          </p>
          <button
            onClick={() => onNavigate('admissions')}
            className="px-6 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs cursor-pointer"
          >
            {currentLang === 'en' ? 'Enroll at Pribadi Premiere' : 'Daftar PPDB 2026/2027'}
          </button>
        </div>
      </section>
    </div>
  );
};
