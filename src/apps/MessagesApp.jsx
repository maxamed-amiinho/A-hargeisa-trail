import { useState, useEffect } from "react";
import { ChevronLeft, X, Lock } from "lucide-react";
import { CONTACTS, SEED_CLIENT_MESSAGES } from "../data/story";
import { subscribeToThread, sendMessage } from "../lib/gameData";

function ClientThread({ playerId, onBack }) {
  const [messages, setMessages] = useState(SEED_CLIENT_MESSAGES);

  useEffect(() => {
    if (!playerId) return; // no backend wired yet, show seed data
    const unsub = subscribeToThread(playerId, "client", (msgs) => {
      if (msgs.length > 0) setMessages(msgs);
    });
    return () => unsub();
  }, [playerId]);

  return (
    <div className="flex flex-col h-full bg-base">
      <div className="flex items-center justify-between px-4 pt-3 pb-3 border-b border-panel">
        <button onClick={onBack} aria-label="Back">
          <ChevronLeft size={22} className="text-ink" />
        </button>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-panel flex items-center justify-center mb-0.5">
            <Lock size={14} className="text-inkfaint" />
          </div>
          <span className="text-[15px] font-semibold text-ink">Unknown</span>
          <span className="text-[11px] text-rust">is typing…</span>
        </div>
        <div className="w-6" />
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-2.5">
        {messages.map((m, i) => (
          <div key={m.id || i} className={`flex flex-col ${m.from === "me" ? "items-end" : "items-start"}`}>
            <div
              className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-[14px] leading-snug ${
                m.from === "me" ? "bg-gold text-base" : "bg-panel text-ink"
              }`}
            >
              {m.text}
            </div>
            <span className="text-[10px] text-inkfaint mt-1 px-1">{m.time || ""}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MessagesApp({ playerId, onBack }) {
  const [openThread, setOpenThread] = useState(null);

  if (openThread === "client") {
    return <ClientThread playerId={playerId} onBack={() => setOpenThread(null)} />;
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
        <button
          onClick={() => setOpenThread("client")}
          className="w-full flex items-center gap-3 px-4 py-3 border-b border-panelmute text-left active:bg-[#141917]"
        >
          <div className="w-11 h-11 rounded-full bg-panel flex items-center justify-center flex-shrink-0">
            <Lock size={16} className="text-inkfaint" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[15px] font-medium text-ink">Unknown</span>
              <span className="text-[11px] text-inkfaint">10:45 AM</span>
            </div>
            <p className="text-[13px] text-inkmute truncate">I thought you were better than this.</p>
          </div>
        </button>
        {CONTACTS.map((c) => (
          <button
            key={c.id}
            className="w-full flex items-center gap-3 px-4 py-3 border-b border-panelmute text-left active:bg-[#141917]"
          >
            <div className="w-11 h-11 rounded-full bg-[#2a2420] flex items-center justify-center flex-shrink-0 relative">
              <span className="text-[15px] font-semibold text-gold">{c.name[0]}</span>
              {c.online && (
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#5a8a5a] border-2 border-base" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[15px] font-medium text-ink block">{c.name}</span>
              <p className="text-[13px] text-inkfaint truncate">{c.role}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
