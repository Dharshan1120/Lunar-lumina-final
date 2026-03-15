# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Lunar Lumina (aka "Upflux") is an AI-powered quiz platform. Users authenticate, take quizzes (from a static question bank or AI-generated from uploaded syllabi), and view learning analytics on a dashboard. The project has two independent packages: a React frontend and a Node.js/Express backend.

## Repository Structure

- `upflux/` — React frontend (Vite + React 19, the actively developed app)
- `backend/` — Express API server (quiz generation via Groq LLM)
- `Lunar-Lumina/` — Appears to be a stale/nested copy of the repo; not actively used

## Commands

### Frontend (`upflux/`)

```
npm run dev        # Start Vite dev server
npm run build      # Production build
npm run lint       # ESLint (flat config, React hooks + React Refresh plugins)
npm run preview    # Preview production build
```

### Backend (`backend/`)

```
npm start          # Start Express server on port 5000
```

Requires a `.env` file in `backend/` with `GROQ_API_KEY`.

### Install dependencies

Each package manages its own `node_modules`. Run `npm install` separately in `upflux/` and `backend/`.

## Architecture

### Frontend

- **Build tool:** Vite 7 with `@vitejs/plugin-react`
- **Routing:** React Router DOM v7 (`BrowserRouter` wrapping `<App>` in `main.jsx`)
- **Auth:** Firebase Auth, managed via a React context (`src/context/AuthContext.jsx`). `AuthProvider` wraps the entire app and exposes `{ user }`. Protected routes use `src/components/layout/ProtectedRoute.jsx` which redirects unauthenticated users to `/login`.
- **Database:** Firestore (`src/services/firebase.js` exports `auth` and `db`). Quiz attempts are stored in the `quizAttempts` collection with fields: `userId`, `score`, `total`, `accuracy`, `topics` (per-topic breakdown), `xp`, `createdAt`.
- **State management:** Local component state only (no Redux/global store).
- **Charts:** Recharts (`LineChart`) on the Dashboard for accuracy-over-time visualization.

### Key pages

- `/` — Home (placeholder)
- `/login` — Email/password login & signup via Firebase Auth
- `/dashboard` — (protected) Fetches user's quiz attempts from Firestore, computes learning velocity/insights, shows XP/level, filters by topic, renders accuracy chart
- `/quiz` — (protected) Two quiz modes:
  1. **Static quiz:** Select topic + difficulty from `src/data/programmingQuestions.js` (a hardcoded bank of 180+ MCQs across Data Structures, OOPS, Python, Machine Learning, DBMS, Operating Systems)
  2. **AI quiz:** Upload a `.txt`/`.pdf` syllabus file → POST to `http://localhost:5000/generate-quiz` → backend uses Groq (Llama 3.1 8B) to generate 10 MCQs

### Backend

Single-file Express server (`backend/server.js`):
- `POST /generate-quiz` — accepts `multipart/form-data` with `file` (syllabus text) and `difficulty`. Sends prompt to Groq API, parses JSON array of questions from the LLM response.

### Data flow for AI quiz generation

```
TakeQuiz.jsx → FormData POST → backend/server.js → Groq LLM → JSON MCQ array → rendered in TakeQuiz.jsx
```

### Quiz result persistence

After completing a quiz, the user clicks "Save Result" which writes to Firestore `quizAttempts`. The Dashboard reads these to compute analytics (learning velocity = slope of accuracy over attempts, stagnation index, XP/level system at 200 XP per level, 10 XP per correct answer).

## ESLint

Flat config in `upflux/eslint.config.js`. Notable rule: `no-unused-vars` ignores variables starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`).

## Environment Variables

- `backend/.env`: `GROQ_API_KEY` — required for AI quiz generation
- Firebase config is hardcoded in `upflux/src/services/firebase.js` (project: `upflux-ai`)

## Testing

No test framework is currently configured in either package.
