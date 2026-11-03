import React from 'react';
import { Language } from '../types';
import { schoolProfile } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, ArrowUp, Sparkles, Calendar } from 'lucide-react';

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
      {/* Upper Footer: Highlights & Campus Information */}
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
                  Grand Depok City Campus (4,000 m²)
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm italic">
              "{schoolProfile.tagline[currentLang]}"
            </p>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {currentLang === 'en'
                ? 'Empowering students through Cambridge International curricula, 1:1 Chromebook digital classrooms, state-of-the-art STEM facilities, and national character formation under Yayasan Yenbu Indonesia.'
                : 'Membina generasi unggul berstandar global melalui kurikulum Cambridge International, ruang kelas digital 1:1, studio robotika mutakhir, dan pembinaan karakter di bawah naungan Yayasan Yenbu Indonesia.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 bg-stone-800 border border-stone-700 rounded text-stone-300">
                Cambridge ID248
              </span>
              <span className="px-2.5 py-1 bg-stone-800 border border-stone-700 rounded text-stone-300">
                Akreditasi "A" Unggul BAN-SM
              </span>
              <span className="px-2.5 py-1 bg-stone-800 border border-stone-700 rounded text-stone-300">
                NPSN SMA 70043757 · SMP 70044693
              </span>
            </div>

            {/* Official Social Media */}
            <div className="pt-2 flex items-center gap-3 text-xs text-stone-400">
              <a 
                href="https://instagram.com/pribadipremiereschool" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                title="Instagram Resmi @pribadipremiereschool"
              >
                <span>📷</span>
                <span>@pribadipremiereschool</span>
              </a>
              <span className="text-stone-700">·</span>
              <a 
                href="https://youtube.com/@sekolahpribadidepok" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                title="YouTube Resmi Sekolah Pribadi Depok"
              >
                <span>▶️</span>
                <span>YouTube</span>
              </a>
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
                  {currentLang === 'en' ? 'Contact & Location' : 'Kontak & Lokasi'}
                </button>
              </li>
            </ul>
          </div>

          {/* Campus Location: GDC Premiere (3 cols) */}
          <div className="lg:col-span-3 space-y-2 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Pribadi Premiere (Grand Depok City)
            </h4>
            <p className="text-stone-400 leading-relaxed">
              {schoolProfile.locationGdc.address}
            </p>
            <div className="space-y-1 pt-1 text-stone-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>{schoolProfile.locationGdc.phone} ({schoolProfile.locationGdc.contactPerson})</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>{schoolProfile.locationGdc.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>{schoolProfile.locationGdc.operatingHours}</span>
              </div>
            </div>
            <p className="text-[11px] text-stone-500 pt-1">
              TK · SD · SMP · SMA (4,000 m² Digital Campus & 24h Boarding)
            </p>
          </div>

          {/* Admissions & Quick Actions (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {currentLang === 'en' ? 'Enrollment & Campus Tour' : 'Penerimaan Siswa Baru'}
            </h4>
            <p className="text-stone-400 leading-relaxed">
              {currentLang === 'en'
                ? 'PPDB 2026/2027 is currently open with Early Bird incentives and Science Olympiad scholarships up to 100%.'
                : 'PPDB 2026/2027 saat ini dibuka dengan potongan Early Bird 15% serta beasiswa prestasi sains hingga 100%.'}
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={onOpenAdmissions}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{currentLang === 'en' ? 'Register for PPDB Online' : 'Daftar PPDB Online'}</span>
              </button>
              <button
                onClick={onOpenTourModal}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-lg transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{currentLang === 'en' ? 'Book Saturday Tour' : 'Jadwalkan Tur Kampus Sabtu'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Lower Banner: Copyright Strip */}
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
