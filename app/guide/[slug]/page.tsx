import { notFound } from "next/navigation"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SUPPORTING_PAGES, getSupportingPageBySlug } from "@/lib/content/supporting-pages"

export function generateStaticParams() {
  return SUPPORTING_PAGES.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const page = getSupportingPageBySlug(slug)
    if (!page) return { title: "Guide · Clearsit" }
    return {
      title: `${page.title} · Clearsit`,
      description: page.intro,
    }
  })
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getSupportingPageBySlug(slug)
  if (!page) notFound()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-sm font-medium text-muted-foreground">Guide</p>
            <h1 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {page.title}
            </h1>
            <p className="mt-3 text-sm font-medium text-muted-foreground">{page.pageType}</p>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{page.intro}</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-14">
            {page.bodySections.map((section) => (
              <article key={section.heading} className="rounded-3xl border border-border bg-card p-8">
                <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{section.content}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-background p-6">
            <h3 className="text-lg font-semibold text-foreground">About the author</h3>
            <p className="mt-3 text-sm font-medium text-foreground">{page.authorName}</p>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{page.authorBio}</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
