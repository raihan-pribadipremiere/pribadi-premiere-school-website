import React from 'react';
import { Language } from '../types';
import { facultyProfiles, schoolProfile } from '../data/schoolData';
import { GraduationCap, Award, Quote, CheckCircle } from 'lucide-react';

interface FacultySectionProps {
  currentLang: Language;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ currentLang }) => {
  return (
    <section className="py-16 sm:py-20 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head of School Welcome Banner */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 lg:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                <GraduationCap className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Leadership Message' : 'Sambutan Pimpinan Sekolah'}</span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-snug">
                {currentLang === 'en'
                  ? '"We believe true education nurtures not only scientific mastery, but noble character and empathy."'
                  : '"Pendidikan sejati tidak sekadar mencetak kecerdasan intelektual, tetapi juga mengokohkan adab, integritas, dan kepekaan sosial."'}
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'At Sekolah Pribadi Depok, our educators are mentors who guide every student to uncover their individual talents. Through personalized attention, rigorous Cambridge benchmarks, and a supportive boarding community, we cultivate students who are ready to make a profound difference in Indonesia and worldwide.'
                  : 'Di Sekolah Pribadi Depok, para pendidik mendampingi setiap siswa mengenali potensi istimewanya. Melalui bimbingan personal, standar Cambridge teruji, dan ekosistem boarding yang suportif, kami mengantarkan generasi yang berdaya saing global tanpa kehilangan akar budaya bangsa.'}
              </p>

              <div className="pt-2 text-xs">
                <span className="font-bold text-stone-900 block font-serif text-base">Dr. Hendra Wijaya, M.Ed.</span>
                <span className="text-stone-500">Head of School & Academic Director · Pribadi Bilingual School</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-50 p-6 rounded-xl border border-stone-200/80 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                {currentLang === 'en' ? 'Institutional Standing' : 'Komitmen Mutu Sekolah'}
              </h3>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>100% Certified Subject Educators & Native Speakers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Continuous Cambridge Professional Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>Dedicated Mentoring for National Science Olympiad (OSN)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Faculty Grid */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            {currentLang === 'en' ? 'Academic Leadership' : 'Dewan Guru & Koordinator Kurikulum'}
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
            {currentLang === 'en' ? 'Experienced mentors guiding every student\'s growth.' : 'Pendidik berdedikasi membimbing potensi setiap siswa.'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyProfiles.map((teacher, idx) => (
            <div key={idx} className="p-5 bg-white rounded-xl border border-stone-200 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-amber-900 uppercase font-semibold">
                  {teacher.department}
                </span>
                <h4 className="font-serif text-base font-bold text-stone-900 mt-1">
                  {teacher.name}
                </h4>
                <p className="text-xs text-stone-600 font-medium mt-1">
                  {teacher.role[currentLang]}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 space-y-1">
                <div className="line-clamp-2">🎓 {teacher.education}</div>
                <div className="font-mono text-stone-600">{teacher.experienceYears}+ years experience</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
