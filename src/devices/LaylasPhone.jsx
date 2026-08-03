import { useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  Image,
  Camera,
  BookOpen,
  Heart,
  Settings,
  ArrowLeft,
} from "lucide-react";
import DeviceFrame from "../components/DeviceFrame";
import AppIcon from "../components/AppIcon";
import LaylaMessagesApp from "../apps/LaylaMessagesApp";
import NotesApp from "../apps/NotesApp";
import PlaceholderApp from "../apps/PlaceholderApp";

export default function LaylasPhone({ playerId, onExit }) {
  const [openApp, setOpenApp] = useState(null);
  const closeApp = () => setOpenApp(null);

  return (
    <DeviceFrame
      variant="phone"
      label="Layla's phone"
      bg="linear-gradient(180deg, #2a1512 0%, #3d1f18 45%, #1a1210 100%)"
    >
      {!openApp && (
        <div className="flex-1 px-6 pt-6 flex flex-col">
          <button onClick={onExit} className="flex items-center gap-1 text-inkfaint text-[12px] mb-4 self-start">
            <ArrowLeft size={14} /> Desk
          </button>
          <div className="grid grid-cols-4 gap-y-6 gap-x-3">
            <AppIcon
              label="Messages"
              gradient="linear-gradient(160deg, #2f8fd6, #1d5f96)"
              icon={<MessageCircle size={22} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("messages")}
            />
            <AppIcon
              label="Phone"
              gradient="linear-gradient(160deg, #3a9d5c, #226b3d)"
              icon={<Phone size={20} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("calls")}
            />
            <AppIcon
              label="Mail"
              gradient="linear-gradient(160deg, #c9564f, #96322b)"
              icon={<Mail size={20} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("mail")}
            />
            <AppIcon
              label="Gallery"
              gradient="linear-gradient(160deg, #3d4a5c, #232b36)"
              icon={<Image size={20} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("gallery")}
            />
            <AppIcon
              label="Camera"
              gradient="linear-gradient(160deg, #8b4fc9, #5c3187)"
              icon={<Camera size={20} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("camera")}
            />
            <AppIcon
              label="Diary"
              gradient="linear-gradient(160deg, #6b5535, #453722)"
              icon={<BookOpen size={20} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("notes")}
            />
            <AppIcon
              label="Symmetry"
              gradient="linear-gradient(160deg, #2b2b2b, #161616)"
              icon={<Heart size={20} className="text-[#c9564f]" strokeWidth={2} />}
              onClick={() => setOpenApp("symmetry")}
            />
            <AppIcon
              label="Settings"
              gradient="linear-gradient(160deg, #2b2b2b, #161616)"
              icon={<Settings size={20} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("settings")}
            />
          </div>
        </div>
      )}

      {openApp === "messages" && <LaylaMessagesApp onBack={closeApp} />}
      {openApp === "notes" && <NotesApp playerId={playerId} onBack={closeApp} />}
      {["calls", "mail", "gallery", "camera", "symmetry", "settings"].includes(openApp) && (
        <PlaceholderApp onBack={closeApp} />
      )}
    </DeviceFrame>
  );
}
