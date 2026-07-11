import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="size-3.5 text-accent" />
            Free practice · No account needed to start
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            Know what test day feels like — before you&apos;re sitting it.
          </h1>

          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Full-length, realistic practice for the LNAT, TMUA, TARA and ELAT.
            Sit a timed paper under real conditions, then get a clear,
            honest breakdown of where you stand and what to work on next.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="h-11 px-5 text-base" render={<Link href="/test/lnat" />}>
              Take a free LNAT practice test
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="h-11 px-4 text-base"
              render={<Link href="/which-test-do-i-need" />}
            >
              Not sure which test?
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Trusted preparation for applicants to Oxford, Cambridge, Imperial,
            LSE and UCL.
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/hero-desk.png"
              alt="A calm study desk beside a window in warm morning light"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden max-w-[15rem] rounded-xl border border-border bg-card p-4 shadow-sm sm:block">
            <p className="font-serif text-2xl font-semibold text-foreground">4 exams</p>
            <p className="mt-1 text-sm text-muted-foreground">
              covering Law, Maths &amp; CS, PPE and English.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
