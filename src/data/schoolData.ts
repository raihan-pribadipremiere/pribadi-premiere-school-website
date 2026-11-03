import { 
  AcademicProgram, 
  FacilityItem, 
  NewsPost, 
  AcademicEvent, 
  TeacherProfile,
  CampusLocation,
  OlympiadAchievement,
  UniversityDestination,
  BoardingScheduleItem
} from '../types';


export const schoolProfile = {
  name: 'Pribadi Premiere School',
  networkName: 'Pribadi Bilingual Boarding & Day School',
  foundation: 'Yayasan Yenbu Indonesia',
  tagline: {
    en: 'Leading with Knowledge, Guiding with Values',
    id: 'Leading with Knowledge, Guiding with Values'
  },
  vision: {
    en: 'To cultivate a generation of noble character, academic distinction, global competitiveness, and profound Indonesian cultural roots.',
    id: 'Mewujudkan generasi yang berkarakter mulia, berprestasi, berdaya saing, berwawasan global, serta berlandaskan budaya Indonesia.'
  },
  missions: {
    en: [
      'Elevate student personality and character in a balanced manner across both religious and social dimensions.',
      'Enhance academic and non-academic achievements at institutional, regional, national, and international levels.',
      'Prepare students to transition into world-class higher education through high-quality pedagogy and modern digital technology.',
      'Equip students with diverse competencies aligned with their unique interests, talents, and future aspirations.',
      'Cultivate sincere compassion, mutual respect, patriotism, and love for the Unitary State of the Republic of Indonesia.'
    ],
    id: [
      'Meningkatkan kualitas kepribadian siswa secara seimbang dalam aspek religius maupun sosial.',
      'Meningkatkan prestasi akademik dan non-akademik baik di tingkat sekolah, regional, nasional, maupun internasional.',
      'Mempersiapkan siswa untuk melanjutkan pendidikan ke jenjang yang lebih tinggi melalui sistem pembelajaran berkualitas dan pemanfaatan teknologi modern.',
      'Membekali siswa dengan berbagai keterampilan sesuai minat dan bakat mereka.',
      'Menumbuhkan rasa cinta kasih kepada sesama, bangsa, dan Negara Kesatuan Republik Indonesia.'
    ]
  },
  accreditation: 'Akreditasi "A" Unggul BAN-SM & Cambridge International ID248',
  foundedYear: 1995,
  premiereFoundedYear: 2023,
  npsn: {
    sma: '70043757',
    smp: '70044693',
    cambridgeCentre: 'ID248'
  },
  socialMedia: {
    instagram: '@pribadipremiereschool',
    instagramUrl: 'https://instagram.com/pribadipremiereschool',
    youtube: '@sekolahpribadidepok',
    youtubeUrl: 'https://youtube.com/@sekolahpribadidepok',
    website: 'https://pribadipremiere.sch.id'
  },
  locationGdc: {
    address: 'Jl. Boulevard Grand Depok City, Kel. Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412',
    phone: '+62 812-3233-1995',
    whatsapp: '+62 812-3233-1995',
    contactPerson: 'Ms. Dinda (Admissions Office)',
    secondaryPhone: '+62 812-9290-0095',
    email: 'info.premiere@pribadidepok.sch.id',
    admissionsEmail: 'admission.premiere@pribadidepok.sch.id',
    adminEmail: 'admin.premiere@pribadidepok.sch.id',
    operatingHours: 'Senin – Jumat: 07:30 – 16:00 WIB, Sabtu: 08:30 – 14:00 WIB'
  },
  metrics: [
    { value: '100%', label: { en: 'High School Alumni University Entry', id: 'Kelulusan Alumni SMA ke PTN/Global' }, context: 'Graduates accepted to UI, ITB, UGM & top universities' },
    { value: '1 : 10', label: { en: 'Student-Teacher Ratio', id: 'Rasio Guru & Murid di Kelas' }, context: 'Personalized attention for every pupil' },
    { value: '140+', label: { en: 'Student Olympiad Medals', id: 'Medali Siswa Olimpiade Sains' }, context: 'National OSN & International competitions' },
    { value: '4,000 m²', label: { en: 'Purpose-Built School Grounds', id: 'Lahan Kampus Sekolah Modern' }, context: 'Classrooms, science labs, pool & sports arena' }
  ]
};

