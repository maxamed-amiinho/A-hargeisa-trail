import { useState } from "react";
import { ChevronLeft, X } from "lucide-react";

// Layla's own conversations — read-only, since she can't reply anymore.
const THREADS = [
  { id: "editor", name: "Editor", preview: "The story needs more sourcing before I can run it." },
  { id: "najma", name: "Najma", preview: "You always take his side." },
  { id: "unknown-friend", name: "🔒 Locked chat", preview: "This conversation is locked." },
];

const SAMPLE_MESSAGES = {
  editor: [
    { from: "them", text: "The story needs more sourcing before I can run it.", time: "2 weeks ago" },
    { from: "me", text: "I have three people willing to go on record.", time: "2 weeks ago" },
    { from: "them", text: "Get me a fourth. This is bigger than you think.", time: "2 weeks ago" },
  ],
  najma: [
    { from: "them", text: "You always take his side.", time: "1 month ago" },
    { from: "me", text: "That's not fair and you know it.", time: "1 month ago" },
  ],
};

export default function LaylaMessagesApp({ onBack }) {
  const [openThread, setOpenThread] = useState(null);

  if (openThread && openThread !== "unknown-friend") {
    const thread = THREADS.find((t) => t.id === openThread);
    const messages = SAMPLE_MESSAGES[openThread] || [];
    return (
      <div className="flex flex-col h-full bg-base">
        <div className="flex items-center justify-between px-4 pt-3 pb-3 border-b border-panel">
          <button onClick={() => setOpenThread(null)} aria-label="Back">
            <ChevronLeft size={22} className="text-ink" />
          </button>
          <span className="text-[15px] font-semibold text-ink">{thread?.name}</span>
          <div className="w-6" />
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-2.5">
          {messages.map((m, i) => (
            <div key={i} className={`flex flex-col ${m.from === "me" ? "items-end" : "items-start"}`}>
              <div
                className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-[14px] leading-snug ${
                  m.from === "me" ? "bg-gold text-base" : "bg-panel text-ink"
                }`}
              >
                {m.text}
              </div>
              <span className="text-[10px] text-inkfaint mt-1 px-1">{m.time}</span>
            </div>
          ))}
        </div>
        <div className="px-4 py-2 border-t border-panel">
          <p className="text-[11px] text-inkfaint italic text-center">Read-only — Layla can't reply.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-base">
      <div className="flex items-center justify-between px-4 pt-3 pb-3 border-b border-panel">
        <span className="text-[17px] font-semibold text-ink">Messages</span>
        <button onClick={onBack} aria-label="Close">
          <X size={20} className="text-ink" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {THREADS.map((t) => (
          <button
            key={t.id}
            onClick={() => setOpenThread(t.id)}
            className="w-full flex flex-col items-start px-4 py-3 border-b border-panelmute text-left active:bg-[#141917]"
          >
            <span className="text-[15px] font-medium text-ink">{t.name}</span>
            <p className="text-[13px] text-inkmute truncate">{t.preview}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
