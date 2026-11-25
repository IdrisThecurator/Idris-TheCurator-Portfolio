"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { ImpactRow } from "@/data/impacts";

type Labels = { project: string; impacts: string; metrics: string; timeframe: string; expand: string; collapse: string };

const GRID = "lg:grid lg:grid-cols-[minmax(110px,300px)_minmax(0,284px)_minmax(0,284px)_auto_24px] lg:items-start lg:justify-between lg:gap-4";
const PILL = "rounded-full border border-line bg-card px-4 py-[6px] text-[14px] font-medium leading-[1.5] text-ink whitespace-nowrap";

function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-[10px]">
      {tags.map((tag) => (
        <li key={tag} className={PILL}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function ImpactTable({ rows, labels }: { rows: readonly ImpactRow[]; labels: Labels }) {
  const [open, setOpen] = useState<string | null>(rows[0]?.name ?? null);

  return (
    <div>
      {/* Column headings (desktop) */}
      <div aria-hidden className={`${GRID} hidden px-5 pb-5 text-[16px] font-semibold leading-normal tracking-[-0.32px] text-ink`}>
        <span>{labels.project}</span>
        <span>{labels.impacts}</span>
        <span>{labels.metrics}</span>
        <span>{labels.timeframe}</span>
        <span />
      </div>

      <ul>
        {rows.map((row) => {
          const isOpen = open === row.name;
          const limit = isOpen ? undefined : 3;
          return (
            <li
              key={row.name}
              onClick={() => setOpen(isOpen ? null : row.name)}
              className="relative cursor-pointer"
            >
              <span aria-hidden style={{ filter: "url(#rough-edge)" }} className="absolute inset-0 rounded-[20px] border-t-2 border-body" />
              <div className={`${GRID} relative flex flex-col gap-4 px-5 pb-5 pt-5`}>
                <div className="flex items-start justify-between lg:block">
                  <p style={{ color: row.color }} className="text-[18px] font-medium leading-normal tracking-[-0.36px]">
                    {row.name}
                  </p>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? labels.collapse : labels.expand}: ${row.name}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(isOpen ? null : row.name);
                    }}
                    className="text-muted transition-transform hover:scale-110 lg:hidden"
                  >
                    {isOpen ? <Minus className="size-6" strokeWidth={1.8} /> : <Plus className="size-6" strokeWidth={1.8} />}
                  </button>
                </div>
                <div>
                  <p className="mb-2 text-[14px] font-semibold text-muted lg:hidden">{labels.impacts}</p>
                  <Tags tags={limit ? row.impacts.slice(0, limit) : row.impacts} />
                </div>
                <div>
                  <p className="mb-2 text-[14px] font-semibold text-muted lg:hidden">{labels.metrics}</p>
                  <Tags tags={limit ? row.metrics.slice(0, limit) : row.metrics} />
                </div>
                <div>
                  <p className="mb-2 text-[14px] font-semibold text-muted lg:hidden">{labels.timeframe}</p>
                  <span className={`${PILL} inline-block`}>{row.timeframe}</span>
                </div>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? labels.collapse : labels.expand}: ${row.name}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(isOpen ? null : row.name);
                  }}
                  className="hidden text-muted transition-transform hover:scale-110 lg:block"
                >
                  {isOpen ? <Minus className="size-6" strokeWidth={1.8} /> : <Plus className="size-6" strokeWidth={1.8} />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
