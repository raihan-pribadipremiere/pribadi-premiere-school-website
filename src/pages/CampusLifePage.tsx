import React from 'react';
import { Language } from '../types';
import { 
  Building2, 
  Bed, 
  Waves, 
  Microchip, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Activity
} from 'lucide-react';

interface CampusLifePageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTour: () => void;
}

export const CampusLifePage: React.FC<CampusLifePageProps> = ({
  currentLang,
  onNavigate,
  onOpenTour
}) => {
  const campusCards = [
    {
      page: 'campus-life/gdc',
      badge: currentLang === 'en' ? '4,000 m² Campus' : 'Lahan 4.000 m²',
      title: currentLang === 'en' ? 'Grand Depok City Premiere Campus' : 'Kampus Modern Grand Depok City',
      desc: currentLang === 'en'
        ? 'A modern, purpose-built sanctuary featuring smart air-conditioned classrooms, acoustic music studios, and lush green open lawns.'
        : 'Lingkungan kampus modern yang asri dan aman, dilengkapi ruang kelas cerdas ber-AC, studio musik kedap suara, dan area terbuka hijau.',
      highlights: [
        '4,000 m² Dedicated Educational Complex',
        currentLang === 'en' ? 'Smart Air-Conditioned Classrooms' : 'Ruang Kelas Cerdas Ber-AC',
        currentLang === 'en' ? 'Secure Perimeter & CCTV System' : 'Sistem Keamanan Terpadu 24 Jam'
      ],
      cta: currentLang === 'en' ? 'Explore GDC Campus Grounds →' : 'Lihat Fasilitas Kampus GDC →',
      icon: Building2
    },
    {
      page: 'campus-life/labs',
      badge: currentLang === 'en' ? 'STEM & AI' : 'Riset & Sains',
      title: currentLang === 'en' ? 'Robotics & Science Laboratories' : 'Laboratorium Robotika, AI & Sains',
      desc: currentLang === 'en'
        ? 'Research-grade physics, chemistry, and biology wet labs alongside an advanced mechatronics and coding studio.'
        : 'Laboratorium sains basah berstandar internasional Cambridge dan studio perakitan robotika serta pemrograman AI.',
      highlights: [
        currentLang === 'en' ? 'Cambridge Certified Science Wet Labs' : 'Lab Sains Cambridge Resmi',
        currentLang === 'en' ? 'VEX & Arduino Robotics Hub' : 'Studio Robotika & Mikrokontroler',
        currentLang === 'en' ? 'High-Performance Coding Workstations' : 'Komputer Riset Spek Tinggi'
      ],
      cta: currentLang === 'en' ? 'Explore Science & AI Labs →' : 'Lihat Laboratorium Riset →',
      icon: Microchip
    },
    {
      page: 'campus-life/boarding',
      badge: currentLang === 'en' ? '24h Mentorship' : 'Asrama Terpadu',
      title: currentLang === 'en' ? '24h Student Boarding Residence' : 'Asrama Siswa Mandiri 24 Jam',
      desc: currentLang === 'en'
        ? 'A loving second home for SMP and SMA students. Independent living, quiet night study (etude), and character mentoring.'
        : 'Pilihan asrama bagi siswa SMP & SMA. Melatih kemandirian, salat berjamaah, belajar malam teratur, dan makan bergizi 3x sehari.',
      highlights: [
        currentLang === 'en' ? 'Separated Male & Female Quarters' : 'Gedung Asrama Putra & Putri Terpisah',
        currentLang === 'en' ? 'Guided Night Study (Etude)' : 'Bimbingan Belajar Malam Terarah',
        currentLang === 'en' ? 'Dietitian Halal Dining 3x/Day' : 'Makan Bergizi 3x Sehari & Laundry'
      ],
      cta: currentLang === 'en' ? 'Explore Boarding Life →' : 'Pelajari Asrama Siswa →',
      icon: Bed
    },
    {
      page: 'campus-life/sports',
      badge: currentLang === 'en' ? 'Aquatics & Arena' : 'Akuatik & Arena',
      title: currentLang === 'en' ? 'Semi-Olympic Pool & Sports Complex' : 'Kolam Renang Semi-Olimpik & Sarana Olahraga',
      desc: currentLang === 'en'
        ? 'A 25-meter covered aquatic center, professional basketball and futsal arena, badminton courts, and archery range.'
        : 'Pusat akuatik 25 meter beratap, lapangan multifungsi basket dan futsal indoor standar, serta arena panahan.',
      highlights: [
        '25m Semi-Olympic Covered Pool',
        currentLang === 'en' ? 'Certified Swimming Lifeguards' : 'Pengawasan Lifeguard Bersertifikat',
        currentLang === 'en' ? 'Indoor Basketball & Futsal Arena' : 'Lapangan Basket & Futsal Indoor'
      ],
      cta: currentLang === 'en' ? 'Explore Sports Complex →' : 'Lihat Fasilitas Olahraga →',
      icon: Waves
    },
    {
      page: 'campus-life/clubs',
      badge: currentLang === 'en' ? '20+ Clubs' : '20+ Komunitas',
      title: currentLang === 'en' ? '20+ Student Clubs & Extracurriculars' : '20+ Ekstrakurikuler & Organisasi Siswa',
      desc: currentLang === 'en'
        ? 'Unleashing passion in robotics, debate, archery, music orchestra, Model United Nations, and creative arts.'
        : 'Wadah pengembangan minat bakat di bidang robotika, debat bahasa Inggris, seni musik, panahan, pramuka, dan tahfidz.',
      highlights: [
        currentLang === 'en' ? 'STEM, Arts, Sports & Humanities' : 'Klub Sains, Seni, Olahraga & Bahasa',
        currentLang === 'en' ? 'Model UN & Debate Society' : 'Model United Nations & English Club',
        currentLang === 'en' ? 'Leadership & Entrepreneurship' : 'Latihan Kepemimpinan Organisasi'
      ],
      cta: currentLang === 'en' ? 'View All Student Clubs →' : 'Lihat Daftar Ekstrakurikuler →',
      icon: Activity
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              {currentLang === 'en' ? 'Campus Life & Facilities · Overview Hub' : 'Fasilitas & Kehidupan Kampus · Pusat Informasi'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Where learning feels inspiring, healthy, and boundless.'
                : 'Lingkungan Kampus yang Menginspirasi, Asri & Mendorong Prestasi.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'Located exclusively in Grand Depok City, our modern campus unites smart academic facilities, science research labs, Olympic sports, and a warm student boarding residence. Explore our specific campus facilities below.'
                : 'Berlokasi eksklusif di Grand Depok City, kampus Pribadi Premiere menyediakan fasilitas belajar cerdas, laboratorium riset Cambridge, kolam renang semi-olimpik, dan asrama terpadu. Pilih topik di bawah untuk melihat rincian setiap fasilitas.'}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Cards Gateway Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
            {currentLang === 'en' ? 'Campus Infrastructure & Activities' : 'Fasilitas & Komunitas Kampus'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-3">
            {currentLang === 'en' ? 'Explore Specific Campus Facilities' : 'Pusat Informasi Fasilitas Kampus'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {currentLang === 'en'
              ? 'Select any facility or activity below to view detailed photos, room specifications, and weekly timetables.'
              : 'Pilih fasilitas atau kegiatan di bawah ini untuk melihat spesifikasi ruangan, jadwal kegiatan, dan foto lengkap.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusCards.map((card, idx) => {
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

      {/* Tour CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'See Our Campus in Person' : 'Kunjungi Kampus Kami di Hari Sabtu'}
        </h2>
        <p className="text-xs sm:text-sm text-amber-100 mb-6 max-w-xl mx-auto">
          {currentLang === 'en' ? 'Book a guided walkthrough of our classrooms, labs, pool, and student residence.' : 'Daftarkan keluarga Anda untuk mengikuti tur keliling kelas, laboratorium, kolam renang, dan asrama.'}
        </p>
        <button
          onClick={onOpenTour}
          className="px-6 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
        >
          {currentLang === 'en' ? 'Book Saturday Guided Walk' : 'Jadwalkan Tur Kampus Sabtu'}
        </button>
      </section>

    </div>
  );
};
