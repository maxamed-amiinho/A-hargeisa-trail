import { useState } from "react";
import { Lightbulb } from "lucide-react";

/**
 * Tiered hint system. Pass an array of hint strings (weakest -> strongest).
 * Each tap reveals the next hint; player can't skip ahead.
 * Usage: <HintPanel hints={LETTER_HINTS["letter-1"]} />
 */
export default function HintPanel({ hints = [] }) {
  const [revealed, setRevealed] = useState(0);

  const revealNext = () => {
    if (revealed < hints.length) setRevealed(revealed + 1);
  };

  return (
    <div className="mt-4 border-t border-panel pt-4">
      {Array.from({ length: revealed }).map((_, i) => (
        <p key={i} className="text-[13px] text-inkmute leading-relaxed mb-2 italic">
          Hint {i + 1}: {hints[i]}
        </p>
      ))}

      {revealed < hints.length ? (
        <button
          onClick={revealNext}
          className="flex items-center gap-2 text-[13px] text-gold font-medium"
        >
          <Lightbulb size={15} />
          {revealed === 0 ? "Show a hint" : "Show another hint"}
        </button>
      ) : (
        <p className="text-[12px] text-inkfaint italic">No more hints for this one.</p>
      )}
    </div>
  );
}
