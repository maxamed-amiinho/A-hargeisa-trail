import { useState, useEffect } from "react";
import { ChevronLeft, X, Lock } from "lucide-react";
import { SEED_NOTES, LETTER_HINTS } from "../data/story";
import { subscribeToNotes } from "../lib/gameData";
import HintPanel from "../components/HintPanel";

export default function NotesApp({ playerId, onBack }) {
  const [openNote, setOpenNote] = useState(null);
  const [notes, setNotes] = useState(SEED_NOTES);

  useEffect(() => {
    if (!playerId) return; // no backend wired yet, show seed data
    const unsub = subscribeToNotes(playerId, (n) => {
      if (n.length > 0) setNotes(n);
    });
    return () => unsub();
  }, [playerId]);

  if (openNote) {
    const note = notes.find((n) => n.id === openNote);
    return (
      <div className="flex flex-col h-full bg-base">
        <div className="flex items-center justify-between px-4 pt-3 pb-3 border-b border-panel">
          <button onClick={() => setOpenNote(null)} aria-label="Back">
            <ChevronLeft size={22} className="text-ink" />
          </button>
          <span className="text-[15px] font-semibold text-ink">Note</span>
          <button onClick={onBack} aria-label="Close">
            <X size={20} className="text-ink" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <p className="text-[16px] leading-relaxed text-ink" style={{ fontFamily: "Georgia, serif" }}>
            {note?.body}
          </p>
          {LETTER_HINTS[note?.id] && <HintPanel hints={LETTER_HINTS[note.id]} />}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-base">
      <div className="flex items-center justify-between px-4 pt-3 pb-3 border-b border-panel">
        <span className="text-[17px] font-semibold text-ink">Notes</span>
        <button onClick={onBack} aria-label="Close">
          <X size={20} className="text-ink" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {notes.map((n) => (
          <button
            key={n.id}
            onClick={() => !n.locked && setOpenNote(n.id)}
            className="w-full text-left px-4 py-3 border-b border-panelmute active:bg-[#141917]"
          >
            <div className="flex items-center gap-2">
              {n.locked && <Lock size={13} className="text-inkfaint" />}
              <span className="text-[15px] font-medium text-ink">{n.title}</span>
            </div>
            <p className="text-[13px] text-inkfaint truncate mt-0.5">{n.preview}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
