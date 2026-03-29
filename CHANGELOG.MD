# Changelog

## Phase 0: Portfolio Foundation & Brand Identity (March 2026)

### Hero Section Fixes
- **Identity Correction**: Updated hero name to "Jagrat Ahuja" 
- **Badge Update**: Changed badge text from "Full Stack Developer" to "System Builder"
- **Gradient Fix**: Fixed hero gradient animation (removed animation, static blue-to-purple gradient: `from-[#3b82f6] to-[#a855f7]`)
- **File Modified**: `components/hero.tsx`

### What I Build Section Creation
- **New Section**: Added "What I Build" component (`components/what-i-build.tsx`) positioned between Hero and About
- **Purpose**: Showcases Jagrat's project philosophy and systems-building approach
- **Styling**: Standard animated section header pattern (pill label + gradient heading + supporting text) with Framer Motion reveal animation
- **Integration**: Inserted into `app/page.tsx` to maintain logical narrative flow
- **File Created**: `components/what-i-build.tsx`
- **File Modified**: `app/page.tsx`

### About Section Restructuring
- **Narrative Rewrite**: Restructured About copy into 4-part narrative:
  1. **Who I Am**: Class 12 CBSE introduction
  2. **What I Build**: Systems and tools focus
  3. **Evolution**: COVID-era coding origin through sixth class, progression to React/Next.js/Tailwind
  4. **Proof**: Concrete achievement metrics
- **Stat Card Update**: Changed title from generic "Projects Built (5+)" to "Systems and Tools Built" for clarity
- **Stats Refinement**: Added specific metrics (200+ Python Programs, Systems Builder status, Class 12 CBSE)
- **File Modified**: `components/about.tsx`

---

## Phase 1: Featured Projects Showcase & Project Library (March 2026)

### Project Data Centralization
- **File Created**: `lib/projects-data.ts`
- **Purpose**: Single source of truth for all project metadata
- **Structure**:
  - `ProjectItem` TypeScript interface with fields: name, slug, positioningLine, supportLine, tech, liveUrl, sourceUrl, sourceAvailable, summaryUrl
  - 5 featured projects (StudyOS, TimeScope, Decision Maker, Xscape: The Equation Quest, Python Programs Archive)
  - 3 additional current projects (Color Palette Generator, Curiosity Engine, Habit Tracker)
  - `futureTools` array: StudyOS v2, Decision Maker v2, Custom Scheduling Assistant, AI Finance Tracker
  - `getCenteredGridClass()` utility function for grid layout centering logic
- **Data Source**: Accurate positioning and support lines drawn from project README files

### Featured Projects Section (Homepage)
- **Component**: `components/projects.tsx` (rewrote existing component)
- **Display**: 5 featured projects in strict order (StudyOS → TimeScope → Decision Maker → Xscape → Python Archive)
- **Card Layout**: Standardized structured design:
  - **Icon Area**: Reserved space for project icon
  - **Title Block**: Heading with project name
  - **Description**: 2-part layout (3-line positioning line + 3-line support line, heights: h-[60px] each)
  - **Tech Stack**: 2-line visible container (h-16) with px-3 py-1 text-xs chips, flexible wrapping
  - **Actions Row**: 1-line height with project-specific buttons
- **Project-Specific Handling**:
  - **Xscape**: Features Summary (FileText icon) + Live Demo (ExternalLink icon) buttons; no Source Code button; links to itch.io demo
  - **Other Projects**: Live Demo + Source Code buttons
- **Tools Labels**: Added Wrench icon + "Tools" label to projects identified as utilities (TimeScope, Decision Maker)
- **Grid Layout**: 3 columns on xl breakpoint, center-indented for cards 4-5 using `xl:col-start-2` and `xl:col-start-4` positioning
- **CTA Update**: Changed call-to-action text to "See what all I have built" (refined from "View All of My Projects")
- **File Modified**: `components/projects.tsx`

### Navigation Routing Update
- **File Modified**: `components/navbar.tsx`
- **Change**: Updated Projects link from anchor link (`#projects`) to page route (`/projects`)
- **Purpose**: Enable proper full-page navigation to dedicated projects library

### Full Projects Library Page
- **File Created**: `app/projects/page.tsx`
- **Purpose**: Comprehensive showcase of all 8 current projects + 4 future tools in development
- **Layout**:
  - **Current Projects Section**: All 8 shipped projects in 3-column grid (xl breakpoint)
  - **Future Projects Section**: 4 projects in development with gray styling and "In Development" badge
- **Card Structure**: Matches homepage featured card layout exactly (icon area, title, 3-line descriptions, 2-line tech stack, 1-line actions)
- **Grid Layout**: Custom `getCenteredGridClass()` utility handling center-alignment logic:
  - 1 remainder card: centers at xl:col-start-3
  - 2 remainder cards: first at xl:col-start-2, second at xl:col-start-4
  - Full 3-column rows: no centering needed
- **Tools Labels**: Consistent with homepage (Wrench icon + "Tools" label on identified utilities)
- **Icon Differentiation**: Xscape uses FileText for Summary (vs ExternalLink for Live Demo) to distinguish action types
- **Section Descriptions**: 
  - Current: "Systems and tools I've built and refined through real-world use"
  - Future: "Systems and tools currently in development"
