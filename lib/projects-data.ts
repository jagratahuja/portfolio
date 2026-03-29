export type ProjectItem = {
  title: string;
  slug: string;
  positioningLine: string;
  supportLine: string;
  tech: string[];
  sourceUrl: string;
  liveUrl?: string;
  summaryUrl?: string;
  sourceAvailable?: boolean;
  featured: boolean;
  isArchive?: boolean;
};

export const projectsData: ProjectItem[] = [
  {
    title: "StudyOS",
    slug: "studyos",
    positioningLine:
      "A study analytics system that measures learning effectiveness, not just study hours.",
    supportLine:
      "Designed to turn focus, session depth, and task completion into practical productivity insights for students.",
    tech: ["Next.js", "React", "Supabase", "Recharts", "Vercel"],
    sourceUrl: "https://github.com/jagratahuja/studyOS",
    liveUrl: "https://studyos-jagratahuja.vercel.app/",
    featured: true,
  },
  {
    title: "TimeScope",
    slug: "timescope",
    positioningLine:
      "A real-time countdown dashboard that converts deadlines into live, visible urgency.",
    supportLine:
      "Designed to help users prioritize upcoming milestones with continuously updating timers and progress signals.",
    tech: ["React", "Next.js", "localStorage", "Vercel"],
    sourceUrl: "https://github.com/jagratahuja/timescope",
    liveUrl: "https://timescope-jagratahuja.vercel.app/",
    featured: true,
  },
  {
    title: "Decision Maker",
    slug: "decision-maker",
    positioningLine:
      "A weighted decision system that ranks options with clarity and consistency.",
    supportLine:
      "Designed to reduce overthinking by scoring choices across importance, long-term value, urgency, and enjoyment.",
    tech: ["React", "TypeScript", "Vite", "CSS", "localStorage"],
    sourceUrl: "https://github.com/jagratahuja/decision-maker",
    liveUrl: "https://decision-jagratahuja.vercel.app/",
    featured: true,
  },
  {
    title: "Xscape: The Equation Quest",
    slug: "xscape-the-equation-quest",
    positioningLine:
      "A gamified algebra learning experience with a 10-level progression across equations, inequalities, and word problems.",
    supportLine:
      "Designed for classes IX-XII with pass-and-play teamwork, randomized question pools, and progression-based unlocking.",
    tech: ["Unity 6.1", "C#", "WebGL", "Photoshop", "Itch.io"],
    sourceUrl: "https://github.com/jagratahuja/Zetri",
    liveUrl: "https://clashmc.itch.io/xscape",
    summaryUrl: "https://tinyurl.com/xscape-summary",
    sourceAvailable: false,
    featured: true,
  },
  {
    title: "Python Programs Archive",
    slug: "python-programs-archive",
    positioningLine:
      "A structured archive documenting 200+ Python programs from fundamentals to applied projects.",
    supportLine:
      "Designed as a proof-of-work repository that shows progression across logic, GUI tools, and experiments.",
    tech: ["Python", "Tkinter", "Turtle", "Pygame", "Algorithms"],
    sourceUrl: "https://github.com/jagratahuja/python-programs",
    featured: true,
    isArchive: true,
  },
  {
    title: "Color Palette Generator",
    slug: "color-palette-generator",
    positioningLine:
      "A fast palette generation tool built for practical design and frontend workflows.",
    supportLine:
      "Designed with lock controls, copy shortcuts, and history to speed up color exploration and implementation.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    sourceUrl: "https://github.com/jagratahuja/color-palette",
    liveUrl: "https://color-jagratahuja.vercel.app/",
    featured: false,
  },
  {
    title: "Curiosity Engine",
    slug: "curiosity-engine",
    positioningLine:
      "A curiosity prompt engine that drives structured topic exploration without repetition.",
    supportLine:
      "Designed to serve rotating prompts with persistence so users can keep exploring from where they left off.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "localStorage"],
    sourceUrl: "https://github.com/jagratahuja/curiosity-engine",
    liveUrl: "https://curiosity-jagratahuja.vercel.app/",
    featured: false,
  },
  {
    title: "Habit Tracker",
    slug: "habit-tracker",
    positioningLine:
      "A lightweight habit consistency tracker focused on daily streak clarity.",
    supportLine:
      "Designed to keep progress simple and visible so users can build momentum through repeatable routines.",
    tech: ["HTML", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/jagratahuja/habit-tracker",
    featured: false,
  },
];

export const futureTools = [
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
