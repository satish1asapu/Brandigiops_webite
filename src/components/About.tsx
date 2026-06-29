import Image from "next/image";
import { about } from "@/content/site";
import { mediaAssets } from "@/content/media-assets";

export function About() {
  return (
    <section className="about" id="about">
      <h2 className="stitle">{about.sectionTitle}</h2>
      <div className="agrid">
        <div className="acol">
          <div className="ahead">
            <div className="aplus">+</div>
            <h4 className="aheading">
              {about.mission.headingLines[0]}
              <br />
              {about.mission.headingLines[1]}
            </h4>
          </div>
          <div className="abody">
            <div className="atext">
              <p>{about.mission.body}</p>
              <div className="asq" />
            </div>
            <div className="aphoto">
              <Image
                src={mediaAssets.aboutMission.src}
                alt={mediaAssets.aboutMission.alt}
                title={mediaAssets.aboutMission.title}
                width={mediaAssets.aboutMission.width}
                height={mediaAssets.aboutMission.height}
                sizes="140px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="acol">
          <div className="ahead flip">
            <h4 className="aheading">
              {about.vision.headingLines[0]}
              <br />
              {about.vision.headingLines[1]}
            </h4>
            <div className="aplus">+</div>
          </div>
          <div className="abody">
            <div className="aphoto">
              <Image
                src={mediaAssets.aboutVision.src}
                alt={mediaAssets.aboutVision.alt}
                title={mediaAssets.aboutVision.title}
                width={mediaAssets.aboutVision.width}
                height={mediaAssets.aboutVision.height}
                sizes="140px"
                loading="lazy"
              />
            </div>
            <div className="atext">
              <div className="asq out" />
              <p>{about.vision.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
