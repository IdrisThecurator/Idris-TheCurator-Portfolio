import type { Project } from "@/data/projects";

/** A project card with three sheets of "paper" fanned out behind it. Scales with its container (670 : 482). */
export default function ProjectCard({ project, size = "lg" }: { project: Project; size?: "lg" | "sm" }) {
  const sm = size === "sm";
  const sheet = `absolute h-[90.95%] w-[93.97%] rotate-2 ${sm ? "rounded-[5px]" : "rounded-[11px]"}`;

  return (
    <a
      href={project.href}
      aria-label={`${project.name}, ${project.meta}`}
      className="group relative block aspect-[670/482.4] w-full transition-transform duration-300 hover:-translate-y-1"
    >
      <span aria-hidden className={`${sheet} left-[4.91%] top-[6.79%] bg-[color-mix(in_srgb,var(--ink)_5%,var(--bg))] shadow-[0_13px_17.5px_-4.4px_rgba(0,0,0,0.08),0_4.4px_6.6px_-2.2px_rgba(0,0,0,0.03)]`} />
      <span aria-hidden className={`${sheet} left-[3.28%] top-[4.41%] bg-[color-mix(in_srgb,var(--ink)_15%,var(--bg))]`} />
      <span aria-hidden className={`${sheet} left-[1.64%] top-[2.26%] bg-[color-mix(in_srgb,var(--ink)_22%,var(--bg))] shadow-[0_1px_2px_rgba(0,0,0,0.05)]`} />

      <div className="absolute left-0 top-[0.12%] h-[90.95%] w-[93.97%]">
        <span aria-hidden style={{ filter: "url(#rough-edge)" }} className={`absolute inset-0 border-2 border-body bg-card ${sm ? "rounded-[5px]" : "rounded-[11px]"}`} />
        <div className={`absolute inset-0 overflow-hidden ${sm ? "rounded-[5px]" : "rounded-[11px]"}`}>
          {project.image && (
            <div className="absolute right-[-15.7%] top-[21.5%] h-[62.5%] w-[69.7%] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt="" aria-hidden className="absolute left-0 top-[-0.03%] h-[120%] w-full max-w-none" />
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 flex h-[16%] items-center justify-between border-t-2 border-body bg-card px-[3.5%]">
            <span style={project.color ? { color: project.color } : undefined} className={sm ? "text-[10px] font-bold tracking-[-0.2px] text-body" : "text-[20px] font-semibold tracking-[-0.4px] text-body"}>
              {project.name}
            </span>
            <span className={sm ? "text-[8.6px] font-semibold tracking-[-0.17px] text-muted" : "text-[18px] font-semibold tracking-[-0.72px] text-muted"}>
              {project.meta}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
