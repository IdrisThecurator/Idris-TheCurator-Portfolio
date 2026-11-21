"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Mode = "system" | "light" | "dark";

// Swatches exactly as in the Figma "Page Color" row; the first is the default.
export const ACCENTS = [
  "#5b727f",
  "#ff383c",
  "#ff8d28",
  "#34c759",
  "#003ae8",
  "#cb30e0",
  "#00636a",
  "#ac7f5e",
] as const;

const STORAGE_KEY = "itc-theme";

type ThemeState = { accent: string; mode: Mode };
type ThemeContextValue = ThemeState & {
  setAccent: (accent: string) => void;
  setMode: (mode: Mode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Runs before hydration so the saved theme never flashes. */
export const themeInitScript = `(function(){try{var s=JSON.parse(localStorage.getItem("${STORAGE_KEY}")||"{}");var r=document.documentElement;if(s.accent)r.style.setProperty("--accent",s.accent);var m=s.mode||"system";var d=m==="dark"||(m==="system"&&matchMedia("(prefers-color-scheme: dark)").matches);r.dataset.mode=d?"dark":"light";}catch(e){}})();`;

function apply({ accent, mode }: ThemeState) {
  const root = document.documentElement;
  root.style.setProperty("--accent", accent);
  const dark = mode === "dark" || (mode === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  root.dataset.mode = dark ? "dark" : "light";
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ThemeState>({ accent: ACCENTS[0], mode: "system" });

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as Partial<ThemeState>;
      setState((prev) => ({ accent: saved.accent ?? prev.accent, mode: saved.mode ?? prev.mode }));
    } catch {
      /* ignore corrupted storage */
    }
  }, []);

  useEffect(() => {
    apply(state);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable */
    }
    if (state.mode !== "system") return;
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply(state);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [state]);

  const setAccent = useCallback((accent: string) => setState((s) => ({ ...s, accent })), []);
  const setMode = useCallback((mode: Mode) => setState((s) => ({ ...s, mode })), []);
  const value = useMemo(() => ({ ...state, setAccent, setMode }), [state, setAccent, setMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
