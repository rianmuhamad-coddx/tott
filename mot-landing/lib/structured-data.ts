export interface FAQItem {
  question: string;
  answer: string;
}

const siteUrl = "https://mot.id";

const description =
  "MOT is a boutique agency building agentic AI systems and high-converting websites for early-stage startups. We help founders ship faster without hiring a full tech team.";

const sameAs = [
  "https://github.com/rianmuhamad-coddx/tott",
  "https://x.com/rianmuhamad",
];

/**
 * Generates JSON-LD for the Organization (NGO) schema.
 * We use `Organization` + `NGO` since MOT is not a for-profit company.
 */
export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "NGO"],
    name: "MOT",
    alternateName: "MOT Agency",
    description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs,
    foundingDate: "2025",
    nonprofitStatus: "NonprofitUBI",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "1-10",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-812-3456-7890",
      contactType: "customer service",
      email: "hello@mot.id",
      areaServed: ["ID", "US", "SG"],
      availableLanguage: ["English", "Indonesian"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Agentic AI",
      "Web Development",
      "Startup Consulting",
    ],
  };
}

/**
 * Generates JSON-LD for an FAQPage schema from an array of FAQ items.
 */
export function generateFaqJsonLd(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}