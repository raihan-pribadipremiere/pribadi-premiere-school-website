import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Quote, Sparkles, ArrowRight, Calendar } from 'lucide-react';

interface HeadmasterPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const HeadmasterPage: React.FC<HeadmasterPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Vision & Mission' : 'Visi & Misi', page: 'about/vision' },
    { label: currentLang === 'en' ? 'Foundation Heritage' : 'Yayasan Yenbu', page: 'about/heritage' },
    { label: currentLang === 'en' ? 'Head of School Letter' : 'Sambutan Kepala', page: 'about/headmaster', active: true },
    { label: currentLang === 'en' ? 'Accreditations' : 'Akreditasi', page: 'about/accreditations' },
    { label: currentLang === 'en' ? 'Faculty & Mentors' : 'Dewan Guru', page: 'about/faculty' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'About Us' : 'Profil Sekolah', page: 'about' },
          { label: currentLang === 'en' ? 'Letter from Head of School' : 'Sambutan Kepala Sekolah' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Leadership Message</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' ? 'Welcome to Pribadi Premiere School' : 'Sambutan Hangat Kepala Sekolah'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'A message to prospective parents and students on building resilient minds and compassionate hearts in an evolving world.'
              : 'Pesan untuk calon orang tua dan siswa tentang komitmen kami membangun ketajaman intelektual dan budi pekerti luhur.'}
          </p>
        </div>
      </section>

      {/* Letter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm relative">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-6">
            <Quote className="w-6 h-6" />
          </div>

          <div className="prose prose-stone max-w-none text-xs sm:text-sm text-stone-700 leading-relaxed space-y-4">
            <p className="font-serif text-base sm:text-lg text-stone-900 font-bold">
              {currentLang === 'en' 
                ? 'Assalamu’alaikum Warahmatullahi Wabarakatuh & Warm Greetings,' 
                : 'Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera untuk Kita Semua,'}
            </p>

            <p>
              {currentLang === 'en'
                ? 'Education is more than the transfer of curriculum facts; it is the sacred responsibility of shaping human beings who will lead tomorrow with empathy, wisdom, and conviction. At Pribadi Premiere School Grand Depok City, we take pride in offering a continuous journey from Early Childhood (TK) through High School (SMA).'
                : 'Pendidikan sejatinya bukan sekadar transfer ilmu pengetahuan, melainkan amanah mulia membentuk manusia seutuhnya yang kelak memimpin dengan kebijaksanaan, empati, dan integritas. Di Pribadi Premiere School Grand Depok City, kami menghadirkan jenjang pendidikan berkesinambungan mulai dari Taman Kanak-Kanak (TK) hingga Sekolah Menengah Atas (SMA).'}
            </p>

            <p>
              {currentLang === 'en'
                ? 'In our classrooms, you will observe our students working with 1:1 Chromebooks, conducting advanced experiments in Cambridge science laboratories, and engaging in deep analytical discussions. Yet, just as importantly, you will see them pausing together for daily congregation prayers, learning kindness and humility, and caring for one another in our boarding residence.'
                : 'Di ruang kelas kami, para siswa belajar dengan perangkat Chromebook terkelola 1:1, melakukan praktikum sains di laboratorium berstandar internasional, serta berlatih berpikir kritis. Di saat yang sama, pembiasaan karakter luhur, salat berjamaah harian, serta rasa saling menghargai senantiasa menjadi nafas kehidupan di lingkungan sekolah dan asrama kami.'}
            </p>

            <p>
              {currentLang === 'en'
                ? 'Whether your family is starting with our joyful bilingual Kindergarten, joining our rigorous Cambridge Primary and SMP programs, or preparing for world-class universities in SMA, our faculty is dedicated to unlocking the highest potential within your child.'
                : 'Apakah putra-putri Anda memulai petualangan belajarnya di TK ramah anak kami, memasuki jenjang SD dan SMP berstandar Cambridge, atau mempersiapkan kelulusan ke kampus impian di jenjang SMA, seluruh dewan guru dan konselor kami siap mendampingi setiap langkah tumbuh kembang mereka.'}
            </p>

            <div className="pt-8 border-t border-stone-100 mt-8 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-serif font-bold text-base text-stone-900">Dr. H. Muhammad Arifin, M.Ed.</p>
                <p className="text-xs text-stone-500">
                  {currentLang === 'en' ? 'Head of School · Pribadi Premiere School' : 'Kepala Sekolah · Pribadi Premiere School'}
                </p>
                <p className="text-[11px] text-amber-900 font-medium">Grand Depok City, Jawa Barat</p>
              </div>

              <button
                onClick={onOpenTourModal}
                className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-300" />
                <span>{currentLang === 'en' ? 'Meet Us on Saturday Tour' : 'Jadwalkan Tur Sabtu'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
