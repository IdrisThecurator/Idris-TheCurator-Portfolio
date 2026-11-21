import { Children, Fragment, type ReactNode } from "react";

/** Clickable row inside a Panel. Only the text changes color on hover. The negative
    margin and padding cancel out, so layout is unchanged but the click area is taller. */
export const rowLink =
  "-my-[10px] flex w-full items-center px-[14px] py-[10px] transition-colors hover:text-ink focus-visible:text-ink";

/** Card from the design: title, then rows separated by 1px dividers. */
export function Panel({
  title,
  bold = false,
  children,
  className = "",
}: {
  title: string;
  bold?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const rows = Children.toArray(children);
  return (
    <section className={`shadow-panel flex flex-col gap-[10px] overflow-hidden rounded-[10px] border border-line bg-card py-[14px] ${className}`}>
      <h2 className={`px-[14px] text-[14px] tracking-[-0.56px] text-muted ${bold ? "font-bold" : "font-semibold"}`}>{title}</h2>
      {rows.map((row, i) => (
        <Fragment key={i}>
          <div className="h-px w-full bg-line" />
          {row}
        </Fragment>
      ))}
    </section>
  );
}
