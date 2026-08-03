export default function AppIcon({ label, gradient, glow, badge, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-2xl"
    >
      <div
        className="w-12 h-12 rounded-[14px] flex items-center justify-center relative"
        style={{
          background: gradient,
          boxShadow: glow ? "0 0 18px 2px rgba(201,169,97,0.35)" : "0 2px 6px rgba(0,0,0,0.4)",
        }}
      >
        {icon}
        {glow && (
          <div
            className="absolute inset-0 rounded-[14px] animate-pulse"
            style={{ boxShadow: "0 0 0 1px rgba(201,169,97,0.3)" }}
          />
        )}
        {badge && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-rust border-2 border-base" />
        )}
      </div>
      <span className="text-[10.5px] text-[#cfc9ba] font-medium tracking-tight text-center">{label}</span>
    </button>
  );
}
