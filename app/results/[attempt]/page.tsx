import { notFound } from "next/navigation"

import { examIdFromAttempt } from "@/lib/scoring"
import { ResultsDashboard } from "@/components/results/results-dashboard"

export const metadata = {
  title: "Your diagnostic report · Clearsit",
  description:
    "A clear, section-by-section breakdown of your admissions test mock with every question ready to review.",
}

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ attempt: string }>
}) {
  const { attempt } = await params
  const examId = examIdFromAttempt(attempt)
  if (!examId) notFound()

  return <ResultsDashboard attemptId={attempt} examId={examId} />
}
