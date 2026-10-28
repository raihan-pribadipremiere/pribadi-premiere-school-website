import React, { useState } from 'react';
import { Language } from '../types';
import { schoolProfile, campusesData } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Calendar, ExternalLink } from 'lucide-react';

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
    campus: 'gdc-premiere',
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
              {currentLang === 'en' ? 'Campuses & Contact' : 'Kontak & Lokasi Kampus'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Connect with our admissions team or schedule a visit.'
                : 'Hubungi tim admisi kami atau jadwalkan kunjungan kampus.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'We are located at two strategic locations in Depok: our flagship digital campus in Grand Depok City and our heritage campus on Margonda Raya.'
                : 'Kami siap menyambut Anda di dua lokasi strategis Kota Depok: kampus modern Grand Depok City dan kampus bersejarah Margonda Raya.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Campuses Info Cards */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Campus 1: Grand Depok City */}
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase bg-amber-100 text-amber-900 px-2.5 py-1 rounded font-semibold">
                    Next-Gen Digital Campus
                  </span>
                  <span className="text-xs text-stone-500 font-mono">GDC, Sukmajaya</span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-stone-900">
                  Pribadi Premiere School (Grand Depok City)
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Our 4,000 m² purpose-built campus in Grand Depok City, dedicated to 1:1 Chromebook digital classrooms, Cambridge curricula, robotics labs, and pre-university bridges.'
                    : 'Kampus modern seluas 4.000 m² di Boulevard Grand Depok City, dilengkapi ruang kelas digital 1:1 Chromebook, kurikulum Cambridge, studio robotika, dan kolam renang.'}
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>{schoolProfile.locationGdc.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>WhatsApp / Telepon: {schoolProfile.locationGdc.phone} ({schoolProfile.locationGdc.contactPerson})</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Layanan Tambahan: {schoolProfile.locationGdc.secondaryPhone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>{schoolProfile.locationGdc.email}</span>
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
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

            {/* Campus 2: Margonda Raya */}
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase bg-stone-200 text-stone-800 px-2.5 py-1 rounded font-semibold">
                    Heritage & Boarding Campus
                  </span>
                  <span className="text-xs text-stone-500 font-mono">Margonda, Beji</span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-stone-900">
                  Sekolah Pribadi Depok (Margonda Campus)
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentLang === 'en'
                    ? 'The founding campus established in 1995, home to our national science olympiad champions, Cambridge ID248 examination center, and full male/female boarding residences.'
                    : 'Kampus utama berdedikasi sejak 1995, pencetak juara Olimpiade Sains Nasional (OSN), pusat sertifikasi Cambridge ID248, dan asrama putra-putri terpadu.'}
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>{schoolProfile.locationMargonda.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>Telepon: {schoolProfile.locationMargonda.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>WhatsApp Admisi: {schoolProfile.locationMargonda.whatsapp}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>{schoolProfile.locationMargonda.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-800 shrink-0" />
                    <span>{schoolProfile.locationMargonda.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex flex-wrap gap-2">
                <a
                  href="https://wa.me/6281288997722?text=Halo%20Admin%20Sekolah%20Pribadi%20Margonda,%20saya%20ingin%20berkonsultasi%20mengenai%20pendaftaran%20dan%20asrama."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Margonda</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Pribadi+Bilingual+School+Depok+Margonda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 hover:bg-stone-100 rounded-lg transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
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
                    ? 'Leave your contact information along with questions about school curricula, fees, or boarding programs.'
                    : 'Tinggalkan kontak dan pertanyaan Anda mengenai kurikulum, program beasiswa, atau asrama.'}
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenTour}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-colors"
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
                        ? 'Our admissions officer will contact your WhatsApp number shortly.'
                        : 'Tim admisi kami akan segera menghubungi nomor WhatsApp Anda untuk memberikan penjelasan lengkap.'}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg"
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
                          {currentLang === 'en' ? 'Target Campus' : 'Pilihan Kampus'}
                        </label>
                        <select
                          value={inquiryForm.campus}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, campus: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-lg border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none"
                        >
                          <option value="gdc-premiere">Grand Depok City (Premiere)</option>
                          <option value="margonda-campus">Margonda Raya (Bilingual & Boarding)</option>
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
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors shadow-sm"
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
