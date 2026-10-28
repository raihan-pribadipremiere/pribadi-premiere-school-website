import React from 'react';
import { Language } from '../types';
import { schoolProfile, facultyProfiles } from '../data/schoolData';
import { 
  Building, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  GraduationCap, 
  Sparkles, 
  HeartHandshake, 
  Quote 
} from 'lucide-react';

interface AboutPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTour: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTour
}) => {
  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              {currentLang === 'en' ? 'About Pribadi Premiere School' : 'Tentang Pribadi Premiere School'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Nurturing intellect and grounded Indonesian character since 1995.'
                : 'Membina kecerdasan akal dan akhlak mulia berkarakter Indonesia sejak 1995.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'Under Yayasan Yenbu Indonesia, Pribadi Premiere School at Grand Depok City represents the vanguard of modern digital education, blending Cambridge academic excellence with profound moral habituation.'
                : 'Di bawah naungan Yayasan Yenbu Indonesia, Pribadi Premiere School di Grand Depok City hadir sebagai pelopor pendidikan digital modern yang memadukan keunggulan akademik Cambridge dengan pembinaan adab berkarakter.'}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Vision & Tagline */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                  {currentLang === 'en' ? 'School Motto' : 'Semboyan Sekolah'}
                </span>
                <h3 className="font-serif text-2xl font-normal text-amber-950 italic">
                  "{schoolProfile.tagline[currentLang]}"
                </h3>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Knowledge is our compass for innovation, while timeless moral values remain our anchor for integrity and societal contribution.'
                    : 'Ilmu pengetahuan menjadi pemandu inovasi, sedangkan nilai-nilai adab luhur menjadi jangkar integritas pengabdian kepada bangsa.'}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-stone-100 border border-stone-200 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {currentLang === 'en' ? 'Our Vision' : 'Visi Sekolah'}
                </span>
                <h3 className="font-serif text-xl font-medium text-stone-900 leading-snug">
                  {schoolProfile.vision[currentLang]}
                </h3>
              </div>
            </div>

            {/* Right: Missions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2 block">
                  {currentLang === 'en' ? 'Strategic Missions' : 'Misi Pendidikan'}
                </span>
                <h2 className="font-serif text-3xl text-stone-900 font-normal">
                  {currentLang === 'en'
                    ? 'Our commitments to every learner and parent'
                    : 'Komitmen kami mendampingi setiap siswa'}
                </h2>
              </div>

              <div className="space-y-4">
                {schoolProfile.missions[currentLang].map((m, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-4"
                  >
                    <span className="w-7 h-7 rounded-lg bg-amber-800 text-amber-50 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-sm text-stone-800 leading-relaxed">
                      {m}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Letter */}
      <section className="py-16 sm:py-20 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-900">
                  <Quote className="w-4 h-4" />
                  <span>{currentLang === 'en' ? 'Head of School Message' : 'Sambutan Pimpinan Sekolah'}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-snug">
                  {currentLang === 'en'
                    ? '"Education at Pribadi Premiere is an enduring partnership to unlock the brilliance within every child."'
                    : '"Pendidikan di Pribadi Premiere adalah kemitraan tulus untuk menumbuhkan potensi terbaik setiap anak."'}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                  <p>
                    {currentLang === 'en'
                      ? 'Welcome to Pribadi Premiere School. For more than three decades, our institutions have stood as pioneers in bilingual and STEM excellence across Indonesia. Through our state-of-the-art Grand Depok City campus, we are taking this legacy further with 1:1 Digital Classrooms and a comprehensive Cambridge continuum.'
                      : 'Selamat datang di Pribadi Premiere School. Selama lebih dari tiga dekade, sekolah-sekolah kami telah menjadi pionir pendidikan dwibahasa dan sains di Indonesia. Melalui kampus modern Grand Depok City, kami melanjutkan dedikasi ini dengan ruang kelas digital 1:1 serta kurikulum Cambridge terintegrasi.'}
                  </p>
                  <p>
                    {currentLang === 'en'
                      ? 'Beyond academic distinction, our highest aspiration is to instill noble character (akhlak mulia). Through our Getting to Know You (GTKY) profiling and one-on-one mentor counseling, we ensure no child walks alone. We look forward to welcoming your family into our community.'
                      : 'Lebih dari sekadar prestasi akademik, cita-cita luhur kami adalah mengokohkan adab dan budi pekerti. Melalui asesmen GTKY dan bimbingan mentor one-on-one, kami memastikan setiap anak didampingi dengan penuh empati.'}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="font-bold text-stone-900 block font-serif text-base">Dr. Hendra Wijaya, M.Ed.</span>
                  <span className="text-xs text-stone-500">Head of School & Academic Director · Yayasan Yenbu Indonesia</span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4 text-xs">
                <h4 className="font-bold uppercase tracking-wider text-stone-900 text-xs">
                  {currentLang === 'en' ? 'Accreditation & Benchmarks' : 'Legalitas & Akreditasi'}
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="font-bold text-amber-900 block">Akreditasi "A" Unggul</span>
                    <span className="text-[11px] text-stone-500">Badan Akreditasi Nasional Sekolah/Madrasah (BAN-SM)</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="font-bold text-amber-900 block">Cambridge International School ID248</span>
                    <span className="text-[11px] text-stone-500">Official Cambridge Assessment Testing & Examination Venue</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="font-bold text-amber-900 block">Satuan Pendidikan Kerjasama (SPK)</span>
                    <span className="text-[11px] text-stone-500">Licensed international curriculum under Kemendikbudristek</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 block mb-2">
              {currentLang === 'en' ? 'Faculty & Mentors' : 'Tenaga Pendidik & Mentor'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
              {currentLang === 'en' ? 'Educators who mentor with heart and scholarship.' : 'Pendidik berdedikasi tinggi membimbing dengan empati.'}
            </h2>
            <p className="mt-2 text-stone-600 text-xs sm:text-sm">
              {currentLang === 'en'
                ? 'Our teaching staff are certified subject specialists, Cambridge curriculum assessors, and dedicated youth mentors.'
                : 'Dewan guru kami terdiri atas pengajar tersertifikasi Cambridge, lulusan perguruan tinggi unggulan, dan pelatih olimpiade berpengalaman.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyProfiles.map((teacher, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-700/40 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-base">
                  {teacher.name.split(' ')[0][0]}{teacher.name.split(' ')[1] ? teacher.name.split(' ')[1][0] : ''}
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-stone-900">
                    {teacher.name}
                  </h4>
                  <p className="text-xs text-amber-900 font-medium mt-0.5">
                    {teacher.role[currentLang]}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-200/60 text-[11px] text-stone-600 space-y-1">
                  <p className="line-clamp-2">🎓 {teacher.education}</p>
                  <p className="text-stone-500 font-mono">⏳ {teacher.experienceYears}+ years experience</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenTour}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors shadow-sm"
            >
              <span>{currentLang === 'en' ? 'Meet Our Faculty on Campus Tour' : 'Temui Guru Kami di Tur Kampus'}</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
