import { useState } from "react";
import SwipeCarousel from "./SwipeCarousel";
import CaseBoard from "./CaseBoard";
import DetectivePhone from "../devices/DetectivePhone";
import LaylasPhone from "../devices/LaylasPhone";
import LaylasLaptop from "../devices/LaylasLaptop";

/**
 * The Desk is slide 0. Additional devices appear as slides to the right
 * only once the detective has acquired them (ownedDevices flags below).
 * For now these flags are local state — wire them to Firestore progress
 * (hasPhone / hasLaptop from gameData.js) once that's ready.
 */
export default function DeskScene({ playerId }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [boardOpen, setBoardOpen] = useState(false);

  // TODO: replace with real progress flags from getPlayerProgress(playerId)
  const ownedDevices = {
    detectivePhone: true, // detective always has his own phone
    laylasPhone: true, // set true once client hands it over (end of Ep 1)
    laylasLaptop: true, // set true once client hands it over (start of Ep 3)
  };

  const slides = [
    <DeskSlide key="desk" onOpenBoard={() => setBoardOpen(true)} ownedDevices={ownedDevices} />,
  ];
  if (ownedDevices.detectivePhone) {
    slides.push(<DetectivePhone key="detective" playerId={playerId} onExit={() => setActiveIndex(0)} />);
  }
  if (ownedDevices.laylasPhone) {
    slides.push(<LaylasPhone key="layla-phone" playerId={playerId} onExit={() => setActiveIndex(0)} />);
  }
  if (ownedDevices.laylasLaptop) {
    slides.push(<LaylasLaptop key="laptop" onExit={() => setActiveIndex(0)} />);
  }

  if (boardOpen) return <CaseBoard onBack={() => setBoardOpen(false)} />;

  return (
    <div className="min-h-screen w-full bg-[#05070a]">
      <SwipeCarousel activeIndex={activeIndex} onIndexChange={setActiveIndex}>
        {slides}
      </SwipeCarousel>
    </div>
  );
}

function DeskSlide({ onOpenBoard, ownedDevices }) {
  const deviceCount = Object.values(ownedDevices).filter(Boolean).length;
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-10">
      <p className="text-[12px] tracking-[0.2em] text-inkfaint uppercase mb-10">The Desk</p>

      <button
        onClick={onOpenBoard}
        className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#12100c] border border-[#241f18] w-40 mb-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold active:bg-[#1a1712]"
      >
        <span className="text-[13px] text-gold font-medium">Case board</span>
        <span className="text-[11px] text-inkfaint text-center">Photos, connections, open questions</span>
      </button>

      <p className="text-[12px] text-inkfaint text-center max-w-[260px]">
        {deviceCount > 0
          ? "Swipe right to check your phone."
          : "Nothing else on the desk yet."}
      </p>
    </div>
  );
}
