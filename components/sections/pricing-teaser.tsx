import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PricingTeaser() {
  return (
    <section className="section-spacing border-y border-stroke bg-panel/50">
      <Container>
        <div className="surface mx-auto max-w-4xl p-8 text-center md:p-10">
          <SectionHeading
            eyebrow="Engagement"
            title="Talk to sales for tailored engagement"
            description="Every ODIN solution is scoped based on workflow complexity, integration depth, and governance requirements."
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact">Talk to Sales</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
