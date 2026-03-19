import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudyTeaser() {
  return (
    <section className="section-spacing">
      <Container>
        <SectionHeading
          eyebrow="Case Study"
          title="Aviation Academy"
          description="Manual workflows created delays and low visibility. ODIN delivered integrated dashboards and custom AI automation to improve operational speed."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="surface overflow-hidden">
            <Image
              src="/brand/aviation-placeholder.svg"
              alt="Aviation Academy system dashboard"
              width={1200}
              height={800}
              className="h-auto w-full"
            />
          </div>

          <article className="surface p-6">
            <h3 className="text-2xl font-semibold text-text">30% operational time reduction</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              Full workflow visibility enabled faster decisions and tighter oversight across operational teams.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>Challenge: manual processes causing delays and inefficiency</li>
              <li>Challenge: limited visibility slowing operational decisions</li>
              <li>Solution: custom AI automation and integrated dashboards</li>
              <li>Result: measurable speed and higher decision confidence</li>
            </ul>

            <div className="mt-7 flex items-center gap-4">
              <ButtonLink href="/case-studies/aviation-academy">Read Case Study</ButtonLink>
              <Link href="/contact" className="text-sm text-silver transition hover:text-blue">
                Discuss your project
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
