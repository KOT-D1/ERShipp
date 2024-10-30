import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "ERShip",
  tagline: "La automatización en la recolección",
  description: "El Barco realiza una inspección para determinar en donde estara la basura en su area de recolección.",
  description_short: "El Barco que limpia la zona en la que el este.",
  url: "https://screwfast.uk",
  author: "Kevin Osorio Thurman",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_CR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Creacion de un recolector autonomo`,
  description: "El Barco realiza una inspección para determinar en donde estara la basura en su area de recolección",
  image: ogImageSrc,
};
