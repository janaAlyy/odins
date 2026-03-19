import { ServiceCard } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type ServiceGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceCard[];
};

export function ServiceGrid({ eyebrow, title, description, items }: ServiceGridProps) {
  return (
    <section className="section-spacing">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="surface h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-hover">
                <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
