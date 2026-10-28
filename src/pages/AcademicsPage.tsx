import React, { useState } from 'react';
import { Language } from '../types';
import { academicPrograms } from '../data/schoolData';
import { 
  Laptop, 
  BookOpen, 
  Compass, 
  GraduationCap, 
  Check, 
  Sparkles, 
  HeartHandshake, 
  Award, 
  ArrowRight,
  Layers,
  BrainCircuit,
  Search
} from 'lucide-react';

interface AcademicsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenAdmissions: (progId?: string) => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenAdmissions
}) => {
  const [activeLevelId, setActiveLevelId] = useState<string>('primary');
  const activeProg = academicPrograms.find(p => p.id === activeLevelId) || academicPrograms[1];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <GraduationCap className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Page Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              {currentLang === 'en' ? 'Academics & Curricula' : 'Kurikulum & Program Akademik'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Dual Cambridge & National curricula with next-gen digital mastery.'
                : 'Perpaduan Kurikulum Cambridge & Nasional dengan ruang kelas digital mutakhir.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'From early childhood discovery to Cambridge IGCSE and A-Levels, we cultivate inquisitive, bilingual problem solvers empowered by 1-to-1 Chromebook learning and dedicated mentorship.'
                : 'Dari masa usia dini hingga sertifikasi Cambridge IGCSE dan A-Level, kami membina pemikir analitis dwibahasa melalui pembelajaran digital 1:1 Chromebook dan pendampingan personal.'}
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Innovation 1: Digital Classroom (Chromebook 1:1) */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  <Laptop className="w-4 h-4 text-amber-800" />
                  <span>{currentLang === 'en' ? 'Flagship Edutech Program' : 'Program Unggulan Edutech'}</span>
                </div>
                
                <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                  {currentLang === 'en'
                    ? '1-to-1 Digital Classroom: Learning Beyond Heavy Textbooks'
                    : 'Kelas Digital 1:1: Belajar Lebih Cerdas Tanpa Beban Buku Tebal'}
                </h2>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {currentLang === 'en'
                    ? 'At Pribadi Premiere, every student is integrated into a modern digital learning ecosystem utilizing Google for Education Chromebooks. Physical textbooks are seamlessly replaced with interactive simulations, digital laboratory notebooks, and real-time collaborative whiteboards.'
                    : 'Di Pribadi Premiere School, setiap siswa difasilitasi dengan ekosistem belajar digital menggunakan Chromebook. Buku paket konvensional digantikan dengan modul interaktif, simulasi sains virtual, tugas kolaboratif real-time, dan akses materi tanpa batas.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-stone-800 font-medium">
                  <div className="flex items-center gap-2 bg-white/80 p-3 rounded-lg border border-amber-200/60">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Chromebook 1-to-1 Integration</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 p-3 rounded-lg border border-amber-200/60">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Google for Education Security</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 p-3 rounded-lg border border-amber-200/60">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Real-time Formative Analytics</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-stone-200 space-y-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                  {currentLang === 'en' ? 'Key Educational Benefits:' : 'Manfaat Kelas Digital:'}
                </h4>
                <ul className="space-y-2 text-xs text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-800 font-bold">•</span>
                    <span>Ergonomic lightness: No more carrying heavy backpacks filled with encyclopedic textbooks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-800 font-bold">•</span>
                    <span>Self-paced mastery: Rewatch laboratory tutorials and revisit lecture annotations anytime.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-800 font-bold">•</span>
                    <span>Parent visibility: Transparent weekly assignment portals and teacher notes.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Flagship Innovation 2: Character Building & Counseling (GTKY & Mentoring) */}
      <section className="py-16 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 block mb-2">
              {currentLang === 'en' ? 'Personalized Student Development' : 'Bimbingan Karakter & Konseling Pribadi'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              {currentLang === 'en'
                ? 'Getting to Know You (GTKY) & One-on-One Mentoring'
                : 'Program GTKY & Pendampingan One-on-One'}
            </h2>
            <p className="mt-2 text-stone-600 text-xs sm:text-sm leading-relaxed">
              {currentLang === 'en'
                ? 'We believe every learner is unique. Through our proprietary student development system, we map each child\'s cognitive strengths, emotional wellbeing, and career aspirations.'
                : 'Setiap anak memiliki keunikan dan potensi luar biasa. Melalui sistem asesmen dan konseling berjenjang, kami memastikan setiap siswa mendapatkan bimbingan akademik dan penguatan adab yang tepat.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Getting to Know You (GTKY)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Comprehensive psychological diagnostic profiling to identify sensory learning styles (visual, auditory, kinesthetic) and intrinsic motivators.'
                  : 'Asesmen awal untuk memetakan modalitas belajar (visual, auditori, kinestetik), minat bakat, dan karakter psikososial ananda.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                One-on-One Mentor Check-ins
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Bi-weekly dedicated private mentoring sessions between students and certified counselors to discuss personal goals, peer relations, and study discipline.'
                  : 'Sesi temu wicara berkala antara siswa dan konselor/wali kelas untuk mengevaluasi perkembangan belajar, mengurai kendala, serta memupuk motivasi.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Edu Expo & Career Fair
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Annual university fairs hosting admissions officers from UI, ITB, NUS, NTU, and European institutions, guiding students on portfolio submission and scholarships.'
                  : 'Pameran pendidikan tahunan yang mempertemukan siswa langsung dengan perwakilan perguruan tinggi favorit PTN dan luar negeri serta bimbingan beasiswa.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Education Stages Tabs */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 block mb-2">
              {currentLang === 'en' ? 'Education Stages & Curricula' : 'Jenjang Pendidikan & Rincian Kurikulum'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              {currentLang === 'en' ? 'Explore each stage of the academic continuum' : 'Pelajari Setiap Jenjang Pendidikan Kami'}
            </h2>
          </div>

          {/* Selector buttons */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-stone-100 rounded-xl max-w-2xl mb-8">
            {academicPrograms.map((prog) => {
              const isSelected = prog.id === activeLevelId;
              return (
                <button
                  key={prog.id}
                  onClick={() => setActiveLevelId(prog.id)}
                  className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
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

          {/* Active Level Card */}
          <div className="p-8 sm:p-12 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-mono uppercase mb-1">
                    <span>{activeProg.level[currentLang]}</span>
                    <span>·</span>
                    <span>{activeProg.grades}</span>
                    <span>·</span>
                    <span>{activeProg.ageGroup}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-medium text-stone-900">
                    {activeProg.name[currentLang]}
                  </h3>
                  <div className="mt-2 text-xs font-semibold text-amber-900 bg-amber-100/70 border border-amber-300/60 rounded-md p-2.5 inline-block">
                    <span className="text-stone-600 font-normal mr-1">{currentLang === 'en' ? 'Accredited Curriculum Framework:' : 'Kerangka Kurikulum Terakreditasi:'}</span>
                    {activeProg.curriculum}
                  </div>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed">
                  {activeProg.description[currentLang]}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
                    {currentLang === 'en' ? 'Curricular Distinctives:' : 'Keunggulan Pembelajaran:'}
                  </h4>
                  <ul className="space-y-2.5 text-xs text-stone-700">
                    {activeProg.highlights[currentLang].map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Learning Outcomes & Actions */}
              <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-stone-200 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
                    {currentLang === 'en' ? 'Target Competencies & Outcomes:' : 'Target Kompetensi Kelulusan:'}
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {activeProg.outcomes[currentLang].map((out, outIdx) => (
                      <li key={outIdx} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-2">
                  <button
                    onClick={() => onOpenAdmissions(activeProg.id)}
                    className="w-full py-3 px-4 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors shadow-sm text-center"
                  >
                    {currentLang === 'en' ? 'Simulate Tuition for This Level' : 'Simulasi Biaya Jenjang Ini'}
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-2.5 px-4 text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors text-center"
                  >
                    {currentLang === 'en' ? 'Inquire via Admissions WhatsApp' : 'Tanya Jadwal Observasi'}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
