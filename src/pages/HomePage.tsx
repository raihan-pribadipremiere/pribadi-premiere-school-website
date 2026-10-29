import React from 'react';
import { Language } from '../types';
import { schoolProfile, campusesData, academicPrograms } from '../data/schoolData';
import { Hero } from '../components/Hero';
import { 
  Building2, 
  GraduationCap, 
  Trophy, 
  Laptop, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Calendar 
} from 'lucide-react';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenAdmissions: (progId?: string) => void;
  onOpenTour: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  onNavigate,
  onOpenAdmissions,
  onOpenTour
}) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero
        currentLang={currentLang}
        onOpenAdmissions={() => onOpenAdmissions()}
        onOpenTourModal={onOpenTour}
      />

      {/* Official Tagline & Pillars Banner */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 block mb-2">
              {currentLang === 'en' ? 'Our Educational Philosophy' : 'Filosofi Pendidikan Kami'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              "{schoolProfile.tagline[currentLang]}"
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              {currentLang === 'en'
                ? 'Under Yayasan Yenbu Indonesia, Pribadi Premiere School combines academic distinction, digital classroom mastery, and grounded Indonesian character habituation.'
                : 'Di bawah naungan Yayasan Yenbu Indonesia, Pribadi Premiere School memadukan keunggulan akademik internasional, kecakapan digital, serta penanaman adab dan karakter luhur.'}
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-700/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm">
                {currentLang === 'en' ? 'Cambridge & Merdeka' : 'Kurikulum Terpadu'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Dual curriculum blending national cultural values with Cambridge Primary, Checkpoint, IGCSE, and AS/A-Levels.'
                  : 'Perpaduan Kurikulum Merdeka dan standar Cambridge Internasional untuk kesiapan akademik global.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-700/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm">
                {currentLang === 'en' ? 'Digital Classroom (1:1)' : 'Kelas Digital (1:1)'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Chromebook 1-to-1 ecosystem replacing heavy physical textbooks with interactive edutech collaboration.'
                  : 'Pembelajaran berbasis Chromebook personal menggantikan buku tebal dengan media digital kolaboratif.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-700/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm">
                {currentLang === 'en' ? 'Character & Mentoring' : 'Adab & Konseling Karakter'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Getting to Know You (GTKY) profiling, personalized one-on-one counseling, and daily moral habituation.'
                  : 'Asesmen gaya belajar GTKY, bimbingan one-on-one rutin, dan pembiasaan adab berintegritas tinggi.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-700/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm">
                {currentLang === 'en' ? 'Science Olympiad & PTN' : 'Olimpiade Sains & PTN'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Dedicated OSN camp, 140+ national/global medals, and 100% acceptance into top public & world universities.'
                  : 'Klinik olimpiade terpadu, 140+ medali sains nasional/dunia, dan 100% tembus kampus unggulan.'}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-900 hover:text-amber-950 underline underline-offset-4"
            >
              <span>{currentLang === 'en' ? 'Read our full Vision, Mission & Leadership Profile' : 'Pelajari Visi, Misi & Profil Pimpinan Kami'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Flagship GDC Campus Overview Section */}
      <section className="py-16 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 block mb-2">
                {currentLang === 'en' ? 'Flagship Campus Grounds' : 'Kampus Grand Depok City'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
                {currentLang === 'en' ? 'Pribadi Premiere Campus & Boarding Residence' : 'Kampus Modern & Asrama Terpadu Grand Depok City'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('campus-life')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 hover:text-amber-950"
            >
              <span>{currentLang === 'en' ? 'View Full Campus Life & Facilities' : 'Lihat Fasilitas & Asrama Lengkap'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {campusesData.map((campus) => (
              <div 
                key={campus.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video relative bg-stone-200 overflow-hidden">
                    <img 
                      src={campus.image} 
                      alt={campus.name[currentLang]} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-stone-950/75 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                      {campus.badge[currentLang]}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-medium text-stone-900">
                      {campus.name[currentLang]}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {campus.description[currentLang]}
                    </p>
                    <div className="flex items-start gap-1.5 text-xs text-stone-500 pt-1">
                      <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                      <span>{campus.address}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-4">
                  <span className="text-[11px] font-mono text-stone-500">
                    {campus.levels.join(' · ')}
                  </span>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-900 hover:text-amber-950"
                  >
                    <span>{currentLang === 'en' ? 'Directions & Info' : 'Info & Kontak'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Academic Stages Preview */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 block mb-2">
              {currentLang === 'en' ? 'Academic Continuum' : 'Jenjang Pendidikan'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
              {currentLang === 'en' ? 'From Early Childhood to University Readiness' : 'Pendidikan Berkelanjutan dari Usia Dini hingga Universitas'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicPrograms.map((prog) => (
              <div 
                key={prog.id}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-700/50 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-amber-900 font-semibold uppercase">
                    {prog.grades} · {prog.ageGroup}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-stone-900">
                    {prog.name[currentLang]}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {prog.description[currentLang]}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (prog.id === 'kindergarten') onNavigate('academics/kindergarten');
                      else if (prog.id === 'primary') onNavigate('academics/primary');
                      else if (prog.id === 'junior-high') onNavigate('academics/junior-high');
                      else onNavigate('academics/senior-high');
                    }}
                    className="text-xs font-semibold text-amber-900 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{currentLang === 'en' ? 'View Curriculum' : 'Detail Kurikulum'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate('admissions/calculator')}
                    className="text-[11px] font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                  >
                    {currentLang === 'en' ? 'Fee Simulator' : 'Simulasi Biaya'}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            {currentLang === 'en' ? 'Enrollment for Academic Year 2026 / 2027' : 'Penerimaan Peserta Didik Baru (PPDB 2026/2027)'}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal max-w-3xl mx-auto leading-tight">
            {currentLang === 'en'
              ? 'Begin your child\'s transformative journey with Pribadi Premiere.'
              : 'Wujudkan potensi terbaik putra-putri Anda bersama Pribadi Premiere School.'}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {currentLang === 'en'
              ? 'Book a campus tour this Saturday to experience our 1:1 Digital Classrooms and meet our curriculum leaders.'
              : 'Jadwalkan kunjungan kampus setiap hari Sabtu untuk melihat langsung ruang kelas digital dan berkonsultasi dengan tim kurikulum kami.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('admissions')}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-md"
            >
              {currentLang === 'en' ? 'Explore Admissions & Fees' : 'Info Pendaftaran & Simulasi Biaya'}
            </button>
            <button
              onClick={onOpenTour}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-xl transition-colors"
            >
              {currentLang === 'en' ? 'Book Saturday Campus Visit' : 'Jadwalkan Tur Kampus Sabtu'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
