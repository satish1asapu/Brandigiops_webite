import { siteUrl } from "./seo";

export const privacyPolicyMeta = {
  title: "Privacy Policy and Data Protection",
  description:
    "Learn how Brandigiops collects, uses, stores, and protects your personal information when you use our website and AI-powered digital marketing services.",
  effectiveDate: "May 1, 2026",
  companyName: "Brandigiops",
  website: siteUrl,
  contactEmail: "tech@brandigiops.com",
  grievanceOfficer: {
    name: "Privacy & Data Protection",
    designation: "Grievance Officer",
    email: "sales@brandigiops.com",
  },
} as const;

export type PrivacyBlock = {
  title?: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  orderedList?: readonly string[];
};

export type PrivacySection = {
  id: string;
  title: string;
  blocks: readonly PrivacyBlock[];
};

export const privacyPolicySections: readonly PrivacySection[] = [
  {
    id: "introduction",
    title: "Introduction",
    blocks: [
      {
        paragraphs: [
          `This is the official website ("Site") of ${privacyPolicyMeta.companyName}, which provides AI-powered digital marketing, growth intelligence, analytics, and related professional services.`,
          `At ${privacyPolicyMeta.companyName} ("we", "us", or "our"), we respect and recognise the importance of your privacy and security. Your personal information is important to us. To deliver a personalised experience and the services most relevant to you, we may collect information when you use our website and related offerings.`,
          "This Privacy Policy explains what information we collect, how and when we use it, how we disclose and store it, how we protect it, and your rights to access and correct it.",
          "By using or accessing this website, you consent to the collection, storage, use, and disclosure practices described in this Privacy Policy. Please review it carefully.",
        ],
      },
    ],
  },
  {
    id: "scope",
    title: "1. Scope",
    blocks: [
      {
        paragraphs: [
          'This Privacy Policy applies to all users, visitors, prospects, and customers ("you", "your") whose personal information is collected and processed by us in the course of our business, including our website, platform tools, marketing services, and other online or offline offerings (together, the "Services").',
        ],
      },
    ],
  },
  {
    id: "collection",
    title: "2. Collection of Information",
    blocks: [
      {
        paragraphs: [
          "We collect information about you when you provide it directly to us, when third parties such as business partners or service providers provide it to us, or when information is collected automatically in connection with your use of our Site and Services.",
        ],
      },
      {
        title: "A. Information collected directly from you",
        paragraphs: [
          "When you contact us, request a demo, subscribe to updates, or engage our Services, we may collect your name, contact number, email address, company name, job title, business address, website URL, marketing preferences, and payment or billing details where applicable.",
          "For compliance and verification purposes, and where required by law, we may request identity or business verification documents.",
        ],
      },
      {
        title: "B. Automated information",
        paragraphs: [
          "To make our Site and Services more useful, our servers (which may be hosted by third-party providers) may collect browser type, operating system, Internet Protocol (IP) address, device identifiers, domain name, referring URLs, pages viewed, and date/time of visit.",
          "We use this information to maintain security, improve performance, understand how visitors use our website, and enhance our Services. This data is generally not used to identify you personally unless combined with other information or required for security or legal purposes.",
        ],
      },
      {
        title: "Location information",
        paragraphs: [
          "We may derive approximate location from IP address or device settings to help secure accounts, prevent fraud, and deliver region-appropriate content or support.",
        ],
      },
      {
        title: "Third-party information",
        paragraphs: [
          "We may receive information about you from affiliates, analytics providers, advertising partners, CRM systems, and other sources. We treat such information in accordance with this policy. Third-party services integrated with our Site have their own privacy practices; we encourage you to review their policies.",
        ],
      },
      {
        title: "Cookies and similar technologies",
        paragraphs: [
          "We use cookies, pixels, and similar technologies to remember preferences, analyse traffic, measure campaign performance, and improve user experience. Categories include:",
        ],
        list: [
          "Operationally necessary — required for security, authentication, and core site functions.",
          "Performance related — to understand usage patterns and improve our Services.",
          "Functionality related — to remember preferences and enhance presentation.",
          "Advertising or targeting related — to deliver relevant content and measure effectiveness, where permitted.",
        ],
      },
      {
        paragraphs: [
          "You may block, delete, or disable cookies through your browser or device settings, though some features may not function properly.",
        ],
      },
    ],
  },
  {
    id: "purpose",
    title: "3. Purpose of Collecting Information",
    blocks: [
      {
        paragraphs: ["We use the information we collect for purposes including:"],
        orderedList: [
          "To personalise your experience and deliver content and offerings aligned with your interests.",
          "To operate, maintain, and improve our website and Services.",
          "To respond to enquiries, provide customer support, and fulfil contractual obligations.",
          "To administer promotions, surveys, or communications you opt into.",
          "To process transactions and manage accounts.",
          "To understand preferences, demographics, and product usage.",
          "To detect, prevent, and investigate fraud, abuse, or security incidents.",
          "To comply with applicable laws, regulations, and lawful requests.",
        ],
      },
      {
        paragraphs: [
          "We collect and process personal information only for purposes that are reasonable and legitimate, or with your consent where required.",
        ],
      },
    ],
  },
  {
    id: "disclosure",
    title: "4. Disclosure",
    blocks: [
      {
        paragraphs: [
          "We may disclose personal information to trusted service providers who assist with hosting, analytics, payment processing, communications, or professional services, subject to confidentiality and data-protection obligations.",
          "We may also disclose information when required by law, to protect our rights, or in connection with a merger, acquisition, or business transfer, with appropriate safeguards.",
          "We do not sell your personal information. Where disclosure to a third party is material, we aim to inform you of the purpose through this policy or at the point of collection.",
        ],
      },
    ],
  },
  {
    id: "third-party",
    title: "5. Third-Party Websites",
    blocks: [
      {
        paragraphs: [
          "Our Site may contain links to third-party websites, platforms, or services. We do not control their content or privacy practices and are not responsible for them. Visiting third-party sites is at your own risk; please review their privacy policies.",
        ],
      },
    ],
  },
  {
    id: "disclaimers",
    title: "6. Disclaimers",
    blocks: [
      {
        paragraphs: [
          "We are an entity operating in India, and this Privacy Policy is intended to align with applicable Indian law, including the Information Technology Act, 2000 and rules framed thereunder, and the Digital Personal Data Protection Act, 2023, as applicable.",
          "Rights available to you may vary based on your jurisdiction and the nature of data processed.",
        ],
      },
    ],
  },
  {
    id: "rights",
    title: "7. Your Rights",
    blocks: [
      {
        paragraphs: ["Subject to applicable law, you may have the right to:"],
        orderedList: [
          "Access and receive a copy of personal information we hold about you.",
          "Request correction of inaccurate or incomplete information.",
          "Request erasure of personal information in certain circumstances.",
          "Restrict or object to certain processing activities.",
          "Withdraw consent where processing is consent-based.",
          "Receive information in a structured, commonly used, machine-readable format where applicable.",
        ],
      },
      {
        paragraphs: [
          `To exercise these rights, contact us at ${privacyPolicyMeta.contactEmail}. We will respond within a reasonable period as required by law.`,
        ],
      },
    ],
  },
  {
    id: "security",
    title: "8. Security",
    blocks: [
      {
        paragraphs: [
          "We implement reasonable technical, administrative, and organisational measures designed to protect personal information against unauthorised access, alteration, disclosure, or destruction, commensurate with the nature of the data and our business.",
          "No method of transmission over the Internet or electronic storage is completely secure; we cannot guarantee absolute security.",
        ],
      },
    ],
  },
  {
    id: "retention",
    title: "9. Data Storage and Retention",
    blocks: [
      {
        paragraphs: [
          "We store data on servers located in India or other jurisdictions where our service providers operate. We retain personal information only as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements.",
          `If you wish to delete your account or request that we stop using your information for certain purposes, contact us at ${privacyPolicyMeta.contactEmail}. We will respond within a reasonable time. We may retain information where required to comply with legal obligations, resolve disputes, or enforce agreements.`,
        ],
      },
    ],
  },
  {
    id: "grievance",
    title: "10. Grievance Officer",
    blocks: [
      {
        paragraphs: [
          "Questions, concerns, or grievances regarding the collection and processing of personal information may be directed to our Grievance Officer. We will endeavour to address grievances expeditiously and within timelines prescribed under applicable law.",
        ],
      },
    ],
  },
  {
    id: "compliance",
    title: "11. Compliance",
    blocks: [
      {
        paragraphs: [
          "We review our privacy practices periodically to promote compliance with this policy and applicable law. Instances of non-compliance are documented and addressed through appropriate internal processes.",
        ],
      },
    ],
  },
  {
    id: "change-of-purpose",
    title: "12. Change of Purpose",
    blocks: [
      {
        paragraphs: [
          "We use personal information only for purposes compatible with those for which it was collected, unless you consent otherwise or applicable law permits a different use. If we need to use your data for an unrelated purpose, we will update this notice and explain the legal basis.",
        ],
      },
    ],
  },
  {
    id: "changes",
    title: "13. Changes to This Privacy Policy",
    blocks: [
      {
        paragraphs: [
          "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the Site after changes constitutes acceptance of the revised policy.",
        ],
      },
    ],
  },
  {
    id: "governing-law",
    title: "14. Governing Law and Jurisdiction",
    blocks: [
      {
        paragraphs: [
          "This Privacy Policy is governed by the laws of India. Courts in India shall have exclusive jurisdiction over disputes arising from or relating to this policy, subject to applicable law.",
        ],
      },
    ],
  },
];
