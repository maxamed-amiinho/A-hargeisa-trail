import { useState } from "react";
import {
  MessageCircle,
  Phone,
  Calculator,
  Globe,
  ClipboardList,
  Lock,
  Settings,
  ArrowLeft,
} from "lucide-react";
import DeviceFrame from "../components/DeviceFrame";
import AppIcon from "../components/AppIcon";
import MessagesApp from "../apps/MessagesApp";
import VaultApp from "../apps/VaultApp";
import TasksApp from "../apps/TasksApp";
import PlaceholderApp from "../apps/PlaceholderApp";

export default function DetectivePhone({ playerId, onExit }) {
  const [openApp, setOpenApp] = useState(null);
  const closeApp = () => setOpenApp(null);

  return (
    <DeviceFrame
      variant="phone"
      label="Adam's phone"
      bg="linear-gradient(180deg, #0a1015 0%, #0d1a1c 55%, #0a0f0a 100%)"
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
              badge
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
              label="Calculator"
              gradient="linear-gradient(160deg, #6b3530, #4a221e)"
              icon={<Calculator size={20} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("calculator")}
            />
            <AppIcon
              label="Browser"
              gradient="linear-gradient(160deg, #2b2b2b, #161616)"
              icon={<Globe size={20} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("browser")}
            />
            <AppIcon
              label="Notes"
              gradient="linear-gradient(160deg, #c9a961, #a9843f)"
              icon={<ClipboardList size={20} className="text-base" strokeWidth={2} />}
              onClick={() => setOpenApp("notes")}
            />
            <AppIcon
              label="Archive"
              gradient="linear-gradient(160deg, #2e3a3d, #1a2224)"
              icon={<ClipboardList size={20} className="text-ink" strokeWidth={2} />}
              onClick={() => setOpenApp("tasks")}
            />
            <AppIcon
              label="???"
              gradient="radial-gradient(circle at 35% 30%, #1f1a12, #0a0806)"
              glow
              icon={<Lock size={20} className="text-gold" strokeWidth={2} />}
              onClick={() => setOpenApp("vault")}
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

      {openApp === "messages" && <MessagesApp playerId={playerId} onBack={closeApp} />}
      {openApp === "vault" && <VaultApp onBack={closeApp} />}
      {openApp === "tasks" && <TasksApp onBack={closeApp} />}
      {["calls", "calculator", "browser", "notes", "settings"].includes(openApp) && (
        <PlaceholderApp onBack={closeApp} />
      )}
    </DeviceFrame>
  );
}
