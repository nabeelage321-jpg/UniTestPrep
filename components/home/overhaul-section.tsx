import Link from "next/link"
import { ArrowRight, Info } from "lucide-react"

import { Button } from "@/components/ui/button"

const changes = [
  {
    course: "Maths & Computer Science (Oxford)",
    before: "MAT",
    after: "TMUA",
  },
  {
    course: "PPE, Economics & Management (Oxford)",
    before: "TSA",
    after: "TARA",
  },
  {
    course: "History & other humanities (Oxford)",
    before: "TSA / subject tests",
    after: "TARA",
  },
]

export function OverhaulSection() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.1fr] md:items-center md:py-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-3 py-1 text-xs font-medium text-accent-foreground">
            <Info className="size-3.5" />
            January 2026 changes
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Oxford changed its admissions tests. Here&apos;s what that means for you.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From the January 2026 cycle, Oxford <strong className="font-semibold text-foreground">discontinued the MAT and the TSA</strong>.
            If you&apos;re revising from older guides or a teacher&apos;s notes, you
            may be preparing for a test that no longer exists.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The good news: the skills didn&apos;t change, only the papers did. The{" "}
            <strong className="font-semibold text-foreground">TMUA</strong> now
            covers maths and computer science, and the new{" "}
            <strong className="font-semibold text-foreground">TARA</strong>{" "}
            covers PPE and the humanities.
          </p>
          <Button className="mt-7" size="lg" render={<Link href="/which-test-do-i-need" />}>
            Check which test your course needs now
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 border-b border-border pb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>Course</span>
            <span className="text-right">Used to be</span>
            <span className="text-right">Now</span>
          </div>
          <ul className="divide-y divide-border">
            {changes.map((c) => (
              <li
                key={c.course}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 py-4"
              >
                <span className="text-sm font-medium text-foreground">
                  {c.course}
                </span>
                <span className="justify-self-end rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground line-through">
                  {c.before}
                </span>
                <span className="justify-self-end rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                  {c.after}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Cambridge and other universities were already using the TMUA and
            LNAT — those haven&apos;t changed.
          </p>
        </div>
      </div>
    </section>
  )
}
