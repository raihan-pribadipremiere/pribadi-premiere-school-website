import React, { useState } from 'react';
import { Language } from '../types';
import { MessageSquare, X, Send, Sparkles, Building2 } from 'lucide-react';

interface WhatsAppConciergeProps {
  currentLang: Language;
}

export const WhatsAppConcierge: React.FC<WhatsAppConciergeProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const premierePhoneNumber = '6281198772200';

  const quickQuestions = [
    {
      label: { en: 'Inquire about PPDB 2026/2027', id: 'Informasi Pendaftaran PPDB 2026/2027' },
      text: 'Halo Admin Pribadi Premiere School, saya ingin menanyakan informasi pendaftaran siswa baru (PPDB) Tahun Ajaran 2026/2027.'
    },
    {
      label: { en: 'Science Olympiad Scholarship', id: 'Info Beasiswa Sains & OSN' },
      text: 'Halo Admin Pribadi Premiere School, saya ingin berkonsultasi mengenai jalur Beasiswa Olimpiade Sains & Prestasi.'
    },
    {
      label: { en: 'Tuition Fees & Boarding Cost', id: 'Rincian Biaya & Asrama GDC' },
      text: 'Halo Admin Pribadi Premiere School, mohon informasi rincian biaya uang pangkal, SPP bulanan, dan fasilitas asrama Grand Depok City.'
    },
    {
      label: { en: 'Book Saturday Campus Tour', id: 'Jadwalkan Tur Kampus Hari Sabtu' },
      text: 'Halo Admin Pribadi Premiere School, saya ingin menjadwalkan kunjungan langsung ke kampus Grand Depok City.'
    }
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text || 'Halo Admin Pribadi Premiere School, saya ingin berkonsultasi mengenai pendaftaran siswa.');
    window.open(`https://wa.me/${premierePhoneNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div 
          className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="bg-emerald-800 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img 
                  src="/assets/aistudio/Logo_Sekolah_95441e87.png" 
                  alt="Pribadi Premiere Crest" 
                  className="w-9 h-9 object-contain rounded-lg bg-white p-0.5 shadow-xs shrink-0" 
                />
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm">
                    {currentLang === 'en' ? 'Pribadi Premiere Admissions' : 'Layanan Konsultasi PPDB Premiere'}
                  </h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Grand Depok City · Official Support</span>
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-emerald-100 hover:text-white p-1 rounded-lg hover:bg-emerald-700/50 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick options */}
          <div className="p-4 space-y-3 bg-stone-50 max-h-72 overflow-y-auto">
            <p className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">
              {currentLang === 'en' ? 'Select inquiry topic:' : 'Pilih topik pertanyaan:'}
            </p>
            
            <div className="space-y-1.5">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-xs font-medium text-stone-800 flex items-center justify-between group"
                >
                  <span>{q.label[currentLang]}</span>
                  <Send className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-700 shrink-0 ml-2" />
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-200">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (customMessage.trim()) handleSend(customMessage);
                }}
                className="flex items-center gap-1.5"
              >
                <input
                  type="text"
                  placeholder={currentLang === 'en' ? 'Type custom question...' : 'Ketik pertanyaan...'}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="flex-1 text-xs px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-700"
                />
                <button
                  type="submit"
                  className="p-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 font-semibold text-xs"
        aria-label="WhatsApp Admission Concierge"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">
          {currentLang === 'en' ? 'Chat via WhatsApp' : 'Chat Admisi WhatsApp'}
        </span>
      </button>
    </div>
  );
};
