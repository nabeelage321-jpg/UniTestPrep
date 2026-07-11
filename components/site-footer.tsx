import Link from "next/link"

import { Logo } from "@/components/logo"
import { EXAM_LIST } from "@/lib/exams"

const universities = [
  "University of Oxford",
  "University of Cambridge",
  "Imperial College London",
  "LSE",
  "UCL",
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
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
            <h2 className="text-sm font-semibold text-foreground">
              Built for applicants to
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {universities.map((u) => (
                <li key={u} className="text-sm text-muted-foreground">
                  {u}
                </li>
              ))}
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
