import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-stroke bg-panel/40">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            ODIN delivers structured business systems enhanced with intelligent automation - giving organizations total
            visibility and complete control.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-silver">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-blue" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-silver">Contact</h3>
          <p className="mt-4 text-sm text-muted">Email: {siteConfig.email}</p>
          <div className="mt-6 flex gap-3">
            <Link href="/privacy" className="text-sm text-muted transition hover:text-blue">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted transition hover:text-blue">
              Terms
            </Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-stroke py-4 text-center text-xs text-muted">
        <Container>(c) {new Date().getFullYear()} ODIN. All rights reserved.</Container>
      </div>
    </footer>
  );
}