export const academicPrograms: AcademicProgram[] = [
  {
    id: 'kindergarten',
    name: {
      en: 'Preschool & Kindergarten (TK Pribadi Premiere)',
      id: 'Taman Kanak-Kanak (TK Pribadi Premiere)'
    },
    level: {
      en: 'Early Childhood Education',
      id: 'Pendidikan Anak Usia Dini (PAUD/TK)'
    },
    grades: 'Playgroup & TK A / B',
    ageGroup: '3 – 6 Years Old',
    curriculum: 'Montessori-Inspired Approach + Early Phonics & Bilingual Immersion',
    description: {
      en: 'Nurturing joyful exploration, sensory coordination, foundational literacy, and gentle moral habituation in a warm, child-centered environment.',
      id: 'Menumbuhkan keceriaan belajar, sensori motorik, literasi dwibahasa dini, serta pembiasaan adab dan kemandirian dalam lingkungan yang hangat dan aman.'
    },
    highlights: {
      en: [
        'Interactive sensory learning corners and outdoor discovery gardens',
        'Bilingual English-Indonesian natural conversation daily',
        'Montessori practical life exercises and character habituation',
        'Fun early math, phonics, and expressive music & movement',
        'Dedicated pediatric clinic and certified early childhood educators'
      ],
      id: [
        'Pojok eksplorasi sensori dan taman bermain ramah anak',
        'Pembiasaan percakapan dwibahasa Inggris-Indonesia sejak dini',
        'Stimulasi kemandirian (practical life) dan pendidikan akhlak mulia',
        'Pengenalan logika matematika menyenangkan, fonik, dan seni musik',
        'Tenaga pendidik tersertifikasi PAUD dan klinik kesehatan anak'
      ]
    },
    outcomes: {
      en: ['Confident verbal communication', 'Joy of learning & social empathy', 'Fine motor coordination', 'Smooth transition to primary school'],
      id: ['Percaya diri berkomunikasi dua bahasa', 'Rasa ingin tahu dan empati sosial tinggi', 'Kematangan motorik dan fokus belajar', 'Kesiapan matang menuju Sekolah Dasar']
    },
    iconName: 'BookOpen'
  },
  {
    id: 'primary',
    name: {
      en: 'Primary School (SD Pribadi Premiere)',
      id: 'Sekolah Dasar (SD Pribadi Premiere)'
    },
    level: {
      en: 'Primary Education',
      id: 'Pendidikan Dasar'
    },
    grades: 'Grades 1 – 6',
    ageGroup: '6 – 12 Years Old',
    curriculum: 'Kurikulum Merdeka + Cambridge Primary (English, Mathematics & Science)',
    description: {
      en: 'Fostering innate curiosity, character excellence, literacy, and foundational STEM concepts through an engaging bilingual learning atmosphere.',
      id: 'Menumbuhkan rasa ingin tahu alami, akhlak mulia, literasi, serta penguasaan dasar sains dan matematika melalui lingkungan bilingual yang interaktif.'
    },
    highlights: {
      en: [
        'Bilingual instruction in core science and mathematics',
        'Daily character education and habituation of noble values',
        'Early coding, robotics, and creative maker labs',
        'Cambridge Primary Checkpoint assessment benchmarks',
        'Active club activities: swimming, archery, coding, traditional dance'
      ],
      id: [
        'Pengantar dwibahasa untuk sains dan matematika',
        'Pendidikan karakter dan pembiasaan adab harian',
        'Eksplorasi coding usia dini, robotika, dan maker lab',
        'Standar evaluasi Cambridge Primary Checkpoint',
        'Ekstrakurikuler aktif: renang, panahan, robotic, seni musik'
      ]
    },
    outcomes: {
      en: ['Fluent English communication', 'Strong mathematical intuition', 'Confidence in public speaking', 'Respectful moral character'],
      id: ['Kemampuan komunikasi dwi-bahasa yang luwes', 'Fondasi logika sains & matematika kuat', 'Percaya diri dan berkarakter mulia', 'Kemandirian belajar']
    },
    iconName: 'BookOpen'
  },
  {
    id: 'junior-high',
    name: {
      en: 'Junior High School (SMP Pribadi)',
      id: 'Sekolah Menengah Pertama (SMP Pribadi)'
    },
    level: {
      en: 'Lower Secondary',
      id: 'Pendidikan Menengah Pertama'
    },
    grades: 'Grades 7 – 9',
    ageGroup: '12 – 15 Years Old',
    curriculum: 'Cambridge Lower Secondary + Kurikulum Merdeka Terintegrasi',
    description: {
      en: 'Developing disciplined critical thinkers, scientific problem solvers, and bilingual communicators prepared for high-caliber secondary challenges.',
      id: 'Mengembangkan pemikir kritis yang disiplin, periset muda yang tanggap masalah, dan komunikator internasional berintegritas tinggi.'
    },
    highlights: {
      en: [
        'Science Olympiad (OSN) and Mathematics coaching tracks',
        'Intensive English & TOEFL Junior preparation programs',
        'Hands-on experimental science laboratory research',
        'Optional structured boarding / dormitory character program',
        'Model United Nations & leadership debate clubs'
      ],
      id: [
        'Program pembinaan intensif Olimpiade Sains Nasional (OSN)',
        'Pengayaan bahasa Inggris akademik & TOEFL Junior',
        'Praktikum riset sains terapan di laboratorium modern',
        'Pilihan program asrama (boarding) pembinaan akhlak & disiplin',
        'Klub kepemimpinan, debat bahasa Inggris, dan robotics'
      ]
    },
    outcomes: {
      en: ['National science competition finalists', 'Cambridge Lower Secondary Checkpoint distinction', 'Independent analytical mindset'],
      id: ['Prestasi kompetisi riset dan sains tingkat nasional', 'Sertifikasi Cambridge Lower Secondary', 'Kemandirian dan nalar kritis tinggi']
    },
    iconName: 'Compass'
  },
  {
    id: 'senior-high',
    name: {
      en: 'Senior High School (SMA Pribadi)',
      id: 'Sekolah Menengah Atas (SMA Pribadi)'
    },
    level: {
      en: 'Upper Secondary & Pre-University',
      id: 'Pendidikan Menengah Atas'
    },
    grades: 'Grades 10 – 12',
    ageGroup: '15 – 18 Years Old',
    curriculum: 'Kurikulum Merdeka + Cambridge IGCSE & International AS/A-Levels',
    description: {
      en: 'Rigorous pre-university academic pathways, research mentorship, college counseling for Ivy League, Russell Group, and top Indonesian universities (ITB, UI, UGM).',
      id: 'Jalur pre-university bereputasi, bimbingan riset ilmiah, serta konseling perguruan tinggi terkemuka dunia dan PTN favorit (UI, ITB, UGM).'
    },
    highlights: {
      en: [
        'Dual academic pathways: Cambridge IGCSE / A-Levels & UTBK PTN Prep',
        '1-on-1 university application advisory and portfolio development',
        'Advanced physics, chemistry, biology, and computer science labs',
        'Full boarding option with academic night tutorials and mentoring',
        'Over 140 national & international competition medals in the past 5 years'
      ],
      id: [
        'Dua jalur persiapan: Cambridge AS/A-Levels & Sukses UTBK-SNBT PTN',
        'Bimbingan portofolio dan konsultasi beasiswa perguruan tinggi',
        'Laboratorium fisika, kimia, biologi, dan komputasi terkini',
        'Pilihan program asrama dengan bimbingan malam intensif',
        'Rekam jejak 140+ medali kompetisi nasional dan internasional'
      ]
    },
    outcomes: {
      en: ['Admissions into world-class universities', 'High Cambridge A-Level honors', 'Lifelong ethical leadership and teamwork skills'],
      id: ['Diterima di universitas unggulan dalam & luar negeri', 'Sertifikat Cambridge A-Level berstandar internasional', 'Kepemimpinan beretika']
    },
    iconName: 'GraduationCap'
  }
];

