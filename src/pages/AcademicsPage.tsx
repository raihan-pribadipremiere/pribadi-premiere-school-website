import React from 'react';
import { Language } from '../types';
import { 
  Laptop, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  Layers,
  BrainCircuit,
  Smile,
  ShieldCheck,
  CheckCircle2
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
  const academicGatewayCards = [
    {
      id: 'kindergarten',
      page: 'academics/kindergarten',
      badge: currentLang === 'en' ? 'Ages 2 – 6 · Play-Based' : 'Usia 2 – 6 Thn · Sentra Bermain',
      title: currentLang === 'en' ? 'Preschool & Kindergarten (TK)' : 'PAUD & TK Pribadi Premiere',
      subtitle: currentLang === 'en' ? 'Toddler, Playgroup, TK A & TK B' : 'Toddler, Playgroup, TK A & TK B',
      desc: currentLang === 'en'
        ? 'Play-based bilingual learning with multisensory Jolly Phonics, concrete numeracy, adab habituation, and dedicated early years playground.'
        : 'Stimulasi tumbuh kembang anak berbasis bermain, pengenalan fonik dwibahasa alami, pembiasaan adab harian, dan pematangan motorik.',
      highlights: [
        currentLang === 'en' ? 'Jolly Phonics & Daily English' : 'Jolly Phonics & Bilingual Harian',
        currentLang === 'en' ? 'Sensory & Sand Exploration' : 'Eksplorasi Sensori & Pasir Kinetik',
        currentLang === 'en' ? 'Adab & Islamic Habituation' : 'Pembiasaan Adab & Doa Harian'
      ],
      cta: currentLang === 'en' ? 'Explore Kindergarten Program →' : 'Lihat Program TK & PAUD →',
      icon: Smile,
      color: 'bg-amber-500/10 text-amber-900 border-amber-200'
    },
    {
      id: 'primary',
      page: 'academics/primary',
      badge: currentLang === 'en' ? 'Grades 1 – 6 · Dual Curricula' : 'Kelas 1 – 6 · Kurikulum Ganda',
      title: currentLang === 'en' ? 'Primary School (SD Pribadi Premiere)' : 'SD Pribadi Premiere',
      subtitle: 'Cambridge Primary + Kurikulum Merdeka',
      desc: currentLang === 'en'
        ? 'Solidifying analytical logic and moral character through Cambridge Primary English, Math & Science alongside national project-based learning.'
        : 'Membangun dasar kecerdasan analitis dan karakter berakhlak mulia melalui Cambridge Primary (Math, Science, English) dan Kurikulum Merdeka.',
      highlights: [
        currentLang === 'en' ? 'Cambridge Primary Checkpoint' : 'Ujian Cambridge Primary Checkpoint',
        currentLang === 'en' ? 'Hands-on Science Labs' : 'Praktikum Sains di Laboratorium',
        currentLang === 'en' ? 'Tahfidz & Character Routines' : 'Bimbingan Tahfidz & Budi Pekerti'
      ],
      cta: currentLang === 'en' ? 'Explore Primary (SD) Program →' : 'Lihat Program SD Premiere →',
      icon: BookOpen,
      color: 'bg-blue-500/10 text-blue-900 border-blue-200'
    },
    {
      id: 'junior-high',
      page: 'academics/junior-high',
      badge: currentLang === 'en' ? 'Grades 7 – 9 · Cambridge Lower' : 'Kelas 7 – 9 · Cambridge Lower Sec.',
      title: currentLang === 'en' ? 'Junior High School (SMP Premiere)' : 'SMP Pribadi Premiere',
      subtitle: 'Cambridge Lower Secondary & STEM Research',
      desc: currentLang === 'en'
        ? 'Navigating early adolescence with academic rigor, early research papers, science Olympiad clinics, and optional 24h student boarding.'
        : 'Mengembangkan daya nalar remaja melalui riset sains, persiapan Cambridge Checkpoint, pembinaan intensif olimpiade (OSN), serta opsi asrama 24 jam.',
      highlights: [
        currentLang === 'en' ? 'Cambridge Lower Sec. Checkpoint' : 'Cambridge Lower Sec. Checkpoint',
        currentLang === 'en' ? 'Python & STEM Coding Studio' : 'Koding Python & Studio Robotika',
        currentLang === 'en' ? '24h Boarding Residence Option' : 'Pilihan Program Asrama 24 Jam'
      ],
      cta: currentLang === 'en' ? 'Explore Junior High (SMP) →' : 'Lihat Program SMP Premiere →',
      icon: Layers,
      color: 'bg-emerald-500/10 text-emerald-900 border-emerald-200'
    },
    {
      id: 'senior-high',
      page: 'academics/senior-high',
      badge: currentLang === 'en' ? 'Grades 10 – 12 · A-Levels & PTN' : 'Kelas 10 – 12 · Cambridge & PTN',
      title: currentLang === 'en' ? 'Senior High School (SMA Premiere)' : 'SMA Pribadi Premiere',
      subtitle: 'Cambridge IGCSE, A-Levels & PTN Pathway',
      desc: currentLang === 'en'
        ? 'Direct gateway to top Indonesian public universities (UI, ITB, UGM) and global institutions via Cambridge A-Levels and intensive SNBT coaching.'
        : 'Gerbang menuju perguruan tinggi terbaik dunia dan PTN favorit melalui kurikulum Cambridge A-Levels dan klinik bimbingan intensif SNBT.',
      highlights: [
        currentLang === 'en' ? '100% University Acceptance' : '100% Kelulusan ke PTN & Kampus Global',
        currentLang === 'en' ? 'Cambridge AS & A-Levels ID248' : 'Pusat Ujian Cambridge Resmi ID248',
        currentLang === 'en' ? 'Individual College Counseling' : 'Konseling Masuk Kuliah 1-on-1'
      ],
      cta: currentLang === 'en' ? 'Explore Senior High (SMA) →' : 'Lihat Program SMA Premiere →',
      icon: GraduationCap,
      color: 'bg-purple-500/10 text-purple-900 border-purple-200'
    },
    {
      id: 'chromebook',
      page: 'academics/chromebook',
      badge: currentLang === 'en' ? '1:1 Edutech Ecosystem' : 'Ekosistem Digital 1:1',
      title: currentLang === 'en' ? '1:1 Managed Chromebook Classroom' : 'Kelas Digital 1:1 Chromebook',
      subtitle: 'Google Workspace for Education & Cambridge E-Books',
      desc: currentLang === 'en'
        ? 'Individual school-managed Chromebooks replacing heavy paper books with interactive learning, cloud collaboration, and child-safe firewalls.'
        : 'Setiap siswa dibekali Chromebook terkelola institusional untuk menggantikan buku berat menjadi modul interaktif, riset awan, dan internet aman.',
      highlights: [
        currentLang === 'en' ? 'Child-Safe Content Filtering' : 'Sistem Filter Internet & Anti Distraksi',
        currentLang === 'en' ? 'Google Classroom Real-Time' : 'Pengumpulan Tugas & Feedback Instan',
        currentLang === 'en' ? 'Lightweight Backpacks' : 'Tas Sekolah Lebih Ringan & Sehat'
      ],
      cta: currentLang === 'en' ? 'Explore Digital Classroom →' : 'Pelajari Kelas Digital →',
      icon: Laptop,
      color: 'bg-amber-500/10 text-amber-900 border-amber-200'
    },
    {
      id: 'gtky',
      page: 'academics/gtky',
      badge: currentLang === 'en' ? 'Personalized Profiling' : 'Pemetaan Minat Bakat',
      title: currentLang === 'en' ? 'GTKY Talent Assessment & Mentoring' : 'Asesmen Bakat GTKY & Konseling',
      subtitle: 'Getting to Know You · Tailored Education',
      desc: currentLang === 'en'
        ? 'Diagnostic cognitive assessment identifying each child’s innate learning style, emotional intelligence, and career trajectory.'
        : 'Pemetaan psikologis dan gaya belajar personal untuk memastikan setiap siswa dibimbing sesuai potensi terbesarnya.',
      highlights: [
        currentLang === 'en' ? 'Diagnostic Cognitive Profiling' : 'Tes Psikologi & Gaya Belajar',
        currentLang === 'en' ? 'Individual Growth Plan (IGP)' : 'Rencana Tumbuh Kembang Pribadi',
        currentLang === 'en' ? 'Bi-Weekly Mentorship Check-Ins' : 'Bimbingan Konseling Rutin 1-on-1'
      ],
      cta: currentLang === 'en' ? 'Explore GTKY Profiling →' : 'Pelajari Asesmen GTKY →',
      icon: BrainCircuit,
      color: 'bg-rose-500/10 text-rose-900 border-rose-200'
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Gateway Hero */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              {currentLang === 'en' ? 'Academic Continuum · Overview Hub' : 'Jenjang & Kurikulum · Ikhtisar Akademik'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'From Early Childhood to University Entrance.'
                : 'Pendidikan Berkesinambungan: Dari Usia Dini Hingga Kampus Impian.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'Explore our comprehensive academic journey below. Select any stage to review its full curriculum, daily schedule, and dedicated facilities.'
                : 'Pribadi Premiere School menyediakan kesinambungan kurikulum terpadu mulai dari TK, SD, SMP, hingga SMA di Grand Depok City. Pilih topik di bawah untuk membaca rincian lengkap.'}
            </p>
          </div>
        </div>
      </section>

      {/* Continuity Flow Banner */}
      <section className="bg-amber-950 text-amber-200 py-6 px-4 border-b border-amber-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4 text-xs font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-bold text-white uppercase tracking-wider">
              {currentLang === 'en' ? 'The Complete Pribadi Continuum:' : 'Kesinambungan Pendidikan:'}
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto text-xs text-amber-100 font-mono">
            <button onClick={() => onNavigate('academics/kindergarten')} className="hover:text-white cursor-pointer underline">TK (Ages 2–6)</button>
            <span>→</span>
            <button onClick={() => onNavigate('academics/primary')} className="hover:text-white cursor-pointer underline">SD (Grades 1–6)</button>
            <span>→</span>
            <button onClick={() => onNavigate('academics/junior-high')} className="hover:text-white cursor-pointer underline">SMP (Grades 7–9)</button>
            <span>→</span>
            <button onClick={() => onNavigate('academics/senior-high')} className="hover:text-white cursor-pointer underline">SMA (Grades 10–12)</button>
            <span>→</span>
            <span className="text-amber-400 font-bold">Top Global Universities & PTN</span>
          </div>
        </div>
      </section>

      {/* Overview Cards Gateway Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
            {currentLang === 'en' ? 'Explore Our Academic Pillars' : 'Pilihan Program & Jenjang'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-3">
            {currentLang === 'en' ? 'Dedicated Sub-Programs' : 'Pusat Informasi Jenjang Pendidikan'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {currentLang === 'en'
              ? 'Click any card below to open its dedicated page with complete course outlines, daily routines, and educator profiles.'
              : 'Klik pada kartu program di bawah untuk membuka halaman tersendiri dengan silabus lengkap, jadwal belajar, dan rincian fasilitas.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicGatewayCards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
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

                  <h3 className="font-serif font-bold text-stone-900 text-xl mb-1 group-hover:text-amber-900 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-amber-900/80 font-medium mb-3">
                    {card.subtitle}
                  </p>
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

      {/* Admissions Callout */}
      <section className="bg-amber-900 text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            {currentLang === 'en' ? 'Ready to Begin Your Educational Journey?' : 'Siap Menjadi Bagian dari Pribadi Premiere?'}
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 mb-6">
            {currentLang === 'en'
              ? 'Enrollment is open for all grades (TK, SD, SMP, SMA) for Academic Year 2026/2027.'
              : 'Pendaftaran gelombang PPDB 2026/2027 dibuka untuk seluruh jenjang dengan kuota terbatas.'}
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={() => onOpenAdmissions()}
              className="px-6 py-3 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 cursor-pointer shadow-md"
            >
              {currentLang === 'en' ? 'Register Online Now' : 'Daftar PPDB Online'}
            </button>
            <button
              onClick={() => onNavigate('admissions/calculator')}
              className="px-6 py-3 bg-amber-950/70 text-amber-100 border border-amber-600 font-semibold rounded-xl text-xs sm:text-sm hover:bg-amber-950 cursor-pointer"
            >
              {currentLang === 'en' ? 'Estimate Tuition Investment' : 'Simulasi Biaya Masuk'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
