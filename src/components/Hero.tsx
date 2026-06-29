import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/site";
import { mediaAssets } from "@/content/media-assets";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";

export function Hero() {
  const items = [...hero.marqueeItems, ...hero.marqueeItems];
  const bg = mediaAssets.heroBackground;
  return (
    <section className="hero" id="hero" aria-label={bg.alt}>
      <div className="hero__bg" aria-hidden>
        <Image
          className="hero__bg-img"
          src={bg.src}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={80}
        />
      </div>
      <div className="hero-grid">
        <div>
          <div className="hword">{hero.wordLeft}</div>
        </div>
        <div className="hcenter">
          <h1 className="htitle">{hero.title}</h1>
          <p className="hdesc">{hero.description}</p>
          <Link href={hero.ctaHref} className="hbtn">
            {hero.ctaLabel} <ArrowRightIcon />
          </Link>
          <div className="htag">
            {hero.taglineLines[0]}
            <br />
            {hero.taglineLines[1]}
          </div>
        </div>
        <div>
          <div className="hword r">{hero.wordRight}</div>
        </div>
      </div>
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
