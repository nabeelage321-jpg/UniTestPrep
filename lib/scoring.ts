import { EXAMS, type ExamId } from "./exams"
import { QUESTIONS, type Question } from "./questions"

export type StoredAttempt = {
  examId: ExamId
  answers: Record<string, number | string>
  flagged: string[]
  timeSpent: number
  submittedAt: number
}

export type SectionResult = {
  name: string
  correct: number
  total: number
  /** 0–100 accuracy for scored (MCQ) questions */
  accuracy: number
  /** whether this section is scored automatically */
  scored: boolean
}

export type QuestionReview = {
  question: Question
  response: number | string | undefined
  correct: boolean | null // null for essays / unscored
  flagged: boolean
}

export type Diagnostic = {
  examId: ExamId
  examName: string
  answeredCount: number
  totalQuestions: number
  mcqCorrect: number
  mcqTotal: number
  overallAccuracy: number // 0–100 over scored questions
  bandScore: number // exam-style scaled score
  bandLabel: string
  timeSpent: number
  timeAllowed: number
  sections: SectionResult[]
  strengths: SectionResult[]
  focusAreas: SectionResult[]
  reviews: QuestionReview[]
  hasEssay: boolean
}

/** Derive the exam id from an attempt id of the form `${examId}-xxxxxx`. */
export function examIdFromAttempt(attemptId: string): ExamId | null {
  const prefix = attemptId.split("-")[0]
  if (prefix in EXAMS) return prefix as ExamId
  return null
}

function bandFor(examId: ExamId, accuracy: number): { score: number; label: string } {
  // Convert accuracy (0–100) into an exam-flavoured scaled score.
  switch (examId) {
    case "tmua": {
      // TMUA reports 1.0–9.0
      const score = Math.round((1 + (accuracy / 100) * 8) * 10) / 10
      const label =
        score >= 6.5 ? "Competitive" : score >= 5 ? "Solid" : "Developing"
      return { score, label }
    }
    case "lnat": {
      // LNAT Section A is out of 42
      const score = Math.round((accuracy / 100) * 42)
      const label =
        accuracy >= 70 ? "Strong" : accuracy >= 50 ? "On track" : "Developing"
      return { score, label }
    }
    default: {
      // TARA / others reported roughly on a 0–100 scaled band
      const score = Math.round(40 + (accuracy / 100) * 60)
      const label =
        accuracy >= 70 ? "Strong" : accuracy >= 50 ? "On track" : "Developing"
      return { score, label }
    }
  }
}

export function scoreAttempt(attempt: StoredAttempt): Diagnostic {
  const exam = EXAMS[attempt.examId]
  const questions = QUESTIONS[attempt.examId]
  const flaggedSet = new Set(attempt.flagged)

  const sectionMap = new Map<string, { correct: number; total: number; scored: boolean }>()
  const reviews: QuestionReview[] = []

  let mcqCorrect = 0
  let mcqTotal = 0
  let answeredCount = 0
  let hasEssay = false

  for (const q of questions) {
    const response = attempt.answers[q.id]
    const answered =
      response !== undefined && response !== "" && !(typeof response === "string" && !response.trim())
    if (answered) answeredCount += 1

    const entry =
      sectionMap.get(q.section) ?? { correct: 0, total: 0, scored: true }

    if (q.type === "mcq") {
      mcqTotal += 1
      entry.total += 1
      const isCorrect = response === q.answer
      if (isCorrect) {
        mcqCorrect += 1
        entry.correct += 1
      }
      reviews.push({ question: q, response, correct: isCorrect, flagged: flaggedSet.has(q.id) })
    } else {
      hasEssay = true
      entry.scored = false
      reviews.push({ question: q, response, correct: null, flagged: flaggedSet.has(q.id) })
    }
    sectionMap.set(q.section, entry)
  }

  const sections: SectionResult[] = Array.from(sectionMap.entries()).map(
    ([name, v]) => ({
      name,
      correct: v.correct,
      total: v.total,
      accuracy: v.total ? Math.round((v.correct / v.total) * 100) : 0,
      scored: v.scored && v.total > 0,
    }),
  )

  const overallAccuracy = mcqTotal ? Math.round((mcqCorrect / mcqTotal) * 100) : 0
  const { score: bandScore, label: bandLabel } = bandFor(attempt.examId, overallAccuracy)

  const scoredSections = sections.filter((s) => s.scored)
  const sorted = [...scoredSections].sort((a, b) => b.accuracy - a.accuracy)
  const strengths = sorted.slice(0, Math.min(2, sorted.length))
  const focusAreas = [...scoredSections]
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, Math.min(2, scoredSections.length))

  return {
    examId: attempt.examId,
    examName: exam.name,
    answeredCount,
    totalQuestions: questions.length,
    mcqCorrect,
    mcqTotal,
    overallAccuracy,
    bandScore,
    bandLabel,
    timeSpent: attempt.timeSpent,
    timeAllowed: exam.durationMinutes * 60,
    sections,
    strengths,
    focusAreas,
    reviews,
    hasEssay,
  }
}

/** A deterministic sample attempt, used when someone lands on results without a stored attempt. */
export function sampleAttempt(examId: ExamId): StoredAttempt {
  const questions = QUESTIONS[examId]
  const answers: Record<string, number | string> = {}
  questions.forEach((q, i) => {
    if (q.type === "mcq") {
      // Get roughly two-thirds right in a repeatable pattern.
      answers[q.id] = i % 3 === 0 ? (q.answer + 1) % q.options.length : q.answer
    } else {
      answers[q.id] =
        "This is a sample response saved so you can preview the diagnostic report layout."
    }
  })
  return {
    examId,
    answers,
    flagged: [questions[1]?.id].filter(Boolean) as string[],
    timeSpent: Math.round(EXAMS[examId].durationMinutes * 60 * 0.7),
    submittedAt: Date.now(),
  }
}