export const facilitiesData: FacilityItem[] = [
  {
    id: 'stem-lab',
    title: {
      en: 'Advanced STEM & Robotics Innovation Center',
      id: 'Pusat Inovasi Robotika & Laboratorium STEM'
    },
    category: {
      en: 'Academic Laboratories',
      id: 'Laboratorium Akademik'
    },
    description: {
      en: 'Equipped with electronic testing stations, Arduino & Raspberry Pi kits, 3D prototyping printers, and precision optics for scientific discovery.',
      id: 'Dilengkapi stasiun uji elektronika, perangkat mikrokontroler, printer 3D, dan instrumen optik presisi untuk riset terapan peserta didik.'
    },
    image: '/src/assets/images/school_stem_laboratory_1793156854859.jpg',
    specs: {
      en: ['Dual 3D Printers', '32 Workstations', 'Olympiad Research Bench', 'High-Speed Fiber Connection'],
      id: ['Printer 3D Presisi', '32 Stasiun Kerja', 'Meja Riset Khusus OSN', 'Jaringan Fiber Optik Khusus']
    }
  },
  {
    id: 'library-commons',
    title: {
      en: 'Multimedia Library & Academic Learning Commons',
      id: 'Perpustakaan Multimedia & Ruang Belajar Terpadu'
    },
    category: {
      en: 'Learning Resource Center',
      id: 'Pusat Sumber Belajar'
    },
    description: {
      en: 'Over 12,000 physical volumes, subscriptions to Cambridge digital academic journals, comfortable ergonomic study pods, and collaborative seminar rooms.',
      id: 'Koleksi lebih dari 12.000 judul buku, akses jurnal internasional Cambridge, ruang diskusi kedap suara, dan area baca ergonomis yang hangat.'
    },
    image: '/src/assets/images/school_library_study_1793156869186.jpg',
    specs: {
      en: ['12,000+ Cataloged Titles', 'Digital Journal Subscriptions', 'Soundproof Discussion Pods', 'Lounge Reading Zones'],
      id: ['12.000+ Koleksi Buku', 'Akses Jurnal Cambridge Digital', 'Ruang Diskusi Kolaboratif', 'Pojok Baca Santai']
    }
  },
  {
    id: 'sports-complex',
    title: {
      en: 'Indoor Gymnasium & Multi-Purpose Sports Arena',
      id: 'Gelanggang Olahraga & Seni Serbaguna'
    },
    category: {
      en: 'Athletics & Performing Arts',
      id: 'Olahraga & Seni Pertunjukan'
    },
    description: {
      en: 'Professional maple wood basketball and badminton courts, elevated spectator gallery, and full acoustic staging for school theatrical assemblies.',
      id: 'Lapangan basket dan bulutangkis lantai kayu standar internasional, tribun penonton, serta tata panggung dan akustik untuk pentas seni sekolah.'
    },
    image: '/src/assets/images/school_arts_sports_1793156884514.jpg',
    specs: {
      en: ['Standard Hardwood Basketball Court', '3 Badminton Courts', 'Retractable Theater Stage', 'Locker & Shower Facilities'],
      id: ['Lantai Kayu Standar FIBA', '3 Lapangan Bulutangkis', 'Panggung Pertunjukan Teater', 'Ruang Ganti & Bilas Lengkap']
    }
  },
  {
    id: 'campus-grounds',
    title: {
      en: 'Bilingual Campus Grounds & Modern Boarding Dormitory',
      id: 'Kawasan Kampus Terpadu & Asrama Modern'
    },
    category: {
      en: 'Campus Infrastructure',
      id: 'Infrastruktur Kampus'
    },
    description: {
      en: 'Spanning over landscaped green open courtyards with 24/7 biometric security, separate male and female dormitories, nutritious dining halls, and prayer spaces.',
      id: 'Lansekap hijau asri dengan pengawasan keamanan 24 jam, asrama putra dan putri terpisah ber-AC, kantin sehat higienis, dan masjid kampus representatif.'
    },
    image: '/src/assets/images/school_campus_exterior_1793156837942.jpg',
    specs: {
      en: ['Biometric Access Control', 'Hygienic Catered Dining', 'Resident Mentors on Duty', 'Green Courtyard Gardens'],
      id: ['Akses Keamanan Biometrik', 'Katering Sehat 3 Kali Sehari', 'Pembina Asrama Berdedikasi', 'Taman Hijau Terbuka']
    }
  }
];

