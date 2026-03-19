import type { Route } from "next";
import Link from "next/link";

type Crumb = {
  label: string;
  href?: Route;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs tracking-[0.2em] text-muted uppercase">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link className="transition hover:text-blue" href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-silver" : undefined}>{item.label}</span>
              )}
              {!isLast ? <span className="text-silver/40">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
