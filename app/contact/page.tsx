import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { EyeWatermark } from "@/components/ui/eye-watermark";
import { pageMetadata, siteConfig } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact",
  "Request a demo with ODIN to discuss custom CRM, finance systems, enterprise platforms, and AI automation.",
  "/contact"
);

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden section-spacing">
      <EyeWatermark />
      <Container className="relative z-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <aside className="surface p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">Contact</p>
          <h1 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">Request a Demo</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            Share your operating goals and system challenges. ODIN will propose an implementation path aligned with
            your workflow, scale, and governance requirements.
          </p>

          <div className="mt-8 space-y-3 text-sm text-muted">
            <p>
              <span className="text-silver">Email:</span> {siteConfig.email}
            </p>
            <p>
              <span className="text-silver">Response SLA:</span> Within one business day
            </p>
          </div>
        </aside>

        <ContactForm />
      </Container>
    </section>
  );
}
