import { useTranslations } from "next-intl";
import { Children } from "react";

export default function Story() {
  const t = useTranslations("story");

  const text = Children.toArray(
    t.rich("text", {
      orange: (c) => <span className="font-medium text-[#ff921f]">{c}</span>,
      green: (c) => <span className="font-medium text-[#84d540]">{c}</span>,
      dark: (c) => <span className="text-ink">{c}</span>,
      handshake: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key="handshake" src="/story/handshake.svg" alt="" aria-hidden className="mx-[0.08em] inline-block size-[1.24em] align-[-0.3em]" />
      ),
      targets: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key="targets" src="/story/targets.svg" alt="" aria-hidden className="mx-[0.05em] inline-block h-[0.95em] w-auto align-[-0.15em]" />
      ),
      avatars: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key="avatars" src="/story/avatars.png" alt="" aria-hidden className="mx-[0.08em] inline-block h-[1.14em] w-auto align-[-0.28em]" />
      ),
    }),
  );

  return (
    <section id="story" className="px-6 pb-[220px] pt-[80px]">
      {/* Never wider than 1000px, always centred, with extra breathing room from the screen edges on small screens */}
      <p className="mx-auto w-[min(1000px,calc(100%_-_1.5rem))] text-center text-[clamp(1.125rem,2.667vw,2rem)] font-normal leading-[1.238] tracking-[-0.02em] text-muted sm:w-[min(1000px,calc(100%_-_4rem))] lg:w-[min(1000px,calc(100%_-_8rem))]">
        {text}
      </p>
    </section>
  );
}
