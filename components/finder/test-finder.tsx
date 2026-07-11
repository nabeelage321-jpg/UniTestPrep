"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CircleAlert, Compass, Info, RotateCcw } from "lucide-react"

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
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  EXAMS,
  UNIVERSITIES,
  coursesForUniversity,
  type CourseRequirement,
} from "@/lib/exams"

export function TestFinder() {
  const [universityId, setUniversityId] = useState<string | null>(null)
  const [course, setCourse] = useState<CourseRequirement | null>(null)

  const courses = universityId ? coursesForUniversity(universityId) : []
  const step = course ? 3 : universityId ? 2 : 1

  function reset() {
    setUniversityId(null)
    setCourse(null)
  }

  return (
    <div className="flex flex-col gap-6">
      <Stepper step={step} />

      {/* Step 1: university */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              1
            </span>
            Where are you applying?
          </CardTitle>
          <CardDescription>
            Pick the university you&apos;re most interested in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {UNIVERSITIES.map((u) => (
              <button
                key={u.id}
                type="button"
                onClick={() => {
                  setUniversityId(u.id)
                  setCourse(null)
                }}
                aria-pressed={universityId === u.id}
                className={cn(
                  "rounded-lg border p-3 text-left text-sm font-medium transition-colors",
                  universityId === u.id
                    ? "border-primary/50 bg-primary/5 text-foreground"
                    : "border-border bg-background text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                {u.short}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step 2: course */}
      {universityId && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                2
              </span>
              Which course?
            </CardTitle>
            <CardDescription>
              Select the subject you plan to study.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {courses.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCourse(c)}
                  aria-pressed={course?.id === c.id}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-lg border p-3 text-left text-sm transition-colors",
                    course?.id === c.id
                      ? "border-primary/50 bg-primary/5"
                      : "border-border bg-background hover:bg-muted/60",
                  )}
                >
                  <span className="font-medium text-foreground">{c.course}</span>
                  {c.examId ? (
                    <Badge variant="secondary" className="font-normal">
                      {EXAMS[c.examId].name}
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="font-normal">
                      Varies
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: result */}
      {course && <ResultPanel course={course} onReset={reset} />}
    </div>
  )
}

function ResultPanel({
  course,
  onReset,
}: {
  course: CourseRequirement
  onReset: () => void
}) {
  const exam = course.examId ? EXAMS[course.examId] : null

  return (
    <Card className="border-primary/25 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            3
          </span>
          Your result
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {exam ? (
          <>
            <div>
              <p className="text-sm text-muted-foreground">
                For <span className="font-medium text-foreground">{course.course}</span>, you&apos;ll need the
              </p>
              <p className="mt-1 font-serif text-3xl font-semibold text-foreground">
                {exam.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {exam.fullName} — {exam.oneLiner}
              </p>
            </div>

            {course.discontinued && (
              <Alert>
                <CircleAlert />
                <AlertTitle>
                  Heads up: this replaced the {course.discontinued.was}
                </AlertTitle>
                <AlertDescription>
                  {course.discontinued.detail} If you&apos;re working from older
                  materials, practise for the {exam.name} instead.
                </AlertDescription>
              </Alert>
            )}

            {course.note && (
              <Alert>
                <Info />
                <AlertDescription>{course.note}</AlertDescription>
              </Alert>
            )}

            <div className="grid gap-3 sm:grid-cols-3">
              <MiniFact label="Format" value={exam.format} />
              <MiniFact label="Registration by" value={exam.registrationDeadline} />
              <MiniFact label="Sitting" value={exam.sittingWindow} />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button render={<Link href={`/test/${exam.id}`} />}>
                Start a {exam.name} mock
                <ArrowRight data-icon="inline-end" />
              </Button>
              <Button variant="outline" onClick={onReset}>
                <RotateCcw data-icon="inline-start" />
                Start over
              </Button>
            </div>
          </>
        ) : (
          <>
            <div>
              <p className="font-serif text-2xl font-semibold text-foreground">
                No single test — yet
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {course.note}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" render={<Link href="/" />}>
                Browse all tests
              </Button>
              <Button variant="ghost" onClick={onReset}>
                <RotateCcw data-icon="inline-start" />
                Start over
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}

function MiniFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background p-3">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
    </div>
  )
}

function Stepper({ step }: { step: number }) {
  const labels = ["University", "Course", "Your test"]
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
      <Compass className="size-4 text-muted-foreground" />
      {labels.map((label, i) => {
        const n = i + 1
        const active = step >= n
        return (
          <div key={label} className="flex items-center gap-2">
            {i > 0 && <span className="text-muted-foreground/50">/</span>}
            <span
              className={cn(
                "font-medium",
                active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
