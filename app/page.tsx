import { CaseStudyTeaser } from "@/components/sections/case-study-teaser";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { FeatureList } from "@/components/sections/feature-list";
import { Hero } from "@/components/sections/hero";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { ServiceGrid } from "@/components/sections/service-grid";
import { StatsStrip } from "@/components/sections/stats-strip";
import { Testimonials } from "@/components/sections/testimonials";
import { EyeDivider } from "@/components/ui/eye-divider";
import { coreServices, differentiators, intelligentLayer } from "@/content/site-content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "ODIN Enterprise Systems",
  "ODIN builds enterprise-grade systems for operations, finance, customer management, and intelligent automation.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <EyeDivider />
      <ServiceGrid
        eyebrow="Core Services"
        title="Structured systems engineered for operational control"
        description="ODIN designs the critical business systems that keep revenue, finance, and operations aligned in real time."
        items={coreServices}
      />
      <ServiceGrid
        eyebrow="Intelligent Layer"
        title="Practical AI embedded into execution workflows"
        description="Automation and assistant layers integrated directly into CRM, ERP, and social engagement workflows."
        items={intelligentLayer}
      />
      <FeatureList
        eyebrow="Why ODIN"
        title="Built for organizations that require precision and scale"
        description="Every ODIN implementation is grounded in your business environment, integration realities, and governance model."
        features={differentiators}
      />
      <StatsStrip />
      <EyeDivider />
      <CaseStudyTeaser />
      <Testimonials />
      <FAQAccordion />
      <PricingTeaser />
    </>
  );
}
