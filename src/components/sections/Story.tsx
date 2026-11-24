import { useTranslations } from "next-intl";
import { Children } from "react";

/* Tilted photo card, in section coordinates (Figma Story frame, 1200 wide).
   The polygon is that card's rotated outline, shifted up by the 91px the text starts at. */
const CARD_CLIP =
  "polygon(191.48px -53.44px, 336.76px -90.8px, 366.64px 25.42px, 221.36px 62.78px)";

export default function Story() {
  const t = useTranslations("story");

  const text = Children.toArray(t.rich("text", {
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
  }));

  const textClass =
    "text-center text-[clamp(1.125rem,2.667vw,2rem)] font-normal leading-[1.238] tracking-[-0.02em] text-muted";

  return (
    <section id="story" className="relative mx-auto w-full max-w-[1200px] px-6 pb-[220px] pt-[40px] lg:px-0">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/story/card.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[191.48px] top-[0.21px] z-0 hidden h-[153.569px] w-[175.155px] max-w-none lg:block"
        />
        <p className={`${textClass} relative z-10 lg:mt-[91px]`}>{text}</p>
        {/* Same text in white, clipped to the photo card, so the letters over the photo read white */}
        <p
          aria-hidden
          className={`${textClass} pointer-events-none absolute inset-x-0 top-[91px] z-20 hidden text-white lg:block [&_*]:!text-white`}
          style={{ clipPath: CARD_CLIP }}
        >
          {text}
        </p>
      </div>
    </section>
  );
}
