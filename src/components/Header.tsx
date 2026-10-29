import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { 
  Globe, 
  Calendar, 
  ChevronDown, 
  Phone, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  activePage: string;
  onNavigate: (page: string) => void;
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
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleOpenDropdown = (id: string) => {
    clearCloseTimeout();
    setOpenDropdown(id);
  };

  const handleScheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 260);
  };

  const handleImmediateClose = () => {
    clearCloseTimeout();
    setOpenDropdown(null);
  };

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        handleImmediateClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    handleImmediateClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDropdown = (id: string) => {
    clearCloseTimeout();
    setOpenDropdown(prev => (prev === id ? null : id));
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-50/98 backdrop-blur-md border-b border-stone-200 shadow-sm transition-colors overflow-visible">
      
      {/* 1. Top Utility Prestige Bar (Hovering here closes open dropdowns) */}
      <div 
        onMouseEnter={handleImmediateClose}
        className="bg-stone-900 text-stone-300 text-[11px] py-1.5 border-b border-stone-800"
      >
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
              onClick={() => {
                setOpenDropdown(null);
                onOpenTourModal();
              }}
              className="hidden lg:flex items-center gap-1 text-stone-300 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <Calendar className="w-3 h-3 text-amber-400" />
              <span>{currentLang === 'en' ? 'Saturday Tour' : 'Tur Sabtu'}</span>
            </button>

            <span className="hidden lg:inline text-stone-700">|</span>

            {/* Language Switcher */}
            <button
              onClick={() => {
                setOpenDropdown(null);
                onToggleLang();
              }}
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
        <div 
          onMouseEnter={() => setOpenDropdown(null)}
          className="flex items-center justify-between gap-4 py-3 border-b border-stone-200/60"
        >
          
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
                <strong className="text-amber-900 font-semibold">TK · SD · SMP · SMA</strong> · Grand Depok City
              </span>
            </div>
          </button>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => {
                setOpenDropdown(null);
                onOpenTourModal();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300/80 rounded-xl transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-800" />
              <span>{currentLang === 'en' ? 'Book Campus Tour' : 'Jadwalkan Tur'}</span>
            </button>

            <button
              onClick={() => {
                setOpenDropdown(null);
                onOpenAdmissions();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{currentLang === 'en' ? 'PPDB 2026/2027 Registration' : 'Daftar PPDB 2026/2027'}</span>
            </button>
          </div>

        </div>

        {/* Lower Line: Direct Page Buttons & Dropdown Menus */}
        <nav 
          onMouseLeave={handleScheduleClose}
          className="flex items-center flex-wrap gap-1 sm:gap-1.5 md:gap-2 py-2 overflow-visible"
        >
          
          {/* Button 1: Home */}
          <button
            onClick={() => handleNavClick('home')}
            onMouseEnter={handleImmediateClose}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
              activePage === 'home'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
            }`}
          >
            {currentLang === 'en' ? 'Home' : 'Beranda'}
          </button>

          {/* Dropdown 2: About Us / Profil */}
          <div 
            className="relative flex items-center"
            onMouseEnter={() => handleOpenDropdown('about')}
            onMouseLeave={handleScheduleClose}
          >
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 rounded-l-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                activePage === 'about' || activePage.startsWith('about/')
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
              title={currentLang === 'en' ? 'Click for About Overview' : 'Klik untuk Ikhtisar Profil'}
            >
              {currentLang === 'en' ? 'About Us' : 'Profil'}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('about');
              }}
              className={`px-1.5 py-1.5 rounded-r-lg text-xs transition-colors cursor-pointer border-l ${
                activePage === 'about' || activePage.startsWith('about/')
                  ? 'bg-amber-800 text-white border-amber-900'
                  : openDropdown === 'about'
                    ? 'bg-stone-200 text-stone-950 border-stone-300'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 border-stone-200'
              }`}
              title={currentLang === 'en' ? 'Toggle sub-pages' : 'Lihat sub-halaman'}
            >
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'about' && (
              <div 
                onMouseEnter={() => handleOpenDropdown('about')}
                onMouseLeave={handleScheduleClose}
                className="absolute left-0 top-full pt-2 z-50 text-xs normal-case animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="w-76 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 ring-1 ring-black/5 relative before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
                  <div className="px-4 py-1.5 border-b border-stone-100 mb-1 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900">
                      {currentLang === 'en' ? 'School Profile & Leadership' : 'Profil Sekolah & Yayasan'}
                    </span>
                    <button
                      onClick={() => handleNavClick('about')}
                      className="text-[10px] font-bold text-amber-800 hover:underline cursor-pointer"
                    >
                      {currentLang === 'en' ? 'Overview Hub →' : 'Ikhtisar →'}
                    </button>
                  </div>
                  <button
                    onClick={() => handleNavClick('about/vision')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                        🧭 {currentLang === 'en' ? 'Vision, Mission & Motto' : 'Visi, Misi & Semboyan'}
                      </div>
                      <div className="text-[11px] text-stone-500">
                        {currentLang === 'en' ? 'Core ethos & educational philosophy' : 'Fondasi nilai luhur sekolah'}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all" />
                  </button>
                  <button
                    onClick={() => handleNavClick('about/heritage')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🏛️ {currentLang === 'en' ? 'Yayasan Yenbu Indonesia Heritage' : 'Profil Yayasan Yenbu Indonesia'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Founded 1995 · 30+ years legacy' : 'Sejak 1995 · 30+ tahun mengabdi'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('about/headmaster')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      ✍️ {currentLang === 'en' ? 'Letter from Head of School' : 'Sambutan Kepala Sekolah'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Dr. H. Muhammad Arifin, M.Ed.' : 'Pesan hangat untuk calon siswa & ortu'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('about/accreditations')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🏅 {currentLang === 'en' ? 'Accreditations (BAN-SM "A" & Cambridge)' : 'Akreditasi "A" Unggul & Cambridge'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Centre ID248 & verified legal permits' : 'Legalitas resmi & Cambridge ID248'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('about/faculty')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      👥 {currentLang === 'en' ? 'Faculty & Academic Mentors' : 'Dewan Guru & Konselor Asrama'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Certified subject specialists & 1:10 ratio' : 'Pendidik Cambridge & master coach OSN'}
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown 3: Academics / Jenjang TK-SD-SMP-SMA */}
          <div 
            className="relative flex items-center"
            onMouseEnter={() => handleOpenDropdown('academics')}
            onMouseLeave={handleScheduleClose}
          >
            <button
              onClick={() => handleNavClick('academics')}
              className={`px-3 py-1.5 rounded-l-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                activePage === 'academics' || activePage.startsWith('academics/')
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
              title={currentLang === 'en' ? 'Click for Academics Overview' : 'Klik untuk Ikhtisar Jenjang & Kurikulum'}
            >
              {currentLang === 'en' ? 'Academics' : 'Jenjang & Kurikulum'}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('academics');
              }}
              className={`px-1.5 py-1.5 rounded-r-lg text-xs transition-colors cursor-pointer border-l ${
                activePage === 'academics' || activePage.startsWith('academics/')
                  ? 'bg-amber-800 text-white border-amber-900'
                  : openDropdown === 'academics'
                    ? 'bg-stone-200 text-stone-950 border-stone-300'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 border-stone-200'
              }`}
              title={currentLang === 'en' ? 'Toggle education stages' : 'Lihat pilihan jenjang'}
            >
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'academics' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'academics' && (
              <div 
                onMouseEnter={() => handleOpenDropdown('academics')}
                onMouseLeave={handleScheduleClose}
                className="absolute left-0 top-full pt-2 z-50 text-xs normal-case animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="w-80 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 ring-1 ring-black/5 relative before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
                  <div className="px-4 py-1.5 border-b border-stone-100 mb-1 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900">
                      {currentLang === 'en' ? 'Education Stages (TK – SMA)' : 'Jenjang Pendidikan Sekolah'}
                    </span>
                    <button
                      onClick={() => handleNavClick('academics')}
                      className="text-[10px] font-bold text-amber-800 hover:underline cursor-pointer"
                    >
                      {currentLang === 'en' ? 'Overview Hub →' : 'Ikhtisar →'}
                    </button>
                  </div>
                  <button
                    onClick={() => handleNavClick('academics/kindergarten')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      👶 {currentLang === 'en' ? 'Preschool & Kindergarten (TK)' : 'PAUD & TK Pribadi Premiere'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Play-based bilingual, phonics & character adab' : 'Belajar bermain, fonik, adab & motorik'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('academics/primary')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🎒 {currentLang === 'en' ? 'Primary School (SD Pribadi Premiere)' : 'SD Pribadi Premiere'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Cambridge Primary & Kurikulum Merdeka' : 'Cambridge Primary & fondasi karakter'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('academics/junior-high')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      📘 {currentLang === 'en' ? 'Junior High School (SMP Premiere)' : 'SMP Pribadi Premiere'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Cambridge Lower Secondary Checkpoint' : 'Cambridge Lower Secondary & riset'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('academics/senior-high')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🎓 {currentLang === 'en' ? 'Senior High School (SMA Premiere)' : 'SMA Pribadi Premiere'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Cambridge IGCSE & A-Levels + PTN Pathway' : 'Cambridge IGCSE/A-Level & sukses PTN'}
                    </div>
                  </button>
                  <div className="border-t border-stone-100 my-1.5" />
                  <button
                    onClick={() => handleNavClick('academics/chromebook')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-100/60 text-amber-950 font-medium group cursor-pointer flex items-center justify-between"
                  >
                    <span>💻 {currentLang === 'en' ? '1:1 Chromebook Classroom' : 'Kelas Digital 1:1 Chromebook'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                  </button>
                  <button
                    onClick={() => handleNavClick('academics/gtky')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-100/60 text-amber-950 font-medium group cursor-pointer flex items-center justify-between"
                  >
                    <span>🌱 {currentLang === 'en' ? 'GTKY Talent Assessment' : 'Asesmen Bakat GTKY & Konseling'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown 4: Prestasi & Alumni */}
          <div 
            className="relative flex items-center"
            onMouseEnter={() => handleOpenDropdown('achievements')}
            onMouseLeave={handleScheduleClose}
          >
            <button
              onClick={() => handleNavClick('achievements')}
              className={`px-3 py-1.5 rounded-l-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                activePage === 'achievements' || activePage.startsWith('achievements/')
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
              title={currentLang === 'en' ? 'Click for Achievements Overview' : 'Klik untuk Ikhtisar Prestasi & Alumni'}
            >
              {currentLang === 'en' ? 'Olympiad & Alumni' : 'Prestasi & Alumni'}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('achievements');
              }}
              className={`px-1.5 py-1.5 rounded-r-lg text-xs transition-colors cursor-pointer border-l ${
                activePage === 'achievements' || activePage.startsWith('achievements/')
                  ? 'bg-amber-800 text-white border-amber-900'
                  : openDropdown === 'achievements'
                    ? 'bg-stone-200 text-stone-950 border-stone-300'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 border-stone-200'
              }`}
              title={currentLang === 'en' ? 'Toggle achievements' : 'Lihat pilihan prestasi'}
            >
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'achievements' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'achievements' && (
              <div 
                onMouseEnter={() => handleOpenDropdown('achievements')}
                onMouseLeave={handleScheduleClose}
                className="absolute left-0 top-full pt-2 z-50 text-xs normal-case animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="w-76 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 ring-1 ring-black/5 relative before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
                  <div className="px-4 py-1.5 border-b border-stone-100 mb-1 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900">
                      {currentLang === 'en' ? 'Achievements & High School Alumni' : 'Medali Juara & Kelulusan Siswa'}
                    </span>
                    <button
                      onClick={() => handleNavClick('achievements')}
                      className="text-[10px] font-bold text-amber-800 hover:underline cursor-pointer"
                    >
                      {currentLang === 'en' ? 'Overview Hub →' : 'Ikhtisar →'}
                    </button>
                  </div>
                  <button
                    onClick={() => handleNavClick('achievements/olympiads')}
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
                    onClick={() => handleNavClick('achievements/destinations')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🎓 {currentLang === 'en' ? 'High School Alumni Placements' : 'Kampus Tujuan Kelulusan SMA'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Accepted to UI, ITB, UGM, NUS, Oxford' : 'Alumni diterima di UI, ITB, NTU, Oxford'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('achievements/camp')}
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
                    onClick={() => handleNavClick('achievements/scholarships')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-100/60 text-amber-950 font-medium group cursor-pointer flex items-center justify-between"
                  >
                    <span>✨ {currentLang === 'en' ? 'Science Scholarships (Up to 100%)' : 'Beasiswa Sains & Riset (s.d. 100%)'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-800" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown 5: Campus Life & Facilities */}
          <div 
            className="relative flex items-center"
            onMouseEnter={() => handleOpenDropdown('campus-life')}
            onMouseLeave={handleScheduleClose}
          >
            <button
              onClick={() => handleNavClick('campus-life')}
              className={`px-3 py-1.5 rounded-l-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                activePage === 'campus-life' || activePage.startsWith('campus-life/')
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
              title={currentLang === 'en' ? 'Click for Campus Life Overview' : 'Klik untuk Ikhtisar Fasilitas Kampus'}
            >
              {currentLang === 'en' ? 'Campus Life' : 'Fasilitas & Asrama'}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('campus-life');
              }}
              className={`px-1.5 py-1.5 rounded-r-lg text-xs transition-colors cursor-pointer border-l ${
                activePage === 'campus-life' || activePage.startsWith('campus-life/')
                  ? 'bg-amber-800 text-white border-amber-900'
                  : openDropdown === 'campus-life'
                    ? 'bg-stone-200 text-stone-950 border-stone-300'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 border-stone-200'
              }`}
              title={currentLang === 'en' ? 'Toggle facilities' : 'Lihat fasilitas kampus'}
            >
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'campus-life' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'campus-life' && (
              <div 
                onMouseEnter={() => handleOpenDropdown('campus-life')}
                onMouseLeave={handleScheduleClose}
                className="absolute left-0 sm:left-auto sm:right-0 md:left-0 top-full pt-2 z-50 text-xs normal-case animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="w-76 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 ring-1 ring-black/5 relative before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
                  <div className="px-4 py-1.5 border-b border-stone-100 mb-1 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900">
                      {currentLang === 'en' ? 'Grand Depok City Facilities' : 'Fasilitas Kampus Grand Depok City'}
                    </span>
                    <button
                      onClick={() => handleNavClick('campus-life')}
                      className="text-[10px] font-bold text-amber-800 hover:underline cursor-pointer"
                    >
                      {currentLang === 'en' ? 'Overview Hub →' : 'Ikhtisar →'}
                    </button>
                  </div>
                  <button
                    onClick={() => handleNavClick('campus-life/gdc')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🏫 {currentLang === 'en' ? 'Grand Depok City Premiere Campus (4,000 m²)' : 'Kampus GDC Modern (4.000 m²)'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Smart classrooms & digital learning commons' : 'Ruang kelas cerdas 1:1 Chromebook'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('campus-life/labs')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🔬 {currentLang === 'en' ? 'Robotics & STEM Labs' : 'Laboratorium Robotika & AI'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'State-of-the-art physics, bio, chemistry & coding' : 'Lab sains berstandar Cambridge & studio coding'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('campus-life/boarding')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🛏️ {currentLang === 'en' ? '24h Student Boarding Residence' : 'Asrama Siswa Terpadu 24 Jam'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Air-conditioned rooms & character mentors' : 'Kamar ber-AC, bimbingan malam & makan bergizi'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('campus-life/sports')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🏊 {currentLang === 'en' ? 'Semi-Olympic Pool & Sports Arena' : 'Kolam Renang & Arena Olahraga'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Aquatic center, basketball & futsal arena' : 'Kolam renang, lapangan basket & futsal'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('campus-life/clubs')}
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
              </div>
            )}
          </div>

          {/* Dropdown 6: PPDB 2026/2027 */}
          <div 
            className="relative flex items-center"
            onMouseEnter={() => handleOpenDropdown('admissions')}
            onMouseLeave={handleScheduleClose}
          >
            <button
              onClick={() => handleNavClick('admissions')}
              className={`px-3 py-1.5 rounded-l-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                activePage === 'admissions' || activePage.startsWith('admissions/')
                  ? 'bg-amber-800 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/60'
              }`}
              title={currentLang === 'en' ? 'Click for PPDB Overview' : 'Klik untuk Ikhtisar PPDB'}
            >
              <span>{currentLang === 'en' ? 'PPDB 2026/2027' : 'PPDB 2026/2027'}</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown('admissions');
              }}
              className={`px-1.5 py-1.5 rounded-r-lg text-xs transition-colors cursor-pointer border-l ${
                activePage === 'admissions' || activePage.startsWith('admissions/')
                  ? 'bg-amber-800 text-white border-amber-900'
                  : openDropdown === 'admissions'
                    ? 'bg-stone-200 text-stone-950 border-stone-300'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 border-stone-200'
              }`}
              title={currentLang === 'en' ? 'Toggle enrollment links' : 'Lihat pilihan PPDB'}
            >
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'admissions' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'admissions' && (
              <div 
                onMouseEnter={() => handleOpenDropdown('admissions')}
                onMouseLeave={handleScheduleClose}
                className="absolute right-0 top-full pt-2 z-50 text-xs normal-case animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="w-80 bg-white rounded-2xl shadow-2xl border border-stone-200/90 py-2.5 ring-1 ring-black/5 relative before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
                  <div className="px-4 py-1.5 border-b border-stone-100 mb-1 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-900">
                      {currentLang === 'en' ? 'New Student Enrollment' : 'Penerimaan Siswa Baru'}
                    </span>
                    <button
                      onClick={() => handleNavClick('admissions')}
                      className="text-[10px] font-bold text-amber-800 hover:underline cursor-pointer"
                    >
                      {currentLang === 'en' ? 'Overview Hub →' : 'Ikhtisar →'}
                    </button>
                  </div>
                  <button
                    onClick={() => handleNavClick('admissions/steps')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      📋 {currentLang === 'en' ? 'Admission Steps & Requirements' : 'Tahapan & Syarat Pendaftaran PPDB'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Step-by-step roadmap for TK, SD, SMP & SMA' : 'Panduan 5 alur pendaftaran siswa baru'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('admissions/calculator')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🧮 {currentLang === 'en' ? 'Tuition Fee Simulator' : 'Simulasi Biaya Masuk & SPP'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Interactive tuition calculation with 15% Early Bird' : 'Kalkulator biaya TK, SD, SMP, SMA & Asrama'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('admissions/scholarships')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      🌟 {currentLang === 'en' ? 'Scholarship Application Guide' : 'Panduan Jalur Beasiswa PPDB'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'OSN medalists, academic merit, and tahfidz' : 'Syarat berkas & jadwal tes beasiswa s.d. 100%'}
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavClick('admissions/tour')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50/70 text-stone-800 font-medium group cursor-pointer"
                  >
                    <div className="font-semibold text-stone-900 group-hover:text-amber-900">
                      📅 {currentLang === 'en' ? 'Saturday Campus Tour Booking' : 'Pemesanan Tur Kampus Sabtu'}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {currentLang === 'en' ? 'Visit campus and meet our principals' : 'Pilih sesi tur dan konsultasi 1-on-1'}
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Button 7: Chronicle / Berita */}
          <button
            onClick={() => handleNavClick('news')}
            onMouseEnter={handleImmediateClose}
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
            onMouseEnter={handleImmediateClose}
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
