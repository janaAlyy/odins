import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export default function Loading() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <Container className="text-center">
        <div className="mx-auto w-fit animate-pulse rounded-2xl border border-stroke bg-panel/70 px-8 py-6">
          <Logo />
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">Calibrating Odin&apos;s Eye...</p>
        </div>
      </Container>
    </section>
  );
}
