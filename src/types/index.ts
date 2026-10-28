export type Language = 'en' | 'id';

export interface AcademicProgram {
  id: string;
  name: { en: string; id: string };
  level: { en: string; id: string };
  grades: string;
  ageGroup: string;
  curriculum: string;
  description: { en: string; id: string };
  highlights: { en: string[]; id: string[] };
  outcomes: { en: string[]; id: string[] };
  iconName: string;
}

export interface FacilityItem {
  id: string;
  title: { en: string; id: string };
  category: { en: string; id: string };
  description: { en: string; id: string };
  image: string;
  specs: { en: string[]; id: string[] };
}

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image?: string;
  readTime: string;
  source?: string;
}

export interface AcademicEvent {
  id: string;
  title: { en: string; id: string };
  date: string;
  time: string;
  location: string;
  category: 'academic' | 'competition' | 'admissions' | 'community';
  description: { en: string; id: string };
}

export interface TeacherProfile {
  name: string;
  role: { en: string; id: string };
  education: string;
  department: string;
  experienceYears: number;
}

export interface CampusLocation {
  id: string;
  name: { en: string; id: string };
  badge: { en: string; id: string };
  address: string;
  district: string;
  description: { en: string; id: string };
  highlights: { en: string[]; id: string[] };
  levels: string[];
  phone: string;
  whatsapp: string;
  mapsUrl: string;
  isPremiere: boolean;
  image: string;
}

export interface OlympiadAchievement {
  id: string;
  competition: string;
  field: string;
  year: number;
  medal: 'gold' | 'silver' | 'bronze' | 'grand';
  student: string;
  scope: 'International' | 'National' | 'Provincial';
}

export interface UniversityDestination {
  name: string;
  country: string;
  category: 'Indonesia Top PTN' | 'World Top 100';
  icon: string;
}

export interface BoardingScheduleItem {
  time: string;
  activity: { en: string; id: string };
  category: 'spiritual' | 'academic' | 'wellness' | 'mentorship';
  description: { en: string; id: string };
}

