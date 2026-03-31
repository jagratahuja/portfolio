# Jagrat Ahuja - Developer Portfolio

A systems-focused personal portfolio showcasing productivity tools, learning products, and proof-backed execution.

---

## 🌐 Live Demo

https://jagratahuja.vercel.app/

---

## 💡 Problem / Idea

Most student portfolios list projects but do not clearly communicate product thinking, consistency, or system-level depth. This portfolio was built to present a stronger signal: not only what was built, but how it connects to a focused direction around productivity and learning systems.

---

## ✨ Features

- Structured homepage flow covering identity, what I build, about, featured projects, proof of work, skills, achievements, and contact.
- Dedicated Projects Library page with all current shipped projects and a separate future tools section.
- Content-driven architecture for projects, skills, achievements, and proof metrics to keep updates consistent and scalable.
- Proof-backed achievements system with section-level certificates access and item-level proof links where available.
- Contact system with direct email/GitHub cards plus a browser-native Formspree form and fallback email flow.

---

## ⚙️ How It Works

Application workflow:

1. Visitors land on the homepage and move through a narrative sequence from identity to proof.
2. Shared content modules provide structured data for major sections (projects, skills, achievements, proof).
3. UI components render this data into responsive section cards and navigation routes.
4. Users can explore the full project archive on `/projects` and reach out through `/contact`.
5. Contact submissions are sent from the browser to Formspree, with a mailto fallback if submission fails.

---

## 🛠 Tech Stack

Frontend:
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Recharts

Backend:
- Formspree (browser-submitted contact form handling)

Storage:
- TypeScript content registries (project/content metadata)
- Static assets in `public/` (including certificates and proof files)

Deployment:
- Vercel

---

## 📂 Project Structure

```text
portfolio
│
├ app
│ ├ contact
│ ├ projects
│ ├ globals.css
│ ├ layout.tsx
│ └ page.tsx
│
├ components
├ content
├ lib
├ public
│ └ certificates
├ styles
├ Documentation
├ package.json
└ README.md
```

---

## 🚀 Installation (Run Locally)

```bash
git clone https://github.com/jagratahuja/portfolio.git

cd portfolio

npm install

npm run dev
```

---

## 🧠 Skills Demonstrated

This project demonstrates:

- Systems-first product presentation and portfolio information architecture
- Component-based frontend engineering with reusable, data-driven UI patterns
- Form-based backend integration for browser-only users using Formspree
- Practical UX delivery including responsive layouts, navigation flow, and form fallback handling

---

## 🔢 Version

Current Version: v2.0.0-stable

Version Notes:

v1.0.0
- Initial commit.
- Core portfolio concept and baseline structure.

v2.0.0-alpha.1
- Foundation and project system setup.
- Identity direction, About restructuring, featured projects baseline, projects route groundwork.

v2.0.0-alpha.2
- Proof & Signal phase.
- Added Proof of Work section and public consistency signal.

v2.0.0-alpha.3
- Stability/chore release.
- Lockfile/dependency sync and release hygiene updates.

v2.0.0-alpha.4
- Skills rework.
- Finalized structured skills taxonomy and content/component alignment.

v2.0.0-alpha.5
- Achievements proof integration.
- Certificate infrastructure, proof links, achievement data refinements.

v2.0.0-alpha.6
- Contact system.
- Dedicated contact flow, browser submission path, fallback handling.

v2.0.0-alpha.7
- UI/UX improvements.
- Container width expansion, spacing/alignment refinements, hover glitch fixes.

v2.0.0-beta.1
- Animation key work + final polish pass.
- One-time section reveal behavior, refresh/scroll behavior decisions, microcopy polish.

v2.0.0-rc
- Release candidate.
- Pre-launch validation and deployment readiness checkpoint.

v2.0.0-stable
- Stable release.
- Deployed on Vercel with live portfolio URL: https://jagratahuja.vercel.app/

---

## 🔮 Future Improvements

Planned upgrades for future versions:

- Add a dedicated flagship StudyOS section covering architecture, impact, and evolution snapshots.
- Build an integrated certificates experience with priority sorting and grouped views (awards, competitions, recognitions).
- Package the Python Programs Archive for direct download with clearer category and level-based organization.
- Introduce selective backend integrations to improve contact reliability and enable future analytics/automation workflows.
- Add optional detailed project routes (for example, project-specific pages with problem, approach, architecture, and lessons).

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Jagrat Ahuja

GitHub: https://github.com/jagratahuja
Portfolio: https://jagratahuja.vercel.app
