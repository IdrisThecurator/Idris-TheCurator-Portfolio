import { useTranslations } from "next-intl";
import { Children } from "react";
import { IMPACTS } from "@/data/impacts";
import ImpactTable from "./ImpactTable";

export default function SuccessStory() {
  const t = useTranslations("successStory");

  const title = Children.toArray(
    t.rich("title", {
      worker: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key="worker" src="/about/worker.svg" alt="" aria-hidden className="mx-[0.06em] inline-block size-[0.92em] align-[-0.12em]" />
      ),
    }),
  );

  const labels = {
    project: t("columns.project"),
    impacts: t("columns.impacts"),
    metrics: t("columns.metrics"),
    timeframe: t("columns.timeframe"),
    expand: t("expand"),
    collapse: t("collapse"),
  };

  return (
    <section id="successStory" className="px-6 pb-[150px] lg:px-10">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-[clamp(2rem,3.61vw,3.25rem)] font-semibold leading-normal tracking-[-0.02em] text-ink">{title}</h2>
            <p className="max-w-[576px] text-[16px] leading-normal tracking-[-0.32px] text-body">{t("intro")}</p>
          </div>
          <p className="flex shrink-0 items-center gap-[6px] text-[16px] font-bold tracking-[-0.32px] text-muted">
            <span aria-hidden className="size-[10px] rounded-full bg-muted" />
            {t("tag")}
          </p>
        </div>
        <ImpactTable rows={IMPACTS} labels={labels} />
      </div>
    </section>
  );
}
