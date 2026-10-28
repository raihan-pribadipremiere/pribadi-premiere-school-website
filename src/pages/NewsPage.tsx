import React from 'react';
import { Language, NewsPost } from '../types';
import { NewsEventsSection } from '../components/NewsEventsSection';
import { Calendar, Bell } from 'lucide-react';

interface NewsPageProps {
  currentLang: Language;
  newsPosts: NewsPost[];
}

export const NewsPage: React.FC<NewsPageProps> = ({
  currentLang,
  newsPosts
}) => {
  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-400" />
              {currentLang === 'en' ? 'School Chronicle & Calendar' : 'Kabar Sekolah & Kalender Akademik'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              {currentLang === 'en'
                ? 'Latest news, student achievements, and academic calendar dates.'
                : 'Kabar terbaru, prestasi siswa, dan jadwal penting kalender akademik.'}
            </h1>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              {currentLang === 'en'
                ? 'Stay informed with bulletins from our Grand Depok City and Margonda campuses, exam timetables, Open House schedules, and competition honors.'
                : 'Ikuti perkembangan kegiatan sekolah, jadwal ujian Cambridge, pameran sains, dan pengumuman resmi penerimaan siswa baru.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main News and Events Component */}
      <NewsEventsSection
        currentLang={currentLang}
        newsPosts={newsPosts}
      />

    </div>
  );
};
