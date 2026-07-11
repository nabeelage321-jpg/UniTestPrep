import { notFound } from "next/navigation"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/content/blog-posts"

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const post = getBlogPostBySlug(slug)
    if (!post) return { title: "Blog · Clearsit" }
    return {
      title: `${post.title} · Clearsit`,
      description: post.excerpt,
    }
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-sm font-medium text-muted-foreground">Blog</p>
            <h1 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm font-medium text-muted-foreground">{post.authorName} — {post.date}</p>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-10">
            {post.bodySections.map((section) => (
              <article key={section.heading} className="rounded-3xl border border-border bg-card p-8">
                <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{section.content}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
