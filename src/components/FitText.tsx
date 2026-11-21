"use client";

import { useEffect, useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Mode = { kind: "nowrap" } | { kind: "lines"; lines: number };

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Design size. The text never grows past this. */
  maxPx: number;
  /** Smallest size we shrink to before giving up. */
  minPx: number;
  mode: Mode;
  ariaHidden?: boolean;
};

/**
 * Shrinks text just enough to honour a line limit in any language.
 * - nowrap: every child line stays on one line (headline = two lines max).
 * - lines: the paragraph never runs past N lines (subtext = three lines max).
 * If even minPx is not enough (very narrow phones), nowrap lines are allowed to wrap.
 */
export default function FitText({ as: Tag = "p", className, children, maxPx, minPx, mode, ariaHidden }: Props) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      el.removeAttribute("data-wrap");
      const ok = () =>
        mode.kind === "nowrap"
          ? el.scrollWidth <= el.clientWidth + 0.5
          : el.scrollHeight <= parseFloat(getComputedStyle(el).lineHeight) * mode.lines + 1;

      let size = maxPx;
      el.style.fontSize = `${size}px`;
      while (!ok() && size > minPx) {
        size -= 0.5;
        el.style.fontSize = `${size}px`;
      }
      if (mode.kind === "nowrap" && !ok()) el.dataset.wrap = "true";
    };

    run();
    const ro = new ResizeObserver(run);
    ro.observe(el.parentElement ?? el);
    document.fonts?.ready.then(run);
    return () => ro.disconnect();
  });

  return (
    <Tag ref={ref} aria-hidden={ariaHidden || undefined} className={`${mode.kind === "nowrap" ? "fit-nowrap " : ""}${className ?? ""}`} style={{ fontSize: maxPx }}>
      {children}
    </Tag>
  );
}
