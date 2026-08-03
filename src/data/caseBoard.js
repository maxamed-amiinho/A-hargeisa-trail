// Case board entries — each becomes a pinned photo once "discovered" is true.
// discovered flips to true as the player progresses (driven by Firestore progress flags later).
export const CASE_BOARD_PEOPLE = [
  { id: "layla", name: "Layla", role: "Victim", discovered: true, x: 50, y: 45 },
  { id: "caasha", name: "Caasha", role: "Mother", discovered: true, x: 20, y: 15 },
  { id: "warsame", name: "Warsame", role: "Father", discovered: true, x: 35, y: 10 },
  { id: "najma", name: "Najma", role: "Sister — jealous?", discovered: true, x: 15, y: 55 },
  { id: "axmed", name: "Axmed", role: "Brother — debt?", discovered: true, x: 80, y: 55 },
  { id: "cali", name: "Cali", role: "Brother — ally", discovered: true, x: 65, y: 15 },
  { id: "contractor", name: "The Contractor", role: "Suspect", discovered: false, x: 75, y: 75 },
  { id: "official", name: "Government Official", role: "Suspect", discovered: false, x: 25, y: 80 },
  { id: "enforcer", name: "Unknown", role: "\"The man who watches\"", discovered: false, x: 50, y: 85 },
  { id: "client", name: "Unknown", role: "Anonymous client", discovered: false, x: 5, y: 30 },
];

// Connections between people, drawn once BOTH endpoints are discovered.
export const CASE_BOARD_LINKS = [
  { from: "layla", to: "najma", label: "jealous?" },
  { from: "layla", to: "axmed", label: "money trouble?" },
  { from: "layla", to: "cali", label: "close" },
  { from: "layla", to: "contractor", label: "investigating" },
  { from: "layla", to: "official", label: "pressured her" },
  { from: "layla", to: "enforcer", label: "who?" },
  { from: "layla", to: "client", label: "trusted?" },
];
