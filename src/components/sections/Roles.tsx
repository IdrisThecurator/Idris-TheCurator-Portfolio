import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Children } from "react";
import DragScroll from "@/components/DragScroll";
import { ROLES } from "@/data/roles";

const SURFACE = "bg-[color-mix(in_srgb,var(--ink)_4%,var(--bg))]";

export default function Roles() {
  const t = useTranslations("roles");

  const title = Children.toArray(
    t.rich("title", {
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key="icon" src="/roles/calendar.svg" alt="" aria-hidden className="mx-[0.06em] inline-block size-[0.96em] align-[-0.1em]" />
      ),
    }),
  );

  const statement = Children.toArray(
    t.rich("statement", {
      grey: (c) => <span className="text-muted">{c}</span>,
      dark: (c) => <span className="text-ink">{c}</span>,
    }),
  );

  return (
    <section id="roles" className="pb-[150px] pl-6 lg:pl-10">
      <div className="relative flex flex-col gap-10 [--panel:min(760px,60%)] lg:block lg:h-[540px]">
        {/* Text panel has no background, so the page dots run straight through it */}
        <div
          className="z-10 flex flex-col items-start gap-6 px-0 py-0 pr-6 lg:absolute lg:right-0 lg:top-0 lg:h-[540px] lg:w-[var(--panel)] lg:px-10 lg:py-[30px] lg:pr-10"
        >
          <div className="flex flex-col gap-[10px]">
            <p className="flex items-center gap-[6px] text-[16px] font-bold tracking-[-0.32px] text-muted">
              <span aria-hidden className="size-[10px] rounded-full bg-muted" />
              {t("tag")}
            </p>
            <h2 className="text-[clamp(2rem,3.61vw,3.25rem)] font-semibold leading-normal tracking-[-0.02em] text-ink">{title}</h2>
            <p className="max-w-[576px] text-[16px] tracking-[-0.32px] text-body">{t("intro")}</p>
          </div>
          <p className="max-w-[680px] text-[clamp(1.375rem,2.35vw,2.125rem)] font-medium leading-[1.2] tracking-[-0.02em]">{statement}</p>
          <a
            href="#contact"
            className="flex shrink-0 items-center justify-center gap-[10px] rounded-full bg-accent px-5 py-3 text-[18px] font-medium leading-normal text-white shadow-[4px_4px_10px_rgba(0,0,0,0.1)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[4px_8px_16px_rgba(0,0,0,0.18)] active:translate-y-0 active:scale-95"
          >
            {t("book")}
            <ArrowUpRight className="size-6" strokeWidth={1.8} />
          </a>
        </div>

        {/* Role cards: scroll sideways behind the panel */}
        <DragScroll className="-ml-1 pl-1 pr-6 lg:absolute lg:left-0 lg:top-[35px] lg:ml-0 lg:w-[calc(100%-var(--panel)+1px)] lg:pl-0 lg:pr-0">
          <ul className="flex w-max gap-5">
            {ROLES.map((role) => (
              <li key={`${role.company}-${role.period}`} className="relative h-[460px] w-[min(440px,82vw)] shrink-0 select-none lg:w-[440px]">
                <span aria-hidden style={{ filter: "url(#rough-edge)" }} className={`absolute inset-0 rounded-[10px] border-[1.5px] border-body ${SURFACE}`} />
                <div className="absolute inset-x-5 top-5 flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[20px] font-bold leading-normal tracking-[-0.8px] text-muted">{role.title}</h3>
                    <div className="text-[14px] leading-normal tracking-[-0.28px] text-body">
                      <p>{role.company}</p>
                      <p>{role.period}</p>
                      <p>{role.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 leading-normal">
                    <p className="text-[16px] font-medium tracking-[-0.64px] text-muted">{t("skills")}</p>
                    <p className="text-[14px] tracking-[-0.28px] text-body">{role.skills}</p>
                  </div>
                  <div className="flex flex-col gap-1 leading-normal">
                    <p className="text-[16px] font-medium tracking-[-0.64px] text-muted">{t("description")}</p>
                    <div className="flex flex-col gap-2 text-[14px] tracking-[-0.28px] text-body">
                      {role.description.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </DragScroll>
      </div>
    </section>
  );
}
