import { X, HelpCircle } from "lucide-react";
import { CASE_BOARD_PEOPLE, CASE_BOARD_LINKS } from "../data/caseBoard";

// A corkboard view: photos pinned with string connecting them.
// Rendered as an absolutely positioned overlay using percentage coordinates.
export default function CaseBoard({ onBack }) {
  const people = CASE_BOARD_PEOPLE;
  const findPerson = (id) => people.find((p) => p.id === id);

  return (
    <div className="fixed inset-0 bg-[#14100c] z-50 flex flex-col">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#2a2118]">
        <span className="text-[16px] font-semibold text-ink">Case Board</span>
        <button onClick={onBack} aria-label="Close">
          <X size={20} className="text-ink" />
        </button>
      </div>

      <div className="flex-1 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at center, #1c1712 0%, #100d09 100%)" }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {CASE_BOARD_LINKS.map((link, i) => {
            const a = findPerson(link.from);
            const b = findPerson(link.to);
            if (!a || !b || !a.discovered || !b.discovered) return null;
            return (
              <line
                key={i}
                x1={`${a.x}%`}
                y1={`${a.y}%`}
                x2={`${b.x}%`}
                y2={`${b.y}%`}
                stroke="#8b3a2f"
                strokeWidth="1.5"
                opacity="0.7"
              />
            );
          })}
        </svg>

        {people.map((p) => (
          <div
            key={p.id}
            className="absolute flex flex-col items-center"
            style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div
              className={`w-16 h-16 rounded-md border-2 flex items-center justify-center ${
                p.discovered ? "bg-[#2a2420] border-[#5a4a35]" : "bg-black border-[#3a2f24]"
              }`}
            >
              {p.discovered ? (
                <span className="text-[18px] font-semibold text-gold">{p.name[0]}</span>
              ) : (
                <HelpCircle size={22} className="text-inkfaint" />
              )}
            </div>
            <span className="text-[10px] text-ink mt-1 max-w-[70px] text-center leading-tight">
              {p.discovered ? p.name : "???"}
            </span>
            <span className="text-[9px] text-inkfaint text-center max-w-[70px] leading-tight">
              {p.discovered ? p.role : ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