export const sampleNewsPosts: NewsPost[] = [
  {
    id: 'news-akreditasi-a',
    title: 'Congrats! Sekolah Pribadi Premiere Resmi Terakreditasi "A" dari Badan Akreditasi Nasional',
    slug: 'sekolah-pribadi-premiere-terakreditasi-a-ban-sm',
    excerpt: 'Pribadi Premiere School resmi mengantongi predikat Akreditasi "A" (Unggul) dari BAN-SM untuk jenjang SMP dan SMA, mengukuhkan standar mutu pembelajaran internasional.',
    content: `Grand Depok City, Sukmajaya — Sekolah Pribadi Premiere secara resmi memperoleh predikat Akreditasi "A" (Unggul) dari Badan Akreditasi Nasional (BAN-SM) untuk jenjang Sekolah Menengah Pertama (SMP) dan Sekolah Menengah Atas (SMA).

Pencapaian bergengsi ini menjadi bukti komitmen berkelanjutan seluruh civitas akademika Pribadi Premiere School di bawah naungan Yayasan Yenbu Indonesia dalam menghadirkan ekosistem pendidikan berstandar tinggi. Asesmen akreditasi mencakup evaluasi menyeluruh terhadap delapan Standar Nasional Pendidikan, termasuk implementasi Kurikulum Merdeka yang diperkaya standar Cambridge International (Centre ID248), kualifikasi tenaga pendidik, kelengkapan sarana prasarana modern seluas 4.000 m², serta pembinaan karakter siswa yang berintegritas.

"Pencapaian Akreditasi A ini merupakan buah kerja keras seluruh guru, manajemen, orang tua, dan siswa kami. Hal ini memvalidasi bahwa sistem pembelajaran bilingual, integrasi teknologi Digital Classroom, serta pembinaan akhlak di Pribadi Premiere berada pada standar mutu tertinggi," ungkap Direktur Akademik Pribadi Premiere School.`,
    date: 'Januari 2026',
    category: 'Akreditasi',
    author: 'Tim Humas & Akademik',
    image: '/src/assets/images/school_campus_exterior_1793156837942.jpg',
    readTime: '3 min read',
    source: 'native'
  },
  {
    id: 'news-digital-classroom',
    title: 'Digital Classroom: Transformasi Pembelajaran Modern Berbasis 1:1 Chromebook',
    slug: 'digital-classroom-inovasi-chromebook-pribadi-premiere',
    excerpt: 'Melihat lebih dekat bagaimana Pribadi Premiere School memanfaatkan perangkat Chromebook dan Google Workspace for Education dalam keseharian belajar siswa.',
    content: `Teknologi telah menjadi katalis utama dalam mentransformasi cara siswa mengeksplorasi ilmu pengetahuan. Di Pribadi Premiere School, inovasi Digital Classroom dihadirkan dengan membekali setiap peserta didik dengan perangkat Chromebook pribadi yang terhubung dengan infrastruktur jaringan berkecepatan tinggi di seluruh area kampus Grand Depok City.

Buku cetak konvensional kini diperkaya dengan modul digital interaktif, simulasi sains laboratorium virtual, dan platform kolaborasi real-time Google Classroom. Guru bertindak sebagai fasilitator yang memandu siswa menganalisis data, memprogram kode logika, dan menyusun presentasi multimedia.

Sistem ini didukung dengan manajemen perangkat Google Workspace for Education yang aman, menyaring konten edukatif, serta melatih kedisiplinan digital sejak jenjang dasar hingga menengah atas.`,
    date: 'Februari 2026',
    category: 'Teknologi & Kurikulum',
    author: 'Koordinator Edutech',
    image: '/src/assets/images/school_stem_laboratory_1793156854859.jpg',
    readTime: '4 min read',
    source: 'native'
  },
  {
    id: 'news-pribadi-membaca',
    title: 'Pribadi Membaca: Menumbuhkan Budaya Literasi & Wawasan Kritis Siswa di Era Digital',
    slug: 'pribadi-membaca-gerakan-literasi-sekolah',
    excerpt: 'Gerakan literasi "Pribadi Membaca" mendorong siswa mendalami buku bermutu, artikel sains, dan jurnal Cambridge di Learning Commons modern.',
    content: `Di tengah arus deras informasi digital dan media sosial, kemampuan membaca mendalam (deep reading) dan berpikir kritis menjadi aset berharga bagi generasi masa depan. Program "Pribadi Membaca" merupakan inisiatif literasi unggulan di Pribadi Premiere School yang dirancang untuk membiasakan siswa menikmati buku sebagai jendela dunia.

Setiap pagi sebelum sesi akademik dimulai, siswa meluangkan waktu 15–20 menit untuk membaca buku fiksi, non-fiksi, ensiklopedia sains, maupun sastra pilihan di ruang kelas dan Multimedia Learning Commons sekolah.

Tidak hanya membaca, siswa juga diajak mempresentasikan intisari bacaan mereka dalam sesi book review mingguan, melatih keberanian public speaking, memperkaya kosakata dwibahasa, serta mengasah empati terhadap berbagai perspektif kehidupan.`,
    date: 'Maret 2026',
    category: 'Literasi & Karakter',
    author: 'Tim Pustaka & Bahasa',
    image: '/src/assets/images/school_library_study_1793156869186.jpg',
    readTime: '3 min read',
    source: 'native'
  },
  {
    id: 'news-character-building',
    title: 'Character Building: Membentuk Generasi Berintegritas & Berakhlak Mulia',
    slug: 'character-building-generasi-unggul-berintegritas',
    excerpt: 'Pendidikan karakter di Pribadi Premiere memadukan pembiasaan adab harian, empati sosial, dan kolaborasi aktif bersama orang tua murid.',
    content: `Sesuai moto sekolah "Leading with Knowledge, Guiding with Values", kecerdasan intelektual siswa di Pribadi Premiere School selalu dipadukan dengan kematangan budi pekerti dan integritas moral.

Program Character Building diterapkan melalui pembiasaan adab sehari-hari: budaya senyum, sapa, santun, disiplin waktu, kebersihan lingkungan, serta kejujuran dalam setiap penugasan akademik. Bimbingan konseling personal (One-on-One Counseling) dan asesmen Getting to Know You (GTKY) membantu memantau perkembangan emosional dan sosial anak.

Sekolah juga menjalin komunikasi yang erat dengan orang tua melalui sesi parenting berkala, memastikan nilai-nilai kebaikan yang diajarkan di sekolah senantiasa selaras dengan lingkungan keluarga di rumah.`,
    date: 'Februari 2026',
    category: 'Karakter & Nilai',
    author: 'Koordinator Karakter & Wellbeing',
    image: '/src/assets/images/school_campus_exterior_1793156837942.jpg',
    readTime: '4 min read',
    source: 'native'
  },
  {
    id: 'news-pribadi-mengajar',
    title: 'Pribadi Mengajar: Inspirasi Siswa & Relawan Internasional Berbagi Ilmu Bahasa Inggris',
    slug: 'pribadi-mengajar-pengabdian-edukasi-siswa',
    excerpt: 'Program pengabdian masyarakat "Pribadi Mengajar" berkolaborasi dengan relawan native speaker luar negeri untuk memperluas akses bahasa Inggris.',
    content: `Pribadi Premiere School meyakini bahwa pendidikan sejati melahirkan rasa peduli dan tanggung jawab untuk berbagi dengan sesama. Melalui program unggulan "Pribadi Mengajar", para siswa bersama guru dan relawan penutur asli (native speaker) internasional terjun langsung memberikan pembelajaran bahasa Inggris interaktif kepada siswa-siswi di sekolah sekitar Kota Depok.

Kegiatan ini bekerja sama dengan dinas pendidikan setempat dan organisasi pertukaran pemuda global. Para siswa Pribadi Premiere bertindak sebagai fasilitator sebaya, mengajarkan storytelling, lagu dwibahasa, serta permainan edukatif yang menyenangkan.

Program ini tidak hanya meningkatkan kemampuan komunikasi bahasa Inggris anak-anak yang didampingi, tetapi juga menanamkan kerendahan hati, rasa syukur, dan jiwa kepemimpinan sosial yang nyata pada diri siswa Pribadi Premiere.`,
    date: 'Januari 2026',
    category: 'Pengabdian Masyarakat',
    author: 'OSIS & Divisi Sosial',
    image: '/src/assets/images/school_library_study_1793156869186.jpg',
    readTime: '4 min read',
    source: 'native'
  },
  {
    id: 'news-pribadi-berbagi',
    title: 'Pribadi Berbagi: Aksi Nyata Kepedulian Sosial & Donasi Kemanusiaan Siswa Premiere',
    slug: 'pribadi-berbagi-baksos-donasi-peduli-sesama',
    excerpt: 'OSIS Pribadi Premiere bersama paguyuban orang tua menggelar bakti sosial, santunan panti asuhan, dan bantuan sarana pendidikan.',
    content: `Sebagai wujud implementasi misi sekolah dalam menumbuhkan rasa cinta kasih kepada sesama dan bangsa, keluarga besar Sekolah Pribadi Premiere secara berkala menyelenggarakan agenda "Pribadi Berbagi".

Dalam kegiatan terbaru, pengurus OSIS bersama komite orang tua menggalang paket bantuan sembako, buku bacaan berkualitas, dan perlengkapan sekolah untuk anak-anak di beberapa panti asuhan dan komunitas prasejahtera di wilayah Sukmajaya dan sekitarnya.

Penyerahan donasi diiringi dengan sesi bermain bersama, lokakarya kreasi sains sederhana, dan buka puasa / makan siang bersama, mempererat ikatan persaudaraan dan menumbuhkan rasa empati kemanusiaan yang mendalam di kalangan siswa.`,
    date: 'Desember 2025',
    category: 'Kepedulian Sosial',
    author: 'OSIS Pribadi Premiere',
    image: '/src/assets/images/school_arts_sports_1793156884514.jpg',
    readTime: '3 min read',
    source: 'native'
  },
  {
    id: 'news-career-counseling',
    title: 'Career & College Counseling: Menembus PTN Unggulan dan Kampus Kelas Dunia',
    slug: 'career-college-counseling-sukses-ptn-dan-luar-negeri',
    excerpt: 'Layanan bimbingan karir personal, seminar alumni, dan pendampingan portofolio mengantarkan 100% lulusan SMA menuju perguruan tinggi impian.',
    content: `Memasuki jenjang Sekolah Menengah Atas, siswa Pribadi Premiere mendapatkan pendampingan terstruktur melalui program Career & College Counseling. Konselor karir profesional sekolah bekerja secara personal memetakan minat, bakat, serta profil akademik setiap siswa sejak kelas 10.

Program ini mencakup:
1. Asesmen Minat Bakat & Kepribadian (GTKY Assessment)
2. Seminar dan Workshop Persiapan Masuk Perguruan Tinggi Negeri (SNBP & SNBT UTBK)
3. Bimbingan Penulisan Personal Statement dan Aplikasi Beasiswa Luar Negeri
4. Sesi Alumni Sharing: Berbagi pengalaman langsung dari kakak kelas yang telah diterima di UI, ITB, UGM, NUS, NTU, hingga universitas di Inggris dan Australia.

Dengan rekam jejak bimbingan intensif ini, lulusan Pribadi Premiere berhasil meraih kursi di program studi favorit seperti Kedokteran, Teknik Informatika, Bisnis, dan Hubungan Internasional.`,
    date: 'November 2025',
    category: 'Alumni & Karir',
    author: 'Departemen Bimbingan Karir',
    image: '/src/assets/images/school_campus_exterior_1793156837942.jpg',
    readTime: '4 min read',
    source: 'native'
  },
  {
    id: 'news-osn-achievements',
    title: 'Pribadi Students Secure 4 Gold Medals at International Science & Robotics Olympiad',
    slug: 'pribadi-students-win-international-science-olympiad-2026',
    excerpt: 'Delegasi siswa SMA dan SMP Pribadi meraih medali emas pada cabang Fisika, Informatika Coding, dan Robotika Lingkungan.',
    content: `Depok, Jawa Barat — Menunjukkan ketajaman analisis dan dedikasi riset yang gigih, delegasi siswa dari Pribadi Premiere School sukses menorehkan prestasi gemilang pada ajang Olimpiade Sains dan Robotika Internasional 2026.

Mewakili Indonesia pada divisi Fisika Komputasi dan Robotika Otonom, tim siswa mempresentasikan inovasi prototipe cerdas dan mempertahankan karya riset ilmiah mereka di hadapan dewan juri internasional.

"Prestasi ini merefleksikan pembinaan intensif berkelanjutan di klinik olimpiade sains serta dukungan laboratorium STEM sekolah yang representatif. Kami bangga atas ketangguhan mental dan integritas siswa kami," ujar Pembina Tim Olimpiade Sains Pribadi.`,
    date: 'Oktober 2026',
    category: 'Prestasi & Olimpiade',
    author: 'Tim Olimpiade Sains',
    image: '/src/assets/images/school_stem_laboratory_1793156854859.jpg',
    readTime: '3 min read',
    source: 'native'
  },
  {
    id: 'news-ppdb-admissions',
    title: 'Penerimaan Peserta Didik Baru (PPDB 2026/2027): Early Bird & Jalur Beasiswa Terbuka',
    slug: 'penerimaan-peserta-didik-baru-ppdb-2026-2027',
    excerpt: 'Sekolah Pribadi Premiere membuka pendaftaran siswa baru untuk jenjang TK, SD, SMP, dan SMA dengan kuota beasiswa prestasi s.d. 100%.',
    content: `Sekolah Pribadi Premiere Grand Depok City mengumumkan pembukaan pendaftaran Peserta Didik Baru (PPDB) untuk Tahun Ajaran 2026/2027 bagi seluruh jenjang: TK Pribadi Premiere, SD Pribadi Premiere, SMP Pribadi Premiere, dan SMA Pribadi Premiere.

Orang tua dapat memanfaatkan potongan biaya khusus Early Bird serta berbagai pilihan jalur beasiswa:
1. Jalur Prestasi Akademik (berdasarkan nilai rapor dan tes diagnostik)
2. Jalur Prestasi Olimpiade Sains (OSN, FLS2N, O2SN, medalis kompetisi sains/matematika)
3. Jalur Beasiswa Tahfidz Al-Qur'an
4. Jalur Prestasi Bakat Seni, Robotika & Olahraga

Keluarga calon siswa dapat menghadiri sesi Tur Kampus Sabtu (Saturday Campus Tour) setiap akhir pekan pukul 08:30 – 14:00 WIB untuk berkonsultasi langsung dengan kepala sekolah dan konselor PPDB.`,
    date: 'Oktober 2026',
    category: 'PPDB & Beasiswa',
    author: 'Panitia PPDB 2026/2027',
    image: '/src/assets/images/school_campus_exterior_1793156837942.jpg',
    readTime: '4 min read',
    source: 'native'
  }
];

