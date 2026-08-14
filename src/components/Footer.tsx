import Image from "next/image";
import Link from "next/link";
import { footer, navigation } from "@/content/site";
import { mediaAssets } from "@/content/media-assets";
import { ChevronUpIcon } from "./icons/ChevronUpIcon";
import { BookingModal } from "./BookingModal";
import { ContactForm } from "./ContactForm";
import { TrackedLink } from "./TrackedLink";
import { IconCalendar, IconMessageCircle, IconMail } from "./icons/SiteIcons";

const socialIcon = {
  x: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  facebook: (
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  ),
  instagram: (
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  ),
  youtube: (
    <path d="M23.498 6.186a2.997 2.997 0 00-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.389.566a2.997 2.997 0 00-2.11 2.12C0 8.08 0 12 0 12s0 3.92.501 5.814a2.997 2.997 0 002.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.389-.566a2.997 2.997 0 002.11-2.12C24 15.92 24 12 24 12s0-3.92-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
  ),
} as const;

const keys = ["x", "linkedin", "facebook", "instagram", "youtube"] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/#home" className="footer-logo" aria-label="BranDigiOps home">
            <Image
              className="logo-img__next"
              src={mediaAssets.logo.src}
              alt={mediaAssets.logo.alt}
              title={mediaAssets.logo.title}
              width={mediaAssets.logo.width}
              height={mediaAssets.logo.height}
              sizes="52px"
            />
          </Link>
          <p className="footer-brand-desc">
            AI-powered growth intelligence for Indian businesses — strategy,
            content, campaigns, and lead capture in one layer.
          </p>
          <address className="footer-nap">
            <strong>{footer.nap.name}</strong>
            <span>{footer.nap.locality}</span>
            <a href={footer.nap.phoneHref}>{footer.nap.phoneDisplay}</a>
            <a href={`mailto:${footer.nap.email}`}>{footer.nap.email}</a>
          </address>
        </div>
        <div>
          <p className="footer-col-title">Navigation</p>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/free-aeo-audit">Free AEO audit</Link>
            <Link href="/growth-radar">Pre-tender lead generation</Link>
          </div>
        </div>
        <div>
          <p className="footer-col-title">Connect</p>
          <div className="footer-links">
            <TrackedLink
              href={`mailto:${footer.email}`}
              className="footer-contact-email"
              event="email_click"
            >
              {footer.email}
            </TrackedLink>
            <TrackedLink
              href={footer.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-link"
              event="whatsapp_click"
            >
              <IconMessageCircle size={15} />
              WhatsApp us
            </TrackedLink>
          </div>
        </div>
      </div>

      <section className="contact-section" id="contact">
        <p className="contact-title">{footer.contactTitle}</p>
        <p className="contact-lead">{footer.contactLead}</p>
        <ContactForm source="contact" />
        <div className="contact-ctas">
          <BookingModal className="contact-cta-primary">
            <IconCalendar size={17} />
            Book a walkthrough
          </BookingModal>
          <TrackedLink
            className="contact-cta-whatsapp"
            href={footer.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            event="whatsapp_click"
          >
            <IconMessageCircle size={17} />
            WhatsApp us
          </TrackedLink>
          <TrackedLink
            className="contact-cta-email"
            href={`mailto:${footer.email}`}
            event="email_click"
          >
            <IconMail size={17} />
            {footer.email}
          </TrackedLink>
        </div>
        <div className="contact-socials">
          {footer.social.map((s, i) => (
            <a
              key={s.label}
              className="social-link"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                {socialIcon[keys[i]]}
              </svg>
              {s.label}
            </a>
          ))}
        </div>
      </section>

      <div className="fbottom">
        <div className="footer-legal">
          <span>{footer.copyright}</span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span className="footer-sister">
            Sister concern:{" "}
            <a
              href="https://fuelforbrand.com/about-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FuelForBrand
            </a>
          </span>
        </div>
        <Link href="/#home" className="btop" aria-label="Back to top">
          <ChevronUpIcon />
        </Link>
      </div>
    </footer>
  );
}
