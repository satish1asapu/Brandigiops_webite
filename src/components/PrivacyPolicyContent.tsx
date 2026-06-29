import Link from "next/link";
import {
  privacyPolicyMeta,
  privacyPolicySections,
  type PrivacyBlock,
} from "@/content/privacy-policy";

function Block({ block }: { block: PrivacyBlock }) {
  return (
    <>
      {block.title && <h3>{block.title}</h3>}
      {block.paragraphs?.map((p) => (
        <p key={p.slice(0, 48)}>{p}</p>
      ))}
      {block.list && (
        <ul>
          {block.list.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      )}
      {block.orderedList && (
        <ol>
          {block.orderedList.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ol>
      )}
    </>
  );
}

export function PrivacyPolicyContent() {
  const { contactEmail, companyName, website, effectiveDate, grievanceOfficer } =
    privacyPolicyMeta;

  return (
    <div className="privacy-simple">
      <Link href="/" className="privacy-back">
        ← Back to home
      </Link>

      <h1>Privacy Policy</h1>
      <p className="privacy-updated">Last updated: {effectiveDate}</p>

      <p className="privacy-intro">
        {companyName} ({website.replace(/^https?:\/\//, "")}) explains below how
        we collect, use, and protect personal information when you use our
        website and services. By using this site, you agree to this policy.
      </p>

      {privacyPolicySections
        .filter((section) => section.id !== "introduction")
        .map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.blocks.map((block, i) => (
            <Block key={`${section.id}-${i}`} block={block} />
          ))}
          {section.id === "grievance" && (
            <p>
              Contact: {grievanceOfficer.name} ({grievanceOfficer.designation}) —{" "}
              <a href={`mailto:${grievanceOfficer.email}`}>
                {grievanceOfficer.email}
              </a>
            </p>
          )}
        </section>
      ))}

      <p className="privacy-contact">
        Questions? Email{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </div>
  );
}
