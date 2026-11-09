import React, { useState } from 'react';
import { Language } from '../types';
import { tuitionEstimates } from '../data/schoolData';
import { Calculator, CheckCircle2, FileText, CalendarCheck, HelpCircle, ArrowRight, X, Sparkles } from 'lucide-react';

interface AdmissionsPortalProps {
  currentLang: Language;
  onOpenBooking: () => void;
  preselectedProgram?: string;
}

export const AdmissionsPortal: React.FC<AdmissionsPortalProps> = ({
  currentLang,
  onOpenBooking,
  preselectedProgram
}) => {
  // Calculator state
  const [selectedLevel, setSelectedLevel] = useState<'primary' | 'juniorHigh' | 'seniorHigh'>(
    preselectedProgram === 'primary' ? 'primary' : preselectedProgram === 'seniorHigh' ? 'seniorHigh' : 'juniorHigh'
  );
  const [includeBoarding, setIncludeBoarding] = useState<boolean>(false);
  const [discountType, setDiscountType] = useState<'none' | 'early_bird' | 'scholarship'>('early_bird');

  // Registration Form Modal State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    whatsapp: '',
    email: '',
    currentSchool: '',
    level: 'juniorHigh',
    track: 'regular',
    boarding: false,
    notes: ''
  });
  const [submittedSlip, setSubmittedSlip] = useState<{
    regNumber: string;
    studentName: string;
    level: string;
    date: string;
  } | null>(null);

  // Calculate pricing
  const baseFees = tuitionEstimates[selectedLevel];
  const devFeeDiscountRate = discountType === 'early_bird' ? 0.15 : discountType === 'scholarship' ? 0.50 : 0;
  const netDevelopmentFee = baseFees.developmentFee * (1 - devFeeDiscountRate);
  const boardingMonthly = (includeBoarding && selectedLevel !== 'primary') ? baseFees.boardingFee : 0;
  const firstMonthTotal = baseFees.formFee + netDevelopmentFee + baseFees.monthlyTuition + boardingMonthly + baseFees.uniformAndBooks;
  const fullYearEstimate = baseFees.formFee + netDevelopmentFee + baseFees.uniformAndBooks + ((baseFees.monthlyTuition + boardingMonthly) * 12);

  const formatIdr = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.whatsapp || !formData.parentName) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const slip = {
      regNumber: `PPDB-2026-${randomNum}`,
      studentName: formData.studentName,
      level: formData.level.toUpperCase(),
      date: new Date().toLocaleDateString('en-GB')
    };

    setSubmittedSlip(slip);
  };

  return (
    <section id="admissions" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
            {currentLang === 'en' ? 'Admissions & Enrollment' : 'Penerimaan Peserta Didik Baru (PPDB 2026/2027)'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight">
            {currentLang === 'en'
              ? 'Transparent investment in your child\'s global character and intellect.'
              : 'Investasi pendidikan transparan untuk masa depan dan karakter ananda tercinta.'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {currentLang === 'en'
              ? 'Calculate your estimated tuition fees, explore early-bird registration privileges, and register online for Academic Year 2026/2027.'
              : 'Hitung simulasi pembiayaan sekolah, manfaatkan potongan Early Bird dan beasiswa berprestasi, serta daftar online secara praktis.'}
          </p>
        </div>

        {/* 2-Column Section: Calculator & Admission Steps */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Fee Calculator */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-800" />
                <h3 className="text-base font-bold text-stone-900">
                  {currentLang === 'en' ? 'Tuition & Fee Estimator (AY 2026/2027)' : 'Simulasi Biaya Pendidikan (TA 2026/2027)'}
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md">
                {currentLang === 'en' ? 'Official Rates' : 'Tarif Resmi'}
              </span>
            </div>

            {/* Level Controls */}
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                  {currentLang === 'en' ? 'Select Academic Level' : 'Pilih Jenjang Sekolah'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['primary', 'juniorHigh', 'seniorHigh'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        setSelectedLevel(lvl);
                        if (lvl === 'primary') setIncludeBoarding(false);
                      }}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                        selectedLevel === lvl
                          ? 'border-amber-800 bg-amber-50/70 text-amber-950 shadow-xs'
                          : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {tuitionEstimates[lvl].name[currentLang]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Boarding Switch (only for SMP and SMA) */}
              {selectedLevel !== 'primary' && (
                <div className="pt-2">
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                    {currentLang === 'en' ? 'Residence / Program Type' : 'Jenis Program Siswa'}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setIncludeBoarding(false)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                        !includeBoarding
                          ? 'border-amber-800 bg-amber-50/70 text-amber-950 shadow-xs'
                          : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {currentLang === 'en' ? 'Full-Day School' : 'Non-Asrama (Full-Day)'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIncludeBoarding(true)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                        includeBoarding
                          ? 'border-amber-800 bg-amber-50/70 text-amber-950 shadow-xs'
                          : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {currentLang === 'en' ? 'Boarding (Dormitory)' : 'Asrama (Boarding School)'}
                    </button>
                  </div>
                </div>
              )}

              {/* Discount/Scholarship track */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                  {currentLang === 'en' ? 'Incentive & Scholarship Tier' : 'Jalur Potongan / Beasiswa'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setDiscountType('early_bird')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                      discountType === 'early_bird'
                        ? 'border-amber-800 bg-amber-50/70 text-amber-950 shadow-xs'
                        : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    Early Bird (-15%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDiscountType('scholarship')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                      discountType === 'scholarship'
                        ? 'border-amber-800 bg-amber-50/70 text-amber-950 shadow-xs'
                        : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    OSN / Tahfidz (-50%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDiscountType('none')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                      discountType === 'none'
                        ? 'border-amber-800 bg-amber-50/70 text-amber-950 shadow-xs'
                        : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    Regular / Standard
                  </button>
                </div>
              </div>

              {/* Line Item Breakdown */}
              <div className="pt-4 mt-4 border-t border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>{currentLang === 'en' ? 'Registration & Assessment Fee:' : 'Formulir & Tes Diagnostik:'}</span>
                  <span className="font-mono tabular-nums text-stone-900">{formatIdr(baseFees.formFee)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <div className="flex items-center gap-1.5">
                    <span>{currentLang === 'en' ? 'Development Fee (Uang Pangkal):' : 'Uang Pangkal / Sarana:'}</span>
                    {devFeeDiscountRate > 0 && (
                      <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-1 rounded">
                        -{(devFeeDiscountRate * 100)}%
                      </span>
                    )}
                  </div>
                  <span className="font-mono tabular-nums text-stone-900">{formatIdr(netDevelopmentFee)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>{currentLang === 'en' ? 'Monthly Tuition (SPP):' : 'SPP Bulanan:'}</span>
                  <span className="font-mono tabular-nums text-stone-900">{formatIdr(baseFees.monthlyTuition)} / mo</span>
                </div>
                {includeBoarding && selectedLevel !== 'primary' && (
                  <div className="flex justify-between text-stone-600">
                    <span>{currentLang === 'en' ? 'Boarding Fee (3x Meals + Laundry + AC):' : 'Biaya Asrama (Makan 3x + Laundry):'}</span>
                    <span className="font-mono tabular-nums text-stone-900">{formatIdr(baseFees.boardingFee)} / mo</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-600">
                  <span>{currentLang === 'en' ? 'Books & Standard Uniform Sets:' : 'Paket Buku & Seragam Standar:'}</span>
                  <span className="font-mono tabular-nums text-stone-900">{formatIdr(baseFees.uniformAndBooks)}</span>
                </div>
              </div>

              {/* Totals Banner */}
              <div className="mt-6 p-4 rounded-xl bg-stone-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-stone-400 block font-mono uppercase tracking-wider">
                    {currentLang === 'en' ? 'Estimated Initial Investment' : 'Estimasi Pembayaran Awal'}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-amber-300">
                    {formatIdr(firstMonthTotal)}
                  </span>
                </div>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="px-4 py-2.5 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                >
                  {currentLang === 'en' ? 'Start Online Registration' : 'Mulai Pendaftaran Online'}
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Admission Roadmap & Requirements */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-stone-900 pb-2 border-b border-stone-100 flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-amber-800" />
                <span>{currentLang === 'en' ? 'PPDB 2026/2027 Roadmap' : 'Alur Pendaftaran PPDB 2026/2027'}</span>
              </h3>

              <div className="space-y-4 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs">
                      {currentLang === 'en' ? 'Online Form & Document Upload' : 'Pengisian Formulir & Berkas'}
                    </h4>
                    <p className="text-stone-500 mt-0.5 leading-normal">
                      {currentLang === 'en' ? 'Submit student identity, report card copy, and choose track.' : 'Mengisi data diri calon siswa, rapor 2 semester terakhir, dan pasfoto.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs">
                      {currentLang === 'en' ? 'Cambridge Diagnostic & Scholastic Test' : 'Tes Diagnostik Cambridge & Skolastik'}
                    </h4>
                    <p className="text-stone-500 mt-0.5 leading-normal">
                      {currentLang === 'en' ? 'Assessment of English, Mathematics logic, and learning readiness.' : 'Pemetaan potensi akademik, logika matematika, dan kemampuan bahasa Inggris.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs">
                      {currentLang === 'en' ? 'Student & Parent Interview' : 'Wawancara Orang Tua & Calon Siswa'}
                    </h4>
                    <p className="text-stone-500 mt-0.5 leading-normal">
                      {currentLang === 'en' ? 'Aligning educational vision, character habituation, and dormitory briefing.' : 'Penyelarasan visi pendidikan keluarga dan pembiasaan adab siswa di sekolah.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center font-mono font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-xs">
                      {currentLang === 'en' ? 'Official Acceptance & Welcome Pack' : 'Pengumuman Hasil & Daftar Ulang'}
                    </h4>
                    <p className="text-stone-500 mt-0.5 leading-normal">
                      {currentLang === 'en' ? 'Letter of acceptance sent via email and orientation handbook.' : 'Surat kelulusan resmi, konfirmasi seragam, dan jadwal orientasi siswa baru.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs space-y-2">
                <span className="font-semibold text-amber-950 block">
                  {currentLang === 'en' ? 'Need customized admission guidance?' : 'Butuh konsultasi langsung dengan tim PPDB?'}
                </span>
                <p className="text-stone-700 leading-normal">
                  {currentLang === 'en' 
                    ? 'Our admission counselors are available for WhatsApp chat and weekend campus consultations.' 
                    : 'Tim konselor PPDB Pribadi Premiere School siap melayani konsultasi via WhatsApp atau kunjungan langsung setiap Sabtu.'}
                </p>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-amber-900 hover:text-amber-950 font-bold mt-1"
                >
                  <span>{currentLang === 'en' ? 'Book a personal consultation' : 'Jadwalkan sesi konsultasi'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Online Registration Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/aistudio/Logo_Sekolah_95441e87.png" 
                  alt="Logo Pribadi Premiere School"
                  className="w-10 h-11 object-contain shrink-0" 
                />
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif">
                    {currentLang === 'en' ? 'Online Student Registration (PPDB 2026)' : 'Formulir Pendaftaran Siswa Baru (PPDB 2026)'}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">
                    Pribadi Premiere School · Cambridge International ID248
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsFormOpen(false);
                  setSubmittedSlip(null);
                }}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedSlip ? (
              <div className="py-6 space-y-4 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  {currentLang === 'en' ? 'Registration Pre-Registered Successfully!' : 'Pendaftaran Berhasil Dicatat!'}
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  {currentLang === 'en'
                    ? 'Our admissions committee has received your details. A WhatsApp confirmation and placement test guide has been dispatched.'
                    : 'Data ananda telah tersimpan dalam sistem PPDB Pribadi Premiere School. Tim admissions akan menghubungi via WhatsApp dalam 1x24 jam.'}
                </p>

                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-left max-w-sm mx-auto space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Reg No:</span>
                    <span className="font-bold text-stone-900">{submittedSlip.regNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Candidate:</span>
                    <span className="font-bold text-stone-900">{submittedSlip.studentName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Level:</span>
                    <span className="font-bold text-stone-900">{submittedSlip.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Date:</span>
                    <span className="text-stone-900">{submittedSlip.date}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsFormOpen(false);
                      setSubmittedSlip(null);
                    }}
                    className="px-5 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors"
                  >
                    {currentLang === 'en' ? 'Done & Return to Website' : 'Selesai'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="mt-4 space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    {currentLang === 'en' ? 'Prospective Student Full Name *' : 'Nama Lengkap Calon Siswa *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Muhammad Fatih Pratama"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/20 text-stone-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      {currentLang === 'en' ? 'Parent / Guardian Name *' : 'Nama Orang Tua / Wali *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Ir. Budi Santoso"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/20 text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      {currentLang === 'en' ? 'WhatsApp Phone Number *' : 'Nomor WhatsApp Aktif *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+62 812-xxxx-xxxx"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/20 text-stone-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      {currentLang === 'en' ? 'Target Education Level' : 'Jenjang Dituju'}
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/20 text-stone-900 bg-white"
                    >
                      <option value="primary">SD Pribadi (Primary)</option>
                      <option value="juniorHigh">SMP Pribadi (Junior High)</option>
                      <option value="seniorHigh">SMA Pribadi (Senior High)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">
                      {currentLang === 'en' ? 'Admission Track' : 'Pilihan Jalur'}
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/20 text-stone-900 bg-white"
                    >
                      <option value="regular">Regular Track (Early Bird)</option>
                      <option value="olympiad">Science & Math Olympiad (OSN)</option>
                      <option value="tahfidz">Tahfidz Al-Qur'an Track</option>
                      <option value="talent">Academic & Arts Talent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-stone-700 mb-1">
                    {currentLang === 'en' ? 'Current / Previous School' : 'Asal Sekolah Saat Ini'}
                  </label>
                  <input
                    type="text"
                    value={formData.currentSchool}
                    onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                    placeholder="e.g. SD Al-Azhar / Sekolah Internasional"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/20 text-stone-900"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
                  >
                    {currentLang === 'en' ? 'Cancel' : 'Batal'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-sm transition-colors"
                  >
                    {currentLang === 'en' ? 'Submit Registration' : 'Kirim Pendaftaran'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
