"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  ArrowUpRight,
  Clock,
  RotateCcw,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionChart } from "@/components/results/section-chart"
import { ReviewList } from "@/components/results/review-list"
import { EXAMS, type ExamId } from "@/lib/exams"
import {
  scoreAttempt,
  sampleAttempt,
  type Diagnostic,
  type StoredAttempt,
} from "@/lib/scoring"

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  if (m === 0) return `${s}s`
  return `${m}m ${s.toString().padStart(2, "0")}s`
}

export function ResultsDashboard({
  attemptId,
  examId,
}: {
  attemptId: string
  examId: ExamId
}) {
  const [diagnostic, setDiagnostic] = useState<Diagnostic | null>(null)
  const [isSample, setIsSample] = useState(false)

  useEffect(() => {
    let attempt: StoredAttempt | null = null
    try {
      const raw = sessionStorage.getItem(`clearsit:attempt:${attemptId}`)
      if (raw) attempt = JSON.parse(raw) as StoredAttempt
    } catch {
      /* ignore */
    }
    if (!attempt) {
      attempt = sampleAttempt(examId)
      setIsSample(true)
    }
    setDiagnostic(scoreAttempt(attempt))
  }, [attemptId, examId])

  const exam = EXAMS[examId]
  const searchParams = useSearchParams()
  const submitted = searchParams.get("submitted") === "true"
  const [email, setEmail] = useState("")
  const [emailStatus, setEmailStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [emailError, setEmailError] = useState<string | null>(null)

  async function saveLead() {
    setEmailError(null)
    const trimmedEmail = email.trim()
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setEmailError("Enter a valid email address.")
      return
    }

    setEmailStatus("saving")
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          examId,
          examName: exam.name,
          score: diagnostic?.bandScore,
          overallAccuracy: diagnostic?.overallAccuracy,
          bandLabel: diagnostic?.bandLabel,
          attemptId,
          timeSpent: diagnostic?.timeSpent,
          attemptedAt: Date.now(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save the lead")
      }
      setEmailStatus("saved")
    } catch (error) {
      setEmailStatus("error")
      setEmailError(
        error instanceof Error
          ? error.message
          : "Unable to save your email right now. Please try again."
      )
    }
  }

  if (!diagnostic) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="mx-auto flex w-full max-w-5xl flex-1 items-center justify-center px-4 py-24">
          <p className="text-muted-foreground">Preparing your diagnostic…</p>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const timePct = Math.min(
    100,
    Math.round((diagnostic.timeSpent / diagnostic.timeAllowed) * 100),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="font-normal">
                {exam.name} practice mock
              </Badge>
              {isSample && (
                <Badge variant="outline" className="font-normal">
                  Sample report
                </Badge>
              )}
            </div>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h1 className="text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                  Your diagnostic report
                </h1>
                <p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  {isSample
                    ? "This is a sample of the report you'll get after a real mock. Start a test to generate your own."
                    : "Here's exactly where you stand, section by section, with every question ready to review."}
                </p>
                {submitted && !isSample && (
                  <div className="mt-3 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary-foreground">
                    Success! Your answers have been submitted and your score is now ready to review.
                  </div>
                )}
                <p className="mt-3 text-sm text-muted-foreground">
                  This page is powered by browser sessionStorage right now. The result link may not work if opened in a new browser or after the session ends.
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <Button variant="outline" render={<Link href="/" />}>
                  All tests
                </Button>
                <Button render={<Link href={`/test/${examId}`} />}>
                  <RotateCcw data-icon="inline-start" />
                  Retake
                </Button>
              </div>
            </div>
          </div>

          {/* Score cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={Trophy}
              label="Scaled score"
              value={String(diagnostic.bandScore)}
              hint={diagnostic.bandLabel}
              highlight
            />
            <StatCard
              icon={Target}
              label="Accuracy"
              value={`${diagnostic.overallAccuracy}%`}
              hint={`${diagnostic.mcqCorrect} of ${diagnostic.mcqTotal} correct`}
            />
            <StatCard
              icon={TrendingUp}
              label="Completed"
              value={`${diagnostic.answeredCount}/${diagnostic.totalQuestions}`}
              hint="questions answered"
            />
            <StatCard
              icon={Clock}
              label="Time used"
              value={formatDuration(diagnostic.timeSpent)}
              hint={`${timePct}% of the allowance`}
            />
          </div>

          <Card className="mt-6 border border-border bg-background">
            <CardHeader>
              <CardTitle>Save your score</CardTitle>
              <CardDescription>
                Capture your email and save this result for follow-up support.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <div className="grid gap-2">
                <label className="text-sm font-medium text-foreground" htmlFor="result-email">
                  Email address
                </label>
                <input
                  id="result-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {emailError && (
                  <p className="text-sm text-destructive">{emailError}</p>
                )}
                {emailStatus === "saved" && (
                  <p className="text-sm text-primary">
                    Saved. We’ve recorded your email and score for follow-up.
                  </p>
                )}
              </div>
              <div className="flex items-end">
                <Button
                  onClick={saveLead}
                  disabled={emailStatus === "saving" || emailStatus === "saved"}
                >
                  {emailStatus === "saving"
                    ? "Saving…"
                    : emailStatus === "saved"
                    ? "Saved"
                    : "Save my score"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Chart + insights */}
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <Card>
              <CardHeader>
                <CardTitle>Section balance</CardTitle>
                <CardDescription>
                  Accuracy across each assessed skill area.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {diagnostic.sections.some((s) => s.scored) ? (
                  <SectionChart
                    sections={diagnostic.sections.filter((s) => s.scored)}
                  />
                ) : (
                  <p className="py-8 text-center text-sm text-muted-foreground">
                    This paper is essay-based, so there&apos;s no auto-scored
                    section breakdown.
                  </p>
                )}
              </CardContent>
            </Card>

            <div className="flex flex-col gap-6">
              <InsightCard
                title="Playing to your strengths"
                tone="strength"
                sections={diagnostic.strengths}
                empty="Answer a few scored questions to see your strengths."
              />
              <InsightCard
                title="Where to focus next"
                tone="focus"
                sections={diagnostic.focusAreas}
                empty="Nothing flagged yet — keep practising to surface weak spots."
              />
            </div>
          </div>

          {/* Section breakdown bars */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Section breakdown</CardTitle>
              <CardDescription>
                How you performed in each part of the {exam.name}.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              {diagnostic.sections.map((s) => (
                <div key={s.name} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{s.name}</span>
                    {s.scored ? (
                      <span className="tabular-nums text-muted-foreground">
                        {s.correct}/{s.total} · {s.accuracy}%
                      </span>
                    ) : (
                      <span className="text-muted-foreground">Human-marked</span>
                    )}
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all",
                        s.scored ? "bg-primary" : "bg-accent",
                      )}
                      style={{ width: `${s.scored ? s.accuracy : 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Review */}
          <div className="mt-10">
            <Tabs defaultValue="all">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    Review every question
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Expand any question to see the correct answer and your response.
                  </p>
                </div>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="incorrect">Incorrect</TabsTrigger>
                  <TabsTrigger value="flagged">Flagged</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-5">
                <ReviewList reviews={diagnostic.reviews} />
              </TabsContent>
              <TabsContent value="incorrect" className="mt-5">
                <FilteredReviews
                  reviews={diagnostic.reviews.filter((r) => r.correct === false)}
                  emptyMessage="No incorrect answers — well done."
                />
              </TabsContent>
              <TabsContent value="flagged" className="mt-5">
                <FilteredReviews
                  reviews={diagnostic.reviews.filter((r) => r.flagged)}
                  emptyMessage="You didn't flag any questions this time."
                />
              </TabsContent>
            </Tabs>
          </div>

          {/* Next step */}
          <Card className="mt-10 border-primary/20 bg-primary/5">
            <CardContent className="flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Turn this into a plan
                </h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Focus your next session on {diagnostic.focusAreas[0]?.name ?? "your weaker sections"} and
                  retake the mock in a week to measure progress.
                </p>
              </div>
              <Button render={<Link href={`/test/${examId}`} />}>
                Start another mock
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

function FilteredReviews({
  reviews,
  emptyMessage,
}: {
  reviews: Diagnostic["reviews"]
  emptyMessage: string
}) {
  if (reviews.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-muted/30 p-10 text-center text-sm text-muted-foreground">
        {emptyMessage}
      </div>
    )
  }
  return <ReviewList reviews={reviews} />
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  hint: string
  highlight?: boolean
}) {
  return (
    <Card className={cn(highlight && "border-primary/30 bg-primary/5")}>
      <CardContent className="flex flex-col gap-2 py-5">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon className="size-4" />
          <span className="text-xs font-medium uppercase tracking-wide">
            {label}
          </span>
        </div>
        <p className="font-serif text-3xl font-semibold text-foreground tabular-nums">
          {value}
        </p>
        <p className="text-sm text-muted-foreground">{hint}</p>
      </CardContent>
    </Card>
  )
}

function InsightCard({
  title,
  tone,
  sections,
  empty,
}: {
  title: string
  tone: "strength" | "focus"
  sections: Diagnostic["sections"]
  empty: string
}) {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {sections.length === 0 ? (
          <p className="text-sm text-muted-foreground">{empty}</p>
        ) : (
          sections.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
            >
              <span className="text-sm font-medium text-foreground">
                {s.name}
              </span>
              <Badge
                variant={tone === "strength" ? "secondary" : "outline"}
                className={cn(
                  "tabular-nums font-normal",
                  tone === "focus" && "border-accent/50 text-accent-foreground",
                )}
              >
                {s.accuracy}%
              </Badge>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}
