import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Landmark, History, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface FoundationPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const FoundationPage: React.FC<FoundationPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Vision & Mission' : 'Visi & Misi', page: 'about/vision' },
    { label: currentLang === 'en' ? 'Foundation Heritage' : 'Yayasan Yenbu', page: 'about/heritage', active: true },
    { label: currentLang === 'en' ? 'Head of School Letter' : 'Sambutan Kepala', page: 'about/headmaster' },
    { label: currentLang === 'en' ? 'Accreditations' : 'Akreditasi', page: 'about/accreditations' },
    { label: currentLang === 'en' ? 'Faculty & Mentors' : 'Dewan Guru', page: 'about/faculty' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'About Us' : 'Profil Sekolah', page: 'about' },
          { label: currentLang === 'en' ? 'Yayasan Yenbu Indonesia Heritage' : 'Profil Yayasan Yenbu Indonesia' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Founded 1995 · 30+ Years of Educational Legacy</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Yayasan Yenbu Indonesia: Dedicated to National Excellence' 
              : 'Yayasan Yenbu Indonesia: Tiga Dekade Mengabdi untuk Pendidikan'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Founded with a profound philanthropic vision to elevate Indonesian youth to international science benchmarks while anchoring them in noble Islamic and Indonesian values.'
              : 'Didirikan dengan komitmen luhur memajukan mutu sumber daya manusia Indonesia melalui pendidikan sains bertaraf dunia yang berakar pada akhlak mulia dan kecintaan tanah air.'}
          </p>
        </div>
      </section>

      {/* Story & Institutional Partnership */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm leading-relaxed text-xs sm:text-sm text-stone-700 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-4">
              <img 
                src="/assets/aistudio/Logo_Sekolah_95441e87.png" 
                alt="Pribadi Premiere School Crest" 
                className="h-16 w-auto object-contain"
              />
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-lg">Yayasan Yenbu Indonesia</h3>
                <p className="text-xs text-stone-500">Pribadi Premiere School · Grand Depok City Campus</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-stone-50 px-4 py-3 rounded-2xl border border-stone-200/80">
              <div className="text-right">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-stone-400">Strategic Partner</span>
                <span className="text-xs font-bold text-stone-800">Eduversal Indonesia</span>
              </div>
              <img 
                src="/assets/aistudio/LOGO_PREMIERE_EDUVERSAL_8eaef59e.png" 
                alt="Eduversal & Pribadi Premiere Strategic Academic Alliance" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            {currentLang === 'en' ? 'The Vision of Yayasan Yenbu Indonesia & Eduversal Partnership' : 'Sejarah, Komitmen Yayasan & Kemitraan Eduversal'}
          </h2>
          <p>
            {currentLang === 'en'
              ? 'Since 1995, Yayasan Yenbu Indonesia has been a pioneer in bilingual, values-based schooling in Indonesia. In strategic synergy with Eduversal Indonesia, known nationally for prestigious science olympiads, research incubation, and teacher professional development, the Foundation developed the purpose-built Pribadi Premiere School in Grand Depok City.'
              : 'Sejak tahun 1995, Yayasan Yenbu Indonesia memelopori model sekolah dwibahasa berasrama yang terbukti melahirkan ratusan medalis olimpiade sains dan pemimpin di berbagai bidang. Bersama Eduversal Indonesia sebagai mitra strategis pengembangan kurikulum olimpiade dan riset sains, Yayasan menghadirkan Pribadi Premiere School di Grand Depok City.'}
          </p>
          <p>
            {currentLang === 'en'
              ? 'The 4,000 m² Grand Depok City campus represents the culmination of this vision: integrated early childhood (TK), primary (SD), junior high (SMP), and senior high (SMA) education equipped with smart classrooms, scientific research laboratories, semi-Olympic sports facilities, and an attentive student boarding residence.'
              : 'Kampus modern Grand Depok City seluas 4.000 m² merupakan perwujudan komitmen ini: menyediakan jenjang lengkap dari TK, SD, SMP, hingga SMA yang terintegrasi dengan kelas cerdas Chromebook, laboratorium riset Cambridge, kolam renang semi-olimpik, dan asrama siswa 24 jam.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
              <History className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-1">
              {currentLang === 'en' ? 'Pioneering Heritage' : 'Pionir Bilingual'}
            </h3>
            <p className="text-xs text-stone-600">
              {currentLang === 'en' ? 'Decades of experience nurturing national science Olympiad champions.' : 'Puluhan tahun mencetak juara olimpiade sains dari tingkat kota hingga internasional.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-1">
              {currentLang === 'en' ? 'Institutional Trust' : 'Tata Kelola Amanah'}
            </h3>
            <p className="text-xs text-stone-600">
              {currentLang === 'en' ? 'Recognized with the highest accreditation honors from Kemendikbudristek and Cambridge.' : 'Terakreditasi "A" Unggul BAN-SM dan terdaftar resmi sebagai Cambridge International School.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-1">
              {currentLang === 'en' ? 'Scholarship Dedication' : 'Beasiswa Prestasi'}
            </h3>
            <p className="text-xs text-stone-600">
              {currentLang === 'en' ? 'Allocating substantial annual scholarship funds for deserving high-potential students.' : 'Menyalurkan beasiswa penuh s.d. 100% untuk talenta sains, tahfidz, dan siswa berprestasi.'}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-amber-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-serif font-bold mb-2">
          {currentLang === 'en' ? 'Meet School Leadership' : 'Sambutan Kepala Sekolah'}
        </h2>
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => onNavigate('about/headmaster')}
            className="px-5 py-2.5 bg-white text-amber-950 font-bold rounded-xl text-xs sm:text-sm hover:bg-amber-100 transition-colors cursor-pointer"
          >
            {currentLang === 'en' ? 'Read Head of School Letter →' : 'Baca Sambutan Kepala Sekolah →'}
          </button>
        </div>
      </section>
    </div>
  );
};
