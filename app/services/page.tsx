import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Container } from "@/components/ui/container";
import { EyeWatermark } from "@/components/ui/eye-watermark";
import { coreServices, intelligentLayer } from "@/content/site-content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Services",
  "Explore ODIN services: custom CRM, accounting systems, business platforms, and embedded AI automation.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stroke py-16 md:py-20">
        <EyeWatermark />
        <Container className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">Services</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-5xl">
            Enterprise systems tailored to your operating reality
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            ODIN delivers structured business systems enhanced with intelligent automation - giving organizations total
            visibility and complete control.
          </p>
        </Container>
      </section>

      <ServiceGrid
        eyebrow="Core Services"
        title="Foundation systems"
        description="Operational platforms engineered for control, reporting confidence, and measurable execution speed."
        items={coreServices}
      />

      <ServiceGrid
        eyebrow="AI Services"
        title="Intelligent automation layer"
        description="Embed practical AI into communication, reporting, and decision workflows without disrupting governance."
        items={intelligentLayer}
      />

      <FAQAccordion />
    </>
  );
}
