# UK Admissions Test Prep Platform — Phase-by-Phase Project Roadmap
## The master execution plan. Follow in order — don't skip ahead.

Reference files: `agent.md` (spec), `v0-combined-prompt.md` (design), `claude-code-full-build-prompts.md` (build)

---

## PHASE 0 — Accounts & Setup (do this first, ~1 day)

- [ ] GitHub account (free) — create the repo
- [ ] Vercel account (free) — connects to GitHub for hosting/deploy
- [ ] Supabase **or** Neon account (free tier) — your Postgres database
- [ ] Resend or SendGrid account (free tier) — email capture
- [ ] Groq account at console.groq.com (free, no card) — generate API key, save it, do not commit it to git
- [ ] v0.app account (free tier, $5/mo credit)
- [ ] **Decide your named author/reviewer identity** — required per agent.md Section 6 (E-E-A-T). Real name, real credentials or clear positioning (e.g. "reviewed by a UK sixth-form graduate/tutor"). This blocks Phase 6 and 7 later, decide it now so it's not a last-minute scramble.
- [ ] **Do NOT buy a domain yet** — build on your free `*.vercel.app` subdomain until Phase 8

**Exit condition:** all accounts created, Groq key saved locally, author identity decided.

---

## PHASE 1 — Design (v0) — ~1-3 days

- [ ] Paste the combined prompt from `v0-combined-prompt.md` into a single v0 project
- [ ] Review all 4 generated screens (homepage, test interface, results dashboard, finder tool)
- [ ] Iterate inside the same v0 chat until the design system feels consistent and non-generic — check against the "avoid AI slop" direction in the prompt
- [ ] Export the full project into your local repo folder via GitHub sync or "Add to codebase" CLI

**Exit condition:** you have a real Next.js folder with 4 designed-but-not-yet-functional screens, pushed to GitHub.

---

## PHASE 2 — Claude Code Orientation + Finder Tool — ~2-4 days

- [ ] Open the repo in VS Code with Claude Code extension active
- [ ] Run **Prompt 1** (Orientation) from `claude-code-full-build-prompts.md`
- [ ] Review its summary — confirm it correctly understands what v0 already built vs what's missing
- [ ] Run **Prompt 2** (Finder Tool) — this is your fastest-to-ship, highest-early-value feature
- [ ] Test the finder tool locally (`npm run dev`) — click through every university/course combination, confirm the "used to require X, now requires Y" callout displays correctly
- [ ] Deploy to Vercel on your free subdomain, confirm it works live

**Exit condition:** `/which-test-do-i-need` is live and fully functional on your `*.vercel.app` subdomain. This alone can start capturing search traffic while you build the rest.

---

## PHASE 3 — TMUA + TARA Mock Test Engine — ~1-2 weeks (your hardest, highest-priority build)

- [ ] Run **Prompt 3** from `claude-code-full-build-prompts.md`
- [ ] Confirm Groq API key is wired in `.env.local` and question generation actually calls it successfully
- [ ] Test the full flow end-to-end: start test → timer counts down correctly → answer questions → submit → see results with section breakdown
- [ ] **Do not publish yet** — every AI-generated question needs human review before going live (flagged `reviewed_by: null` per the prompt). Review and correct the initial question bank yourself, or get your named reviewer to sign off.
- [ ] Deploy and test live

**Exit condition:** a complete, human-reviewed TMUA and TARA mock test are live and working — this is your first-mover differentiator, per agent.md Section 14.

---

## PHASE 4 — LNAT + ELAT Mock Tests — ~1 week (faster, reuses Phase 3 infrastructure)

- [ ] Run **Prompt 4**
- [ ] Confirm LNAT has no paywall/teaser gate before the full test — this is your stated differentiation vs Lexcello/Exams Ninja per Section 3.5
- [ ] Human-review all AI-generated questions before publishing
- [ ] Deploy and test live

**Exit condition:** all 4 mock tests (LNAT, TMUA, TARA, ELAT) are live, reviewed, and working.

---

## PHASE 5 — Section/Skill Practice Pages — ~1-2 weeks

- [ ] Run **Prompt 5**
- [ ] Spot-check a sample of pages for genuine uniqueness (not template-swapped) per the 60% rule in Section 6
- [ ] Deploy incrementally, don't dump all ~16 pages live untested at once

**Exit condition:** ~16 section/skill pages live, each linking back to its relevant mock test.

---

## PHASE 6 — University-Requirement Pages — ~1-2 weeks (highest thin-content risk, go slow)

- [ ] Run **Prompt 6**
- [ ] Manually verify the "unique data point per page" requirement is actually met — this is the cluster most likely to get flagged by Google's scaled-content detection if rushed
- [ ] Confirm real registration deadlines are accurate and sourced, not guessed
- [ ] Attach your named author/reviewer (decided in Phase 0) to these pages

**Exit condition:** ~14 university-requirement pages live, each with real unique data, none template-identical.

---

## PHASE 7 — Supporting/Comparison Content — ~1 week (build last, per agent.md)

- [ ] Run **Prompt 7**
- [ ] Provide your author bio/credentials when Claude Code pauses to ask for it (per the prompt's instruction)
- [ ] Review comparison pages for genuine original insight, not AI-generic "X vs Y" filler

**Exit condition:** all ~54 pages from the original site architecture are live.

---

## PHASE 8 — Go Live for Real (domain + tracking) — ~2-3 days

- [ ] **Now** buy your domain (~$8-12/year) — this is the point where the small spend is justified, since you have a working product to point it at
- [ ] Connect the domain to Vercel
- [ ] Set up Google Search Console, submit your sitemap
- [ ] Set up Google Analytics
- [ ] Verify all schema markup (FAQ, Course, HowTo) is rendering correctly using Google's Rich Results Test

**Exit condition:** the real, branded domain is live with tracking in place.

---

## PHASE 9 — Monetization — start once you have real traffic, not before

- [ ] Apply for Google AdSense (needs live content to review — do this only after Phase 8)
- [ ] Research and apply to UK tutoring/prep company affiliate programs
- [ ] Consider Groq's paid Developer tier (still free, just add a card) if you're hitting the 30 req/min rate limit from real traffic

**Exit condition:** at least one monetization channel active.

---

## PHASE 10 — Phase 2 Expansion (only after Phase 1-9 are validated)

- [ ] Revisit ESAT (flagged as strong Phase 2 candidate in agent.md Section 2)
- [ ] Revisit UCAT (only once you have real domain authority to compete with Medify/Medic Mind)
- [ ] Build the net-new Tier 3 tools from the feature spec: Application Timeline Tracker, Interview Simulator, Personal Statement Critique tool

---

## Rules to follow throughout (don't skip these)

1. **Never publish AI-generated questions without human review** — every question bank entry needs `reviewed_by` filled in before going live
2. **Never let Claude Code batch-generate template-swapped pages** — if it starts producing structurally identical content with just names changed, stop it (Prompts 6 explicitly instructs it to flag this itself)
3. **Deploy incrementally, not all-at-once** — test each phase live before moving to the next
4. **Keep `/compact` and `/context` habits going** in Claude Code as the codebase grows across phases
5. **Bring blockers back to this chat** — research questions, stuck errors, new competitor checks, copy help

---

## Realistic timeline estimate

Phases 0-8 (full working site, all 4 exams, live domain): **roughly 6-10 weeks** for a solo builder working part-time, faster if you can dedicate full days. Given the October 2026 TMUA/TARA sitting window, prioritize getting Phase 0-3 done fast — the finder tool and TMUA/TARA mocks live — even if Phases 5-7 take longer to follow.
