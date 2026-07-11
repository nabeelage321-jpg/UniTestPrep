import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { allBlogPosts } from "@/lib/content/blog-posts"

export default async function BlogIndexPage() {
  const posts = allBlogPosts()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-sm font-medium text-muted-foreground">Blog</p>
            <h1 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Clearsit Blog
            </h1>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">Latest updates and insights.</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-6">
            {posts.map((p) => (
              <article key={p.id} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground">
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h2>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{p.authorName} — {p.date}</p>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
