"use client";

import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/content/site";
import { mediaAssets } from "@/content/media-assets";
import { BookingModal } from "./BookingModal";
import { IconCalendar } from "./icons/SiteIcons";

export function Header() {
  return (
    <header className="header">
      <Link href="/#home" className="logo-img" aria-label="BranDigiOps home">
        <Image
          className="logo-img__next"
          src={mediaAssets.logo.src}
          alt={mediaAssets.logo.alt}
          title={mediaAssets.logo.title}
          width={mediaAssets.logo.width}
          height={mediaAssets.logo.height}
          priority
          quality={100}
          sizes="(max-width: 640px) 140px, 186px"
        />
      </Link>
      <nav className="nav" id="nav">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <BookingModal className="nav-cta">
          <IconCalendar size={14} />
          Book a Walkthrough
        </BookingModal>
      </nav>
      <button
        type="button"
        className="burger"
        aria-label="Open menu"
        onClick={() => document.getElementById("nav")?.classList.toggle("open")}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
