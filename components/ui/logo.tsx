import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ODIN homepage"
      className="inline-flex items-center rounded-full px-1 py-1 transition hover:bg-white/5"
    >
      <Image
        src="/brand/logo.jpeg"
        alt="ODIN logo"
        width={compact ? 38 : 46}
        height={compact ? 38 : 46}
        className="rounded-lg border border-stroke/60"
        priority
      />
    </Link>
  );
}
