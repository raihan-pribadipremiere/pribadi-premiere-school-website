/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, NewsPost } from './types';
import { sampleNewsPosts } from './data/schoolData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookTourModal } from './components/BookTourModal';
import { WhatsAppConcierge } from './components/WhatsAppConcierge';

// Main Overview Gateway Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { CampusLifePage } from './pages/CampusLifePage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

// Dedicated Sub-Pages: Academics
import { KindergartenPage } from './pages/subpages/KindergartenPage';
import { PrimaryPage } from './pages/subpages/PrimaryPage';
import { JuniorHighPage } from './pages/subpages/JuniorHighPage';
import { SeniorHighPage } from './pages/subpages/SeniorHighPage';
import { ChromebookPage } from './pages/subpages/ChromebookPage';
import { GTKYPage } from './pages/subpages/GTKYPage';

// Dedicated Sub-Pages: About Us
import { VisionMissionPage } from './pages/subpages/VisionMissionPage';
import { FoundationPage } from './pages/subpages/FoundationPage';
import { HeadmasterPage } from './pages/subpages/HeadmasterPage';
import { AccreditationPage } from './pages/subpages/AccreditationPage';
import { FacultyPage } from './pages/subpages/FacultyPage';

// Dedicated Sub-Pages: Olympiad & Alumni
import { OlympiadsPage } from './pages/subpages/OlympiadsPage';
import { AlumniDestinationsPage } from './pages/subpages/AlumniDestinationsPage';
import { OlympiadCampPage } from './pages/subpages/OlympiadCampPage';
import { ScholarshipsPage } from './pages/subpages/ScholarshipsPage';

// Dedicated Sub-Pages: Campus Life
import { CampusFacilitiesPage } from './pages/subpages/CampusFacilitiesPage';
import { RoboticsLabsPage } from './pages/subpages/RoboticsLabsPage';
import { BoardingResidencePage } from './pages/subpages/BoardingResidencePage';
import { SportsArenaPage } from './pages/subpages/SportsArenaPage';
import { ExtracurricularsPage } from './pages/subpages/ExtracurricularsPage';

// Dedicated Sub-Pages: PPDB Admissions
import { AdmissionStepsPage } from './pages/subpages/AdmissionStepsPage';
import { TuitionCalculatorPage } from './pages/subpages/TuitionCalculatorPage';
import { ScholarshipGuidePage } from './pages/subpages/ScholarshipGuidePage';
import { CampusTourBookingPage } from './pages/subpages/CampusTourBookingPage';

