import { Lock } from "lucide-react";

export default function VaultApp({ onBack }) {
  return (
    <div className="flex flex-col h-full bg-basedeep items-center justify-center px-8">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{ boxShadow: "0 0 30px 4px rgba(201,169,97,0.25)", border: "1px solid rgba(201,169,97,0.4)" }}
      >
        <Lock size={26} className="text-gold" />
      </div>
      <p className="text-[15px] text-inkmute text-center leading-relaxed">This app is locked.</p>
      <p className="text-[13px] text-inkfaint text-center leading-relaxed mt-2">
        A key is needed to open it.
      </p>
      <button onClick={onBack} className="mt-10 text-[14px] text-gold font-medium">
        Close
      </button>
    </div>
  );
}
