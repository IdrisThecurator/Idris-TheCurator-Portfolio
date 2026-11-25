import { useTranslations } from "next-intl";
import { Children } from "react";
import { PLANS } from "@/data/pricing";
import PricingCards from "./PricingCards";

export default function Pricing() {
  const t = useTranslations("pricing");

  const title = Children.toArray(
    t.rich("title", {
      br: () => <br />,
      p: (c) => <span className="text-[#a245ff]">{c}</span>,
      tag: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key="tag" src="/pricing/tag.svg" alt="" aria-hidden className="mx-[0.04em] inline-block size-[1.05em] align-[-0.12em]" />
      ),
      people: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key="people" src="/story/avatars.png" alt="" aria-hidden className="mx-[0.06em] inline-block h-[0.8em] w-[1.95em] align-[-0.06em]" />
      ),
    }),
  );

  const labels = { description: t("description"), view: t("view"), book: t("book"), open: t("open") };

  return (
    <section id="pricing" className="px-6 pb-[150px] lg:px-10">
      <div className="relative flex flex-col items-center gap-[50px]">
        {/* Floating art around the heading (desktop only) */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 hidden h-[213px] lg:block">
          {/* eslint-disable @next/next/no-img-element */}
          <img src="/pricing/art-1.png" alt="" className="absolute left-0 top-0 size-20 rounded-full object-cover" />
          <img src="/pricing/stamp.svg" alt="" className="absolute left-[82px] top-[129px] size-[98.37px]" />
          <img src="/pricing/art-2.png" alt="" className="absolute right-0 top-0 size-20 rounded-full object-cover" />
          <img src="/pricing/art-3.png" alt="" className="absolute right-[87.82px] top-[114.81px] size-20 rounded-full object-cover" />
          {/* eslint-enable @next/next/no-img-element */}
        </div>

        <header className="relative z-10 flex flex-col items-center gap-[10px] text-center">
          <p className="flex items-center gap-[6px] text-[16px] font-bold tracking-[-0.32px] text-muted">
            <span aria-hidden className="size-[10px] rounded-full bg-muted" />
            {t("tag")}
          </p>
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-[clamp(2rem,3.61vw,3.25rem)] font-semibold leading-[1.19] tracking-[-0.02em] text-ink">{title}</h2>
            <p className="max-w-[576px] text-[16px] leading-normal tracking-[-0.32px] text-body">{t("intro")}</p>
          </div>
        </header>

        <PricingCards plans={PLANS} labels={labels} />
      </div>
    </section>
  );
}
