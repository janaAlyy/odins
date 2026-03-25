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
        src="/brand/odin_logo_no_bg.png"
        alt="ODIN logo"
        width={compact ? 64 : 82}
        height={compact ? 64 : 82}
        className="h-auto w-auto object-contain"
        priority
      />
    </Link>
  );
}
