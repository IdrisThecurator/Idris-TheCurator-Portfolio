"use client";

import {
  Award, BadgeDollarSign, BriefcaseBusiness, CalendarRange, ChartNoAxesColumn, Headset,
  House, Image as ImageIcon, MessageSquareText, PenTool, Shapes, User, type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Fragment, useEffect, useState } from "react";

// Same order as the Figma dock; the divider sits after the ninth icon.
const ITEMS: { id: string; icon: LucideIcon }[] = [
  { id: "home", icon: House },
  { id: "about", icon: User },
  { id: "certifications", icon: Award },
  { id: "story", icon: CalendarRange },
  { id: "roles", icon: BriefcaseBusiness },
  { id: "services", icon: PenTool },
  { id: "projects", icon: ImageIcon },
  { id: "partners", icon: Shapes },
  { id: "successStory", icon: ChartNoAxesColumn },
  { id: "testimonials", icon: MessageSquareText },
  { id: "pricing", icon: BadgeDollarSign },
  { id: "faq", icon: Headset },
];
const DIVIDER_AFTER = 9;

export default function Dock() {
  const t = useTranslations("dock");
  const [active, setActive] = useState("home");

  useEffect(() => {
    const els = ITEMS.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="fixed bottom-10 left-1/2 z-40 -translate-x-1/2">
      {/* No scrolling: on narrow screens the icons simply shrink to fit. */}
      <ul className="shadow-panel flex w-[min(calc(100vw-2rem),644px)] items-center gap-1 rounded-[14px] border border-line bg-card p-2 sm:gap-[10px]">
        {ITEMS.map(({ id, icon: Icon }, i) => (
          <Fragment key={id}>
            <li className="min-w-0 flex-1">
              <a
                href={`#${id}`}
                aria-label={t(id)}
                title={t(id)}
                aria-current={active === id ? "true" : undefined}
                className={`mx-auto grid h-[42px] w-full max-w-[42px] place-items-center transition-colors ${
                  active === id ? "rounded-[10px] bg-accent text-white" : "rounded-[6px] text-muted hover:bg-line/60"
                }`}
              >
                <Icon className="size-5 sm:size-6" strokeWidth={1.5} />
              </a>
            </li>
            {i + 1 === DIVIDER_AFTER && <li aria-hidden className="h-[42px] w-px shrink-0 bg-line" />}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
