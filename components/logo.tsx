import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M7 9.2V13c0 1.5 2.2 2.8 5 2.8s5-1.3 5-2.8V9.2" />
          <path d="M21 7v5" />
        </svg>
      </span>
      <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
        Clearsit
      </span>
    </span>
  )
}
