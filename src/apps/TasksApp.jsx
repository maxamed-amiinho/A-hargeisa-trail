import { X, Circle, CheckCircle2 } from "lucide-react";
import { SEED_TASKS } from "../data/story";

export default function TasksApp({ onBack }) {
  const active = SEED_TASKS.filter((t) => t.status === "active");
  const done = SEED_TASKS.filter((t) => t.status === "done");

  return (
    <div className="flex flex-col h-full bg-base">
      <div className="flex items-center justify-between px-4 pt-3 pb-3 border-b border-panel">
        <span className="text-[17px] font-semibold text-ink">Archive</span>
        <button onClick={onBack} aria-label="Close">
          <X size={20} className="text-ink" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <p className="text-[12px] uppercase tracking-wide text-inkfaint mb-2">Active leads</p>
        <div className="flex flex-col gap-2 mb-6">
          {active.map((t) => (
            <div key={t.id} className="flex gap-3 p-3 rounded-xl bg-panel">
              <Circle size={16} className="text-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[14px] font-medium text-ink">{t.title}</p>
                <p className="text-[12px] text-inkmute mt-0.5">{t.detail}</p>
              </div>
            </div>
          ))}
          {active.length === 0 && (
            <p className="text-[13px] text-inkfaint italic">No open leads right now.</p>
          )}
        </div>

        <p className="text-[12px] uppercase tracking-wide text-inkfaint mb-2">Resolved</p>
        <div className="flex flex-col gap-2">
          {done.map((t) => (
            <div key={t.id} className="flex gap-3 p-3 rounded-xl bg-panelmute opacity-60">
              <CheckCircle2 size={16} className="text-[#5a8a5a] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[14px] font-medium text-ink line-through">{t.title}</p>
                <p className="text-[12px] text-inkmute mt-0.5">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
