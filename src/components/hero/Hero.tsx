"use client";

import { ArrowUpRight, BriefcaseBusiness, FileText, FolderKanban, Image as ImageIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import type { FormEvent, ReactNode } from "react";
import FitText from "@/components/FitText";
import { Panel, rowLink } from "@/components/Panel";
import SiteCustomizer from "./SiteCustomizer";

const STATS = [
  ["certifications", "11", "#certifications"],
  ["experience", "4+", "#roles"],
  ["tools", "10", "#about"],
  ["brands", "15", "#partners"],
  ["projects", "18", "#projects"],
] as const;

const DOCS = [
  ["resume", FileText, "#4f8df7", "#about"],
  ["cases", BriefcaseBusiness, "#e8590c", "#projects"],
  ["catalogues", FolderKanban, "#2aa198", "#projects"],
  ["gallery", ImageIcon, "#f08c00", "#projects"],
] as const;

const NAV = ["home", "projects", "playground", "contact"] as const;

function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="size-8 shrink-0 text-ink" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
      <rect x="4" y="4" width="9" height="9" rx="2.5" />
      <rect x="19" y="4" width="9" height="9" rx="2.5" />
      <rect x="4" y="19" width="9" height="9" rx="2.5" />
      <circle cx="23.5" cy="23.5" r="4.5" />
    </svg>
  );
}

/** The construction emoji that stands in for one letter of the second headline line. */
function Construction({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block h-[0.72em] w-[0.95em] align-[-0.06em]">
      <span className="sr-only">{children}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero/construction.svg"
        alt=""
        aria-hidden
        className="absolute left-1/2 top-1/2 size-[0.72em] max-w-none -translate-x-1/2 -translate-y-1/2"
      />
    </span>
  );
}

/** The two mountain cards that sit behind the first headline line (desktop only). */
function HeroCards() {
  const card = "rounded-[7.5px] border-[1.5px] border-[#daf2ff] bg-[#ccc] object-cover";
  return (
    <div aria-hidden className="pointer-events-none absolute left-[calc(50%-111px)] top-[-1px] z-0 hidden h-20 w-[280px] lg:block">
      <div className="absolute left-[1.73px] top-0 grid h-[81.66px] w-[142.4px] place-items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero/mountain-back.png" alt="" className={`h-[70px] w-[136.82px] rotate-[5deg] ${card}`} />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero/mountain-front.png" alt="" className={`absolute left-3 top-[9px] h-[70px] w-[268px] ${card}`} />
    </div>
  );
}

