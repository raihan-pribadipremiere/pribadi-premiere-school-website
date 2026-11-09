import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Microchip, Sparkles, Cpu, Atom, FlaskConical, Code2, ArrowRight } from 'lucide-react';

interface RoboticsLabsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const RoboticsLabsPage: React.FC<RoboticsLabsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'GDC Campus' : 'Kampus GDC', page: 'campus-life/gdc' },
    { label: currentLang === 'en' ? 'Robotics & Labs' : 'Lab Sains & AI', page: 'campus-life/labs', active: true },
    { label: currentLang === 'en' ? 'Boarding Residence' : 'Asrama 24 Jam', page: 'campus-life/boarding' },
    { label: currentLang === 'en' ? 'Sports & Pool' : 'Olahraga & Kolam', page: 'campus-life/sports' },
    { label: currentLang === 'en' ? 'Clubs & Activities' : 'Ekstrakurikuler', page: 'campus-life/clubs' }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'Campus Life' : 'Fasilitas & Asrama', page: 'campus-life' },
          { label: currentLang === 'en' ? 'Robotics & STEM Laboratories' : 'Laboratorium Robotika & STEM' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Cambridge Standard Science & AI Hub</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Next-Generation Robotics & Science Labs' 
              : 'Laboratorium Sains Cambridge, AI & Robotika'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Where theory transforms into tangible discovery. Equipped with 3D printers, microcontrollers, research-grade optics, and chemical fume hoods.'
              : 'Tempat bertemunya rasa ingin tahu dan teknologi. Dilengkapi perangkat mikrokontroler Arduino/Raspberry Pi, sensor fisika digital, laboratorium kimia-biologi steril, serta studio coding berkecepatan tinggi.'}
          </p>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Robotics & Mechatronics Studio
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'LEGO Mindstorms, VEX Robotics, and custom Arduino microcontrollers for national robot competitions and IoT projects.'
                : 'Pusat perakitan robotika, programming sensor, dan persiapan kompetisi robotik tingkat nasional dan internasional.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4">
              <FlaskConical className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Cambridge Chemistry & Biology Lab
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'Certified fume extraction hoods, digital microscopes, and spectrophotometers enabling university-level research projects.'
                : 'Laboratorium basah berstandar Cambridge International dengan lemari asam dan mikroskop digital untuk riset biologi dan kimia.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-base mb-2">
              Coding & Artificial Intelligence Lab
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'High-performance workstations dedicated to Python scripting, algorithmic training, web architecture, and OSN Informatics practice.'
                : 'Studio komputer workstation berkecepatan tinggi untuk pembelajaran Python, web development, dan latihan olimpiade informatika.'}
            </p>
          </div>
        </div>

        {/* STEM Innovation Showcase */}
        <div className="mt-10 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4 bg-stone-50 p-4 rounded-2xl flex items-center justify-center border border-stone-100">
            <img 
              src="/assets/aistudio/LOGO_STEM_WEEK___PREMIERE_7ec430c1.png" 
              alt="STEM Week & Premiere" 
              className="max-h-28 w-auto object-contain"
            />
          </div>
          <div className="w-full md:w-3/4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-100 text-amber-900">
                Pribadi Premiere Innovation Lab
              </span>
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900">
              {currentLang === 'en' ? 'STEAM Project-Based Learning & Maker Space' : 'Pembelajaran STEAM Berbasis Proyek & Kreasi Robotika'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {currentLang === 'en'
                ? 'From elementary grade prototyping to high school AI robotics, our labs host weekly hands-on challenges and preparation for the annual Premiere STEM Week championships.'
                : 'Mulai dari prototipe sains siswa SD hingga robotika AI tingkat SMA, laboratorium kami menjadi wadah eksperimen mingguan sekaligus persiapan kejuaraan tahunan Premiere STEM Week.'}
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenTourModal}
            className="px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs sm:text-sm cursor-pointer shadow-sm"
          >
            {currentLang === 'en' ? 'Book a Tour of Science Labs' : 'Kunjungi Laboratorium Saat Tur Kampus'}
          </button>
        </div>
      </section>
    </div>
  );
};
