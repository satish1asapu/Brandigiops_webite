"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: AnalyticsEvent;
  children: ReactNode;
};

export function TrackedLink({ event, onClick, children, ...rest }: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(event, { href: String(rest.href ?? "") });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
