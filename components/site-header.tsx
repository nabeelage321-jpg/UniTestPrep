"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { EXAM_LIST } from "@/lib/exams"

const navExams = EXAM_LIST.map((e) => ({
  label: e.name,
  href: `/test/${e.id}`,
}))

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const linkClass = (active: boolean) =>
    cn(
      "text-sm font-medium transition-colors hover:text-foreground",
      active ? "text-foreground" : "text-muted-foreground",
    )

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Clearsit home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <span className="flex items-center gap-4">
            {navExams.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(pathname === item.href)}
              >
                {item.label}
              </Link>
            ))}
          </span>
          <span className="h-4 w-px bg-border" aria-hidden="true" />
          <Link
            href="/which-test-do-i-need"
            className={linkClass(pathname === "/which-test-do-i-need")}
          >
            Which test do I need?
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button size="lg" render={<Link href="/which-test-do-i-need" />}>
            Start free test
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav
            className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            <p className="px-2 pb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Practice tests
            </p>
            {navExams.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/which-test-do-i-need"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Which test do I need?
            </Link>
            <Button
              size="lg"
              className="mt-2"
              render={<Link href="/which-test-do-i-need" onClick={() => setOpen(false)} />}
            >
              Start free test
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
