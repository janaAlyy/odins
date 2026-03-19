import { faqs } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQAccordion() {
  return (
    <section className="section-spacing">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Key delivery, integration, and support details for enterprise teams evaluating ODIN."
        />

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="surface group overflow-hidden p-5">
              <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-text marker:content-none">
                <span>{faq.question}</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
