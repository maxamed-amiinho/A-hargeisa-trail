import StatusBar from "./StatusBar";

/**
 * Shared visual shell for a device (phone or laptop).
 * `variant` controls frame shape: "phone" (tall rounded rect) or "laptop" (wide, no status bar clock).
 * `label` shows the device name centered under the status icons, e.g. "Adam's phone".
 * `bg` sets a mood background behind the home screen grid (e.g. mountains for Adam, dusk portrait for Layla).
 * Designed to sit as one slide inside SwipeCarousel — fills its slide, centers the device.
 */
export default function DeviceFrame({ variant = "phone", label, bg, children }) {
  const bgStyle = bg
    ? { background: bg }
    : { background: "linear-gradient(180deg, #0d1210 0%, #0a0f0d 100%)" };

  if (variant === "laptop") {
    return (
      <div className="min-h-screen w-full flex items-center justify-center py-8">
        <div
          className="relative w-[320px] h-[600px] rounded-[14px] overflow-hidden border-[6px] border-[#1a1a1a] flex flex-col"
          style={bgStyle}
        >
          <StatusBar label={label} />
          <div className="flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-8">
      <div
        className="relative w-[300px] h-[620px] rounded-[38px] overflow-hidden border-[6px] border-[#1a1a1a] flex flex-col"
        style={bgStyle}
      >
        <StatusBar label={label} />
        {children}
      </div>
    </div>
  );
}
