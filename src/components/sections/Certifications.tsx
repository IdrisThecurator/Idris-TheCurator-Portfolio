import { useLocale, useTranslations } from "next-intl";
import { CERTIFICATIONS } from "@/data/certifications";

function formatDate(iso: string, locale: string) {
  const d = new Date(`${iso}-01T00:00:00Z`);
  if (locale === "en") {
    const month = new Intl.DateTimeFormat("en", { month: "long", timeZone: "UTC" }).format(d);
    return `${month}, ${d.getUTCFullYear()}.`; // "May, 2023." as in the design
  }
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric", timeZone: "UTC" }).format(d);
}

function Row({ name, date }: { name: string; date: string }) {
  return (
    <div className="relative h-[100px] w-full shrink-0">
      <span aria-hidden style={{ filter: "url(#rough-edge)" }} className="absolute inset-0 rounded-[10px] border-2 border-muted bg-[color-mix(in_srgb,var(--ink)_4%,var(--bg))]" />
      <div className="absolute left-5 top-6 flex flex-col gap-[10px] leading-normal">
        <p className="text-[20px] font-bold tracking-[-0.4px] text-ink">{name}</p>
        <p className="text-[16px] font-bold tracking-[-0.32px] text-muted">{date}</p>
      </div>
    </div>
  );
}

function Group({ locale, hidden = false }: { locale: string; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex flex-col gap-5 pb-5">
      {CERTIFICATIONS.map((c) => (
        <li key={c.name}>
          <Row name={c.name} date={formatDate(c.date, locale)} />
        </li>
      ))}
    </ul>
  );
}

export default function Certifications() {
  const t = useTranslations("certifications");
  const locale = useLocale();

  return (
    <section id="certifications" className="px-6 pb-[150px] lg:px-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-[10px]">
          <p className="flex items-center gap-[6px] text-[16px] font-bold tracking-[-0.32px] text-muted">
            <span aria-hidden className="size-[10px] rounded-full bg-muted" />
            {t("tag")}
          </p>
          <h2 className="text-[clamp(2rem,3.61vw,3.25rem)] font-semibold leading-normal tracking-[-0.02em] text-ink">{t("title")}</h2>
          <p className="max-w-[576px] text-[16px] tracking-[-0.32px] text-body">{t("intro")}</p>
        </div>

        {/* 600 x 300 window: the list scrolls up inside it and fades out at the top and bottom */}
        <div className="relative h-[300px] w-full shrink-0 overflow-hidden bg-[color-mix(in_srgb,var(--ink)_4%,var(--bg))] [--surface:color-mix(in_srgb,var(--ink)_4%,var(--bg))] lg:w-[600px]">
          <div className="marquee-up px-[2px] pt-[2px]">
            <Group locale={locale} />
            <Group locale={locale} hidden />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,var(--surface)_10%,transparent_50%,var(--surface)_90%)]"
          />
        </div>
      </div>
    </section>
  );
}
