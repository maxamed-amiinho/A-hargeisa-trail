import { db } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

/*
  Firestore structure:

  players/{playerId}
    - currentEpisode: number
    - unlockedApps: string[]        e.g. ["messages", "notes"]
    - hasPhone: boolean
    - hasLaptop: boolean
    - foundBody: boolean
    - vaultUnlocked: boolean
    - lettersolved: number          how many riddle-letters solved (0-4)
    - updatedAt: timestamp

  players/{playerId}/messages/{messageId}
    - threadId: string              e.g. "client", "cali", "najma"
    - from: "me" | "them"
    - text: string
    - createdAt: timestamp

  players/{playerId}/notes/{noteId}
    - title: string
    - body: string
    - locked: boolean
    - unlockedAtEpisode: number
*/

// ---------- Player progress ----------

export async function getPlayerProgress(playerId) {
  const ref = doc(db, "players", playerId);
  const snap = await getDoc(ref);
  if (snap.exists()) return snap.data();

  // Initialize a fresh player doc if none exists
  const initial = {
    currentEpisode: 1,
    unlockedApps: ["messages"],
    hasPhone: false,
    hasLaptop: false,
    foundBody: false,
    vaultUnlocked: false,
    lettersSolved: 0,
    updatedAt: serverTimestamp(),
  };
  await setDoc(ref, initial);
  return initial;
}

export async function updatePlayerProgress(playerId, updates) {
  const ref = doc(db, "players", playerId);
  await updateDoc(ref, { ...updates, updatedAt: serverTimestamp() });
}

// ---------- Messages ----------

export function subscribeToThread(playerId, threadId, callback) {
  const ref = collection(db, "players", playerId, "messages");
  const q = query(ref, orderBy("createdAt", "asc"));
  return onSnapshot(q, (snap) => {
    const all = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(all.filter((m) => m.threadId === threadId));
  });
}

export async function sendMessage(playerId, threadId, from, text) {
  const ref = collection(db, "players", playerId, "messages");
  await addDoc(ref, {
    threadId,
    from,
    text,
    createdAt: serverTimestamp(),
  });
}

// ---------- Notes ----------

export function subscribeToNotes(playerId, callback) {
  const ref = collection(db, "players", playerId, "notes");
  return onSnapshot(ref, (snap) => {
    callback(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  });
}

export async function unlockNote(playerId, noteId) {
  const ref = doc(db, "players", playerId, "notes", noteId);
  await updateDoc(ref, { locked: false });
}