export default function Hero() {
  const t = useTranslations();
  const reduce = useReducedMotion();

  // One orchestrated moment: the headline lines rise in. Everything else is still.
  const rise = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
        };

  const line2 = t.rich("hero.line2", { icon: (c) => <Construction>{c}</Construction> });
  const headlineLines = (overlay: boolean) => (
    <>
      <motion.span {...rise(1)} className={`block ${overlay ? "" : "text-accent"}`}>
        {t("hero.line1")}
      </motion.span>
      <motion.span {...rise(2)} className="block">
        {line2}
      </motion.span>
    </>
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to your contact/email service.
  }

  return (
    <section
      id="home"
      className="relative flex flex-col gap-6 px-6 pb-36 pt-6 lg:block lg:h-[max(765px,100dvh)] lg:px-0 lg:pb-0 lg:pt-0"
    >
      {/* Top bar: pinned 40px from each edge, as in the design */}
      <header className="flex items-center justify-between gap-4 lg:absolute lg:inset-x-10 lg:top-10">
        <div className="flex items-center gap-[10px]">
          <LogoMark />
          <a href="#home" className="text-[20px] font-extrabold tracking-[-0.02em] text-ink sm:text-[24px]">
            {t("brand")}
          </a>
        </div>
        <nav aria-label="Primary" className="shadow-panel hidden rounded-[8px] border border-line bg-card p-1 md:block">
          <ul className="flex gap-[10px] text-[14px] font-medium tracking-[-0.28px]">
            {NAV.map((key, i) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className={`block rounded-[6px] px-[10px] py-1 transition-colors ${i === 0 ? "bg-accent text-white hover:brightness-110" : "text-muted hover:bg-line/50 hover:text-ink"}`}
                >
                  {t(`nav.${key}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Currently exploring */}
      <div className="flex items-center gap-[17px] lg:absolute lg:left-10 lg:top-[113px] lg:w-[326px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero/circle-text.svg" alt="" aria-hidden width={50} height={50} className="spin-slow size-[50px] shrink-0" />
        <p className="text-[14px] font-medium tracking-[-0.28px] text-muted">{t("status")}</p>
      </div>

      <SiteCustomizer className="w-full lg:absolute lg:right-10 lg:top-[98px] lg:w-[240px]" />

      {/* Centre column */}
      <div className="flex w-full flex-col items-center gap-10 text-center lg:absolute lg:left-1/2 lg:top-[150px] lg:w-[min(1000px,calc(100vw-80px))] lg:-translate-x-1/2">
        <motion.span
          {...rise(0)}
          className="rounded-full bg-card/10 px-5 py-3 text-[14px] font-bold leading-normal text-ink shadow-[4px_4px_20px_rgba(0,0,0,0.1)]"
        >
          {t("hero.badge")}
        </motion.span>

        <div className="flex w-full flex-col items-center gap-[14px]">
          <div className="relative w-full">
            <HeroCards />
            <FitText
              as="h1"
              maxPx={70}
              minPx={30}
              mode={{ kind: "nowrap" }}
              className="relative z-10 w-full font-semibold leading-[1.086] tracking-[-2px] text-ink"
            >
              {headlineLines(false)}
            </FitText>
            {/* Same headline in white, clipped to the photo card, so letters over the photo read white */}
            <FitText
              as="div"
              ariaHidden
              maxPx={70}
              minPx={30}
              mode={{ kind: "nowrap" }}
              className="pointer-events-none absolute inset-0 z-20 hidden w-full font-semibold leading-[1.086] tracking-[-2px] text-white [clip-path:inset(0_calc(50%_-_169px)_calc(100%_-_79px)_calc(50%_-_111px))] lg:block"
            >
              {headlineLines(true)}
            </FitText>
          </div>
          <FitText
            as="p"
            maxPx={16}
            minPx={13}
            mode={{ kind: "lines", lines: 3 }}
            className="w-full max-w-[680px] font-medium leading-[1.2] tracking-[-0.32px] text-body"
          >
            {t.rich("hero.intro", {
              tula: (c) => <b className="font-bold text-[#0088ff]">{c}</b>,
              kasoowa: (c) => <b className="font-bold text-[#34c759]">{c}</b>,
              ease: (c) => <b className="font-bold text-[#ff8d28]">{c}</b>,
              ulodge: (c) => <b className="font-bold text-muted">{c}</b>,
            })}
          </FitText>
        </div>

        <form onSubmit={onSubmit} className="flex w-full max-w-[500px] items-center gap-[10px]">
          <input
            type="text"
            required
            placeholder={t("hero.placeholder")}
            aria-label={t("hero.placeholder")}
            className="shadow-field h-12 min-w-0 flex-1 rounded-full border border-line bg-card px-5 text-[14px] font-medium tracking-[-0.28px] text-ink placeholder:text-faint"
          />
          <button
            type="submit"
            className="flex shrink-0 items-center justify-center gap-[6px] rounded-full bg-accent px-6 py-[10px] text-[18px] font-medium leading-normal text-white shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[4px_8px_16px_rgba(0,0,0,0.18)] active:translate-y-0 active:scale-95"
          >
            {t("hero.send")}
            <ArrowUpRight className="size-6" strokeWidth={1.8} />
          </button>
        </form>
      </div>

      {/* Bottom cards: bottoms line up just above the dock */}
      <Panel title={t("about.title")} bold className="w-full lg:absolute lg:bottom-[97px] lg:left-10 lg:w-[296px]">
        {STATS.map(([key, value, href]) => (
          <a key={key} href={href} className={`${rowLink} justify-between text-[12px] font-semibold tracking-[-0.24px] text-muted`}>
            <span>{t(`about.${key}`)}</span>
            <span>{value}</span>
          </a>
        ))}
      </Panel>

      <Panel title={t("docs.title")} className="w-full lg:absolute lg:bottom-[97px] lg:right-10 lg:w-[240px]">
        {DOCS.map(([key, Icon, color, href]) => (
          <a key={key} href={href} className={`${rowLink} gap-1 text-[12px] font-medium tracking-[-0.24px] text-muted`}>
            {t(`docs.${key}`)}
            <Icon className="size-4" style={{ color }} strokeWidth={1.8} />
          </a>
        ))}
      </Panel>
    </section>
  );
}
