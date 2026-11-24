import { useTranslations } from "next-intl";
import ServicesAccordion, { type ServiceItem } from "./ServicesAccordion";

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section id="services" className="px-6 pb-[150px] lg:px-10">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-[clamp(2rem,3.61vw,3.25rem)] font-semibold leading-normal tracking-[-0.02em] text-ink">{t("title")}</h2>
            <p className="max-w-[576px] text-[16px] leading-normal tracking-[-0.32px] text-body">{t("intro")}</p>
          </div>
          <p className="flex shrink-0 items-center gap-[6px] text-[16px] font-bold tracking-[-0.32px] text-muted">
            <span aria-hidden className="size-[10px] rounded-full bg-muted" />
            {t("tag")}
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <ServicesAccordion items={items} />

          <div className="relative aspect-[520/640] w-full max-w-[520px] shrink-0 self-center lg:w-[520px] lg:self-auto">
            <span aria-hidden style={{ filter: "url(#rough-edge)" }} className="absolute inset-0 rounded-[10px] border-2 border-muted bg-card" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/services/illustration.svg"
              alt=""
              aria-hidden
              className="absolute left-[11.54%] top-[18.44%] h-[63.02%] w-[76.92%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
