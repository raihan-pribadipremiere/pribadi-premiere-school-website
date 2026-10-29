# Implementation Plan: Dedicated Sub-Pages, Comprehensive Kindergarten (TK) Program & Gateway Category Navigation

## Overview
Based on user feedback, this plan elevates **Pribadi Premiere School** (Grand Depok City) into a multi-tiered educational portal. The current setup will be restructured so that:
1. **Dropdown items navigate to dedicated full sub-pages** rather than jumping to anchor sections on parent pages.
2. **Main category pages (About Us, Academics, Olympiads & Alumni, Campus Life, PPDB)** become **comprehensive overview gateways** with topic summary cards and highlights that give parents and students clear reasons to visit the parent page or drill into child sub-pages.
3. **Kindergarten (TK / Taman Kanak-Kanak & Preschool)** is prominently added to the school's offerings with a dedicated full sub-page featuring play-based bilingual learning, phonics, character building (adab), and motor development.
4. **Breadcrumb and contextual category navigation** are placed on all sub-pages for seamless back-and-forth movement.

---

## 1. Sub-Page Routing & State Model

We will extend `activePage` and hash-based navigation in `src/App.tsx` and `src/components/Header.tsx` to support hierarchical routes:

### Route Structure:
- **Home**: `#/home`
- **Academics (`#/academics`)**: Overview Gateway
  - `#/academics/kindergarten`: Dedicated TK & Early Childhood Education Page
  - `#/academics/primary`: SD Pribadi Premiere (Cambridge Primary + Merdeka)
  - `#/academics/junior-high`: SMP Pribadi Premiere (Cambridge Lower Secondary + Checkpoint)
  - `#/academics/senior-high`: SMA Pribadi Premiere (Cambridge IGCSE, A-Levels + PTN Pathway)
  - `#/academics/chromebook`: 1:1 Chromebook Digital Learning Classrooms
  - `#/academics/gtky`: GTKY Talent Profiling, Psychological Assessment & Counseling
- **About Us (`#/about`)**: Overview Gateway
  - `#/about/vision`: Vision, Mission, Core Values & Motto
  - `#/about/heritage`: Yayasan Yenbu Indonesia Heritage & History
  - `#/about/headmaster`: Head of School Letter & Leadership Principles
  - `#/about/accreditations`: BAN-SM "A" Unggul & Cambridge International ID248 Credentials
  - `#/about/faculty`: Faculty, Academic Mentors & Dormitory Counselors
- **Olympiad & Alumni (`#/achievements`)**: Overview Gateway
  - `#/achievements/olympiads`: 140+ National & International Science Olympiad (OSN/IJSO/IMO) Medals
  - `#/achievements/destinations`: High School Alumni Placements (UI, ITB, UGM, NUS, NTU, Oxford)
  - `#/achievements/camp`: OSN Intensive Training Camp & Master Mentorship
  - `#/achievements/scholarships`: Academic & Olympiad Talent Scholarships (Up to 100%)
- **Campus Life (`#/campus-life`)**: Overview Gateway
  - `#/campus-life/gdc`: Modern 4,000 m² Grand Depok City Smart Campus
  - `#/campus-life/labs`: Robotics, Artificial Intelligence & Cambridge Science Laboratories
  - `#/campus-life/boarding`: 24-Hour Student Boarding Residence & Dormitory Care
  - `#/campus-life/sports`: Semi-Olympic Swimming Pool, Futsal & Basketball Arena
  - `#/campus-life/clubs`: 20+ Student Extracurricular Clubs & Creative Organizations
- **PPDB 2026/2027 (`#/admissions`)**: Overview Gateway
  - `#/admissions/steps`: Step-by-Step Enrollment Guide & Admission Requirements (TK-SMA)
  - `#/admissions/calculator`: Tuition & Boarding Investment Simulator with Early Bird Waiver
  - `#/admissions/scholarships`: Olympiad & Tahfidz Scholarship Assessment Flow
  - `#/admissions/tour`: Saturday Campus Tour & 1-on-1 Academic Consultation
- **News & Media**: `#/news`
- **Contact & Location**: `#/contact`

---

## 2. Dedicated Kindergarten (TK) Program Implementation

