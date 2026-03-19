import { FeatureList } from "@/components/sections/feature-list";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { Container } from "@/components/ui/container";
import { EyeWatermark } from "@/components/ui/eye-watermark";
import { industries } from "@/content/site-content";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Industries",
  "ODIN serves startups, SMEs, and enterprise organizations with tailored systems and intelligent automation.",
  "/industries"
);

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stroke py-16 md:py-20">
        <EyeWatermark />
        <Container className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">Industries</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-5xl">
            Built for growth-stage teams and complex enterprise environments
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            ODIN adapts architecture and delivery to the operational maturity, compliance demands, and scale dynamics
            of each organization type.
          </p>
        </Container>
      </section>

      <FeatureList
        eyebrow="Coverage"
        title="Where ODIN delivers impact"
        description="Whether you are consolidating early growth operations or unifying enterprise business units, ODIN provides structured control."
        features={industries}
      />
      <PricingTeaser />
    </>
  );
}
