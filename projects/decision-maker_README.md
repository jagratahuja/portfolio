# Decision Maker

A fast decision-scoring web app that lets users compare options and rank them instantly using weighted criteria.

---

## 🌐 Live Demo

https://decision-jagratahuja.vercel.app/

---

## 💡 Problem

Most people make important decisions with fragmented thinking: too much intuition, no consistent scoring, and no clear comparison between options.

Decision Maker solves this by turning decision-making into a simple, repeatable scoring process using four weighted factors:

* Importance
* Long-term value
* Urgency
* Enjoyment

This creates clear rankings, tie-aware recommendations, and faster decisions with less second-guessing.

---

## ✨ Features

* Add and compare up to 4 options in a single view
* Weighted scoring model with live sliders
* Duplicate option-name validation before scoring
* Tie-aware recommendation output (multiple top recommendations when scores match)
* Rank indicators (#1 gold, #2 silver, #3 bronze, #4+ neutral)
* Persistent option state using browser localStorage
* Reset-to-home behavior from header brand click
* Responsive layout and centered ordering logic for 1/2/3/4 cards

---

## ⚙️ How It Works

Decision Maker applies this weighted formula:

$$
\text{Score} = (\text{Importance} \times 2) + (\text{Long-term} \times 2) + (\text{Urgency} \times 1.5) + (\text{Enjoyment} \times 1)
$$

Workflow:

1. User adds option cards and enters unique option names
2. User adjusts the four criteria sliders for each option
3. App validates input (minimum 2 named options, no duplicate names)
4. App calculates weighted scores and sorts options in descending order
5. UI renders recommendations, ranks, tie notices, and score breakdown
6. Option state is saved in localStorage and restored on refresh

---

## 🛠 Tech Stack

Frontend:

* React
* TypeScript
* Javascript
* Vite
* HTML5
* CSS3
* Lucide React (icons)

Backend:

* Not applicable (client-side app)

Storage:

* Browser localStorage

Deployment:

* Vercel (https://decision-jagratahuja.vercel.app/)

---

## 📂 Project Structure

```
decision-maker
│
├ src
│ ├ App.tsx
│ ├ index.css
│ ├ main.tsx
│ └ vite-env.d.ts
│
├ public
│ └ scale.svg
│
├ index.html
├ package.json
├ update.md
└ README.md
```

---

## 🚀 Installation (Run Locally)

```bash
git clone https://github.com/jagratahuja/decision-maker.git

npm install

npm run dev
```

---

## 🧠 Skills Demonstrated

This project demonstrates:

* React state management for dynamic UI flows
* TypeScript data modeling and input validation
* Weighted decision/ranking logic with tie handling
* Responsive layout engineering with conditional card placement
* Client-side persistence and recovery via localStorage
* Iterative UX refinement and bug fixing

---

## 🔢 Version

Current Version: v2.0

Version Notes:

v1.0

* Initial release with core weighted decision idea across four factors

v2.0

* Major UI/UX redesign and interaction refinements
* Tie-aware recommendations and rank indicators
* Input guardrails (duplicate-name checks and character limits)
* LocalStorage persistence and header reset-to-home flow

---

## 🔮 Future Improvements

Planned upgrades for future versions:

* Add database-backed persistence for cross-device option history
* Add a dedicated history/review section for previous decision sessions
* Integrate Decision Maker with related apps for a connected workflow

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Jagrat Ahuja

GitHub: [https://github.com/jagratahuja](https://github.com/jagratahuja)
Portfolio: [https://jagratahuja.vercel.app](https://jagratahuja.vercel.app)
