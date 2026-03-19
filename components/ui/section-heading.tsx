import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-blue">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-text md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-balance text-sm leading-relaxed text-muted md:text-base">{description}</p> : null}
    </div>
  );
}
