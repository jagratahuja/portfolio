/**
 * Content Management System - Index & Documentation
 * This folder contains all text content used throughout the portfolio website
 * 
 * Files in this directory:
 * - hero.ts: Hero section headline, CTAs, and featured skills
 * - what-i-build.ts: Project philosophy and systems-building approach
 * - about.ts: 4-part personal narrative and achievement highlights
 * - skills.ts: Technical skills organized by category
 * - achievements.ts: Awards, recognitions, and milestones
 * - projects.ts: All project descriptions, tech stacks, and metadata
 * 
 * Purpose:
 * This centralized content management approach allows for:
 * 1. Easy updates to website copy without touching component files
 * 2. Version control and documentation of content changes
 * 3. Reusability of content across multiple components
 * 4. Separation of concerns (content vs. presentation logic)
 * 5. Single source of truth for all website text
 * 
 * Usage Pattern:
 * Components import content from these files:
 * 
 * Example (Hero Section):
 *   import { heroContent } from '@/content/hero';
 *   
 *   export function Hero() {
 *     return (
 *       <>
 *         <h1>{heroContent.name}</h1>
 *         <p>{heroContent.mainHeadline}</p>
 *       </>
 *     );
 *   }
 * 
 * Content Structure Hierarchy:
 * 
 * HERO (Entry point)
 *   ├── Badge: System Builder
 *   ├── Name: Jagrat Ahuja
 *   └── CTAs: View Projects, GitHub Profile
 * 
 * WHAT I BUILD (Philosophy)
 *   └── Project-building philosophy and approach
 * 
 * ABOUT (Personal Narrative - 4 Parts)
 *   ├── 1. Who I Am: Class 12 CBSE student
 *   ├── 2. What I Build: Tools for productivity & learning
 *   ├── 3. Evolution: COVID coding → React/Next.js
 *   └── 4. Proof: 200+ programs, 4 tools, 1 major system
 * 
 * SKILLS (Technical Capabilities)
 *   ├── Programming: Python, C#, Java
 *   ├── Libraries: Tkinter, Pygame, Turtle
 *   └── Tools: VS Code, Visual Studio, Unity, Replit
 * 
 * ACHIEVEMENTS (Recognition - 9 Items)
 *   ├── TOI NIE 18 Under 18 (Featured)
 *   ├── Math Competition Rankings (3 × 3rd place)
 *   ├── Olympiad Medals (Multiple)
 *   ├── Science Exhibition Participant
 *   ├── House Captain
 *   ├── Media Coverage
 *   └── Speaking Event Participation
 * 
 * PROJECTS (5 Featured + 3 Tools + 4 Future)
 *   
 *   Featured (Priority Display):
 *   1. StudyOS - Study analytics system
 *   2. TimeScope - Countdown dashboard
 *   3. Decision Maker - Weighted decision system
 *   4. Xscape: The Equation Quest - Gamified algebra game
 *   5. Python Programs Archive - 200+ program collection
 *   
 *   Tools (Utility Projects):
 *   - Color Palette Generator
 *   - Curiosity Engine
 *   - Habit Tracker
 *   
 *   Future (In Development):
 *   - StudyOS v2
 *   - Focus Sound Generator
 *   - Pomodoro Timer
 *   - Algorithm Visualizer
 * 
 * Key Design Decisions:
 * 
 * 1. UNIFIED GRADIENT: All sections use consistent blue-to-purple gradient
 *    from-[#3b82f6] to-[#a855f7]
 * 
 * 2. TOOL IDENTIFICATION: Set-based lookup (toolProjectSlugs) for quick rendering
 *    of "Tools" badge and special styling
 * 
 * 3. PROJECT METADATA: Each project includes:
 *    - Positioning line (what it does in one sentence)
 *    - Support line (who it's for and why it matters)
 *    - Tech stack (technologies used)
 *    - Links (source code, live demo, summaries)
 *    - Special flags (featured, archive, sourceAvailable)
 * 
 * 4. ACHIEVEMENT COLORS: Each achievement has a unique accent color for visual
 *    diversity and better visual scannability
 * 
 * 5. NARRATIVE STRUCTURE: About section uses numbered steps to create
 *    clear journey progression (Who → What → Evolution → Proof)
 * 
 * Maintenance Guidelines:
 * 
 * - Keep content concise and scannable (short paragraphs, bullet points)
 * - Maintain parallel sentence structure across similar items
 * - Update tech stacks regularly as new tools are added
 * - When adding new projects, update both featured/tools lists AND toolProjectSlugs
 * - Preserve color harmony across all sections
 * - Document any content changes in CHANGELOG.MD
 * - Test component rendering after content updates
 * 
 * Component Dependencies:
 * 
 * hero.ts → components/hero.tsx
 * what-i-build.ts → components/what-i-build.tsx
 * about.ts → components/about.tsx
 * skills.ts → components/skills.tsx
 * achievements.ts → components/achievements.tsx
 * projects.ts → components/projects.tsx + app/projects/page.tsx + lib/projects-data.ts
 * 
 * Versioning & Release Plan:
 * - v1.0.0 (March 8, 2026): Initial website (initial commit).
 * - v2.0.0-alpha.1 → v2.0.0-alpha.9: Phase 1 → Phase 9 (one alpha per phase).
 * - v2.0.0-beta.1: Phase 10 (Final Polish).
 * - v2.0.0-beta.2: Phase 11 (Testing).
 * - v2.0.0-rc: Phase 12 (Launch / Release Candidate).
 * - v2.0.0-stable: Final release after the RC checklist passes.
 *
 * Version History (Content Folder):
 * - v2.0.0-alpha.1 (March 29, 2026): Introduced the /content registry files
 *   (hero/about/skills/achievements/projects) to centralize all site copy.
 */
