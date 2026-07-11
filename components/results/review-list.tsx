"use client"

import { Check, Flag, Minus, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { QuestionReview } from "@/lib/scoring"

export function ReviewList({ reviews }: { reviews: QuestionReview[] }) {
  return (
    <Accordion className="w-full">
      {reviews.map((r, i) => {
        const q = r.question
        const isMcq = q.type === "mcq"
        return (
          <AccordionItem key={q.id} value={q.id}>
            <AccordionTrigger className="gap-3 text-left">
              <span className="flex flex-1 items-center gap-3">
                <StatusDot correct={r.correct} />
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-foreground">
                    Question {i + 1}
                    <span className="ml-2 font-normal text-muted-foreground">
                      {q.section}
                    </span>
                  </span>
                </span>
                {r.flagged && (
                  <Badge variant="secondary" className="ml-auto mr-2 gap-1 font-normal">
                    <Flag className="size-3 fill-accent text-accent" />
                    Flagged
                  </Badge>
                )}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4 pt-1">
                {q.passage && (
                  <p className="whitespace-pre-line rounded-lg border border-border bg-muted/40 p-3 text-sm leading-relaxed text-muted-foreground">
                    {q.passage}
                  </p>
                )}
                <p className="text-pretty font-medium text-foreground">
                  {q.prompt}
                </p>

                {isMcq ? (
                  <ul className="flex flex-col gap-2">
                    {q.options.map((opt, oi) => {
                      const isAnswer = oi === q.answer
                      const isChosen = r.response === oi
                      return (
                        <li
                          key={oi}
                          className={cn(
                            "flex items-start gap-2 rounded-lg border p-3 text-sm leading-relaxed",
                            isAnswer && "border-primary/40 bg-primary/5",
                            isChosen && !isAnswer && "border-destructive/40 bg-destructive/5",
                            !isAnswer && !isChosen && "border-border",
                          )}
                        >
                          <span className="font-medium text-muted-foreground">
                            {String.fromCharCode(65 + oi)}.
                          </span>
                          <span className="flex-1 text-foreground">{opt}</span>
                          {isAnswer && (
                            <Badge variant="secondary" className="gap-1 font-normal">
                              <Check className="size-3" />
                              Correct
                            </Badge>
                          )}
                          {isChosen && !isAnswer && (
                            <Badge variant="outline" className="gap-1 font-normal text-destructive">
                              <X className="size-3" />
                              Your answer
                            </Badge>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="rounded-lg border border-border bg-muted/40 p-3">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Your response
                      </p>
                      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-foreground">
                        {typeof r.response === "string" && r.response.trim()
                          ? r.response
                          : "No response written."}
                      </p>
                    </div>
                    {q.guidance && (
                      <div className="rounded-lg border border-accent/40 bg-accent/10 p-3">
                        <p className="text-xs font-medium uppercase tracking-wide text-accent-foreground">
                          What examiners look for
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground">
                          {q.guidance}
                        </p>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Essays are read and marked by a human assessor, so this
                      response isn&apos;t auto-scored.
                    </p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

function StatusDot({ correct }: { correct: boolean | null }) {
  if (correct === null) {
    return (
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <Minus className="size-3.5" />
      </span>
    )
  }
  return (
    <span
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-full",
        correct
          ? "bg-primary/10 text-primary"
          : "bg-destructive/10 text-destructive",
      )}
    >
      {correct ? <Check className="size-3.5" /> : <X className="size-3.5" />}
    </span>
  )
}