import { ArrowRight } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [activePage, setActivePage] = useState<string>('home');
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [preselectedProgram, setPreselectedProgram] = useState<string | undefined>(undefined);
  
  // Official school bulletins
  const [newsPosts] = useState<NewsPost[]>(sampleNewsPosts);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages = [
        'home', 'about', 'academics', 'achievements', 'campus-life', 'admissions', 'news', 'contact',
        // Academics subpages
        'academics/kindergarten', 'academics/primary', 'academics/junior-high', 'academics/senior-high', 'academics/chromebook', 'academics/gtky',
        // About subpages
        'about/vision', 'about/heritage', 'about/headmaster', 'about/accreditations', 'about/faculty',
        // Achievements subpages
        'achievements/olympiads', 'achievements/destinations', 'achievements/camp', 'achievements/scholarships',
        // Campus Life subpages
        'campus-life/gdc', 'campus-life/labs', 'campus-life/boarding', 'campus-life/sports', 'campus-life/clubs',
        // Admissions subpages
        'admissions/steps', 'admissions/calculator', 'admissions/scholarships', 'admissions/tour'
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setActivePage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLang = () => {
    setCurrentLang(prev => (prev === 'en' ? 'id' : 'en'));
  };

  const handleOpenAdmissions = (programId?: string) => {
    setPreselectedProgram(programId);
    navigateTo('admissions');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900 flex flex-col">
      
      {/* Top Banner Ticker */}
      <div className="bg-amber-950 text-amber-200 text-xs py-2 px-4 border-b border-amber-900/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
            <span className="font-semibold text-white">
              {currentLang === 'en' ? 'PPDB 2026/2027 Enrollment Open:' : 'Pendaftaran PPDB 2026/2027 Dibuka:'}
            </span>
            <span className="text-amber-300">
              {currentLang === 'en'
                ? 'Early Bird 15% Waiver & Science Olympiad (OSN) Scholarships Available'
                : 'Dapatkan Potongan Early Bird 15% & Beasiswa Olimpiade Sains (OSN)'}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-[11px]">
            <button
              onClick={() => handleOpenAdmissions()}
              className="text-white hover:text-amber-200 font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer"
            >
              <span>{currentLang === 'en' ? 'Register Online' : 'Daftar Sekarang'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <span className="text-amber-700">·</span>
            <button
              onClick={() => setIsTourModalOpen(true)}
              className="text-amber-300 hover:text-white cursor-pointer"
            >
              {currentLang === 'en' ? 'Campus Tour' : 'Tur Kampus'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Header */}
      <Header
        currentLang={currentLang}
        activePage={activePage}
        onNavigate={navigateTo}
        onToggleLang={toggleLang}
        onOpenTourModal={() => setIsTourModalOpen(true)}
        onOpenAdmissions={() => handleOpenAdmissions()}
      />

      {/* Dynamic Multi-Page Content */}
      <main className="flex-1">
        {/* Home */}
        {activePage === 'home' && (
          <HomePage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenAdmissions={handleOpenAdmissions}
            onOpenTour={() => setIsTourModalOpen(true)}
          />
        )}

        {/* Overview Gateway Pages */}
        {activePage === 'about' && (
          <AboutPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTour={() => setIsTourModalOpen(true)}
          />
        )}

        {activePage === 'academics' && (
          <AcademicsPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenAdmissions={handleOpenAdmissions}
          />
        )}

        {activePage === 'achievements' && (
          <AchievementsPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'campus-life' && (
          <CampusLifePage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTour={() => setIsTourModalOpen(true)}
          />
        )}

        {activePage === 'admissions' && (
          <AdmissionsPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenBooking={() => setIsTourModalOpen(true)}
            preselectedProgram={preselectedProgram}
          />
        )}

        {activePage === 'news' && (
          <NewsPage
            currentLang={currentLang}
            newsPosts={newsPosts}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            currentLang={currentLang}
            onOpenTour={() => setIsTourModalOpen(true)}
          />
        )}

        {/* Academics Sub-Pages */}
        {activePage === 'academics/kindergarten' && (
          <KindergartenPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={handleOpenAdmissions}
          />
        )}

        {activePage === 'academics/primary' && (
          <PrimaryPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={handleOpenAdmissions}
          />
        )}

        {activePage === 'academics/junior-high' && (
          <JuniorHighPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={handleOpenAdmissions}
          />
        )}

        {activePage === 'academics/senior-high' && (
          <SeniorHighPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={handleOpenAdmissions}
          />
        )}

        {activePage === 'academics/chromebook' && (
          <ChromebookPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'academics/gtky' && (
          <GTKYPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {/* About Sub-Pages */}
        {activePage === 'about/vision' && (
          <VisionMissionPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'about/heritage' && (
          <FoundationPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'about/headmaster' && (
          <HeadmasterPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'about/accreditations' && (
          <AccreditationPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'about/faculty' && (
          <FacultyPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {/* Achievements Sub-Pages */}
        {activePage === 'achievements/olympiads' && (
          <OlympiadsPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'achievements/destinations' && (
          <AlumniDestinationsPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'achievements/camp' && (
          <OlympiadCampPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'achievements/scholarships' && (
          <ScholarshipsPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {/* Campus Life Sub-Pages */}
        {activePage === 'campus-life/gdc' && (
          <CampusFacilitiesPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'campus-life/labs' && (
          <RoboticsLabsPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'campus-life/boarding' && (
          <BoardingResidencePage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'campus-life/sports' && (
          <SportsArenaPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'campus-life/clubs' && (
          <ExtracurricularsPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {/* Admissions Sub-Pages */}
        {activePage === 'admissions/steps' && (
          <AdmissionStepsPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'admissions/calculator' && (
          <TuitionCalculatorPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={handleOpenAdmissions}
          />
        )}

        {activePage === 'admissions/scholarships' && (
          <ScholarshipGuidePage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}

        {activePage === 'admissions/tour' && (
          <CampusTourBookingPage
            currentLang={currentLang}
            onNavigate={navigateTo}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenAdmissions={() => handleOpenAdmissions()}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={navigateTo}
        onOpenTourModal={() => setIsTourModalOpen(true)}
        onOpenAdmissions={() => handleOpenAdmissions()}
      />

      {/* Floating WhatsApp Concierge */}
      <WhatsAppConcierge
        currentLang={currentLang}
      />

      {/* Campus Visit Scheduler Modal */}
      <BookTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        currentLang={currentLang}
      />

    </div>
  );
}
