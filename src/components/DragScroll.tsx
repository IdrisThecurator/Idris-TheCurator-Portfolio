"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/** Horizontal strip with no scrollbar: touch and trackpads scroll natively, mouse users can drag. */
export default function DragScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const strip = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);

  const down = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !strip.current) return;
    drag.current = { x: e.clientX, left: strip.current.scrollLeft };
  };
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !strip.current) return;
    strip.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const up = () => (drag.current = null);

  return (
    <div
      ref={strip}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerLeave={up}
      className={`cursor-grab overflow-x-auto active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  );
}
