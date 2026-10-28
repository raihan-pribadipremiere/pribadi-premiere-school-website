import React from 'react';
import { Language } from '../types';
import { schoolProfile, campusesData } from '../data/schoolData';
import { MapPin, Phone, Mail, Award, Globe, Shield, ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate?: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      scrollToTop();
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* Upper Footer: Highlights & Campuses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-700 text-amber-50 flex items-center justify-center font-serif text-xl font-bold">
                P
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-white tracking-tight">
                  Pribadi Premiere School
                </span>
                <span className="block text-[11px] text-amber-400 font-mono tracking-wide uppercase">
                  Grand Depok City & Margonda Campuses
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              "{schoolProfile.tagline[currentLang]}"
            </p>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {currentLang === 'en'
                ? 'Empowering students through Cambridge International curricula, 1:1 Chromebook digital classrooms, and national character formation under Yayasan Yenbu Indonesia.'
                : 'Membina generasi unggul berstandar global melalui kurikulum Cambridge International, ruang kelas digital 1:1, dan pembinaan karakter di bawah naungan Yayasan Yenbu Indonesia.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 bg-stone-800 border border-stone-700 rounded text-stone-300">
                Cambridge School ID248
              </span>
              <span className="px-2.5 py-1 bg-stone-800 border border-stone-700 rounded text-stone-300">
                Akreditasi A Unggul
              </span>
              <span className="px-2.5 py-1 bg-stone-800 border border-stone-700 rounded text-stone-300">
                SPK Kemendikbud
              </span>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {currentLang === 'en' ? 'Pages' : 'Halaman'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  {currentLang === 'en' ? 'Home' : 'Beranda'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  {currentLang === 'en' ? 'About Us (Profil)' : 'Profil Sekolah'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  {currentLang === 'en' ? 'Academics & Curricula' : 'Kurikulum & Jenjang'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('achievements')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  {currentLang === 'en' ? 'Olympiad & Alumni' : 'Prestasi & Alumni'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('campus-life')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  {currentLang === 'en' ? 'Campus & Facilities' : 'Fasilitas & Kampus'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  {currentLang === 'en' ? 'PPDB 2026/2027 Portal' : 'Pendaftaran PPDB'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('news')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  {currentLang === 'en' ? 'Chronicle & Calendar' : 'Berita & Kalender'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors text-left cursor-pointer">
                  {currentLang === 'en' ? 'Contact & Locations' : 'Kontak & Lokasi'}
                </button>
              </li>
            </ul>
          </div>

          {/* Campus 1: GDC Premiere (3 cols) */}
          <div className="lg:col-span-3 space-y-2 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Pribadi Premiere (Grand Depok City)
            </h4>
            <p className="text-stone-400 leading-relaxed">
              {schoolProfile.locationGdc.address}
            </p>
            <div className="space-y-1 pt-1 text-stone-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-500" />
                <span>{schoolProfile.locationGdc.phone} ({schoolProfile.locationGdc.contactPerson})</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <span>{schoolProfile.locationGdc.email}</span>
              </div>
            </div>
            <p className="text-[11px] text-stone-500 pt-1">
              TK · SD · SMP · SMA (4,000 m² Digital Campus)
            </p>
          </div>

          {/* Campus 2: Margonda (3 cols) */}
          <div className="lg:col-span-3 space-y-2 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Pribadi Margonda Campus
            </h4>
            <p className="text-stone-400 leading-relaxed">
              {schoolProfile.locationMargonda.address}
            </p>
            <div className="space-y-1 pt-1 text-stone-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-500" />
                <span>{schoolProfile.locationMargonda.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <span>{schoolProfile.locationMargonda.email}</span>
              </div>
            </div>
            <p className="text-[11px] text-stone-500 pt-1">
              TK · SD · SMP · SMA · Full Boarding House
            </p>
          </div>

        </div>

        {/* Lower Banner: PPDB Quick Contact Strip */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-stone-400 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Pribadi Premiere School. Yayasan Yenbu Indonesia.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTourModal}
              className="text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              {currentLang === 'en' ? 'Book Campus Tour' : 'Jadwal Tur Kampus'}
            </button>
            <span className="text-stone-700">·</span>
            <button
              onClick={onOpenAdmissions}
              className="text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer"
            >
              {currentLang === 'en' ? 'Enrollment 2026/2027' : 'Pendaftaran PPDB Online'}
            </button>
            <span className="text-stone-700">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>{currentLang === 'en' ? 'Back to Top' : 'Ke Atas'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
