# v0 by Vercel — Combined "Build the Whole App" Prompt
## Paste this once, in a single v0 Project, to generate all 4 screens with one shared design system

---

## The prompt

```
Build a multi-page Next.js web application for a free UK university admissions test practice
platform. The audience is 16-19 year old UK sixth-form students preparing for high-stakes
entrance exams (LNAT for law, TMUA for maths/CS, TARA for PPE/humanities, ELAT for English)
required by Oxford, Cambridge, and other top UK universities.

TONE AND DESIGN DIRECTION (apply consistently across every page):
Calm, credible, and quietly confident — this audience is already stressed about exams and
university applications. Avoid anything corporate/generic-SaaS or childish/gamified. Think "a
knowledgeable older student who's already been through this," not a faceless edtech company.

Avoid default AI-generated design patterns: no cream background with terracotta accent, no dark
mode with a single neon accent, no newspaper-style hairline-rule layout. Use a palette that feels
academic but approachable — a deep navy or ink-blue base paired with a warm, human accent color
(not orange/terracotta), a clean serif or slab-serif for headlines, and a highly readable
sans-serif for body text. Establish this design system once and apply it identically across
every page below — same colors, same type scale, same spacing rhythm, same component style.
Fully responsive and mobile-first throughout.

Use Next.js (App Router), Tailwind CSS, and shadcn/ui for all pages. Use recharts (or similar)
for any data visualization.

BUILD THESE PAGES/SCREENS, sharing one layout, navigation, and design system:

1. HOMEPAGE (/)
   - Hero section: headline centered on confidence-before-test-day, not generic "ace your exam"
     language. Single clear CTA: "Take a free [test name] practice test"
   - Four cards below the fold, one per exam (LNAT, TMUA, TARA, ELAT), each with a one-line
     description of what it tests and who needs it
   - A short section addressing the January 2026 Oxford admissions test overhaul directly
     (MAT and TSA discontinued, replaced by TMUA and TARA) — this is a current, high-confusion
     topic worth resolving clearly on the homepage
   - Footer listing relevant universities: Oxford, Cambridge, Imperial, LSE, UCL

2. TEST-TAKING INTERFACE (/test/[examId] or similar dynamic route)
   - Persistent header: test name, question number out of total, live countdown timer (visible
     but not anxiety-inducing — no aggressive flashing red)
   - Main question area supporting both multiple-choice (with passage/stimulus text shown
     alongside) and long-form written response modes
   - Question navigator (grid or sidebar) showing answered/unanswered/flagged questions,
     clickable to jump between them
   - "Flag for review" per question
   - Clear Next/Previous navigation, no accidental submit
   - Final review screen before submission showing unanswered/flagged questions
   - Minimal distractions, generous whitespace, no decorative animation during the test itself
     (motion reserved for page transitions only) — this needs to feel serious and exam-like
   - Prioritize desktop/tablet layout here specifically, since full mocks are mostly taken at a
     desk, though it should still work on mobile

3. RESULTS / DIAGNOSTIC DASHBOARD (/results/[attemptId] or similar)
   - Overall score prominently displayed with a percentile comparison against other test-takers
   - Section-by-section breakdown (e.g. for LNAT: Reading Comprehension, Critical Thinking,
     Logical Reasoning) shown visually — bar chart or radar chart
   - A "what to focus on next" card generated from weak areas, in plain, encouraging language
   - Email-capture moment after the free summary: "Get your full detailed breakdown + a second
     practice test" — should feel like a natural next step, not an aggressive paywall interrupt
   - Shareable/downloadable PDF option for parents or school counselors
   - Tone: encouraging and specific, never generic — show the student something real about their
     performance, not just "well done!"

4. "WHICH TEST DO I NEED?" FINDER (/which-test-do-i-need)
   - Step 1: "Which university are you applying to?" (Oxford, Cambridge, Imperial, LSE, UCL,
     Warwick, Other) — selectable cards, not a dropdown, since this is often a Google-search
     landing page and needs to feel immediate
   - Step 2: course selection, filtered by Step 1's answer
   - Result card: required test name, one-line explanation of what it tests, registration
     deadline and sitting window, and a callout if the course used to require a now-discontinued
     test (e.g. "This course used to require the MAT. That changed in January 2026 — you now
     need the TMUA.") — resolving this exact confusion is the tool's whole purpose
   - Two CTAs at the end: "Take the free [test] practice test" and "See full [university]
     requirements"
   - Should feel fast, reassuring, and authoritative — a confused, anxious visitor should leave
     with total clarity in under 20 seconds

SHARED NAVIGATION: a persistent header/nav across all pages (logo, links to each exam, the
finder tool, and a "Start free test" CTA) so the whole app feels like one cohesive product, not
four separate pages bolted together.

Build all four as connected pages within this one project, sharing the same design tokens,
component library, and navigation — not as four independent designs.
```

---

## Why this version is better than running the 4 prompts separately

- One shared design system gets established up front and applied everywhere, instead of you manually reconciling four different outputs afterward
- v0 can generate an entire multi-page application with routing and shared layouts from one request — this prompt is written to use exactly that capability
- You get real internal navigation between the pages immediately, which you'd otherwise have to wire up by hand if the four screens came from separate chats

## After v0 generates this

1. Review each page inside the v0 preview — iterate in the same chat ("make the timer less alarming," "tighten spacing on the result cards," etc.) before exporting anything
2. Once you're happy, export the whole project via GitHub sync or the "Add to codebase" CLI command into your real Next.js repo
3. Hand off to Claude Code from there, using the kickoff prompt file, to wire up the actual scoring engine, database, and scale the page templates across all ~54 pages in the full site architecture
