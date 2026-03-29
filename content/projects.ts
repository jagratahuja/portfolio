/**
 * Projects Content
 * Detailed descriptions and metadata for all projects
 * Featured projects are positioned first, followed by tools, then future projects
 */

export interface ProjectContent {
  title: string;
  slug: string;
  positioningLine: string;
  supportLine: string;
  tech: string[];
  featured: boolean;
  isArchive?: boolean;
  sourceTitle?: string;
  liveTitle?: string;
}

export const featuredProjects: ProjectContent[] = [
  {
    title: "StudyOS",
    slug: "studyos",
    positioningLine:
      "A study analytics system that measures learning effectiveness, not just study hours.",
    supportLine:
      "Designed to turn focus, session depth, and task completion into practical productivity insights for students.",
    tech: ["Next.js", "React", "Supabase", "Recharts", "Vercel"],
    featured: true,
    sourceTitle: "Source Code",
    liveTitle: "Live Demo",
  },
  {
    title: "TimeScope",
    slug: "timescope",
    positioningLine:
      "A real-time countdown dashboard that converts deadlines into live, visible urgency.",
    supportLine:
      "Designed to help users prioritize upcoming milestones with continuously updating timers and progress signals.",
    tech: ["React", "Next.js", "localStorage", "Vercel"],
    featured: true,
    sourceTitle: "Source Code",
    liveTitle: "Live Demo",
  },
  {
    title: "Decision Maker",
    slug: "decision-maker",
    positioningLine:
      "A weighted decision system that ranks options with clarity and consistency.",
    supportLine:
      "Designed to reduce overthinking by scoring choices across importance, long-term value, urgency, and enjoyment.",
    tech: ["React", "TypeScript", "Vite", "CSS", "localStorage"],
    featured: true,
    sourceTitle: "Source Code",
    liveTitle: "Live Demo",
  },
  {
    title: "Xscape: The Equation Quest",
    slug: "xscape-the-equation-quest",
    positioningLine:
      "A gamified algebra learning experience with a 10-level progression across equations, inequalities, and word problems.",
    supportLine:
      "Designed for classes IX-XII with pass-and-play teamwork, randomized question pools, and progression-based unlocking.",
    tech: ["Unity 6.1", "C#", "WebGL", "Photoshop", "Itch.io"],
    featured: true,
    sourceTitle: "Summary",
    liveTitle: "Play Now",
  },
  {
    title: "Python Programs Archive",
    slug: "python-programs-archive",
    positioningLine:
      "A structured archive documenting 200+ Python programs from fundamentals to applied projects.",
    supportLine:
      "Designed as a proof-of-work repository that shows progression across logic, GUI tools, and experiments.",
    tech: ["Python", "Tkinter", "Turtle", "Pygame", "Algorithms"],
    featured: true,
    isArchive: true,
    sourceTitle: "View Archive",
  },
];

export const toolProjects: ProjectContent[] = [
  {
    title: "Color Palette Generator",
    slug: "color-palette-generator",
    positioningLine:
      "A fast palette generation tool built for practical design and frontend workflows.",
    supportLine:
      "Designed with lock controls, copy shortcuts, and history to speed up color exploration and implementation.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    featured: false,
    sourceTitle: "Source Code",
    liveTitle: "Open Tool",
  },
  {
    title: "Curiosity Engine",
    slug: "curiosity-engine",
    positioningLine:
      "A curiosity prompt engine that drives structured topic exploration without repetition.",
    supportLine:
      "Designed to serve rotating prompts with persistence so users can keep exploring from where they left off.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "localStorage"],
    featured: false,
    sourceTitle: "Source Code",
    liveTitle: "Explore Now",
  },
  {
    title: "Habit Tracker",
    slug: "habit-tracker",
    positioningLine:
      "A lightweight habit consistency tracker focused on daily streak clarity.",
    supportLine:
      "Designed to keep progress simple and visible so users can build momentum through repeatable routines.",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    sourceTitle: "Source Code",
  },
];

export const futureProjects = [
  {
    name: "StudyOS v2",
    purpose: "Upgrade StudyOS into a deeper productivity intelligence system for students.",
  },
  {
    name: "Focus Sound Generator",
    purpose: "Generate concentration-friendly ambient soundscapes for deep work sessions.",
  },
  {
    name: "Pomodoro Timer",
    purpose: "Create structured focus cycles with cleaner break and session planning.",
  },
  {
    name: "Algorithm Visualizer",
    purpose: "Explain algorithms through step-by-step visual simulation.",
  },
];

export const projectSectionLabels = {
  currentProjects: {
    heading: "Featured & Current Projects",
    description: "Systems and tools I've built and refined through real-world use",
  },
  tools: {
    heading: "Tools",
    description: "Smaller utilities and focused applications",
  },
  futureProjects: {
    heading: "Future Projects",
    description: "Systems and tools currently in development",
  },
};

// Tool projects identification
export const toolProjectSlugs = new Set([
  "color-palette-generator",
  "curiosity-engine",
  "habit-tracker",
  "timescope",
  "decision-maker",
]);