export const academicEvents: AcademicEvent[] = [
  {
    id: 'event-1',
    title: {
      en: 'Open House & Campus Experience Day 2026',
      id: 'Open House & Tur Kampus Terpadu 2026'
    },
    date: 'November 14, 2026',
    time: '08:30 – 13:00 WIB',
    location: 'Main Auditorium & STEM Lab, Pribadi Depok',
    category: 'admissions',
    description: {
      en: 'Join trial classes in robotics and bilingual math, meet curriculum heads, and receive instant PPDB enrollment benefits.',
      id: 'Ikuti kelas uji coba robotika & matematika bilingual, temu sapa kurikulum, dan dapatkan potongan biaya pendaftaran langsung.'
    }
  },
  {
    id: 'event-2',
    title: {
      en: 'Cambridge IGCSE & A-Level Mock Examination Week',
      id: 'Pekan Ujian Simulasi Cambridge IGCSE & A-Level'
    },
    date: 'November 23 – 27, 2026',
    time: '08:00 – 15:00 WIB',
    location: 'Senior Examination Hall',
    category: 'academic',
    description: {
      en: 'Standardized comprehensive evaluation simulating international Cambridge test conditions for Grades 10 and 12.',
      id: 'Simulasi ujian berstandar resmi Cambridge internasional untuk evaluasi komprehensif siswa kelas 10 dan 12.'
    }
  },
  {
    id: 'event-3',
    title: {
      en: 'Annual Science Fair & Innovation Project Expo',
      id: 'Pameran Karya Sains & Proyek Inovasi Siswa'
    },
    date: 'December 12, 2026',
    time: '09:00 – 15:30 WIB',
    location: 'Multi-Purpose Sports Arena',
    category: 'competition',
    description: {
      en: 'Showcase of 60+ student research projects spanning green energy prototypes, biotechnology, and autonomous robotics.',
      id: 'Pameran lebih dari 60 hasil karya riset siswa meliputi prototipe energi terbarukan, bioteknologi, dan robot otonom.'
    }
  }
];

