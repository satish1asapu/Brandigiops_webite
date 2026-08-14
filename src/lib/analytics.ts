declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "book_walkthrough_click"
  | "whatsapp_click"
  | "email_click"
  | "form_submit"
  | "blog_scroll_75";

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
