"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";

const ARROW =
  "relative grid size-11 place-items-center rounded-full text-muted transition-transform duration-200 hover:scale-110 active:scale-95";

export default function TestimonialSlider({ items, labels }: { items: readonly Testimonial[]; labels: { prev: string; next: string } }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const total = items.length;
  const item = items[index];
  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  const fade = reduce
    ? {}
    : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.28 } };

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[60px]">
      {/* Person card */}
      <div className="relative h-[350px] w-full max-w-[305px] shrink-0 self-center lg:self-auto">
        <span aria-hidden style={{ filter: "url(#rough-edge)" }} className="absolute inset-0 rounded-2xl border-[3px] border-body bg-[#222]" />
        <div className="absolute inset-[3px] overflow-hidden rounded-[13px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={item.image}
              {...(reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.35 } })}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: item.image ? `url(${item.image})` : undefined }}
            />
          </AnimatePresence>
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),transparent_30%,transparent_55%,rgba(0,0,0,0.6))]" />
        </div>
        <div className="absolute inset-[25px] flex flex-col justify-between text-white">
          <p className="font-semibold leading-normal tracking-[-1px]" aria-label={`${index + 1} / ${total}`}>
            <span className="text-[38px]">{index + 1}/</span>
            <span className="text-[19px]">{total}</span>
          </p>
          <div className="flex flex-col gap-[3px] leading-normal">
            <p className="text-[25px] font-semibold tracking-[-1px]">{item.name}</p>
            <p className="text-[19px] font-medium tracking-[-0.38px] text-[#b0b0b0]">{item.role}</p>
          </div>
        </div>
      </div>

      {/* Quote and arrows */}
      <div className="flex min-w-0 flex-1 flex-col gap-5">
        <div className="relative min-h-[224px] w-full max-w-[956px] px-0 py-[50px] sm:px-[44px]">
          <span aria-hidden className="absolute left-0 top-0 font-serif text-[82px] leading-none text-muted">“</span>
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              {...fade}
              aria-live="polite"
              className="max-w-[874px] text-[clamp(1.25rem,1.94vw,1.75rem)] font-semibold leading-normal tracking-[-0.56px] text-ink"
            >
              {item.quote.map((part) => (
                <span key={part.text} className={part.accent ? "text-muted" : undefined}>
                  {part.text}
                </span>
              ))}
            </motion.p>
          </AnimatePresence>
          <span aria-hidden className="absolute bottom-0 right-0 font-serif text-[82px] leading-[0.6] text-muted">”</span>
        </div>

        <div className="flex items-center gap-5 sm:px-10">
          <button type="button" onClick={() => go(-1)} aria-label={labels.prev} className={ARROW}>
            <span aria-hidden style={{ filter: "url(#rough-edge)" }} className="absolute inset-0 rounded-full border-2 border-body bg-card" />
            <ChevronLeft className="relative size-5" strokeWidth={2} />
          </button>
          <button type="button" onClick={() => go(1)} aria-label={labels.next} className={ARROW}>
            <span aria-hidden style={{ filter: "url(#rough-edge)" }} className="absolute inset-0 rounded-full border-2 border-body bg-card" />
            <ChevronRight className="relative size-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