export const facultyProfiles: TeacherProfile[] = [
  {
    name: 'Dr. Hendra Wijaya, M.Ed.',
    role: { en: 'Head of School & Academic Director', id: 'Kepala Sekolah & Direktur Akademik' },
    education: 'Ph.D. Educational Leadership (Univ. of Melbourne), M.Ed. (UI)',
    department: 'School Leadership',
    experienceYears: 22
  },
  {
    name: 'Sarah Montgomery, B.Sc. (Hons), PGCE',
    role: { en: 'Cambridge International Curriculum Coordinator', id: 'Koordinator Kurikulum Cambridge' },
    education: 'University of Edinburgh, Cambridge Certified Assessor',
    department: 'International Studies',
    experienceYears: 14
  },
  {
    name: 'Ahmad Fauzi, S.Si., M.Sc.',
    role: { en: 'Head of STEM & Science Olympiad Mentor', id: 'Kepala Riset STEM & Pembina Tim Olimpiade' },
    education: 'M.Sc. Physics (Institut Teknologi Bandung)',
    department: 'Science & Technology',
    experienceYears: 16
  },
  {
    name: 'Nurul Hidayati, S.Pd., M.Hum.',
    role: { en: 'Head of Character Building & Student Wellbeing', id: 'Koordinator Pembinaan Karakter & Konseling' },
    education: 'M.Hum. Guidance & Counseling (Universitas Negeri Jakarta)',
    department: 'Student Affairs',
    experienceYears: 15
  }
];

export const tuitionEstimates = {
  primary: {
    name: { en: 'Primary (SD Pribadi)', id: 'SD Pribadi' },
    formFee: 500000,
    developmentFee: 24000000,
    monthlyTuition: 2200000,
    boardingFee: 0,
    uniformAndBooks: 3500000
  },
  juniorHigh: {
    name: { en: 'Junior High (SMP Pribadi)', id: 'SMP Pribadi' },
    formFee: 600000,
    developmentFee: 28000000,
    monthlyTuition: 2800000,
    boardingFee: 3200000,
    uniformAndBooks: 4200000
  },
  seniorHigh: {
    name: { en: 'Senior High (SMA Pribadi)', id: 'SMA Pribadi' },
    formFee: 750000,
    developmentFee: 32000000,
    monthlyTuition: 3400000,
    boardingFee: 3500000,
    uniformAndBooks: 4800000
  }
};

