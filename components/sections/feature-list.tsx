import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Feature = {
  title: string;
  text: string;
};

type FeatureListProps = {
  eyebrow: string;
  title: string;
  description: string;
  features: Feature[];
};

export function FeatureList({ eyebrow, title, description, features }: FeatureListProps) {
  return (
    <section className="section-spacing border-y border-stroke bg-panel/40">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.07}>
              <article className="surface h-full p-6">
                <h3 className="text-xl font-semibold text-text">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
