import { useState, useEffect } from "react";
import { Wifi, Signal, BatteryFull, Diamond } from "lucide-react";

export default function StatusBar({ label }) {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const t = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="pt-3 pb-2">
      <div className="flex items-center justify-between px-5 text-[12px] font-medium text-ink tracking-wide">
        <div className="flex items-center gap-1.5">
          <Diamond size={12} strokeWidth={2} />
        </div>
        <div className="flex items-center gap-1.5">
          <Signal size={13} strokeWidth={2.5} />
          <Wifi size={13} strokeWidth={2.5} />
          <BatteryFull size={14} strokeWidth={2.5} />
        </div>
      </div>
      {label && (
        <p className="text-center text-[12px] text-ink font-medium mt-1">{label}</p>
      )}
    </div>
  );
}
