import { socialProof } from "@/content/site";

export function SocialProof() {
  return (
    <section className="social-proof-band" aria-label="Clients">
      <div className="sp-inner">
        <span className="sp-label">{socialProof.sectionLabel}</span>
        <div className="sp-clients">
          {socialProof.clients.map((c, i) => (
            <span key={c.descriptor} className="sp-client">
              {i > 0 && <span className="sp-dot" aria-hidden>·</span>}
              {c.descriptor}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
