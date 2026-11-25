import { useTranslations } from "next-intl";
import { Children } from "react";
import DragScroll from "@/components/DragScroll";
import { PARTNERS } from "@/data/partners";

export default function Partners() {
  const t = useTranslations("partners");

  const title = Children.toArray(
    t.rich("title", {
      worker: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key="worker" src="/about/worker.svg" alt="" aria-hidden className="mx-[0.06em] inline-block size-[0.92em] align-[-0.12em]" />
      ),
    }),
  );

  return (
    <section id="partners" className="px-6 pb-[150px] lg:px-10">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <p className="flex shrink-0 items-center gap-[6px] text-[16px] font-bold tracking-[-0.32px] text-muted">
            <span aria-hidden className="size-[10px] rounded-full bg-muted" />
            {t("tag")}
          </p>
          <div className="flex flex-col gap-5 lg:w-[593px] lg:items-start">
            <h2 className="text-[clamp(2rem,3.61vw,3.25rem)] font-semibold leading-normal tracking-[-0.02em] text-ink">{title}</h2>
            <p className="text-[16px] leading-normal tracking-[-0.32px] text-body">{t("intro")}</p>
          </div>
        </div>

        {/* Brand cards: swipe, scroll or drag sideways. No scrollbar. */}
        <DragScroll className="-mx-1 px-1 py-1">
          <ul className="flex w-max gap-5">
            {PARTNERS.map((p) => (
              <li key={p.name} className="relative h-[460px] w-[min(440px,82vw)] shrink-0 select-none lg:w-[440px]">
                <span aria-hidden style={{ filter: "url(#rough-edge)" }} className="absolute inset-0 rounded-[10px] border-2 border-body bg-card" />
                <div className="absolute inset-x-5 inset-y-[21px] flex flex-col justify-between leading-normal">
                  <p className="text-[16px] font-medium tracking-[-0.32px] text-body">{p.description}</p>
                  <p className="text-[20px] font-bold tracking-[-0.4px] text-ink">{p.name}</p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {p.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.logo}
                    alt={p.name}
                    draggable={false}
                    style={{ width: p.w, height: p.h }}
                    className="absolute left-1/2 top-1/2 max-w-[80%] -translate-x-1/2 -translate-y-1/2 object-contain"
                  />
                ) : (
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold text-ink">
                    {p.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </DragScroll>
      </div>
    </section>
  );
}
