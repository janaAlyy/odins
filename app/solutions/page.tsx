import { FeatureList } from "@/components/sections/feature-list";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { StatsStrip } from "@/components/sections/stats-strip";
import { Container } from "@/components/ui/container";
import { EyeWatermark } from "@/components/ui/eye-watermark";
import { pageMetadata } from "@/lib/site";

const solutionBlocks = [
  {
    title: "Operations Control Layer",
    text: "Command dashboards, workflow orchestration, and role-based operational control designed for real-time execution."
  },
  {
    title: "Finance & Audit Layer",
    text: "Integrated accounting workflows with traceable approvals, compliance-ready records, and reliable forecasting views."
  },
  {
    title: "Customer Management Layer",
    text: "CRM architecture aligned with actual customer journeys, lifecycle stages, and service-level accountability."
  },
  {
    title: "Automation & AI Layer",
    text: "Embedded assistants and automation modules that reduce manual load while maintaining governance and oversight."
  }
];

export const metadata = pageMetadata(
  "Solutions Platform",
  "ODIN solutions platform connects operations, finance, CRM, and AI into one enterprise control environment.",
  "/solutions"
);

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stroke py-16 md:py-20">
        <EyeWatermark />
        <Container className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">Solutions Platform</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-5xl">
            One structured platform for enterprise operations, finance, and automation
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            ODIN is not a disconnected toolkit. It is a coordinated system architecture that unifies execution,
            reporting, and decision intelligence.
          </p>
        </Container>
      </section>

      <FeatureList
        eyebrow="Platform Modules"
        title="Designed as a connected operating system"
        description="Each module is deployable independently and more powerful when combined within ODIN's integrated data model."
        features={solutionBlocks}
      />

      <StatsStrip />
      <PricingTeaser />
    </>
  );
}
