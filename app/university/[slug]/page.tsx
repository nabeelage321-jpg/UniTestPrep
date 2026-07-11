import { notFound } from "next/navigation"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { UNIVERSITY_PAGES, getUniversityPageBySlug } from "@/lib/content/university-pages"
import { EXAMS } from "@/lib/exams"

export function generateStaticParams() {
  return UNIVERSITY_PAGES.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const page = getUniversityPageBySlug(slug)
    if (!page) return { title: "University requirement · Clearsit" }
    return {
      title: `${page.universityName} — ${page.courseName} · Clearsit`,
      description: page.body ?? `${page.courseName} requirement page`,
    }
  })
}

export default async function UniversityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getUniversityPageBySlug(slug)
  if (!page) notFound()

  const exam = page.examId ? EXAMS[page.examId as keyof typeof EXAMS] : null

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-sm font-medium text-muted-foreground">University requirement</p>
            <h1 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {page.universityName}
            </h1>
            <p className="mt-2 text-lg font-semibold text-foreground">{page.courseName}</p>
            {exam && (
              <a href={`/test/${exam.id}`} className="mt-3 inline-block text-sm text-primary">
                {exam.name}
              </a>
            )}
            <div className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {page.registrationDeadline && <p><strong>Registration deadline: </strong>{page.registrationDeadline}</p>}
              {page.sittingWindow && <p><strong>Sitting window: </strong>{page.sittingWindow}</p>}
            </div>
            {page.callout && (
              <div className="mt-6 rounded-2xl border border-amber-400 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-700">{page.callout}</p>
              </div>
            )}
            <p className="mt-6 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{page.body}</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
