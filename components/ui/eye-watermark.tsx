import Image from "next/image";

type EyeWatermarkProps = {
  className?: string;
};

export function EyeWatermark({ className }: EyeWatermarkProps) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <div className="absolute -right-24 -top-24 opacity-[0.08]">
        <Image src="/brand/odin-eye.svg" alt="" width={380} height={190} priority={false} />
      </div>
    </div>
  );
}
