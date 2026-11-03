import React, { useState } from 'react';
import { Language } from '../types';
import { schoolProfile } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Calendar, ExternalLink, Building2, Bed } from 'lucide-react';

interface ContactPageProps {
  currentLang: Language;
  onOpenTour: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  currentLang,
  onOpenTour
}) => {
  const [inquiryForm, setInquiryForm] = useState({
    parentName: '',
    phone: '',
    email: '',
    programType: 'day', // 'day' | 'boarding'
    level: 'primary',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.parentName || !inquiryForm.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              {currentLang === 'en' ? 'Pribadi Premiere Contact & Admissions' : 'Kontak & Informasi Admisi'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Connect with our admissions team or schedule a visit.'
                : 'Hubungi tim admisi kami atau jadwalkan kunjungan kampus.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'Located at Grand Depok City, our modern 4,000 m² campus welcomes prospective families for admissions consultations, assessment schedules, and Saturday guided campus tours.'
                : 'Berlokasi di Grand Depok City, kampus modern 4.000 m² kami siap menyambut calon orang tua murid untuk konsultasi pendaftaran PPDB, asesmen minat bakat, dan tur kampus.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Campus Information Cards */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Card 1: Academic & Admissions Office (Grand Depok City) */}
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase bg-amber-100 text-amber-900 px-2.5 py-1 rounded font-semibold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    Next-Gen Digital Campus (4,000 m²)
                  </span>
                  <span className="text-xs text-stone-500 font-mono">GDC, Sukmajaya</span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-stone-900">
                  Pribadi Premiere School (Admissions Office)
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Our 4,000 m² purpose-built campus in Grand Depok City, dedicated to 1:1 Chromebook digital classrooms, Cambridge curricula, robotics labs, semi-Olympic pool, and pre-university bridges.'
                    : 'Kampus modern seluas 4.000 m² di Boulevard Grand Depok City, dilengkapi ruang kelas digital 1:1 Chromebook, kurikulum Cambridge, studio robotika, dan kolam renang semi-olimpiade.'}
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>{schoolProfile.locationGdc.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>WhatsApp / Hotline: {schoolProfile.locationGdc.phone} ({schoolProfile.locationGdc.contactPerson})</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Telepon Alternatif: {schoolProfile.locationGdc.secondaryPhone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Email Informasi: {schoolProfile.locationGdc.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Email PPDB: {schoolProfile.locationGdc.admissionsEmail}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Email Administrasi: {schoolProfile.locationGdc.adminEmail}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>{schoolProfile.locationGdc.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex flex-wrap gap-2">
                <a
                  href="https://wa.me/6281232331995?text=Halo%20Ms.%20Dinda,%20saya%20ingin%20berkonsultasi%20mengenai%20Pribadi%20Premiere%20Grand%20Depok%20City."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Ms. Dinda</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Grand+Depok+City+Sukmajaya+Depok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 rounded-lg transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 2: Boarding Residence & Student Life Office */}
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase bg-amber-100 text-amber-900 px-2.5 py-1 rounded font-semibold flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5" />
                    24h Student Boarding Residence
                  </span>
                  <span className="text-xs text-stone-500 font-mono">SMP & SMA</span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-stone-900">
                  Pribadi Premiere Boarding Residence
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Our dedicated on-campus student residence offering separate male and female air-conditioned quarters, resident mentors, supervised evening study (Etude), and nutritious dining.'
                    : 'Fasilitas asrama terpadu di dalam kampus Grand Depok City dengan gedung terpisah putra & putri, pembina asrama 24 jam, bimbingan belajar malam, dan katering higienis.'}
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>Kompleks Kampus Pribadi Premiere, Jl. Boulevard Grand Depok City, Depok 16412</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Hotline Asrama: +62 812-3233-1995 (Konsultasi Asrama)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>admission.premiere@pribadidepok.sch.id</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>24/7 Biometric Security & Health Clinic</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex flex-wrap gap-2">
                <button
                  onClick={onOpenTour}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-800" />
                  <span>{currentLang === 'en' ? 'Tour Boarding Facilities' : 'Kunjungi Asrama'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Quick Inquiry Form & Tour Booking */}
          <div className="p-8 sm:p-12 rounded-2xl bg-stone-100 border border-stone-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-900 block">
                  {currentLang === 'en' ? 'Send a Message' : 'Kirim Pesan Konsultasi'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 leading-snug">
                  {currentLang === 'en'
                    ? 'Our academic advisors will respond within 24 hours.'
                    : 'Konsultan pendidikan kami siap menghubungi Anda kembali.'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Leave your contact information along with questions about school curricula, fees, or boarding programs at Pribadi Premiere.'
                    : 'Tinggalkan kontak dan pertanyaan Anda mengenai kurikulum, program beasiswa, atau asrama di Pribadi Premiere School.'}
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenTour}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-amber-800" />
                    <span>{currentLang === 'en' ? 'Or Book a Saturday Campus Visit' : 'Atau Jadwalkan Tur Kampus Sabtu'}</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-stone-200">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h4 className="font-serif text-xl font-medium text-stone-900">
                      {currentLang === 'en' ? 'Thank you! Message Sent.' : 'Terima Kasih! Pesan Telah Terkirim.'}
                    </h4>
                    <p className="text-xs text-stone-600 max-w-md mx-auto">
                      {currentLang === 'en'
                        ? 'Our admissions officer (Ms. Dinda) will contact your WhatsApp number shortly.'
                        : 'Tim admisi kami (Ms. Dinda) akan segera menghubungi nomor WhatsApp Anda untuk memberikan penjelasan lengkap.'}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg cursor-pointer"
                    >
                      {currentLang === 'en' ? 'Send another inquiry' : 'Kirim pesan lain'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          {currentLang === 'en' ? 'Parent / Guardian Name *' : 'Nama Orang Tua / Wali *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={inquiryForm.parentName}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, parentName: e.target.value })}
                          placeholder="e.g. Bapak Hendra / Ibu Ratna"
                          className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-700"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          {currentLang === 'en' ? 'WhatsApp Phone Number *' : 'Nomor WhatsApp *'}
                        </label>
                        <input
                          type="tel"
                          required
                          value={inquiryForm.phone}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                          placeholder="0812xxxxxxx"
                          className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          {currentLang === 'en' ? 'Enrollment Type' : 'Pilihan Program'}
                        </label>
                        <select
                          value={inquiryForm.programType}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, programType: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none"
                        >
                          <option value="day">{currentLang === 'en' ? 'Day Student (Non-Boarding)' : 'Siswa Reguler (Non-Asrama)'}</option>
                          <option value="boarding">{currentLang === 'en' ? 'Boarding Student (Asrama 24 Jam)' : 'Siswa Asrama (Boarding 24 Jam)'}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          {currentLang === 'en' ? 'Education Level' : 'Jenjang Sekolah'}
                        </label>
                        <select
                          value={inquiryForm.level}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, level: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none"
                        >
                          <option value="kindergarten">Preschool / TK</option>
                          <option value="primary">Primary (SD)</option>
                          <option value="juniorHigh">Junior High (SMP)</option>
                          <option value="seniorHigh">Senior High (SMA)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        {currentLang === 'en' ? 'Message / Questions' : 'Pesan / Pertanyaan'}
                      </label>
                      <textarea
                        rows={3}
                        value={inquiryForm.message}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                        placeholder={currentLang === 'en' ? 'Tell us about your child or inquiry...' : 'Tuliskan pertanyaan atau rencana pendaftaran ananda...'}
                        className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-700"
                      />
                    </div>

                    <div className="flex justify-end pt-1">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors shadow-sm cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{currentLang === 'en' ? 'Submit Inquiry' : 'Kirim Pesan'}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
