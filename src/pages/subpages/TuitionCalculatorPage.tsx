import React, { useState } from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Calculator, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface TuitionCalculatorPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: (programId?: string) => void;
}

export const TuitionCalculatorPage: React.FC<TuitionCalculatorPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const [stage, setStage] = useState<'kindergarten' | 'primary' | 'junior' | 'senior'>('kindergarten');
  const [isBoarding, setIsBoarding] = useState<boolean>(false);
  const [applyEarlyBird, setApplyEarlyBird] = useState<boolean>(true);

  const siblingLinks = [
    { label: currentLang === 'en' ? 'Admission Steps' : 'Alur PPDB', page: 'admissions/steps' },
    { label: currentLang === 'en' ? 'Fee Calculator' : 'Kalkulator Biaya', page: 'admissions/calculator', active: true },
    { label: currentLang === 'en' ? 'Scholarship Guide' : 'Panduan Beasiswa', page: 'admissions/scholarships' },
    { label: currentLang === 'en' ? 'Book Saturday Tour' : 'Tur Sabtu', page: 'admissions/tour' }
  ];

  const feeData = {
    kindergarten: {
      name: { en: 'Preschool & TK', id: 'PAUD & TK' },
      regFee: 750000,
      entranceFee: 18000000,
      monthlyTuition: 2200000,
      boardingMonthly: 0,
      canBoard: false
    },
    primary: {
      name: { en: 'Primary (SD)', id: 'SD Pribadi Premiere' },
      regFee: 1000000,
      entranceFee: 32000000,
      monthlyTuition: 3600000,
      boardingMonthly: 0,
      canBoard: false
    },
    junior: {
      name: { en: 'Junior High (SMP)', id: 'SMP Pribadi Premiere' },
      regFee: 1200000,
      entranceFee: 38000000,
      monthlyTuition: 4200000,
      boardingMonthly: 3500000,
      canBoard: true
    },
    senior: {
      name: { en: 'Senior High (SMA)', id: 'SMA Pribadi Premiere' },
      regFee: 1200000,
      entranceFee: 42000000,
      monthlyTuition: 4800000,
      boardingMonthly: 3500000,
      canBoard: true
    }
  };

  const selected = feeData[stage];
  const discountRate = applyEarlyBird ? 0.15 : 0;
  const discountedEntrance = selected.entranceFee * (1 - discountRate);
  const savings = selected.entranceFee * discountRate;

  const totalFirstYear = discountedEntrance + (selected.monthlyTuition * 12) + 
    (isBoarding && selected.canBoard ? (selected.boardingMonthly || 0) * 12 : 0);

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'PPDB 2026/2027' : 'PPDB 2026/2027', page: 'admissions' },
          { label: currentLang === 'en' ? 'Tuition & Fee Investment Calculator' : 'Kalkulator Simulasi Biaya Pendidikan' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Transparent Investment · Early Bird 15% Waiver</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Tuition & Fee Investment Calculator' 
              : 'Kalkulator & Estimasi Biaya Pendidikan PPDB'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'Calculate estimated tuition, admission fee, and boarding investment tailored to your child’s educational stage.'
              : 'Simulasikan estimasi biaya pendaftaran, uang pangkal, SPP bulanan, dan asrama untuk jenjang TK, SD, SMP, dan SMA.'}
          </p>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Options */}
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                  1. {currentLang === 'en' ? 'Select Academic Level:' : 'Pilih Jenjang Pendidikan:'}
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {(['kindergarten', 'primary', 'junior', 'senior'] as const).map(st => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => {
                        setStage(st);
                        if (st === 'kindergarten' || st === 'primary') setIsBoarding(false);
                      }}
                      className={`p-3 rounded-xl font-bold border transition-all cursor-pointer text-left ${
                        stage === st
                          ? 'bg-amber-800 text-white border-amber-800 shadow-xs'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                      }`}
                    >
                      {feeData[st].name[currentLang]}
                    </button>
                  ))}
                </div>
              </div>

              {selected.canBoard && (
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                    2. {currentLang === 'en' ? 'Boarding Residence Option:' : 'Pilihan Program Asrama 24 Jam:'}
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setIsBoarding(false)}
                      className={`p-3 rounded-xl font-bold border transition-all cursor-pointer ${
                        !isBoarding
                          ? 'bg-amber-800 text-white border-amber-800'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                      }`}
                    >
                      Day School (07:30 – 15:30)
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsBoarding(true)}
                      className={`p-3 rounded-xl font-bold border transition-all cursor-pointer ${
                        isBoarding
                          ? 'bg-amber-800 text-white border-amber-800'
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                      }`}
                    >
                      24h Boarding Residence
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer bg-amber-50 p-3.5 rounded-xl border border-amber-200">
                  <input
                    type="checkbox"
                    checked={applyEarlyBird}
                    onChange={(e) => setApplyEarlyBird(e.target.checked)}
                    className="w-4 h-4 text-amber-800 rounded accent-amber-800"
                  />
                  <span className="text-xs text-amber-950 font-semibold">
                    {currentLang === 'en' 
                      ? 'Apply 15% Early Bird Waiver (Registration by November 2026)' 
                      : 'Klaim Diskon Early Bird 15% Uang Pangkal (PPDB Gelombang 1)'}
                  </span>
                </label>
              </div>

            </div>

            {/* Breakdown Result */}
            <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                {currentLang === 'en' ? 'Investment Simulation' : 'Rincian Estimasi Biaya'}
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">
                {selected.name[currentLang]} {isBoarding ? '(Boarding)' : '(Day School)'}
              </h3>

              <div className="space-y-3 text-xs text-stone-700 border-b border-stone-200 pb-4 mb-4">
                <div className="flex justify-between">
                  <span>{currentLang === 'en' ? 'Registration & Assessment Form:' : 'Biaya Formulir & Tes Diagnostik:'}</span>
                  <span className="font-semibold text-stone-900">{formatIDR(selected.regFee)}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="block">{currentLang === 'en' ? 'Entrance Fee (Uang Pangkal):' : 'Uang Pangkal (1x diawal jenjang):'}</span>
                    {applyEarlyBird && (
                      <span className="text-[11px] text-emerald-700 font-semibold">Hemat {formatIDR(savings)} (Early Bird 15%)</span>
                    )}
                  </div>
                  <span className="font-semibold text-stone-900">{formatIDR(discountedEntrance)}</span>
                </div>

                <div className="flex justify-between">
                  <span>{currentLang === 'en' ? 'Monthly Tuition (SPP Bulanan):' : 'SPP Bulanan:'}</span>
                  <span className="font-semibold text-stone-900">{formatIDR(selected.monthlyTuition)} / bln</span>
                </div>

                {isBoarding && selected.canBoard && (
                  <div className="flex justify-between">
                    <span>{currentLang === 'en' ? 'Boarding Fee (Makan 3x + Laundry):' : 'Biaya Asrama (Makan 3x, Kamar AC, Laundry):'}</span>
                    <span className="font-semibold text-stone-900">{formatIDR(selected.boardingMonthly || 0)} / bln</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-serif font-bold text-sm text-stone-900">
                  {currentLang === 'en' ? 'Est. Total Year 1 Investment:' : 'Estimasi Total Tahun Pertama:'}
                </span>
                <span className="font-mono text-lg font-bold text-amber-900">
                  {formatIDR(totalFirstYear)}
                </span>
              </div>

              <button
                onClick={() => onOpenAdmissions(stage)}
                className="w-full py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors cursor-pointer text-center block shadow-sm"
              >
                {currentLang === 'en' ? 'Register with this Simulation' : 'Lanjut ke Pendaftaran Online'}
              </button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
