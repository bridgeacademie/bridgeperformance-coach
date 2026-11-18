// Gedeelde SEO-gegevens voor bridgeperformance.nl (NL) en bridgeperformance.coach (EN).
// Dit bestand staat in beide repo's identiek; pas het in beide aan.

export const SITES = {
  nl: 'https://www.bridgeperformance.nl',
  en: 'https://www.bridgeperformance.coach',
} as const;

export const ACADEMIE = 'https://bridgeacademie.nl';
export const LINKEDIN = 'https://www.linkedin.com/in/richard-ritmeijer-8831b210/';
export const WBF_PROFILE = 'https://db.worldbridge.org/Repository/peopleforscrap/person.asp?qryid=3510';

// Pagina's die in beide talen bestaan: NL-pad -> EN-pad.
const PAGE_PAIRS: Array<[string, string]> = [
  ['/', '/'],
  ['/over-mij/', '/about/'],
  ['/coaching/', '/coaching/'],
  ['/privacyverklaring/', '/privacy-policy/'],
  ['/algemene-voorwaarden/', '/terms-conditions/'],
  ['/herroepingsrecht/', '/right-of-withdrawal/'],
];

const withSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`);

/** hreflang-links voor het huidige pad, of [] als de pagina maar in één taal bestaat. */
export function alternates(lang: 'nl' | 'en', pathname: string) {
  const path = withSlash(pathname);
  const pair = PAGE_PAIRS.find(([nl, en]) => (lang === 'nl' ? nl : en) === path);
  if (!pair) return [];
  const [nl, en] = pair;
  return [
    { hreflang: 'nl', href: SITES.nl + nl },
    { hreflang: 'en', href: SITES.en + en },
    { hreflang: 'x-default', href: SITES.en + en },
  ];
}

const PERSON_ID = `${SITES.en}/#richard`;
const ORG_ID = `${SITES.en}/#bridge-performance`;

const TEXT = {
  nl: {
    personDescription:
      'Richard Ritmeijer is wereldkampioen bridge (WK Gemengde Viertallen 2016, Wrocław) en winnaar van de Champions Cup 2017. Hij is bridgedocent sinds 2000 en coacht spelers, paren en teams van clubniveau tot internationale top, op locatie en online.',
    jobTitle: 'Bridgecoach, bridgedocent en bridgeprofessional',
    orgDescription:
      'Bridge Performance van wereldkampioen Richard Ritmeijer: persoonlijke bridgecoaching (online en op locatie), inhuur als bridgeprofessional bij toernooien, en via Bridge Academie themalessen, cursussen en clinics voor bridgeclubs.',
    services: [
      'Persoonlijke bridgecoaching (online en op locatie)',
      'Inhuur als bridgeprofessional / partner bij toernooien',
      'Themalessen, cursussen en clinics voor bridgeclubs (Bridge Academie)',
    ],
    knowsAbout: ['Bridge (kaartspel)', 'Bridgecoaching', 'Bridgeles', 'Bieden', 'Afspelen', 'Tegenspel', 'Jeugdbridge'],
  },
  en: {
    personDescription:
      'Richard Ritmeijer is a world bridge champion (World Mixed Teams 2016, Wrocław) and winner of the 2017 Champions Cup. He has taught bridge since 2000 and coaches players, partnerships and teams from club level to international level, online and in person.',
    jobTitle: 'Bridge coach, bridge teacher and bridge professional',
    orgDescription:
      'Bridge Performance by world champion Richard Ritmeijer: private bridge coaching online for players worldwide, hiring as a professional partner at tournaments, and online bridge lessons and courses.',
    services: [
      'Private online bridge coaching',
      'Professional bridge partner for tournaments',
      'Online bridge lessons and courses',
    ],
    knowsAbout: ['Contract bridge', 'Bridge coaching', 'Bridge teaching', 'Bidding', 'Declarer play', 'Defence', 'Youth bridge'],
  },
} as const;

/** Volledige JSON-LD-graaf (persoon, organisatie, website) voor een pagina. */
export function schemaGraph(lang: 'nl' | 'en') {
  const t = TEXT[lang];
  const site = SITES[lang];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Richard Ritmeijer',
        url: site,
        image: `${site}/images/richard-portret.webp`,
        jobTitle: t.jobTitle,
        description: t.personDescription,
        award: [
          'World Bridge Champion, Mixed Teams – World Bridge Federation (2016, Wrocław)',
          'Champions Cup winner (2017)',
          'World International Master',
        ],
        knowsAbout: t.knowsAbout,
        knowsLanguage: ['nl', 'en'],
        nationality: { '@type': 'Country', name: 'Netherlands' },
        homeLocation: { '@type': 'Place', name: 'Zwolle, Netherlands' },
        memberOf: { '@type': 'Organization', name: 'European Bridge League – Youth Committee' },
        worksFor: { '@id': ORG_ID },
        sameAs: [LINKEDIN, WBF_PROFILE, SITES.nl, SITES.en, ACADEMIE],
      },
      {
        '@type': 'ProfessionalService',
        '@id': ORG_ID,
        name: 'Bridge Performance',
        alternateName: ['Bridge Performance – Richard Ritmeijer', 'Bridge Academie', 'Bridge Academy'],
        url: site,
        logo: `${site}/favicon.svg`,
        image: `${site}/images/og-image.jpg`,
        description: t.orgDescription,
        founder: { '@id': PERSON_ID },
        address: { '@type': 'PostalAddress', addressLocality: 'Zwolle', addressCountry: 'NL' },
        areaServed: { '@type': 'Place', name: 'Worldwide' },
        availableLanguage: ['nl', 'en'],
        vatID: 'NL001994665B72',
        identifier: { '@type': 'PropertyValue', propertyID: 'KvK', value: '63322498' },
        sameAs: [SITES.nl, SITES.en, ACADEMIE],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: lang === 'nl' ? 'Aanbod' : 'Services',
          itemListElement: t.services.map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name, provider: { '@id': PERSON_ID } },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site}/#website`,
        url: site,
        name: 'Bridge Performance',
        inLanguage: lang,
        publisher: { '@id': ORG_ID },
      },
    ],
  };
}
