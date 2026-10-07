import Script from "next/script"
import { notFound } from "next/navigation"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SECTION_PAGES, getSectionPageBySlug } from "@/lib/content/section-pages"
import { SUPPORTING_PAGES } from "@/lib/content/supporting-pages"
import { UNIVERSITY_PAGES } from "@/lib/content/university-pages"
import { EXAMS } from "@/lib/exams"
import { faqPageSchema, SITE_URL } from "@/lib/seo"

export function generateStaticParams() {
  return SECTION_PAGES.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const page = getSectionPageBySlug(slug)
    if (!page) return { title: "Practice section · Clearsit" }
    return {
      title: `${page.title} · Clearsit`,
      description: page.description ?? page.intro,
    }
  })
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getSectionPageBySlug(slug)
  if (!page) notFound()

  const faqSchema = page.faqs?.length
    ? faqPageSchema(`${SITE_URL}/section/${page.slug}`, page.faqs)
    : null

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {faqSchema ? (
          <Script id={`${page.slug}-faq-schema`} type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </Script>
        ) : null}

        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-sm font-medium text-muted-foreground">Practice section</p>
            <h1 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {page.title}
            </h1>
            {page.subtitle && (
              <p className="mt-3 text-lg font-semibold text-foreground">
                {page.subtitle}
              </p>
            )}
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              {page.intro}
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-14">
            {page.bodySections.map((section) => (
              <article key={section.heading} className="rounded-3xl border border-border bg-card p-8">
                <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </article>
            ))}
          </div>

          {page.faqs && page.faqs.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-semibold text-foreground">FAQs</h2>
              <div className="mt-8 space-y-6">
                {page.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-3xl border border-border bg-background p-6">
                    <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                    <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {page.relatedExamIds && page.relatedExamIds.length > 0 && (
            <div className="mt-16 rounded-3xl border border-border bg-secondary/10 p-8">
              <h2 className="text-2xl font-semibold text-foreground">Related exams</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {page.relatedExamIds.map((examId) => {
                  const exam = EXAMS[examId as keyof typeof EXAMS]
                  return (
                    <a
                      key={exam.id}
                      href={`/test/${exam.id}`}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/50 hover:text-primary"
                    >
                      {exam.name}
                    </a>
                  )
                })}
              </div>
            </div>
          )}
          {(() => {
            const examKey = page.slug.split("-")[0]
            const siblings = SECTION_PAGES.filter(
              (p) => p.slug !== page.slug && p.slug.startsWith(examKey),
            ).slice(0, 6)
            const unis = UNIVERSITY_PAGES.filter(
              (u) => u.examId && page.relatedExamIds?.includes(u.examId),
            ).slice(0, 5)
            const guides = SUPPORTING_PAGES.slice(0, 3)
            if (siblings.length === 0 && unis.length === 0) return null
            return (
              <div className="mt-16 rounded-3xl border border-border bg-secondary/10 p-8">
                <h2 className="text-2xl font-semibold text-foreground">Keep preparing</h2>
                <div className="mt-4 grid gap-8 md:grid-cols-3">
                  {siblings.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">More section guides</h3>
                      <ul className="mt-3 flex flex-col gap-2">
                        {siblings.map((p) => (
                          <li key={p.slug}>
                            <a href={`/section/${p.slug}`} className="text-sm text-muted-foreground transition hover:text-foreground">
                              {p.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {unis.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">University requirements</h3>
                      <ul className="mt-3 flex flex-col gap-2">
                        {unis.map((u) => (
                          <li key={u.slug}>
                            <a href={`/university/${u.slug}`} className="text-sm text-muted-foreground transition hover:text-foreground">
                              {u.universityName} — {u.courseName}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Applicant guides</h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {guides.map((g) => (
                        <li key={g.slug}>
                          <a href={`/guide/${g.slug}`} className="text-sm text-muted-foreground transition hover:text-foreground">
                            {g.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })()}
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
