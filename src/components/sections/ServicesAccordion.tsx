"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";

export type ServiceItem = { name: string; description: string };

export default function ServicesAccordion({ items }: { items: ServiceItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  return (
    <ul className="w-full lg:w-[750px]">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-${i}`;
        return (
          <li key={item.name}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group relative block h-[76px] w-full text-left"
              >
                <span aria-hidden style={{ filter: "url(#rough-edge)" }} className="absolute inset-0 rounded-[20px] border-t-2 border-muted" />
                <span className="absolute inset-x-5 top-[13px] h-[50px]">
                  <span className="absolute left-0 top-[7px] text-[20px] leading-normal tracking-[-0.4px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="absolute left-[41px] top-0 whitespace-nowrap text-[clamp(1.5rem,2.9vw,2.625rem)] font-medium leading-normal tracking-[-0.02em] text-muted transition-transform duration-300 group-hover:translate-x-1">
                    {item.name}
                  </span>
                  <Plus aria-hidden className={`absolute right-0 top-0 size-8 text-muted transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} strokeWidth={1.6} />
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" inert={!isOpen} className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="max-w-[560px] pb-5 pl-[61px] pr-5 pt-1 text-[16px] leading-normal tracking-[-0.32px] text-body">{item.description}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
