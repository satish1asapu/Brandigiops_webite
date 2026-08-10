import Link from "next/link";
import { hero, stats } from "@/content/site";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";
import { IconBrain, IconZap, IconAnalytics } from "./icons/SiteIcons";
import { BookingModal } from "./BookingModal";

export function Hero() {
  const items = [...hero.marqueeItems, ...hero.marqueeItems];
  return (
    <section className="hero" id="home">
      {/* Left: text content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" aria-hidden />
          {hero.badge}
        </div>
        <h1 className="hero-title">
          {hero.titleLine1}
          <br />
          {hero.titleLine2}
          <br />
          <span className="hero-title-accent">{hero.titleAccent}</span>
        </h1>
        <p className="hero-desc">{hero.description}</p>
        <div className="hero-ctas">
          <BookingModal className="hbtn-primary">
            {hero.ctaLabel} <ArrowRightIcon />
          </BookingModal>
          <Link href={hero.ctaSecondaryHref} className="hbtn-secondary">
            {hero.ctaSecondaryLabel} <ArrowRightIcon />
          </Link>
        </div>
        <div className="hero-stats">
          {stats.map((s, i) => (
            <div key={s.label} style={{ display: "contents" }}>
              {i > 0 && <div className="hstat-divider" aria-hidden />}
              <div className="hstat">
                <span className="hstat-val">{s.value}</span>
                <span className="hstat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: visual cards */}
      <div className="hero-visual" aria-hidden>
        <div className="hero-card">
          <div className="hero-card-eyebrow">AI Growth Intelligence · Active</div>
          <div className="hero-card-metric">
            <span className="hero-card-val">Full-Stack</span>
            <span className="hero-card-change">Strategy → Content → Campaigns → Leads</span>
          </div>
          <p className="hero-card-desc">One connected intelligence layer — no more tool juggling or disconnected workflows</p>
        </div>
        <div className="hero-card-row">
          <div className="hero-mini-card">
            <div className="hero-mini-icon hero-mini-icon--ai">
              <IconBrain size={20} />
            </div>
            <div className="hero-mini-title">AI Agents</div>
            <div className="hero-mini-desc">Plan, create & execute</div>
          </div>
          <div className="hero-mini-card">
            <div className="hero-mini-icon hero-mini-icon--energy">
              <IconZap size={20} />
            </div>
            <div className="hero-mini-title">Human-in-loop</div>
            <div className="hero-mini-desc">Validated before delivery</div>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-badge">
            <IconAnalytics size={12} />
            Intelligence Suite
          </div>
          <div className="hero-card-eyebrow">Ecosystem Watchdog · Always On</div>
          <div className="hero-card-metric">
            <span className="hero-card-val">Real-Time</span>
            <span className="hero-card-change">↑ Competitor & market signals</span>
          </div>
          <p className="hero-card-desc">AI monitors your category 24/7 — surfaces gaps and opportunities before your competitors act</p>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mwrap">
        <div className="mtrack">
          {items.map((label, i) => (
            <span key={`${label}-${i}`} className="mitem">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
