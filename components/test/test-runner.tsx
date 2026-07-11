"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  LayoutGrid,
  Timer,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Logo } from "@/components/logo"
import { QuestionNavigator, getStatus } from "@/components/test/question-navigator"
import type { Exam } from "@/lib/exams"
import type { Question } from "@/lib/questions"

type Answers = Record<string, number | string>

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function TestRunner({
  exam,
  questions,
}: {
  exam: Exam
  questions: Question[]
}) {
  const router = useRouter()
  const total = questions.length

  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [secondsLeft, setSecondsLeft] = useState(exam.durationMinutes * 60)
  const [reviewing, setReviewing] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  const answeredCount = useMemo(
    () =>
      questions.filter((q) => getStatus(q, answers, flagged) === "answered")
        .length,
    [questions, answers, flagged],
  )
  const flaggedList = useMemo(
    () => questions.filter((q) => flagged.has(q.id)),
    [questions, flagged],
  )
  const unansweredList = useMemo(
    () =>
      questions.filter(
        (q) => getStatus(q, answers, flagged) === "unanswered",
      ),
    [questions, answers, flagged],
  )

  const setAnswer = useCallback((id: string, value: number | string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }, [])

  const toggleFlag = useCallback((id: string) => {
    setFlagged((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const jumpTo = useCallback((index: number) => {
    setReviewing(false)
    setCurrent(index)
    setNavOpen(false)
    if (typeof window !== "undefined") window.scrollTo({ top: 0 })
  }, [])

  const handleSubmit = useCallback(() => {
    const attemptId = `${exam.id}-${Math.random().toString(36).slice(2, 8)}`
    const payload = {
      examId: exam.id,
      answers,
      flagged: Array.from(flagged),
      timeSpent: exam.durationMinutes * 60 - secondsLeft,
      submittedAt: Date.now(),
    }
    try {
      sessionStorage.setItem(
        `clearsit:attempt:${attemptId}`,
        JSON.stringify(payload),
      )
    } catch {
      /* sessionStorage unavailable — results page will fall back to a sample */
    }
    router.push(`/results/${attemptId}`)
  }, [exam.id, exam.durationMinutes, answers, flagged, secondsLeft, router])

  // Countdown timer
  useEffect(() => {
    if (secondsLeft <= 0) return
    const t = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1))
    }, 1000)
    return () => clearInterval(t)
  }, [secondsLeft])

  const timeLow = secondsLeft <= 300
  const question = questions[current]
  const progressPct = Math.round((answeredCount / total) * 100)

  return (
    <div className="flex min-h-screen flex-col bg-muted/30">
      {/* Persistent header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-2.5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex items-center justify-between gap-4 md:justify-start">
            <Link href="/" aria-label="Clearsit home" className="hidden sm:block">
              <Logo />
            </Link>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="font-normal">
                {exam.name} · Practice mock
              </Badge>
            </div>
            <div className="md:hidden">
              <TimerPill seconds={secondsLeft} low={timeLow} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="min-w-0 flex-1 md:w-56 md:flex-none">
              <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  Question {current + 1} of {total}
                </span>
                <span>{answeredCount} answered</span>
              </div>
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuenow={progressPct}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            <div className="hidden md:block">
              <TimerPill seconds={secondsLeft} low={timeLow} />
            </div>

            <Button
              variant="outline"
              className="hidden md:inline-flex"
              onClick={() => setReviewing(true)}
            >
              Review &amp; submit
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl flex-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_280px]">
        <div className="min-w-0">
          {reviewing ? (
            <ReviewPanel
              total={total}
              answeredCount={answeredCount}
              unanswered={unansweredList.length}
              flaggedCount={flaggedList.length}
              questions={questions}
              answers={answers}
              flagged={flagged}
              onJump={jumpTo}
              onBack={() => setReviewing(false)}
              onSubmit={handleSubmit}
            />
          ) : (
            <QuestionCard
              key={question.id}
              index={current}
              total={total}
              question={question}
              value={answers[question.id]}
              flagged={flagged.has(question.id)}
              onAnswer={(v) => setAnswer(question.id, v)}
              onToggleFlag={() => toggleFlag(question.id)}
            />
          )}

          {/* Bottom navigation */}
          {!reviewing && (
            <div className="sticky bottom-0 mt-6 flex items-center justify-between gap-3 border-t border-border bg-background/95 py-3 backdrop-blur">
              <Button
                variant="outline"
                disabled={current === 0}
                onClick={() => jumpTo(current - 1)}
              >
                <ChevronLeft data-icon="inline-start" />
                Previous
              </Button>

              <div className="flex items-center gap-2">
                <Dialog open={navOpen} onOpenChange={setNavOpen}>
                  <DialogTrigger
                    render={
                      <Button variant="ghost" className="lg:hidden" />
                    }
                  >
                    <LayoutGrid data-icon="inline-start" />
                    Questions
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Question navigator</DialogTitle>
                      <DialogDescription>
                        Jump to any question. Flagged and unanswered questions
                        are highlighted.
                      </DialogDescription>
                    </DialogHeader>
                    <QuestionNavigator
                      questions={questions}
                      current={current}
                      answers={answers}
                      flagged={flagged}
                      onJump={jumpTo}
                    />
                  </DialogContent>
                </Dialog>

                {current === total - 1 ? (
                  <Button onClick={() => setReviewing(true)}>
                    Review &amp; submit
                  </Button>
                ) : (
                  <Button onClick={() => jumpTo(current + 1)}>
                    Next
                    <ChevronRight data-icon="inline-end" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar navigator (desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-5">
            <h2 className="text-sm font-semibold text-foreground">
              Question navigator
            </h2>
            <p className="mb-4 mt-1 text-xs text-muted-foreground">
              Click a number to jump. Flag anything you want to revisit.
            </p>
            <QuestionNavigator
              questions={questions}
              current={current}
              answers={answers}
              flagged={flagged}
              onJump={jumpTo}
            />
            <Button
              variant="outline"
              className="mt-5 w-full"
              onClick={() => setReviewing(true)}
            >
              Review &amp; submit
            </Button>
          </div>
        </aside>
      </main>
    </div>
  )
}

function TimerPill({ seconds, low }: { seconds: number; low: boolean }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium tabular-nums",
        low
          ? "border-accent/60 bg-accent/15 text-accent-foreground"
          : "border-border bg-card text-foreground",
      )}
      aria-live="off"
    >
      <Timer className="size-4" />
      {formatTime(seconds)}
      <span className="sr-only">remaining</span>
    </div>
  )
}

function QuestionCard({
  index,
  total,
  question,
  value,
  flagged,
  onAnswer,
  onToggleFlag,
}: {
  index: number
  total: number
  question: Question
  value: number | string | undefined
  flagged: boolean
  onAnswer: (value: number | string) => void
  onToggleFlag: () => void
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {question.section}
          </p>
          <h1 className="mt-1 font-serif text-xl font-semibold text-foreground">
            Question {index + 1}
            <span className="font-sans text-sm font-normal text-muted-foreground">
              {" "}
              / {total}
            </span>
          </h1>
        </div>
        <Button
          variant={flagged ? "secondary" : "ghost"}
          size="sm"
          onClick={onToggleFlag}
          aria-pressed={flagged}
        >
          <Flag
            data-icon="inline-start"
            className={cn(flagged && "fill-accent text-accent")}
          />
          {flagged ? "Flagged" : "Flag for review"}
        </Button>
      </div>

      {question.passage && (
        <div className="mt-6 rounded-lg border border-border bg-muted/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {question.type === "essay" ? "Task material" : "Passage"}
          </p>
          <p className="mt-2 whitespace-pre-line text-[0.95rem] leading-relaxed text-foreground">
            {question.passage}
          </p>
        </div>
      )}

      <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground">
        {question.prompt}
      </p>

      {question.type === "mcq" ? (
        <RadioGroup
          className="mt-5 gap-2.5"
          value={typeof value === "number" ? String(value) : undefined}
          onValueChange={(v) => onAnswer(Number(v))}
        >
          {question.options.map((opt, i) => {
            const selected = value === i
            return (
              <label
                key={i}
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-lg border p-4 text-[0.95rem] leading-relaxed transition-colors",
                  selected
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-background hover:bg-muted/60",
                )}
              >
                <RadioGroupItem value={String(i)} className="mt-0.5" />
                <span className="flex gap-2 text-foreground">
                  <span className="font-medium text-muted-foreground">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {opt}
                </span>
              </label>
            )
          })}
        </RadioGroup>
      ) : (
        <EssayAnswer
          value={typeof value === "string" ? value : ""}
          guidance={question.guidance}
          onChange={(text) => onAnswer(text)}
        />
      )}
    </div>
  )
}

