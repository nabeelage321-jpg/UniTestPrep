import Script from "next/script"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TestFinder } from "@/components/finder/test-finder"
import { faqPageSchema, SITE_URL } from "@/lib/seo"

const FINDER_FAQS = [
  {
    question: "Which admissions test does this tool support?",
    answer:
      "This tool covers the current UK admissions tests including LNAT, TMUA, TARA and ELAT, using the latest 2026/2027 guidance.",
  },
  {
    question: "How many questions do I need to answer?",
    answer:
      "You answer two quick questions about your course and university preferences, and we suggest the most likely test requirement.",
  },
  {
    question: "Is the recommendation updated for the latest Oxford and UCL changes?",
    answer:
      "Yes. The tool reflects the January 2026 reforms such as Oxford moving from TSA to TARA and from MAT to TMUA.",
  },
]

export const metadata = {
  title: "Which admissions test do I need? · Clearsit",
  description:
    "Answer two quick questions to find out exactly which UK university admissions test your course requires — including recent changes like the TSA becoming the TARA.",
}

export default function FinderPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Script id="finder-faq-schema" type="application/ld+json">
          {JSON.stringify(faqPageSchema(`${SITE_URL}/finder`, FINDER_FAQS))}
        </Script>

        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-sm font-medium text-muted-foreground">
              Test finder
            </p>
            <h1 className="mt-2 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Which test do I actually need?
            </h1>
            <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              The admissions testing landscape changed a lot for 2026 — the TSA
              became the TARA and the MAT gave way to the TMUA at Oxford. Answer
              two quick questions and we&apos;ll point you to the right one.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
          <TestFinder />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
