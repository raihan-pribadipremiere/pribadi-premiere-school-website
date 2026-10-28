import React from 'react';
import { Language } from '../types';
import { OlympiadPlacementsSection } from '../components/OlympiadPlacementsSection';
import { Trophy, Award, Sparkles, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

interface AchievementsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenAdmissions: () => void;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenAdmissions
}) => {
  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              {currentLang === 'en' ? 'Hall of Fame & Scholarships' : 'Prestasi Juara & Beasiswa Sains'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Celebrating 140+ national & global science medals and world university placements.'
                : 'Membanggakan 140+ medali olimpiade sains dan alumni di universitas terbaik dunia.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'Our students represent Indonesia on international scientific stages, supported by specialized faculty research laboratories and university alumnus mentorship.'
                : 'Siswa-siswi kami aktif mengukir prestasi mewakili Indonesia di kancah olimpiade sains dunia, didampingi pembina olimpiade profesional dan fasilitas laboratorium teruji.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Olympiad & Placements Interactive Section */}
      <OlympiadPlacementsSection
        currentLang={currentLang}
        onOpenAdmissions={onOpenAdmissions}
      />

      {/* Science Olympiad Mentorship Camp Breakdown */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 block mb-2">
              {currentLang === 'en' ? 'The Olympiad Training Ecosystem' : 'Ekosistem Pembinaan Juara OSN'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              {currentLang === 'en'
                ? 'How we coach students from foundational concepts to international gold.'
                : 'Metode pembinaan intensif dari dasar konsep hingga podium internasional.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Talent Scouting & Diagnostic
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Early screening identifies students with strong analytical, spatial, and logical problem-solving instincts across grades 4 to 10.'
                  : 'Penjaringan dini untuk mengidentifikasi daya nalar analitis, spasial, dan logika matematika siswa sejak jenjang SD hingga SMA.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Weekly Olympiad Clinics & Labs
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Intensive problem-solving seminars, laboratory experimental drills, and peer debate in physics, chemistry, biology, math, and informatics.'
                  : 'Klinik pemecahan soal tingkat lanjut, praktikum laboratorium terarah, serta bedah soal OSN dan olimpiade internasional secara rutin.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Alumni & University Mentors
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Past international gold medalists and university lecturers from ITB and UI provide one-on-one masterclasses before national finals.'
                  : 'Pendampingan langsung oleh alumni peraih medali olimpiade dunia dan dosen perguruan tinggi terkemuka menjelang babak final.'}
              </p>
            </div>
          </div>

          {/* Scholarship Call to Action */}
          <div className="mt-12 p-8 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-medium text-amber-950">
                {currentLang === 'en' ? 'Are you an Olympiad Medalist or Top Achiever?' : 'Apakah Anda Peraih Medali Olimpiade Sains atau Juara Kelas?'}
              </h3>
              <p className="text-xs text-stone-700 max-w-2xl">
                {currentLang === 'en'
                  ? 'Apply for our Science Olympiad Scholarship with up to 100% full tuition & boarding support.'
                  : 'Daftarkan diri Anda dalam seleksi Beasiswa Sains Pribadi Premiere dengan subsidi SPP dan asrama hingga 100%.'}
              </p>
            </div>
            <button
              onClick={onOpenAdmissions}
              className="shrink-0 px-6 py-3 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors shadow-sm"
            >
              {currentLang === 'en' ? 'Register for Scholarship Test' : 'Daftar Tes Beasiswa'}
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
