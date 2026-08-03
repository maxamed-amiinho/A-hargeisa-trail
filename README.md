# A hargeisa Trail

A phone-UI mystery game (React + Firestore), inspired by *An Elmwood Trail*, set in Hargeisa.

## Project structure

```
src/
  main.jsx              entry point
  App.jsx                top-level component, holds the current playerId
  components/
    PhoneShell.jsx        home screen + app router (the phone frame)
    StatusBar.jsx          fake status bar (clock, signal, wifi, battery)
    AppIcon.jsx             one home-screen app icon
  apps/
    MessagesApp.jsx        Messages app + the "Unknown" client thread
    NotesApp.jsx            Notes app (locked/unlocked notes)
    VaultApp.jsx             the locked "???" app (unlocks late-game)
    PlaceholderApp.jsx     stub for Gallery / Calls until built out
  data/
    story.js                static story content: contacts, seed messages, notes
  lib/
    firebase.js             Firebase init — put your project config here
    gameData.js              Firestore read/write helpers (progress, messages, notes)
```

## 1. Set up Firebase

1. Go to https://console.firebase.google.com and create a new project (e.g. "isha-gobka-trail").
2. In the project, go to **Build > Firestore Database > Create database**. Start in test mode for now (lock it down before real launch).
3. Go to **Project settings > General > Your apps > Add app > Web**, register the app, and copy the config object it gives you.
4. Paste those values into `src/lib/firebase.js`, replacing the placeholder strings.

## 2. Install and run locally

```bash
npm install
npm run dev
```

This starts a local dev server (usually http://localhost:5173).

## 3. Firestore data model

See the comment block at the top of `src/lib/gameData.js` for the exact collection/document shape:
- `players/{playerId}` — progress flags (current episode, unlocked apps, hasPhone, hasLaptop, etc.)
- `players/{playerId}/messages/{id}` — chat messages, grouped by `threadId`
- `players/{playerId}/notes/{id}` — notes, each with a `locked` flag

Right now `App.jsx` uses one hardcoded `TEMP_PLAYER_ID` so you can test reads/writes without building auth first. Swap this out once you add real sign-in (Firebase Auth is already installed and partially wired in `firebase.js`).

## 4. Deploy to Vercel

```bash
npm i -g vercel   # if you don't have the CLI yet
vercel
```

Or push this folder to a GitHub repo and import it in the Vercel dashboard — Vercel auto-detects Vite projects, no extra config needed beyond the included `vercel.json` (handles client-side routing).

## Notes for continuing the build

- Seed content in `data/story.js` is just fallback/demo data — Firestore data (once present) takes priority in `MessagesApp` and `NotesApp`.
- The Vault app (`VaultApp.jsx`) is currently just a locked screen. Wire up the unlock condition once the final riddle/cipher mechanic is built.
- Gallery and Calls apps are stubs — build these out the same way Messages/Notes are structured (a component in `apps/`, story data in `data/story.js`, Firestore helpers in `gameData.js`).
