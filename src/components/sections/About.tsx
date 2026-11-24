"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Children, useRef, type PointerEvent } from "react";

const CARDS = [
  { key: "education", icon: "/about/school.svg", iconH: 32 },
  { key: "nationality", icon: "/about/location.svg", iconH: 48 },
  { key: "language", icon: "/about/language.svg", iconH: 48 },
  { key: "tool", icon: "/about/pen-tool.svg", iconH: 48 },
  { key: "hobby", icon: "/about/hobby.svg", iconH: 48 },
] as const;

const PILL_SHADOW = "shadow-[0_0_10px_rgba(0,0,0,0.1),20px_0_10px_-4px_rgba(0,0,0,0.08),0_20px_10px_-4px_rgba(0,0,0,0.08)]";

export default function About() {
  const t = useTranslations("aboutSection");
  const strip = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);

  // Mouse users can drag the cards sideways; touch and trackpads scroll natively. No scrollbar is shown.
  const down = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !strip.current) return;
    drag.current = { x: e.clientX, left: strip.current.scrollLeft };
  };
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !strip.current) return;
    strip.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const up = () => (drag.current = null);

  const title = Children.toArray(t.rich("title", {
    br: () => <br />,
    pill: () => (
      <span key="pill" className="relative mx-[0.04em] inline-block h-[1.15em] w-[2.7em] align-[-0.2em]">
        <span aria-hidden className={`absolute inset-0 rounded-full bg-card ${PILL_SHADOW}`} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/about/portrait.png" alt="" aria-hidden className="absolute bottom-0 left-1/2 h-[1.77em] w-[2.5em] -translate-x-1/2 rounded-[24px] object-cover" />
      </span>
    ),
    worker: () => (
      // eslint-disable-next-line @next/next/no-img-element
      <img key="worker" src="/about/worker.svg" alt="" aria-hidden className="mx-[0.1em] inline-block size-[0.92em] align-[-0.12em]" />
    ),
  }));

  return (
    <section id="about" className="px-6 pb-[150px] lg:px-10">

      <div className="flex min-w-0 flex-col gap-10">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-[clamp(2rem,3.61vw,3.25rem)] font-semibold leading-[1.19] tracking-[-0.02em] text-ink">{title}</h2>
            <p className="flex shrink-0 items-center gap-[6px] text-[16px] font-bold tracking-[-0.32px] text-muted">
              <span aria-hidden className="size-[10px] rounded-full bg-muted" />
              {t("tag")}
            </p>
          </div>

          <div
            ref={strip}
            onPointerDown={down}
            onPointerMove={move}
            onPointerUp={up}
            onPointerLeave={up}
            className="-mx-1 flex cursor-grab gap-5 overflow-x-auto px-1 py-1 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CARDS.map(({ key, icon, iconH }) => (
              <div key={key} className="relative h-[180px] w-[300px] shrink-0 select-none">
                <span aria-hidden style={{ filter: "url(#rough-edge)" }} className="absolute inset-0 rounded-[10px] border-2 border-body bg-card" />
                <div className="absolute left-5 top-[15px] flex h-[150px] w-[260px] flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <p className="text-[12px] font-bold tracking-[-0.24px] text-muted">{t(`cards.${key}.label`)}</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={icon} alt="" aria-hidden draggable={false} style={{ height: iconH }} className="w-auto" />
                  </div>
                  <div className="flex w-[193px] flex-col gap-[2px]">
                    <p className="text-[16px] font-bold tracking-[-0.32px] text-ink">{t(`cards.${key}.value`)}</p>
                    <p className="text-[14px] font-medium tracking-[-0.28px] text-body">{t(`cards.${key}.detail`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[671px] text-[16px] tracking-[-0.32px] text-body">{t("intro")}</p>
            <a
              href="/resume.pdf"
              download
              className="flex shrink-0 items-center justify-center gap-[10px] self-start rounded-full bg-accent px-5 py-3 text-[18px] font-medium leading-normal text-white shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[4px_8px_16px_rgba(0,0,0,0.18)] active:translate-y-0 active:scale-95 md:self-auto"
            >
              {t("download")}
              <ArrowUpRight className="size-6" strokeWidth={1.8} />
            </a>
          </div>
      </div>
    </section>
  );
}
