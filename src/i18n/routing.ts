import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "yo", "fr", "es", "zh"],
  defaultLocale: "en",
});

export const localeNames: Record<(typeof routing.locales)[number], string> = {
  en: "English",
  yo: "Yorùbá",
  fr: "Français",
  es: "Español",
  zh: "中文",
};
