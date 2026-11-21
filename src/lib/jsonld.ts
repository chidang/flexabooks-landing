import { FAQ } from '../data/faq';
import { PLANS } from '../data/pricing';

export function softwareJsonLd(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FlexaBooks',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Phần mềm kế toán',
    operatingSystem: 'Web',
    inLanguage: 'vi',
    url: site.toString(),
    offers: PLANS.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      price: p.pricePerYear,
      priceCurrency: 'VND',
      priceSpecification: { '@type': 'UnitPriceSpecification', price: p.pricePerYear, priceCurrency: 'VND', unitText: 'năm', valueAddedTaxIncluded: false },
      url: new URL('/bang-gia', site).toString(),
    })),
  };
}

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
