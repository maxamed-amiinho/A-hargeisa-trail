import { useState } from "react";
import { Image, FileText, ArrowLeft } from "lucide-react";
import DeviceFrame from "../components/DeviceFrame";
import AppIcon from "../components/AppIcon";
import DocsApp from "../apps/DocsApp";
import PlaceholderApp from "../apps/PlaceholderApp";

export default function LaylasLaptop({ onExit }) {
  const [openApp, setOpenApp] = useState(null);
  const closeApp = () => setOpenApp(null);

  return (
    <DeviceFrame variant="laptop" label="Layla's laptop">
      {!openApp && (
        <div className="flex-1 px-6 pt-6 flex flex-col">
          <button onClick={onExit} className="flex items-center gap-1 text-inkfaint text-[12px] mb-4 self-start">
            <ArrowLeft size={14} /> Desk
          </button>
          <div className="flex gap-6 justify-center">
            <AppIcon
              label="Gallery"
              gradient="linear-gradient(160deg, #3d4a5c, #232b36)"
              icon={<Image size={22} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("gallery")}
            />
            <AppIcon
              label="Documents"
              gradient="linear-gradient(160deg, #4a4536, #2e2a20)"
              icon={<FileText size={22} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("docs")}
            />
          </div>
        </div>
      )}

      {openApp === "gallery" && <PlaceholderApp onBack={closeApp} />}
      {openApp === "docs" && <DocsApp onBack={closeApp} />}
    </DeviceFrame>
  );
}
