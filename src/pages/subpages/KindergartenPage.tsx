import React, { useState } from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { 
  Sparkles, 
  Heart, 
  BookOpen, 
  Smile, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Calendar,
  Layers,
  Palette,
  Sun,
  Award
} from 'lucide-react';

interface KindergartenPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: (programId?: string) => void;
}

export const KindergartenPage: React.FC<KindergartenPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const [activeTier, setActiveTier] = useState<'playgroup' | 'tka' | 'tkb'>('tka');

  const siblingLinks = [
    { label: currentLang === 'en' ? 'Preschool & TK' : 'PAUD & TK', page: 'academics/kindergarten', active: true },
    { label: currentLang === 'en' ? 'Primary (SD)' : 'SD Premiere', page: 'academics/primary' },
    { label: currentLang === 'en' ? 'Junior High (SMP)' : 'SMP Premiere', page: 'academics/junior-high' },
    { label: currentLang === 'en' ? 'Senior High (SMA)' : 'SMA Premiere', page: 'academics/senior-high' },
    { label: currentLang === 'en' ? '1:1 Chromebook' : 'Kelas Digital', page: 'academics/chromebook' },
    { label: currentLang === 'en' ? 'GTKY Assessment' : 'Asesmen Bakat', page: 'academics/gtky' }
  ];

  const tiers = {
    playgroup: {
      name: { en: 'Toddler & Playgroup (Ages 2 – 3)', id: 'Kelompok Bermain / Playgroup (Usia 2 – 3 Tahun)' },
      focus: {
        en: 'Sensory motor discovery, social sharing, emotional self-soothing, and spontaneous joyful inquiry.',
        id: 'Eksplorasi sensori motorik, sosialisasi teman sebaya, kemandirian emosional, dan belajar merespons lingkungan.'
      },
      schedule: '08:00 – 10:30 WIB (3 or 5 days/week)',
      ratio: '1 : 5 Teacher-Child Ratio',
      features: {
        en: [
          'Sensory water & tactile kinetic sand stations',
          'Gentle toilet training and practical handwashing routine',
          'Interactive story circle with large vibrant picture books',
          'Soft indoor gross-motor obstacle course and balance tunnels'
        ],
        id: [
          'Stasiun eksplorasi air, tekstur, dan pasir kinetik aman',
          'Pendampingan toilet training dan pembiasaan cuci tangan mandiri',
          'Lingkaran cerita interaktif dengan buku bergambar besar',
          'Jalur motorik halus dan terowongan keseimbangan busa lembut'
        ]
      }
    },
    tka: {
      name: { en: 'TK A / Kindergarten 1 (Ages 4 – 5)', id: 'Taman Kanak-Kanak A / TK A (Usia 4 – 5 Tahun)' },
      focus: {
        en: 'Natural bilingual English immersion, multi-sensory Jolly Phonics, early numeracy with counting beads, and daily Islamic adab habituation.',
        id: 'Pembiasaan dwibahasa Inggris-Indonesia, pengenalan bunyi huruf (Jolly Phonics), logika angka konkret, dan pembiasaan adab harian.'
      },
      schedule: '07:45 – 11:30 WIB (Monday – Friday)',
      ratio: '1 : 7 Teacher-Child Ratio with Assistant',
      features: {
        en: [
          'Jolly Phonics tactile letters, songs, and multisensory pronunciation',
          'Concrete numeracy with wooden Montessori counting beads and pattern blocks',
          'Character habituation: polite words (Tolong, Maaf, Terima Kasih), doa, and sharing',
          'Outdoor tricycle track, garden discovery, and beginner gymnastics'
        ],
        id: [
          'Pengenalan huruf fonik multisensori, gerak lagu, dan pelafalan alami',
          'Logika matematika konkret dengan manik-manik dan blok geometri kayu',
          'Pembiasaan karakter: 3 kata ajaib, doa harian, dan empati berbagi',
          'Jalur sepeda roda tiga outdoor, berkebun mini, dan senam motorik'
        ]
      }
    },
    tkb: {
      name: { en: 'TK B / Kindergarten 2 (Ages 5 – 6)', id: 'Taman Kanak-Kanak B / TK B (Usia 5 – 6 Tahun)' },
      focus: {
        en: 'Primary school readiness, expressive sentence construction, independent reading curiosity, science experiments, and creative problem solving.',
        id: 'Kesiapan matang menuju SD, kemampuan menyusun kalimat ekspresif, minat baca mandiri, eksperimen sains mini, dan pemecahan masalah.'
      },
      schedule: '07:45 – 12:15 WIB (Monday – Friday)',
      ratio: '1 : 8 Teacher-Child Ratio with Assistant',
      features: {
        en: [
          'Guided early reading and emergent creative writing workshops',
          'Hands-on mini STEM investigations (floating/sinking, plant germination, magnetic forces)',
          'Pencil grip perfection, fine-line scissor coordination, and origami dexterity',
          'Seamless bridge to Cambridge Primary at SD Pribadi Premiere'
        ],
        id: [
          'Membaca terbimbing dan latihan mengekspresikan cerita lewat tulisan/gambar',
          'Eksperimen STEM sederhana (terapung-tenggelam, kecambah, gaya magnet)',
          'Pematangan koordinasi jemari (pencil grip), gunting presisi, dan origami',
          'Jembatan langsung ke Cambridge Primary SD Pribadi Premiere tanpa tes adaptasi'
        ]
      }
    }
  };

  const scheduleItems = [
    { time: '07:30 – 07:50', title: { en: 'Warm Morning Greeting & Sensory Choice Time', id: 'Penyambutan Hangat & Pilihan Main Pagi' }, desc: { en: 'Child checks in, morning greeting ritual, free choice in exploration centers.', id: 'Guru menyambut dengan senyuman dan doa pagi, bermain bebas di pojok sensori.' } },
    { time: '07:50 – 08:30', title: { en: 'Bilingual Circle Time & Adab Habituation', id: 'Circle Time Dwibahasa & Pembiasaan Adab' }, desc: { en: 'Songs, calendar observation, daily prayer/adab focus, and English story sharing.', id: 'Bernyanyi dua bahasa, mengenal cuaca, hafalan doa pendek, dan kisah inspiratif.' } },
    { time: '08:30 – 09:30', title: { en: 'Guided Inquiry & Multi-Sensory Phonics', id: 'Inquiry Terbimbing & Fonik Multisensori' }, desc: { en: 'Small-group teacher station: Jolly Phonics sound exploration and concrete math blocks.', id: 'Sentra bermain bergilir: pengenalan fonik, meronce huruf, dan logika berhitung.' } },
    { time: '09:30 – 10:15', title: { en: 'Wholesome Snack & Outdoor Playground', id: 'Kudapan Sehat & Olah Fisik di Taman Luar' }, desc: { en: 'Table manners practice followed by gross motor play: swings, slides, sand, balance bikes.', id: 'Makan snack bergizi dengan adab makan, dilanjutkan bermain outdoor dan sepeda.' } },
    { time: '10:15 – 11:15', title: { en: 'Creative Art, Music & Mini-STEM Studio', id: 'Kreativitas Seni, Musik & Eksperimen Sains' }, desc: { en: 'Watercolor painting, percussion instruments, clay sculpting, or mini-science wonder.', id: 'Melukis bebas, pengenalan alat musik perkusi, atau eksperimen air dan warna.' } },
    { time: '11:15 – 11:45', title: { en: 'Reflection Circle, Story Book & Pack-Up', id: 'Refleksi Diri, Membaca Bersama & Bersiap Pulang' }, desc: { en: 'Children reflect on today’s joys, pack their own bags, and receive gentle dismissal.', id: 'Anak merapikan barang mandiri, mendengarkan cerita penutup, dan bersiap pulang.' } }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Breadcrumbs */}
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Academics' : 'Jenjang & Kurikulum', page: 'academics' },
          { label: currentLang === 'en' ? 'Preschool & Kindergarten (TK)' : 'PAUD & TK Pribadi Premiere' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      {/* Hero Banner */}
      <section className="bg-linear-to-b from-amber-900 to-amber-950 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/assets/aistudio/logo_Pribadi_Premiere_4x4_cm_white-transparent_833fb355.png" 
              alt="Pribadi Premiere Crest" 
              className="h-9 w-auto object-contain"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{currentLang === 'en' ? 'Early Childhood Education · Ages 2 – 6' : 'Pendidikan Anak Usia Dini · Usia 2 – 6 Tahun'}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Joyful Beginnings: Play-Based Bilingual Kindergarten (TK)' 
              : 'Awal Penuh Keceriaan: TK Pribadi Premiere Berbasis Bermain & Karakter'}
          </h1>

          <p className="text-base sm:text-lg text-amber-100/90 max-w-3xl leading-relaxed mb-8">
            {currentLang === 'en'
              ? 'Providing the sweetest foundation for lifelong curiosity. We blend child-led inquiry, multi-sensory Jolly Phonics, daily bilingual English immersion, and compassionate character (adab) habituation in a secure, nurturing environment at Grand Depok City.'
              : 'Fondasi terindah untuk cinta belajar seumur hidup. Menggabungkan eksplorasi berbasis bermain, fonik multisensori, percakapan dwibahasa Inggris-Indonesia alami, serta pembiasaan adab mulia dalam lingkungan kampus yang aman dan asri di Grand Depok City.'}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenAdmissions('kindergarten')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <span>{currentLang === 'en' ? 'Enroll in TK 2026/2027' : 'Daftar TK PPDB 2026/2027'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenTourModal}
              className="px-6 py-3 bg-amber-900/60 hover:bg-amber-900 text-amber-100 border border-amber-700/80 font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>{currentLang === 'en' ? 'Book a Kindergarten Tour' : 'Jadwalkan Tur Kelas TK'}</span>
            </button>
            <a
              href="https://wa.me/6281232331995?text=Halo%20Pribadi%20Premiere,%20saya%20ingin%20konsultasi%20pendaftaran%20TK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Chat with TK Coordinator' : 'Konsultasi WhatsApp TK'}</span>
            </a>
          </div>

        </div>
      </section>

      {/* 4 Core Educational Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white p-5 rounded-2xl shadow-md border border-stone-200/80 hover:border-amber-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
              <Smile className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-1.5">
              {currentLang === 'en' ? 'Play-Based Inquiry' : 'Belajar Berbasis Bermain'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en' 
                ? 'Children learn best when having fun. Tactile centers spark natural curiosity through sensory discovery, blocks, and dramatic play.'
                : 'Anak menyerap konsep melalui bermain. Sentra eksplorasi sensori, balok kayu, dan drama merangsang imajinasi serta berpikir kritis.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md border border-stone-200/80 hover:border-amber-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-1.5">
              {currentLang === 'en' ? 'Bilingual & Phonics' : 'Dwibahasa & Jolly Phonics'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en' 
                ? 'Daily conversational English and multi-sensory Jolly Phonics build natural articulation and lifelong joy of reading without pressure.'
                : 'Percakapan dwibahasa harian dan fonik terpadu membangun rasa percaya diri berbicara bahasa Inggris dan ketertarikan membaca.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md border border-stone-200/80 hover:border-amber-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-1.5">
              {currentLang === 'en' ? 'Character & Adab' : 'Adab & Pembiasaan Akhlak'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en' 
                ? 'Instilling genuine warmth, table manners, greeting culture, daily short prayers, empathy for peers, and respect for nature.'
                : 'Menanamkan akhlak karimah sejak dini: adab makan, senyum-salam-sapa, doa harian, empati berbagi, dan menyayangi sesama.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md border border-stone-200/80 hover:border-amber-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-3">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-1.5">
              {currentLang === 'en' ? 'Motor Development' : 'Pematangan Motorik Terpadu'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en' 
                ? 'Outdoor tricycle circuits, sand & splash play, plus fine finger dexterity practice preparing hands for effortless writing.'
                : 'Taman bermain outdoor, lintasan sepeda, dan latihan jari jemari dengan playdough & gunting untuk persiapan menulis yang rileks.'}
            </p>
          </div>

        </div>
      </section>

      {/* Age Group Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
            {currentLang === 'en' ? 'Developmental Stages' : 'Tingkatan Kelas TK'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-3">
            {currentLang === 'en' ? 'Tailored to Every Child’s Sensitive Period' : 'Disesuaikan dengan Masa Emas Tumbuh Kembang'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {currentLang === 'en'
              ? 'Our early childhood classes are designed around developmental milestones, ensuring children never feel rushed.'
              : 'Kurikulum kami mengikuti ritme perkembangan anak, menumbuhkan rasa percaya diri tanpa rasa cemas atau terpaksa.'}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTier('playgroup')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTier === 'playgroup'
                ? 'bg-amber-800 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {currentLang === 'en' ? 'Toddler & Playgroup (2–3 yo)' : 'Playgroup (2–3 Tahun)'}
          </button>
          <button
            onClick={() => setActiveTier('tka')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTier === 'tka'
                ? 'bg-amber-800 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {currentLang === 'en' ? 'TK A (4–5 yo)' : 'TK A (4–5 Tahun)'}
          </button>
          <button
            onClick={() => setActiveTier('tkb')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTier === 'tkb'
                ? 'bg-amber-800 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {currentLang === 'en' ? 'TK B (5–6 yo)' : 'TK B (5–6 Tahun)'}
          </button>
        </div>

        {/* Selected Tier Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            <div className="lg:col-span-1">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
                {currentLang === 'en' ? 'Class Profile' : 'Profil Kelas'}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1 mb-2">
                {tiers[activeTier].name[currentLang]}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                {tiers[activeTier].focus[currentLang]}
              </p>

              <div className="space-y-2.5 text-xs text-stone-700 border-t border-stone-100 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="font-semibold text-stone-900">{currentLang === 'en' ? 'Hours:' : 'Waktu:'}</span>
                  <span>{tiers[activeTier].schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="font-semibold text-stone-900">{currentLang === 'en' ? 'Class Ratio:' : 'Rasio Guru:'}</span>
                  <span>{tiers[activeTier].ratio}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="font-semibold text-stone-900">{currentLang === 'en' ? 'Campus:' : 'Lokasi:'}</span>
                  <span>Grand Depok City Early Years Wing</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100">
                <button
                  onClick={() => onOpenAdmissions('kindergarten')}
                  className="w-full py-2.5 px-4 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer text-center block"
                >
                  {currentLang === 'en' ? 'Inquire for this Age Group' : 'Daftar untuk Usia Ini'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200/80">
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-800" />
                <span>{currentLang === 'en' ? 'Key Learning Experiences & Highlights' : 'Aktivitas Utama & Pengalaman Belajar'}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tiers[activeTier].features[currentLang].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-stone-200/60 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-800 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-950 flex items-center justify-between flex-wrap gap-2">
                <span>
                  <strong>{currentLang === 'en' ? 'Seamless Primary Bridge:' : 'Jembatan ke SD:'}</strong>{' '}
                  {currentLang === 'en' 
                    ? 'TK B students at Pribadi Premiere receive automatic priority admission into SD Pribadi Premiere.' 
                    : 'Lulusan TK B Pribadi Premiere otomatis mendapatkan prioritas dan kesinambungan kurikulum menuju SD.'}
                </span>
                <button
                  onClick={() => onNavigate('academics/primary')}
                  className="text-amber-900 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>{currentLang === 'en' ? 'View SD Program' : 'Lihat Program SD'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Daily Schedule Walkthrough */}
      <section className="bg-stone-100/90 py-16 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
              {currentLang === 'en' ? 'Predictable & Loving Routine' : 'Rutinitas Harian yang Menyenangkan'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-2">
              {currentLang === 'en' ? 'A Typical Day at TK Pribadi Premiere' : 'Satu Hari di TK Pribadi Premiere'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              {currentLang === 'en'
                ? 'Structured yet flexible flow balancing focused learning with outdoor movement and social nourishment.'
                : 'Jadwal seimbang antara fokus belajar, gerak aktif di luar ruang, serta pembiasaan makan dan istirahat mandiri.'}
            </p>
          </div>

          <div className="space-y-3">
            {scheduleItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs hover:shadow transition-shadow"
              >
                <div className="flex items-center gap-3 sm:w-1/3">
                  <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-mono text-xs font-bold text-amber-900 block">{item.time}</span>
                    <span className="font-serif font-bold text-stone-900 text-sm">{item.title[currentLang]}</span>
                  </div>
                </div>

                <div className="sm:w-2/3 text-xs text-stone-600 sm:border-l sm:border-stone-200 sm:pl-4">
                  {item.desc[currentLang]}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Facilities & Safety Measures */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
            {currentLang === 'en' ? 'Safety & Nurturing Space' : 'Fasilitas & Keamanan Anak'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1 mb-2">
            {currentLang === 'en' ? 'Designed Exclusively for Little Explorers' : 'Dirancang Khusus untuk Kenyamanan si Kecil'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {currentLang === 'en'
              ? 'From rounded furniture corners to rubberized playground floors, your child’s physical and psychological safety comes first.'
              : 'Dari perabot bersudut tumpul hingga lantai bermain karet aman benturan, keselamatan dan kesehatan buah hati adalah prioritas utama.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              {currentLang === 'en' ? 'Light-Filled Sensory Classrooms' : 'Ruang Kelas Terang & Higienis'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Air-conditioned rooms with high ceilings, non-toxic organic materials, low wooden shelves, and open reading nooks.'
                : 'Kelas ber-AC dengan ventilasi optimal, material kayu ramah anak tanpa cat beracun, rak rendah mandiri, dan pojok baca santai.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              {currentLang === 'en' ? 'Dedicated Early Years Playground' : 'Taman Bermain Khusus TK'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Fenced outdoor space separated from senior students. Includes sensory sandpit, child balance bicycles, and shock-absorbing flooring.'
                : 'Area bermain luar ruang terpisah dari siswa jenjang atas. Dilengkapi pasir kinetik alam, sepeda roda tiga, dan lantai busa peredam.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              {currentLang === 'en' ? 'Dedicated Nurse & Child Sanitation' : 'Perawat Siaga & Sanitasi Khusus'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Child-sized toilets and sinks to foster independent hygiene, coupled with an on-site pediatric registered medical nurse.'
                : 'Toilet dan wastafel ukuran mini untuk membiasakan higienitas mandiri, serta perawat medis jaga yang terlatih menangani anak kecil.'}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-amber-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            {currentLang === 'en' 
              ? 'Give Your Child the Best Start in Education' 
              : 'Berikan Fondasi Terbaik untuk Masa Depan si Kecil'}
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 max-w-2xl mx-auto mb-6">
            {currentLang === 'en'
              ? 'Enrollment is open for Toddler, TK A, and TK B. Schedule a private observation tour with our kindergarten teachers this week.'
              : 'Pendaftaran gelombang PPDB 2026/2027 telah dibuka untuk Toddler, TK A, dan TK B. Jadwalkan tur dan trial class bersama dewan guru kami.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenAdmissions('kindergarten')}
              className="px-6 py-3 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-all cursor-pointer shadow-md"
            >
              {currentLang === 'en' ? 'Register for TK PPDB 2026/2027' : 'Daftar TK PPDB 2026/2027'}
            </button>
            <button
              onClick={onOpenTourModal}
              className="px-6 py-3 bg-amber-950/70 text-amber-100 border border-amber-600/70 font-semibold rounded-xl text-xs sm:text-sm hover:bg-amber-950 transition-all cursor-pointer"
            >
              {currentLang === 'en' ? 'Schedule Saturday Campus Tour' : 'Jadwalkan Tur Kampus Sabtu'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
