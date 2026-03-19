import { Container } from "@/components/ui/container";

export function StatsStrip() {
  const stats = [
    { value: "30%", label: "Operational time reduction" },
    { value: "100%", label: "Tailored system architecture" },
    { value: "24/7", label: "Workflow visibility" }
  ];

  return (
    <section className="border-y border-stroke bg-panel/70 py-7">
      <Container className="grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-2xl border border-stroke bg-bg/40 px-5 py-4 text-center md:text-left">
            <p className="text-2xl font-semibold text-blue md:text-3xl">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}
