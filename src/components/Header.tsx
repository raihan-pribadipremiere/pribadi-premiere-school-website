import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { 
  Globe, 
  Calendar, 
  ChevronDown, 
  Phone, 
  GraduationCap, 
  Building2, 
  Trophy, 
  BookOpen, 
  Sparkles,
  ArrowRight,
  School,
  Clock,
  Compass
} from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  activePage: string;
  onNavigate: (page: string, subSection?: string) => void;
  onToggleLang: () => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  activePage,
  onNavigate,
  onToggleLang,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId: string, subSection?: string) => {
    onNavigate(pageId, subSection);
    setOpenDropdown(null);
    if (subSection) {
      setTimeout(() => {
        const el = document.getElementById(subSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown(prev => (prev === id ? null : id));
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-50/98 backdrop-blur-md border-b border-stone-200 shadow-sm transition-colors overflow-visible">
      
      {/* 1. Top Utility Prestige Bar (School Credentials & Direct Contacts) */}
      <div className="bg-stone-900 text-stone-300 text-[11px] py-1.5 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          
          {/* School Credentials */}
          <div className="flex items-center gap-2 sm:gap-3 text-stone-300 truncate">
            <span className="font-semibold text-amber-400">Pribadi Premiere School</span>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:inline text-stone-300">Yayasan Yenbu Indonesia</span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span className="hidden md:inline text-amber-300 font-mono">Cambridge ID248 · Akreditasi "A" Unggul</span>
          </div>

          {/* Direct Hotline, Saturday Tour & Language */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a 
              href="https://wa.me/6281232331995" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors text-[11px]"
              title="Hubungi WhatsApp Admissions Ms. Dinda"
            >
              <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="hidden xs:inline font-sans">+62 812-3233-1995 (Ms. Dinda)</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>

            <span className="text-stone-700">|</span>

            <button
              onClick={onOpenTourModal}
              className="hidden lg:flex items-center gap-1 text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <Calendar className="w-3 h-3 text-amber-400" />
              <span>{currentLang === 'en' ? 'Saturday Tour' : 'Tur Sabtu'}</span>
            </button>

            <span className="hidden lg:inline text-stone-700">|</span>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded text-stone-200 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer font-mono font-bold text-[11px]"
              title="Switch Language (ID / EN)"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{currentLang.toUpperCase()}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible" ref={navContainerRef}>
        
        {/* Upper Line: School Identity & Action Buttons */}
        <div className="flex items-center justify-between gap-4 py-3 border-b border-stone-200/60">
          
          {/* School Brand Mark & Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer shrink-0"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-800 text-amber-50 flex items-center justify-center font-serif text-2xl font-bold shadow-md group-hover:bg-amber-900 group-hover:scale-105 transition-all">
              P
            </div>
            <div className="leading-tight">
              <span className="block font-serif text-lg sm:text-2xl font-bold tracking-tight text-stone-900">
                Pribadi Premiere School
              </span>
              <span className="block text-[11px] sm:text-xs text-stone-600 font-sans tracking-wide">
                <strong className="text-amber-900 font-semibold">TK · SD · SMP · SMA</strong> · Grand Depok City & Margonda
              </span>
            </div>
          </button>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenTourModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300/80 rounded-xl transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-800" />
              <span>{currentLang === 'en' ? 'Book Campus Tour' : 'Jadwalkan Tur'}</span>
            </button>

            <button
              onClick={onOpenAdmissions}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{currentLang === 'en' ? 'PPDB 2026/2027 Registration' : 'Daftar PPDB 2026/2027'}</span>
            </button>
          </div>

        </div>

        {/* Lower Line: Direct Page Buttons & Dropdown Menus (100% Full Width, NEVER clipped, NO burger button) */}
        <nav className="flex items-center flex-wrap gap-1 sm:gap-1.5 md:gap-2 py-2 overflow-visible">
          
          {/* Button 1: Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
              activePage === 'home'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
            }`}
          >
            {currentLang === 'en' ? 'Home' : 'Beranda'}
          </button>

          {/* Dropdown 2: About Us / Profil */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('about')}
              onMouseEnter={() => setOpenDropdown('about')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                activePage === 'about'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : openDropdown === 'about'
                    ? 'bg-stone-200 text-stone-950'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
            >
              <span>{currentLang === 'en' ? 'About Us' : 'Profil'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'about' && (
              <div 
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 z-50 text-xs normal-case animate-in fade-in zoom-in-95 duration-150 ring-1 ring-black/5"
              >
                <div className="px-4 py-1.5 border-b border-stone-100 mb-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900">
                    {currentLang === 'en' ? 'School Profile & Leadership' : 'Profil Sekolah & Yayasan'}
                  </span>
                </div>
                <button
                  onClick={() => handleNavClick('about', 'vision')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium flex items-center justify-between group cursor-pointer"
                >
                  <span>{currentLang === 'en' ? 'Vision, Mission & Motto' : 'Visi, Misi & Semboyan'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all" />
                </button>
                <button
                  onClick={() => handleNavClick('about', 'heritage')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-700 group cursor-pointer"
                >
                  {currentLang === 'en' ? 'Yayasan Yenbu Indonesia Heritage' : 'Profil Yayasan Yenbu Indonesia'}
                </button>
                <button
                  onClick={() => handleNavClick('about', 'headmaster')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-700 group cursor-pointer"
                >
                  {currentLang === 'en' ? 'Letter from Head of School' : 'Sambutan Kepala Sekolah'}
                </button>
                <button
                  onClick={() => handleNavClick('about', 'accreditations')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-700 group cursor-pointer"
                >
                  {currentLang === 'en' ? 'Accreditations (BAN-SM "A" & Cambridge ID248)' : 'Akreditasi "A" Unggul & Cambridge'}
                </button>
                <button
                  onClick={() => handleNavClick('about', 'teachers')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-700 group cursor-pointer"
                >
                  {currentLang === 'en' ? 'School Teachers & Mentors' : 'Dewan Guru & Konselor'}
                </button>
              </div>
            )}
          </div>

          {/* Dropdown 3: Academics / Jenjang TK-SD-SMP-SMA */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('academics')}
              onMouseEnter={() => setOpenDropdown('academics')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                activePage === 'academics'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : openDropdown === 'academics'
                    ? 'bg-stone-200 text-stone-950'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
            >
              <span>{currentLang === 'en' ? 'Academics' : 'Jenjang & Kurikulum'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'academics' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'academics' && (
              <div 
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 z-50 text-xs normal-case animate-in fade-in zoom-in-95 duration-150 ring-1 ring-black/5"
              >
                <div className="px-4 py-1.5 border-b border-stone-100 mb-1 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900">
                    {currentLang === 'en' ? 'Education Stages (TK – SMA)' : 'Jenjang Pendidikan Sekolah'}
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">Cambridge + Merdeka</span>
                </div>
                <button
                  onClick={() => handleNavClick('academics', 'kindergarten')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    👶 {currentLang === 'en' ? 'Preschool & Kindergarten (TK)' : 'PAUD & TK Pribadi'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Montessori-inspired & early phonics' : 'Stimulasi sensori, fonik & bilingual'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('academics', 'primary')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    🎒 {currentLang === 'en' ? 'Primary School (SD Pribadi)' : 'SD Pribadi Premiere'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Cambridge Primary & Kurikulum Merdeka' : 'Cambridge Primary & fondasi karakter'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('academics', 'junior-high')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    📘 {currentLang === 'en' ? 'Junior High School (SMP)' : 'SMP Pribadi Premiere'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Cambridge Lower Secondary Checkpoint' : 'Cambridge Lower Secondary & riset'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('academics', 'senior-high')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    🎓 {currentLang === 'en' ? 'Senior High School (SMA)' : 'SMA Pribadi Premiere'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Cambridge IGCSE & A-Levels + PTN Pathway' : 'Cambridge IGCSE/A-Level & sukses PTN'}
                  </div>
                </button>
                <div className="border-t border-stone-100 my-1.5" />
                <button
                  onClick={() => handleNavClick('academics', 'chromebook')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-100/60 text-amber-950 font-medium group cursor-pointer flex items-center justify-between"
                >
                  <span>💻 {currentLang === 'en' ? '1:1 Chromebook Classroom' : 'Kelas Digital 1:1 Chromebook'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                </button>
                <button
                  onClick={() => handleNavClick('academics', 'gtky')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-100/60 text-amber-950 font-medium group cursor-pointer flex items-center justify-between"
                >
                  <span>🌱 {currentLang === 'en' ? 'GTKY Talent Assessment' : 'Asesmen Bakat GTKY & Konseling'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                </button>
              </div>
            )}
          </div>

          {/* Dropdown 4: Prestasi & Alumni */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('achievements')}
              onMouseEnter={() => setOpenDropdown('achievements')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                activePage === 'achievements'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : openDropdown === 'achievements'
                    ? 'bg-stone-200 text-stone-950'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
            >
              <span>{currentLang === 'en' ? 'Olympiad & Alumni' : 'Prestasi & Alumni'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'achievements' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'achievements' && (
              <div 
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute left-0 top-full mt-2 w-76 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 z-50 text-xs normal-case animate-in fade-in zoom-in-95 duration-150 ring-1 ring-black/5"
              >
                <div className="px-4 py-1.5 border-b border-stone-100 mb-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900">
                    {currentLang === 'en' ? 'Achievements & High School Alumni' : 'Medali Juara & Kelulusan Siswa'}
                  </span>
                </div>
                <button
                  onClick={() => handleNavClick('achievements', 'olympiads')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    🏆 {currentLang === 'en' ? 'Science Olympiad Medals (OSN)' : 'Medali Olimpiade Sains Nasional'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? '140+ National & International medals' : '140+ medali OSN, IPhO, IMO, IJSO'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('achievements', 'destinations')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    🎓 {currentLang === 'en' ? 'High School Alumni Placements' : 'Kampus Tujuan Kelulusan SMA'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Graduates accepted to UI, ITB, NUS, Oxford' : 'Alumni SMA diterima di UI, ITB, NTU, Oxford'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('achievements', 'camp')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    🔬 {currentLang === 'en' ? 'OSN Intensive Training Camp' : 'Klinik Pembinaan Juara OSN'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Mentored by national olympiad coaches' : 'Bimbingan intensif medalis & dosen'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('achievements', 'scholarship')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-100/60 text-amber-950 font-medium group cursor-pointer flex items-center justify-between"
                >
                  <span>✨ {currentLang === 'en' ? 'Science Scholarships (Up to 100%)' : 'Beasiswa Sains & Riset (s.d. 100%)'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-800" />
                </button>
              </div>
            )}
          </div>

          {/* Dropdown 5: Campus Life & Facilities */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('campus-life')}
              onMouseEnter={() => setOpenDropdown('campus-life')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                activePage === 'campus-life'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : openDropdown === 'campus-life'
                    ? 'bg-stone-200 text-stone-950'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
            >
              <span>{currentLang === 'en' ? 'Campus Life' : 'Fasilitas & Asrama'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'campus-life' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'campus-life' && (
              <div 
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute left-0 sm:left-auto sm:right-0 md:left-0 top-full mt-2 w-76 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 z-50 text-xs normal-case animate-in fade-in zoom-in-95 duration-150 ring-1 ring-black/5"
              >
                <div className="px-4 py-1.5 border-b border-stone-100 mb-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900">
                    {currentLang === 'en' ? 'School Grounds & Daily Life' : 'Fasilitas Kampus & Kehidupan Siswa'}
                  </span>
                </div>
                <button
                  onClick={() => handleNavClick('campus-life', 'gdc')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    🏫 {currentLang === 'en' ? 'Grand Depok City Premiere Campus' : 'Kampus Grand Depok City (4.000 m²)'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Modern classrooms, labs & sports arena' : 'Gedung modern, kolam renang & lab'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('campus-life', 'margonda')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    🌳 {currentLang === 'en' ? 'Margonda Heritage Campus' : 'Kampus Margonda Raya'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Historic founding campus & community' : 'Kampus bersejarah sejak 1995'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('campus-life', 'boarding')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    🛏️ {currentLang === 'en' ? '24h Student Boarding House' : 'Asrama Siswa 24 Jam'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Character mentoring & healthy nutrition' : 'Pembinaan akhlak, mentor & gizi seimbang'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('campus-life', 'clubs')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    ⚽ {currentLang === 'en' ? '20+ Student Clubs & Extracurriculars' : '20+ Ekstrakurikuler & Olahraga'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Robotics, archery, music, model UN' : 'Robotika, panahan, band, debat'}
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Dropdown 6: PPDB 2026/2027 */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('admissions')}
              onMouseEnter={() => setOpenDropdown('admissions')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                activePage === 'admissions'
                  ? 'bg-amber-800 text-white shadow-xs'
                  : openDropdown === 'admissions'
                    ? 'bg-stone-200 text-stone-950'
                    : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
            >
              <span>{currentLang === 'en' ? 'PPDB 2026/2027' : 'PPDB 2026/2027'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'admissions' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'admissions' && (
              <div 
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 z-50 text-xs normal-case animate-in fade-in zoom-in-95 duration-150 ring-1 ring-black/5"
              >
                <div className="px-4 py-1.5 border-b border-stone-100 mb-1 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900">
                    {currentLang === 'en' ? 'New Student Enrollment' : 'Penerimaan Siswa Baru'}
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                    {currentLang === 'en' ? 'Open Now' : 'Gelombang Dibuka'}
                  </span>
                </div>
                <button
                  onClick={() => handleNavClick('admissions', 'steps')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    📋 {currentLang === 'en' ? 'Admission Steps & Requirements' : 'Tahapan & Syarat Pendaftaran PPDB'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? '4 easy steps: online form, test, interview, pass' : '4 alur: form, tes potensi, wawancara, daftar ulang'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('admissions', 'calculator')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    🧮 {currentLang === 'en' ? 'Tuition Fee Simulator' : 'Simulasi Biaya Masuk & SPP'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Calculate enrollment fee with early bird & scholarship' : 'Hitung estimasi biaya TK, SD, SMP, SMA & Asrama'}
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('admissions', 'tracks')}
                  className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                >
                  <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                    🌟 {currentLang === 'en' ? 'Early Bird & Scholarship Tracks' : 'Jalur Beasiswa & Early Bird 15%'}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    {currentLang === 'en' ? 'Academic, tahfidz, and olympiad quotas' : 'Jalur nilai rapor, tahfidz, dan medali sains'}
                  </div>
                </button>
                <div className="border-t border-stone-100 my-1.5" />
                <button
                  onClick={() => {
                    setOpenDropdown(null);
                    onOpenTourModal();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-amber-100/60 text-amber-950 font-medium group cursor-pointer flex items-center justify-between"
                >
                  <span>📅 {currentLang === 'en' ? 'Schedule Saturday Campus Visit' : 'Jadwalkan Tur Kampus Sabtu'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-800" />
                </button>
              </div>
            )}
          </div>

          {/* Button 7: Chronicle / Berita */}
          <button
            onClick={() => handleNavClick('news')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
              activePage === 'news'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
            }`}
          >
            {currentLang === 'en' ? 'Chronicle' : 'Berita'}
          </button>

          {/* Button 8: Contact / Kontak */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
              activePage === 'contact'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
            }`}
          >
            {currentLang === 'en' ? 'Contact' : 'Kontak'}
          </button>

        </nav>

      </div>
    </header>
  );
};
