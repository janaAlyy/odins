import Script from "next/script";

export function AnalyticsPlaceholder() {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";

  if (!enabled) {
    return null;
  }

  return (
    <Script id="odin-analytics-placeholder" strategy="afterInteractive">
      {`console.info("Analytics placeholder active. Configure your provider here.");`}
    </Script>
  );
}