function EssayAnswer({
  value,
  guidance,
  onChange,
}: {
  value: string
  guidance?: string
  onChange: (text: string) => void
}) {
  const words = value.trim() ? value.trim().split(/\s+/).length : 0
  return (
    <div className="mt-5">
      {guidance && (
        <p className="mb-3 rounded-lg border border-border bg-muted/40 p-3 text-sm leading-relaxed text-muted-foreground">
          {guidance}
        </p>
      )}
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your response here…"
        className="min-h-72 resize-y text-[0.95rem] leading-relaxed"
      />
      <p className="mt-2 text-right text-xs text-muted-foreground tabular-nums">
        {words} {words === 1 ? "word" : "words"}
      </p>
    </div>
  )
}

function ReviewPanel({
  total,
  answeredCount,
  unanswered,
  flaggedCount,
  questions,
  answers,
  flagged,
  onJump,
  onBack,
  onSubmit,
}: {
  total: number
  answeredCount: number
  unanswered: number
  flaggedCount: number
  questions: Question[]
  answers: Record<string, number | string>
  flagged: Set<string>
  onJump: (index: number) => void
  onBack: () => void
  onSubmit: () => void
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-serif text-2xl font-semibold text-foreground">
          Before you submit
        </h1>
        <Button variant="ghost" size="icon-sm" onClick={onBack} aria-label="Back to test">
          <X />
        </Button>
      </div>
      <p className="mt-1 text-muted-foreground">
        Take a moment to check anything you left blank or flagged. You can jump
        straight back to any question.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <SummaryStat label="Answered" value={`${answeredCount} / ${total}`} tone="ok" />
        <SummaryStat label="Not answered" value={String(unanswered)} tone={unanswered ? "warn" : "ok"} />
        <SummaryStat label="Flagged for review" value={String(flaggedCount)} tone={flaggedCount ? "flag" : "ok"} />
      </div>

      <div className="mt-6">
        <h2 className="mb-3 text-sm font-semibold text-foreground">
          Jump to a question
        </h2>
        <QuestionNavigator
          questions={questions}
          current={-1}
          answers={answers}
          flagged={flagged}
          onJump={onJump}
        />
      </div>

      <div className="mt-7 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
        <Button variant="outline" onClick={onBack}>
          Keep working
        </Button>
        <Button onClick={onSubmit}>Submit test &amp; see results</Button>
      </div>
    </div>
  )
}

function SummaryStat({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone: "ok" | "warn" | "flag"
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        tone === "ok" && "border-border bg-muted/40",
        tone === "warn" && "border-accent/50 bg-accent/10",
        tone === "flag" && "border-accent/50 bg-accent/10",
      )}
    >
      <p className="font-serif text-2xl font-semibold text-foreground tabular-nums">
        {value}
      </p>
      <p className="mt-0.5 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