export const campusesData: CampusLocation[] = [
  {
    id: 'gdc-premiere',
    name: {
      en: 'Pribadi Premiere School (Academic Complex)',
      id: 'Pribadi Premiere School (Kompleks Akademik)'
    },
    badge: {
      en: 'Next-Gen Digital Campus (4,000 m²)',
      id: 'Kampus Modern Digital GDC (4.000 m²)'
    },
    address: 'Jl. Boulevard Grand Depok City, Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412',
    district: 'Grand Depok City, Sukmajaya',
    description: {
      en: 'A purpose-built 4,000 m² flagship campus under Yayasan Yenbu Indonesia featuring 1:1 Chromebook digital classrooms, Cambridge International curriculum, advanced AI & robotics studios, and a semi-Olympic aquatic center.',
      id: 'Kampus terpadu modern seluas 4.000 m² di bawah naungan Yayasan Yenbu Indonesia dengan ruang kelas digital 1:1 Chromebook, kurikulum Cambridge, studio inovasi AI & robotika, serta gelanggang olahraga.'
    },
    highlights: {
      en: [
        'AI & Advanced Robotics Innovation Studio',
        'Cambridge Assessment International Education (CAIE ID248)',
        '1:1 Chromebook Interactive Digital Classrooms',
        'Global University Placement Advisory Center',
        'Semi-Olympic Aquatic Center & Multi-Sport Arena'
      ],
      id: [
        'Studio Inovasi AI & Robotika Canggih',
        'Penyelenggara Resmi Cambridge International (ID248)',
        'Ruang Kelas Cerdas Digital 1:1 Chromebook',
        'Pusat Bimbingan Masuk Perguruan Tinggi Dunia & PTN',
        'Kolam Renang Semi-Olimpiade & Sarana Olahraga'
      ]
    },
    levels: ['Preschool (TK)', 'Primary (SD)', 'Junior High (SMP)', 'Senior High (SMA)'],
    phone: '+62 812-3233-1995',
    whatsapp: '+62 812-3233-1995',
    mapsUrl: 'https://maps.google.com/?q=Grand+Depok+City+Sukmajaya+Depok',
    isPremiere: true,
    image: '/src/assets/images/school_campus_exterior_1793156837942.jpg'
  },
  {
    id: 'gdc-boarding',
    name: {
      en: 'Pribadi Premiere Boarding Residence',
      id: 'Asrama Siswa Pribadi Premiere'
    },
    badge: {
      en: '24h Mentored Student Residence',
      id: 'Asrama Siswa 24 Jam & Bimbingan Berkarakter'
    },
    address: 'Kompleks Kampus Pribadi Premiere, Jl. Boulevard Grand Depok City, Sukmajaya, Depok 16412',
    district: 'Grand Depok City, Sukmajaya',
    description: {
      en: 'Comprehensive 24-hour student boarding residence offering secure air-conditioned dormitories, dedicated resident mentors, nutritious chef-prepared dining, and supervised evening Olympiad & academic coaching.',
      id: 'Fasilitas asrama terpadu 24 jam dengan kamar ber-AC, pengawasan pembina asrama berdedikasi, makan bergizi 3 kali sehari, serta bimbingan malam intensif untuk olimpiade sains dan tugas akademik.'
    },
    highlights: {
      en: [
        'Separate Air-Conditioned Male & Female Quarters',
        '24/7 Biometric Access Control & Health Clinic',
        'Supervised Evening Study (Etude) & Olympiad Clinics',
        'Nutritious Chef-Prepared Meal Plans',
        'Character Mentoring & Tahfidz Quran Sessions'
      ],
      id: [
        'Gedung Asrama Putra & Putri Terpisah Ber-AC',
        'Keamanan 24 Jam dengan Akses Biometrik & Klinik Medis',
        'Bimbingan Belajar Malam (Etude) & Klinik OSN Terarah',
        'Menu Makanan Sehat Bergizi Terstandar',
        'Pembinaan Adab Berkarakter & Hafalan Tahfidz'
      ]
    },
    levels: ['Junior High (SMP)', 'Senior High (SMA)'],
    phone: '+62 812-3233-1995',
    whatsapp: '+62 812-3233-1995',
    mapsUrl: 'https://maps.google.com/?q=Grand+Depok+City+Sukmajaya+Depok',
    isPremiere: true,
    image: '/src/assets/images/school_stem_laboratory_1793156854859.jpg'
  }
];

export const olympiadAchievements: OlympiadAchievement[] = [
  {
    id: 'ach-1',
    competition: 'International Physics Olympiad (IPhO)',
    field: 'Physics',
    year: 2026,
    medal: 'gold',
    student: 'M. Farhan Pratama (SMA Pribadi)',
    scope: 'International'
  },
  {
    id: 'ach-2',
    competition: 'International Mathematical Olympiad (IMO)',
    field: 'Mathematics',
    year: 2025,
    medal: 'silver',
    student: 'Kalyana Daniswara (SMA Pribadi)',
    scope: 'International'
  },
  {
    id: 'ach-3',
    competition: 'Genius Olympiad Science Fair (USA)',
    field: 'Environmental Robotics & AI',
    year: 2025,
    medal: 'grand',
    student: 'Aria Ramadhan & Rizky Aditya',
    scope: 'International'
  },
  {
    id: 'ach-4',
    competition: 'Olimpiade Sains Nasional (OSN)',
    field: 'Informatics & Coding',
    year: 2026,
    medal: 'gold',
    student: 'Zayyan Al-Farabi (SMP Pribadi)',
    scope: 'National'
  },
  {
    id: 'ach-5',
    competition: 'International Junior Science Olympiad (IJSO)',
    field: 'General Science',
    year: 2025,
    medal: 'gold',
    student: 'Aisyah Putri Maharani',
    scope: 'International'
  },
  {
    id: 'ach-6',
    competition: 'Olimpiade Sains Nasional (OSN)',
    field: 'Biology & Chemistry',
    year: 2026,
    medal: 'silver',
    student: 'Nadia Az-Zahra (SMA Pribadi)',
    scope: 'National'
  }
];

