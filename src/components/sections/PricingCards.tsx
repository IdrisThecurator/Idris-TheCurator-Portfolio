"use client";

import { ArrowUpRight, EyeOff } from "lucide-react";
import { useState } from "react";
import DragScroll from "@/components/DragScroll";
import type { Plan } from "@/data/pricing";

type Labels = { description: string; view: string; book: string; open: string };

/** Ticket divider: dashed line with a notch cut into each edge of the card. */
function Divider() {
  return (
    <div aria-hidden className="flex w-full items-center">
      <span className="-ml-[10px] size-5 shrink-0 rounded-full bg-bg" />
      <span className="h-0 flex-1 border-t border-dashed border-line" />
      <span className="-mr-[10px] size-5 shrink-0 rounded-full bg-bg" />
    </div>
  );
}

export default function PricingCards({ plans, labels }: { plans: readonly Plan[]; labels: Labels }) {
  const [open, setOpen] = useState(0);

  return (
    <DragScroll className="w-full">
      <ul className="flex w-max items-stretch gap-5 px-3 py-1">
        {plans.map((plan, i) => {
          const isOpen = open === i;
          return (
            <li
              key={plan.name}
              onClick={() => setOpen(i)}
              className={`relative flex h-[732px] shrink-0 select-none flex-col rounded-[10px] border border-line bg-[color-mix(in_srgb,var(--ink)_4%,var(--bg))] transition-[width,transform] duration-500 ease-out ${
                isOpen ? "w-[min(730px,calc(100vw_-_3rem))]" : "w-[230px] cursor-pointer hover:-translate-y-1"
              }`}
            >
              {/* Name and summary */}
              <div className="flex h-[168px] flex-col gap-[10px] overflow-hidden px-10 pb-[30px] pt-10">
                <h3
                  className={`font-bold leading-[1.2] hyphens-auto break-words transition-all duration-500 ${
                    isOpen ? "text-[42px] tracking-[-1.68px] text-ink" : "text-[32px] tracking-[-1.28px] text-body"
                  }`}
                >
                  {plan.name}
                </h3>
                {isOpen && <p className="text-[16px] font-medium leading-normal tracking-[-0.32px] text-body">{plan.summary}</p>}
              </div>

              {/* Price */}
              <div className="flex h-[110px] flex-col justify-between">
                <Divider />
                <p className={`px-10 font-bold leading-normal ${isOpen ? "text-[42px] tracking-[-1.68px] text-ink" : "text-[32px] tracking-[-1.28px] text-body"}`}>
                  {plan.price}
                </p>
                <Divider />
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col justify-center gap-[14px] overflow-hidden px-10 pb-[30px] pt-5">
                {isOpen ? (
                  <>
                    <p className="text-[24px] font-bold leading-normal tracking-[-0.96px] text-ink">{labels.description}</p>
                    <ul className="flex flex-col gap-[10px] text-[16px] font-medium leading-normal tracking-[-0.32px] text-body">
                      {plan.includes.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpen(i)}
                      aria-label={`${labels.open} ${plan.name}`}
                      className="text-left text-[24px] font-bold leading-normal tracking-[-0.96px] text-body"
                    >
                      {labels.view}
                    </button>
                    <EyeOff aria-hidden className="size-[52px] text-body" strokeWidth={1.5} />
                  </>
                )}
              </div>

              {/* Button */}
              <div className="flex flex-col gap-5 pb-10">
                <Divider />
                <div className="px-10">
                  <a
                    href="#contact"
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-[51px] w-full items-center justify-center gap-[10px] whitespace-nowrap rounded-full bg-accent px-5 py-3 text-[18px] font-medium leading-normal text-white shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[4px_8px_16px_rgba(0,0,0,0.18)] active:translate-y-0 active:scale-95"
                  >
                    {labels.book}
                    {isOpen && <ArrowUpRight className="size-5" strokeWidth={1.8} />}
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </DragScroll>
  );
}
