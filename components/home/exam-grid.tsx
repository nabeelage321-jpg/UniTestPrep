import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EXAM_LIST } from "@/lib/exams"

export function ExamGrid() {
  return (
    <section id="practice" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Start with the test you need
        </h2>
        <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">
          Each paper is different. Pick yours below — every practice test is
          free and mirrors the real format and timing.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {EXAM_LIST.map((exam) => (
          <Card
            key={exam.id}
            className="group flex flex-col transition-shadow hover:shadow-md"
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="font-serif text-2xl">{exam.name}</CardTitle>
                <Badge variant="secondary" className="font-normal">
                  {exam.forSubject}
                </Badge>
              </div>
              <CardDescription className="text-base text-foreground/80">
                {exam.oneLiner}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Who needs it: </span>
                {exam.whoNeedsIt}
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3.5" />
                {exam.durationMinutes} min · {exam.format}
              </p>
            </CardContent>
            <CardFooter className="justify-between border-t border-border pt-4">
              <Link
                href={`/test/${exam.id}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-primary"
              >
                Take the free {exam.name} test
                <ArrowUpRight className="size-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
