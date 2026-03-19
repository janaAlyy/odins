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
        src="/brand/odin-wordmark.svg"
        alt="ODIN wordmark"
        width={compact ? 120 : 142}
        height={compact ? 29 : 35}
        priority
      />
    </Link>
  );
}
