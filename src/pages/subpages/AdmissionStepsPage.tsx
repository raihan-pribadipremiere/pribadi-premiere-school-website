import React from 'react';
import { Language } from '../../types';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Sparkles, CheckCircle2, ArrowRight, FileText, Calendar, HelpCircle, Phone } from 'lucide-react';

interface AdmissionStepsPageProps {
  currentLang: Language;
  onNavigate: (page: string) => void;
  onOpenTourModal: () => void;
  onOpenAdmissions: () => void;
}

export const AdmissionStepsPage: React.FC<AdmissionStepsPageProps> = ({
  currentLang,
  onNavigate,
  onOpenTourModal,
  onOpenAdmissions
}) => {
  const siblingLinks = [
    { label: currentLang === 'en' ? 'Admission Steps' : 'Alur PPDB', page: 'admissions/steps', active: true },
    { label: currentLang === 'en' ? 'Fee Calculator' : 'Kalkulator Biaya', page: 'admissions/calculator' },
    { label: currentLang === 'en' ? 'Scholarship Guide' : 'Panduan Beasiswa', page: 'admissions/scholarships' },
    { label: currentLang === 'en' ? 'Book Saturday Tour' : 'Tur Sabtu', page: 'admissions/tour' }
  ];

  const steps = [
    {
      num: 1,
      title: { en: 'Online Registration & Account Creation', id: 'Pendaftaran Online & Pembuatan Akun' },
      desc: {
        en: 'Fill out the initial student biographical form on our admissions portal and pay the admission registration fee.',
        id: 'Mengisi formulir data calon siswa secara daring melalui portal PPDB dan menyelesaikan biaya registrasi pendaftaran.'
      }
    },
    {
      num: 2,
      title: { en: 'Document Upload & Academic Review', id: 'Unggah Berkas Persyaratan & Rapor' },
      desc: {
        en: 'Submit digital copies of birth certificate, Family Card (KK), recent school report cards (for SD/SMP/SMA), and health questionnaire.',
        id: 'Mengunggah akta kelahiran, Kartu Keluarga (KK), fotokopi rapor 2 semester terakhir, dan kuesioner kesehatan anak.'
      }
    },
    {
      num: 3,
      title: { en: 'Diagnostic Assessment & Student Interview', id: 'Tes Pemetaan & Wawancara Calon Siswa' },
      desc: {
        en: 'Preschool/TK: Play observation with early childhood coordinator. SD/SMP/SMA: English, Mathematics & logic readiness test plus student interview.',
        id: 'TK: Observasi kesiapan bermain & sosialisasi. SD/SMP/SMA: Tes diagnostik Bahasa Inggris, Matematika & wawancara ramah bersama konselor.'
      }
    },
    {
      num: 4,
      title: { en: 'Parent Consultation & Result Announcement', id: 'Wawancara Orang Tua & Pengumuman Hasil' },
      desc: {
        en: 'School leadership discusses the child’s assessment findings with parents, outlining individualized support before official offer letter is issued.',
        id: 'Penyampaian hasil observasi kepada orang tua, penyelarasan visi pendidikan, serta penerbitan Surat Keputusan Penerimaan (LoA).'
      }
    },
    {
      num: 5,
      title: { en: 'Re-Registration & Uniform Measurement', id: 'Daftar Ulang & Pengambilan Seragam' },
      desc: {
        en: 'Complete enrollment commitment, schedule uniform fitting, collect Chromebook device credentials, and attend campus orientation.',
        id: 'Penyelesaian administrasi daftar ulang, pengukuran seragam sekolah, aktivasi akun Google for Education, dan orientasi siswa baru.'
      }
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      <Breadcrumbs 
        currentLang={currentLang}
        items={[
          { label: currentLang === 'en' ? 'PPDB 2026/2027' : 'PPDB 2026/2027', page: 'admissions' },
          { label: currentLang === 'en' ? 'Step-by-Step Enrollment Guide' : 'Tahapan & Alur Pendaftaran PPDB' }
        ]}
        onNavigate={onNavigate}
        siblingLinks={siblingLinks}
      />

      <section className="bg-linear-to-b from-stone-900 to-amber-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-800/80 border border-amber-600/50 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Academic Year 2026/2027 · Open Now</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4 leading-tight">
            {currentLang === 'en' 
              ? 'Admission Procedure: TK, SD, SMP & SMA' 
              : 'Alur & Persyaratan Pendaftaran Siswa Baru'}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 max-w-3xl leading-relaxed">
            {currentLang === 'en'
              ? 'A smooth, transparent, and supportive admissions journey designed to welcome your family into the Pribadi Premiere community.'
              : 'Panduan lengkap tahapan pendaftaran murid baru jenjang TK, SD, SMP, dan SMA di Pribadi Premiere School Grand Depok City.'}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {steps.map((st) => (
            <div key={st.num} className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs flex items-start gap-4 sm:gap-6">
              <span className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 font-serif font-bold text-xl flex items-center justify-center shrink-0">
                {st.num}
              </span>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                  {st.title[currentLang]}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {st.desc[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm text-center">
          <h3 className="font-serif font-bold text-stone-900 text-xl mb-2">
            {currentLang === 'en' ? 'Have Questions on Admission?' : 'Butuh Bantuan Pendaftaran?'}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mb-6">
            Tim Admission Ms. Dinda siap membantu Anda melalui konsultasi online maupun langsung di kampus.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={onOpenAdmissions}
              className="px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl text-xs cursor-pointer"
            >
              {currentLang === 'en' ? 'Open PPDB Online Form' : 'Buka Formulir PPDB Online'}
            </button>
            <a
              href="https://wa.me/6281232331995"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Admission</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
