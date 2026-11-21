"use client";

import { ChevronsUpDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Panel } from "@/components/Panel";
import { ACCENTS, type Mode, useTheme } from "@/components/theme/ThemeProvider";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, routing } from "@/i18n/routing";

const label = "text-[12px] font-semibold tracking-[-0.24px] text-muted";
const select =
  "w-full cursor-pointer appearance-none bg-transparent pr-[18px] text-right text-[10px] font-medium tracking-[-0.4px] text-body";

function SelectRow({ name, value, onChange, children }: { name: string; value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return (
    <label className="flex items-center justify-between px-[14px]">
      <span className={label}>{name}</span>
      <span className="relative flex min-w-[64px] items-center">
        <select className={select} value={value} onChange={(e) => onChange(e.target.value)}>
          {children}
        </select>
        <ChevronsUpDown className="pointer-events-none absolute right-0 size-[14px] text-body" strokeWidth={1.8} />
      </span>
    </label>
  );
}

export default function SiteCustomizer({ className = "" }: { className?: string }) {
  const t = useTranslations("customizer");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { accent, mode, setAccent, setMode } = useTheme();

  return (
    <Panel title={t("title")} className={className}>
      <div className="flex flex-col gap-[10px] px-[14px]">
        <p className={label}>{t("color")}</p>
        <div className="flex flex-wrap items-center gap-[10px]" role="radiogroup" aria-label={t("color")}>
          {ACCENTS.map((c) => (
            <button
              key={c}
              role="radio"
              aria-checked={accent === c}
              aria-label={c}
              onClick={() => setAccent(c)}
              style={{ backgroundColor: c }}
              className={`size-5 rounded-[4px] transition-transform duration-150 hover:scale-125 ${accent === c ? "border-2 border-[#adb8bf]" : ""}`}
            />
          ))}
          <label className="relative size-5 cursor-pointer overflow-hidden rounded-[4px] transition-transform duration-150 hover:scale-125" title={t("custom")}>
            <span
              className="absolute inset-0"
              style={{
                background:
                  "conic-gradient(from 90deg, #5b727f, #ff383c 15%, #ff8d28 30%, #34c759 45%, #003ae8 60%, #cb30e0 75%, #00636a 90%, #ac7f5e)",
              }}
            />
            <input type="color" aria-label={t("custom")} value={accent} onChange={(e) => setAccent(e.target.value)} className="absolute inset-0 cursor-pointer opacity-0" />
          </label>
        </div>
      </div>
      <SelectRow name={t("language")} value={locale} onChange={(l) => router.replace(pathname, { locale: l as (typeof routing.locales)[number] })}>
        {routing.locales.map((l) => (
          <option key={l} value={l}>
            {localeNames[l]}
          </option>
        ))}
      </SelectRow>
      <SelectRow name={t("mode")} value={mode} onChange={(m) => setMode(m as Mode)}>
        <option value="system">{t("system")}</option>
        <option value="light">{t("light")}</option>
        <option value="dark">{t("dark")}</option>
      </SelectRow>
    </Panel>
  );
}
