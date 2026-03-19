import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { EyeWatermark } from "@/components/ui/eye-watermark";

export default function NotFoundPage() {
  return (
    <section className="relative overflow-hidden section-spacing">
      <EyeWatermark />
      <Container className="relative z-10">
        <div className="surface mx-auto max-w-2xl p-8 text-center md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-blue">404</p>
          <h1 className="mt-3 text-3xl font-semibold text-text md:text-4xl">Page not found</h1>
          <p className="mt-4 text-sm text-muted md:text-base">
            This route is outside ODIN&apos;s mapped operating system.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <ButtonLink href="/">Return Home</ButtonLink>
            <Link href="/contact" className="inline-flex items-center text-sm text-silver transition hover:text-blue">
              Contact ODIN
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
