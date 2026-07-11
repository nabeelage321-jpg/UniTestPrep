import { notFound } from "next/navigation"

import { EXAMS, type ExamId } from "@/lib/exams"
import { QUESTIONS } from "@/lib/questions"
import { TestRunner } from "@/components/test/test-runner"

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

  return <TestRunner exam={EXAMS[exam]} questions={QUESTIONS[exam]} />
}
