import { FeatureList } from "@/components/sections/feature-list";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { Container } from "@/components/ui/container";
import { EyeWatermark } from "@/components/ui/eye-watermark";
import { pageMetadata } from "@/lib/site";

const operatingPrinciples = [
  {
    title: "Tailored Engineering",
    text: "ODIN builds tailored systems - not off-the-shelf tools - to provide real-time clarity and operational control."
  },
  {
    title: "Structured Delivery",
    text: "We use phased deployment, measurable milestones, and governance-aware architecture to reduce implementation risk."
  },
  {
    title: "Decision Intelligence",
    text: "Every system is designed to elevate decision quality through transparent metrics, traceable actions, and contextual insights."
  },
  {
    title: "Long-Term Partnership",
    text: "ODIN supports optimization beyond launch to ensure your systems continue to match business growth and change."
  }
];

export const metadata = pageMetadata(
  "About",
  "ODIN is a corporate technology brand specializing in AI, automation, and data systems for enterprise control.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stroke py-16 md:py-20">
        <EyeWatermark />
        <Container className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">About ODIN</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-5xl">
            Enterprise technology focused on clarity, control, and scalable execution
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            ODIN is a corporate technology brand specializing in AI, automation, and data systems. We build tailored
            systems - not off-the-shelf tools - to provide real-time clarity and operational control.
          </p>
        </Container>
      </section>

      <FeatureList
        eyebrow="How We Operate"
        title="Engineering principles behind every ODIN implementation"
        description="Our delivery approach balances speed, governance, and architectural rigor so systems stay reliable at scale."
        features={operatingPrinciples}
      />
      <PricingTeaser />
    </>
  );
}
