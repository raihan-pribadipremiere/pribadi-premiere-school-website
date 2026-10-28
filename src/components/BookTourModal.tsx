import React, { useState } from 'react';
import { Language } from '../types';
import { Calendar, CheckCircle2, X } from 'lucide-react';

interface BookTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const BookTourModal: React.FC<BookTourModalProps> = ({ isOpen, onClose, currentLang }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    targetLevel: 'smp',
    preferredDate: '',
    preferredTime: 'morning',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">
              {currentLang === 'en' ? 'Schedule a Campus Visit' : 'Jadwalkan Kunjungan Kampus'}
            </h3>
            <p className="text-xs text-stone-500">
              Sekolah Pribadi Depok · Margonda Raya Campus
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              setSubmitted(false);
            }}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-6 space-y-4 text-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-stone-900">
              {currentLang === 'en' ? 'Visit Request Confirmed!' : 'Jadwal Kunjungan Terdaftar!'}
            </h4>
            <p className="text-xs text-stone-600 max-w-sm mx-auto">
              {currentLang === 'en'
                ? `Thank you, ${formData.parentName}. Our admission officer will reach out via WhatsApp at ${formData.phone} with parking details and a personalized tour itinerary.`
                : `Terima kasih, Bapak/Ibu ${formData.parentName}. Tim humas dan admissions kami akan mengonfirmasi detail kedatangan melalui WhatsApp ke nomor ${formData.phone}.`}
            </p>
            <button
              onClick={() => {
                onClose();
                setSubmitted(false);
              }}
              className="mt-4 px-5 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors"
            >
              {currentLang === 'en' ? 'Close' : 'Tutup'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5 text-xs">
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                {currentLang === 'en' ? 'Parent / Visitor Name *' : 'Nama Lengkap Orang Tua / Pengunjung *'}
              </label>
              <input
                type="text"
                required
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                placeholder="e.g. Bapak Hendrawan"
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/20 text-stone-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  {currentLang === 'en' ? 'WhatsApp Phone *' : 'Nomor WhatsApp *'}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+62 812-xxxx-xxxx"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/20 text-stone-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  {currentLang === 'en' ? 'Email Address' : 'Alamat Email'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-800/20 text-stone-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  {currentLang === 'en' ? 'Interest Level' : 'Jenjang Peminatan'}
                </label>
                <select
                  value={formData.targetLevel}
                  onChange={(e) => setFormData({ ...formData, targetLevel: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900"
                >
                  <option value="sd">Primary (SD Pribadi)</option>
                  <option value="smp">Junior High (SMP Pribadi)</option>
                  <option value="sma">Senior High (SMA Pribadi)</option>
                  <option value="boarding">Boarding Dormitory Focus</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-stone-700 mb-1">
                  {currentLang === 'en' ? 'Preferred Date' : 'Pilihan Tanggal'}
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-900"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                {currentLang === 'en' ? 'Time Slot' : 'Waktu Kunjungan'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, preferredTime: 'morning' })}
                  className={`py-2 px-3 rounded-lg border font-semibold text-center ${
                    formData.preferredTime === 'morning'
                      ? 'border-amber-800 bg-amber-50 text-amber-900'
                      : 'border-stone-200 bg-stone-50 text-stone-600'
                  }`}
                >
                  Pagi (09:00 – 11:30 WIB)
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, preferredTime: 'afternoon' })}
                  className={`py-2 px-3 rounded-lg border font-semibold text-center ${
                    formData.preferredTime === 'afternoon'
                      ? 'border-amber-800 bg-amber-50 text-amber-900'
                      : 'border-stone-200 bg-stone-50 text-stone-600'
                  }`}
                >
                  Siang (13:30 – 15:30 WIB)
                </button>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
              >
                {currentLang === 'en' ? 'Cancel' : 'Batal'}
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-sm transition-colors"
              >
                {currentLang === 'en' ? 'Confirm Schedule' : 'Konfirmasi Kunjungan'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
