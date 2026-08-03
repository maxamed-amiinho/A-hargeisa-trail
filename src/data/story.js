export const CONTACTS = [
  { id: "cali", name: "Cali", role: "Younger brother", online: true },
  { id: "najma", name: "Najma", role: "Sister", online: false },
  { id: "axmed", name: "Axmed", role: "Older brother", online: false },
  { id: "taxi", name: "Taxi Driver", role: "Unknown lead", online: false },
  { id: "editor", name: "Editor", role: "Her boss", online: true },
];

// Seed data used only if Firestore has no messages yet for a fresh player.
export const SEED_CLIENT_MESSAGES = [
  { from: "them", text: "I hope you understand what's at stake here.", time: "10:41 AM" },
  { from: "them", text: "Her family is asking questions. You need to move faster.", time: "10:42 AM" },
  { from: "me", text: "I'm still working through her phone.", time: "10:44 AM" },
  { from: "them", text: "That's not enough. We don't have much time.", time: "10:44 AM" },
  { from: "them", text: "I thought you were better than this.", time: "10:45 AM" },
];

export const SEED_NOTES = [
  {
    id: "note-1",
    title: "untitled",
    locked: false,
    preview: "Isha Gobka at dusk. No one else goes there this time of year...",
    body: "Isha Gobka at dusk. No one else goes there this time of year. It's the only place my head goes quiet. I keep coming back — not just for me anymore.",
  },
  {
    id: "note-2",
    title: "letter — do not lose",
    locked: true,
    preview: "🔒 Locked note",
    body: "",
  },
];

// Tasks / Archive — running list of active and completed leads.
// status: "active" | "done"
export const SEED_TASKS = [
  {
    id: "task-1",
    title: "Find out who Layla was investigating",
    detail: "Her notes mention a land deal. Dig through her phone for names.",
    status: "active",
    episode: 1,
  },
  {
    id: "task-2",
    title: "Talk to Cali",
    detail: "Most cooperative family member — good place to start.",
    status: "done",
    episode: 1,
  },
  {
    id: "task-3",
    title: "Identify the last people she called",
    detail: "Check her call log once you have the phone.",
    status: "active",
    episode: 2,
  },
];

// Hint system for the riddle-letters puzzle (the "Isha Gobka trees" thread).
// Each letter has tiered hints — nudge, then a stronger hint, then a near-answer.
export const LETTER_HINTS = {
  "letter-1": [
    "Read the letter again slowly — it names a season before it names a tree.",
    "Trees that shed in that season are the ones to rule out, not the ones to pick.",
    "Look for the one tree at Isha Gobka that keeps its leaves all year — that's the one the letter means.",
  ],
  "letter-2": [
    "The letter counts something. Count matters as much as the object.",
    "Branches, not trees, are being counted this time.",
    "Three branches from the same tree, not three different trees — that's the trick.",
  ],
};
