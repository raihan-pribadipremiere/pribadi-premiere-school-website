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
      'Provide holistic education combining Cambridge academic rigor and national Kurikulum Merdeka values.',
      'Deploy 1-to-1 Digital Classroom technologies (Chromebooks & Edutech) fostering 21st-century problem solvers.',
      'Nurture individual talents through personalized assessments (GTKY & One-on-One Mentoring).',
      'Bridge students toward leading Indonesian public universities (PTN) and world top 100 universities.'
    ],
    id: [
      'Menyelenggarakan pendidikan holistik memadukan keunggulan akademik Cambridge dan Kurikulum Merdeka.',
      'Mengintegrasikan pembelajaran Digital Classroom 1:1 (Chromebook & Edutech) untuk mencetak pemecah masalah abad ke-21.',
      'Membimbing potensi unik setiap siswa melalui asesmen minat bakat (GTKY & Konseling One-on-One).',
      'Mengantarkan lulusan menuju perguruan tinggi terbaik nasional (PTN) dan top 100 dunia.'
    ]
  },
  accreditation: 'Akreditasi "A" Unggul BAN-SM & Cambridge International ID248',
  foundedYear: 1995,
  premiereFoundedYear: 2023,
  locationGdc: {
    address: 'Jl. Boulevard Grand Depok City, Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412',
    phone: '+62 812-3233-1995',
    whatsapp: '+62 812-3233-1995',
    contactPerson: 'Ms. Dinda (Admissions Office)',
    secondaryPhone: '+62 812-9290-0095',
    email: 'info.premiere@pribadidepok.sch.id',
    admissionsEmail: 'admission.premiere@pribadidepok.sch.id',
    operatingHours: 'Monday – Friday: 07:30 – 16:00 WIB, Saturday: 08:30 – 14:00 WIB'
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
    id: 'news-1',
    title: 'Pribadi Students Secure 4 Gold Medals at International Science Olympiad 2026',
    slug: 'pribadi-students-win-international-science-olympiad-2026',
    excerpt: 'Demonstrating exceptional analytical rigor, high school delegates from Pribadi Depok clinched gold honors in Physics and Computer Science.',
    content: `Depok, Jawa Barat — Demonstrating exceptional analytical dedication and rigorous preparation, student representatives from SMA Pribadi Depok achieved remarkable success at the prestigious 2026 International Science and Olympiad Exhibition.

Representing Indonesia in the competitive Physics and Advanced Computing divisions, the team solved complex multi-stage experimental problems and defended algorithmic research before international jurists.

"This milestone reflects our teachers' unwavering mentorship and the school's continuous investment in state-of-the-art laboratory facilities," said the Head of Academic Development. "We remain dedicated to fostering curious, disciplined thinkers capable of making positive contributions to our global community."`,
    date: 'October 24, 2026',
    category: 'Achievements',
    author: 'Editorial Team',
    image: '/src/assets/images/school_stem_laboratory_1793156854859.jpg',
    readTime: '3 min read',
    source: 'native'
  },
  {
    id: 'news-2',
    title: 'Admissions Open for Academic Year 2026/2027: Early Bird & Scholarships Available',
    slug: 'admissions-open-academic-year-2026-2027',
    excerpt: 'Pribadi Bilingual School opens new student intake (PPDB) for Primary, Junior High, and Senior High with academic and talent scholarship options.',
    content: `Pribadi Bilingual School (Sekolah Pribadi Depok) is pleased to announce the official opening of Enrollment for the Academic Year 2026/2027 across all education levels: SD Pribadi, SMP Pribadi, and SMA Pribadi.

Prospective students can take advantage of our Early Bird registration waiver, as well as dedicated scholarship tracks including:
1. Academic Excellence Track (based on report cards and entrance test scores)
2. Science & Math Olympiad Track (for medalists of district/provincial/national OSN)
3. Tahfidz & Quranic Memorization Scholarship
4. Arts & Sports Talent Pathway

Campus tours and consultations with our curriculum specialists are conducted every Saturday from 08:30 to 14:00 WIB.`,
    date: 'October 15, 2026',
    category: 'Admissions',
    author: 'Admissions Office',
    image: '/src/assets/images/school_campus_exterior_1793156837942.jpg',
    readTime: '4 min read',
    source: 'native'
  },
  {
    id: 'news-3',
    title: 'Cambridge Checkpoint and IGCSE Examination Results Highlight Academic Consistency',
    slug: 'cambridge-examination-results-2026',
    excerpt: 'Over 88% of secondary students achieved distinctions across Cambridge Mathematics, English as a Second Language, and Natural Sciences.',
    content: `The Cambridge Assessment International Education results for the recent examination cycle have been released, reaffirming Pribadi Bilingual School's track record of consistent academic distinction.

Across Grade 8 Checkpoint and Grade 10 IGCSE cohorts, 88.4% of candidate entries secured grades within the top performance bands. Students attributed their confidence to weekly laboratory sessions and collaborative small-group seminars.`,
    date: 'September 28, 2026',
    category: 'Academics',
    author: 'Cambridge Coordinator',
    image: '/src/assets/images/school_library_study_1793156869186.jpg',
    readTime: '2 min read',
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
  { name: { en: 'Robotics & AI Lab', id: 'Robotika & Kecerdasan Buatan' }, category: 'STEM', icon: '🤖' },
  { name: { en: 'Science Olympiad (OSN Club)', id: 'Klub Olimpiade Sains (OSN)' }, category: 'Academic', icon: '🔬' },
  { name: { en: 'Model United Nations & Debate', id: 'Debat Bahasa Inggris & MUN' }, category: 'Leadership', icon: '🎙️' },
  { name: { en: 'Archery & Martial Arts', id: 'Panahan & Bela Diri' }, category: 'Sports', icon: '🏹' },
  { name: { en: 'Swimming & Water Polo', id: 'Renang & Polo Air' }, category: 'Sports', icon: '🏊' },
  { name: { en: 'Orchestra & Traditional Music', id: 'Ansambel Musik & Seni Tradisional' }, category: 'Arts', icon: '🎻' },
  { name: { en: 'Coding & Web Development', id: 'Pemrograman & Pembuatan Game' }, category: 'STEM', icon: '💻' },
  { name: { en: 'Tahfidz & Islamic Studies', id: 'Tahfidz Al-Qur\'an & Studi Islam' }, category: 'Character', icon: '📖' }
];

