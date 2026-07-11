"use client"

import { Flag } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Question } from "@/lib/questions"

export type QuestionStatus = "answered" | "unanswered" | "flagged"

export function getStatus(
  q: Question,
  answers: Record<string, number | string>,
  flagged: Set<string>,
): QuestionStatus {
  if (flagged.has(q.id)) return "flagged"
  const a = answers[q.id]
  const answered =
    q.type === "mcq"
      ? typeof a === "number"
      : typeof a === "string" && a.trim().length > 0
  return answered ? "answered" : "unanswered"
}

export function QuestionNavigator({
  questions,
  current,
  answers,
  flagged,
  onJump,
}: {
  questions: Question[]
  current: number
  answers: Record<string, number | string>
  flagged: Set<string>
  onJump: (index: number) => void
}) {
  return (
    <div>
      <div className="grid grid-cols-6 gap-2 sm:grid-cols-5">
        {questions.map((q, i) => {
          const status = getStatus(q, answers, flagged)
          const isCurrent = i === current
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onJump(i)}
              aria-current={isCurrent ? "true" : undefined}
              aria-label={`Question ${i + 1}, ${status}`}
              className={cn(
                "relative flex h-10 items-center justify-center rounded-md border text-sm font-medium transition-colors",
                status === "answered" &&
                  "border-primary/30 bg-primary/10 text-foreground",
                status === "unanswered" &&
                  "border-border bg-card text-muted-foreground hover:bg-muted",
                status === "flagged" &&
                  "border-accent/60 bg-accent/20 text-accent-foreground",
                isCurrent && "ring-2 ring-ring ring-offset-1 ring-offset-background",
              )}
            >
              {i + 1}
              {status === "flagged" && (
                <Flag className="absolute -right-1 -top-1 size-3 fill-accent text-accent" />
              )}
            </button>
          )
        })}
      </div>

      <dl className="mt-5 flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="size-3.5 rounded-sm border border-primary/30 bg-primary/10" />
          <dt className="text-muted-foreground">Answered</dt>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-3.5 rounded-sm border border-border bg-card" />
          <dt className="text-muted-foreground">Not answered</dt>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-3.5 rounded-sm border border-accent/60 bg-accent/20" />
          <dt className="text-muted-foreground">Flagged for review</dt>
        </div>
      </dl>
    </div>
  )
}