export const universityDestinations: UniversityDestination[] = [
  { name: 'Universitas Indonesia (UI)', country: 'Indonesia', category: 'Indonesia Top PTN', icon: '🏛️' },
  { name: 'Institut Teknologi Bandung (ITB)', country: 'Indonesia', category: 'Indonesia Top PTN', icon: '🔬' },
  { name: 'Universitas Gadjah Mada (UGM)', country: 'Indonesia', category: 'Indonesia Top PTN', icon: '🎓' },
  { name: 'National University of Singapore (NUS)', country: 'Singapore', category: 'World Top 100', icon: '🌏' },
  { name: 'Nanyang Technological University (NTU)', country: 'Singapore', category: 'World Top 100', icon: '🌐' },
  { name: 'University of Edinburgh', country: 'United Kingdom', category: 'World Top 100', icon: '🏰' },
  { name: 'University of Melbourne', country: 'Australia', category: 'World Top 100', icon: '🦘' },
  { name: 'University of Tokyo', country: 'Japan', category: 'World Top 100', icon: '🌸' },
  { name: 'KAIST', country: 'South Korea', category: 'World Top 100', icon: '🚀' },
  { name: 'Oxford University', country: 'United Kingdom', category: 'World Top 100', icon: '📚' }
];

export const boardingSchedule: BoardingScheduleItem[] = [
  {
    time: '04:30 – 05:30',
    activity: { en: 'Dawn Prayer & Tahfidz / Character Reflection', id: 'Shalat Subuh Berjamaah & Tadarus Al-Qur\'an' },
    category: 'spiritual',
    description: { en: 'Gentle start fostering mindfulness, spiritual tranquility, and Quranic recitation habituation.', id: 'Memulai hari dengan ketenangan spiritual, adab islami, dan hafalan terarah.' }
  },
  {
    time: '06:00 – 07:00',
    activity: { en: 'Nutritious Breakfast & Room Inspection', id: 'Sarapan Pagi Bergizi & Cek Kerapian Kamar' },
    category: 'wellness',
    description: { en: 'Balanced buffet dining prepared by nutritionists and building daily personal discipline.', id: 'Santap pagi bergizi seimbang serta melatih kemandirian merapikan kamar.' }
  },
  {
    time: '07:15 – 15:30',
    activity: { en: 'Bilingual Cambridge & National Academic Hours', id: 'Jam Belajar Sekolah Bilingual & Cambridge' },
    category: 'academic',
    description: { en: 'Engaging laboratory practicals, Cambridge seminars, and collaborative classwork.', id: 'Praktikum lab, diskusi interaktif dwibahasa, dan kurikulum internasional.' }
  },
  {
    time: '15:45 – 17:30',
    activity: { en: 'Sports, Clubs & Afternoon Recreation', id: 'Ekstrakurikuler Olahraga, Seni & Istirahat' },
    category: 'wellness',
    description: { en: 'Swimming, basketball, futsal, robotics club, or outdoor socializing with classmates.', id: 'Berenang, futsal, basket, klub robotika, atau santai di ruang terbuka hijau.' }
  },
  {
    time: '18:00 – 19:30',
    activity: { en: 'Evening Prayer, Dinner & Community Bonding', id: 'Shalat Maghrib Berjamaah & Makan Malam' },
    category: 'spiritual',
    description: { en: 'Nutritious evening meal accompanied by peer conversations and family calls.', id: 'Makan malam hangat bersama rekan asrama dan waktu menghubungi keluarga.' }
  },
  {
    time: '19:30 – 21:00',
    activity: { en: 'Supervised Night Study & Olympiad Coaching (Etude)', id: 'Belajar Malam Terbimbing & Klinik Olimpiade' },
    category: 'academic',
    description: { en: 'Dedicated subject tutors and Olympiad coaches assisting with homework and advanced research.', id: 'Didampingi guru pembimbing dan tutor untuk pendalaman materi serta persiapan lomba.' }
  },
  {
    time: '21:30 – 04:30',
    activity: { en: 'Mentor Bedtime Check-in & Restful Sleep', id: 'Absensi Malam Bersama Pembina Asrama & Istirahat' },
    category: 'mentorship',
    description: { en: 'Resident mentor room visit, quiet reflection, and restful sleep in air-conditioned quarters.', id: 'Pemeriksaan keamanan oleh pembina asrama demi istirahat optimal siswa.' }
  }
];

export const studentClubs = [
  { name: { en: 'AI & Robotics Innovation Club', id: 'Klub Robotika & Kecerdasan Buatan (AI)' }, category: 'STEM', icon: '🤖' },
  { name: { en: 'Science Olympiad (OSN Research Club)', id: 'Klinik Olimpiade Sains Nasional (OSN)' }, category: 'Academic', icon: '🔬' },
  { name: { en: 'Public Speaking, Poetry & MUN Debate', id: 'Public Speaking, Seni Baca Puisi & Debat MUN' }, category: 'Leadership', icon: '🎙️' },
  { name: { en: 'Pribadi Membaca Literacy & Journalism', id: 'Komunitas Literasi & Jurnalistik Pribadi Membaca' }, category: 'Arts', icon: '📚' },
  { name: { en: 'Pribadi Mengajar Community Service', id: 'Program Pengabdian Edukasi Pribadi Mengajar' }, category: 'Character', icon: '🤝' },
  { name: { en: 'Pribadi Berbagi Social Outreach', id: 'Aksi Sosial & Kemanusiaan Pribadi Berbagi' }, category: 'Character', icon: '❤️' },
  { name: { en: 'Coding & Web Application Dev', id: 'Pemrograman Web & Python Coding' }, category: 'STEM', icon: '💻' },
  { name: { en: 'Traditional Archery & Martial Arts', id: 'Panahan Tradisional & Bela Diri' }, category: 'Sports', icon: '🏹' },
  { name: { en: 'Swimming & Aquatic Training', id: 'Renang & Latihan Akuatik Semi-Olimpiade' }, category: 'Sports', icon: '🏊' },
  { name: { en: 'Orchestra, Choir & Acoustic Ensemble', id: 'Paduan Suara, Musik Akustik & Ansambel' }, category: 'Arts', icon: '🎻' },
  { name: { en: 'Tahfidz Al-Qur\'an & Character Habituation', id: 'Tahfidz Al-Qur\'an & Pembinaan Adab' }, category: 'Character', icon: '📖' }
];

