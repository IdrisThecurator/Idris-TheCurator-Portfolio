import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Children } from "react";
import { CATALOGUE_URL, FEATURED, TEASER } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const PRIMARY =
  "flex shrink-0 items-center justify-center gap-[10px] rounded-full bg-accent px-5 py-3 text-[18px] font-medium leading-normal text-white shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[4px_8px_16px_rgba(0,0,0,0.18)] active:translate-y-0 active:scale-95";
const OUTLINE =
  "flex shrink-0 items-center justify-center gap-[10px] rounded-full border-[0.5px] border-muted bg-bg/60 px-5 py-3 text-[18px] font-medium leading-normal text-ink shadow-[4px_4px_20px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-0.5 hover:bg-line/40 hover:shadow-[4px_8px_24px_rgba(0,0,0,0.16)] active:translate-y-0 active:scale-95";

export default function Projects() {
  const t = useTranslations("projects");

  const title = Children.toArray(
    t.rich("title", {
      br: () => <br />,
      worker: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key="worker" src="/about/worker.svg" alt="" aria-hidden className="mx-[0.06em] inline-block size-[0.92em] align-[-0.12em]" />
      ),
      pen: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key="pen" src="/projects/pen.svg" alt="" aria-hidden className="inline-block size-[0.92em] align-[-0.1em]" />
      ),
    }),
  );

  const statement = Children.toArray(
    t.rich("statement", {
      amber: (c) => <span className="text-[#e49500]">{c}</span>,
      grey: (c) => <span className="text-muted">{c}</span>,
      green: (c) => <span className="text-[#509346]">{c}</span>,
      dark: (c) => <span className="text-ink">{c}</span>,
    }),
  );

  return (
    <section id="projects" className="px-6 pb-[150px] lg:px-10">
      <div className="relative flex flex-col items-center gap-[50px]">
        {/* Floating art around the heading (desktop only) */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 hidden h-[213px] lg:block">
          {/* eslint-disable @next/next/no-img-element */}
          <img src="/projects/art-1.png" alt="" className="absolute left-0 top-0 size-20 rounded-full object-cover" />
          <img src="/projects/art-2.png" alt="" className="absolute left-[92px] top-[129px] size-20 rounded-full object-cover" />
          <img src="/projects/art-3.png" alt="" className="absolute right-0 top-0 size-20 rounded-full object-cover" />
          <img src="/projects/stamp.png" alt="" className="absolute right-[97.82px] top-[114.81px] size-[98.37px]" />
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
            <div className="flex flex-wrap items-start justify-center gap-5">
              <a href="#contact" className={PRIMARY}>
                {t("book")}
                <ArrowUpRight className="size-6" strokeWidth={1.8} />
              </a>
              <a href={CATALOGUE_URL} className={OUTLINE}>
                {t("catalogue")}
                <ArrowUpRight className="size-6" strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </header>

        <div className="flex w-full flex-col gap-10">
          <div className="grid gap-5 md:grid-cols-2">
            {FEATURED.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <div className="relative flex flex-col gap-8 lg:block lg:h-[216px]">
            <p className="max-w-[682px] text-[clamp(1.5rem,2.9vw,2.625rem)] font-medium leading-normal tracking-[-0.02em] lg:w-[50%]">{statement}</p>
            <div className="w-full max-w-[300px] lg:absolute lg:left-[55.4%] lg:top-0 lg:w-[300px]">
              <ProjectCard project={TEASER} size="sm" />
            </div>
            <a href={CATALOGUE_URL} className={`${OUTLINE} self-start lg:absolute lg:right-0 lg:top-[144px]`}>
              {t("catalogue")}
              <ArrowUpRight className="size-6" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
