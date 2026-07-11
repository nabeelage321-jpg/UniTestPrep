import { EXAMS } from "@/lib/exams"
import { SECTION_PAGES } from "@/lib/content/section-pages"
import { SUPPORTING_PAGES } from "@/lib/content/supporting-pages"
import { UNIVERSITY_PAGES } from "@/lib/content/university-pages"

export const SITE_URL = "https://clearsit.vercel.app"

export function buildSitemapUrls() {
  const urls = new Set<string>()

  urls.add(`${SITE_URL}/`)
  urls.add(`${SITE_URL}/which-test-do-i-need`)
  urls.add(`${SITE_URL}/finder`)

  urls.add(`${SITE_URL}/test/lnat`)
  urls.add(`${SITE_URL}/test/tmua`)
  urls.add(`${SITE_URL}/test/tara`)
  urls.add(`${SITE_URL}/test/elat`)

  SECTION_PAGES.forEach((page) => urls.add(`${SITE_URL}/section/${page.slug}`))
  UNIVERSITY_PAGES.forEach((page) => urls.add(`${SITE_URL}/university/${page.slug}`))
  SUPPORTING_PAGES.forEach((page) => urls.add(`${SITE_URL}/guide/${page.slug}`))

  return Array.from(urls)
}

export function buildSitemapXml(urls: string[]) {
  const body = urls
    .map(
      (url) => `  <url>\n    <loc>${url}</loc>\n  </url>`,
    )
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clearsit",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    sameAs: ["https://twitter.com/clearsit"],
  }
}

export function faqPageSchema(url: string, faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function educationalCredentialSchema(exam: {
  name: string
  fullName: string
  oneLiner: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: exam.fullName,
    description: exam.oneLiner,
    credentialCategory: "Admissions test",
    educationalCredentialAwarded: exam.name,
  }
}
