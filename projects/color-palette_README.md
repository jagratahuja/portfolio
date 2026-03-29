# Color Palette Generator

A web application that generates interactive color palettes for designers and developers with modern UI controls and fast copy workflows.

---

## 🌐 Live Demo

https://color-jagratahuja.vercel.app/

---

## 💡 Problem / Idea

Choosing color combinations quickly during design or frontend work often takes extra manual effort.
This project was built to streamline that process by generating usable palettes instantly, adding lock/history controls, and making color copying frictionless through both buttons and keyboard shortcuts.

---

## ✨ Features

- Generate 5-color palettes instantly
- Lock individual colors before regeneration
- Undo through up to 5 previous palettes (Back system)
- Copy single colors from button, hex text, or color preview area
- Copy full palette as comma-separated hex values
- Keyboard shortcut support (Space / Enter) for fast generation
- Responsive, design-system driven UI with animated transitions
- Custom branded transparent favicon and cohesive header iconography

---

## ⚙️ How It Works

1. User generates a palette using the main button, mini generate button, or keyboard shortcut.
2. The app creates new random colors while preserving any locked colors.
3. Before regeneration, the current palette is pushed into a history stack (up to 5 entries).
4. The user can copy a single color or copy the full palette string.
5. Back restores previous palettes in reverse order until history is exhausted.

---

## 🛠 Tech Stack

Frontend:
- React 18
- TypeScript
- Tailwind CSS
- Lucide React

Deployment:
- Vercel

---

## 📂 Project Structure

```
color-palette
|
|- src
|  |- App.tsx
|  |- index.css
|  \- main.tsx
|
|- public
|  \- favicon.svg
|
|- index.html
|- package.json
\- README.md
```

---

## 🚀 Installation (Run Locally)

```bash
git clone https://github.com/jagratahuja/color-palette.git

cd color-palette

npm install

npm run dev
```

---

## 🧠 Skills Demonstrated

This project demonstrates:

- state management for interactive UI flows
- palette history and undo stack design
- conditional rendering and responsive layout structuring
- keyboard-accessible interactions and copy feedback handling

---

## 🔢 Version

Current Version: v2.0

Version Notes:

v1.0
- Initial release with core palette generation concept

v2.0
- Full UI overhaul aligned to personal design system
- Structured layout with header, hero, palette section, and footer
- Added lock/unlock controls, palette history, and full-palette copy
- Added keyboard shortcuts and micro-interaction polish
- Updated branding with consistent naming and custom favicon

---

## 🔮 Future Improvements

Planned upgrades for future versions:

- Export palette as CSS variables
- Save favorite palettes locally
- Add downloadable palette assets (PNG / JSON)

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Jagrat Ahuja

GitHub: https://github.com/jagratahuja

Portfolio: https://jagratahuja.vercel.app
