import Script from "next/script"
import { notFound } from "next/navigation"

import { EXAMS, type ExamId } from "@/lib/exams"
import { QUESTIONS } from "@/lib/questions"
import { educationalCredentialSchema } from "@/lib/seo"
import Link from "next/link"
import { TestRunner } from "@/components/test/test-runner"
import { SECTION_PAGES } from "@/lib/content/section-pages"
import { SUPPORTING_PAGES } from "@/lib/content/supporting-pages"
import { UNIVERSITY_PAGES } from "@/lib/content/university-pages"

const VALID: ExamId[] = ["lnat", "tmua", "tara", "elat"]

function isExamId(value: string): value is ExamId {
  return (VALID as string[]).includes(value)
}

export function generateStaticParams() {
  return VALID.map((exam) => ({ exam }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ exam: string }>
}) {
  const { exam } = await params
  if (!isExamId(exam)) return { title: "Practice test · Clearsit" }
  return {
    title: `${EXAMS[exam].name} practice mock · Clearsit`,
    description: EXAMS[exam].oneLiner,
  }
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ exam: string }>
}) {
  const { exam } = await params
  if (!isExamId(exam)) notFound()

  const schema = educationalCredentialSchema(EXAMS[exam])
  const examSections = SECTION_PAGES.filter(
    (page) => page.slug.startsWith(exam) || page.relatedExamIds?.includes(exam),
  )
  const examUniversities = UNIVERSITY_PAGES.filter((page) => page.examId === exam)
  const guides = SUPPORTING_PAGES.slice(0, 4)

  return (
    <>
      <Script id={`exam-schema-${exam}`} type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      <TestRunner exam={EXAMS[exam]} questions={QUESTIONS[exam]} />
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Prepare for the {EXAMS[exam].name}
          </h2>
          <div className="mt-6 grid gap-10 md:grid-cols-3">
            {examSections.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground">Section guides</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {examSections.map((page) => (
                    <li key={page.slug}>
                      <Link href={`/section/${page.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {examUniversities.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground">Universities using the {EXAMS[exam].name}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {examUniversities.map((page) => (
                    <li key={page.slug}>
                      <Link href={`/university/${page.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {page.universityName} — {page.courseName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Applicant guides</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {guides.map((page) => (
                  <li key={page.slug}>
                    <Link href={`/guide/${page.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
