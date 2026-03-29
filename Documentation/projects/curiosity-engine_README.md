# Curiosity Engine

A React and TypeScript app that serves up curiosity prompts across science, history, technology, space, and random facts; and lets users jump straight into exploring each topic.

## Live Demo

https://curiosity-jagratahuja.vercel.app/

## Features

- 100 hand-picked curiosity prompts across 5 categories
- Pool-drain rotation, no repeats until all 100 have been seen
- Surprise Me action for a new question
- Learn More action that opens a Google search in a new tab
- Counter tracking how many curiosities you've explored
- Exhaustion state when all 100 are explored, with a reset flow
- Full session persistence via localStorage, picks up where you left off on refresh
- Neon dark UI with glassmorphism and animated atmospheric effects

## How It Works

1. Open the app.
2. Click Surprise Me to reveal your first curiosity prompt.
3. Click Learn More to search the topic in a new tab.
4. Keep clicking Surprise Me — questions are drawn without repeats until all 100 are exhausted.
5. Once all 100 are explored, use the Reset button to start fresh.
6. Your progress is saved automatically and restored on refresh.

## Project Structure

```
curiosity-generator
|-- index.html
|-- package.json
|-- src/
|   |-- App.tsx
|   |-- index.css
|   `-- main.tsx
`-- README.md
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Author

Jagrat Ahuja

GitHub: https://github.com/jagratahuja

Portfolio: https://jagratahuja.vercel.app/