- **File Created**: `app/projects/page.tsx`

### Tools Label Identification
- **Projects Tagged as "Tools"**:
  1. TimeScope (productivity tracking)
  2. Decision Maker (decision-making aid)
  3. Color Palette Generator (design utility)
  4. Curiosity Engine (learning/exploration tool)
  5. Habit Tracker (habit management tool)
- **Implementation**: Wrench icon + label chip on both homepage and /projects cards

### Card Layout Standardization
- **Height Constraints**:
  - Icon area: Fixed space reservation
  - Title: Single line, font-bold
  - Positioning Line: h-[60px] (accommodates 3 lines of text, overflow hidden)
  - Support Line: h-[60px] (accommodates 3 lines of text, overflow hidden)
  - Tech Stack: h-16 (accommodates 2 lines of chips with flexible wrapping)
  - Actions: h-auto (1-line buttons)
- **Typography**:
  - Title: text-lg font-bold
  - Descriptions: text-sm with leading-5
  - Tech Chips: text-xs with px-3 py-1 padding
- **Colors**: Consistent dark theme (slate/blue-gray palette)
- **Files Modified**: `components/projects.tsx`, `app/projects/page.tsx`

### Grid Layout Centering
- **Homepage**: Cards 4-5 center-indented on xl breakpoint
  - Card 4: `xl:col-start-2`
  - Card 5: `xl:col-start-4`
- **/projects Page**: Full grid center-alignment via `getCenteredGridClass()` utility
  - Handles remainder cases (1 or 2 cards) automatically
  - Applies centering only to last incomplete rows
- **On Mobile/Tablet**: Grid flows naturally to fill available columns (no centering constraint)
- **Files Modified**: `components/projects.tsx`, `app/projects/page.tsx`

### Microcopy Refinements
- Homepage CTA: "See what all I have built"
- Section descriptions updated for clarity and consistency
- Action button labels standardized across card types
- File Modified: `components/projects.tsx`

---

## Technical Implementation Details

### Key Files Created
1. `lib/projects-data.ts` - Central project metadata repository with TypeScript types and utility functions
2. `components/what-i-build.tsx` - New section component showcasing project philosophy
3. `app/projects/page.tsx` - Full project library page with all projects and future tools

### Key Files Modified
1. `components/hero.tsx` - Identity and gradient fixes
2. `components/about.tsx` - Narrative restructuring and stat card updates
3. `components/projects.tsx` - Complete rewrite for featured projects with standardized cards
4. `components/navbar.tsx` - Routing update (anchor to page route)
5. `app/page.tsx` - Integrated What I Build section

### Design System
- **Color Palette**: Blue-to-purple gradient (`from-[#3b82f6] to-[#a855f7]`) used consistently across hero, section headings, and CTAs
- **Typography**: Space Grotesk for headings, system sans-serif for body
- **Icons**: Lucide React (FileText for summary/document actions, ExternalLink for external links, Wrench for tools)
- **Framework**: Next.js 15+ with React, TypeScript, Tailwind CSS v3

### Data Architecture
- **Projects Structure**: Type-safe ProjectItem interface enabling consistent rendering across homepage and library
- **Optional Fields**: sourceUrl and sourceAvailable support projects without GitHub (like Xscape)
- **Future Tools**: Separate array enabling distinction between shipped and in-development projects
- **Grid Utility**: getCenteredGridClass() enables reusable centering logic across pages

---

## Validation & Testing

### Completed Validation
- ✅ All TypeScript types correct, no compilation errors
- ✅ Homepage featured cards display all 5 projects in exact order
- ✅ /projects page displays all 8 projects + 4 future tools
- ✅ Text clipping eliminated (3-line description containers working)
- ✅ Tech stack display fitting properly in 2-line containers
- ✅ Grid layouts center-aligning correctly on xl breakpoint
- ✅ Xscape special handling (no Source Code button, dual action buttons) working as specified
- ✅ Tools labels displaying on correct projects
- ✅ Routing working (Projects nav → /projects, no broken anchors)
- ✅ All project links verified (live demos, source code, summaries)

### Known Limitations (Deferred)
- Animation refinement noted as "a little messed up" but not blocking current phase
- Individual project detail pages (/projects/[slug]) deferred to Phase 1.5+ per user request

---

## User Approvals & Checkpoints

- **Phase 0 Approvals**: Hero fixes, What I Build section, About restructuring approved by user
- **Phase 1 Approvals**: Featured projects, card layouts, grid centering all approved iteratively
- **Final UI/UX Sign-Off**: User confirmed "everything looks fine to me" UI/UX-wise
- **Ready for Commit**: All Phase 1 requirements met, user approval explicit

---

## Next Steps (Post-Phase 1)

1. **Phase 1.5+**: Individual project detail pages (/projects/[slug]) - explicitly deferred per user
2. **Animation Polish**: Refine Framer Motion animations across sections
3. **Phase 2**: Skills section updates (if planned)
4. **Deployment**: Push to GitHub and deploy to Vercel

---

*Last Updated: March 29, 2026*
*Status: Phase 1 Complete, User Approved, Ready for Commit*