In accordance with the selected preference (**Play-based bilingual early learning with phonics, character building, and motor development**), we will develop a rich, dedicated sub-page for Preschool & Kindergarten:

### Program Highlights on `#/academics/kindergarten`:
- **Age Groups & Classes**:
  - *Toddler & Playgroup (Ages 2 – 3)*: Sensory discovery, social socialization, language sparks.
  - *TK A (Ages 4 – 5)*: Bilingual immersion (English-Indonesian), Jolly Phonics, early numeracy with concrete manipulatives.
  - *TK B (Ages 5 – 6)*: School readiness, creative problem solving, guided reading, foundational science inquiries.
- **Pedagogical Pillars**:
  1. *Play-Based & Inquiry Learning*: Exploration corners, tactile blocks, role-playing, and hands-on experiments.
  2. *Bilingual Literacy & Phonics*: Daily English conversational habits, structured phonetic awareness, storytelling sessions.
  3. *Character & Adab Habituation*: Daily kindness routines, Islamic manners (adab), prayer practice, empathy, and environmental stewardship.
  4. *Gross & Fine Motor Mastery*: Dedicated indoor soft play, outdoor sand & water play, gym mobility, art, and pencil-grip coordination.
  5. *Safe & Nurturing Campus Space*: Child-safe rubberized playgrounds, child-sized sanitation facilities, full-time registered nurse, secure GDC campus perimeter.
- **Daily Routine Timetable**: Sample day showing welcoming circle, inquiry centers, outdoor physical play, bilingual circle time, and reflection.
- **Smooth Transition Pathway to SD Pribadi Premiere**: Guaranteed transition and developmental readiness alignment with Cambridge Primary.

---

## 3. Sub-Page UI/UX Experience: Breadcrumbs & Gateway Navigation

### Breadcrumb & Sub-Page Navigation Component (`src/components/Breadcrumbs.tsx`)
- Placed at the top of every sub-page.
- Clean typographic breadcrumb: `Home > [Parent Gateway] > [Current Sub-Page]`.
- Sticky back button or sibling-tab switcher allowing quick jumps between related sub-topics without reopening the main menu.
- CTAs on every sub-page to book a campus tour or apply for PPDB 2026/2027.

### Parent Gateway Pages Redesign
When a visitor clicks the main button in the header (e.g. clicking "Academics" or "About Us"):
- **Not a duplicate of sub-pages**, but an executive **Gateway Hub**:
  - Hero header defining the institution's philosophy in that domain.
  - Visual summary grid of cards representing each sub-page with key facts, preview excerpt, and an active `"Explore [Topic] →"` button.
  - Quick metrics bar (e.g., in Academics: 4 Education Stages, 1:1 Chromebooks, Cambridge ID248, 100% University Acceptance).
  - Testimonial / spotlight banner.

---

## 4. Header & Dropdown Polish

- **Dropdown Menu Links**: Updated so each option routes directly to its specific child sub-page (`#/category/subpage`).
- **Parent Category Buttons**: Clicking the text directly navigates to the parent gateway (`#/category`).
- **Consistent Hover & Focus State**: Dropdowns open gracefully on hover and close immediately when moving out to the top bar or other buttons, avoiding stuck menus.
- **Mobile Responsive Drawer**: Mobile menu displays collapsible accordion categories with direct links to all sub-pages and gateways.

---

## 5. Verification & Testing Steps

1. **Compilation & Type Safety**: Run `tsc --noEmit` and `compile_applet` to verify zero errors across all components.
2. **Sub-Page Navigation Tests**:
   - Verify every dropdown item under About Us, Academics, Olympiad & Alumni, Campus Life, and Admissions opens its dedicated sub-page.
   - Verify clicking the main category button opens the gateway overview page.
   - Verify breadcrumb links smoothly return to the parent category and home page.
3. **Kindergarten (TK) Coverage**:
   - Verify TK is prominently featured in the header dropdown, home stage selector, academics gateway, and dedicated TK sub-page.
4. **URL Hash Synchronization**: Test direct loading and browser back/forward buttons with hash routes (`#/academics/kindergarten`, `#/campus-life/boarding`, etc.).
