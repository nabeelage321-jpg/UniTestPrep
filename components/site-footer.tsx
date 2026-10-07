import Link from "next/link"

import { Logo } from "@/components/logo"
import { EXAM_LIST } from "@/lib/exams"
import { SECTION_PAGES } from "@/lib/content/section-pages"
import { SUPPORTING_PAGES } from "@/lib/content/supporting-pages"
import { UNIVERSITY_PAGES } from "@/lib/content/university-pages"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Free, realistic practice for the UK university admissions tests
              that matter — so you walk into test day calm and prepared, not
              guessing.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Practice tests</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {EXAM_LIST.map((exam) => (
                <li key={exam.id}>
                  <Link
                    href={`/test/${exam.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {exam.name} — {exam.forSubject}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/which-test-do-i-need"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Which test do I need?
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Section guides</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SECTION_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/section/${page.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Universities</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {UNIVERSITY_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/university/${page.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {page.universityName} — {page.courseName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Applicant guides</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SUPPORTING_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/guide/${page.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Clearsit. An independent study resource.</p>
          <p>
            Not affiliated with any university or official admissions test
            provider.
          </p>
        </div>
      </div>
    </footer>
  )
}
