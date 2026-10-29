import React from 'react';
import { Language } from '../types';
import { schoolProfile } from '../data/schoolData';
import { 
  Building, 
  Award, 
  CheckCircle2, 
  Compass, 
  Users, 
  ArrowRight,
  Sparkles, 
  Quote,
  ShieldCheck,
  History
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
  const aboutGatewayCards = [
    {
      page: 'about/vision',
      badge: currentLang === 'en' ? 'Core Identity' : 'Identitas Utama',
      title: currentLang === 'en' ? 'Vision, Mission & Motto' : 'Visi, Misi & Semboyan',
      desc: currentLang === 'en'
        ? 'Explore the foundational ethos that steers our academic curriculum, holistic character coaching, and global aspirations.'
        : 'Prinsip panduan yang mendasari seluruh ikhtiar pendidikan, integritas akademik, dan pembinaan budi pekerti luhur di Pribadi Premiere.',
      highlights: [
        'Leading with Knowledge, Guiding with Values',
        currentLang === 'en' ? 'Holistic Cambridge + Merdeka Philosophy' : 'Filosofi Cambridge & Karakter Luhur',
        currentLang === 'en' ? '4 Core Strategic Missions' : '4 Misi Strategis Pendidikan'
      ],
      cta: currentLang === 'en' ? 'View Vision & Missions →' : 'Lihat Visi & Misi →',
      icon: Compass
    },
    {
      page: 'about/heritage',
      badge: currentLang === 'en' ? 'Since 1995' : 'Sejak 1995',
      title: currentLang === 'en' ? 'Yayasan Yenbu Indonesia Heritage' : 'Profil Yayasan Yenbu Indonesia',
      desc: currentLang === 'en'
        ? 'Learn about our founding legacy, three decades of educational pioneering, and our commitment to modern boarding in Grand Depok City.'
        : 'Tiga dekade dedikasi Yayasan Yenbu memajukan pendidikan sains, bilingual, dan asrama terpadu modern di Indonesia.',
      highlights: [
        currentLang === 'en' ? '30+ Years Educational Legacy' : 'Pengalaman 30+ Tahun di Indonesia',
        currentLang === 'en' ? 'Dedicated Grand Depok City Grounds' : 'Pengembangan Kampus Premiere GDC',
        currentLang === 'en' ? 'Philanthropic Scholarship Trust' : 'Komitmen Beasiswa Sains Nasional'
      ],
      cta: currentLang === 'en' ? 'Read Foundation Heritage →' : 'Baca Profil Yayasan →',
      icon: History
    },
    {
      page: 'about/headmaster',
      badge: currentLang === 'en' ? 'Leadership' : 'Kepemimpinan',
      title: currentLang === 'en' ? 'Letter from Head of School' : 'Sambutan Kepala Sekolah',
      desc: currentLang === 'en'
        ? 'A message from Dr. H. Muhammad Arifin on empowering 21st-century thinkers while cultivating timeless moral character.'
        : 'Amanah kepemimpinan dari Kepala Sekolah menyambut calon orang tua dan siswa dalam merajut prestasi dan akhlak mulia.',
      highlights: [
        'Dr. H. Muhammad Arifin, M.Ed.',
        currentLang === 'en' ? 'Empowering Every Unique Potential' : 'Pendidikan Berbasis Keunikan Anak',
        currentLang === 'en' ? 'Open Dialogue with Parents' : 'Kolaborasi Harmonis dengan Orang Tua'
      ],
      cta: currentLang === 'en' ? 'Read Leadership Letter →' : 'Baca Sambutan Lengkap →',
      icon: Quote
    },
    {
      page: 'about/accreditations',
      badge: currentLang === 'en' ? 'Credentials' : 'Legalitas & Mutu',
      title: currentLang === 'en' ? 'Accreditations (BAN-SM & Cambridge)' : 'Akreditasi "A" & Cambridge ID248',
      desc: currentLang === 'en'
        ? 'Official verified accreditations from Kemendikbudristek BAN-SM and Cambridge Assessment International Education ID248.'
        : 'Legalitas resmi operasional dan predikat Akreditasi "A" Unggul serta pusat ujian mandiri Cambridge International.',
      highlights: [
        'Akreditasi "A" Unggul BAN-SM',
        'Cambridge International School ID248',
        currentLang === 'en' ? 'Complete Government Licenses' : 'Izin Resmi Dinas Pendidikan'
      ],
      cta: currentLang === 'en' ? 'View Credentials →' : 'Lihat Dokumen Akreditasi →',
      icon: ShieldCheck
    },
    {
      page: 'about/faculty',
      badge: currentLang === 'en' ? '1:10 Ratio' : 'Rasio 1:10',
      title: currentLang === 'en' ? 'Faculty & Character Mentors' : 'Dewan Guru & Konselor Asrama',
      desc: currentLang === 'en'
        ? 'Meet our certified subject specialists, Olympiad master coaches, bilingual teachers, and licensed psychological counselors.'
        : 'Profil para pendidik profesional berstandar Cambridge, master trainer olimpiade, serta tim konselor dan pembina asrama.',
      highlights: [
        currentLang === 'en' ? 'Cambridge Certified Instructors' : 'Pendidik Tersertifikasi Cambridge',
        currentLang === 'en' ? 'Master Olympiad Trainers' : 'Pelatih Juara Olimpiade Sains',
        currentLang === 'en' ? 'Dedicated Guidance Counselors' : 'Konselor Psikologi & Pembina Asrama'
      ],
      cta: currentLang === 'en' ? 'Meet the Faculty Directory →' : 'Lihat Profil Guru & Pelatih →',
      icon: Users
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              {currentLang === 'en' ? 'School Profile & Leadership · Overview Hub' : 'Profil Sekolah & Yayasan · Pusat Informasi'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Building intellectual stature and noble values since 1995.'
                : 'Membina kecerdasan akal dan budi pekerti luhur sejak 1995.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'Pribadi Premiere School Grand Depok City represents the vanguard of modern education under Yayasan Yenbu Indonesia. Explore our institutional philosophy, history, credentials, and faculty below.'
                : 'Pribadi Premiere School di Grand Depok City memadukan keunggulan akademik Cambridge dengan pembinaan adab berkarakter. Telusuri visi, sejarah yayasan, legalitas akreditasi, dan dewan guru kami di bawah ini.'}
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-white border-b border-stone-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-900 block">1995</span>
            <span className="text-xs text-stone-600">{currentLang === 'en' ? 'Foundation Established' : 'Tahun Berdiri Yayasan'}</span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-900 block">Akreditasi A</span>
            <span className="text-xs text-stone-600">{currentLang === 'en' ? 'Highest BAN-SM Grade' : 'Predikat BAN-SM Unggul'}</span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-900 block">ID248</span>
            <span className="text-xs text-stone-600">{currentLang === 'en' ? 'Cambridge Centre' : 'Cambridge Registered'}</span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-900 block">4,000 m²</span>
            <span className="text-xs text-stone-600">{currentLang === 'en' ? 'Grand Depok City Campus' : 'Lahan Kampus Modern GDC'}</span>
          </div>
        </div>
      </section>

      {/* Gateway Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
            {currentLang === 'en' ? 'Institutional Profile' : 'Sub-Halaman Profil'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-3">
            {currentLang === 'en' ? 'Explore Specific Topics' : 'Pilih Topik Pembahasan'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {currentLang === 'en'
              ? 'Select any section below to view detailed institutional documents, leadership letters, or teacher directories.'
              : 'Pilih bagian di bawah ini untuk membaca surat pimpinan, dokumen akreditasi, atau rekam jejak dewan guru kami.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutGatewayCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-stone-200 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between p-7 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 px-3 py-1 rounded-full border border-stone-200">
                      {card.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-amber-800" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-stone-900 text-xl mb-2 group-hover:text-amber-900 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed mb-6">
                    {card.desc}
                  </p>

                  <div className="space-y-2 border-t border-stone-100 pt-4 mb-6">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate(card.page)}
                  className="w-full py-2.5 px-4 bg-stone-100 hover:bg-amber-800 hover:text-white text-stone-900 font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-amber-800 group-hover:text-white"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tour Invite */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Visit Pribadi Premiere School in Person' : 'Kunjungi Pribadi Premiere School Grand Depok City'}
        </h2>
        <p className="text-xs sm:text-sm text-amber-100 mb-6 max-w-xl mx-auto">
          {currentLang === 'en' ? 'Our doors are open every Saturday for personalized guided walkthroughs.' : 'Pintu kami terbuka setiap Sabtu untuk kunjungan keluarga dan konsultasi kurikulum.'}
        </p>
        <button
          onClick={onOpenTour}
          className="px-6 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
        >
          {currentLang === 'en' ? 'Book Saturday Campus Walk' : 'Jadwalkan Tur Kampus Sabtu'}
        </button>
      </section>

    </div>
  );
};
