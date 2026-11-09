import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { boardingSchedule } from '../../data/schoolData';
import { Bed, ShieldCheck, Heart, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface BoardingResidencePageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const BoardingResidencePage: React.FC<BoardingResidencePageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'GDC Campus' : 'Kampus GDC', page: 'campus-life/gdc' },
    { label: currentLang === 'en' ? 'Robotics & Labs' : 'Lab Sains & AI', page: 'campus-life/labs' },
    { label: currentLang === 'en' ? 'Boarding Residence' : 'Asrama 24 Jam', page: 'campus-life/boarding', active: true },
    { label: currentLang === 'en' ? 'Sports & Pool' : 'Olahraga & Kolam', page: 'campus-life/sports' },
    { label: currentLang === 'en' ? 'Clubs & Activities' : 'Ekstrakurikuler', page: 'campus-life/clubs' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Campus Life' : 'Fasilitas & Asrama', page: 'campus-life' },
          { label: currentLang === 'en' ? '24h Student Boarding Residence' : 'Asrama Siswa Terpadu 24 Jam' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/assets/aistudio/logo_Pribadi_Premiere_4x4_cm_white-transparent_833fb355.png" 
              alt="Pribadi Premiere Crest" 
              className="h-9 w-auto object-contain"
            />
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Structured Discipline & Nurturing Mentorship</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'A Second Home: 24h Boarding Residence' 
              : 'Asrama Siswa Berkarakter & Mandiri 24 Jam'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Designed for SMP and SMA students. Cultivating independence, camaraderie, and evening academic focus under the loving supervision of resident dormitory educators (Pembina Asrama).'
              : 'Pilihan tepat bagi siswa SMP dan SMA untuk melatih kemandirian, kedisiplinan, salat berjamaah, dan bimbingan belajar malam bersama pembina asrama berdedikasi.'}
          </p>
        </div>
      </section>

      {/* Residence Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
              <Bed className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Comfortable Air-Conditioned Rooms
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Spacious 2 to 4 student bedrooms with individual study desks, wardrobes, ergonomic bedding, and separated male & female buildings.'
                : 'Kamar nyaman ber-AC untuk 2-4 siswa per kamar, meja belajar mandiri, lemari pakaian pribadi, serta gedung asrama putra dan putri yang terpisah aman.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Structured Night Study (Etude)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Mandatory 2-hour quiet evening study guided by academic tutors for homework completion and Olympiad review.'
                : 'Sesi belajar malam (Etude) teratur dipandu tutor akademik untuk penyelesaian tugas sekolah, diskusi sains, dan persiapan ujian.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Nutritious Dining & Laundry
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? '3 wholesome dietitian-planned meals daily, evening nutritious snacks, on-site laundry, and 24/7 security perimeter.'
                : 'Makan bergizi 3 kali sehari bersertifikasi halal, snack buah malam, layanan cuci pakaian (laundry), dan tim keamanan 24 jam.'}
            </p>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm max-w-4xl mx-auto">
          <h3 className="font-serif font-bold text-stone-900 text-xl mb-6 text-center">
            {currentLang === 'en' ? 'Boarding Student Daily Timetable' : 'Jadwal Rutinitas Harian Asrama'}
          </h3>
          <div className="space-y-3">
            {boardingSchedule.map((s, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 bg-stone-50 rounded-xl border border-stone-200/70 text-xs">
                <span className="font-mono font-bold text-amber-900 sm:w-1/4">{s.time}</span>
                <span className="font-semibold text-stone-900 sm:w-1/3">{s.activity[currentLang]}</span>
                <span className="text-stone-500 sm:w-5/12">{s.description[currentLang]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Tour the Student Residence' : 'Lihat Fasilitas Asrama Siswa'}
        </h2>
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={onOpenTourModal}
            className="px-5 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
          >
            {currentLang === 'en' ? 'Book Saturday Residence Tour' : 'Jadwalkan Tur Asrama Hari Sabtu'}
          </button>
        </div>
      </section>
    </div>
  );
};
