import { useState, useRef } from "react";

/**
 * SwipeCarousel — horizontal drag/swipe carousel.
 * Children are rendered in order; only "unlocked" slides are included by the parent,
 * so the sequence naturally grows as the detective acquires devices.
 *
 * Usage:
 * <SwipeCarousel activeIndex={i} onIndexChange={setI}>
 *   <Desk />
 *   <DetectivePhone />
 *   <LaylasPhone />
 *   <LaylasLaptop />
 * </SwipeCarousel>
 */
export default function SwipeCarousel({ children, activeIndex, onIndexChange }) {
  const slides = Array.isArray(children) ? children : [children];
  const containerRef = useRef(null);
  const startX = useRef(0);
  const currentDrag = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  const clampIndex = (i) => Math.max(0, Math.min(slides.length - 1, i));

  const handleStart = (clientX) => {
    startX.current = clientX;
    currentDrag.current = 0;
    setDragging(true);
  };

  const handleMove = (clientX) => {
    if (!dragging) return;
    const delta = clientX - startX.current;
    currentDrag.current = delta;
    setDragOffset(delta);
  };

  const handleEnd = () => {
    if (!dragging) return;
    setDragging(false);
    const threshold = 60; // px needed to trigger a slide change
    if (currentDrag.current < -threshold) {
      onIndexChange(clampIndex(activeIndex + 1));
    } else if (currentDrag.current > threshold) {
      onIndexChange(clampIndex(activeIndex - 1));
    }
    setDragOffset(0);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden touch-none select-none"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div
        className="flex h-full"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(calc(${-activeIndex * (100 / slides.length)}% + ${dragOffset}px))`,
          transition: dragging ? "none" : "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="h-full flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}
