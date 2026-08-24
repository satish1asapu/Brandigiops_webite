import type { ReactNode } from "react";

type PageLongformProps = {
  id?: string;
  label: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  alt?: boolean;
  children?: ReactNode;
};

export function PageLongform({
  id,
  label,
  title,
  paragraphs,
  bullets,
  alt = false,
  children,
}: PageLongformProps) {
  return (
    <section
      id={id}
      className={`section page-longform-section${alt ? " section-alt" : ""}`}
    >
      <div className="page-longform">
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {bullets && bullets.length > 0 && (
          <ul>
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </section>
  );
}
